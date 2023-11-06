import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";

import { grey } from "@mui/material/colors";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StarRateIcon from "@mui/icons-material/StarRate";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

function Lectura({ lectura }) {
  const { tipo, titulo, autor, genero, year, rate, obs, partes } = lectura;
  return (
    <Card>
      <CardContent
        sx={{
          position: "relative",
          textAlign: "left",
          py: 1,
          paddingBottom: "0 !important",
        }}
      >
        <Tipo tipo={tipo} />
        <Typography variant="h4" sx={{ lineHeight: 1 }}>
          {titulo}
        </Typography>
        <Autor autor={autor} year={year} />
        <Rate rate={rate} />
        <Partes partes={partes} />
        <Obs value={obs} />
      </CardContent>
    </Card>
  );
}

function Tipo({ tipo }) {
  return (
    tipo && (
      <Typography
        variant="body2"
        color="text.secondary"
        gutterBottom
        sx={{ fontVariant: "small-caps", my: 0 }}
      >
        {tipo}
      </Typography>
    )
  );
}
function Autor({ autor, year }) {
  const { nombre, link } = autor;
  // console.log(nombre, link);
  return (
    <Typography variant="body1">
      {year && <span style={{ marginRight: "0.5rem" }}>({year})</span>}
      {nombre}
      <IconButton href={link} target="_blank">
        <OpenInNewIcon fontSize="small" />
      </IconButton>
    </Typography>
  );
}
function Rate({ rate }) {
  if (rate) {
    let stars = Array();
    for (let i = 0; i < rate; i++)
      stars.push(<StarRateIcon key={i} fontSize="small" color="info" />);
    return (
      <Box sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
        {stars}
      </Box>
    );
  } else {
    (" ");
  }
}
function Partes({ partes }) {
  if (partes && partes.length) {
    return (
      <Box>
        {partes.map((p, index) => {
          return (
            <Typography key={index} variant="body1" sx={{ py: 0 }} color="grey">
              <TextSnippetIcon fontSize="small" sx={{ marginRight: 0 }} /> {p}
            </Typography>
          );
        })}
      </Box>
    );
  } else {
    return "";
  }
}
function Obs({ value }) {
  return (
    value && (
      <Typography
        variant="body2"
        // color="grey"
        sx={{
          ml: 3,
          mr: { xs: 1, sm: 30 },
          mb: 1,
          p: 0.5,
          // border: 1,
          backgroundColor: grey[200],
        }}
      >
        {value}
      </Typography>
    )
  );
}

export default Lectura;
