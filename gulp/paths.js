export default {
  baseSrc: './src',
  baseBuild: './build',

  src: {
    styles: './src/styles/app.scss',
    scripts: './src/scripts/**/*.js',
    fonts: './src/fonts/**/*.{woff,woff2}',
    images: './src/img/**/*.{png,jpg,gif,svg}',
    media: './src/media/**/*.{png,jpg,gif,svg}',
    symbols: './src/sprite/symbols/*.svg',
    views: './src/views/*.pug'
  },

  build: {
    styles: './build/css',
    images: './build/img',
    media: './build/media',
    scripts: './build/js',
    views: './build'
  }
};
