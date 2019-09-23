import gulp from "gulp";
import plumber from "gulp-plumber";
import sass from "gulp-sass";
import gcmq from "gulp-group-css-media-queries";
import prettier from "gulp-prettier";
import postcss from "gulp-postcss";
import concat from "gulp-concat";
import sassGlob from "gulp-sass-glob";

import { plumberConfig } from "../config";
import bs from "../util/getBrowserSyncInstance";

export const css = () =>
    gulp
        .src(["**/!(_)*.scss"], {cwd: 'src/scss'})
        .pipe(plumber(plumberConfig))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(concat("main.css"))
        .pipe(gcmq())
        .pipe(postcss())
        .pipe(prettier())
        .pipe(gulp.dest("build/assets/css"))
        .pipe(bs.reload({ stream: true }));
