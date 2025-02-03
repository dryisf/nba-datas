import AddFavoriteButton from "@/components/AddFavoriteButton";
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
      <div className="flex justify-start w-full">
        <AddFavoriteButton teamId={team.id} />
      </div>
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
              className="group"
            >
              <div className="group-hover:bg-slate-200 border-slate-500 rounded-lg border">
                <div className="p-4">
                  <p className="font-semibold group-hover:text-slate-500">{`${player.firstName} ${player.lastName}`}</p>
                  <p className="font-semibold text-center text-slate-500">{`#${player.jerseyNumber}`}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
