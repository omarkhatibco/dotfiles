module.exports = {
	extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
	plugins: ['stylelint-order'],
	rules: {
		'no-empty-source': null,
		'order/order': ['custom-properties', 'dollar-variables', 'declarations', 'rules', 'at-rules'],
	},
};
