import { Team } from "@/types";

export const groupTeamsByConference = (teams: Team[]) =>
  teams.reduce((acc: { [key: string]: Team[] }, team) => {
    if (!acc[team.conference]) {
      acc[team.conference] = [];
    }

    acc[team.conference].push(team);

    return acc;
  }, {});

export const groupTeamsByDivision = (teams: Team[]) =>
  teams.reduce((acc: { [key: string]: Team[] }, team) => {
    if (!acc[team.division]) {
      acc[team.division] = [];
    }

    acc[team.division].push(team);

    return acc;
  }, {});
