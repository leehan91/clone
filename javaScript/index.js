window.onload = function () {
  const elDiv = document.querySelector(".visual div");
  const elShow = document.querySelectorAll(".show");
  const elNews = document.querySelector(".news h2");
  const elLi = document.querySelectorAll(".news li");

  // todo
  // .visual>div > b,p 왼쪽에서 오른쪽으로 b먼저load하면서
  elDiv.classList.add("active");

  // .content > li 마우스 휠 내리면서 아래서 올라옴 이미지도 올라옴
  // .news h2,li 마우스 휠 내리면서 아래서 올라옴
  // li.active 설정(300,921,1489,2032)

  let offset = [];
  elShow.forEach((ele) => {
    offset.push(ele.offsetTop - window.innerHeight * 0.85);
    // offset.push(ele.offsetTop);
  });
  window.addEventListener("scroll", () => {
    // console.log(offset, window.pageYOffset);
    elShow.forEach((v1, k1) => {
      if (window.pageYOffset >= offset[k1]) {
        elShow[k1].classList.add("active");
      }
    });
    // li-1번째 배경 변경
  });
};
