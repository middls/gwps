import gulp from "gulp";

import { server } from "./server";
import { build } from "./build";
import { watch } from "./watch";
import { UIColorsGenerate } from "./ui";

export const dev = gulp.series(UIColorsGenerate, build, gulp.parallel(server, watch));
