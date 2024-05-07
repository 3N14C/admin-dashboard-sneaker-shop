import axios from "axios";
export const axiosInstanse = axios.create({
  baseURL: "https://sneaker-andriod-project.onrender.com/api",
  withCredentials: true,
});
