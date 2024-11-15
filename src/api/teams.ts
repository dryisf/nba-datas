import { Team } from "@/types";
import { fetchApi } from "./utils";

export const getTeams: () => Promise<Team[]> = async () => {
  const response = await fetchApi("/teams");
  return response.data;
};
