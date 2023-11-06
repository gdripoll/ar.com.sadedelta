import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function Texto({ info, handleClick }) {
  const { slug, tipo, titulo, bajada, path, image } = info;

  return (
    <Card>
      {/* <CardActionArea onClick={() => handleClick(info)}> */}
      <CardActionArea href={`/pag/textos/${slug}`}>
        <CardMedia
          component="img"
          height="140"
          image={`/api/text/${slug}/thumb.jpg`}
          alt={`Fotografía de ${image.name ? image.name : "autor deconocido"}`}
        />
        <CardContent
        //   sx={{
        //     position: "relative",
        //     textAlign: "left",
        //     py: 1,
        //     paddingBottom: "0 !important",
        //   }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontVariant: "small-caps" }}
          >
            {tipo} {slug}
          </Typography>
          <Typography variant="h4">{titulo}</Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "justify",
              pt: 1,
              borderTop: 1,
              lineHeight: 1.2,
            }}
          >
            {bajada}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Texto;
