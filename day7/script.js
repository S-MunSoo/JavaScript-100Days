// CopyText
const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
  e.preventDefault();
  // 쿠폰 사용

  coupon.select();
  // 복사할수있는 인덱스 값
  // coupon.setSelectionRange(0, 9999);
  // document.execCommand("copy");

  // clipboardAPI 이용
  // Clipboard API는 웹 애플리케이션 내에서 잘라내기, 복사 및 붙여넣기 기능을 구현하는 데 사용할 수 있습니다.

  navigator.clipboard.writeText(coupon.value).then(() => {
    btn.textContent = "Copied";
    setTimeout(() => {
      btn.textContent = "코피!!";
    }, 2000);
  });
};

btn.addEventListener("click", copyText);

// navigator.clipboard클립보드의 내용을 읽기 위해 시스템 클립보드에 액세스하는 데 사용
// navigator.clipboard.readText().then(
//   clipText => document.querySelector(".cliptext").innerText = clipText);
