//　HTMLに変換する処理を記述する
import { marked} from "marked";
export function md2html(markdown, cliOptions) {
    return marked.parse(markdown, {
        gfm: cliOptions.gfm,
    });
};