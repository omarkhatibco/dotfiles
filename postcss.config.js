/**
 * The internal dependencies.
 */

/**
 * Setup PostCSS plugins.
 */
const plugins = [
	require('postcss-import')({ path: 'resources/styles' }),
	require('tailwindcss')('tailwind.config.js'),
	require('postcss-preset-env')({
		preserve: false,
		autoprefixer: { grid: true },
		stage: 1,
		features: {
			'color-mod-function': {
				unresolved: 'warn',
			},
			'custom-properties': {
				preserve: false,
			},
			'nesting-rules': true,
		},
	}),
	require('postcss-easing-gradients')(),
	require('postcss-encode-background-svgs')(),
	require('cssnano')({
		preset: [
			'advanced',
			{
				autoprefixer: false,
				discardUnused: { fontFace: false },
			},
		],
	}),
	// Require('@fullhuman/postcss-purgecss')({
	// 	content: ['theme/**/*', 'resources/assets/scripts/**/*'],
	// 	extractors: [
	// 		{
	// 			extractor: class TailwindExtractor {
	// 				static extract(content) {
	// 					return content.match(/[A-z0-9-:\/]+/g) || [];
	// 				}
	// 			},
	// 			whitelist: [
	// 				'rtl',
	// 				'home',
	// 				'blog',
	// 				'archive',
	// 				'date',
	// 				'error404',
	// 				'logged-in',
	// 				'admin-bar',
	// 				'no-customize-support',
	// 				'custom-background',
	// 				'wp-custom-logo',
	// 				'alignnone',
	// 				'alignright',
	// 				'alignleft',
	// 				'wp-caption',
	// 				'wp-caption-text',
	// 				'screen-reader-text',
	// 				'comment-list',
	// 			],
	// 			whitelistPatterns: [
	// 				/^search(-.*)?$/,
	// 				/^(.*)-template(-.*)?$/,
	// 				/^(.*)?-?single(-.*)?$/,
	// 				/^postid-(.*)?$/,
	// 				/^attachmentid-(.*)?$/,
	// 				/^attachment(-.*)?$/,
	// 				/^page(-.*)?$/,
	// 				/^(post-type-)?archive(-.*)?$/,
	// 				/^author(-.*)?$/,
	// 				/^category(-.*)?$/,
	// 				/^tag(-.*)?$/,
	// 				/^tax-(.*)?$/,
	// 				/^term-(.*)?$/,
	// 				/^(.*)?-?paged(-.*)?$/,
	// 			],
	// 			extensions: ['html', 'js', 'php'],
	// 		},
	// 	],
	// }),
];

/**
 * Prepare the configuration.
 */
const config = {
	plugins,
};

module.exports = config;
