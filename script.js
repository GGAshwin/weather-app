let weather = {
    "apiKey": "feb3eda070d3227833ca299ab7600ab0",
    fetchweather: function (city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=feb3eda070d3227833ca299ab7600ab0')
            .then(res => res.json())
            .then(data => this.displayweather(data))
    }, displayweather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".desc").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C"
        document.querySelector(".humidity").innerText = "humidity :" + humidity + " %"
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " Km/h"
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "') "
    },
    search: function () {
        this.fetchweather(document.querySelector(".search-bar").value)
    }
}
document.querySelector(".btn").addEventListener('click', function () {
    weather.search();

})

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }

})

weather.fetchweather