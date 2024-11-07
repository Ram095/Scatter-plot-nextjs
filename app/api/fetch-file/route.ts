import { NextResponse } from "next/server";
import axios from "axios";
import getAccessToken from "../../../lib/getAccessToken";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const siteId = searchParams.get("siteId");
  const driveId = searchParams.get("driveId");
  const filePath = "/WoW/WoW%20-%20Data/team-data.json";

  if (!siteId || !driveId) {
    return NextResponse.json(
      { error: "Missing siteId or driveId" },
      { status: 400 }
    );
  }

  try {
    const accessToken = await getAccessToken();

    const fileResponse = await axios.get(
      `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/root:${filePath}:/content`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        responseType: "arraybuffer",
      }
    );

    const headers = new Headers();

    return new NextResponse(fileResponse.data, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Error fetching file:", error);
    return NextResponse.json(
      { error: "Failed to fetch file from SharePoint" },
      { status: 500 }
    );
  }
}
