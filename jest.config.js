module.exports = {
  verbose: true,
  clearMocks: true,
  preset: 'react-native',
  moduleDirectories: [__dirname, 'node_modules', 'utils'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  setupFiles: [],
  testRegex: '(src\\/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
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
  modulePathIgnorePatterns: ['<rootDir>/src/__tests__/utils/'],
  coveragePathIgnorePatterns: ['android', 'ios'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
    './src/components/': {
      branches: 40,
      statements: 40,
    },
  },
};
