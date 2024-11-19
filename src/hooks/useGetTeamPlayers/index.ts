import { getTeamPlayers } from "@/api/players";
import { useQuery } from "@tanstack/react-query";
import { filterInactivePlayers } from "./filters";

const useGetTeamPlayers = (teamId: number, enabled: boolean) => {
  const { data: players = [], isLoading: arePlayersLoading } = useQuery({
    queryFn: () => getTeamPlayers(teamId),
    queryKey: ["teamPlayers", teamId],
    enabled,
  });

  return {
    players: filterInactivePlayers(players),
    arePlayersLoading,
  };
};

export default useGetTeamPlayers;
