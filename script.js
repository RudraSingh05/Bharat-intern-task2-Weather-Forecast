var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "7255d2d3373cd2ab70e1b9b50c75ed93"

function conversion(val) {
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())

        .then(data => {
            var nameval = data['name']
            var descrip = data['weather'][0]['description']
            var temperature = data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML = `Weather of <span>${nameval}</span>`
            temp.innerHTML = `Temperature : <span>${conversion(temperature)} C</span>`
            description.innerHTML = `Sky Condition: <span>${descrip}</span>`
            wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>` // Corrected variable name
        })
        .catch(err => alert('YOU ENTERED WRONG CITY NAME :)'))
})
