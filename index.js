'use strict';

// HTTPのモジュールの読み込み
const http = require('http');

// サーバーの作成
const server = http.createServer((req, res) => {
    // 成功を示すレスポンスヘッダと共に、レスポンスヘッダを書き込む
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });

    // HTTPのレスポンスの内容を書き出す
    res.write(req.headers['user-agent']);

    // レスポンスの書き出しを終了
    res.end();
});

// HTTPが起動するポートを宣言してサーバーを起動する
const port = 8000;
server.listen(port, () => {
    console.log(`Listening on ${port}`);
});