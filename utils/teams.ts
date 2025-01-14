import { Team, TeamAPIPayload } from "@/types";

export const filterInactiveTeams = (teams: Team[]) =>
  teams.filter(team => Boolean(team.city) && team.city !== "");

export const parseTeam: (team: TeamAPIPayload) => Team = ({
  full_name,
  id,
  ...teamInfos
}: TeamAPIPayload) => ({
  ...teamInfos,
  id: id.toString(),
  fullName: full_name,
});

export const parseTeams: (teams: TeamAPIPayload[]) => Team[] = (
  teams: TeamAPIPayload[]
) => teams.map(parseTeam);

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
