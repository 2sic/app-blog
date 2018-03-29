var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('watch-sass-all', function () {
	gulp.watch(['./src/scss/*.scss'], ['sass']);
});
gulp.task('sass-all', function () {
  return gulp.src(['./src/scss/*.scss'])
	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('.', { sourceRoot: '../src/scss/' }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass-bs3', function () {
  return gulp.src(['./src/scss/bs3.scss'])
	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('.', { sourceRoot: '../src/scss/' }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass-bs4', function () {
  return gulp.src(['./src/scss/bs4.scss'])
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('.', { sourceRoot: '../src/scss/' }))
	.pipe(gulp.dest('./dist/'));
});

gulp.task('watch-javascript', function () {
	gulp.watch(['./src/js/*.js'], ['javascript']);
});
gulp.task('javascript', function() {
	return gulp.src('./src/js/*.js')
		.pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['sass-all', 'javascript', 'watch-sass-all', 'watch-javascript']);