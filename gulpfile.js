"use strict";

const gulp = require( 'gulp' ),
	browserify = require( 'browserify' ),
	del = require( 'del' ),
	source = require( 'vinyl-source-stream' ),
	buffer =  require( 'vinyl-buffer' ),
	watchify = require('watchify'),
	assign = require('lodash.assign'),
	gutil = require('gutil'),
	uglify = require('gulp-uglify'),
	pump =  require('pump')
;

let customOpts = {
	entries: ['./example/index.js'],
	debug: true
};

let transformOpts = [
		[ 'babelify', {
			presets: ['es2015'],
			plugins: ['transform-object-assign']
		} ]
];

let opts = assign({ transform: transformOpts }, watchify.args, customOpts),
	watch = watchify(browserify(opts))
;

gulp.task('dev', bundle);
watch.on('update', bundle);
watch.on('log', gutil.log);

gulp.task('default', ['dev']);

function bundle() {

	return watch.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./build/js'))
	;
}

gulp.task( 'js', function () {

	return browserify( './example/index.js' )
		.transform( 'babelify', { presets: ['es2015'] } )
		.bundle()
		.pipe( source( 'bundle.js' ) )
		.pipe(gulp.dest('./build/js'))
		.pipe( buffer() )
		.pipe( uglify() )
		.pipe(gulp.dest('./build/js'))
	;
} );