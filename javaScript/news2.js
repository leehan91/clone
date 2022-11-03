// article > h2, article > span, main-list>li

const elH2 = document.querySelector("article > h2");
const elSpan = document.querySelector("article > span");
const elLi = document.querySelectorAll(".main_list > li");

let delay = setTimeout(() => {
  elH2.classList.add("appear");
  elSpan.classList.add("appear");

  elLi.forEach((ele, k) => {
    elLi[k].classList.add("appear");
  });
}, 50);

fetch("./news.json")
  .then((str) => str.json())
  .then((data) => {
    const elList = document.querySelector(".list");
    const subNav = document.querySelectorAll(".sub_nav > a");

    let idx = 0;
    subNav.forEach((el, k) => {
      subNav[k].addEventListener("click", () => {
        subNav[idx].classList.remove("active");

        subNav[k].classList.add("active");
        idx = k;

        news(el.textContent);
      });
    });

    function news(str) {
      let newsLi = "";
      data.news.forEach(function (obj) {
        if (obj.classify == str || str == "전체") {
          newsLi += `<li>
          <article class="text">
          <span>${obj.classify}</span>
          <h3>
          ${obj.title}
          </h3>
          <p>${obj.date}</p>
          </article>
          <div><img src="${obj.thumbnail}" alt="thumbnail" /></div>
          </li>
          `;
        }
      });
      elList.innerHTML = newsLi;
    }
    news("전체");

    // bnews = data.filter(function (obj) {
    //   return obj.classify === "사업소식";
    // });
    // report = data.filter(function (obj) {
    //   return obj.classify === "사업보고";
    // });
    if (subNav[1].className == "active") {
        notice = data.news.filter(function (obj) {
          let a='';
          if (obj.classify == "공지사항") {
            a = `<li>
                  <article class="text">
                  <span>${obj.classify}</span>
                  <h3>${obj.title}</h3>
                  <p>${obj.date}</p>
                  </article>
                  <div><img src="${obj.thumbnail}" alt="thumbnail" /></div>
                  </li>`;
          }
          return a;
        });
        elList.innerHTML = notice;
      }
      console.log(subNav[0].classList);

    // } else if (subNav[2] == "active") {
    //   elList.innerHTML = buNews;
    // } else if (subNav[3] == "active") {
    //   elList.innerHTML = report;
    // } else {

    // }
  });
