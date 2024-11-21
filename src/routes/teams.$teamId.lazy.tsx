import PlayersSection from "@/components/PlayersSection";
import TeamLogo from "@/components/TeamLogo";
import useGetTeamPlayers from "@/hooks/useGetTeamPlayers";
import { ROUTE_TEAM_ID } from "@/routesPaths";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(ROUTE_TEAM_ID)({
  component: Team,
});

function Team() {
  const { teamId } = Route.useParams();

  const { players, arePlayersLoading } = useGetTeamPlayers(
    teamId,
    Boolean(teamId)
  );

  const team = players[0]?.team;

  return arePlayersLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center">
        <TeamLogo size={200} teamAbbreviation={team.abbreviation} />
        <p className="text-3xl font-semibold">{team.fullName}</p>
      </div>
      <PlayersSection players={players} />
    </div>
  );
}
