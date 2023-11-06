import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
  Grid,
} from "@mui/material";

import Fondo from "../components/Fondo";
import { useEffect } from "react";
import GA4 from "../utils/GA4";
import { SuperSEO } from "react-super-seo";

function HomePage() {
  useEffect(() => {
    GA4.pageView("Home");
  }, []);
  return (
    <>
      <SuperSEO
        title="Inicio | Ripoll en el río"
        description="Sociedad Argentina de Escritores - Filial Delta Bonaerense"
        lang="es"
        openGraph={{
          ogImage: {
            ogImage: "https://sadedelta.com.ar/img/logo-small.jpg",
            ogImageAlt: "Sade Delta Bonaerense",
            ogImageWidth: 173,
            ogImageHeight: 250,
            ogImageType: "image/jpeg",
          },
          ogUrl: "https://ripoll.derio.com.ar",
        }}
        twitter={{
          twitterSummaryCard: {
            summaryCardImage: "https://sadedelta.com.ar/img/logo-small.jpg",
            summaryCardImageAlt: "Sade Delta Bonaerense",
            // summaryCardSiteUsername: "gdripoll",
          },
        }}
      />
      <Fondo image="/img/home-02.jpg" />
      <Typography
        variant="h1"
        sx={{
          textAlign: "left",
          width: "100vw",
          p: 0,
          fontSize: { xs: "4em", sm: "5em", md: "7em", xl: "7em" },
          overflow: "hidden",
          position: "absolute",
          left: "1rem",
          bottom: "1rem",
          color: "white",
          textShadow: "3px 3px 5px #000000",
        }}
      >
        SADE Delta Bonaerense
      </Typography>
      <Grid
        container
        columns={{ xs: 1, sm: 2 }}
        spacing={5}
        sx={{ justifyContent: "space-between" }}
      >
        <Grid item>
          <Box
            sx={{
              p: 0,
              position: "absolute",
              left: { xs: "1%" },
              top: "3%",
            }}
          >
            <List className="home-ul" sx={{ width: "100%" }}>
              <ListItem sx={{ py: 0 }}>
                <ListItemButton href="/noticias">
                  <ListItemText className="home-li" primary="Noticias" />
                </ListItemButton>
              </ListItem>
              {/* <ListItem sx={{ py: 0 }}>
                <ListItemButton href="/pag/publicaciones">
                  <ListItemText className="home-li" primary="Publicaciones" />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemButton href="/pag/reconocimientos">
                  <ListItemText className="home-li" primary="Reconocimientos" />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemButton href="/pag/galeria">
                  <ListItemText className="home-li" primary="Galería" />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemButton href="/pag/lecturas">
                  <ListItemText className="home-li" primary="Lecturas" />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemButton href="/pag/formacion">
                  <ListItemText className="home-li" primary="Formación" />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemButton href="/pag/contacto">
                  <ListItemText className="home-li" primary="Contacto" />
                </ListItemButton>
              </ListItem> */}
            </List>
          </Box>
        </Grid>
        {/* <Grid item>
          <a href="https://ripoll.derio.com.ar/eventos/2023-CuentosDeRio">
            <img
              src="/img/landings/2023-CuentosDeRio/IG-2-7.png"
              style={{
                float: "right",
                maxWidth: "400px",
                margin: "1em",
                border: "solid 5px black",
                boxShadow: "0px 0px 55px 11px rgba(255,255,255,0.9)",
                // -moz-box-shadow: 0px 0px 55px 11px rgba(255,255,255,0.9);
                // box-shadow: 0px 0px 55px 11px rgba(255,255,255,0.9);
              }}
            />
          </a>
        </Grid> */}
      </Grid>
    </>
  );
}

export default HomePage;
