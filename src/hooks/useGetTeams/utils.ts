import { Team, TeamAPIPayload } from "@/types";
import { parseTeam } from "../utils";

export const filterInactiveTeams = (teams: Team[]) =>
  teams.filter(team => Boolean(team.city) && team.city !== "");

export const parseTeams: (teams: TeamAPIPayload[]) => Team[] = (
  teams: TeamAPIPayload[]
) => teams.map(parseTeam);
