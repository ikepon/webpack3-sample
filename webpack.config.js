module.exports = {
  // メインとなるJavaScriptファイル(エントリーポイント)
  entry: './main.js',
  // ファイルの出力設定
  output: {
    // 出力ファイルのディレクトリ
    path: `${__dirname}/`,
    // 出力ファイル名
    filename: 'bundle.js'
  }
};
