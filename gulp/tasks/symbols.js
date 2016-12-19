'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');
const paths = require('../paths');

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
