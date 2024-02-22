import { defineEventHandler } from "h3";
import { pageOptions } from "~/utils/typings";

export default defineEventHandler((event): Record<string, pageOptions> | pageOptions => {
    const query = getQuery(event);
    const song = query.song as string;

    const songs: Record<string, pageOptions> = {
        "another-day": {
            title: "ANOTHER DAY",
            subtitle: "NIEK & LUWUC",
            buttonColor: "#578196",
            buttonTextColor: "#f3d6fc",
            backgroundColor: "#1a1437",
            iconColor: "#f1d4fa",
            coverURL: "/images/another-day-cover.jpg",
            links: [
                {
                    url: "https://www.youtube.com/watch?v=iq0C2pgGnrc",
                    platform: "youtube"
                },
                {
                    url: "https://open.spotify.com/track/7rauCEF41dYR63AfvypaKe",
                    platform: "spotify"
                }
            ],
            pagePath: "/another-day"
        },
        "night-tale-remix": {
            title: "NIGHT TALE (NIEK REMIX)",
            subtitle: "CHAWI",
            buttonColor: "#f9b46f",
            buttonTextColor: "#FFFFFF",
            backgroundColor: "#000000",
            iconColor: "#FFFFFF",
            coverURL: "/images/night-tale-cover.jpg",
            links: [
                {
                    url: "https://www.youtube.com/watch?v=Qv0KfGO8kmQ",
                    platform: "youtube"
                },
                {
                    url: "https://open.spotify.com/track/4lqOpB3BlpFDxw6QzbMgDU",
                    platform: "spotify"
                }
            ],
            pagePath: "/night-tale-remix"
        },
        "liar": {
            title: "LIAR",
            subtitle: "SINGLE",
            buttonColor: "#2B7CF8",
            buttonTextColor: "#FFFFFF",
            backgroundColor: "#000000",
            iconColor: "#FFFFFF",
            coverURL: "/images/liar-cover.jpg",
            links: [
                {
                    url: "https://www.youtube.com/watch?v=mbohL7YQ8u0",
                    platform: "youtube"
                },
                {
                    url: "https://open.spotify.com/album/602b9w3nrY39vkC9J1ghlk",
                    platform: "spotify"
                },
                {
                    url: "https://soundcloud.com/niek_o/liar",
                    platform: "soundcloud"
                }
            ],
            pagePath: "/liar"
        },
        "rumble-flip": {
            title: "RUMBLE [NIEK D&B FLIP]",
            subtitle: "SKRILLEX, FRED AGAIN.. & FLOWDAN",
            buttonColor: "#FDFDFD",
            buttonTextColor: "#181818",
            backgroundColor: "#181818",
            iconColor: "#FDFDFD",
            coverURL: "/images/rumble-flip-cover.jpg",
            links: [
                {
                    url: "https://www.youtube.com/watch?v=sNtQLykm11Y",
                    platform: "youtube"
                },
                {
                    url: "https://soundcloud.com/niek_o/skrillex-fred-again-flowdan-rumble-niek-drum-and-bass-flip",
                    platform: "soundcloud"
                }
            ],
            pagePath: "/rumble-flip"
        },
        "the-reason": {
            title: "THE REASON",
            subtitle: "SINGLE",
            buttonColor: "#493F31",
            buttonTextColor: "#FFFFFF",
            backgroundColor: "#141414",
            iconColor: "#FFFFFF",
            coverURL: "/images/the-reason-cover.jpg",
            links: [
                {
                    url: "https://www.youtube.com/watch?v=W96QqVgn_90",
                    platform: "youtube"
                },
                {
                    url: "https://open.spotify.com/album/1TKLYKxIimWks7mIH6JpR8",
                    platform: "spotify"
                },
                {
                    url: "https://soundcloud.com/niek_o/the-reason",
                    platform: "soundcloud"
                }
            ],
            pagePath: "/the-reason"
        },
        "forbidden-nights": {
            title: "FORBIDDEN NIGHTS",
            subtitle: "SINGLE",
            buttonColor: "#4FC167",
            buttonTextColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
            iconColor: "#4FC167",
            coverURL: "/images/forbidden-nights-cover.jpg",
            backgroundURL: "/images/forbidden-nights-background.jpg",
            links: [
                {
                    url: "https://www.youtube.com/watch?v=oe6G8w8nBa0",
                    platform: "youtube"
                },
                {
                    url: "https://open.spotify.com/album/73lP6GBHDPihFEITcWDRoF",
                    platform: "spotify"
                },
                {
                    url: "https://soundcloud.com/gmafiarecords/niek-forbidden-nights",
                    platform: "soundcloud"
                }
            ],
            pagePath: "/forbidden-nights"
        },
        "nightmare": {
            title: "NIGHTMARE",
            subtitle: "SINGLE",
            buttonColor: "#A90000",
            buttonTextColor: "#FFFFFF",
            backgroundColor: "#000000",
            iconColor: "#FFFFFF",
            coverURL: "/images/nightmare-cover.jpg",
            links: [
                {
                    url: "https://www.youtube.com/watch?v=q3fXUb1LVAI",
                    platform: "youtube"
                },
                {
                    url: "https://open.spotify.com/album/1dfhGweMVsc1xgEfkPlE7X",
                    platform: "spotify"
                },
                {
                    url: "https://soundcloud.com/niek_o/nightmare",
                    platform: "soundcloud"
                }
            ],
            pagePath: "/nightmare"
        },
        "hold-me-now": {
            title: "HOLD ME NOW",
            subtitle: "SINGLE",
            buttonColor: "#FF0000",
            buttonTextColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
            iconColor: "#FF0000",
            coverURL: "/images/hold-me-now-cover.jpg",
            backgroundURL: "/images/hold-me-now-background.jpg",
            links: [
                {
                    url: "https://www.youtube.com/watch?v=PVvxr3YJdNM",
                    platform: "youtube"
                },
                {
                    url: "https://open.spotify.com/album/5JKLq88LAWkYA1LZtRmBvf",
                    platform: "spotify"
                },
                {
                    url: "https://soundcloud.com/gmafiarecords/niek-hold-me-now-original-mix",
                    platform: "soundcloud"
                }
            ],
            pagePath: "/hold-me-now"
        },
        "afterlife": {
            title: "AFTERLIFE",
            subtitle: "NIEK & KARASU MERODI",
            buttonColor: "#3268C2",
            buttonTextColor: "#FFFFFF",
            backgroundColor: "#080808",
            iconColor: "#FFFFFF",
            coverURL: "/images/afterlife-cover.jpg",
            links: [
                {
                    url: "https://www.youtube.com/watch?v=THFg6CL_VqU",
                    platform: "youtube"
                },
                {
                    url: "https://open.spotify.com/track/5qAomWwo2ocnha3158aP8H",
                    platform: "spotify"
                },
                {
                    url: "https://soundcloud.com/niek_o/afterlife-full",
                    platform: "soundcloud"
                }
            ],
            pagePath: "/afterlife"
        },
        "party-girl": {
            title: "PARTY GIRL",
            subtitle: "EP",
            buttonColor: "#0D202B",
            buttonTextColor: "#FFFFFF",
            backgroundColor: "#111111",
            iconColor: "#FFFFFF",
            coverURL: "/images/party-girl-cover.jpg",
            links: [
                {
                    url: "https://www.youtube.com/watch?v=vwRuZuPILL0&list=PL41zV4hHhDYYe2ZSrK9eC2uIVV_tmodGL",
                    platform: "youtube"
                },
                {
                    url: "https://open.spotify.com/album/4zm0HzCLKT7XJO8bAz29P5",
                    platform: "spotify"
                },
                {
                    url: "https://soundcloud.com/niek_o/sets/party-girl",
                    platform: "soundcloud"
                }
            ],
            pagePath: "/party-girl"
        },
        "the-universe": {
            title: "THE UNIVERSE",
            subtitle: "ALBUM",
            buttonColor: "#D13B3B",
            buttonTextColor: "#FFFFFF",
            backgroundColor: "#090909",
            iconColor: "#FFFFFF",
            coverURL: "/images/the-universe-cover.jpg",
            links: [
                {
                    url: "https://www.youtube.com/watch?v=iSjcrdLrD2k&list=PL41zV4hHhDYZQ13NT6PdggpKWDquDUzyt",
                    platform: "youtube"
                },
                {
                    url: "https://open.spotify.com/album/2lj7IEMCthtOMSGiD5ooBQ",
                    platform: "spotify"
                },
                {
                    url: "https://soundcloud.com/niek_o/sets/the-universe",
                    platform: "soundcloud"
                }
            ],
            pagePath: "/the-universe"
        }
    };

    return song ? songs[song] : songs;
});
