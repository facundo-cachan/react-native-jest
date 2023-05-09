module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset'],
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx'],
        alias: [
          { '@assets': './assets/' },
          { '@navigation': './src/navigation/' },
          { '@providers': './src/providers/' },
          { '@service': './src/service/' },
          { '@screens': './src/screens/' },
          { '@styles': './src/styles/' },
          { '@utils': './src/utils/' },
          { '@components': './src/components/' },
          { '@layouts': './src/layouts/' },
        ],
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
