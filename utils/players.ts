import { Player, PlayerAPIPayload } from "@/types";
import { parseTeam } from "./teams";

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

export const parsePlayers: (players: PlayerAPIPayload[]) => Player[] = (
  players: PlayerAPIPayload[]
) => players.map(parsePlayer);

export const sortPlayersAlphabeticallyByLastName = (players: Player[]) =>
  players.sort((a, b) => a.lastName.localeCompare(b.lastName));

export const filterInactivePlayers = (players: Player[]) =>
  players.filter(player => Boolean(player.jerseyNumber));
