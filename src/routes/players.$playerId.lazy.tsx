import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/players/$playerId")({
  component: Player,
});

function Player() {
  const { playerId } = Route.useParams();

  return "Hello, you're on the page of the player which ID is: " + playerId;
}
