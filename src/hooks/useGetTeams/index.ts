import { getTeams } from "@/api/teams";
import { useQuery } from "@tanstack/react-query";
import { filterInactiveTeams } from "./filters";

const useGetTeams = (enabled: boolean) => {
  const { data: teams = [], isLoading: areTeamsLoading } = useQuery({
    queryFn: getTeams,
    queryKey: ["teams"],
    enabled,
  });

  return {
    teams: filterInactiveTeams(teams),
    areTeamsLoading,
  };
};

export default useGetTeams;
