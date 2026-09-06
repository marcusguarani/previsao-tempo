// Variáveis e seleção de elementos

// ⚠️ Substitua pela SUA chave gratuita da OpenWeatherMap (veja instruções no README).
const apiKey = "COLOQUE_SUA_CHAVE_AQUI";
const apiCountryURL = "https://flagsapi.com/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

// Função para buscar os dados do clima

const getWeatherData = async (city) => {
    try {
        const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}&lang=pt_br`;
        const res = await fetch(apiWeatherURL);

        if (!res.ok) throw new Error('Cidade não encontrada');

        const data = await res.json();
        return data;
    } catch (error) {
        alert(error.message); // Exibe o erro para o usuário
        return null;
    }
};

// Função para mostrar os dados do clima

const clearWeatherData = () => {
    cityElement.innerText = "";
    tempElement.innerText = "";
    descElement.innerText = "";
    weatherIconElement.setAttribute("src", "");
    countryElement.setAttribute("src", "");
    humidityElement.innerText = "";
    windElement.innerText = "";
};

// Exibe os dados do clima

const showWeatherData = async (city) => {
    clearWeatherData(); // Limpa os dados antigos antes de mostrar os novos

    const data = await getWeatherData(city);

    if (!data) return; // Se os dados não forem encontrados, sai da função

    // Atualiza os elementos com as informações do clima
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed} km/h`;

    // Exibe a seção de dados climáticos
    weatherContainer.classList.remove("hide");
};

// Eventos

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;
    showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const city = e.target.value;
        showWeatherData(city);
    }
});
