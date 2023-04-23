import { Container, Button, Drawer } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import Menu from '@mui/icons-material/Menu'

export default function MostrarListDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Container sx={{ display: "grid", gap: 4 }}>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        startIcon={<Menu/>}
      >
        Menu Hamburguesa
      </Button>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <NavListDrawer onClick={() => setOpen(false)} />
      </Drawer>
    </Container>
  );
}
