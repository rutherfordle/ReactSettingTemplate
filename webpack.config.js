module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader',
          'css-loader']
      },
      {
        test : /\.jpg|svg|png$/,
        exclude: /(node_modules)/,
        loader : 'file-loader'
      }

    ],

  }
}
