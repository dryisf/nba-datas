import { NextResponse } from "next/server";
import { fetchApi } from "../../../utils";

export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id: teamId } = await params;

  if (!teamId) {
    return NextResponse.json({ error: "No team ID provided" }, { status: 400 });
  }

  try {
    const response = await fetchApi("/players/active", "GET", {
      team_ids: [teamId],
    });

    if (!response.data) {
      return NextResponse.json(
        { error: "No data returned from the teams API" },
        { status: 500 }
      );
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching teams:", error);

    return NextResponse.json(
      { error: "Error while fetching teams data" },
      { status: 500 }
    );
  }
};
