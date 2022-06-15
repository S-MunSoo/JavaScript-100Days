const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const number = document.getElementById("number");
const URL = "https://type.fit/api/quotes";

async function getQuotes(e) {
  e.preventDefault();

  if (number.value.length === 0) {
    return alert("Plese enter a number");
  } else {
    let res = await fetch(URL);
    let data = await res.json();
    console.log(data);
    render(data);
  }
}

function render(data) {
  let output = "";
  for (let i = 0; i < data.length; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    if (i == number.value) {
      break;
    }
    output += `
      <li>Quote: ${data[randomIndex].text}</li>
      <li>Author: ${data[randomIndex].author}</li>
   <hr>
`;
  }
  document.querySelector(".quotes").innerHTML = output;
}

// function shuffle(quotes) {
//   let CI = quotes.length,
//     tempValue,
//     randomIndex;

//   // While elements exist in the array
//   while (CI > 0) {
//     randomIndex = Math.floor(Math.random() * CI);
//     // DECREASE CI BY 1
//     CI--;
//     // SWAP THE LAST ELEMENT WITH CI
//     tempValue = quotes[CI];
//     quotes[CI] = quotes[randomIndex];
//     quotes[randomIndex] = tempValue;
//   }
//   return quotes;
// }
