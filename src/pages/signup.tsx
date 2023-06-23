import React, { useState } from "react";
import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { useRouter } from "next/router";
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { AppStoreContext } from '../context/AppStoreContext';

interface IFormInput {
    username: string;
    email: string;
    password: string;
    code: string;
}

const Signup = observer(() => {

    const store = useContext(AppStoreContext);
    const { setNavbarOpen } = store;

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [signUpError, setSignUpError] = useState<string>("");
    const [showCode, setShowCode] = useState<boolean>(false);

    const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {

        try {

            if (showCode) {
                confirmSignUp(data);
            } else {
                await signUpWithData(data);
                setShowCode(true);
            }
        } catch (err: any) {
            console.error(err);
            setSignUpError(err.message);
            setOpen(true);
        }

    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    async function signUpWithData(data: IFormInput): Promise<CognitoUser> {
        const { username, password, email } = data;
        // eslint-disable-next-line no-useless-catch
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                }
            });
            console.log("Signed up a user: ", user);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async function confirmSignUp(data: IFormInput) {
        const { username, password, code } = data;
        try {
            await Auth.confirmSignUp(username, code);
            const amplifyUser = await Auth.signIn(username, password);
            if (amplifyUser) {
                setNavbarOpen(false);
                router.push(`/`);
            }
            else throw new Error("Something went wrong.");
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    return (

        <div style={{ paddingTop: "50px" }}>

            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

                <Grid container direction="column" alignItems="center" spacing={2} >
                    <Grid item>
                        <TextField
                            id="username"
                            label="Username"
                            type="text"
                            error={errors.username ? true : false}
                            helperText={errors.username ? errors.username.message : null}
                            {...register("username", {
                                required: { value: true, message: "Please enter a username." },
                                minLength: { value: 3, message: "Please enter a username between 3 and 16 characters." },
                                maxLength: { value: 16, message: "Please enter a username between 3 and 16 characters." },
                            })} />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            error={errors.email ? true : false}
                            helperText={errors.email ? errors.email.message : null}
                            {...register("email", {
                                required: { value: true, message: "Please enter a valid email." },
                            })} />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            error={errors.password ? true : false}
                            helperText={errors.password ? errors.password.message : null}
                            {...register("password", {
                                required: { value: true, message: "Please enter a password." },
                                minLength: { value: 8, message: "Please enter a stronger password." },
                            })} />
                    </Grid>
                    {showCode && (
                        <Grid item>
                            <TextField
                                id="code"
                                label="Verification Code"
                                type="text"
                                error={errors.code ? true : false}
                                helperText={errors.code ? errors.code.message : null}
                                {...register("code", {
                                    required: { value: true, message: "Please enter a password." },
                                    minLength: { value: 6, message: "Your verification code is 6 characters long." },
                                    maxLength: { value: 6, message: "Your verification code is 6 characters long." },
                                })} />
                        </Grid>
                    )}
                    <br />
                    <Grid>
                        <Button type="submit" variant="contained">
                            {showCode ? "Confirm Code" : "Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        {signUpError}
                    </Alert>
                </Snackbar>
            </form>
        </div>

    );

});

export default Signup;