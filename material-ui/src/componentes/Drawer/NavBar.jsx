import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          size="large"
          edge="start"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          News
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>

      <br/>
      <hr />
    </AppBar>
  );
}
