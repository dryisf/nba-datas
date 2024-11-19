export interface Team {
  [key: string]: string | number;
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export interface Player {
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
  team: Team;
}
