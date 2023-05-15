module.exports = {
  verbose: true,
  clearMocks: true,
  preset: 'react-native',
  moduleDirectories: [__dirname, 'node_modules', 'utils'],
  setupFilesAfterEnv: [
    '<rootDir>/jest.env.js',
    '@testing-library/jest-native/extend-expect'
  ],
  setupFiles: ['./jest.setup.js'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx'
  ],
  transform: {
    '^.+\\.(js)$': 'babel-jest',
  },
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!@toolz/allow)|(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  cacheDirectory: '.jest/cache',
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  modulePathIgnorePatterns: ['<rootDir>/__tests__/utils/'],
  coveragePathIgnorePatterns: ['android', 'ios'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    './src/components/': {
      branches: 80,
      statements: 80,
    },
    './src/screens/': {
      branches: 80,
      statements: 80,
    },
  },
};
