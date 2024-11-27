import { getPlayerById } from "@/api/players";
import { useQuery } from "@tanstack/react-query";
import { parsePlayer } from "../utils";

const useGetPlayer = (playerId: string, enabled: boolean) => {
  const { data: player = null, isLoading: isPlayerLoading } = useQuery({
    queryFn: () => getPlayerById(playerId),
    queryKey: ["player", playerId],
    enabled,
  });

  return {
    player: player ? parsePlayer(player) : null,
    isPlayerLoading,
  };
};

export default useGetPlayer;
