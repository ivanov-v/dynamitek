'use strict';

import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import paths from '../paths';

gulp.task('images', () => {
  return gulp.src(paths.src.images)
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.jpegtran({ progressive: true })
    ]))
    .pipe(gulp.dest(paths.build.images));
});
