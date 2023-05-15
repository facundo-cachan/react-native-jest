module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:jest/recommended',
    '@react-native-community'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 0,
        'no-undef': 0
      }
    }
  ],
  rules: {
    'prettier/prettier': 0,
    'semi': 0,
    'jsx-quotes': 0,
    'react/react-in-jsx-scope': 0,
    'react-native/no-raw-text': 0,
    'comma-dangle': ['error', 'never'],
    'react-native/no-color-literals': 0,
    'react/display-name': 0,
    'react/no-unescaped-entities': 0,
    'import/no-anonymous-default-export': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false
        }
      }
    ],
    'no-console': 1,
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called'
      }
    ],
    'no-inline-comments': [
      'error',
      {
        ignorePattern: 'eslint-disable-*|@ts-ignore'
      }
    ],
    'lines-around-comment': [
      'error',
      {
        beforeLineComment: true,
        beforeBlockComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: true
      }
    ]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json']
      }
    }
  }

};
