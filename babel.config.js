const babelConfig = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
    ['@babel/preset-typescript', { optimizeConstEnums: true }],
  ]
}

module.exports = babelConfig;