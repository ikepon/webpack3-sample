module.exports = {
  // メインとなるJavaScriptファイル(エントリーポイント)
  entry: './main.js',
  // ファイルの出力設定
  output: {
    // 出力ファイルのディレクトリ
    path: `${__dirname}/`,
    // 出力ファイル名
    filename: 'bundle.js'
  },
  module: {
    // Loaderの設定
    rules: [
      // CSSファイルの読み込み
      {
        // 対象となるファイルの拡張子
        test: /\.css/,
        loaders: ['style-loader', 'css-loader']
      },
    ]
  }
};
