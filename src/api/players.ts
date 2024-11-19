import { Player } from "@/types";
import { fetchApi } from "./utils";

export const getTeamPlayers: (
  teamId: number
) => Promise<Player[]> = async teamId => {
  const response = await fetchApi("/players/active", { team_ids: [teamId] });
  return response.data;
};
