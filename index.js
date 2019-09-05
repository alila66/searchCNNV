const cheerio = require('cheerio')
const searchWeb = require('./searchWeb')

function parseHtml (html) {
  const $ = cheerio.load(html)

  function getValueFromCheerio (source, style) {
    const result = []
    source.each(function (i, elem) {
      result.push($(this).attr(style))
    })
    return result
  }

  const rowa = $('#flawList > table > tbody > tr > td > a')
  const rowspan = $('#flawList > table > tbody > tr > td > span')
  // const row = $('#flawList > table > tbody > tr > td')

  const title = getValueFromCheerio(rowa, 'title')
  const uri = getValueFromCheerio(rowa, 'href')
  const showinfo = getValueFromCheerio(rowspan, 'class')

  return {
    title,
    showinfo,
    uri
  }
}

async function getCNVD () {
  const html = await searchWeb()
  return parseHtml(html)
}

getCNVD().then(console.log)
