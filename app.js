const city = document.getElementById('city')
const temperature = document.getElementById('temperature')
const cloud= document.getElementById('cloud')
const img= document.getElementById('img')
const input= document.getElementById('input')
const apiKey = 'f4f66db9b27d145cf237a45d31dcca8d'

const data = async function(search){
    const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`)
    console.log(getData);

    const jsonData = await getData.json()
    console.log(jsonData);
    console.log(jsonData.name);

    if(jsonData.cod == 400){
        swal("Please Enter location!");
        // alert('Please Enter location')
        img.src = "./asset/error1.png"
        city.innerHTML = '';
        temperature.innerHTML = '';
        cloud.innerHTML = '';
    }

    if(jsonData.cod == 404){
        swal("Please Enter write location!");
        // alert('Please Enter write location')
        img.src = "./asset/error2.png"
        city.innerHTML = ''
        temperature.innerHTML = ''
        cloud.innerHTML = ''
    }
    city.innerHTML = jsonData.name
    temperature.innerHTML = Math.floor(jsonData.main.temp)+'°C'
    cloud.innerHTML = jsonData.weather[0].main

    if(cloud.innerHTML == 'Clouds'){
        img.src =  "./asset/clouds.png"
    }else if(cloud.innerHTML == 'Clear'){
        img.src = "./asset/clears.png"
    }else if(cloud.innerHTML == 'Haze'){
        img.src = "./asset/haze.png"
    }else if(cloud.innerHTML == 'Rain'){
        img.src = "./asset/rain.png"
    }else if(cloud.innerHTML == 'Snow'){
        img.src = "./asset/strom.png"
    }else if(cloud.innerHTML == 'Strom'){
        img.src = "./asset/strom.png"
    }
    input.value = ""
}
function myFun(){
    search = input.value
    data(search)
}
