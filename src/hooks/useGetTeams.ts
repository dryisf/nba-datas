import { getTeams } from "@/api/teams";
import { useQuery } from "@tanstack/react-query";

const useGetTeams = (enabled: boolean) => {
  const { data: teams = [], isLoading: areTeamsLoading } = useQuery({
    queryFn: () => getTeams(),
    queryKey: ["teams"],
    enabled,
  });

  return {
    teams,
    areTeamsLoading,
  };
};

export default useGetTeams;
