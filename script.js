const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3ad5beb1cfmshd2e25931978e717p14c4bcjsn84fa05525bd9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
        
        
        console.log(response)
      //  cloud_pct.innerHTML = response.cloud_pct   
temp.innerHTML = response.temp 
//temp2.innerHTML = response.temp 
feels_like.innerHTML = response.feels_like
humidity.innerHTML = response.humidity
//humidity2.innerHTML = response.humidity
min_temp.innerHTML = response.min_temp
max_temp.innerHTML = response.max_temp
wind_speed.innerHTML = response.wind_speed
//wind_speed2.innerHTML = response.wind_speed
wind_degrees.innerHTML = response.wind_degrees
let date=new Date(response.sunrise *1000)
            sunrise.innerHTML = date.toLocaleTimeString()
            let date1=new Date(response.sunset *1000)
            sunset.innerHTML = date1.toLocaleTimeString()
            let d = new Date().toDateString().split(" ");
            console.log(d)
            today_date.innerHTML=d[0] + " " + d[2] + " " + d[1] + " " + d[3]
            
    })
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
getWeather(city.value)
})
getWeather("Delhi")