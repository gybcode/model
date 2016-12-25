var gulp = require('gulp');
var bs = require('browser-sync');
var reload = bs.reload;

gulp.task('run', ['sync'], function(){
  gulp.watch(['./css/**','*.html','*.js']).on('change',reload);
});
gulp.task('sync', [], function(){
  var dir = __dirname.substr(__dirname.lastIndexOf('/')+1,__dirname.length);
  bs.init(null, {
    proxy:'localhost/' + dir,
    browser: 'default'
  });
});
