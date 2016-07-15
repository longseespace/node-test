/*globals require, console */
var gulp = require('gulp'),
sass = require('gulp-sass'),
watch = require('gulp-watch'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer'),
concat = require('gulp-concat'),
notify = require('gulp-notify'),

// Common paths
paths = {
	vendor: 'node_modules',
	assets: '.',
	dist: 'public'
},

// Directories
dirs = {
	sass: paths.assets + '/sass',
	css: paths.dist + '/css',
	img: paths.dist + '/img',
	fonts: paths.dist + '/fonts'
};

//Place bootstrap icons to the assets folder
gulp.task('icons', function () {
	return gulp
	.src(paths.vendor + '/bootstrap-sass/assets/fonts/bootstrap/**.*')
	.pipe(gulp.dest(dirs.fonts));
});

//Generate a style.css on the CSS folder
gulp.task('styles', function () {
	return gulp
	.src(dirs.sass + '/style.scss')
	.pipe(sourcemaps.init())
	.pipe(
		sass({
			includePaths: [
				paths.vendor + '/bootstrap-sass/assets/stylesheets'
			]
		})
		.on("error", notify.onError(function (error) {
			return "Error: " + error.message;
		}))
	)
	.pipe(autoprefixer({
		browsers: ['last 3 versions']
	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(dirs.css));
});

//Concatenate all vendors css into sass/partials/_vendors.scss
gulp.task('vendors', function () {
	return gulp
	.src([
		//
	])
	.pipe(concat('vendors.css'))
	.pipe(gulp.dest(dirs.css));
});

//Watch task
gulp.task('watch', function () {
	return gulp
	.watch(dirs.sass + "/**/*.scss", ['styles']);
});
