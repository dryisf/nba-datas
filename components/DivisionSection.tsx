import TeamLogo from "@/components/TeamLogo";
import { ROUTE_TEAM_ID } from "@/routes";
import { Team } from "@/types";
import Link from "next/link";

type Props = {
  divisionName: string;
  teams: Team[];
};

function DivisionSection({ divisionName, teams }: Props) {
  return (
    <div>
      <h3 className="text-2xl font-semibold">{divisionName}</h3>
      <div className="flex justify-center items-center flex-wrap gap-4 mt-4">
        {teams.map(team => {
          return (
            <Link
              key={team.id}
              href={ROUTE_TEAM_ID.replace(/\:id/, `${team.id}`)}
              className="group"
            >
              <div className="group-hover:bg-slate-200 border-slate-500 rounded-lg border">
                <div className="flex flex-col gap-2 items-center p-4">
                  <TeamLogo size={200} teamAbbreviation={team.abbreviation} />
                  <p className="font-semibold group-hover:text-slate-500">
                    {team.fullName}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default DivisionSection;
