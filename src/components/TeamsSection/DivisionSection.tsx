import TeamLogo from "@/components/TeamLogo";
import { Card, CardContent } from "@/components/ui/card";
import { Team } from "@/types";

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
            <Card key={team.id}>
              <CardContent className="flex flex-col gap-2 items-center p-4">
                <TeamLogo size={200} teamAbbreviation={team.abbreviation} />
                <p>{team.full_name}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default DivisionSection;
