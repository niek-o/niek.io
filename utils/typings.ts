export type pageOptions = {
    id: string;
    title: string;
    subtitle: string;
    backgroundColor: string;
    accentColor: string;
    backgroundImage: boolean;
    links: Array<trackLink>;
};

export type musicPlatform = "youtube" | "soundcloud" | "spotify";

export type trackLink = {
    url: string;
    platform: musicPlatform;
};
