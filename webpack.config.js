module.exports = {
  entry: './src/index.js',
  output: {
    path: './out',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'out',
    port: 1029,
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', './src']
  }
};