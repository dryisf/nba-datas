import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  const { player: playerId, team: teamId } = await request.json();

  const { user } = (await auth()) || {};

  if (!playerId && !teamId) {
    return NextResponse.json(
      { error: "No player ID or team ID provided" },
      { status: 400 }
    );
  }

  const dbUser = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
  });

  if (!dbUser) {
    return NextResponse.json(
      { error: "Not authorized, user not found" },
      { status: 401 }
    );
  }

  if (playerId) {
    const isPlayerAlreadyFavorite = dbUser?.favoritePlayers.includes(playerId);
    try {
      const updatedUser = await prisma.user.update({
        where: {
          id: user?.id,
        },
        data: {
          favoritePlayers: isPlayerAlreadyFavorite
            ? dbUser?.favoritePlayers.filter(player => player !== playerId)
            : [...(dbUser?.favoritePlayers || []), playerId],
        },
      });

      return NextResponse.json(updatedUser);
    } catch (error) {
      const errorMessage = isPlayerAlreadyFavorite
        ? "Error removing player from favorites"
        : "Error adding player to favorites";

      console.error(errorMessage, error);

      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
  }

  if (teamId) {
    const isTeamAlreadyFavorite = dbUser?.favoriteTeams.includes(teamId);
    try {
      const updatedUser = await prisma.user.update({
        where: {
          id: user?.id,
        },
        data: {
          favoriteTeams: isTeamAlreadyFavorite
            ? dbUser?.favoriteTeams.filter(team => team !== teamId)
            : [...(dbUser?.favoriteTeams || []), teamId],
        },
      });

      return NextResponse.json(updatedUser);
    } catch (error) {
      const errorMessage = isTeamAlreadyFavorite
        ? "Error removing team from favorites"
        : "Error adding team to favorites";

      console.error(errorMessage, error);

      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
  }
}
