'use strict';

module.exports = function () {
    $.gulp.task('js:process', function () {
        return $.gulp.src($.path.js)
            .pipe($.gp.concat('script.js'))
            .pipe($.gp.rigger())
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.uglify())
            .on('error', $.gp.notify.onError({title: 'Script'}))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.config.root + '/js'))
    })
};