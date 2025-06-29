<script setup lang="ts">
import type { CarouselConfig } from "vue3-carousel";
import type { pageOptions } from "~/utils/typings";

const getTrackData = async () => {
    const { data } = await useFetch("/api/tracks");

    return (await data.value) as pageOptions[];
};

const data = await getTrackData();

const scrollPosition = ref<any>(0);

onMounted(() => {
    window.addEventListener("scroll", () => {
        scrollPosition.value = window.scrollY;
    });
});

useHead({
    title: "NIEK",
    htmlAttrs: {
        lang: "en"
    },
    meta: [
        { name: "title", content: "NIEK" },
        { name: "description", content: `DJ AND PRODUCER` },

        { name: "og:title", content: "NIEK" },
        { name: "og:description", content: `DJ AND PRODUCER` },
        { name: "og:image", content: "https://niek.io/images/page_hero.png" },
        { name: "og:url", content: "https://niek.io" },

        { name: "theme-color", content: "#000000" },

        { name: "twitter:title", content: "NIEK" },
        { name: "twitter:description", content: `DJ & PRODUCER` },
        { name: "twitter:domain", content: "https://niek.io/" },
        { name: "twitter:url", content: "https://niek.io" },
        { name: "twitter:image", content: "https://niek.io/images/page_hero.png" },
        { name: "twitter:card", content: "summary_large_image" }
    ]
});

const trackList = ref<HTMLElement | null>(null);

const scrollTo = (element: HTMLElement | null) => {
    element?.scrollIntoView({ behavior: "smooth" });
};

const hero = ref();

const headerColor = computed(() => {
    if (!hero.value) {
        return;
    }

    return scrollPosition.value > hero.value.scrollHeight - 100
        ? "bg-black"
        : scrollPosition.value > 10
          ? "bg-black bg-opacity-30"
          : "bg-transparent";
});

const config: CarouselConfig = {
    itemsToShow: 1.2,
    gap: 5,
    wrapAround: true,
    breakpointMode: "carousel",
    breakpoints: {
        // sm
        640: {
            itemsToShow: 2,
            gap: 20
        },
        // md
        768: {
            itemsToShow: 3,
            gap: 20
        },
        // lg
        1024: {
            itemsToShow: 3,
            gap: 20
        },
        // xl
        1280: {
            itemsToShow: 4,
            gap: 20
        }
    },
    enabled: true,
    height: "",
    i18n: {},
    ignoreAnimations: false,
    itemsToScroll: 1,
    preventExcessiveDragging: false,
    slideEffect: "slide",
    snapAlign: "center"
};
</script>

<template>
    <div class="w-full overflow-x-hidden font-text font-black">
        <section
            class="sm:grid grid-cols-2 h-[100dvh] md:h-screen overflow-hidden sm:bg-center bg-cover sm:bg-contain bg-left bg-[url('/images/page_hero.png')] sm:bg-[url('/images/grunge2.webp')] non-drag"
            ref="hero"
        >
            <div class="m-auto px-10 sm:p-0 h-full justify-center flex flex-col">
                <h1 class="text-7xl sm:text-9xl text-white">✧</h1>
                <div class="flex flex-col items-center sm:px-32">
                    <h1 class="text-8xl sm:text-9xl text-transparent text-outline">NIEK</h1>
                    <h1 class="text-8xl sm:text-9xl text-transparent text-outline">NIEK</h1>
                    <h1 class="text-8xl sm:text-9xl text-white">NIEK</h1>
                    <h1 class="text-8xl sm:text-9xl text-transparent text-outline">NIEK</h1>
                    <h1 class="text-8xl sm:text-9xl text-transparent text-outline">NIEK</h1>
                </div>
                <h1 class="text-7xl sm:text-9xl text-white place-self-end">✧</h1>
            </div>

            <nuxt-img
                src="/images/page_hero.png"
                class="h-full w-auto place-self-end hidden sm:block"
            />
        </section>

        <main
            class="bg-center overflow-hidden bg-contain bg-[url('/images/grunge2.webp')] non-drag flex flex-col place-items-center pb-24 gap-12 bg-white relative"
            ref="trackList"
        >
            <nuxt-img
                src="/images/globe.svg"
                class="stroke-blue-500 scale-[15.0] sm:scale-125 absolute -mt-96"
            ></nuxt-img>
            <div class="flex flex-row z-10">
                <h1 class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small">
                    DISCOGRAPHY
                </h1>
                <h1 class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small">
                    DISCOGRAPHY
                </h1>
                <h1 class="text-5xl sm:text-9xl text-white">DISCOGRAPHY</h1>
                <h1 class="text-5xl sm:text-9xl text-transparent text-outline-small text-outline">
                    DISCOGRAPHY
                </h1>
                <h1 class="text-5xl sm:text-9xl text-transparent text-outline-small text-outline">
                    DISCOGRAPHY
                </h1>
            </div>

            <carousel v-bind="config" class="w-screen">
                <slide v-for="track in data" :key="track.id">
                    <hover-item class="z-10">
                        <nuxt-link :to="track.id" class="drop-shadow-lg non-drag">
                            <track-card card-type="simple" :track="track" />
                        </nuxt-link>
                    </hover-item>
                </slide>

                <template #addons>
                    <navigation />
                </template>
            </carousel>
        </main>

        <section
            class="bg-center bg-contain bg-[url('/images/grunge2.webp')] non-drag flex flex-col justify-center place-items-center gap-12"
            ref="aboutme"
        >
            <div class="flex flex-row z-10">
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    ABOUT ME
                </h1>
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    ABOUT ME
                </h1>
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    ABOUT ME
                </h1>
                <h1 class="text-5xl sm:text-9xl text-white text-nowrap">ABOUT ME</h1>
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    ABOUT ME
                </h1>
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    ABOUT ME
                </h1>
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    ABOUT ME
                </h1>
            </div>

            <div class="flex flex-col">
                <div class="gap-6 flex flex-col">
                    <div class="flex flex-row px-4 md:px-12 w-full justify-between">
                        <h2 class="text-xl sm:text-4xl text-white sm:max-w-4/12">
                            I'M NIEK, A 21 YEAR OLD DJ AND PRODUCER FROM THE HAGUE, THE NETHERLANDS
                        </h2>

                        <div class="xl:flex items-end hidden">
                            <div class="flex flex-row gap-4 items-center">
                                <h1 class="text-8xl text-white">✧</h1>
                                <nuxt-img src="/images/upc.webp" class="w-auto h-20"></nuxt-img>
                            </div>
                        </div>
                    </div>

                    <div class="w-full h-[30rem] -mt-20 overflow-hidden block sm:hidden">
                        <nuxt-img
                            src="/images/about_transparent.webp"
                            class="w-full mt-24 h-auto non-drag scale-[5.0] transform-[translateX(33%)]"
                        ></nuxt-img>
                    </div>

                    <!-- <hr class="border-2 border-white w-full" /> -->
                    <div class="px-4 md:px-12 sm:flex sm:justify-end">
                        <h2 class="text-xl sm:text-4xl text-white sm:text-right sm:max-w-4/12 z-10">
                            I WAS BORN HALF-DEAF, AND HOPE TO INSPIRE EVERYONE WITH MY PASSION FOR
                            MUSIC, AND PROVE THAT YOU CAN DO ANYTHING, NO MATTER WHAT
                        </h2>
                    </div>

                    <div class="w-full h-[30rem] mt-48 block sm:hidden overflow-visible">
                        <nuxt-img
                            src="/images/about_transparent.webp"
                            class="w-full h-auto non-drag scale-[5.0]"
                        ></nuxt-img>
                    </div>
                </div>

                <nuxt-img
                    src="/images/about_transparent.webp"
                    class="w-full h-auto -mt-[40rem] non-drag sm:block hidden"
                ></nuxt-img>
            </div>
        </section>

        <section
            class="bg-center bg-contain bg-[url('/images/grunge2.webp')] non-drag flex flex-col justify-center place-items-center gap-48 pb-48"
            ref="links"
        >
            <div class="flex flex-row z-10">
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    LINKS
                </h1>
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    LINKS
                </h1>
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    LINKS
                </h1>
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    LINKS
                </h1>
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    LINKS
                </h1>
                <h1 class="text-5xl sm:text-9xl text-white text-nowrap">LINKS</h1>
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    LINKS
                </h1>
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    LINKS
                </h1>
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    LINKS
                </h1>
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    LINKS
                </h1>
                <h1
                    class="text-5xl sm:text-9xl text-transparent text-outline text-outline-small text-nowrap"
                >
                    LINKS
                </h1>
            </div>

            <div class="flex flex-col justify-center items-center text-center gap-48">
                <div class="flex items-center flex-row gap-4 sm:gap-8">
                    <hover-item>
                        <a
                            href="https://www.youtube.com/@Niek__o"
                            aria-label="Youtube"
                            target="_blank"
                        >
                            <icons-youtube-icon
                                class="w-auto h-10 sm:h-20"
                                fill="#FFFFFF"
                                center-fill="#000000"
                            />
                        </a>
                    </hover-item>

                    <hover-item>
                        <a
                            href="https://soundcloud.com/niek_o"
                            aria-label="SoundCloud"
                            target="_blank"
                        >
                            <icons-soundcloud-icon
                                class="w-auto h-10 sm:h-20"
                                fill="#FFFFFF"
                                center-fill="#000000"
                            />
                        </a>
                    </hover-item>

                    <hover-item>
                        <a
                            href="https://open.spotify.com/artist/6PXPX1pIxajf1IpgMOJjYS?si=UPzRRIrJT5WpYKp1eWRQcg"
                            aria-label="Spotify"
                            target="_blank"
                        >
                            <icons-spotify-icon
                                class="w-auto h-10 sm:h-20"
                                fill="#FFFFFF"
                                center-fill="#000000"
                            />
                        </a>
                    </hover-item>

                    <hover-item>
                        <a
                            href="https://instagram.com/official.niek"
                            aria-label="Instagram"
                            target="_blank"
                        >
                            <icons-instagram-icon
                                class="w-auto h-10 sm:h-20"
                                fill="#FFFFFF"
                                center-fill="#000000"
                            />
                        </a>
                    </hover-item>

                    <hover-item>
                        <a href="https://twitch.tv/niekmusic" aria-label="Twitch" target="_blank">
                            <icons-twitch-icon
                                class="w-auto h-10 sm:h-20"
                                fill="#FFFFFF"
                                center-fill="#000000"
                            />
                        </a>
                    </hover-item>
                </div>

                <div class="flex flex-col gap-2">
                    <h1 class="text-white text-lg sm:text-3xl">FOR BOOKINGS AND INQUIRIES:</h1>
                    <a
                        href="mailto:contact@niek.io"
                        class="text-white text-lg sm:text-2xl underline font-normal"
                        >contact@niek.io</a
                    >
                    <p class="text-white text-lg font-normal">KVK: 91281563</p>
                </div>
            </div>
        </section>
    </div>
</template>
