import '../styles/reset.css'
import '../styles/styles.css'
import { getWeather } from './getWeather'
import { renderWeatherCard } from './renderWeatherCard'

const searchQueryInput = document.querySelector('input')
const searchQueryForm = document.querySelector('form')
const changeUnitButton = document.querySelector('#change-unit')

export let currentUnits = 'celsius'

searchQueryForm.addEventListener('submit', (e) => {
  e.preventDefault()
  getWeatherDataAndRenderWeatherCard()
})

changeUnitButton.addEventListener('click', () => {
  changeUnit()
  const weatherCard = document.querySelector('.weather-card')
  if (weatherCard.children.length > 0) {
    getWeatherDataAndRenderWeatherCard()
  }
})

function getWeatherDataAndRenderWeatherCard() {
  getWeather(searchQueryInput.value)
    .then((data) => renderWeatherCard(data))
    .catch((e) => alert(e.message))
}

function changeUnit() {
  currentUnits = currentUnits === 'celsius' ? 'fahrenheit' : 'celsius'
  changeUnitButton.textContent = currentUnits
}
