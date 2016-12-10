var gulp    = require('gulp')
var chug    = require('gulp-chug')
var plumber = require('gulp-plumber')
var uglify  = require('gulp-uglify')
var flatten = require('gulp-flatten')
var concat  = require('gulp-concat')
var babel   = require('gulp-babel')

gulp.task('default', function(){})
gulp.task('build', [
	"minify-js",
])

gulp.task('build-semantic', function() {
	gulp.src("./semantic/gulpfile.js")
		.pipe(chug())
})

gulp.task('minify-js', function() {
	gulp
		.src([
			"static/licenseheader.js",
			"node_modules/jquery/dist/jquery.min.js",
			"node_modules/timeago/jquery.timeago.js",
			"static/snowfall.jquery.min.js",
			"static/semantic.min.js",
			"node_modules/vue/dist/vue.min.js",
			"static/ripple.js",
		])
		.pipe(plumber())
		.pipe(concat('dist.min.js'))
		/*.pipe(babel({
			presets: ["latest"]
		})) breaks vue */
		.pipe(flatten())
		.pipe(uglify({
			mangle: true,
			preserveComments: "license"
		}))
		.pipe(gulp.dest("./static"))
})