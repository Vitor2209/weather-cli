async function searchWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.innerHTML = "❌ Digite uma cidade.";
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:3000/weather?city=${city}`
    );

    if (!response.ok) {
      throw new Error("Cidade não encontrada");
    }

    const data = await response.json();

    resultDiv.innerHTML = `
      <p><strong>Cidade:</strong> ${data.name}</p>
      <p>🌡️ Temperatura: ${data.main.temp}°C</p>
      <p>💧 Umidade: ${data.main.humidity}%</p>
      <p>☁️ Clima: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = "❌ Erro ao buscar o clima.";
  }
}
