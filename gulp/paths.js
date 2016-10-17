export default {
  baseSrc: './src',
	baseBuild: './build',

	src: {
		styles: './src/styles/app.scss',
		scripts: './src/scripts/**/*.js',
    fonts: './src/fonts/**/*.{woff,woff2}',
    images: './src/images/**/*',
    media: './src/media/**/*'
	},

	build: {
		styles: './build/css',
		images: './build/img',
		scripts: './build/js'
	}
}
