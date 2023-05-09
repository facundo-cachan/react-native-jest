module.exports = {
  verbose: true,
  preset: 'react-native',
  moduleDirectories: [__dirname, 'node_modules', 'utils'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  setupFiles: [],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  clearMocks: true,
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|@fortawesome)',
  ],
  cacheDirectory: '.jest/cache',
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  modulePathIgnorePatterns: ['<rootDir>/__tests__/utils/'],
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
