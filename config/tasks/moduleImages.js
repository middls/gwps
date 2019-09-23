import gulp from "gulp";
import plumber from "gulp-plumber";
import changed from "gulp-changed";
import imagemin from "gulp-imagemin";
import rename from "gulp-rename";
import gulpIf from "gulp-if";
import path from "path";
import logger from "gulplog";

import { plumberConfig, imageminConfig } from "../config";
import { isDevelopment } from "../util/env";

function renameFileByModuleName(file) {
  const { dirname, basename, extname } = file;
  const dirNameArr = dirname.split(path.sep).filter(i => i !== "images") || [];
  const newDirname = path.join(...dirNameArr);

  const prevFileName = path.join(dirname, basename + extname);
  const nextFileName = newDirname + '_' + basename;

  logger.info(`File "${prevFileName}" renamed to "${nextFileName}"`);

  file.basename = nextFileName;
  file.dirname = path.join(__dirname, '../../build/assets/images');
}

export const moduleImages = () => {
  return gulp
    .src("**/*.{png,jpg,jpeg,gif,svg,webp}", { cwd: "src/components/*/images" })
    .pipe(plumber(plumberConfig))
    .pipe(rename(renameFileByModuleName))
    .pipe(changed("build/assets/images"))
    .pipe(gulpIf(!isDevelopment, imagemin(imageminConfig.images)))
    .pipe(gulp.dest("build/assets/images"));
};
