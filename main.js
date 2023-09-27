import { program } from 'commander';
import * as fs from "node:fs/promises";
import { md2html } from './md2html.js'; // md2html.jsのmd2html関数をインポート


// コマンドライン引数からファイルパスの読み込み
program.option("--gfm", "GFMを有効にする");
// program.option("--no-hhh", "GFMを無効にする");
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
    gfm: false,
    ...program.opts(),
};



// fsモジュールを使用したファイルパスからのファイルの読み込み
fs.readFile(filePath, { encoding: "utf-8" }).then(file => {

    // marked.parseメソッドを使用してmarkdownをhtmlに変換
    const html = md2html(file, cliOptions);
    console.log(html);

}).catch(err => {
    console.log("reject: ", err.message);
    process.exit(1);
});

