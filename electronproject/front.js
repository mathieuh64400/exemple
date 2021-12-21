// partie meteo:

const APIKEY='721e6e1f9205d22adf412c4aa34b0740';
let apicall=function(city){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&lang=fr`;


    fetch(url).then((res)=>res.json().then((data)=>{
        console.log(data)
        let temp= data.main.temp -273.42;
        console.log(temp);
        document.querySelector('#city').textContent=data.name;
        document.querySelector('#temp').textContent=data.main.temp -273.42+'°C';
        document.querySelector('#humidity').textContent=data.main.humidity +'%';
        document.querySelector('#wind').textContent=data.wind.speed +'km/h';
        document.querySelector('#pressure').textContent=data.main.pressure +'Hpa';
    }
    
    )) 
}

document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
  let ville=  document.querySelector('#ville').value;
  console.log(ville);
  apicall(ville);
})

apicall('Pau');



