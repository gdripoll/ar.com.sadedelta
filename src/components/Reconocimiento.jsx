import { Link } from "react-router-dom";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

const Reconocimiento = ({
  type,
  title,
  premio,
  concurso,
  antologia,
  content,
  date,
  place,
  editorial,
  isbn,
  href,
  fundacion,
}) => {
  return (
    <Card>
      <CardContent>
        {premio && (
          <Typography variant="subtitle" color="text.secondary" gutterBottom>
            {premio}
          </Typography>
        )}
        <Typography variant="h4">{concurso}</Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1}
          sx={{ alignItems: "center", justifyContent: "flex-start" }}
        >
          <Typography variant="h5">{title}</Typography>
          {type && <Typography variant="h5">({type})</Typography>}
        </Stack>
        {antologia && <Typography variant="body1">{antologia}</Typography>}

        <Typography variant="body1">
          {href && fundacion ? (
            <Link to={href} target="_blank" className="ficha-link">
              {fundacion}
            </Link>
          ) : (
            <span className="ficha-link">{fundacion}</span>
          )}
          {". "}
          {place}
          {date && `. ${date}`}
          {". "}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Reconocimiento;
