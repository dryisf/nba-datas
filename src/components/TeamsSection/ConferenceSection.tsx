import { Team } from "@/types";
import DivisionSection from "./DivisionSection";
import { groupTeamsByDivision } from "./utils";

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
        {Object.entries(groupedTeamsByDivision).map(([divisionName, teams]) => (
          <DivisionSection
            key={divisionName}
            divisionName={divisionName}
            teams={teams}
          />
        ))}
      </div>
    </div>
  );
}

export default ConferenceSection;
