import { Paper, Stack, Typography } from "@mui/material";
import Reconocimiento from "../components/Reconocimiento";
import { useEffect } from "react";
import GA4 from "../utils/GA4";

function ReconocimientosPage() {
  useEffect(() => {
    GA4.pageView("Reconocimientos");
  }, []);
  return (
    <section>
      <Typography variant="h2" marginY={2}>
        Reconocimientos
      </Typography>
      <article id="narrativa">
        <Paper
          sx={{
            p: 2,
            textAlign: "left",
            bgcolor: "#FFFFFF40",
            maxWidth: "md",
            m: "auto",
          }}
        >
          {" "}
          <Stack spacing={1}>
            <Reconocimiento
              premio="Finalista - segundo premio"
              concurso="Concurso de cuentos María Esther Vázquez 2021"
              type="Cuento"
              title="El Doctor y el origami"
              date="2022"
              place="Buenos Aires, Argentina"
              fundacion="Fundación Victoria Ocampo"
              href="https://www.victoriaocampo.com/ConcursosxArea.aspx?area=Cuentos"
            />
            <Reconocimiento
              premio="Finalista"
              concurso="2° Concurso de Narrativa Fundación La Balandra"
              type="Cuento"
              title="Vuelta campana"
              date="2021"
              place="Buenos Aires, Argentina"
              fundacion="Fundación La Balandra"
              href="https://fundacionlabalandra.org.ar/"
            />
            <Reconocimiento
              premio="1° Mención"
              concurso="75° Concurso Internacional Resurgir de las Palabras 2021"
              type="Cuento"
              title="La paradoja del sobrecito"
              date="2021"
              place="Junín, Argentina"
              fundacion="Instituto Cultural Latinoamericano"
              href="https://www.facebook.com/profile.php?id=100070911332903"
            />
            <Reconocimiento
              premio="Finalista"
              concurso='IV Concurso Internacional "Museo de la Palabra"'
              type="Microrelato"
              title="Treinta monedas"
              date="2016"
              place="Madrid, España"
              fundacion="Fundación César Egido Serrano"
              href="https://www.fundacioncesaregidoserrano.com/en/"
            />
            <Reconocimiento
              premio="Finalista"
              concurso="IV Concurso de Microrelatos Eróticos"
              type="Microrelato"
              title="De mañana"
              date="2016"
              place="España"
              fundacion="Ediciones de Letras"
            />
            <Reconocimiento
              premio="Ganador"
              concurso="Premio Juan Rulfo de cuento"
              type="Cuento"
              title="El arenero"
              date="2010"
              place="París, Francia"
              fundacion="Radio Francia Internacional - Casa de las Américas de París"
              href="https://www.rfi.fr/es/cultura/20101213-el-argentino-gustavo-ripoll-gana-el-concurso-juan-rulfo"
            />
          </Stack>
        </Paper>
      </article>
    </section>
  );
}

export default ReconocimientosPage;
