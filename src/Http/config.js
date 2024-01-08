import axios from "axios";

export const baseURL = `http://localhost:8000/`;
export const MuiBAseUrl = axios.create({ baseURL });
