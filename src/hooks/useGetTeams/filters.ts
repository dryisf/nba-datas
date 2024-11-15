import { Team } from "@/types";

export const filterInactiveTeams = (teams: Team[]) =>
  teams.filter(team => Boolean(team.city) && team.city !== "");
