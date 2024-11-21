import { PlayerAPIPayload } from "@/types";
import { fetchApi } from "./utils";

export const getTeamPlayers: (
  teamId: string
) => Promise<PlayerAPIPayload[]> = async teamId => {
  const response = await fetchApi("/players/active", { team_ids: [teamId] });
  return response.data;
};
