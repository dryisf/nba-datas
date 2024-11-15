import { fetchApi } from "./utils";

export const getTeams = async () => {
  const response = await fetchApi("/teams");
  return response.data;
};
