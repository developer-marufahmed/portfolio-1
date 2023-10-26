// Header Scroll
let nav = document.querySelector(".navbar");
let topBtn = document.querySelector(".topBtn");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    nav.classList.add("header-scrolled");
    // Top button scroll 
    topBtn.classList.add("topBtnShow");
  }
  else {
    nav.classList.remove("header-scrolled");
    // Top button scroll 
    topBtn.classList.remove("topBtnShow");
  }
};


// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".custom-collapse.offcanvas");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  })
});


// Testimonial Swiper js Start
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
