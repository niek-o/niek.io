// Copyright (c) 2023 leyoonafr <https://github.com/codeacme17>

import { type App } from "vue";
import IllestWaveform from "./components/IllestWaveform.vue";

export default {
    install: (app: App) => {
        app.component("IllestWaveform", IllestWaveform);
    }
};

export type { IllestWaveformProps } from "./types/waveform";
export { IllestWaveform };
