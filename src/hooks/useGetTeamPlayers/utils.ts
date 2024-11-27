import { Player, PlayerAPIPayload } from "@/types";
import { parsePlayer } from "../utils";

export const parsePlayers: (players: PlayerAPIPayload[]) => Player[] = (
  players: PlayerAPIPayload[]
) => players.map(parsePlayer);
