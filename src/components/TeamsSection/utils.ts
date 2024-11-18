import { Team } from "@/types";

const TEAM_CONFERENCE_FIELD = "conference";
const TEAM_DIVISION_FIELD = "division";

export const groupTeamsByField = (fieldName: string, teams: Team[]) =>
  teams.reduce((acc: { [key: string]: Team[] }, team) => {
    if (!acc[team[fieldName]]) {
      acc[team[fieldName]] = [];
    }

    acc[team[fieldName]].push(team);

    return acc;
  }, {});

export const groupTeamsByConference = (teams: Team[]) =>
  groupTeamsByField(TEAM_CONFERENCE_FIELD, teams);

export const groupTeamsByDivision = (teams: Team[]) =>
  groupTeamsByField(TEAM_DIVISION_FIELD, teams);
