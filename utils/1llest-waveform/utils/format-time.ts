// Copyright (c) 2023 leyoonafr <https://github.com/codeacme17>

function formatSecond(second: number): string {
    const minutes = Math.floor(second / 60);
    const seconds = Math.floor(second % 60);
    const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    return formattedTime;
}

export { formatSecond };
