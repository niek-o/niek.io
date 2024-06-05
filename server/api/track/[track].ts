import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
    const routeParam = getRouterParam(event, "track");

    const runtimeConfig = useRuntimeConfig();

    const song = await fetch(`${runtimeConfig.public.cdnUrl}/track/${routeParam}`, {
        headers: {
            "x-api-key": runtimeConfig.apiKey
        }
    });

    return await song.json();
});
