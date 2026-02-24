const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/setupScript7.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: 'index.html'
    }),
  ],
  module: {
        rules: [
            {
                test: /\.js$/, // применяем ко всем .js файлам
                exclude: /node_modules/, // исключаем node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] // транспилируем ES6+ в ES5
                    }
                }
            }
        ]
    },
    
    resolve: {
        fallback: {
            "fs": false,
            "path": false,
            "os": false,
            "crypto": false,
            "stream": false,
            "http": false,
            "https": false,
            "url": false,
            "util": false,
            "zlib": false
        }
    },
        
    devtool: 'source-map',
    
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true
    }
};
