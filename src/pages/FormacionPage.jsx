import { Button, ButtonGroup, Paper, Stack, Typography } from "@mui/material";

import Curso from "../components/Curso";
import { handleScrollTo, handleScrollToTop } from "../utils/scrolls";
import { useEffect } from "react";
import GA4 from "../utils/GA4";

function FormacionPage() {
  useEffect(() => {
    GA4.pageView("Formacion");
  }, []);

  return (
    <section>
      <Typography variant="h2" marginY={2}>
        Formación
      </Typography>
      <ButtonGroup variant="outlined" color="pale">
        <Button onClick={() => handleScrollTo("carrera")}>carrera</Button>
        <Button onClick={() => handleScrollTo("cursos")}>cursos</Button>
      </ButtonGroup>

      <article id="carrera">
        <Typography
          variant="h3"
          sx={{ marginTop: "1em" }}
          onClick={() => handleScrollToTop()}
        >
          Carrera
        </Typography>
        <Paper
          sx={{
            p: 2,
            textAlign: "left",
            bgcolor: "#FFFFFF40",
            maxWidth: "md",
            m: "auto",
          }}
        >
          <Stack spacing={1}>
            <Curso
              type="Carrera"
              title="Redactor Literario (especializado en textos literarios)"
              date="2011–2013"
              place="Instituto Superior de Letras Eduardo Mallea"
              href="https://institutomallea.edu.ar/"
            />
            <Curso
              type="Carrera"
              title="Corrector Literario (especializado en textos literarios)"
              date="2009–2011"
              place="Instituto Superior de Letras Eduardo Mallea"
              href="https://institutomallea.edu.ar/"
            />
          </Stack>
        </Paper>
      </article>
      <article id="cursos">
        <Typography variant="h3" onClick={() => handleScrollToTop()}>
          Cursos
        </Typography>
        <Paper
          sx={{
            p: 2,
            textAlign: "left",
            bgcolor: "#FFFFFF40",
            maxWidth: "md",
            m: "auto",
          }}
        >
          <Stack spacing={1}>
            <Curso
              type="Seminario"
              title="La construcción de mundos imaginarios"
              date="2023"
              content="por Martín Felipe Castagnet"
              place="Fundación La Balandra"
              href="https://fundacionlabalandra.org.ar/"
            />
            <Curso
              type="Seminario"
              title="¡Arriba las manos! Seminario de Literatura Policial"
              date="2023"
              content="por Daniel Giarone"
              place="Biblioteca Juan Bautista Alberdi"
            />
            <Curso
              type="Seminario"
              title="¿Qué es la ficción histórica?"
              content="por María Rosa Lojo"
              date="2022, a distancia"
              place="Fundación La Balandra"
              href="https://fundacionlabalandra.org.ar/"
            />
            <Curso
              type="Taller"
              title="Novela Histórica. Leerla, entenderla, escribirla"
              content="por Leonardo Padura"
              date="2021, a distancia"
              place="Talleres de bolsillo"
              href="https://www.talleresdebolsillo.com.ar/"
            />
            <Curso
              type="Curso"
              title="Técnicas de composición para diseño gráfico"
              content="por Javier Alcaraz"
              date="2021, a distancia"
              place="Domestika.org"
              href="https://www.domestika.org/"
            />
            <Curso
              type="Curso"
              title="Escritura de guión para cortometrajes de ficción"
              content="por Alejandra Moffat"
              date="2021, a distancia"
              place="Domestika.org"
              href="https://www.domestika.org/"
            />
            <Curso
              type="Curso"
              title="Creación de Libros Digitales con InDesign"
              place="Instituto Superior de Letras Eduardo Mallea"
              href="https://institutomallea.edu.ar/"
            />
            <Curso
              type="Seminario"
              title="Tesis, tesinas y monografías"
              content="por Adriana Santa Cruz"
              place="Instituto Superior de Letras Eduardo Mallea"
              href="https://institutomallea.edu.ar/"
            />
          </Stack>
        </Paper>
      </article>
    </section>
  );
}

export default FormacionPage;
