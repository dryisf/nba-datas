import { getPlayerSeasonAverages } from "@/api/stats";
import { useQuery } from "@tanstack/react-query";
import { parsePlayerSeasonAverages } from "./utils";

const useGetPlayerSeasonAverages = (
  playerId: string,
  season: number,
  enabled: boolean
) => {
  const { data: seasonAverages = null, isLoading: areSeasonAveragesLoading } =
    useQuery({
      queryFn: () => getPlayerSeasonAverages(playerId, season),
      queryKey: ["seasonAverages", playerId, season],
      enabled,
    });

  return {
    seasonAverages: seasonAverages
      ? parsePlayerSeasonAverages(seasonAverages)
      : null,
    areSeasonAveragesLoading,
  };
};

export default useGetPlayerSeasonAverages;
