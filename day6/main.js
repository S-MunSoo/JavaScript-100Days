const wordEl = document.querySelector(".input-text");
const btnEl = document.querySelector(".btn");
const resultEl = document.querySelector(".result");

wordEl.focus();
wordEl.addEventListener("focus", clearHtml);
btnEl.addEventListener("click", countVowel);
wordEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    countVowel();
  }
});

// 포커스 될때 인풋값 클리어
function clearHtml() {
  wordEl.value = "";
  resultEl.innerHTML = "";
}

function countVowel() {
  // 계산할 변수 코드 생성
  let vowelCount = 0;
  // wordVal에 wordEl의 계산할 값을 입력 및 넣어준다(소문자 toLowerCase())
  let wordVal = wordEl.value.toLowerCase();
  // alert(wordVal);
  for (let i = 0; i < wordVal.length; i++) {
    let letter = wordVal[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      vowelCount += 1;
    }
  }
  resultEl.innerHTML = `${wordEl.value.toUpperCase()}는 ${vowelCount}개의 알파벳을 포함하고 있어`;
}
