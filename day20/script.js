const links = document.querySelectorAll(".nav-list li a");

for (const link of links) {
  link.addEventListener("click", (e) => smoothScroll(e, link));
}

function smoothScroll(e, link) {
  e.preventDefault();

  const href = link.getAttribute("href");

  // scrollIntoView 특정 요소 위치로 화면 스크롤 하기
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

// const links = document.querySelectorAll(".nav-list li a");

// for (link of links) {
//   link.addEventListener("click", smoothScroll);
// }

// function smoothScroll(e) {
//   e.preventDefault();
//   const href = this.getAttribute("href");
//   href.scrollIntoView({
//     behavior: "smooth",
//     block: "center",
//     inline: "nearest",
//   });
// }
