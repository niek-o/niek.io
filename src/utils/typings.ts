export type typings = "Spotify" | "Youtube" | "SoundCloud";

export type pageOptions = {
	title: string;
	releaseType: releaseType;
	buttonColor: string;
	buttonTextColor: string;
	backgroundColor: string;
	iconColor: string;
};

type releaseType = "SINGLE" | "EP" | "ALBUM" | "REMIX" | "EDIT";
