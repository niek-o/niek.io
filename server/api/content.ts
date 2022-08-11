import { defineEventHandler } from "h3";

export default defineEventHandler(() => {
	return {
		thereason: {
			title:           "THE REASON",
			releaseType:     "SINGLE",
			buttonColor:     "#493f31",
			buttonTextColor: "#FFFFFF",
			backgroundColor: "#141414",
			iconColor:       "#FFFFFF",
			coverURL:        "/images/the-reason-cover.jpg",
			youtubeLink:     "https://www.youtube.com/watch?v=W96QqVgn_90",
			spotifyLink:     "https://open.spotify.com/album/1TKLYKxIimWks7mIH6JpR8?si=Vp0DURJpS8qk-AA7zaefIA",
			soundcloudLink:  "https://soundcloud.com/niek_o/the-reason",
			pagePath:        "/thereason",
		},
		forbiddennights: {
			title:           "FORBIDDEN NIGHTS",
			releaseType:     "SINGLE",
			buttonColor:     "#4FC167",
			buttonTextColor: "#FFFFFF",
			backgroundColor: "#FFFFFF",
			iconColor:       "#4FC167",
			coverURL:        "/images/forbidden-nights-cover.jpg",
			backgroundURL:   "/images/forbidden-nights-background.jpg",
			youtubeLink:     "https://www.youtube.com/watch?v=oe6G8w8nBa0",
			spotifyLink:     "https://open.spotify.com/album/73lP6GBHDPihFEITcWDRoF?si=e8EdyL25RzKyr79tofbUrg",
			soundcloudLink:  "https://soundcloud.com/gmafiarecords/niek-forbidden-nights",
			pagePath:        "/forbiddennights",
		},
		killauraedit:    {
			title:           "Geoxor - Kill Aura (Niek Edit)",
			releaseType:     "EDIT",
			buttonColor:     "#FFFFFF",
			buttonTextColor: "#52A5CB",
			backgroundColor: "#52A5CB",
			iconColor:       "#FFFFFF",
			coverURL:        "/images/kill-aura-edit-cover.jpg",
			youtubeLink:     "https://www.youtube.com/watch?v=4XTAtu-fh7o",
			pagePath:        "/killauraedit",
		},
		nightmare:       {
			title:           "NIGHTMARE",
			releaseType:     "SINGLE",
			buttonColor:     "#A90000",
			buttonTextColor: "#FFFFFF",
			backgroundColor: "#000000",
			iconColor:       "#FFFFFF",
			coverURL:        "/images/nightmare-cover.jpg",
			youtubeLink:     "https://www.youtube.com/watch?v=q3fXUb1LVAI",
			spotifyLink:     "https://open.spotify.com/album/1dfhGweMVsc1xgEfkPlE7X?si=rjVT75e4TUSUmTEBNRbhhA",
			soundcloudLink:  "https://soundcloud.com/niek_o/nightmare",
			pagePath:        "/nightmare",
		},
		holdmenow:       {
			title:           "HOLD ME NOW",
			releaseType:     "SINGLE",
			buttonColor:     "#FF0000",
			buttonTextColor: "#FFFFFF",
			backgroundColor: "#FFFFFF",
			iconColor:       "#FF0000",
			coverURL:        "/images/hold-me-now-cover.jpg",
			backgroundURL:   "/images/hold-me-now-background.jpg",
			youtubeLink:     "https://www.youtube.com/watch?v=PVvxr3YJdNM",
			spotifyLink:     "https://open.spotify.com/album/5JKLq88LAWkYA1LZtRmBvf?si=m7mF_81PQYe2nbdpkeNerA",
			soundcloudLink:  "https://soundcloud.com/gmafiarecords/niek-hold-me-now-original-mix",
			pagePath:        "/holdmenow",
		},
		auroraedit:      {
			title:           "Geoxor - Aurora (Niek Edit)",
			releaseType:     "EDIT",
			buttonColor:     "#7C67A6",
			buttonTextColor: "#FFFFFF",
			backgroundColor: "#FFFFFF",
			iconColor:       "#7C67A6",
			coverURL:        "/images/aurora-edit-cover.jpg",
			youtubeLink:     "https://www.youtube.com/watch?v=Bww_cOc51XQ",
			pagePath:        "/auroraedit",
		},
		mikuremix:       {
			title:           "Hatsune Miku - World Is Mine (Geoxor Remix) [Niek Edit]",
			releaseType:     "EDIT",
			buttonColor:     "#90D8F6",
			buttonTextColor: "#FFFFFF",
			backgroundColor: "#FFFFFF",
			iconColor:       "#90D8F6",
			coverURL:        "/images/miku-remix-cover.jpg",
			youtubeLink:     "https://www.youtube.com/watch?v=Xqptytq79nQ",
			pagePath:        "/mikuremix",
		},
		afterlife:       {
			title:           "AFTERLIFE",
			releaseType:     "SINGLE",
			buttonColor:     "#3268C2",
			buttonTextColor: "#FFFFFF",
			backgroundColor: "#080808",
			iconColor:       "#FFFFFF",
			coverURL:        "/images/afterlife-cover.jpg",
			youtubeLink:     "https://www.youtube.com/watch?v=THFg6CL_VqU",
			spotifyLink:     "https://open.spotify.com/track/5qAomWwo2ocnha3158aP8H?si=92642bf48a3243ba",
			soundcloudLink:  "https://soundcloud.com/niek_o/afterlife-full",
			pagePath:        "/afterlife",
		},
		partygirl:       {
			title:           "PARTY GIRL",
			releaseType:     "EP",
			buttonColor:     "#0D202B",
			buttonTextColor: "#FFFFFF",
			backgroundColor: "#111111",
			iconColor:       "#FFFFFF",
			coverURL:        "/images/party-girl-cover.jpg",
			youtubeLink:     "https://www.youtube.com/watch?v=vwRuZuPILL0&list=PL41zV4hHhDYYe2ZSrK9eC2uIVV_tmodGL",
			spotifyLink:     "https://open.spotify.com/album/4zm0HzCLKT7XJO8bAz29P5?si=wlqJ6lHOTku8arx2Z8dmWQ",
			soundcloudLink:  "https://soundcloud.com/niek_o/sets/party-girl",
			pagePath:        "/partygirl",
		},
		theuniverse:     {
			title:           "THE UNIVERSE",
			releaseType:     "ALBUM",
			buttonColor:     "#D13B3B",
			buttonTextColor: "#FFFFFF",
			backgroundColor: "#090909",
			iconColor:       "#FFFFFF",
			coverURL:        "/images/the-universe-cover.jpg",
			youtubeLink:     "https://www.youtube.com/watch?v=iSjcrdLrD2k&list=PL41zV4hHhDYZQ13NT6PdggpKWDquDUzyt",
			spotifyLink:     "https://open.spotify.com/album/2lj7IEMCthtOMSGiD5ooBQ?si=17WS8oihRNSk6bqMVBxtHg",
			soundcloudLink:  "https://soundcloud.com/niek_o/sets/the-universe",
			pagePath:        "/theuniverse",
		},
	};
});
