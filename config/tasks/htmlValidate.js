import gulp from "gulp";
import htmlv from "gulp-html-validator";


export const htmlValidate = () => {
    return gulp.src('build/*.html')
    .pipe(htmlv({format: 'html'}))
    .pipe(gulp.dest('./build/validation'));
};
