const path = require('path');
const postcssModulesValue = require('postcss-modules-values');

module.exports = (env, options) => ({
  devtool: options.mode === 'production' ? 'cheap-source-map' : 'eval-sourcemap',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: './src/index',

  output: {
    filename: 'bandle.js',
    path: path.join(__dirname, 'dist'),
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: 'localhost',
    port: '3000',
    open: true,
    overlay: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: [
              'transform-class-properties',
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          'sass-loader',
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: [
                postcssModulesValue,
              ],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  watch: false,
});
