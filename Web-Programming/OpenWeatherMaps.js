const fetch = require('node-fetch')

module.exports = class Weather {
  constructor() {
    this.APPID = ""
    this.URL_BASE = "http://api.openweathermap.org/data/2.5/"
  }

  async current (location) {
    const response = await fetch(`${this.URL_BASE}weather?q=${location}&appid=${this.APPID}`)
    const data = await response.json()
    return data
  }

  async forecast (location) {
    const response = await fetch(`${this.URL_BASE}forecast?q=${location}&appid=${this.APPID}`)
    const data = await response.json()
    return data
  }

  async byCoordinates (latitude, longitude) {
    const response = await fetch(`${this.URL_BASE}onecall?lat=${latitude}&lon=${longitude}&appid=${this.APPID}`)
    const data = await response.json()
    return data
  }

}
