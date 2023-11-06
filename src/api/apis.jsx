import { apiSitio, doGET } from "./base";

//-- TEXTOS
export const getTextos = (callBack) => {
  // console.log("API> getTextos -- calling.");
  const textos = doGET({
    host: apiSitio,
    url: "/api/text/textos.json",
    callBack: callBack,
  });
  return textos;
};
export const getTextContent = (slug, callBack) => {
  // console.log(`API> getTexto -- calling ${slug}`);
  const texto = doGET({
    host: apiSitio,
    url: `/api/text/${slug}/texto.md`,
    callBack: callBack,
  });
  return true;
};
export const getTextMetadata = (slug, callBack) => {
  const data = doGET({
    host: apiSitio,
    url: `/api/text/${slug}/metadata.json`,
    callBack: callBack,
  });
  return true;
};

//-- GALERIA
export const getGalerias = (callBack) => {
  console.log("API> getGalerias -- calling.");
  const galerias = doGET({
    host: apiSitio,
    url: "/api/gallery/galerias.json",
    callBack: callBack,
  });
  return galerias;
};
export const getGaleria = (name, callBack) => {
  // console.log(`API> getGaleria ${name} -- calling.`);
  const galeria = doGET({
    host: apiSitio,
    url: `/api/gallery/gal.${name}.json`,
    callBack: callBack,
  });
  return galeria;
};

//-- LECTURAS
export const getLecturas = (callBack) => {
  // console.log("API> getLecturas -- calling.");
  const lecturas = doGET({
    host: apiSitio,
    url: "/api/lecturas/lecturas.json",
    callBack: callBack,
  });
  return lecturas;
};
export const getAutores = (callBack) => {
  // console.log("API> getAutores -- calling.");
  const autores = doGET({
    host: apiSitio,
    url: "/api/lecturas/autores.json",
    callBack: callBack,
  });
  return autores;
};
export const getLectura = (name, callBack) => {
  // console.log(`API> getLectura ${name} -- calling.`);
  const lectura = doGET({
    host: apiSitio,
    url: `/api/lecturas/${name}.json`,
    callBack: callBack,
  });
  return lectura;
};
