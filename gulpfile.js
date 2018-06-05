var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watchSass = require("gulp-watch-sass");
	
gulp.task('sass', function() {
   return gulp.src('./sass/**/*.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('./css'));
});

gulp.task("sass:watch", function() {
   return watchSass([
       "./sass/**/*.scss"
   ]).pipe(sass())
     .pipe(gulp.dest("./css"));
});