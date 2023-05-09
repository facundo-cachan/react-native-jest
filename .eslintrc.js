module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['node_modules/**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  plugins: ['react', 'jest', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'no-loop-func': [1],
    'no-use-before-define': 'error',
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
    'no-multiple-empty-lines': 'error',
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'off',
    'react-native/no-inline-styles': 0,
    'react/react-in-jsx-scope': 'off',
    'max-len': [1, 1200, 2, { ignoreComments: true }],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 0,
    quotes: 0,
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-console': [
      2,
      {
        allow: ['warn', 'error', 'log'],
      },
    ],
  },
};
