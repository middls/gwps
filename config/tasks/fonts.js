import gulp from "gulp";
import plumber from "gulp-plumber";
import changed from "gulp-changed";

import { plumberConfig } from "../config";

export const fonts = () => {
    return gulp
        .src("**/{*,.*}", { cwd: "src/fonts" })
        .pipe(plumber(plumberConfig))
        .pipe(changed("build/assets/fonts"))
        .pipe(gulp.dest("build/assets/fonts"));
};
