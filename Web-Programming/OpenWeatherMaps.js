const fetch = require('node-fetch')

module.exports = class Weather {
  constructor() {
    this.APPID = ""
    this.URL_BASE = "http://api.openweathermap.org/data/2.5/"
  }

  async currentWeather (location) {
    const response = await fetch(`${URL_BASE}weather?q=${location}&appid=${APPID}`)
    const data = await response.json()
    return data
  }

  async weatherForecast (location) {
    const response = await fetch(`${URL_BASE}forecast?q=${location}&appid=${APPID}`)
    const data = await response.json()
    return data
  }

  async weatherByCordinates (latitude, longitude) {
    const response = await fetch(`${URL_BASE}onecall?lat=${latitude}&lon=${longitude}&appid=${APPID}`)
    const data = await response.json()
    return data
  }

}
