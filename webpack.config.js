const path = require("path")
const MyPlugin = require("./myplugin")
const webpack = require('webpack');
const banner = require("./banner.js")


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
    new webpack.DefinePlugin({})
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