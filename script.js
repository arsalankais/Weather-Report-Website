const button = document.querySelector("button")
button.addEventListener("click", (e) => {
    const place = document.querySelector("#location").value

    function updateTemp(data) {
        const element = document.querySelector(".temp")
        element.innerHTML = `${data.current.temp_c}°C`
        const humidity = document.querySelector("#humidity")
        const wind = document.querySelector("#wind")
        humidity.innerHTML = `${data.current.humidity}%`
        wind.innerHTML = `${data.current.wind_kph}km/h`
        const city = document.querySelector("#city")
        city.innerHTML = `${place}`
    }
    const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=c8edd9b7741244d796b210636262201&q=${place}&aqi=no`)
    promise
        .then(response => response.json())
        .then(data => updateTemp(data))

})