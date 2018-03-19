'use strict';

global.$ = {
    config: require('./gulp/config'),
    path: {
        task: require('./gulp/paths/tasks.js'),
        js: 'source/js/**/*.js'
    },
    gulp: require('gulp'),
    del: require('del'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'rigger',
        'js:process',
        'copy:image',
        // 'imageMin',
        'copyfonts',
        'serve',
        'watch'
    ),
    $.gulp.parallel(
        'serve',
        'watch'
    )
));
