import { NextResponse } from "next/server";
import axios from "axios";
import getAccessToken from "../../../lib/getAccessToken";

export async function GET() {
  const sitePath = "prowarenessgroup.sharepoint.com:/teams/AgileCoach";

  try {
    const accessToken = await getAccessToken();

    const siteResponse = await axios.get(
      `https://graph.microsoft.com/v1.0/sites/${sitePath}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const siteId = siteResponse.data.id;

    const driveResponse = await axios.get(
      `https://graph.microsoft.com/v1.0/sites/${siteId}/drives`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const driveId = driveResponse.data.value[0].id;

    return NextResponse.json({ siteId, driveId });
  } catch (error) {
    console.error("Error fetching site or drive ID:", error);
    return NextResponse.json(
      { error: "Failed to fetch Site or Drive ID" },
      { status: 500 }
    );
  }
}
