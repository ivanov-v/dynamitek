'use strict';

import gulp from 'gulp';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import csso from 'gulp-csso';
import autoprefixer from 'gulp-autoprefixer';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import changed from 'gulp-changed';
import paths from '../paths';


gulp.task('sass', () => {
    return gulp.src(paths.styles)
        .pipe(changed(paths.build.styles))
        .pipe(plumber({ errorHandler: notify.onError(function(error) {
            var line = error.message.match(/on line \d+/m) + ' of file ' + error.message.match(/[-._a-z\/\\]+\n/i);
            var message = error.message.match(/Error: .+\n/);
                return {
                    title: 'Sass error ' + line,
                    message: message
                }
            })
        }))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(csso())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest(paths.build.styles));
});
