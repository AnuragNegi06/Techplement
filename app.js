const apikey ="api_key";
const url="url";

const searchBox = document.querySelector(".search input"); 
const searchButton = document.querySelector(".search Button");

async function checkWeather(city){
   const response = await fetch(url + city + `&appid=${apikey}`);
   var data = await response.json();
   console.log(data);
 
   document.querySelector(".city").innerHTML = data.name;    
   document.querySelector(".temp").innerHTML = data.main.temp + "℃";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
}
searchButton.addEventListener("click",()=>{
   checkWeather(searchBox.value);
})




