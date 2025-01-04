export function renderWeatherCard({
  resolvedAddress,
  description,
  currentConditions
}) {
  const {
    conditions,
    temp,
    feelslike: feelsLike,
    humidity,
    icon,
    windspeed
  } = currentConditions

  const container = document.querySelector('.weather-card')
  container.classList.add('visible')
  container.innerHTML = ''

  const header = document.createElement('div')

  const titleContainer = document.createElement('h2')
  titleContainer.className = 'title'
  titleContainer.textContent = resolvedAddress

  const date = document.createElement('p')
  date.className = 'date'
  date.textContent = '1/3/2025, 6:57:20 PM'
  header.append(titleContainer, date)
  container.append(header)
  const tempContainer = document.createElement('p')
  tempContainer.className = 'temp'
  tempContainer.textContent = `${temp} °C`
  container.appendChild(tempContainer)

  const conditionsContainer = document.createElement('p')
  conditionsContainer.className = 'conditions'
  conditionsContainer.textContent = conditions
  container.appendChild(conditionsContainer)

  const descriptionContainer = document.createElement('p')
  descriptionContainer.className = 'description'
  descriptionContainer.textContent = description
  container.appendChild(descriptionContainer)

  const stats = document.createElement('div')
  stats.className = 'stats'

  const feelsLikeContainer = document.createElement('p')
  feelsLikeContainer.className = 'feelslike'
  const feelsLikeSpan = document.createElement('span')
  feelsLikeSpan.textContent = `${feelsLike} °C`
  feelsLikeContainer.textContent = 'Feels like: '
  feelsLikeContainer.append(feelsLikeSpan)
  stats.appendChild(feelsLikeContainer)

  const humidityContainer = document.createElement('p')
  humidityContainer.className = 'humidity'
  const humiditySpan = document.createElement('span')
  humiditySpan.textContent = `${humidity}%`
  humidityContainer.textContent = 'Humidity: '
  humidityContainer.append(humiditySpan)
  stats.appendChild(humidityContainer)

  const windspeedContainer = document.createElement('p')
  windspeedContainer.className = 'windspeed'
  const windspeedSpan = document.createElement('span')
  windspeedSpan.textContent = `${windspeed} mp/h`
  windspeedContainer.textContent = 'Wind: '
  windspeedContainer.append(windspeedSpan)
  stats.appendChild(windspeedContainer)

  container.appendChild(stats)
}
