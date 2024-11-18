import useGetTeams from "@/hooks/useGetTeams";
import ConferenceSection from "./ConferenceSection";
import { groupTeamsByConference } from "./utils";

function TeamsSection() {
  const { teams, areTeamsLoading } = useGetTeams(true);

  const groupedTeamsByConference = groupTeamsByConference(teams);

  return (
    <div>
      {areTeamsLoading ? (
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
      )}
    </div>
  );
}

export default TeamsSection;
