var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var del = require('del');
var notify = require("gulp-notify");
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var bower = require('gulp-bower');

gulp.task('default',['clean'], function() {
  gulp.start('sass','js', 'src', 'img');
});
 
gulp.task('bower', function() {
  return bower('bower_components')
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    },
    notify: false
  })
});

gulp.task('clean', function() {
  del('dist');
});

gulp.task('sass', function(){
  return gulp.src('src/scss/**/*.scss') // On récupère tout les fichiers scss + ceux dans les dossiers enfants
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths
    }))    // on lance gulp-sass
    .on("error", notify.onError({
    message: 'Error: <%= error.message %>'
  }))
    .pipe(gulp.dest('dist/css')) // On mets les .css compilés dans le dossier css du dossier de destionation dist
    .pipe(notify("<%= file.relative %> Compiled !")) // Custom message, mets ce que tu veux
    .pipe(browserSync.reload({ 
      stream: true
    })); // On synchronise avec le navigateur à chaque compilation
});

gulp.task("src", function(){
	gulp.src("src/view/index.html")
		.pipe(gulp.dest("dist"))
		.pipe(notify("<%= file.relative %> compiled !")) // Custom message, mets ce que tu veux
		.pipe(browserSync.reload({ 
	      stream: true
	    }));
})

gulp.task("js", function(){
  gulp.src("src/js/**/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(notify("<%= file.relative %> compiled !")) // Custom message, mets ce que tu veux
    .pipe(browserSync.reload({ 
        stream: true
      }));
});

gulp.task('img', function(){ // Compresse les images + svg
  gulp.src('src/images/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(notify("<%= file.relative %> minified !"))
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({ 
        stream: true
      }));
});


gulp.task("watch", ['browserSync'], function(){
  // Ce que gulp doit surveiller et rafraichir à chaque changement
	gulp.watch("src/scss/**/*.scss", ["sass"]);
	gulp.watch('src/view/index.html',["src"] );
	gulp.watch('src/js/*.js',["js"] );
});

