// Copyright (c) 2023 leyoonafr <https://github.com/codeacme17>

function timeCounter(targetTime: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, targetTime));
}

export default timeCounter;
