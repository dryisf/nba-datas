import ConferenceSection from "@/components/ConferenceSection";
import { getTeams } from "@/utils/api";
import { groupTeamsByConference } from "@/utils/teams";

export default async function Home() {
  const teams = await getTeams();

  const groupedTeamsByConference = groupTeamsByConference(teams || []);

  return (
    <div className="flex flex-col items-center gap-8">
      {Object.keys(groupedTeamsByConference)
        .sort()
        .map(conferenceName => (
          <ConferenceSection
            key={conferenceName}
            conferenceName={conferenceName}
            teams={groupedTeamsByConference[conferenceName]}
          />
        ))}
    </div>
  );
}
