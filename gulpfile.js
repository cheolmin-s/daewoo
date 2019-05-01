/**
 * Created by Administrator on 2017-07-03.
 */

// 변수선언 = require('모듈이름');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var include = require('gulp-include');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

/*
 gulp.task( task이름, 함수/익명함수 );
 */

// pipe()는 모듈의 기능을 실행해주는 함수

// 새로 고침
gulp.task('livereload', function(){
  gulp.src(['html/*', 'css/*', 'js/*', '*'])
      .pipe( livereload() );
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('*', ['livereload']);
  gulp.watch('src/html/**', ['include', 'livereload']);
  gulp.watch('src/**', ['autoprefixer', 'livereload']);
  gulp.watch('src/scss/**', ['sass', 'livereload']);
  gulp.watch('src/js/**', ['jsconcat', 'livereload']);
});

// header, footer, 공통영역 분리
gulp.task('include', function(){
  gulp.src("src/html/*.html")
      .pipe(include())
      .on('error', console.log)

      .pipe(gulp.dest("dist/html"));
});


// sass 실행

gulp.task('sass', function(){
  return gulp.src('src/scss/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/css'));
});

//오토프리픽스
gulp.task('autoprefixer',function() {
    gulp.src('src/scss/*.scss')
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/css'));
});


// concat 실행 - 여러 개의 파일을 하나의 파일로 합치는 기능
gulp.task('gnb', function() {
  return gulp.src('src/js/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('gnb.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/'));
});



gulp.task('jsconcat', ['gnb']);

gulp.task('default', ['livereload', 'include','sass','autoprefixer','jsconcat', 'watch']);