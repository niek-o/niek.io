<script setup lang="ts">
import SoundcloudIcon from "@/components/icons/SoundcloudIcon.vue";
import SpotifyIcon from "@/components/icons/SpotifyIcon.vue";
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
import type { IllestWaveformProps } from "~/utils/1llest-waveform";
import { IllestWaveform } from "~/utils/1llest-waveform";
import type { pageOptions } from "~/utils/typings";

const { track } = defineProps<{
    track: pageOptions;
    cardType: "simple" | "full";
}>();

const { backgroundColor, accentColor, id, title, subtitle, links } = track;

const componentKey = ref(0);

const runtimeConfig = useRuntimeConfig();

function darkenHexColor(hex: string, percent: number = 40): string {
    hex = hex.replace("#", "");

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    r = Math.floor(r * (1 - percent / 100));
    g = Math.floor(g * (1 - percent / 100));
    b = Math.floor(b * (1 - percent / 100));

    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    return (
        "#" +
        [r, g, b]
            .map((x) => {
                const hexValue = x.toString(16);
                return hexValue.length === 1 ? "0" + hexValue : hexValue;
            })
            .join("")
    );
}

function lightenHexColor(hex: string, percent: number = 40): string {
    hex = hex.replace("#", "");

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    r = Math.floor(r + (255 - r) * (percent / 100));
    g = Math.floor(g + (255 - g) * (percent / 100));
    b = Math.floor(b + (255 - b) * (percent / 100));

    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    return (
        "#" +
        [r, g, b]
            .map((x) => {
                const hexValue = x.toString(16);
                return hexValue.length === 1 ? "0" + hexValue : hexValue;
            })
            .join("")
    );
}

const waveOptions = reactive<IllestWaveformProps>({
    url: `${runtimeConfig.public.cdnUrl}/audio/${track.id}`,
    lineColor: darkenHexColor(track.accentColor),
    maskColor: darkenHexColor(track.accentColor, 10),
    cursorWidth: 2,
    cursorColor: lightenHexColor(track.accentColor, 20),
    skeleton: true,
    skeletonColor: track.backgroundColor,
    skeletonShapeColor: darkenHexColor(track.accentColor),
    fade: false
});

const waveformRef = ref<typeof IllestWaveform | null>(null);

const init = ref(false);
const fetched = ref(false);
const playing = ref(false);
const ready = ref(false);

const initHandler = (v: boolean) => {
    init.value = v;
};

const fetchedHandler = (v: boolean) => {
    fetched.value = v;
};

const readyHandler = (v: boolean) => {
    ready.value = v;
};

const playpause = () => {
    if (!waveformRef.value) {
        return;
    }
    if (!playing.value) {
        waveformRef.value.play();
        return;
    }

    if (playing.value) {
        waveformRef.value.pause();
        return;
    }
};
</script>

<template>
    <pv-card
        class="text-center"
        :class="{
            'w-fullcard_mobile sm:w-fullcard': cardType === 'full',
            'w-80 sm:w-96': cardType === 'simple'
        }"
        :pt="{
            root: {
                style: {
                    backgroundColor: backgroundColor
                }
            },
            title: {
                style: {
                    color: accentColor
                }
            },
            subtitle: {
                style: {
                    color: accentColor
                }
            }
        }"
    >
        <template #header>
            <div class="aspect-square w-full" style="background-color: v-bind(backgroundColor)">
                <nuxt-img
                    :width="cardType === 'full' ? 1024 : 512"
                    :height="cardType === 'full' ? 1024 : 512"
                    provider="backEnd"
                    :src="`/cover/${id}`"
                    alt="album cover"
                    densities="1"
                />
            </div>
        </template>
        <template #title>
            <h1
                :class="{
                    'text-xl sm:text-2xl': cardType === 'simple',
                    'text-2xl sm:text-4xl': cardType === 'full'
                }"
            >
                {{ title }}
            </h1>
        </template>
        <template #subtitle>{{ subtitle }}</template>
        <template #content v-if="cardType === 'full'">
            <pv-divider />
            <div class="w-full h-16 flex flex-row place-items-center gap-4">
                <pv-button
                    class="text-3xl"
                    icon="pi pi-play"
                    v-if="!playing"
                    @click="playpause"
                    :pt="{
                        root: {
                            style: {
                                backgroundColor: backgroundColor,
                                borderColor: accentColor,
                                color: accentColor,
                                aspectRatio: '1/1'
                            }
                        },
                        icon: {
                            class: 'text-xl'
                        }
                    }"
                ></pv-button>
                <pv-button
                    icon="pi pi-pause"
                    v-else
                    @click="playpause"
                    :pt="{
                        root: {
                            style: {
                                backgroundColor: accentColor,
                                borderColor: backgroundColor,
                                color: backgroundColor,
                                aspectRatio: '1/1'
                            }
                        },
                        icon: {
                            class: 'text-xl'
                        }
                    }"
                ></pv-button>
                <illest-waveform
                    :key="componentKey"
                    ref="waveformRef"
                    v-bind="waveOptions"
                    @on-init="initHandler"
                    @on-fetched="fetchedHandler"
                    @on-ready="readyHandler"
                    @on-play="(v: boolean) => (playing = v)"
                    @on-pause="(v: boolean) => (playing = v)"
                />
            </div>
            <pv-divider />
            <div class="flex flex-row gap-4 justify-center">
                <a :href="link.url" target="_blank" v-for="link in links" :key="link.platform">
                    <youtube-icon
                        class="w-16 h-16 border-2 border-[#ff0000] rounded-lg p-2"
                        v-if="link.platform === 'youtube'"
                    />
                    <soundcloud-icon
                        class="w-16 h-16 border-2 border-[#f05000] rounded-lg p-2"
                        v-else-if="link.platform === 'soundcloud'"
                    />
                    <spotify-icon
                        class="w-16 h-16 border-2 border-[#2ebd59] rounded-lg p-2"
                        v-else-if="link.platform === 'spotify'"
                    />
                </a>
            </div>
        </template>
    </pv-card>
</template>

<style scoped>
.p-divider::before {
    border-left-color: v-bind(accentColor);
    border-top-color: v-bind(accentColor);
}
</style>
