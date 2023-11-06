import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { getTextContent, getTextMetadata } from "../api/apis";
import GA4 from "../utils/GA4";

//  {
//     "tipo": "Microrelato",
//     "titulo": "Segrob",
//     "bajada": "Cuentan que Segrob...",
//     "path": "/api/text/07-segrob",
//     "image": {}
//   },

function TextoPage() {
  const { slug } = useParams();
  const [content, setContent] = useState();
  const [meta, setMeta] = useState();

  useEffect(() => {
    getTextContent(slug, (cont) => {
      setContent(cont);
    });
    getTextMetadata(slug, (meta) => {
      setMeta(meta);
      GA4.pageView(`Texto-${meta.slug}`);
    });
  }, []);

  // console.log({ meta, content });
  return (
    content &&
    meta && (
      <section>
        <article>
          <Paper
            sx={{
              p: 2,
              textAlign: "left",
              bgcolor: "#FFFFFFFF",
              maxWidth: { xs: "100vh", md: "md" },
              m: "20px auto",
              mb: "100px",
            }}
          >
            <IconButton id="buttonBack" href="/pag/textos">
              <Avatar>
                <ArrowBackIcon />
              </Avatar>
            </IconButton>
            <Stack spacing={1} sx={{ alignItems: "center" }}>
              <Typography variant="h2">{meta.titulo}</Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontVariant: "small-caps" }}
              >
                {meta.tipo} &mdash; de Gustavo Daniel Ripoll
              </Typography>
              {/* <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  width: { xs: "100%", sm: "75%", md: "50%" },
                  margin: "auto",
                }}
              >
                {meta.bajada}
              </Typography> */}
              <Box
                id="textoLectura"
                sx={{
                  fontSize: "1.5rem",
                  padding: { xs: "1em 0em", sm: "1em 1em", md: "1em 2em" },
                  textIndent: "1em",
                  textAlign: "justify",
                  "& p": {
                    margin: 0,
                  },
                }}
              >
                <ReactMarkdown>{content}</ReactMarkdown>
              </Box>
              <img
                id="bigImage"
                src={`/api/text/${meta.slug}/image.jpg`}
                style={{ width: "100%" }}
              />
              {meta.image.name && (
                <Typography variant="body2">
                  Fotografía por{" "}
                  <Link to={meta.image.url} target="_blank">
                    {meta.image.name}
                  </Link>
                </Typography>
              )}
            </Stack>
          </Paper>
        </article>
      </section>
    )
  );
}

export default TextoPage;
