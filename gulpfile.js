const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


function styles() {
    return gulp.src('./src/styles/*.scss') 
        .pipe(sass({ outputStyle: 'compressed' })) 
        .pipe(concat('main.css')) 
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


}

exports.build = gulp.parallel(styles, images, scripts);
exports.dev = gulp.series(exports.build, watch);


