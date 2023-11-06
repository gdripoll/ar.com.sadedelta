import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Box, Button, ButtonGroup, Paper, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import GA4 from "../utils/GA4";

import { handleScrollTo, handleScrollToTop } from "../utils/scrolls";
import { getGaleria, getGalerias } from "../api/apis";
import DialogImage from "../components/DialogImage";

function GaleriaPage() {
  const [galerias, setGalerias] = useState([]);
  const [galeria, setGaleria] = useState([]);
  const [page, setPage] = useState();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();

  // galerias
  useEffect(() => {
    getGalerias((data) => {
      setGalerias(data);
      setPage(data[0]);
    });
    GA4.pageView("Galeria");
  }, []);
  // galeria
  useEffect(() => {
    if (page) {
      getGaleria(page.code, (data) => {
        setGaleria(data);
      });
      GA4.pageView(`Galeria/${page.code}`);
    }
  }, [page]);

  const changePage = (data) => {
    setGaleria([]);
    setPage(data);
  };

  const handleOpen = (id) => {
    setSelected(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // console.log({ page, galeria });
  const encabezado = (
    <>
      <Typography variant="h2" marginY={2}>
        Galería
      </Typography>
      <ButtonGroup variant="outlined" color="pale">
        {galerias.map((g) => {
          return (
            <Button key={g.code} onClick={() => changePage(g)}>
              {g.title}
            </Button>
          );
        })}
        {/* <Button onClick={() => handleScrollTo("cursos")}>Engatusado</Button> */}
      </ButtonGroup>
    </>
  );

  if (page) {
    return (
      <div>
        {encabezado}
        <article>
          <Typography
            variant="h3"
            margin={4}
            onClick={() => handleScrollToTop()}
          >
            {page.title}
            <GaleriaSubtitulo data={page.photoBy} />
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
            <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
              {galeria.map((i) => {
                // console.log(i);
                return (
                  <Box
                    key={i.id}
                    sx={{ textAlign: "center" }}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleOpen(i.image)}
                  >
                    <img
                      src={`/api/gallery/${page.code}/thumb.${i.image}`}
                      alt={i.alt}
                      style={{ maxWidth: "290px", maxHeight: "405px" }}
                    />
                  </Box>
                );
              })}
            </Masonry>
            <DialogImage
              path={`/api/gallery/${page.code}/${selected}`}
              handleClose={handleClose}
              open={open}
            />
          </Paper>
        </article>
      </div>
    );
  } else {
    <Typography variant="h3" color="warning">
      Sin datos
    </Typography>;
  }
}

const GaleriaSubtitulo = ({ data }) => {
  if (data) {
    return (
      <Typography variant="h6" component="div">
        Fotos por{" "}
        <Link to={data.url} target="_blank" className="foto-link">
          {data.name}
        </Link>
      </Typography>
    );
  } else {
    return "";
  }
};

export default GaleriaPage;
