import { NextResponse } from "next/server";
import { fetchApi } from "../../utils";

export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id: playerId } = await params;

  if (!playerId) {
    return NextResponse.json(
      { error: "No player ID provided" },
      { status: 400 }
    );
  }

  try {
    const response = await fetchApi(`/players/${playerId}`);

    if (!response.data) {
      return NextResponse.json(
        { error: "No data returned from the players API" },
        { status: 500 }
      );
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching player:", error);

    return NextResponse.json(
      { error: "Error while fetching player data" },
      { status: 500 }
    );
  }
};
