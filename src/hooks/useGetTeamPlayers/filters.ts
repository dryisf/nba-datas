import { Player } from "@/types";

export const filterInactivePlayers = (players: Player[]) =>
  players.filter(player => Boolean(player.position) && player.position !== "");
