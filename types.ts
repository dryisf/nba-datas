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

export interface PlayerSeasonAveragesAPIPayload {
  pts: number; // Points per game
  ast: number; // Assists per game
  turnover: number; // Turnovers per game
  pf: number; // Personal fouls per game
  fga: number; // Field goals attempted per game
  fgm: number; // Field goals made per game
  fta: number; // Free throws attempted per game
  ftm: number; // Free throws made per game
  fg3a: number; // Three-point field goals attempted per game
  fg3m: number; // Three-point field goals made per game
  reb: number; // Total rebounds per game
  oreb: number; // Offensive rebounds per game
  dreb: number; // Defensive rebounds per game
  stl: number; // Steals per game
  blk: number; // Blocks per game
  fg_pct: number; // Field goal percentage (0-1)
  fg3_pct: number; // Three-point field goal percentage (0-1)
  ft_pct: number; // Free throw percentage (0-1)
  min: string; // Average minutes played per game in "MM:SS" format
  games_played: number; // Total games played in the season
  player_id: number; // Player's unique identifier
  season: number; // Year of the season
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

export interface PlayerSeasonAverages {
  pts: number; // Points per game
  ast: number; // Assists per game
  turnover: number; // Turnovers per game
  pf: number; // Personal fouls per game
  fga: number; // Field goals attempted per game
  fgm: number; // Field goals made per game
  fta: number; // Free throws attempted per game
  ftm: number; // Free throws made per game
  fg3a: number; // Three-point field goals attempted per game
  fg3m: number; // Three-point field goals made per game
  reb: number; // Total rebounds per game
  oreb: number; // Offensive rebounds per game
  dreb: number; // Defensive rebounds per game
  stl: number; // Steals per game
  blk: number; // Blocks per game
  fgPct: number; // Field goal percentage (0-1)
  fg3Pct: number; // Three-point field goal percentage (0-1)
  ftPct: number; // Free throw percentage (0-1)
  min: string; // Average minutes played per game in "MM:SS" format
  gamesPlayed: number; // Total games played in the season
  playerId: string; // Player's unique identifier
  season: number; // Year of the season
}

export interface User {
  id: string;
  image: string | null;
  favoriteTeams: string[];
  favoritePlayers: string[];
  name: string | null;
  email: string;
  emailVerified: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
