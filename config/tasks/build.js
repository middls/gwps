import gulp from "gulp";
import { cleanup } from "./cleanup";
import { startMessage } from "./messages";
import { css } from "./styles";

import { html } from "./pug";
import { icons } from "./icons";
import { fonts } from "./fonts";
import { sprite } from "./sprite";
import { UIColorsGenerate } from "./ui";
import { moduleImages } from "./moduleImages";
import { staticFiles } from "./staticFiles";
import { scripts } from "./scripts";

import { serviceWorker } from "./serviceWorker";
import { isDevelopment } from "../util/env";

const noop = done => done();

export const build = gulp.series(
    startMessage,
    cleanup,
    UIColorsGenerate,
    gulp.series(
        gulp.parallel(  html, 
                        icons,
                        fonts, 
                        sprite, 
                        moduleImages, 
                        staticFiles, 
                        scripts
                    ),
        css,
        isDevelopment ? noop : serviceWorker
    )
);

