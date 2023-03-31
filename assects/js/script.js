let navList = document.querySelectorAll(".nav-link");
let pageArticle = document.querySelectorAll(".page-article");

let filterList = document.querySelectorAll(".filter-link");
let projectList = document.querySelectorAll(".project-item");

for (let i = 0; i < navList.length; i++) {
  navList[i].addEventListener("click", function () {
    for (let j = 0; j < navList.length; j++) {
      navList[j].classList.remove("active");
    }
    this.classList.add("active");

    let navDataFilter = this.getAttribute("nav-data-filter");

    for (let k = 0; k < pageArticle.length; k++) {
      pageArticle[k].classList.add("hide");

      if (pageArticle[k].getAttribute("nav-data-filter") == navDataFilter) {
        pageArticle[k].classList.remove("hide");
      }
    }
  });
}

for (let i = 0; i < filterList.length; i++) {
  filterList[i].addEventListener("click", function () {
    for (let j = 0; j < filterList.length; j++) {
      filterList[j].classList.remove("active");
    }
    this.classList.add("active");

    let projectDataFilter = this.getAttribute("project-data-filter");
    // console.log(projectDataFilter);

    for (let k = 0; k < projectList.length; k++) {
      projectList[k].classList.add("hide");

      if (
        projectList[k].getAttribute("project-data-filter") ==
          projectDataFilter ||
        projectDataFilter == "all"
      ) {
        projectList[k].classList.remove("hide");
      }
    }
  });
}




const form = document.querySelector(".form");
const formInputs = document.querySelectorAll("[data-form-input]")
const formBtn = document.querySelector(".form-btn");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

let sideBar = document.querySelector(".sidebar");
let moreBtn = document.querySelector(".more-info-btn");

moreBtn.addEventListener("click", function () {
  sideBar.classList.toggle("active")
})