import { Card, CardContent } from "@/components/ui/card";
import { ROUTE_PLAYER_ID } from "@/routesPaths";
import { Player } from "@/types";
import { Link } from "@tanstack/react-router";

type Props = {
  players: Player[];
};

function PlayersSection({ players }: Props) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-4">
      {players.map(player => {
        return (
          <Link
            key={player.id}
            to={ROUTE_PLAYER_ID.replace(/\$playerId/, `${player.id}`)}
          >
            <Card className="hover:bg-slate-200">
              <CardContent className="flex justify-center p-4">
                <p>{`${player.first_name} ${player.last_name}`}</p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default PlayersSection;
