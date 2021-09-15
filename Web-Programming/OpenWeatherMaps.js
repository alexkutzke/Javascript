const fetch = require('node-fetch')

const APPID = '' // <-- Put your OpenWeatherMap appid here!
const URL_BASE = 'http://api.openweathermap.org/data/2.5/'

async function fetchWeather (locationName){
  const apiResponse = await fetch(`${URL_BASE}weather?q=${locationName}&appid=${APPID}`)
  return apiResponse
}

async function fetchForecast (locationName){
  const apiResponse = await fetch(`${URL_BASE}forecast?q=${locationName}&appid=${APPID}`)
  return apiResponse
}

async function fetchOneCallAPI (latitude, longitude) {
  const apiResponse = await fetch(`${URL_BASE}onecall?lat=${latitude}&lon=${longitude}&appid=${APPID}`)
  return apiResponse
}

async function requestCurrentWeather (locationName) {
  const apiResponse = fetchWeather(locationName)
  const responseJson = await apiResponse.json()
  return responseJson
}

async function requestWeatherForecast (locationName) {
  const apiResponse = fetchForecast (locationName)
  const responseJson = await apiResponse.json()
  return responseJson
}

async function requestOneCallApi (latitude, longitude) {
  const apiResponse = fetchOneCallAPI (latitude, longitude)
  const responseJson = await apiResponse.json()
  return responseJson
}

requestCurrentWeather('Kolkata')
  .then(weatherData => console.log(weatherData))

requestWeatherForecast('Kolkata')
  .then(forecastData => console.log(forecastData))

requestOneCallApi(55.68, 12.57)
  .then(oneCallApiData => console.log(oneCallApiData))
