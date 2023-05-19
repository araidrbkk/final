import "@babel/polyfill";
import "./index.html";
import "./index.scss";

const swiperBrands = document.querySelector(".swiper-brands");
const swiperRepair = document.querySelector(".swiper-repair");
const swiperPrices = document.querySelector(".swiper-prices");

let mySwiperBrands;
let mySwiperRepair;
let mySwiperPrices;

function mobileSliderBrands() {
  if (window.innerWidth <= 767 && swiperBrands.dataset.mobile === "false") {
    mySwiperBrands = new Swiper(swiperBrands, {
      wrapperClass: "swiper-wrapper_brands",
      slideClass: "swiper-slide_brands",
      spaceBetween: 16,

      pagination: {
        el: ".pag-brands",
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1.25,
        },
        480: {
          slidesPerView: 2.1,
        },
        660: {
          slidesPerView: 3.1,
        },
      },
    });
    swiperBrands.dataset.mobile = "true";
  }

  if (window.innerWidth >= 767) {
    swiperBrands.dataset.mobile = "false";
    if (swiperBrands.classList.contains("swiper-initialized")) {
      mySwiperBrands.destroy();
    }
  }
}

function mobileSliderRepair() {
  if (window.innerWidth <= 767 && swiperRepair.dataset.mobile === "false") {
    mySwiperRepair = new Swiper(swiperRepair, {
      wrapperClass: "swiper-wrapper_repair",
      slideClass: "swiper-slide_repair",
      spaceBetween: 16,

      pagination: {
        el: ".pag-repair",
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1.25,
        },
        480: {
          slidesPerView: 2.1,
        },
        660: {
          slidesPerView: 3.1,
        },
      },
    });
    swiperRepair.dataset.mobile = "true";
  }

  if (window.innerWidth >= 767) {
    swiperRepair.dataset.mobile = "false";
    if (swiperRepair.classList.contains("swiper-initialized")) {
      mySwiperRepair.destroy();
    }
  }
}

function mobileSliderPrices() {
  if (window.innerWidth <= 767 && swiperPrices.dataset.mobile === "false") {
    mySwiperPrices = new Swiper(swiperPrices, {
      wrapperClass: "swiper-wrapper_prices",
      slideClass: "swiper-slide_prices",
      spaceBetween: 16,

      pagination: {
        el: ".pag-prices",
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1.1,
        },
        580: {
          slidesPerView: 2.1,
        },
      },
    });
    swiperPrices.dataset.mobile = "true";
  }

  if (window.innerWidth >= 767) {
    swiperPrices.dataset.mobile = "false";
    if (swiperPrices.classList.contains("swiper-initialized")) {
      mySwiperPrices.destroy();
    }
  }
}

window.addEventListener("resize", () => {
  mobileSliderBrands();
  mobileSliderRepair();
  mobileSliderPrices();
});

mobileSliderBrands;
mobileSliderRepair;
mobileSliderPrices;

const btnSwiperBrands = document.querySelector(".swp-brands__btn");
const imgSwiperBrands = document.querySelector(".btn__img-brands");
const wrapperSwiperBrands = document.querySelector(".swiper-wrapper_brands");

btnSwiperBrands.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (wrapperSwiperBrands.classList.contains("over")) {
    wrapperSwiperBrands.classList.remove("over");
    document.querySelector(".btn__text-brands").textContent = "Показать все";
    imgSwiperBrands.classList.remove("arrows_rotate");
    imgSwiperBrands.classList.add("arrows_reverse");
  } else {
    wrapperSwiperBrands.classList.add("over");
    document.querySelector(".btn__text-brands").textContent = "Скрыть";
    imgSwiperBrands.classList.add("arrows_rotate");
    imgSwiperBrands.classList.remove("arrows_reverse");
  }
});


const btnSwiperRepair = document.querySelector(".swp-repair__btn");
const imgSwiperRepair = document.querySelector(".btn__img-repair");
const wrapperSwiperRepair = document.querySelector(".swiper-wrapper_repair");

btnSwiperRepair.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (wrapperSwiperRepair.classList.contains("over")) {
    wrapperSwiperRepair.classList.remove("over");
    document.querySelector(".btn__text-repair").textContent = "Показать все";
    imgSwiperRepair.classList.remove("arrows_rotate");
    imgSwiperRepair.classList.add("arrows_reverse");
  } else {
    wrapperSwiperRepair.classList.add("over");
    document.querySelector(".btn__text-repair").textContent = "Скрыть";
    imgSwiperRepair.classList.add("arrows_rotate");
    imgSwiperRepair.classList.remove("arrows_reverse");
  }
});

const burgerBtn = document.querySelector(".burger-btn");
const asideMenu = document.querySelector(".aside-menu");
const burgerX = document.querySelector(".burgerX");
const blurOver = document.querySelector(".blur");
const body = document.querySelector(".body");

blurOver.addEventListener("click", () => {
  body.style.overflow = "visible";
});

burgerBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  blurOver.style.zIndex = 11;
  if (asideMenu.classList.contains("open-aside")) {
    asideMenu.classList.remove("open-aside");
    asideMenu.classList.add("aside");
    body.style.overflow = "visible";
  } else {
    asideMenu.classList.add("open-aside");
    burgerX.style.display = "block";
    asideMenu.classList.remove("aside");
    body.style.overflow = "hidden";
  }
});

burgerX.addEventListener("click", function (evt) {
  evt.preventDefault();
  blurOver.style.zIndex = -1;
  if (asideMenu.classList.contains("open-aside")) {
    body.style.overflow = "visible";
    asideMenu.classList.remove("open-aside");
    asideMenu.classList.add("aside");
  } else {
    asideMenu.classList.add("open-aside");
    burgerX.style.display = "block";
    asideMenu.classList.remove("aside");
  }
});

const feedBackBtn = document.querySelector(".data__feedback");
const burgerCloseBtn = document.querySelector(".burger-close");
const asideFeedBack = document.querySelector(".aside-feedback");

feedBackBtn.addEventListener("click", function () {
  if (asideFeedBack.classList.contains("aside-feedback--open")) {
    asideFeedBack.classList.remove("aside-feedback--open");
  } else {
    asideFeedBack.classList.add("aside-feedback--open");
    blurOver.style.zIndex = 111;
  }
});

burgerCloseBtn.addEventListener("click", function () {
  if (asideFeedBack.classList.contains("aside-feedback--open")) {
    asideFeedBack.classList.remove("aside-feedback--open");
    blurOver.style.zIndex = -1;
  } else if (asideFeedBack.classList.contains("aside-feedback--open")) {
    asideFeedBack.classList.remove("aside-feedback--open");
  }
});

const burgerCallClose = document.querySelector(".burger-call-close");
const callBackBtn = document.querySelector(".data__callback");
const asideCallBack = document.querySelector(".aside-callback");

callBackBtn.addEventListener("click", function () {
  if (asideCallBack.classList.contains("aside-callback--open")) {
    asideCallBack.classList.remove("aside-callback--open");
  } else {
    asideCallBack.classList.add("aside-callback--open");
    blurOver.style.zIndex = 111;
  }
});

burgerCallClose.addEventListener("click", function () {
  if (asideCallBack.classList.contains("aside-callback--open")) {
    asideCallBack.classList.remove("aside-callback--open");
    blurOver.style.zIndex = -1;
  } else if (asideCallBack.classList.contains("aside-callback--open")) {
    asideCallBack.classList.remove("aside-callback--open");
  }
});

document.addEventListener("keydown", function (evt) {
  evt.preventDefault;
  if (evt.key === "Escape") {
    blurOver.style.zIndex = -1;
    asideMenu.classList.remove("open-aside");
    asideMenu.classList.add("aside");
    asideFeedBack.classList.remove("aside-feedback--open");
    asideCallBack.classList.remove("aside-callback--open");
    body.style.overflow = "visible";
  }
});

blurOver.addEventListener("click", function () {
  blurOver.style.zIndex = -1;
  asideMenu.classList.remove("open-aside");
  asideMenu.classList.add("aside");
  asideFeedBack.classList.remove("aside-feedback--open");
  asideCallBack.classList.remove("aside-callback--open");
});

const readBtn = document.querySelector(".read__btn");
const readBtnText = document.querySelector(".btn__read-text");
const readBtnImg = document.querySelector(".btn__open-img");
const readText = document.querySelector(".read__text");

readBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (readBtnImg.classList.contains("arrows_reverse")) {
    readBtnImg.classList.remove("arrows_reverse");
    readBtnText.textContent = "Скрыть все";
    readBtnImg.classList.add("arrows_rotate");
    readText.classList.add("read__more");
  } else {
    readBtnImg.classList.add("arrows_reverse");
    readBtnText.textContent = "Читать далее";
    readBtnImg.classList.remove("arrows_rotate");
    readText.classList.remove("read__more");
  }
});

if (window.innerWidth >= 1439) {
  asideMenu.classList.remove("open-aside");
  asideMenu.classList.add("aside");
  blurOver.style.zIndex = -1;
}
