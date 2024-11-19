import qs from "qs";
import { API_URL } from "./constants";

export const fetchApi = async (endpoint: string, params?: object) => {
  const response = await fetch(
    `${API_URL}${endpoint}${
      params ? qs.stringify(params, { addQueryPrefix: true }) : ""
    }`,
    {
      headers: {
        Authorization: import.meta.env.VITE_API_KEY,
      },
    }
  );
  return await response.json();
};
