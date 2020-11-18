let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let browserSync = require('browser-sync');
let autoprefixer = require('gulp-autoprefixer');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let cssmin = require('gulp-cssmin');

gulp.task('sass', function(){
 return gulp.src('app/scss/**/*.scss')
          .pipe(sass({outputStyle: 'compressed'}))
          .pipe(rename({suffix : '.min'}))
          .pipe(autoprefixer({
            overrideBrowserslist:['last 8 versions']
          }))
          .pipe(gulp.dest('app/css'))
          .pipe(browserSync.reload({stream: true}))
});

gulp.task('style', function(){
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/magnific-popup/dist/magnific-popup.css',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css'
        // 'node_modules/rateyo/lib/cjs/rateyo.css'
    ])
            .pipe(concat('libs.min.css'))
            .pipe(cssmin())
            .pipe(gulp.dest('app/css'))
});

gulp.task('script', function(){
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js'
        // 'node_modules/rateyo/lib/cjs/rateyo.js'
    ])
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('app/js'))
});

gulp.task('html', function(){
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('watch', function(){
    gulp.watch('app/**/*.scss', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('js'));
});

gulp.task('default',gulp.parallel('style','script','sass','watch','browser-sync'))