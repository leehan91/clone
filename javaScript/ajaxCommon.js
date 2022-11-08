$(function () {
  $("body").prepend("<header></header>");
  $("body").append("<footer></footer>");

  $("header").load("./common.html .header", start);
  $("footer").load("./common.html .footer");

  function start() {
    // ======================================================================================================header======================================================================================================
    const elHeader = document.querySelector(".header");
    const logo = document.querySelector(".header .main_l");
    const elH1 = document.querySelector(".main_l > h1 > img");
    const disNO = document.querySelector(".nav");
    const trigger = document.querySelector(".nav .trigger");
    const pre = document.querySelector(".header .bg_pre");
    const nav = document.querySelector(".nav_burger");
    const triggerOut = document.querySelector(".nav_burger .trigger");

    trigger.onclick = function () {
      trigger.classList.toggle("active");
      if (trigger.classList.contains("active") == true) {
        nav.classList.add("active");
        triggerOut.classList.remove("active");
        logo.style = "display:none;";
        disNO.style = "display:none;";
        pre.style = "display:block;";
      }
    };
    triggerOut.onclick = function () {
      triggerOut.classList.toggle("active");
      if (triggerOut.classList.contains("active") == true) {
        nav.classList.remove("active");
        trigger.classList.remove("active");
        logo.style = "display:inline;";
        disNO.style = "display:flex;";
        pre.style = "display:none;";
      }
    };

    // ==================================================================storage=================================================================

    //header에 index페이지만 .active가 사라지고
    // 나머지 페이지는 유지
    const elFix = document.querySelectorAll(".nav > li");
    let pag = window.location.pathname.split("/");
    pag = pag[pag.length - 1];
    console.log(pag);
    let pageIndex = () => {
      if (pag == "index.html" || pag == "") {
        localStorage.page = 0;
      } else if (pag == "introduce.html") {
        localStorage.page = 1;
        elFix[0].classList.add("active");
      } else if (pag == "innovation.html") {
        localStorage.page = 2;
        elFix[1].classList.add("active");
      } else if (pag == "news.html") {
        localStorage.page = 3;
        elFix[2].classList.add("active");
      }
    };
    pageIndex();

    // =================================================================scroll================================================================
    const elBtn = document.querySelector(".btn");

    if (localStorage.page != 0) {
      elHeader.classList.add("active");
      elH1.setAttribute("src", `./img/img_logo_white.png`);
    }
    window.addEventListener("scroll", () => {
      // console.log(window.pageYOffset);

      if (window.pageYOffset >= 100 || localStorage.page != 0) {
        elBtn.classList.add("active");
        elHeader.classList.add("active");
        elH1.setAttribute("src", `./img/img_logo_white.png`);
      } else {
        elBtn.classList.remove("active");
        elHeader.classList.remove("active");
        elH1.setAttribute("src", `./img/img_logo_black.png`);
      }
    });
  }
});
