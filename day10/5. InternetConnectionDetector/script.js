window.addEventListener("load", (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = navigator.onLine ? "Online" : "Offline";
});
window.addEventListener("offline", (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = offline;
});
window.addEventListener("Online", (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = Online;
});
