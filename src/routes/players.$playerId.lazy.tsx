import useGetPlayer from "@/hooks/useGetPlayer";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/players/$playerId")({
  component: Player,
});

function Player() {
  const { playerId } = Route.useParams();

  const { player, isPlayerLoading } = useGetPlayer(playerId, Boolean(playerId));

  if (isPlayerLoading) {
    return <div>Loading...</div>;
  }

  if (!player) {
    return <div>Erreur lors de la récupération des informations du joueur</div>;
  }

  return <div>{`${player?.firstName} ${player?.lastName}`}</div>;
}
