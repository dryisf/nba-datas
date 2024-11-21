import { Team, TeamAPIPayload } from "@/types";

export const parseTeam: (team: TeamAPIPayload) => Team = ({
  full_name,
  id,
  ...teamInfos
}: TeamAPIPayload) => ({
  ...teamInfos,
  id: id.toString(),
  fullName: full_name,
});
