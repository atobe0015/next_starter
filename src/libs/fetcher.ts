import axios from "axios";
import aspida from "@aspida/axios";
import api from "../api/$api";

const axiosConfig = { timeout: 3000, baseURL: "https://example.com/api" };
export const fetcher = api(aspida(axios, axiosConfig));
