module.exports = {
  // メインとなるJavaScriptファイル(エントリーポイント)
  entry: {
    'step1': './src/step1/main.js',
  },
  // ファイルの出力設定
  output: {
    // 出力ファイルのディレクトリ
    path: `${__dirname}/build`,
    // 出力ファイル名
    filename: '[name].bundle.js'
  },
  module: {
    // Loaderの設定
    rules: [
      // Sassファイルの読み込み
      {
        // 対象となるファイルの拡張子
        test: /\.scss/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  }
};
