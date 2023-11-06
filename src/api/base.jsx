import axios from "axios";

export const apiSitio = axios.create({
  baseURL: "",
  headers: {
    Accept: "application/json",
  },
});
// export const textSitio = axios.create({
//   baseURL: "",
//   headers: {
//     Accept: "text/html",
//   },
// });

export const doGET = async ({ host, url, callBack }) => {
  try {
    const response = await axios(url);
    if (response.statusText === "OK") {
      const data = response.data;
      callBack(data);
      return true;
    } else {
      console.log("AXIOS response ERROR", response);
      return false;
    }
  } catch (error) {
    console.log("AXIOS ERROR", error);
    return false;
  }
};
