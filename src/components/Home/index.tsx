import useGetTeams from "@/hooks/useGetTeams";
import TeamLogo from "../TeamLogo";

function Home() {
  const { teams, areTeamsLoading } = useGetTeams(true);

  return (
    <div>
      {areTeamsLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex justify-center items-center flex-wrap">
          {teams.map(team => {
            return (
              <div key={team.id}>
                <TeamLogo size={200} teamAbbreviation={team.abbreviation} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
