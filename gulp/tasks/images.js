'use strict';

const gulp = require('gulp');
const paths = require('../paths');
const imagemin = require('gulp-imagemin');

gulp.task('images', () => {
  return gulp.src(paths.src.images)
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.jpegtran({ progressive: true })
    ]))
    .pipe(gulp.dest(paths.build.images));
});
