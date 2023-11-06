import { Link } from "react-router-dom";
import { Card, CardActions, CardContent, Typography } from "@mui/material";

const Curso = ({ type, title, content, date, place, href }) => {
  return (
    <Card>
      <CardContent>
        {type && (
          <Typography variant="subtitle" color="text.secondary" gutterBottom>
            {type}
          </Typography>
        )}
        <Typography variant="h4">{title}</Typography>
        {content && <Typography variant="body1">{content}</Typography>}
        {date && <Typography variant="body2">({date})</Typography>}
        {href ? (
          <Link to={href} target="_blank" className="ficha-link">
            {place}
          </Link>
        ) : (
          <span className="ficha-link">{place}</span>
        )}
      </CardContent>
    </Card>
  );
};

export default Curso;
