import { useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GA4 from "../utils/GA4";

function ContactoPage() {
  useEffect(() => {
    GA4.pageView("Contacto");
  }, []);

  return (
    <article>
      <Typography variant="h2" marginY={2}>
        Contacto
      </Typography>
      <Card sx={{ maxWidth: "md", mx: "auto" }}>
        <CardMedia src="/img/contacto-card.jpg" component="img" height={200} />
        <CardContent sx={{ textAlign: "justify" }}>
          <Typography variant="h3">Charlemos</Typography>
          <Typography variant="body1">
            Siempre es bueno ponernos en contacto.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "end" }}>
          <Button
            variant="outlined"
            endIcon={<FacebookIcon />}
            href="https://www.facebook.com/gdripollok"
            target="_blank"
          >
            Facebook
          </Button>
          <Button
            variant="outlined"
            endIcon={<InstagramIcon />}
            href="https://www.instagram.com/gdripoll/"
            target="_blank"
          >
            Instagram
          </Button>
          <Button
            variant="contained"
            endIcon={<MailIcon />}
            href="mailto://gdripoll@gmail.com"
            target="_blank"
          >
            Email
          </Button>
        </CardActions>
      </Card>
    </article>
  );
}

export default ContactoPage;
