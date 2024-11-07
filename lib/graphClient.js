import { Client } from "@microsoft/microsoft-graph-client";
import "isomorphic-fetch";
import { getAccessToken } from "./auth";
export const getGraphClient = async () => {
    const token = await getAccessToken();
    const client = Client.init({
        authProvider: (done) => {
            done(null, token);
        },
    });
    return client;
};
