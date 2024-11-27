import { PlayerAPIPayload } from "@/types";
import { fetchApi } from "./utils";

export const getTeamPlayers: (
  teamId: string
) => Promise<PlayerAPIPayload[]> = async teamId => {
  const response = await fetchApi("/players/active", { team_ids: [teamId] });
  return response.data;
};

export const getPlayerById: (
  playerId: string
) => Promise<PlayerAPIPayload> = async playerId => {
  const response = await fetchApi(`/players/${playerId}`);
  return response.data;
};
