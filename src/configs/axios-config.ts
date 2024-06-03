import axios from "axios";
export const axiosInstanse = axios.create({
  baseURL: "https://server-sneaker-shop.vercel.app/api",
});
