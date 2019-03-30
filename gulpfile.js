const gulp = require('gulp');
const bs = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass',function(){
    return gulp.src(['./src/scss/**/*.scss','node_modules/swiper/dist/css/swiper.min.css','node_modules/animate.css/animate.css'])
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
    .pipe(bs.stream());

})
gulp.task('watch',['sass'],function(){
   // khi nào có thay doi sass thi no chay thang len trinh duyet
    gulp.watch('./src/scss/**/*.scss',['sass','watch']); 
})
gulp.task('js',function(){
    return gulp.src('node_modules/swiper/dist/js/swiper.js')
    .pipe(gulp.dest('./src/js'))
    .pipe(bs.stream());
})
gulp.task('default',['watch','js'])