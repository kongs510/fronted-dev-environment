const path = require("path")
const MyPlugin = require("./myplugin")
const webpack = require('webpack');
const banner = require("./banner.js")
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  plugins: [
    // new webpack.BannerPlugin(banner)
    // new webpack.DefinePlugin({})
    // new webpack.DefinePlugin({
    //   VERSION: JSON.stringify("v.1.2.3"),
    //   PRODUCTION: JSON.stringify(false),
    //   MAX_COUNT: JSON.stringify(999),
    //   "api.domain": JSON.stringify("http://dev.api.domain.com"),
    // })
    new HtmlWebpackPlugin({
      template: './src/index.html', // 템플릿 경로를 지정
      templateParameters: { // 템플릿에 주입할 파라매터 변수 지정
        env: process.env.NODE_ENV === 'development' ? '(개발용)' : '',
      },})
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: ["style-loader", "css-loader"], // style-loader를 앞에 추가한다
    },{
        test: /\.png$/, // .png 확장자로 마치는 모든 파일
        loader: "file-loader", // 파일 로더를 적용한다
        options: {
          publicPath: "./dist/", // prefix를 아웃풋 경로로 지정
          name: "[name].[ext]?[hash]", // 파일명 형식
        },
      },
    ],
  }
}