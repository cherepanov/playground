const path =  require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "*.*",
          to: path.resolve(__dirname, "./dist/."),
          context: 'node_modules/pdfjs-dist/build'
      }
      ],
    }),
  ],
};