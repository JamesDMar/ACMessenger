const path = require('path');

module.exports = {
  entry: './src/IM.html',
  output: {
    filename: 'bundle.html',
    path: path.resolve(__dirname, 'dist')
  }
};