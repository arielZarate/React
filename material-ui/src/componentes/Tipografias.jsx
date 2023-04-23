import React from 'react'

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from '@mui/material';


export default function Tipografias() {
  return (
    <div>

      <h1>Tipografias</h1>

      <Typography variant="h1">Soy un h1</Typography>
      <Typography variant="h2">Soy un h2</Typography>
      <Typography variant="h3">Soy un h3</Typography>

      <hr />

      <Typography
     variant="h1"
      component="h2"
      >
  Soy un h1 que se ve como un h2 al usar component
</Typography>


<hr />


<Typography
  variant="h1"
  component="h2"
  mb={2}
  color="primary"
  align="center"
  boxShadow={2}
  pb={2}
>
  esto tiene muchas propiedades 
</Typography>



    </div>
  )
}
