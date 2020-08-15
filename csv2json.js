// モジュールの読み込み
const fs = require('fs');
const csv = require('csv');
const cm = require("commander");

// コマンドライン引数をcommanderでパースする
cm.parse(process.argv);

// 第一引数（読込ファイル名）
const readName = cm.args[0];

//コンソール画面
console.log(readName + "を読み込みました。");

//メイン処理

//第一引数のファイル読み込み
fs.createReadStream(__dirname + '/' + readName)
  .pipe(csv.parse({ columns: true }, function (err, data) {

    //コンソール画面 / csvファイルが大きい場合はコメントアウトしてください
    console.log(JSON.stringify(data, null, 4));


    // 第二引数（保存ファイル名）
    const saveName = cm.args[1];

    // 文字コード
    const charset = 'utf8';

    // JSONファイルに書き込む
    fs.writeFile(saveName, JSON.stringify(data, null, 4), charset, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(saveName + 'を保存しました。');
      }
    });
  }));