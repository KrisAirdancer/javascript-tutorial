const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    const cityDetails = data.cityDetails;
    const weather = data.weather;
    // Getting the above two variables from data can be done using destructuring:
    // const {cityDetails, weather } = data;


    // Update details template (in index.html)
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // Update day/night & icon images
    
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    
    // Alternative to below in the form of a ternary expression
    // let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    let timeSrc = null;
    if(weather.IsDayTime){
      timeSrc = 'img/day.svg';
    } else {
      timeSrc = 'img/night.svg';
    }
    
    time.setAttribute('src', timeSrc);

    // Remove d-none class if it is present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};

cityForm.addEventListener('submit', event => {
    // Prevent the default behavior of the form submit event
    event.preventDefault();

    // Get city value from HTML form
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // Update UI with new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weather: weather
    };
};