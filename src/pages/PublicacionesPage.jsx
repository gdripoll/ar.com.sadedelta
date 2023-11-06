import { Button, ButtonGroup, Paper, Stack, Typography } from "@mui/material";
import { handleScrollTo, handleScrollToTop } from "../utils/scrolls";
import Publicacion from "../components/Publicacion";
import { useEffect } from "react";
import GA4 from "../utils/GA4";

function PublicacionesPage() {
  useEffect(() => {
    GA4.pageView("Publicaciones");
  }, []);

  return (
    <section>
      <Typography variant="h2" marginY={2}>
        Publicaciones
      </Typography>
      <ButtonGroup variant="outlined" color="pale">
        <Button onClick={() => handleScrollTo("narrativa")}>narrativa</Button>
        <Button onClick={() => handleScrollTo("tecnicos")}>técnicos</Button>
        <Button onClick={() => handleScrollTo("antologias")}>antologías</Button>
        <Button onClick={() => handleScrollTo("revistas")}>revistas</Button>
        <Button onClick={() => handleScrollTo("ensayo")}>ensayo</Button>
      </ButtonGroup>

      <article id="narrativa">
        <Typography variant="h3" sx={{ marginTop: "1em" }} onClick={() => handleScrollToTop()}>
          Narrativa
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
          {" "}
          <Stack spacing={1}>
            <Publicacion
              image="/img/hdr-img-list.png"
              type="Libro de cuentos"
              title="Historias de río"
              date="2022"
              place="Tigre"
              editorial="Apasionarte"
              isbn="978-987-3809-93-4"
              content="Acariciando el norte de la ciudad de Buenos Aires, ilusionada de cemento, edificios y semáforos, se despliega el Delta del río Paraná. Vena marrón que sangra aguas cansadas a través de un moteado de verde casi virgen. Allí vive lo brutalmente silvestre, amenazando la ordenada civilidad de los humanos. Esta no es tierra de oficinas. No viven aquí los dueños de los lujosos yates que pasean por el estuario del Río de la Plata, sino aquellos que cuidan los arroyos, los que limpian, los que pilotean los barcos, y los mantienen, y los reparan. Este es el pedazo de tierra de aquellos para los cuales el río es vida, y también es muerte."
              libreria="https://libreria.derio.com.ar/pag/libro/historias-de-rio"
            />
            <Publicacion
              image="/img/mdr-img-list.png"
              type="Libro de cuentos"
              title="Misterios de río"
              date="2023"
              place="Tigre"
              editorial="Apasionarte"
              isbn="978-987-82902-3-2"
              content="El misterio se asoma por la esquina del ojo. En voz alta nadie lo recuerda; en susurros, nadie puede olvidarlo. Habita en el espacio de lo que percibimos, pero que la cabeza no consigue encastrar en la realidad. Y entonces, por mera supervivencia, lo escondemos. Un instinto superior nos obliga a barrerlo bajo la alfombra de la lógica. Rápido, antes de que destruya nuestro mundo y nos precipite hacia los abismos de la locura. Y después sobreviene la duda. El cadáver podrido de ese recuerdo fugaz engendra monstruos en la duermevela. Somos esclavos del recuerdo. Borges afirma que “Sólo una cosa no hay. Es el olvido”. Y entonces la duda queda ahí, encallada, estropeando la realidad que nos inventamos. Y engendra misterios."
              libreria="https://libreria.derio.com.ar/pag/libro/misterios-de-rio"
            />{" "}
          </Stack>
        </Paper>
      </article>
      <article id="tecnicos">
        <Typography variant="h3" sx={{ marginTop: "1em" }} onClick={() => handleScrollToTop()}>
          Técnicos
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
          {" "}
          <Stack spacing={1}>
            <Publicacion
              image="/img/cdc-img-list.png"
              type="Técnicas de escritura creativa"
              title="El camino del cuento"
              date="2023"
              place="Tigre"
              editorial="Apasionarte"
              isbn="978-987-82902-4-9"
              content="La inspiración es como ir de pesca. Podés tener la suerte de que haya muchos peces justo donde vos te paraste. Pero si no tenés una caña en la mano, y la caña no tiene anzuelo, y no ponés una buena carnada, por más que te quedes todo el día no vas a pescar nada. Si querés pescar, necesitás las herramientas apropiadas; si querés escribir, también."
              libreria="https://libreria.derio.com.ar/pag/libro/el-camino-del-cuento"
            />
          </Stack>
        </Paper>
      </article>

      <article id="antologias">
        <Typography variant="h3" sx={{ marginTop: "1em" }} onClick={() => handleScrollToTop()}>
          Antologías
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
            <Publicacion type="Cuento" title="El dorado" antologia="Relatos de mi tierra. SADE Delta Bonaerense 50 años" date="2023" editorial="Editorial Apasionarte" place="Tigre" />
            <Publicacion type="Cuento" title="Vuelta campana" antologia="Relatos con alma de río" date="2022" editorial="Editorial Apasionarte" place="Tigre" />
            <Publicacion
              type="Cuento"
              title="Vuelta campana"
              antologia="Antología 2º Concurso de Narrativa de Fundación La Balandra"
              date="2021"
              editorial="Editorial La Balandra"
              href="https://fundacionlabalandra.org.ar/"
              place="Buenos Aires"
            />
            <Publicacion type="Cuento" title="La paradoja del sobrecito" antologia="Antología SADE Delta Bonaerense 2021" date="2021" editorial="Editorial Apasionarte" place="Tigre" />
            <Publicacion type="Cuento" title="El viejo" antologia="Antología Nuestras raíces" date="2016" editorial="Editorial Apasionarte" place="Tigre" />
            <Publicacion type="Cuento" title="El coro" antologia="Antología Nuestras raíces" date="2016" editorial="Editorial Apasionarte" place="Tigre" />
            <Publicacion type="Texto" title="De mañana" antologia='Antología Concurso Internacional de Microrelatos "Erótica"' date="2016" editorial="Ediciones de Letras" place="España" />
            <Publicacion type="Cuento" title="Miradas que matan" antologia="Antología SADE Delta Bonaerense 2016" date="2016" editorial="Editorial Apasionarte" place="Tigre" />
            <Publicacion type="Cuento" title="Manchado" antologia="Antología SADE Delta Bonaerense 2016" date="2016" editorial="Editorial Apasionarte" place="Tigre" />
            <Publicacion type="Cuento" title="El fiero" antologia="Pescando Letras. Antología de Cuento y Poesía" date="2015" editorial="Editorial Apasionarte" place="Tigre" />
            <Publicacion
              type="Microrelato"
              title="Trienta monedas"
              antologia="Finalistas IV Concurso Internacional de Microrelatos «Museo de la Palabra»"
              date="2015"
              editorial="Fundación César Egido Serrano"
              href="https://www.fundacioncesaregidoserrano.com/es/"
              place="Madrid"
            />
            <Publicacion type="Cuento" title="Juan Blanco" antologia="Antología SADE Delta Bonaerense 2015" date="2015" editorial="Editorial Apasionarte" place="Tigre" />
            <Publicacion type="Cuento" title="El recitador" antologia="Antología El Caldero 2004" date="2004" editorial="El Caldero" place="Buenos Aires" />
            <Publicacion
              type="Cuento"
              title="Volver a volar"
              antologia="Antología Criaturas Mágicas - Dos islas, Dos mares"
              date="2004"
              editorial="Mundo Cultural Hispano"
              href="https://www.scribd.com/document/356095051/Antologia-Criaturas-Magicas"
              place="La Habana"
            />
            <Publicacion type="Cuento" title="El fiero" antologia="Antología El Caldero 2004" date="2004" editorial="El Caldero" place="Buenos Aires" />{" "}
            <Publicacion type="Cuento" title="El hijo de la loba" antologia="Antología El Caldero 2004" date="2004" editorial="El Caldero" place="Buenos Aires" />
          </Stack>
        </Paper>
      </article>
      <article id="revistas">
        <Typography variant="h3" sx={{ marginTop: "1em" }} onClick={() => handleScrollToTop()}>
          Revistas
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
            <Publicacion type="Cuento" title="El gemelo" antologia="Revista Ser en la cultura" date="2011" place="Buenos Aires" editorial="Casa y Mutual Universitaria de Gral. San Martin" />
            <Publicacion
              type="Cuento"
              title={
                <span>
                  <i>Le drageur de sable</i> (El arenero, trad.)
                </span>
              }
              antologia="Revista Rue Saint Ambroise Nº27"
              date="2011"
              place="París"
              editorial="Rue Saint Ambroise"
              href="http://ruesaintambroise.weebly.com/ndeg27.html"
            />
            <Publicacion type="Cuento" title="Los juntapiedras" antologia="Revista Imag - Año 12 - Nº51" date="2011" place="Buenos Aires" editorial="Centro de Diagnóstico Dr. Enrique Rossi" />
            <Publicacion type="Cuento" title="Clavado" antologia="Revista Lea Nº26" place="Buenos Aires" editorial="Revista Lea" />
            <Publicacion type="Artículo" title="José Saramago" antologia="Revista Ser en la Cultura Nº22" place="Buenos Aires" editorial="Casa y Mutual Universitaria de Gral. San Martin" />
            <Publicacion type="Cuento" title="Los de Comala" antologia="Revista Golwen Nº35" place="Buenos Aires" editorial="Golwen" />
            <Publicacion type="Cuento" title="El gemelo" antologia="Revista Golwen Nº33" place="Buenos Aires" editorial="Golwen" />
            <Publicacion type="Cuento" title="Serrano, el imitador" antologia="Revista Golwen Nº28" place="Buenos Aires" editorial="Golwen" />
            <Publicacion type="Cuento" title="El cuento circular" antologia="Revista Golwen Nº24" place="Buenos Aires" editorial="Golwen" />
            <Publicacion type="Cuento" title="24h « Rewind" antologia="Boletín Marcelo Dos Santos Nº52" place="Buenos Aires" editorial="Marcelo Dos Santos" />
          </Stack>
        </Paper>
      </article>
      <article id="ensayo">
        <Typography variant="h3" sx={{ marginTop: "1em" }} onClick={() => handleScrollToTop()}>
          Ensayo
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
            <Publicacion type="Ensayo" title="Entre el redactor y el escritor" date="2013" editorial="Academia" href="https://institutomallea.academia.edu/GustavoDanielRipoll" />
            <Publicacion type="Ensayo" title="El otro verosímil" date="2010" editorial="Academia" href="https://institutomallea.academia.edu/GustavoDanielRipoll" />
            <Publicacion type="Ensayo" title='Sobre "Bienvenido, Bob" de Onetti' date="2010" editorial="Academia" href="https://institutomallea.academia.edu/GustavoDanielRipoll" />
            <Publicacion
              type="Ensayo"
              title="Marginalidad social en La invención de Morel de Bioy Casares"
              date="2010"
              editorial="Academia"
              href="https://institutomallea.academia.edu/GustavoDanielRipoll"
            />
          </Stack>
        </Paper>
      </article>
    </section>
  );
}

export default PublicacionesPage;
