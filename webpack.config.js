const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};
// точка входа
module.exports = {
  entry: {
    app: PATHS.app
  },
// точка выхода
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  }
};
