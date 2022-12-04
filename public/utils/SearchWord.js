"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchWord = void 0;
const axios_1 = require("axios");
const cheerio = require("cheerio");
const config_1 = require("../config");
const SearchWord = async (word) => {
    try {
        // const htmlData = readFileSync(join(__dirname, '../../htmlsample/', `/kata-${word}.html`));
        const htmlData = await fetchHtml(word);
        const $ = cheerio.load(htmlData);
        let dataResponse = [];
        $(".body-content > h4:contains('Pesan')").nextAll().each(function () {
            $(this).remove();
        });
        for (let i = 0; i < $(".body-content > h2").length; i++) {
            let lema = $(".body-content > h2").eq(i).text().trim();
            let kelas_kata = "";
            let deskripsi = "";
            let arti = [];
            const list = $(".body-content > h2")
                .eq(i)
                .nextAll("ul, ol")
                .first()
                .find("li");
            if (list.length === 0)
                continue;
            for (let j = 0; j < list.length; j++) {
                kelas_kata = "";
                for (let k = 0; k < list.eq(j).find("span").length; k++) {
                    let getAttributeTitle = list.eq(j).find("span").eq(k).attr("title");
                    kelas_kata += `${list
                        .eq(j)
                        .find("span")
                        .eq(k)
                        .text()}[${getAttributeTitle}] `;
                    list.eq(j).find("span").eq(k).empty();
                }
                deskripsi = list
                    .eq(j)
                    .html()
                    .replace(/<(?:.|\n)*?>/gm, "")
                    .replace(/\n/g, "")
                    .trim();
                arti[j] = {
                    kelas_kata: kelas_kata.trim(),
                    deskripsi,
                };
            }
            dataResponse[i] = {
                lema,
                arti
            };
        }
        if (dataResponse.length < 1)
            return false;
        return dataResponse;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.SearchWord = SearchWord;
const fetchHtml = async (word) => {
    try {
        const { data } = await axios_1.default.get(`${config_1.default.kbbiUrl}/${word}`);
        return data;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
//# sourceMappingURL=SearchWord.js.map