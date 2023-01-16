export type pageOptions = {
    title: string;
    subtitle: releaseType | string;
    buttonColor: string;
    buttonTextColor: string;
    backgroundColor: string;
    iconColor: string;
    coverURL: string;
    backgroundURL?: string;
    links: Array<trackLink>
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

export type trackLink = {
    url: string,
    platform: platform
}