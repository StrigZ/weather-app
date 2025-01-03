import '../styles/reset.css'
import '../styles/styles.css'
import { getWeather } from './getWeather'
import { renderWeatherCard } from './renderWeatherCard'

const searchQueryInput = document.querySelector('input')
const searchQueryForm = document.querySelector('form')

searchQueryForm.addEventListener('submit', (e) => {
  e.preventDefault()

  getWeather(searchQueryInput.value).then((data) => renderWeatherCard(data))
})
