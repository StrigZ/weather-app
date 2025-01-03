const API_KEY = '7USNDL24JJJD6P4JFECJHZ8L8'

export async function getWeather(searchQuery) {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchQuery}?key=${API_KEY}`,
    { mode: 'cors' }
  )
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  const json = await res.json()
  const {
    resolvedAddress,
    description,
    currentConditions: {
      conditions,
      temp,
      feelslike,
      humidity,
      icon,
      windspeed
    }
  } = json

  return {
    resolvedAddress,
    description,
    currentConditions: {
      conditions,
      temp,
      feelslike,
      humidity,
      icon,
      windspeed
    }
  }
}
