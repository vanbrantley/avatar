import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        background: {
            default: '#181818',
            paper: '#252525',
        },
        primary: {
            main: '#484848',
            contrastText: "#fff",
        },
        secondary: {
            main: '#e6ab7e',
            contrastText: "#fff",
        },
        error: {
            main: "#f44336",
            contrastText: "#fff",
        },
        text: {
            primary: "#fff",
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.38)",
        },
    },
    typography: {
        button: {
            textTransform: "none",
        },
        fontFamily: [
            "Inter",
            "ui-sans-serif",
            "system-ui",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "Noto Sans",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
            "Noto Color Emoji",
        ].join(","),
        h1: {
            fontSize: "4rem",
            fontWeight: 700,
            lineHeight: 1,
            color: "#fff",
        },
        h2: {
            letterSpacing: "-.025em",
            fontWeight: 700,
            fontSize: "2.25rem",
            lineHeight: 2.5,
            color: "#fff",
        },
        h3: {
            color: "#fff",
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: 1.75,
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "#d1d5db",
        },
        body2: {
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "#9CA3AF",
        },
    },
});

// https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme
export default responsiveFontSizes(theme);