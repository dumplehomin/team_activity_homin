'use strict';

var gulp       = require('gulp'),
  	 sourcemaps = require('gulp-sourcemaps'),
    sass       = require('gulp-sass');

gulp.task('sass', function () {
	gulp.src('src/sass/**/*.{sass,scss}')
		.pipe( sourcemaps.init() )
		.pipe( sass({outputStyle: 'expanded'}).on('error', sass.logError) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest('src/css') );
});

gulp.task('sass-w', function () {
	gulp.watch('src/sass/**/*.{sass,scss}', ['sass']);
});