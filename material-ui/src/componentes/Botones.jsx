import React from 'react'
import { Button } from "@mui/material";
import { Container } from "@mui/material";

export default function Botones() {
  return (
    <div>


<Container  

maxWidth="xs"
sx={{
  border: 2,
  boxShadow: 1,
  pb: 2,
  m:1
}}

>
  <h3>botones con container </h3>
<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="contained">Contained</Button>
</Container>


<hr />
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
  Link
</Button>

<Button variant="contained" disableElevation>
  Disable elevation
</Button>


    </div>
  )
}


