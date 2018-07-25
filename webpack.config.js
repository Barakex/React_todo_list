const path = require('path');

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
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  watch: false,
});
