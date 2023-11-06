import { Box, Typography } from "@mui/material";

function DialogImage({ path, handleClose, open }) {
  if (path && open) {
    return (
      <Box
        onClick={handleClose}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "#000000EE",
          // padding: "2rem",
          backgroundImage: `url(${path})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 2000,
        }}
        style={{ cursor: "pointer" }}
      >
        <Typography
          variant="h4"
          style={{
            position: "fixed",
            textAlign: "center",
            fontVariant: "small-caps",
            margin: "0 auto",
            width: "100vw",
            bottom: "0",
            textShadow: "2px 2px 5px #ffffffff",
          }}
        >
          derio.com.ar
        </Typography>
      </Box>
    );
  } else {
    return "";
  }
}

export default DialogImage;
