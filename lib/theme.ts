import { createTheme } from "@mui/material"

const primaryColor = "#222222"
const breakpoints = {
  xs: 0,
  sm: 600,
  md: 1024,
  lg: 1200,
  xl: 1440,
}

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryColor,
    },
    text: {
      primary: primaryColor,
    },
    background: {
      paper: "#F6F5F5",
      default: "#FFFFFF",
    },
  },
  typography: { 
      fontFamily: [
        'Roboto',
        'Zilla Slab'
      ].join(','),
    }
})
theme.breakpoints.values = breakpoints
