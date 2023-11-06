import { useEffect, useState } from "react";
import GA4 from "../utils/GA4";
import { Paper, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";

import { getTextos } from "../api/apis";
import Texto from "../components/Texto";
// import DialogText from "../components/DialogText";

function TextosPage() {
  const [textos, setTextos] = useState([]);
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState();

  useEffect(() => {
    getTextos((data) => {
      setTextos(data);
    });
    GA4.pageView("Textos");
  }, []);

  const handleClose = (e) => {
    setSelected(null);
    setOpen(false);
  };

  return (
    <section>
      <Typography variant="h2" marginY={2}>
        Algunos textos ya publicados
      </Typography>
      <article>
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
            {textos &&
              textos.map((t, index) => {
                return <Texto key={index} info={t} />;
              })}
          </Masonry>
        </Paper>
      </article>
      {/* <DialogText data={selected} handleClose={handleClose} open={open} /> */}
    </section>
  );
}

export default TextosPage;
