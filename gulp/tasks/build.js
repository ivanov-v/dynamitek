'use strict';

const gulp = require('gulp');
const run = require('run-sequence');

gulp.task('build', (fn) => {
  run(
    'clean',
    'styles',
    'images',
    'media',
    'fonts',
    'symbols',
    'templates',
    'scripts',
    'scripts-vendors',
    fn
  );
});
