'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const mqpacker = require('css-mqpacker');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const plumber = require('gulp-plumber');
const server = require('browser-sync');
const paths = require('../paths');

gulp.task('styles', function() {
  return gulp.src(paths.src.styles)
    .pipe(
      plumber({
        errorHandler: function(err) {
          console.log(err);
          this.emit('end');
        }
      })
    )
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 4 versions']
      }),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(csso())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest(paths.build.styles))
    .pipe(server.stream());
});
