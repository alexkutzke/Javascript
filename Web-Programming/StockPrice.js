const fetch = require('node-fetch')
const jsdom = require('jsdom')
const { isArray } = require('util')

const STOCK_SYMBOLS = ['GOOGL', 'AAPL', 'MSFT', 'AMZN']

async function fetchtStockPrices(stockSymbols) {
  if (!isArray(stockSymbols)) return
  const results = stockSymbols.map(async (symbol) =>
    fetch(`https://in.finance.yahoo.com/lookup?s=$${symbol}`)
  )
  return await Promise.all(results)
}

function formatCoinAndPrint(synbolResponse) {
  if (!isArray(synbolResponse)) return
  synbolResponse.map(async (pageBodyResponse) => {
    const pageBody = await pageBodyResponse.text()
    const stock = getDataOnBodyTextResponse(pageBody, 0)
    const price = getDataOnBodyTextResponse(pageBody, 2)
    return console.log(`${String(stock)} stock price: $ ${parseFloat(price)}`)
  })
}

function getDataOnBodyTextResponse(pageBody, arrayPositionIndex) {
  const dom = new jsdom.JSDOM(pageBody, 'text/html')
  return dom.window.document
    .querySelectorAll('td')
    [arrayPositionIndex].textContent.replace(/,/g, '')
}

async function main() {
  await fetchtStockPrices(STOCK_SYMBOLS).then((stocksReturned) =>
    formatCoinAndPrint(stocksReturned)
  )
}

try {
  main()
} catch (error) {
  console.error('Error: ', error)
}
