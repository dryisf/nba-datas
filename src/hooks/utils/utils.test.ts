import { describe, expect, it } from "vitest";

import { Player, PlayerAPIPayload, Team, TeamAPIPayload } from "@/types";
import { parsePlayer, parseTeam } from ".";

describe("parseTeam", () => {
  it("should correctly parse a valid TeamAPIPayload object", () => {
    const input: TeamAPIPayload = {
      id: 1,
      abbreviation: "ABC",
      city: "Sample City",
      conference: "East",
      division: "Division 1",
      full_name: "Sample Team Full Name",
      name: "Sample Team",
    };

    const expectedOutput: Team = {
      id: "1",
      abbreviation: "ABC",
      city: "Sample City",
      conference: "East",
      division: "Division 1",
      fullName: "Sample Team Full Name",
      name: "Sample Team",
    };

    expect(parseTeam(input)).toEqual(expectedOutput);
  });
});

describe("parsePlayer", () => {
  it("should correctly parse a valid PlayerAPIPayload object", () => {
    const teamInput: TeamAPIPayload = {
      id: 1,
      abbreviation: "ABC",
      city: "Sample City",
      conference: "East",
      division: "Division 1",
      full_name: "Sample Team Full Name",
      name: "Sample Team",
    };

    const playerInput: PlayerAPIPayload = {
      id: 23,
      first_name: "John",
      last_name: "Doe",
      position: "Guard",
      height: "6-3",
      weight: "190",
      jersey_number: "10",
      college: "Sample College",
      country: "USA",
      draft_year: 2020,
      draft_round: 1,
      draft_number: 15,
      team: teamInput,
    };

    const expectedOutput: Player = {
      id: "23",
      firstName: "John",
      lastName: "Doe",
      position: "Guard",
      height: "6-3",
      weight: "190",
      jerseyNumber: "10",
      college: "Sample College",
      country: "USA",
      draftYear: 2020,
      draftRound: 1,
      draftNumber: 15,
      team: {
        id: "1",
        abbreviation: "ABC",
        city: "Sample City",
        conference: "East",
        division: "Division 1",
        fullName: "Sample Team Full Name",
        name: "Sample Team",
      },
    };

    expect(parsePlayer(playerInput)).toEqual(expectedOutput);
  });
});
