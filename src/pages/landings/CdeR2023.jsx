import { SuperSEO } from "react-super-seo";

import Fondo from "../../components/Fondo";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import { Link } from "react-router-dom";

import RERLogo from "../../assets/img/RERLogoWhiteBack.svg";

function CdeR2023() {
  return (
    <>
      {" "}
      <SuperSEO
        title="DERIO | Cuentos de río"
        description="Sitio de la presentación de los libros de la colección Cuentos de río."
        lang="es"
        openGraph={{
          ogImage: {
            ogImage: "https://ripoll.derio.com.ar/img/home-02.jpg",
            ogImageAlt: "Gustavo Daniel Ripoll",
            ogImageWidth: 1920,
            ogImageHeight: 2560,
            ogImageType: "image/jpeg",
          },
          ogUrl: "https://ripoll.derio.com.ar",
        }}
        twitter={{
          twitterSummaryCard: {
            summaryCardImage: "https://ripoll.derio.com.ar/img/home-02.jpg",
            summaryCardImageAlt: "Gustavo Daniel Ripoll",
            summaryCardSiteUsername: "gdripoll",
          },
        }}
      />
      <Fondo image="/img/landings/2023-CuentosDeRio/fondo-museo-arte.jpg" />
      <Stack direction="column" spacing={4} sx={{ alignItems: "center" }}>
        <Box
          sx={{
            p: 0,
            pl: 2,
            bgcolor: "#000000AA",
            width: "100%",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="white"
            href="/"
            style={{ float: "left" }}
          >
            <img src={RERLogo} width={40} />
          </IconButton>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h4" sx={{ color: "white", width: "600px" }}>
              Ripoll en el río
            </Typography>
          </Link>
        </Box>
        {/* cuentos de rio */}
        <Box
          sx={{
            p: 0,
            pl: 2,
            bgcolor: "#FF0000AA",
            width: "100%",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              p: 0,
              fontSize: { xs: "4em", sm: "5em", md: "7em", xl: "7em" },
              color: "white",
              textShadow: "3px 3px 5px #000000",
            }}
          >
            Cuentos de río
          </Typography>
        </Box>
        {/* libros */}
        <Masonry
          columns={{ sm: 1, md: 3 }}
          spacing={1}
          sx={{
            justifyContent: "center",
            alignContent: "space-around",
            alignItems: "center",
          }}
        >
          <a
            href="https://libreria.derio.com.ar/pag/libro/historias-de-rio"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <img
              src="/img/landings/2023-CuentosDeRio/hdr.png"
              style={{ maxWidth: "400px" }}
            />
          </a>
          <Box sx={{ p: 4, bgcolor: "#FF0000AA", borderRadius: "10px" }}>
            <Typography
              variant="h4"
              sx={{ color: "white", textShadow: "3px 3px 5px #000000" }}
            >
              28 de Septiembre, 19h.
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "white", textShadow: "3px 3px 5px #000000" }}
            >
              <br />
              <Link
                to="https://maps.app.goo.gl/uZqD91qfA15MacMG7"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <img
                  src="/img/landings/2023-CuentosDeRio/mapa.png"
                  width="150px"
                  style={{ border: "solid 2px black" }}
                />
              </Link>
              <br />
              <span style={{ fontSize: "130%", fontWeight: "bold" }}>
                Museo de la Reconquista
              </span>
              <br />
              Padre Castañeda 470, Tigre centro
            </Typography>
          </Box>
          <a
            href="https://libreria.derio.com.ar/pag/libro/misterios-de-rio"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <img
              src="/img/landings/2023-CuentosDeRio/mdr-r.png"
              style={{ maxWidth: "400px" }}
            />
          </a>
        </Masonry>
        {/* propagandas */}
        <Masonry
          columns={{ xs: 1, md: 3 }}
          spacing={1}
          sx={{
            justifyContent: "center",
            alignContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            src="/img/landings/2023-CuentosDeRio/MUNI_1.jpeg"
            style={{ maxWidth: "400px" }}
          />
          <img
            src="/img/landings/2023-CuentosDeRio/IG-2-7.png"
            style={{ maxWidth: "400px" }}
          />
          <img
            src="/img/landings/2023-CuentosDeRio/SADE_1.jpeg"
            style={{ maxWidth: "400px" }}
          />
        </Masonry>
        {/* invitado */}
        <Box
          sx={{
            p: 4,
            bgcolor: "#FF0000AA",
            width: "100%",
          }}
        >
          <Grid
            container
            columns={{ xs: 1, sm: 2 }}
            spacing={3}
            sx={{
              justifyContent: "center",
              alignContent: "space-around",
              alignItems: "center",
            }}
          >
            <Grid item>
              <img
                src="/img/landings/2023-CuentosDeRio/IdR.png"
                width={100}
                style={{ minWidth: 300, maxWidth: 300 }}
              />
            </Grid>
            <Grid item sx={{ textAlign: "left" }}>
              <Typography
                variant="h4"
                sx={{ color: "white", fontVariant: "small-caps" }}
              >
                invitado
              </Typography>
              <Typography variant="h2" sx={{ color: "white", width: "600px" }}>
                Marcelo Edelstein
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "white", textDecoration: "none !important" }}
              >
                <a
                  href="https://www.marce-edelstein.com/"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  https://www.marce-edelstein.com/
                </a>
                <br />
                <a
                  href="https://www.instagram.com/marce_edelstein/"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Instagram: @marce_edelstein
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ height: "100px" }}></Box>
      </Stack>
    </>
  );
}

export default CdeR2023;
