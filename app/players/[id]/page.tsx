import { getPlayerById, getPlayerSeasonAverages } from "@/utils/api";

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const player = await getPlayerById(id);
  const seasonAverages = await getPlayerSeasonAverages(id);

  if (!player || !seasonAverages) {
    return <div>Erreur lors de la récupération des informations du joueur</div>;
  }

  return (
    <div>
      <div>{`${player?.firstName} ${player?.lastName}`}</div>
      {seasonAverages && (
        <div>
          <div>{`Points: ${seasonAverages.pts}`}</div>
          <div>{`Assists: ${seasonAverages.ast}`}</div>
          <div>{`Turnovers: ${seasonAverages.turnover}`}</div>
          <div>{`Personal fouls: ${seasonAverages.pf}`}</div>
          <div>{`Field goals attempted: ${seasonAverages.fga}`}</div>
          <div>{`Field goals made: ${seasonAverages.fgm}`}</div>
          <div>{`Free throws attempted: ${seasonAverages.fta}`}</div>
          <div>{`Free throws made: ${seasonAverages.ftm}`}</div>
          <div>{`Three-point field goals attempted: ${seasonAverages.fg3a}`}</div>
          <div>{`Three-point field goals made: ${seasonAverages.fg3m}`}</div>
          <div>{`Total rebounds: ${seasonAverages.reb}`}</div>
          <div>{`Offensive rebounds: ${seasonAverages.oreb}`}</div>
          <div>{`Defensive rebounds: ${seasonAverages.dreb}`}</div>
          <div>{`Steals: ${seasonAverages.stl}`}</div>
          <div>{`Blocks: ${seasonAverages.blk}`}</div>
          <div>{`Field goal percentage: ${seasonAverages.fgPct}`}</div>
          <div>{`Three-point field goal percentage: ${seasonAverages.fg3Pct}`}</div>
          <div>{`Free throw percentage: ${seasonAverages.ftPct}`}</div>
          <div>{`Average minutes played: ${seasonAverages.min}`}</div>
          <div>{`Games played: ${seasonAverages.gamesPlayed}`}</div>
        </div>
      )}
    </div>
  );
}
