module.exports = function() {
    let webpackconfig = require('../../webpack.config.js');

    $.gulp.task('lint', function()  {
        return $.gulp.src(['./dev/**/*.js', '!./dev/common/js/libs/**/*.js'])
            .pipe($.eslint(require('../../eslint.config.js')))
            .pipe($.eslint.format())
            .pipe($.eslint.failAfterError());
    });

    $.gulp.task('js:dev', function () {
        return $.gulp.src('./dev/common/js/main.js')
            .pipe($.webpackStream(webpackconfig))
            .pipe($.gulp.dest('./build/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('js:build', function () {
        return $.gulp.src('./dev/common/js/main.js')
            .pipe($.webpackStream(webpackconfig))
            .pipe($.gulp.dest('./build/js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gp.rename({ suffix: '.min' }))
            .pipe($.gulp.dest('./build/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:dev', function() {
        return $.gulp.src(['dev/common/js/head-polyfills/picturefill.min.js'
        ])
            .pipe($.gp.concat('polyfills.js'))
            .pipe($.gulp.dest('./build/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', function() {
        return $.gulp.src(['dev/common/js/head-polyfills/picturefill.min.js'
        ])
            .pipe($.gp.concat('polyfills.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/js/'));
    });


    $.gulp.task('js:copy', function() {
        return $.gulp.src([])
            .pipe($.gulp.dest('./build/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
