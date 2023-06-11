import { ThemeProvider, CssBaseline, Grid, Select, MenuItem, Button, Box } from "@mui/material"
import { theme } from './shared/theme/theme';
import { NavBar } from "./shared/components/navBar/NavBar";
import { styled } from '@mui/material/styles';
import { Loader } from "google-maps";
import { useEffect, useRef } from "react";
import { getCurrentPosition } from "./shared/util/geolocation";

const Form = styled('form')(({ theme }) => ({ margin: theme.spacing(1) }))
const API_KEY_MAPS = "AIzaSyDVDVMEVNJ61yjYkQ3crNkmDO2P-9zvmAw"
const loader = new Loader(API_KEY_MAPS)
const MapContainer = styled("div")(({ theme: _theme }) => ({
  width: "100%",
  height: "100%",
}));

export const App = () => {
  const mapRef = useRef<google.maps.Map>()
  useEffect(() => {
    (async () => {
      await loader.load()
      const position = await getCurrentPosition({ enableHighAccuracy: true });
      const divMap = document.getElementById('map') as HTMLDivElement;
      mapRef.current = new google.maps.Map(divMap, { zoom: 15, center: position });
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Grid container sx={{ width: '100%', height: '100%' }}>
        <Grid item xs={12} sm={3}>
          <Form>
            <Select fullWidth displayEmpty defaultValue={""}>
              <MenuItem value="">
                <em>Slectione</em>
              </MenuItem>
              <MenuItem value="">
                <em>Rota 1</em>
              </MenuItem>
            </Select>
            <Box sx={{ textAlign: "center", margin: theme.spacing(1) }}>
              <Button type="submit" variant="contained">iniciar Rota</Button>
            </Box>
          </Form>
        </Grid>
        <Grid item xs={12} sm={9}>
          <MapContainer id="map" />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}