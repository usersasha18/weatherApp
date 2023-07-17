const form = document.querySelector('.form');
const input_form = form.querySelector('input[type=text]'); 
const button_form = form.querySelector('.input-button');


function sendData() {
    const API_KEY = '15af00f7a26542bc99b58cf499981d2a';
    let city = input_form.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${API_KEY}`;

    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(data => {
        //main container
        const wrapper_card = document.querySelector('.weather-card');
        //html template
        const template = 
            `
                <p>Погода в городе ${data.name}</p>
                <div class="responsive">
                    <div class="image-block">
                        <img class="imge" src="pngwing 1.png" alt="...">
                    </div>
                    <div class="weater-desc">
                        <p>Градусы: ${Math.floor(data.main.temp) - 273} C</p>
                        <p>Ощущается как: ${Math.floor(data.main.feels_like) - 273} C</p>
                        <p>Влажность: ${data.main.humidity} %</p>
                    </div>
                </div>
            `
            wrapper_card.classList.add('open-card');
            wrapper_card.innerHTML = template;
            console.log(data)
    })
}

button_form.addEventListener('click', sendData);
