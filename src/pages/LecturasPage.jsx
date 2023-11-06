import { useEffect, useState } from "react";
import { MenuItem, Paper, Select, Stack, Typography } from "@mui/material";

import Lectura from "../components/Lectura";
import { getLecturas, getLectura, getAutores } from "../api/apis";
import GA4 from "../utils/GA4";

function LecturasPage() {
  const [lecturas, setLecturas] = useState();
  const [autores, setAutores] = useState();
  const [lectura, setLectura] = useState();
  const [anio, setAnio] = useState();

  useEffect(() => {
    getAutores((data) => {
      setAutores(data);
    });
    GA4.pageView("Lecturas");
    getLecturas((data) => {
      setLecturas(data);
      setAnio(data[0]);
    });
  }, []);
  useEffect(() => {
    if (anio && autores) {
      getLectura(anio, (data) => {
        const lec = data.map((l) => {
          l.autor = autores[l.autor];
          return l;
        });
        setLectura(lec);
      });
    }
  }, [anio, autores]);

  return (
    <section>
      {/* <Typography variant="body2" sx={{ maxWidth: "30%", margin: "0 auto" }}>
        Una pregunta recurrente de la gente de conozco es ¿qué leíste? ¿qué
        estás leyendo?. Así que un día me cansé de no acordarme y les dije: mirá
        en el sitio, nunca me acuerdo de memoria.
      </Typography> */}

      <Typography variant="h2" marginY={2}>
        Algunas Lecturas recomendables
      </Typography>
      {anio && (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={anio}
          // label="Año"
          onChange={(e) => setAnio(e.target.value)}
          size="large"
          sx={{ marginY: 2 }}
        >
          {lecturas.map((a) => (
            <MenuItem key={a} value={a}>
              Año {a}
            </MenuItem>
          ))}
        </Select>
      )}
      <article>
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
            {lectura &&
              lectura.map((l, index) => {
                // console.log(l);
                return <Lectura key={index} lectura={l} />;
              })}
          </Stack>
        </Paper>
      </article>
    </section>
  );
}

export default LecturasPage;
