import react, { useState } from "react";
import {
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Button,
  TextField,
  Drawer,
  Container,
} from "@mui/material";

import { AccountBox, ShoppingCart, Search, Home } from "@mui/icons-material";
//import { NavLink } from "react-router-dom";

export default function NavBar2() {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };
  const handleSearch = (event) => {
    const value = event.target.value;
    console.log(event.target.value);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "black", color: "white" }}
      >
        <Container maxWidth="xl">
          <Toolbar variant="dense">
            {/*  <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
            <Box>
              <Button size="large">
                <Typography variant="subtitle1">LOGOTIPO EMPRESA</Typography>
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "0px",
                gap: "5px",
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="home"
                sx={{ m: 3 }}
              >
                <Home />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              {/*   <Box sx={{ flexGrow: 1 }} /> */}
              <Box sx={{ flexBasis: "50%" }}>
                <TextField
                  placeholder="Buscar productos..."
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={handleSearch}
                  InputProps={{
                    startAdornment: <Search />,
                    sx: {
                      borderRadius: "16px",
                      backgroundColor: "white",
                      color: "black",
                      height: "3rem",
                    },
                  }}
                />
              </Box>
              <Box sx={{ flexGrow: 1 }} />
            </Box>

            <Box sx={{ marginLeft: "auto", gap: 1 }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ m: 2 }}
              >
                <ShoppingCart />
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <AccountBox />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={open} onClose={handleDrawer}>
        <Box
          sx={{
            width: "80vw",
            maxWidth: 300,
            padding: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            placeholder="Buscar productos..."
            variant="outlined"
            size="small"
            fullWidth
            onChange={handleSearch}
            InputProps={{
              startAdornment: <Search />,
              sx: {
                borderRadius: "16px",
                backgroundColor: "white",
                color: "#333",
                height: "3rem",
                marginBottom: 2,
              },
            }}
          />
          <IconButton
            color="inherit"
            aria-label="menu"
            sx={{ alignSelf: "flex-end" }}
          >
            <ShoppingCart />
          </IconButton>
          <Button
            color="inherit"
            sx={{ alignSelf: "flex-end", marginTop: "auto" }}
          >
            Logueo
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
