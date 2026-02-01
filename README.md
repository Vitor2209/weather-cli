# ☀️ Weather App – Node.js (Backend API + Frontend)

Este projeto é uma aplicação simples de **previsão do tempo**, desenvolvida em **Node.js**, que demonstra a integração entre:

- 🧠 **Backend (API REST)**
- 🌐 **Frontend (HTML, CSS e JavaScript)**
- ☁️ **API externa (OpenWeatherMap)**

O sistema permite que o usuário informe o nome de uma cidade e receba, em tempo real:
- 🌡️ Temperatura
- 💧 Umidade
- ☁️ Descrição do clima

---

## 🧩 Visão Geral da Arquitetura

O projeto segue uma arquitetura simples e bem definida:

Frontend (Browser)
↓ HTTP (fetch)
Backend Node.js (Express API)
↓ HTTP (axios)
OpenWeather API


📌 **Importante:**  
O frontend **não consome a API do OpenWeather diretamente**.  
Toda comunicação externa é feita pelo backend, mantendo a **API key protegida**.

---

## 🖼️ Demonstração

### 🌐 Interface Web (Frontend)
![Frontend](https://raw.githubusercontent.com/Vitor2209/weather-app/main/public/image/front.png)

### 🖥️ Teste via Navegador / API (Terminal)
![Terminal](https://raw.githubusercontent.com/Vitor2209/weather-app/main/public/image/terminal.png)

---

## 📁 Estrutura do Projeto

```text
weather-app/
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── public/
│   └── image/
│       ├── front.png
│       └── terminal.png
│
├── src/
│   ├── server.js
│   └── weatherService.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
⚙️ Configuração do Ambiente
1️⃣ Clonar o repositório
git clone https://github.com/Vitor2209/weather-app.git
cd weather-app
2️⃣ Instalar dependências
npm install
3️⃣ Configurar variáveis de ambiente
Crie um arquivo .env na raiz do projeto:

API_KEY=SUA_CHAVE_DA_OPENWEATHER
PORT=3000
🔐 A chave da API pode ser obtida gratuitamente em:
https://home.openweathermap.org/api_keys

▶️ Como Executar o Projeto
🧠 Rodar o Backend (API)
npm start
Se tudo estiver correto, aparecerá:

🚀 Backend rodando em http://localhost:3000
🌐 Testar o Backend direto no navegador
http://localhost:3000/weather?city=London
O backend retornará um JSON com os dados do clima.

🖥️ Rodar o Frontend
Abra o arquivo abaixo no navegador:

frontend/index.html
Digite o nome da cidade e clique em Buscar.

🔌 Endpoint Disponível
GET /weather
Parâmetros:

city (string) → nome da cidade

Exemplo:

GET http://localhost:3000/weather?city=São Paulo
🛠️ Tecnologias Utilizadas
Node.js

Express

Axios

Dotenv

CORS

HTML5

CSS3

JavaScript (Vanilla)

OpenWeather API

🧠 Conceitos Demonstrados
Criação de API REST com Node.js

Consumo de API externa

Separação de responsabilidades (service / server)

Uso de variáveis de ambiente

Integração frontend ↔ backend

Boas práticas de segurança (API key no backend)

Organização e documentação de projeto

🚀 Possíveis Melhorias Futuras
Deploy do backend (Render / Railway)

Loader visual no frontend

Tratamento visual de erros

Histórico de buscas

Suporte a múltiplos idiomas

Testes automatizados

👨‍💻 Autor
Vitor Dutra Melo
📍 Londres – UK

GitHub: https://github.com/Vitor2209

LinkedIn: https://www.linkedin.com/in/vitordutramelo/

⭐ Se este projeto te ajudou ou chamou sua atenção, deixe uma estrela no repositório!