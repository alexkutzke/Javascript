const fetch = require('node-fetch')

const APPID = '' // <-- Put your OpenWeatherMap appid here!
const URL_BASE = 'http://api.openweathermap.org/data/2.5/'

async function currentWeatherIn (location) {
  const currentWeatherInLocation = await fetch(`${URL_BASE}weather?q=${location}&appid=${APPID}`)
  const currentWeatherInLocationJson = await currentWeatherInLocation.json()
  return currentWeatherInLocationJson
}

async function weatherForecastIn (location) {
  const weatherForecastInLocation = await fetch(`${URL_BASE}forecast?q=${location}&appid=${APPID}`)
  const weatherForecastInLocationJson = await weatherForecastInLocation.json()
  return weatherForecastInLocationJson
}

async function oneCallApiLocationWith (latitude, longitude) {
  const apiLocation = await fetch(`${URL_BASE}onecall?lat=${latitude}&lon=${longitude}&appid=${APPID}`)
  const apiLocationJson = await apiLocation.json()
  return apiLocationJson
}

currentWeatherIn('Curitiba')
  .then(currentWeather => console.log(currentWeather))

weatherForecastIn('Curitiba')
  .then(weatherForecast => console.log(weatherForecast))

oneCallApiLocationWith(-25.42, -49.27)
  .then(apiLocation => console.log(apiLocation))
