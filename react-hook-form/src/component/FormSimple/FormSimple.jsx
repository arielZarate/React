import { useForm } from "react-hook-form";
import { TextField, Button,FormControl ,Typography,FormLabel,FormControlLabel,Radio,RadioGroup } from '@mui/material';

import{styled ,createTheme, ThemeProvider}from '@mui/material/styles'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';


import style from './FormSimple.module.css'

/* const useStyles = styled((theme) => ({
    formContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContentCenter:"center",
      alignItems:"center",
      gap: theme.spacing(2),
      maxWidth: '400px',
      margin: '0 auto',
    },
  }));

 */

  const theme = createTheme({
    palette: {
      primary: {
        main: "#dc1e7c",
      },
      secondary: {
        main: "#E34B96",
      },

    },
  });

export default function FormSimple() {
  /*  const classes = useStyles();   */
 const {
    register,
    handleSubmit,
  /*   formState: { errors }, */
  } = useForm();


  const enviarDatos = data => console.log(data);
   
  return (

  <ThemeProvider theme={theme}>

<div className={style.container} >   
<Typography variant="h4" component="h1" className={style.title}>Registra la mascota</Typography>

    <form onSubmit={handleSubmit(enviarDatos)} className={style.containerForm}>
    
     <FormControl className={style.containerInput} margin="dense" > 
       <TextField
        {...register('nombre', { required: true })}
        id="nombre"
        label="Nombre"
        variant="outlined"
       />
       {/*  {err.name && <Typography color="error">{err.name}</Typography>} */}
      {/*  {errors.nombre && <span>Este campo es requerido</span>} */}
      </FormControl> 
     
       <FormControl className={style.containerInput} margin="dense"  >
        <TextField
        {...register('descripcion',{required:true}) }
        id="descripcion"
        label="Descripción"
        variant="outlined"
        multiline
  
        />
       </FormControl>

 {/*       <FormControl className={style.containerInput}>
       <TextField
        {...register('color', { required: true })}
        id="color"
        label="Color"
        variant="outlined"
      />
        {errors.color && <span>Este campo es requerido</span>} 
       </FormControl>
       */}
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} className={style.containerInput}>
        <InputLabel id="forLabel">Color</InputLabel>
        <Select
          labelId="forLabel"
          id="color"
          name="color"
          variant="outlined"
          {...register('color', { required: true })}
          /* onChange={handleChange} */
        >
          <MenuItem value={'Marron'}>Marron</MenuItem>
          <MenuItem value={'Negro'}>Negro</MenuItem>
          <MenuItem value={'Blanco'}>Blanco</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={style.containerInput} margin="dense" >
      <TextField
        {...register('imagen', /* { required: true } */)}
        id="imagen"
        label="Imagen"
        variant="outlined"
      />
    {/*   {errors.imagen && <span>Este campo es requerido</span>} */}
      </FormControl>
  

     <FormControl className={style.containerRadio} margin="dense" >
      <FormLabel>
        <Typography variant="h6" sx={{color:"black" ,marginY:"10px"}}>Sexo</Typography>
      </FormLabel>
      <RadioGroup
       defaultValue="hembra"
       {...register('sexo') }
       name="sexo"
       id="sexo"
       
      >
        <FormControlLabel value="hembra" control={<Radio/> } label="Femenino"  sx={{marginLeft:"10px"}}/>
        <FormControlLabel value="macho" control={<Radio />} label="Macho"  sx={{marginLeft:"10px"}}/>
      </RadioGroup>

     {/*  {errors.sexo && <span>Este campo es requerido</span>}  */}
    </FormControl>
      

    <FormControl className={style.containerInput} margin="dense" >
      <TextField
        {...register('peso', { required: true })}
        id="peso"
        label="Peso"
        variant="outlined"
      />
    {/*   {errors.peso && <span>Este campo es requerido</span>}  */}
      </FormControl> 
       


      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} className={style.containerInput}>
        <InputLabel id="forLabel">Especie</InputLabel>
        <Select
          labelId="forLabel"
          id="especie"
          name="especie"
          variant="outlined"
          {...register('especie', { required: true })}
          /* onChange={handleChange} */
        >
          <MenuItem value={'perro'}>Perro</MenuItem>
          <MenuItem value={'gato'}>Gato</MenuItem>
          <MenuItem value={'otro'}>Otro</MenuItem>
        </Select>
      </FormControl>

     

    <Button type="submit" variant="contained" fullWidth margin="dense" >
          Registrar
        </Button>
      
    
      </form>
  
    </div>

  </ThemeProvider>

   
  );
}


/* 
 <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" value='enviando' />

*/