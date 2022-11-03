//하는일 까지 올라오기
// 200ms,300ms,400ms
const two = document.querySelectorAll(".d-200ms");
const three = document.querySelectorAll(".d-300ms");
const four = document.querySelectorAll(".d-400ms");
const load = document.querySelectorAll(".load");

let offset = [];
let offset2 = [];
let offset3 = [];
let delay = setTimeout(() => {
  load.forEach((v0, k0) => {
    two[k0].classList.add("appear");
    three[k0].classList.add("appear");
    four[k0].classList.add("appear");
  });
  two.forEach((ele) => {
    // offset.push(ele.offsetTop);
    offset.push(ele.offsetTop - window.innerHeight * 0.85);
  });
  three.forEach((ele) => {
    offset2.push(ele.offsetTop - window.innerHeight * 0.85);
  });
  four.forEach((ele) => {
    offset3.push(ele.offsetTop - window.innerHeight * 0.85);
    // console.log(ele.offsetTop);
  });

  window.addEventListener("scroll", () => {
    // if(window.pageYOffset<639){}
    // console.log(offset, window.pageYOffset);
    two.forEach((v, k) => {
      if (window.pageYOffset >= offset[k]) {
        two[k].classList.add("appear");
      }
    });
    three.forEach((v, k1) => {
      if (window.pageYOffset >= offset2[k1]) {
        three[k1].classList.add("appear");
      }
    });
    four.forEach((v, k2) => {
      if (window.pageYOffset >= offset3[k2]) {
        four[k2].classList.add("appear");
      }
    });
  });
}, 50);
