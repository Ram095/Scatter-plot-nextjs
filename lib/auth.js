export const getAccessToken = async () => {
    try {
        const tokenResponse = await fetch(
            `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`,
            {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    client_id: process.env.CLIENT_ID,
                    client_secret: process.env.CLIENT_SECRET,
                    scope: "https://graph.microsoft.com/.default",
                    grant_type: "client_credentials",
                }),
            }
        );
        const data = await tokenResponse.json();
        return data.access_token;
    } catch (error) {
        console.error("Error fetching access token:", error);
        throw new Error("Unable to fetch access token");
    }
};
