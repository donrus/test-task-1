module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            server: './build',
            index: "index.html"
        });
    });

    $.gulp.task('ftp:upload', function() {
        var conn = $.ftpupload.create({
            parallel: 10,
            log: $.log.log
        });
        var globs = ['./build/**/*'];
        return $.gulp.src(globs, {base: 'build/', buffer: false})

    });
};