module.exports = function() {
    $.gulp.task('pug',function()  {
        return $.gulp.src('./dev/pages/**/*.pug')
            .pipe($.gp.pug({
                // locals : {
                //     nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf8')),
                //     content: JSON.parse($.fs.readFileSync('./data/content.json', 'utf8'))
                // },
                // pretty: true
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            }))
            .pipe($.htmlhint())
            .pipe($.htmlhint.reporter())
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
