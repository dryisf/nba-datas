import {
  PlayerAPIPayload,
  PlayerSeasonAveragesAPIPayload,
  TeamAPIPayload,
} from "@/types";
import {
  filterInactivePlayers,
  parsePlayer,
  parsePlayers,
  sortPlayersAlphabeticallyByLastName,
} from "./players";
import { parsePlayerSeasonAverages } from "./season-averages";
import { filterInactiveTeams, parseTeams } from "./teams";

const createURL = (path: string) => process.env.NEXT_PUBLIC_BASE_URL + path;

export const getTeams = async () => {
  const response = await fetch(new Request(createURL(`/api/teams`)));

  if (response.ok) {
    const teams: TeamAPIPayload[] = await response.json();

    return filterInactiveTeams(parseTeams(teams));
  }
};

export const getTeamPlayers = async (teamId: string) => {
  const response = await fetch(
    new Request(createURL(`/api/teams/${teamId}/players`))
  );

  if (response.ok) {
    const players: PlayerAPIPayload[] = await response.json();

    return sortPlayersAlphabeticallyByLastName(
      filterInactivePlayers(parsePlayers(players))
    );
  }
};

export const getPlayerById = async (playerId: string) => {
  const response = await fetch(
    new Request(createURL(`/api/players/${playerId}`))
  );

  if (response.ok) {
    const player: PlayerAPIPayload = await response.json();

    return parsePlayer(player);
  }
};

export const getPlayerSeasonAverages = async (playerId: string) => {
  const response = await fetch(
    new Request(createURL(`/api/players/${playerId}/season-averages`))
  );

  if (response.ok) {
    const playerSeasonAverages: PlayerSeasonAveragesAPIPayload =
      await response.json();

    return parsePlayerSeasonAverages(playerSeasonAverages);
  }
};
