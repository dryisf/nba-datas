import { Team } from "@/types";

const groupTeamsByField = (teams: Team[], fieldName: keyof Team) =>
  teams.reduce((acc: { [key: string]: Team[] }, team) => {
    const field = team[fieldName];
    if (!acc[field]) {
      acc[field] = [];
    }
    acc[field].push(team);
    return acc;
  }, {});

export const groupTeamsByConference = (teams: Team[]) =>
  groupTeamsByField(teams, "conference");

export const groupTeamsByDivision = (teams: Team[]) =>
  groupTeamsByField(teams, "division");
