export interface TeamAPIPayload {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export interface PlayerAPIPayload {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  height: string; // Format: "6-2" (feet-inches)
  weight: string; // Weight in pounds
  jersey_number: string; // Could be string to allow leading zeros
  college: string;
  country: string;
  draft_year: number;
  draft_round: number;
  draft_number: number;
  team: TeamAPIPayload;
}

export interface Team {
  id: string;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  fullName: string;
  name: string;
}

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  height: string;
  weight: string;
  jerseyNumber: string;
  college: string;
  country: string;
  draftYear: number;
  draftRound: number;
  draftNumber: number;
  team: Team;
}
