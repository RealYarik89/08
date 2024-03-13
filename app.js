let button = document.querySelector(".button")


button.addEventListener("click", () => {

    async function succesGetLocation(position) {
        let apiToken = "64088a093f54bb84f3e2a2d9d2966526"
        let latitude = position.coords.latitude
        let long = position.coords.longitude

        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${long}&appid=${apiToken}&lang=ru`)
        let resJson = await res.json()
        console.log(resJson)
        let city = document.querySelector(".city")
        city.innerText = resJson.name

        let temp = document.querySelector(".temp")
        temp.innerText = `${Math.round(resJson.main.temp - 272)}° C`

        let icon = document.querySelector(".icon")
        let img = document.createElement("img")

        img.src = `https://openweathermap.org/img/wn/${resJson.weather[0].icon}@2x.png`
        icon.appendChild(img)

        let discription = document.querySelector(".discription")
        discription.innerText = resJson.weather[0].description

        let speed = document.querySelector(".speed")
        speed.innerText = `Ветер: ${resJson.wind.speed} м/с`

        let humidity = document.querySelector(".humidity")
        humidity.innerText = `Влажность: ${resJson.main.humidity}%`
    }

    navigator.geolocation.getCurrentPosition(succesGetLocation)
})