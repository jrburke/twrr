var path = require('path');
var NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
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

  plugins: [
    new NamedModulesPlugin()
  ],

  output: {
    path: path.resolve(__dirname),
    publicPath: "/",
    filename: "bundle.js"
  }
};
