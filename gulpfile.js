import gulp from 'gulp';
import browserSync from 'browser-sync';
import { deleteAsync } from 'del';
import path from 'path';

const bs = browserSync.create();

// Paths
const paths = {
    src: {
        html: './src/**/*.html',
        css: './src/css/**/*.css',
        js: './src/js/**/*.js',
        images: './src/img/**/*.*',
        fonts: './src/fonts/**/*.*',
    },
    build: {
        base: './build',
        css: './build/css',
        js: './build/js',
        images: './build/img',
        fonts: './build/fonts',
    }
};

// Clean Build Directory
export async function clean() {
    return deleteAsync([paths.build.base]);
}

// Copy HTML to Build
export function copyHtml() {
    return gulp.src(paths.src.html).pipe(gulp.dest(paths.build.base));
}

// Copy JavaScript to Build
export function copyJs() {
    return gulp.src(paths.src.js).pipe(gulp.dest(paths.build.js));
}

// Copy CSS to Build
export function copyCss() {
    return gulp.src(paths.src.css).pipe(gulp.dest(paths.build.css));
}

// Copy Images to Build
export function copyImages() {
    return gulp.src(paths.src.images).pipe(gulp.dest(paths.build.images));
}

// Copy Fonts to Build
export function copyFonts() {
    return gulp.src(paths.src.fonts).pipe(gulp.dest(paths.build.fonts));
}

// Serve and Watch for Changes
export function serve() {
    bs.init({
        server: {
            baseDir: paths.build.base
        },
        notify: false
    });

    gulp.watch(paths.src.html, copyHtml).on('change', bs.reload);
    gulp.watch(paths.src.js, copyJs).on('change', bs.reload);
    gulp.watch(paths.src.css, copyCss).on('change', bs.reload);
    gulp.watch(paths.src.images, copyImages).on('change', bs.reload);
    gulp.watch(paths.src.fonts, copyFonts).on('change', bs.reload);
}

// Build Task
export const build = gulp.series(
  clean,
  gulp.parallel(copyHtml, copyCss, copyJs, copyImages, copyFonts)
);

// Default Task
export default gulp.series(build, serve);
