import { fetchApi } from "@/app/api/utils";
import { NextResponse } from "next/server";

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
    const response = await fetchApi(`/season_averages`, "GET", {
      player_id: playerId,
      season: 2024,
    });

    if (!response.data || !response.data[0]) {
      return NextResponse.json(
        { error: "No data returned from the season averages API" },
        { status: 500 }
      );
    }

    return NextResponse.json(response.data[0]);
  } catch (error) {
    console.error("Error fetching player season averages:", error);

    return NextResponse.json(
      { error: "Error while fetching player season averages data" },
      { status: 500 }
    );
  }
};
