import { ROUTE_TEAM_ID } from "@/routesPaths";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(ROUTE_TEAM_ID)({
  component: Team,
});

function Team() {
  const { teamId } = Route.useParams();
  return (
    "Hello, vous êtes bien sur la page de l'équipe ayant pour ID: " + teamId
  );
}
