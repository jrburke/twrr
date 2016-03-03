var path = require("path");

module.exports = {
  entry: {
    app: ["./app/main.jsx"]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  output: {
    path: path.resolve(__dirname),
    publicPath: "/",
    filename: "bundle.js"
  }
};
