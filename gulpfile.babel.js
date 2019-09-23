'use strict';

import gulp from "gulp";
import { dev } from "./config/tasks/dev";
import { build } from "./config/tasks/build";
import { zip } from "./config/tasks/zip";
import { htmlValidate } from "./config/tasks/htmlValidate";

gulp.task("dev", dev);
gulp.task("build", build);
gulp.task("zip", zip);
gulp.task("validate", htmlValidate);

gulp.task("default", gulp.series("dev"));