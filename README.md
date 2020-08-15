# node_csv2json
csvファイルをJSONファイルに変換します。
csvファイル、保存ファイルはコマンドライン引数で指定します。

# 【準備】モジュールのインストール

```
npm install csv
npm install commander
```

# 実行
```
node csv2json.js [読み込みファイル名.csv] [保存ファイル名.json]

//例
node csv2json.js hoge.csv aaa.json
```

```
//結果
hoge.csvを読み込みました
aaa.jsonを保存しました

```
