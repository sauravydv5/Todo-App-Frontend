import axios from "axios";
const instance = axios.create({
  baseURL: " https://todo-app-mmse.onrender.com",
});
export default instance;
