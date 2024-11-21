import { getTeams } from "@/api/teams";
import { useQuery } from "@tanstack/react-query";
import { filterInactiveTeams, parseTeams } from "./utils";

const useGetTeams = (enabled: boolean) => {
  const { data: teams = [], isLoading: areTeamsLoading } = useQuery({
    queryFn: getTeams,
    queryKey: ["teams"],
    enabled,
  });

  return {
    teams: filterInactiveTeams(parseTeams(teams)),
    areTeamsLoading,
  };
};

export default useGetTeams;
