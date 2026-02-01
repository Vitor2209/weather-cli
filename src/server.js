require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { getWeather } = require("./weatherService");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/weather", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: "Cidade não informada" });
  }

  try {
    const data = await getWeather(city, process.env.API_KEY);
    res.json(data);
  } catch (error) {
    res.status(404).json({ error: "Cidade não encontrada" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
});
