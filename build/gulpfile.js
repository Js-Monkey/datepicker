'use strict'

const {series, src, dest} = require('gulp')
const sass = require('gulp-sass')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')

function compile() {
    return src('../src/assets/*.scss')
        .pipe(sass.sync())
        .pipe(rename(function (path) {
            path.basename = "index"
            path.extname = ".css"
        }))
        .pipe(cssmin())
        .pipe(dest('../dist'))
}


exports.build = series(compile)
