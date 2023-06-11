import { AppBar, Toolbar, Typography, IconButton } from "@mui/material"
import DriveetaIcon from '@mui/icons-material/DriveEta'


export const NavBar = () => {
    return (
        < AppBar position="static" enableColorOnDark>
            <Toolbar>
                <IconButton color="inherit" edge="start">
                    <DriveetaIcon />
                </IconButton>
                <Typography
                    variant="h6"
                >Lore</Typography>
            </Toolbar>
        </AppBar >
    )
}