import { getTeamPlayers } from "@/api/players";
import { useQuery } from "@tanstack/react-query";
import { parsePlayers } from "./utils";

const useGetTeamPlayers = (teamId: string, enabled: boolean) => {
  const { data: players = [], isLoading: arePlayersLoading } = useQuery({
    queryFn: () => getTeamPlayers(teamId),
    queryKey: ["teamPlayers", teamId],
    enabled,
  });

  return {
    players: parsePlayers(players),
    arePlayersLoading,
  };
};

export default useGetTeamPlayers;
