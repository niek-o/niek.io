import { joinURL } from "ufo";
import type { ImageModifiers, ProviderGetImage } from "@nuxt/image";

const operationsGenerator = (modifiers: Partial<ImageModifiers>) => {
    return `width=${modifiers.width}&height=${modifiers.height}`;
};

export const getImage: ProviderGetImage = (
    src,
    { modifiers = {}, baseURL } = {}
) => {

    if (!baseURL) {
        // also support runtime config
        baseURL = useRuntimeConfig().public.siteUrl;
    }

    const operations = operationsGenerator(modifiers);

    return {
        url: joinURL(baseURL, src + (operations ? "?" + operations : ""))
    };
};
