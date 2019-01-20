module.exports = function() {
    $.gulp.task('video', function() {
        return $.gulp.src('./dev/**/*.mp4')
            .pipe($.gulp.dest('./build/video/'));
    });
};
