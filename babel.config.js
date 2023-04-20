module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@context': './src/context',
          '@hooks': './src/hooks',
          '@types': './src/types',
        },
      },
    ],
  ],
};
