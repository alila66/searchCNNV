const cheerio = require('cheerio')
const searchWeb = require('./searchWeb')

module.exports = async function parseHtml() {
    // async function parseHtml() {
    console.log("function parseHtml start ...\n")
    let html = await searchWeb()
    const $ = cheerio.load(html)

    function getValueFromCheerio(source, style) {
        const result = []
        source.each(function(i, elem) {
            result.push($(this).attr(style))
        })
        return result
    }

    const rowa = $('#flawList > table > tbody > tr > td > a')
    const rowspan = $('#flawList > table > tbody > tr > td > span')
    const row = $('#flawList > table > tbody > tr > td')

    const title = getValueFromCheerio(rowa, 'title')
    const uri = getValueFromCheerio(rowa, 'href')
    const showinfo = getValueFromCheerio(rowspan, 'class')

    let result = []

    for (let i = 0; i < title.length; i++) {
        result[i] = new Object()
        result[i].title = title[i]
        result[i].showinfo = showinfo[i]
        result[i].uri = uri[i]
    }

    return result
};

// parseHtml().then(console.log);