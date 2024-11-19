import { Team } from "@/types";
import ConferenceSection from "./ConferenceSection";
import { groupTeamsByConference } from "./utils";

type Props = {
  teams: Team[];
  areTeamsLoading: boolean;
};

function TeamsSection({ teams, areTeamsLoading }: Props) {
  const groupedTeamsByConference = groupTeamsByConference(teams);

  return areTeamsLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="flex flex-col items-center gap-8">
      {Object.entries(groupedTeamsByConference).map(
        ([conferenceName, teams]) => (
          <ConferenceSection
            key={conferenceName}
            conferenceName={conferenceName}
            teams={teams}
          />
        )
      )}
    </div>
  );
}

export default TeamsSection;
