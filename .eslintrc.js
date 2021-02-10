module.exports = {
  extends: 'airbnb',
  rules: {
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'react/jsx-props-no-spreading': 'off',
		'react/no-array-index-key': 'off',
		'react/jsx-indent-props': 'off',
		indent: 'off',
		'no-tabs': 'off',
		'react/jsx-closing-bracket-location': 'off',
		'max-len': 0,
  },
};
