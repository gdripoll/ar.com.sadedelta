import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import "./App.css";
// layouts
import GeneralLayout from "./layouts/GeneralLayout";
import PageLayout from "./layouts/PageLayout";
// pages
import NoticiasPage from "./pages/NoticiasPage";
import TextosPage from "./pages/TextosPage";
import TextoPage from "./pages/TextoPage";
import LecturasPage from "./pages/LecturasPage";
import GaleriaPage from "./pages/GaleriaPage";
import ReconocimientosPage from "./pages/ReconocimientosPage";
import PublicacionesPage from "./pages/PublicacionesPage";
import FormacionPage from "./pages/FormacionPage";
import ContactoPage from "./pages/ContactoPage";
// landing
import CdeR2023 from "./pages/landings/CdeR2023";
// varios
import ErrorPage from "./pages/ErrorPage";
import { brown, red } from "@mui/material/colors";
import GA4 from "./utils/GA4";

const theme = createTheme({
  palette: {
    primary: brown,
    secondary: red,
    pale: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Times",
    body1: {
      lineHeight: 1.2,
      fontSize: "1.4rem",
    },
  },
});

GA4.initialize();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<GeneralLayout />}> */}
          <Route path="/" element={<PageLayout />}>
            <Route index element={<NoticiasPage />} />
            <Route path="lecturas" element={<LecturasPage />} />
            <Route path="galeria" element={<GaleriaPage />} />
            <Route path="reconocimientos" element={<ReconocimientosPage />} />
            <Route path="publicaciones" element={<PublicacionesPage />} />
            <Route path="formacion" element={<FormacionPage />} />
            <Route path="contacto" element={<ContactoPage />} />
            <Route path="textos" element={<TextosPage />} />
            <Route path="textos/:slug" element={<TextoPage />} />
            <Route path="*" element={<ErrorPage />} />
            {/* </Route> */}
            <Route path="/eventos/2023-CuentosDeRio" element={<CdeR2023 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
