'use strict';

import gulp from 'gulp';
import rename from 'gulp-rename';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import paths from '../paths';

gulp.task('symbols', () => {
  return gulp.src(paths.src.symbols)
    .pipe(svgmin({
      plugins: [{ removeTitle: true }]
    }))
    .pipe(rename({ prefix: 'icon-' }))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('symbols.svg'))
    .pipe(gulp.dest('./src/temp/symbols'))
    .pipe(gulp.dest(paths.build.images));
});
