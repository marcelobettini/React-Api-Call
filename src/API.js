import axios from "axios";
//Singleton
export const API = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
