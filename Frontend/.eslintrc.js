module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off', // Since React 17+, this is no longer needed
  },
}
