import TeamLogo from "@/components/TeamLogo";
import { ROUTE_PLAYER_ID } from "@/routes";
import { getTeamPlayers } from "@/utils/api";
import Link from "next/link";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const players = (await getTeamPlayers(id)) || [];
  const team = players[0]?.team;

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center">
        <TeamLogo size={200} teamAbbreviation={team.abbreviation} />
        <p className="text-3xl font-semibold">{team.fullName}</p>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {players.map(player => {
          return (
            <Link
              key={player.id}
              href={ROUTE_PLAYER_ID.replace(/\:id/, `${player.id}`)}
            >
              <div className="hover:bg-slate-200">
                <div className="flex justify-center p-4">
                  <p>{`${player.firstName} ${player.lastName}`}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
