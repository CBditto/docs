module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/sort-comp': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    semi: 0,
    'prettier/prettier': [
      'error',
      {
        semi: false,
      },
    ],
  },
  plugins: ['prettier', 'simple-import-sort', 'react-hooks'],
  ignorePatterns: ['build/**/*.js', '*.config.js'],
  overrides: [
    {
      files: ['**/*.test.ts[x]'],
      env: {
        jest: true, // now **/*.test.js files' env has both es6 *and* jest
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
