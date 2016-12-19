'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
// import pugInheritance from 'gulp-pug-inheritance';
const plumber = require('gulp-plumber');
// import cache from 'gulp-cached';
const paths = require('../paths');

gulp.task('templates', function buildHTML() {
  return gulp.src(paths.src.views)
    .pipe(plumber())
    // .pipe(pugInheritance({ basedir: 'dev/views' }))
    // .pipe(cache('build'))
    .pipe(pug({
        pretty: '  '
    }))
    .pipe(gulp.dest(paths.build.views));
});
