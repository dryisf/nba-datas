import { NextResponse } from "next/server";
import { fetchApi } from "../utils";

export const GET = async () => {
  const response = await fetchApi("/teams");

  return NextResponse.json(response.data);
};
