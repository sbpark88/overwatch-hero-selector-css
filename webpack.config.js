const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        generator: {
          filename: "assets/images/[hash][ext][query]", // 이미지가 번들될 위치를 변경
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html", // 루트 디렉토리에 있는 index.html을 템플릿으로 사용
    }),
  ],
};
