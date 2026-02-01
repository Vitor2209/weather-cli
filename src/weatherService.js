const axios = require("axios");

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather(city, apiKey) {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: apiKey,
      units: "metric",
      lang: "pt_br"
    }
  });

  return response.data;
}

module.exports = { getWeather };
