// https://www.gps-coordinates.net/

const userLocation = document.querySelector(".location")
const btn = document.querySelector(".btn")

btn.addEventListener("click" , () => {
  // geolocation 지리 getCurrentPosition 현재 위치
  navigator.geolocation.getCurrentPosition((position) => {
    // Latitude : 위도 위치 Longitude : 경도 
    userLocation.innerHTML = `Latitude : ${position.coords.latitude} <br>
    Longitude : ${position.coords.longitude}`
  })
})