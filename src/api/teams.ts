import { TeamAPIPayload } from "@/types";
import { fetchApi } from "./utils";

export const getTeams: () => Promise<TeamAPIPayload[]> = async () => {
  const response = await fetchApi("/teams");
  return response.data;
};
