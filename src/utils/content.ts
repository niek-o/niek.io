import { pageOptions } from "./typings";

export const content: pageOptions[] = [
	// {
	// 	title: "NIGHTMARE",
	// 	releaseType: "SINGLE",
	// 	buttonColor: "#A90000",
	// 	buttonTextColor: "#FFFFFF",
	// 	backgroundColor: "#000000",
	// 	iconColor: "#FFFFFF",
	// 	coverURL: "https://i.imgur.com/eqa8m2Y.jpg",
	// 	pagePath: "/nightmare",
	// },
	{
		title: "HOLD ME NOW",
		releaseType: "SINGLE",
		buttonColor: "#FF0000",
		buttonTextColor: "#FFFFFF",
		backgroundColor: "#FFFFFF",
		iconColor: "#FF0000",
		coverURL: "https://i.imgur.com/O1tFKQq.jpg",
		youtubeLink: "https://www.youtube.com/watch?v=PVvxr3YJdNM",
		spotifyLink: "https://open.spotify.com/album/5JKLq88LAWkYA1LZtRmBvf?si=m7mF_81PQYe2nbdpkeNerA",
		soundcloudLink: "https://soundcloud.com/gmafiarecords/niek-hold-me-now-original-mix",
		pagePath: "/holdmenow",
	},
	{
		title: "Geoxor - Aurora (Niek Edit)",
		releaseType: "EDIT",
		buttonColor: "#7C67A6",
		buttonTextColor: "#FFFFFF",
		backgroundColor: "#FFFFFF",
		iconColor: "#7C67A6",
		coverURL: "https://i.imgur.com/pzrxdrh.png",
		youtubeLink: "https://www.youtube.com/watch?v=Bww_cOc51XQ",
		pagePath: "/auroraedit",
	},
	{
		title: "Hatsune Miku - World Is Mine (Geoxor Remix) [Niek Edit]",
		releaseType: "EDIT",
		buttonColor: "#90D8F6",
		buttonTextColor: "#FFFFFF",
		backgroundColor: "#FFFFFF",
		iconColor: "#90D8F6",
		coverURL: "https://i.imgur.com/QUx6t0A.png",
		youtubeLink: "https://www.youtube.com/watch?v=Xqptytq79nQ",
		pagePath: "/mikuremix",
	},
	{
		title: "AFTERLIFE",
		releaseType: "SINGLE",
		buttonColor: "#3268C2",
		buttonTextColor: "#FFFFFF",
		backgroundColor: "#080808",
		iconColor: "#FFFFFF",
		coverURL: "https://i.imgur.com/3Rknn3R.jpg",
		youtubeLink: "https://www.youtube.com/watch?v=THFg6CL_VqU",
		spotifyLink: "https://open.spotify.com/track/5qAomWwo2ocnha3158aP8H?si=92642bf48a3243ba",
		soundcloudLink: "https://soundcloud.com/niek_o/afterlife-full",
		pagePath: "/afterlife",
	},
	{
		title: "PARTY GIRL",
		releaseType: "EP",
		buttonColor: "#0d202b",
		buttonTextColor: "#FFFFFF",
		backgroundColor: "#111111",
		iconColor: "#FFFFFF",
		coverURL: "https://i.imgur.com/TuxElVa.jpg",
		youtubeLink: "https://www.youtube.com/watch?v=vwRuZuPILL0&list=PL41zV4hHhDYYe2ZSrK9eC2uIVV_tmodGL",
		spotifyLink: "https://open.spotify.com/album/4zm0HzCLKT7XJO8bAz29P5?si=wlqJ6lHOTku8arx2Z8dmWQ",
		soundcloudLink: "https://soundcloud.com/niek_o/sets/party-girl",
		pagePath: "/partygirl",
	},
	{
		title: "THE UNIVERSE",
		releaseType: "ALBUM",
		buttonColor: "#d13b3b",
		buttonTextColor: "#FFFFFF",
		backgroundColor: "#090909",
		iconColor: "#FFFFFF",
		coverURL: "https://i.imgur.com/MdKgFSs.jpg",
		youtubeLink: "https://www.youtube.com/watch?v=iSjcrdLrD2k&list=PL41zV4hHhDYZQ13NT6PdggpKWDquDUzyt",
		spotifyLink: "https://open.spotify.com/album/2lj7IEMCthtOMSGiD5ooBQ?si=17WS8oihRNSk6bqMVBxtHg",
		soundcloudLink: "https://soundcloud.com/niek_o/sets/the-universe",
		pagePath: "/theuniverse",
	},
];

export function findItem(query: string) {
	return content.find((element) => element.title === query);
}
