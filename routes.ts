export const ROUTE_HOME = "/";
export const ROUTE_TEAMS = "/teams";
export const ROUTE_PLAYERS = "/players";
export const ROUTE_STANDINGS = "/standings";
export const ROUTE_TEAM_ID = "/teams/:id";
export const ROUTE_PLAYER_ID = "/players/:id";
export const ROUTE_SIGN_IN = "/signin";
export const ROUTE_ACCOUNT = "/account";

export const getNavigationRoutes = (isLoggedIn: boolean = false) => [
  {
    path: ROUTE_HOME,
    label: "Home",
  },
  {
    path: ROUTE_TEAMS,
    label: "Teams",
  },
  {
    path: ROUTE_PLAYERS,
    label: "Players",
  },
  {
    path: ROUTE_STANDINGS,
    label: "Standings",
  },
  ...(isLoggedIn ? [] : [{ path: ROUTE_SIGN_IN, label: "Sign In" }]),
];
