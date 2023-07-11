const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

gulp.task('sass', function () {
   return gulp
      .src('src/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest('dist/css'));
});

gulp.task('css', function () {
   return gulp
      .src('dist/css/**/*.css')
      .pipe(concat('styles.css'))
      .pipe(cleanCSS())
      .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
   return gulp.src('src/js/**/*.js').pipe(uglify()).pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function () {
   browserSync.init({
      server: {
         baseDir: './',
      },
   });

   gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
   gulp.watch('dist/css/**/*.css', gulp.series('css'));
   gulp.watch('src/js/**/*.js', gulp.series('js'));
   gulp
      .watch(['*.html', 'dist/css/**/*.css', 'dist/js/**/*.js'])
      .on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('sass', 'css', 'js', 'watch'));
