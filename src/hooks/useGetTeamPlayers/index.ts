import { getTeamPlayers } from "@/api/players";
import { useQuery } from "@tanstack/react-query";

const useGetTeamPlayers = (teamId: number, enabled: boolean) => {
  const { data: players = [], isLoading: arePlayersLoading } = useQuery({
    queryFn: () => getTeamPlayers(teamId),
    queryKey: ["teamPlayers", teamId],
    enabled,
  });

  return {
    players,
    arePlayersLoading,
  };
};

export default useGetTeamPlayers;
