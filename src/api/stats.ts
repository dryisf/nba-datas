import { PlayerSeasonAveragesAPIPayload } from "@/types";
import { fetchApi } from "./utils";

export const getPlayerSeasonAverages: (
  playerId: string,
  season: number
) => Promise<PlayerSeasonAveragesAPIPayload> = async (playerId, season) => {
  const response = await fetchApi("/season_averages", {
    player_id: playerId,
    season,
  });
  return response?.data[0];
};
