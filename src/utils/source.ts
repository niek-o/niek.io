export type source = "Spotify" | "Youtube" | "SoundCloud";

export function buttonImage(source: source) {
	switch (source) {
		case "Spotify":
			return "https://img.icons8.com/fluency-systems-regular/64/ffffff/spotify.png";
		case "Youtube":
			return "https://img.icons8.com/fluency-systems-regular/64/ffffff/youtube-play.png";
		case "SoundCloud":
			return "https://img.icons8.com/small/48/ffffff/soundcloud.png";
	}
}
