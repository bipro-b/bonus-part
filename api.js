

const API_KEY = `f2a698eaa6e36519f1f9fc3748fca481`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const innerText = (id, text) => {
    document.getElementById(id).innerText = text;

}

const displayTemperature = temperature => {
    console.log(temperature);
    innerText('city', temperature.name);
    innerText('temperature', temperature.main.temp);
    innerText('condition', temperature.weather[0].main);

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
    //console.log(temperature);
}

