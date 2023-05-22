import { useEffect, useState } from 'react';
import { Button, Grid, IconButton, MenuItem, TextField, Typography } from '@mui/material';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LockIcon from '@mui/icons-material/Lock';
import { useUser } from '../context/AuthContext';
import { API } from 'aws-amplify';
import { createGarment, createPalette } from '@/graphql/mutations';
import { CreateGarmentInput, CreateGarmentMutation, CreatePaletteInput, CreatePaletteMutation, Garment, ListGarmentsQuery, ListPalettesQuery, Palette } from '@/API';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Avatar from '@/components/Avatar';
import SwatchMenu from '@/components/SwatchMenu';
import { listGarments, listPalettes } from '@/graphql/queries';
import groupByArea from '@/lib/groupByArea';
// from https://you.com/search?q=warning%3A%20prop%20%60style%60%20did%20not%20match
const SketchPicker = dynamic(
  () => import('react-color').then((mod) => mod.SketchPicker),
  { ssr: false }
);
// const CirclePicker = dynamic(
//   () => import('react-color').then((mod) => mod.CirclePicker),
//   { ssr: false }
// );

export default function Home() {

  const { user } = useUser();
  // console.log("USER: ", user);

  const [hatColor, setHatColor] = useState<string>("#000");
  const [faceColor, setFaceColor] = useState<string>("#a18057");
  const [topColor, setTopColor] = useState<string>("#fff");
  const [bottomColor, setBottomColor] = useState<string>("#000");
  const [shoeColor, setShoeColor] = useState<string>("#000");

  const [hatLock, setHatLock] = useState<boolean>(false);
  const [topLock, setTopLock] = useState<boolean>(false);
  const [bottomLock, setBottomLock] = useState<boolean>(false);
  const [shoeLock, setShoeLock] = useState<boolean>(false);


  const [selectedArea, setSelectedArea] = useState<string>("top");
  const [selectedColor, setSelectedColor] = useState<string>(topColor);

  const [palettes, setPalettes] = useState<Palette[]>([]);

  const [hatSwatches, setHatSwatches] = useState<string[]>(["#fff"]);
  const [topSwatches, setTopSwatches] = useState<string[]>(["#fff"]);
  const [bottomSwatches, setBottomSwatches] = useState<string[]>(["#fff"]);
  const [shoeSwatches, setShoeSwatches] = useState<string[]>(["#fff"]);

  const [closetMode, setClosetMode] = useState<boolean>(false);

  useEffect(() => {
    randomizePalette()
  }, [])

  useEffect(() => {
    fetchPalettes()
  }, [])

  const handleModeChange = (toClosetMode: boolean): void => {

    // toClosetMode is the mode you want to switch to
    // if true - you want to switch to closet mode, if false, you want to switch to lab mode

    // check if mode is switching
    const modeSwitch: boolean = ((toClosetMode && !closetMode) || (!toClosetMode && closetMode));

    if (!modeSwitch) return;

    if (toClosetMode) {
      // fetch garments & set swatches
      const fetchGarmentsFromDB = async (): Promise<Garment[]> => {
        const userGarments = (await API.graphql({ query: listGarments })) as {
          data: ListGarmentsQuery;
          errors: any[];
        };

        console.log(userGarments);

        if (userGarments.data) {
          // sort into areas
          const garments = userGarments.data.listGarments!.items as Garment[];
          const grouped = groupByArea(garments);
          // console.log(grouped);
          setHatSwatches(grouped["hat"]);
          setTopSwatches(grouped["top"]);
          setBottomSwatches(grouped["bottom"]);
          setShoeSwatches(grouped["shoe"]);
          return garments;
        } else {
          throw new Error("Could not get garments");
        }

      }

      fetchGarmentsFromDB();

    } else {
      // reset swatches
      setHatSwatches(["#fff"]);
      setTopSwatches(["#fff"]);
      setBottomSwatches(["#fff"]);
      setShoeSwatches(["#fff"]);
    }

    setClosetMode(toClosetMode);

  }


  const handleAreaChange = (area: string) => {

    setSelectedArea(area);

    switch (area) {
      case "hat":
        setSelectedColor(hatColor);
        break;
      case "face":
        setSelectedColor(faceColor);
        break;
      case "top":
        setSelectedColor(topColor);
        break;
      case "bottom":
        setSelectedColor(bottomColor);
        break;
      case "shoes":
        setSelectedColor(shoeColor);
        break;
    }
  }

  const handleColorChangePicker = (color: string) => {

    // sets the color of the selectedArea to the color picker color
    switch (selectedArea) {
      case "hat":
        setHatColor(color);
        break;
      case "face":
        setFaceColor(color);
        break;
      case "top":
        setTopColor(color);
        break;
      case "bottom":
        setBottomColor(color);
        break;
      case "shoes":
        setShoeColor(color);
        break;
      default:
        break;
    }

    setSelectedColor(color);

  }

  const handleColorChangeSwatch = (color: string, area: string) => {

    switch (area) {
      case "hat":
        setHatColor(color);
        break;
      case "face":
        setFaceColor(color);
        break;
      case "top":
        setTopColor(color);
        break;
      case "bottom":
        setBottomColor(color);
        break;
      case "shoes":
        setShoeColor(color);
        break;
      default:
        break;
    }

    setSelectedArea(area);
    setSelectedColor(color);

  }

  const addColorSwatch = (area: string) => {

    // add color to the corresponding swatches array if it isn't already
    switch (area) {
      case "hat":
        if (!(hatSwatches.includes(hatColor))) {
          if (closetMode) {
            addGarmentToDB("hat", hatColor);
            setHatSwatches([hatColor, ...hatSwatches]);
          }
          else setHatSwatches([hatColor, ...hatSwatches]);
        }
        setSelectedColor(hatColor);
        break;
      case "top":
        if (!(topSwatches.includes(topColor))) {
          if (closetMode) {
            addGarmentToDB("top", topColor);
            setTopSwatches([topColor, ...topSwatches]);
          }
          else setTopSwatches([topColor, ...topSwatches]);
        }
        setSelectedColor(topColor);
        break;
      case "bottom":
        if (!(bottomSwatches.includes(bottomColor))) {
          if (closetMode) {
            addGarmentToDB("bottom", bottomColor);
            setBottomSwatches([bottomColor, ...bottomSwatches]);
          }
          else setBottomSwatches([bottomColor, ...bottomSwatches]);
        }
        setSelectedColor(bottomColor);
        break;
      case "shoe":
        if (!(shoeSwatches.includes(shoeColor))) {
          if (closetMode) {
            addGarmentToDB("shoe", shoeColor);
            setShoeSwatches([shoeColor, ...shoeSwatches]);
          }
          else setShoeSwatches([shoeColor, ...shoeSwatches]);
        }
        setSelectedColor(shoeColor);
        break;
      default:
        break;
    }

    setSelectedArea(area);

  }

  const addGarmentToDB = async (area: string, color: string) => {

    try {

      const createNewGarmentInput: CreateGarmentInput = {
        color: color,
        area: area
      };

      const createNewGarment = (await API.graphql({
        query: createGarment,
        variables: { input: createNewGarmentInput }
      })) as CreateGarmentMutation;

      console.log("Garment added successfully: ", createNewGarment);

      // see if you need to refresh -- add new garment to area's swatches

    } catch (error: any) {
      console.error("Error adding garment: ", error);
    }
  }

  const randomizePalette = () => {

    if (!hatLock) {
      const randomHatColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
      setHatColor(randomHatColor);
    }

    if (!topLock) {
      const randomTopColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
      setTopColor(randomTopColor);
    }

    if (!bottomLock) {
      const randomBottomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
      setBottomColor(randomBottomColor);
    }

    if (!shoeLock) {
      const randomShoeColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
      setShoeColor(randomShoeColor);
    }

    // set the selected color to the color of the selected area
    switch (selectedArea) {
      case "hat":
        setSelectedColor(hatColor);
        break;
      case "top":
        setSelectedColor(topColor);
        break;
      case "bottom":
        setSelectedColor(bottomColor);
        break;
      case "shoe":
        setSelectedColor(shoeColor);
        break;
    }

  }

  const savePalette = async () => {

    try {

      const createNewPaletteInput: CreatePaletteInput = {
        hatColor: hatColor,
        topColor: topColor,
        bottomColor: bottomColor,
        shoeColor: shoeColor
      };

      const createNewPalette = (await API.graphql({
        query: createPalette,
        variables: { input: createNewPaletteInput }
      })) as CreatePaletteMutation;

      console.log("Palette added successfully: ", createNewPalette);

    } catch (error: any) {
      console.error("Error adding palette: ", error);
    }
  }

  const fetchPalettes = async (): Promise<Palette[]> => {
    const userPalettes = (await API.graphql({ query: listPalettes })) as {
      data: ListPalettesQuery;
      errors: any[];
    };

    console.log(userPalettes);

    if (userPalettes.data) {

      const palettes = userPalettes.data.listPalettes!.items as Palette[];

      // setPalettes to the hatColor, topColor, bottomColor, shoeColor
      setPalettes(palettes);

      return palettes;
    } else {
      throw new Error("Could not get palettes");
    }

  }

  const assignAreaColorsFromPalatte = (hatColor: string, topColor: string, bottomColor: string, shoeColor: string) => {

    setHatColor(hatColor);
    setTopColor(topColor);
    setBottomColor(bottomColor);
    setShoeColor(shoeColor);

  }

  return (
    <>
      {/* {console.log("Closet Mode: ", closetMode)} */}
      <Header handleModeChange={handleModeChange} />
      <Grid container spacing={1}>
        <Grid item xs={1}>
          {/* <Palette handler={addColorSwatch} hatColor={hatColor} topColor={topColor} bottomColor={bottomColor} shoeColor={shoeColor} /> */}
          <Grid item><Button onClick={() => addColorSwatch("hat")} style={{ height: "55px", width: "60px", borderRadius: "0%", backgroundColor: hatColor }}></Button></Grid>
          <Grid item><Button onClick={() => addColorSwatch("top")} style={{ height: "55px", width: "60px", borderRadius: "0%", backgroundColor: topColor }}></Button></Grid>
          <Grid item><Button onClick={() => addColorSwatch("bottom")} style={{ height: "55px", width: "60px", borderRadius: "0%", backgroundColor: bottomColor }}></Button></Grid>
          <Grid item><Button onClick={() => addColorSwatch("shoes")} style={{ height: "55px", width: "60px", borderRadius: "0%", backgroundColor: shoeColor }}></Button></Grid>
        </Grid>
        <Grid item xs={6}>
          {/* <Avatar handler={handleAreaChange} showHat={showHat} hatColor={hatColor} topColor={topColor} bottomColor={bottomColor} shoeColor={shoeColor} /> */}
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Button onClick={() => handleAreaChange("hat")} style={{ height: "40px", width: "62px", marginLeft: "auto", marginRight: "auto", backgroundColor: hatColor, borderTopLeftRadius: "60% 90%", borderTopRightRadius: "60% 90%" }}></Button>
            </Grid>
            <Grid item>
              <div onClick={() => handleAreaChange("face")} style={{ height: "55px", width: "60px", marginLeft: "auto", marginRight: "auto", backgroundColor: faceColor, borderBottomLeftRadius: "120%", borderBottomRightRadius: "120%", cursor: "pointer" }}></div>
            </Grid>
            <Grid item>
              <Button onClick={() => handleAreaChange("top")} style={{ height: "180px", width: "125px", marginLeft: "auto", marginRight: "auto", backgroundColor: topColor, borderTopLeftRadius: "30%", borderTopRightRadius: "30%" }}></Button>
            </Grid>
            <Grid item>
              <Button onClick={() => handleAreaChange("bottom")} style={{ height: "180px", width: "125px", marginLeft: "auto", marginRight: "auto", backgroundColor: bottomColor }}></Button>
            </Grid>
            <Grid item>
              <Button onClick={() => handleAreaChange("shoes")} style={{ height: "50px", width: "170px", marginLeft: "auto", marginRight: "auto", backgroundColor: shoeColor, borderTopRightRadius: "15% 60%", borderTopLeftRadius: "15% 60%", borderBottomLeftRadius: "15% 60%", borderBottomRightRadius: "15% 60%" }}></Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {/* <SwatchMenu handler={handleColorChangeSwatch} setShowHat={setShowHat} hatSwatches={hatHistory} topSwatches={topHistory} bottomSwatches={bottomHistory} shoeSwatches={shoeHistory} /> */}
          {/* <Grid container direction="column">
            <Grid item container wrap="nowrap" style={{ maxWidth: "300px", overflowX: "auto" }}>
              {hatSwatches.map((color) => (
                <Grid item key={color}><Button onClick={() => handleColorChangeSwatch(color, "hat")} style={{ height: "30px", backgroundColor: color }}></Button></Grid>
              ))}
            </Grid>
            <br></br>
            <Grid item container wrap="nowrap" style={{ maxWidth: "400px", overflowX: "auto" }}>
              {topSwatches.map((color) => (
                <Grid item key={color}><Button onClick={() => handleColorChangeSwatch(color, "top")} style={{ height: "30px", backgroundColor: color }}></Button></Grid>
              ))}
            </Grid>
            <br></br>
            <Grid item container wrap="nowrap" style={{ maxWidth: "400px", overflowX: "auto" }}>
              {bottomSwatches.map((color) => (
                <Grid item key={color}><Button onClick={() => handleColorChangeSwatch(color, "bottom")} style={{ height: "30px", backgroundColor: color }}></Button></Grid>
              ))}
            </Grid>
            <br></br>
            <Grid item container wrap="nowrap" style={{ maxWidth: "400px", overflowX: "auto" }}>
              {shoeSwatches.map((color) => (
                <Grid item key={color}><Button onClick={() => handleColorChangeSwatch(color, "shoes")} style={{ height: "30px", backgroundColor: color }}></Button></Grid>
              ))}
            </Grid>
            <br></br>
          </Grid> */}
          <Grid container flexWrap="nowrap">
            <Grid item>
              <SketchPicker
                disableAlpha
                color={selectedColor}
                onChangeComplete={color => handleColorChangePicker(color.hex)} />
            </Grid>
            <Grid container direction="column">
              <Grid item>
                {/* <Palette handler={addColorSwatch} hatColor={hatColor} topColor={topColor} bottomColor={bottomColor} shoeColor={shoeColor} /> */}
                <Grid item container wrap="nowrap">
                  <Grid item>
                    <Button onClick={() => addColorSwatch("hat")} style={{ height: "55px", width: "60px", borderRadius: "0%", backgroundColor: hatColor }}></Button>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={() => setHatLock(prev => !prev)}>
                      <LockIcon style={{ color: hatLock ? "white" : "grey" }} />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item container wrap="nowrap">
                  <Grid item>
                    <Button onClick={() => addColorSwatch("top")} style={{ height: "55px", width: "60px", borderRadius: "0%", backgroundColor: topColor }}></Button>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={() => setTopLock(prev => !prev)}>
                      <LockIcon style={{ color: topLock ? "white" : "grey" }} />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item container wrap="nowrap">
                  <Grid item>
                    <Button onClick={() => addColorSwatch("bottom")} style={{ height: "55px", width: "60px", borderRadius: "0%", backgroundColor: bottomColor }}></Button>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={() => setBottomLock(prev => !prev)}>
                      <LockIcon style={{ color: bottomLock ? "white" : "grey" }} />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item container wrap="nowrap">
                  <Grid item>
                    <Button onClick={() => addColorSwatch("shoes")} style={{ height: "55px", width: "60px", borderRadius: "0%", backgroundColor: shoeColor }}></Button>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={() => setShoeLock(prev => !prev)}>
                      <LockIcon style={{ color: shoeLock ? "white" : "grey" }} />
                    </IconButton>
                  </Grid>
                </Grid>
                {/* <Grid item><Button onClick={() => addColorSwatch("top")} style={{ height: "55px", width: "60px", borderRadius: "0%", backgroundColor: topColor }}></Button></Grid>
                <Grid item><Button onClick={() => addColorSwatch("bottom")} style={{ height: "55px", width: "60px", borderRadius: "0%", backgroundColor: bottomColor }}></Button></Grid>
                <Grid item><Button onClick={() => addColorSwatch("shoes")} style={{ height: "55px", width: "60px", borderRadius: "0%", backgroundColor: shoeColor }}></Button></Grid> */}
              </Grid>
              <Grid item>
                <IconButton onClick={() => randomizePalette()}>
                  <ShuffleIcon style={{ color: "white" }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton onClick={() => savePalette()}>
                  <FavoriteBorderIcon style={{ color: "white" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <br></br>
          <Grid container>
            <Grid item container wrap="nowrap" style={{ maxWidth: "300px", overflowX: "auto" }}>
              {palettes.map((palette, i) => {

                const { hatColor, topColor, bottomColor, shoeColor } = palette;

                return (

                  <Grid container key={i} onClick={() => assignAreaColorsFromPalatte(hatColor, topColor, bottomColor, shoeColor)}>
                    <Grid item style={{ backgroundColor: hatColor, height: "27px", width: "30px", borderRadius: "0%" }}></Grid>
                    <Grid item style={{ backgroundColor: topColor, height: "27px", width: "30px", borderRadius: "0%" }}></Grid>
                    <Grid item style={{ backgroundColor: bottomColor, height: "27px", width: "30px", borderRadius: "0%" }}></Grid>
                    <Grid item style={{ backgroundColor: shoeColor, height: "27px", width: "30px", borderRadius: "0%" }}></Grid>
                  </Grid>
                )
              })}
              <div></div>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </>
  )
}