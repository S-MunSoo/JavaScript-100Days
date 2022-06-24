// console.log(window);

// console.log(Object.getOwnPropertyNames(window));

// LOCAL STORAGE METHODS
// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve the key of a localStorage

// window.localStorage.setItem("key", "value");

window.localStorage.setItem("firstName", "Nika");
localStorage.setItem("lastName", "Neo");

// 객체 로컬 저장
const person = {
  fullName: "Nizk Neo",
  location: "Abuja",
};

localStorage.setItem("user", JSON.stringify(person));

// 배열 로컬 저장
const fruits = ["Apple", "Banana", "Cherry"];

localStorage.setItem("fruits", JSON.stringify(fruits));

// GET ITEM FROM LOCAL STORAGE
console.log(localStorage.getItem("firstName"));

// REMOVE ITEm FROM LOCAL STORAGE
localStorage.removeItem("frutis");

// ALL REMOVE(CLEAR)

localStorage.clear();
localStorage.setItem("name", "Nika");

console.log(localStorage.key(0));
