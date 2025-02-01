const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css'); 
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


function styles() {
    return gulp.src('./src/styles/**/*.scss') 
        .pipe(sass().on('error', sass.logError)) 
        .pipe(concat('main.css')) /
        .pipe(cleanCSS({ compatibility: 'ie8' })) 
        .pipe(gulp.dest('./dist/css')); 
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function watch() {
    gulp.watch('./src/styles/**/*.scss', styles);
    gulp.watch('./src/images/**/*', images);
    gulp.watch('./src/scripts/**/*.js', scripts);
}

exports.build = gulp.parallel(styles, images, scripts);
exports.dev = gulp.series(exports.build, watch);


