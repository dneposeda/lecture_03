const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


let conf = {

  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  
  module:{
    rules:[
            {
              test: /\.css$/,
              use: [
                MiniCssExtractPlugin.loader, 
                {
                  loader: 'css-loader',
                  options: { minimize: true }
                }


              ]
            }
    ]
  },


  plugins: [

    new MiniCssExtractPlugin({
      filename: "style.css",
    })

  ],

  // devtool: 'eval-source-map'

};


module.exports = conf;