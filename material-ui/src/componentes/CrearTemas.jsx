import React from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from '@mui/material/Button'

const theme = createTheme({
  palette: {
    primary: {
      main: "#000e35",
    },
    secondary: {
      main: "#2c5e21",
    },

    culo:{
        main:"#a29930"
    }
  },
});
export default function CrearTemas() {
  return (
    <div>
       <h4>Probando el theme </h4>
      <ThemeProvider theme={theme}>
      <Button variant="contained" color="culo" >
        Boton
        </Button>
      </ThemeProvider>


<hr />
    </div>
  )
}
