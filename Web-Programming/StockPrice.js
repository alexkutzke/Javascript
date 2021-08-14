const fetch = require('node-fetch')
const jsdom = require('jsdom')

function createStockUrl(stockSymbol) {
  return `https://in.finance.yahoo.com/lookup?s=$${stockSymbol}`
}

async function fetchPageDomAsJson(url) {
  const response = await fetch(url)
  const pageBody = await response.text()
  return new jsdom.JSDOM(pageBody, 'text/html')
}

function findStockPriceInDom(dom) {
  const stockString = dom.window.document.querySelectorAll('td')[2].textContent.replace(/,/g, '')
  return parseFloat(stockString)
}

async function getStockPriceFrom(stockSymbol) {
  const url = createStockUrl(stockSymbol)
  const domJsonObject = await fetchPageDomAsJson(url)
  const stockPrice = findStockPriceInDom(domJsonObject)
  
  return stockPrice
}

async function main () {
  // Using async await to ensure synchronous behaviour
  await getStockPriceFrom('GOOGL')
    .then(response => console.log(`GOOGL stock price: $ ${response}`))

  await getStockPriceFrom('AAPL')
    .then(response => console.log(`AAPL stock price: $ ${response}`))

  await getStockPriceFrom('MSFT')
    .then(response => console.log(`MSFT stock price: $ ${response}`))

  await getStockPriceFrom('AMZN')
    .then(response => console.log(`AMZN stock price: $ ${response}`))
}

main()
