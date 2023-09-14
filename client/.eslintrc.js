module.exports = {
  extends: ['plugin:prettier/recommended', 'prettier'],
  plugins: ['babel', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      // your babel options
      presets: ['@babel/preset-env'],
    },
  },
};
