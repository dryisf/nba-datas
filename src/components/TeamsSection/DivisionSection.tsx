import TeamLogo from "@/components/TeamLogo";
import { Card, CardContent } from "@/components/ui/card";
import { ROUTE_TEAM_ID } from "@/routesPaths";
import { Team } from "@/types";
import { Link } from "@tanstack/react-router";

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
              to={ROUTE_TEAM_ID.replace(/\$teamId/, `${team.id}`)}
            >
              <Card>
                <CardContent className="flex flex-col gap-2 items-center p-4">
                  <TeamLogo size={200} teamAbbreviation={team.abbreviation} />
                  <p>{team.full_name}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default DivisionSection;
