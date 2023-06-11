import { PaletteOptions, createTheme } from "@mui/material";


const pallete: PaletteOptions = {
    mode: 'dark',
    primary: {
        main: '#FFCD00',
        contrastText: '#242526'
    },
    background: {
        default: '#242526',

    }
}

export const theme = createTheme({
    palette: pallete
})

