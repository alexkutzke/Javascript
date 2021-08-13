require('dotenv/config')
const fetch = require('node-fetch')

const APP_ID = process.env.API_KEY
const URL_BASE = 'http://api.openweathermap.org/data/2.5/'

function currentWeather (location) {
  return callOpenWeatherApi(`${URL_BASE}weather?q=${location}&appid=${APP_ID}`)
}

function weatherForecast (location) {
  return callOpenWeatherApi(`${URL_BASE}forecast?q=${location}&appid=${APP_ID}`)
}

function oneCallApi (latitude, longitude) {
  return callOpenWeatherApi(`${URL_BASE}onecall?lat=${latitude}&lon=${longitude}&appid=${APP_ID}`)
}

async function callOpenWeatherApi(url) {
  const response = await fetch(url)
  return await response.json()
}

currentWeather('Kolkata')
  .then(data => console.log(data))

weatherForecast('Kolkata')
  .then(data => console.log(data))

oneCallApi(55.68, 12.57)
  .then(data => console.log(data))
