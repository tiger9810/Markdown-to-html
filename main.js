import { program } from 'commander';
import * as fs from "node:fs/promises";

console.log("parse result: ", typeof(program.parse(process.argv)));

// console.log("no parse result", process.argv);

program.parse(process.argv);

const filePath = program.args[0];
console.log("filePath: ", filePath);

// for (let i = 0; i<program.args.length; i++) {
//     console.log(`args${i}`,program.args[i]);
// }

fs.readFile(filePath, { encoding: "utf-8" }).then(file => {
    console.log("resolve: ", file);
}).catch(err => {
    console.log("reject: ", err);
    process.exit(1);
});