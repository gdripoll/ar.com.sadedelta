import { Link } from "react-router-dom";
import { Box, Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material";

const Publicacion = ({ type, title, antologia, content, date, place, editorial, isbn, href, image, libreria }) => {
  const contenido = (
    <CardContent>
      <Stack direction={{ xs: "column", md: "row" }} sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {image && <img src={image} width={200} />}
        <Box>
          {type && (
            <Typography variant="subtitle" color="text.secondary" gutterBottom>
              {type}
            </Typography>
          )}
          <Stack direction={{ xs: "column", md: "row" }} sx={{ justifyContent: "space-between", alignItems: "flex-end" }}>
            <Typography variant="h4">{title}</Typography>
            {isbn && (
              <Typography variant="subtitle2" style={{ fontVariant: "small-caps" }}>
                isbn: {isbn}
              </Typography>
            )}
          </Stack>
          {antologia && <Typography variant="body1">{antologia}</Typography>}
          {content && (
            <Box sx={{ bgcolor: "gainsboro", p: 1 }}>
              <Typography variant="body2">{content}</Typography>
            </Box>
          )}
          <Typography variant="body1">
            {date && `(${date}) `}
            {place && `${place}: `}
            {href && editorial ? (
              <Link to={href} target="_blank" className="ficha-link">
                {editorial}
              </Link>
            ) : (
              <span className="ficha-link">{editorial}</span>
            )}
          </Typography>
        </Box>
      </Stack>
    </CardContent>
  );

  if (libreria) {
    return (
      <Card>
        <CardActionArea LinkComponent="a" href={libreria} target="_blank">
          {contenido}
        </CardActionArea>
      </Card>
    );
  } else {
    return <Card> {contenido} </Card>;
  }
};

export default Publicacion;
