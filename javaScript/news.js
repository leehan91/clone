const elH2 = document.querySelector("article > h2");
const elSpan = document.querySelector("article > span");
const elLi = document.querySelectorAll(".main_list > li");
const more = document.querySelector(".more > a");

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

    let idx = 0,
      clic = 1;

    subNav.forEach((el, k) => {
      subNav[k].addEventListener("click", () => {
        subNav[idx].classList.remove("active");

        subNav[k].classList.add("active");
        idx = k;

        clic=1;
        news(el.textContent);
      });
    });

    function news(str) {
      let newsLi = [],
        newLi='';

      data.news.forEach(function (obj) {
        if (obj.classify == str || str == "전체") {
          newsLi.push(`<li>
        <article class="text">
        <span>${obj.classify}</span>
        <h3>
        ${obj.title}
        </h3>
        <p>${obj.date}</p>
        </article>
        <div><img src="${obj.thumbnail}" alt="thumbnail" /></div>
        </li>
        `);
        }
      });

      for (let i = 0; i < newsLi.length; i++) {
        if (i < 10 * clic) {
          newLi += newsLi[i];
        }
      }
      elList.innerHTML = newLi;
      more.onclick = () => {
        clic++;
        news(str);
      };
    }
    news("전체");
  });
