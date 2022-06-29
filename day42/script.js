// http://api.icndb.com/jokes/random

const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url = "http://api.icndb.com/jokes/random";

btn.addEventListener("click", getJoke);

async function getJoke() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    joke.innerHTML = data.value.joke;
    //   console.log(data);
  } catch (error) {
    joke.innerHTML = error.message;
    // fetch 는 400 ,500 같은 에러를 못잡음 해서 axios를 쓰자!!
  }
}
