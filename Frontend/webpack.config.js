const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // entry 파일이 src 폴더에 있어야 합니다
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // CSS 파일을 처리하는 규칙 추가
        use: ['style-loader', 'css-loader'], // CSS 파일을 JS로 변환하고, 스타일을 DOM에 삽입
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // src 디렉토리 내의 index.html을 템플릿으로 사용
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // static 파일 경로 설정
    },
    compress: true,
    port: 8080,
  },
};
