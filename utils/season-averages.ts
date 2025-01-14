import { PlayerSeasonAverages, PlayerSeasonAveragesAPIPayload } from "@/types";

export const parsePlayerSeasonAverages: (
  playerSeasonAverages: PlayerSeasonAveragesAPIPayload
) => PlayerSeasonAverages = ({
  fg_pct,
  fg3_pct,
  ft_pct,
  games_played,
  player_id,
  ...seasonAverages
}) => {
  return {
    ...seasonAverages,
    fgPct: fg_pct,
    fg3Pct: fg3_pct,
    ftPct: ft_pct,
    gamesPlayed: games_played,
    playerId: player_id.toString(),
  };
};
