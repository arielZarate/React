import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NavListDrawer from "../NavBar/NavListDrawer";
export default function Navbar2() {
  return (
    <AppBar position="static">


<Box sx={{ display: "grid", gap: 4 }}>
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
    </Box>

      <Toolbar>




      {/*   <IconButton
          color="inherit"
          size="large"
          edge="start"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component=""
          sx={{ flexGrow: 1 }}
        >
          News
        </Typography> */}
        <Button color="inherit">Home</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
