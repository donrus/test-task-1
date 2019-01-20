module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./dev/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./dev/**/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch('./dev/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./dev/**/*.svg', $.gulp.series('svg:copy'));
        $.gulp.watch('./data/imports/*.*', $.gulp.series('data:copy'));
        $.gulp.watch('./dev/**/*.js', $.gulp.series('js:dev'));
        $.gulp.watch('./dev/**/*.{png,jpg,gif}', $.gulp.series('img:dev'));
    });
};