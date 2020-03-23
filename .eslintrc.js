module.exports = {
	parser: 'babel-eslint',
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
		'plugin:react/recommended',
	],
	plugins: ['react-hooks'],
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'prettier/prettier': 'error',
		'react/prop-types': 0,
	},
};
