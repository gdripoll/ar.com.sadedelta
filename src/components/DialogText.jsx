import { Box, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";

function DialogText({ data, handleClose, open }) {
  const [texto, setTexto] = useState("");
  useEffect(() => {
    const traerTexto = async () => {
      try {
        const { path } = data;
        // console.log("loading...");
        const res = await fetch(`${path}/texto.md`);
        if (res.ok) {
          // console.log("ok");
          const t = await res.text();
          // console.log(t);
          setTexto(t);
          //   setIsLoading(false);
        } else {
          //   setIsError(true);
        }
      } catch (error) {
        console.log(error);
        // setIsError(true);
      }
    };
    if (data) {
      traerTexto();
    } else {
      setTexto("***");
    }
  }, [data]);
  if (data && open) {
    const { tipo, titulo, bajada, path, image } = data;
    return (
      <Box
        onClick={handleClose}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "#000000CC",
          paddingY: "2rem",
          //   p: 0,
          overflowY: "scroll",
          zIndex: 2000,
        }}
        style={{ cursor: "pointer" }}
      >
        <Paper
          sx={{
            p: 2,
            textAlign: "left",
            bgcolor: "#FFFFFFFF",
            maxWidth: { xs: "100vh", md: "md" },
            m: "auto",
            mb: "100px",
          }}
        >
          <Stack spacing={1} sx={{ alignItems: "center" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontVariant: "small-caps" }}
            >
              {tipo}
            </Typography>
            <Typography variant="h2">{titulo}</Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                width: { xs: "100%", sm: "75%", md: "50%" },
                margin: "auto",
              }}
            >
              {bajada}
            </Typography>
            {/* texto */}
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
              <ReactMarkdown>{texto}</ReactMarkdown>
            </Box>
            {/* footer */}
            <img src={`${path}/image.jpg`} style={{ width: "100%" }} />
            {image.name && (
              <Typography variant="body2">
                Fotografía por{" "}
                <Link to={image.url} target="_blank">
                  {image.name}
                </Link>
              </Typography>
            )}
          </Stack>
        </Paper>
        <Typography
          variant="h6"
          style={{
            position: "fixed",
            right: "1rem",
            bottom: "0.3rem",
            textShadow: "2px 2px 5px #ffffffff",
          }}
        >
          @Gustavo Daniel Ripoll
        </Typography>
      </Box>
    );
  } else {
    return "";
  }
}

export default DialogText;
