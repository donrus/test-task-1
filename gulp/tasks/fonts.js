module.exports = function() {
    $.gulp.task('fonts', function () {
        return $.gulp.src('./dev/common/fonts/**/*.*')
            .pipe($.gulp.dest('./build/fonts/'));
    });
};
