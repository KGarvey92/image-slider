const path = require('path');

module.exports = {
  entry: './test/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'test'),
  },
  devtool: "source-map",
};