import { Team } from "@/types";
import { groupTeamsByDivision } from "@/utils/teams";
import DivisionSection from "./DivisionSection";

type Props = {
  conferenceName: string;
  teams: Team[];
};

function ConferenceSection({ conferenceName, teams }: Props) {
  const groupedTeamsByDivision = groupTeamsByDivision(teams);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-semibold">{conferenceName}</h2>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {Object.keys(groupedTeamsByDivision)
          .sort()
          .map(divisionName => (
            <DivisionSection
              key={divisionName}
              divisionName={divisionName}
              teams={groupedTeamsByDivision[divisionName]}
            />
          ))}
      </div>
    </div>
  );
}

export default ConferenceSection;
