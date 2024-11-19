import TeamsSection from "@/components/TeamsSection";
import useGetTeams from "@/hooks/useGetTeams";
import { ROUTE_INDEX } from "@/routesPaths";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(ROUTE_INDEX)({
  component: Index,
});

function Index() {
  const { teams, areTeamsLoading } = useGetTeams(true);

  return (
    <div>
      <TeamsSection teams={teams} areTeamsLoading={areTeamsLoading} />
    </div>
  );
}
