import axios from "axios";

const myAxios = axios.create({
  baseURL: "https://happiness-overload.netlify.app/",
});

export default myAxios;
