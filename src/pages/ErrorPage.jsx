import { Typography } from "@mui/material";
import { useEffect } from "react";
import GA4 from "../utils/GA4";

function ErrorPage() {
  useEffect(() => {
    GA4.pageView("Error");
  }, []);

  return (
    <article>
      <Typography variant="h2" marginY={2}>
        Error
      </Typography>
    </article>
  );
}

export default ErrorPage;
