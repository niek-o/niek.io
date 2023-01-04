export type pageOptions = {
    title: string;
    subtitle: releaseType | string;
    buttonColor: string;
    buttonTextColor: string;
    backgroundColor: string;
    iconColor: string;
    coverURL: string;
    youtubeLink?: string;
    soundcloudLink?: string;
    spotifyLink?: string;
    pagePath: string;
};

type releaseType =
    "SINGLE"
    | "EP"
    | "ALBUM"
    | "REMIX"
    | "EDIT";

export type platform =
    "youtube"
    | "soundcloud"
    | "spotify";
