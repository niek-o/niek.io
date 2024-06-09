<script setup lang="ts">
import type { pageOptions } from "~/utils/typings";

const route = useRoute();
const router = useRouter();

const name = <string>route.params.track;

const getTrackData = async (id: string) => {
    const { data } = await useFetch(`/api/track/${id}`);

    console.log(data.value);

    if (!data.value) {
        await router.push("/");
    }

    return (await data.value) as pageOptions;
};

const data = await getTrackData(name);

useHead({
    title: `NIEK | ${data.title}`,
    htmlAttrs: {
        lang: "en"
    },
    meta: [
        { name: "title", content: `NIEK | ${data.title}` },
        { name: "description", content: `${data.title} OUT NOW` },

        { name: "og:title", content: `NIEK | ${data.title}` },
        { name: "og:description", content: `${data.title} OUT NOW` },
        { name: "og:image", content: `${"https://cdn.niek.io/images/cover/" + data.id}` },
        { name: "og:url", content: `${"https://niek.io" + data.id}` },

        { name: "theme-color", content: `${data.accentColor}` },

        { name: "twitter:title", content: `NIEK | ${data.title}` },
        { name: "twitter:description", content: `${data.title} OUT NOW` },
        { name: "twitter:domain", content: "https://niek.io/" },
        { name: "twitter:url", content: `${"https://niek.io" + data.id}` },
        { name: "twitter:image", content: `${"https://cdn.niek.io/images/cover/" + data.id}` },
        { name: "twitter:card", content: "summary_large_image" }
    ]
});
</script>

<template>
    <div>
        <nuxt-img
            :src="data.backgroundImage ? `background/${data.id}` : `cover/${data.id}`"
            width="512"
            height="512"
            provider="backEnd"
            alt="Album cover"
            densities="1"
            class="blur fixed -mt-8 sm:mt-0 object-cover scale-125 w-full h-full -z-10 non-drag"
        />
        <track-card
            class="mx-auto sm:ml-20 mt-3 sm:mt-10"
            card-type="full"
            :track="data"
        ></track-card>
    </div>
</template>
