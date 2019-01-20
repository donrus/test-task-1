module.exports = function() {
    $.gulp.task('img:dev', function() {
        return $.gulp.src(['./dev/**/*.{png,jpg,gif}'])
            .pipe($.rename({dirname: ''}))
            .pipe($.gulp.dest('./build/img'));
    });

    $.gulp.task('img:build', function() {
        return $.gulp.src('./dev/**/*.{png,jpg,gif}')
            .pipe($.gp.imagemin([
                $.gp.imagemin.optipng({optimizationLevel: 3}),
                $.gp.imagemin.jpegtran({progressive: true})
            ]))
            .pipe($.rename({dirname: ''}))
            .pipe($.gulp.dest('./build/img/'));
    });


    $.gulp.task('svg:copy', function() {
        return $.gulp.src('./dev/**/*.svg')
            .pipe($.rename({dirname: ''}))
            .pipe($.gulp.dest('./build/img/'));
    });
};
