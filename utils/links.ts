import { ROUTE_HOME } from "@/routes";

export const isActiveLink = (currentRoute: string, route: string) => {
  if (route === ROUTE_HOME) return currentRoute === route;

  return currentRoute.startsWith(route);
};
