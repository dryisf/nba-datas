import { Player, PlayerAPIPayload, Team, TeamAPIPayload } from "@/types";

export const parseTeam: (team: TeamAPIPayload) => Team = ({
  full_name,
  id,
  ...teamInfos
}: TeamAPIPayload) => ({
  ...teamInfos,
  id: id.toString(),
  fullName: full_name,
});

export const parsePlayer: (player: PlayerAPIPayload) => Player = ({
  id,
  first_name,
  last_name,
  jersey_number,
  draft_year,
  draft_round,
  draft_number,
  team,
  ...playerInfos
}) => ({
  ...playerInfos,
  id: id.toString(),
  firstName: first_name,
  lastName: last_name,
  jerseyNumber: jersey_number,
  draftYear: draft_year,
  draftRound: draft_round,
  draftNumber: draft_number,
  team: parseTeam(team),
});
