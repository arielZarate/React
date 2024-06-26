import  React ,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PetIcon from '@mui/icons-material/Pets';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import SearchBar from '../NavBar/SearchBar';


const theme=createTheme({
  typography: {
    fontFamily: 'cursiva Raleway, Arial',
  },
})


export default function ButtonAppBar() {
 
  //===============================
  /* const theme = useTheme(); */
  const [open, setOpen] =useState(false);



  return (
   
    <ThemeProvider  theme={theme}>

      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#e91e63" ,color:"white"}} open={open} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={()=>setOpen(true)}
            sx={{ mr: 2} /* ...(open && { display: 'none' }) } */}
             
          >
         <MenuIcon /> 
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            className={theme.typography}
          >
            Adoptame  
            <IconButton aria-label="icono"  color='inherit'>
             <PetIcon></PetIcon>
        </IconButton>
          </Typography>


         <Box sx={{flexGrow:1 }}>
         <SearchBar/>
         </Box>

{/* 
          <Box sx={{display:"flex" ,flexDirection:"row"  }}>
            
          <Button color="inherit" sx={{flexGrow:0}}>Adopta</Button>
          <Button color="inherit" sx={{flexGrow:0}}>Dona</Button>
          <Button color="inherit" sx={{flexGrow:0}}>Sobre Nosotros</Button>

          </Box> */}

  
          <Button color="inherit" sx={{flexGrow:0}}>Login</Button>
          <Button color="inherit" sx={{flexGrow:0}}>Registrarse</Button>
          
        
        </Toolbar>
      </AppBar>


      {/* drawer */}


      

    </Box>

    </ThemeProvider>

    
  );
}








