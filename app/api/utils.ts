import qs from "qs";
import { API_URL } from "./constants";

export const fetchApi = async (
  endpoint: string,
  method: string = "GET",
  params?: object
) => {
  const response = await fetch(
    `${API_URL}${endpoint}${
      params ? qs.stringify(params, { addQueryPrefix: true }) : ""
    }`,
    {
      method,
      headers: {
        ...(process.env.API_KEY && { Authorization: process.env.API_KEY }),
      },
    }
  );
  return await response.json();
};
