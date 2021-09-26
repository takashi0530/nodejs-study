// strictモードで記述
'use strict';

// このコードは、number という定数に、process.argv[2] の値を代入します。
// process.argv は Node.js がデフォルトで提供してくれる、コマンドラインの引数が入った配列です。
// なぜ添字として 2 番を使っているかというと、0 番には node コマンドのファイルのパスが入り、
// 1 番には実行しているプログラムのファイルのパスが入る、という決まりがあるためです。
// コマンドの後ろに書いた最初の引数は process.argv[2] なのです。
// このコードが実行されると、process.argv[2] が 0 や null や undefined などの Falsy な値である場合、number には 0 が代入されます
// つまりこれは、コマンドライン引数が指定されていればその値、 そうでなければ 0 を変数 number に代入するというコードなのです。
const number = process.argv[2] || 0;

let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}

console.log(sum);