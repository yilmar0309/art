module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@hooks': './src/@core/hooks',
          '@utils': './src/@core/utils',
          '@screens': './src/app/screens',
          '@presenter': './src/@core/presenter',
          '@navigation': './src/app/navigation',
          '@components': './src/@core/components',
          '@nativeModules': './src/@core/nativeModules',
          '@services': './src/@core/services',
          '@fakeDb': './src/@core/fakeDb',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
