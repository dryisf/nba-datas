import TeamsSection from "@/components/TeamsSection";
import { ROUTE_INDEX } from "@/routesPaths";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(ROUTE_INDEX)({
  component: Index,
});

function Index() {
  return (
    <div>
      <TeamsSection />
    </div>
  );
}
