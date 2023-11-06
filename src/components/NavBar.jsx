import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import RERLogo from "../assets/img/logo-ico.png";

const OPCIONES = [
  { id: "noticias", label: "Noticias", path: "/" },
  { id: "textos", label: "Textos", path: "/pag/textos" },
  { id: "publicaciones", label: "Publicaciones", path: "/pag/publicaciones" },
  { id: "galeria", label: "Galería", path: "/pag/galeria" },
  { id: "contacto", label: "Contacto", path: "/pag/contacto" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="fixed" id="headerBar" sx={{ opacity: 0.8 }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              mr: 1,
              alignItems: "center",
            }}
          >
            <IconButton size="large" edge="start" color="white" href="/">
              <img src={RERLogo} width={40} />
            </IconButton>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              SADE Delta Bonaerense{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {OPCIONES.map((o) => (
              <Button
                key={o.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                href={o.path}
              >
                {o.label}
              </Button>
            ))}
          </Box>

          <IconButton
            size="large"
            edge="start"
            color="white"
            href="/"
            sx={{ display: { xs: "flex", lg: "none" }, mr: 1 }}
          >
            <img src={RERLogo} width={40} />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "left",
              display: { xs: "flex", lg: "none" },
            }}
          >
            SADE Delta Bonaerense
            <span id="printUrl">&nbsp;&mdash; http://ripoll.derio.com.ar</span>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", lg: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <ButtonGroup variant="text" orientation="vertical" sx={{ p: 1 }}>
                {OPCIONES.map((o) => (
                  <Button key={o.id} onClick={handleCloseNavMenu} href={o.path}>
                    {o.label}
                  </Button>
                ))}
              </ButtonGroup>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
