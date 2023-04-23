
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AndroidIcon from "@mui/icons-material/Android";
import IconoX from '@mui/icons-material/AccessAlarmsRounded'

export default function BotonesYIconos() {
  return (
    <Container>
    
      <Button
        variant='outlined'
        color="warning"
        startIcon={<AirplanemodeActiveIcon />}
      >
        Botón personalizado
      </Button>
      <Button
       
        color="primary"
        startIcon={<IconoX />}
        variant='text'
      >
        Botón personalizado
      </Button>

      <Button
        variant="contained"
        color="secondary"
        endIcon={<AndroidIcon />}
      >
        Botón 2
      </Button>

      <hr />
    </Container>


  );
}



