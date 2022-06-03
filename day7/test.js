const couponEl = document.querySelector(".coupon");
const btnEl = document.querySelector(".btn");

const copyTest = (e) => {
  e.preventDefault();
  couponEl.select();
  navigator.clipboard.writeText(couponEl.value).then(() => {
    btnEl.textContent = "Copied";
    let timer = setInterval(() => {
      btnEl.textContent = "쌍코피";
    }, 3000);
  });
};
btnEl.addEventListener("click", copyTest);
