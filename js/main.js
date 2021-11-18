!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s="./src/js/main.js")}({"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval(' // import "./vendor/focus-visible.min.js";\n// import "./_vars";\n// import { resizeContent } from "./functions/resize";\n// import { scrollTo } from "./functions/smooth-scroll";\n// import { disableScroll, enableScroll } from "./functions/stop-scroll";\n\ndocument.addEventListener("DOMContentLoaded", function () {\n  var isMobile = {\n    Android: function Android() {\n      return navigator.userAgent.match(/Android/i);\n    },\n    BlackBerry: function BlackBerry() {\n      return navigator.userAgent.match(/BlackBerry/i);\n    },\n    iOS: function iOS() {\n      return navigator.userAgent.match(/iPhone|iPad|iPod/i);\n    },\n    Opera: function Opera() {\n      return navigator.userAgent.match(/Opera Mini/i);\n    },\n    Windows: function Windows() {\n      return navigator.userAgent.match(/IEMobile/i);\n    },\n    any: function any() {\n      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();\n    }\n  };\n\n  if (isMobile.any()) {\n    document.body.classList.add("_touch");\n    var menuArrows = document.querySelectorAll(\'.menu__arrow\');\n\n    if (menuArrows.length > 0) {\n      var _loop = function _loop(index) {\n        var menuArrow = menuArrows[index];\n        menuArrow.addEventListener("click", function (e) {\n          menuArrow.parentElement.classList.toggle(\'_active\');\n        });\n      };\n\n      for (var index = 0; index < menuArrows.length; index++) {\n        _loop(index);\n      }\n    }\n  } else {\n    document.body.classList.add("_pc");\n  }\n\n  var commentsSwiper = new Swiper(\'.swiper\', {\n    loop: true,\n    slidesPerView: 1,\n    grabCursor: true,\n    pagination: {\n      el: \'.swiper-pagination\',\n      clickable: true // dynamicBullets: true,\n\n    },\n    navigation: {\n      nextEl: \'.swiper-button-next\',\n      prevEl: \'.swiper-button-prev\'\n    },\n    effect: \'fade\',\n    fadeEffect: {\n      crossFade: true\n    }\n  });\n  var youtubeLinks = document.querySelectorAll(\'.js-modal-btn\'); // console.log(youtubeLinks.length);\n\n  if (youtubeLinks.length > 0) {\n    var youtubeModal = new ModalVideo(".js-modal-btn", {\n      youtube: {\n        controls: 1,\n        nocookie: true,\n        loop: 0\n      }\n    });\n  }\n\n  var iconMenu = document.querySelector(\'.menu__icon\');\n  var menuBody = document.querySelector(\'.menu__body\');\n\n  if (iconMenu) {\n    iconMenu.addEventListener("click", function (e) {\n      document.body.classList.toggle(\'lock\');\n      iconMenu.classList.toggle(\'_active\');\n      menuBody.classList.toggle(\'_active\');\n    });\n  }\n\n  var menuLinks = document.querySelectorAll(\'.menu__link[data-goto]\');\n\n  if (menuLinks.length > 0) {\n    menuLinks.forEach(function (menuLink) {\n      menuLink.addEventListener("click", onMenuLinkClick);\n    });\n  }\n\n  var menuSubLinks = document.querySelectorAll(\'.menu__sub-link[data-goto]\');\n\n  if (menuSubLinks.length > 0) {\n    menuSubLinks.forEach(function (menuSubLink) {\n      menuSubLink.addEventListener("click", onMenuSubLinkClick);\n    });\n  }\n\n  function onMenuSubLinkClick(e) {\n    var menuSubLink = e.target;\n\n    if (menuSubLink.dataset["goto"] && document.querySelector(menuSubLink.dataset["goto"])) {\n      var gotoBlock = document.querySelector(menuSubLink.dataset["goto"]);\n      var gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(\'header\').offsetHeight;\n\n      if (iconMenu.classList.contains(\'_active\')) {\n        document.body.classList.remove(\'lock\');\n        iconMenu.classList.remove(\'_active\');\n        menuBody.classList.remove(\'_active\');\n      }\n\n      window.scrollTo({\n        top: gotoBlockValue,\n        behavior: "smooth"\n      });\n      e.preventDefault();\n    }\n  }\n\n  function onMenuLinkClick(e) {\n    var menuLink = e.target;\n\n    if (menuLink.dataset["goto"] && document.querySelector(menuLink.dataset["goto"])) {\n      var gotoBlock = document.querySelector(menuLink.dataset["goto"]);\n      var gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector(\'header\').offsetHeight;\n      console.log(gotoBlockValue);\n\n      if (iconMenu.classList.contains(\'_active\')) {\n        document.body.classList.remove(\'lock\');\n        iconMenu.classList.remove(\'_active\');\n        menuBody.classList.remove(\'_active\');\n      }\n\n      window.scrollTo({\n        top: gotoBlockValue,\n        behavior: "smooth"\n      });\n      e.preventDefault();\n    }\n  } // Переключение слайдов по таймеру\n\n\n  var mainSlide = document.querySelectorAll(".slider__slide");\n\n  if (mainSlide.length > 0) {\n    var slideSwitch = function slideSwitch() {\n      var activeSlide = 0;\n\n      for (var _index = 0; _index < mainSlide.length; ++_index) {\n        if (mainSlide[_index].classList.contains("active") === true) activeSlide = _index;\n      }\n\n      mainSlide[activeSlide].classList.remove("active");\n\n      if (activeSlide + 1 < mainSlide.length) {\n        mainSlide[activeSlide + 1].classList.add("active");\n      } else mainSlide[0].classList.add("active");\n    };\n\n    var timerId = setInterval(function () {\n      return slideSwitch();\n    }, 4000);\n  }\n  /* begin Scroll Down Button */\n\n\n  (function () {\n    "use strict";\n\n    var btnScrollDown = document.querySelector("#scroll_down");\n\n    if (btnScrollDown !== null) {\n      var scrollDown = function scrollDown() {\n        var windowCoords = document.documentElement.clientHeight - 70;\n        console.log(windowCoords);\n\n        (function scroll() {\n          if (window.pageYOffset < windowCoords) {\n            window.scrollBy(0, 10);\n            setTimeout(scroll, 0);\n          }\n\n          if (window.pageYOffset > windowCoords) {\n            window.scrollTo(0, windowCoords);\n          }\n        })();\n      };\n\n      btnScrollDown.addEventListener("click", scrollDown);\n    }\n  })();\n  /* end Scroll Down Button */\n  // плавное затемнение меню\n\n\n  var pageTwo = document.getElementById("screen2");\n\n  if (pageTwo !== null) {\n    var pageTwoPos = document.getElementById("screen2").offsetTop,\n        headerOpacity = document.querySelector(".header");\n    window.addEventListener("scroll", function (e) {\n      var op = window.scrollY / pageTwoPos;\n      if (op > 1) op = 1;\n      op = Math.round(op * 255);\n      headerOpacity.style.backgroundColor = "#111111" + ("00" + op.toString(16)).slice(-2);\n    });\n  }\n}); // const navLine = document.querySelector(".menu_line"),\n// \tnavItem = document.querySelectorAll(".menu--list__item"),\n// \tmenuLink = document.querySelectorAll("menu--list__link"),\n// \tanchors = document.querySelectorAll("a.scroll-to"),\n// \tnavBurger = document.querySelector(".burger"),\n// \tnavMenu = document.querySelector(".menu--list"),\n// \tbodyLock = document.querySelector("body");\n// navItem.forEach((el) => {\n// \tel.addEventListener("click", (e) => {\n// \t\tnavBurger.classList.toggle("active");\n// \t\tnavMenu.classList.toggle("active");\n// \t\tbodyLock.classList.toggle("lock");\n// \t});\n// });\n// navBurger.addEventListener("click", (e) => {\n// \tnavBurger.classList.toggle("active");\n// \tnavMenu.classList.toggle("active");\n// \tbodyLock.classList.toggle("lock");\n// });\n// for (let anchor of anchors) {\n// \tanchor.addEventListener("click", function (e) {\n// \t\te.preventDefault();\n// \t\tconst blockID = anchor.getAttribute("href");\n// \t\tdocument.querySelector(blockID).scrollIntoView({\n// \t\t\tbehavior: "smooth",\n// \t\t\tblock: "start",\n// \t\t});\n// \t});\n// }\n// window.addEventListener("scroll", () => {\n// \tlet scrollDistance = window.scrollY;\n// console.log(scrollDistance);\n// \tdocument.querySelectorAll(".section").forEach((el, i) => {\n// \t\tif (\n// \t\t\tel.offsetTop - document.querySelector(".header__menu").clientHeight <=\n// \t\t\tscrollDistance\n// \t\t) {\n// \t\t\tdocument.querySelectorAll(".menu--list__link").forEach((el) => {\n// \t\t\t\tif (el.classList.contains("active")) {\n// \t\t\t\t\tel.classList.remove("active");\n// \t\t\t\t}\n// \t\t\t});\n// \t\t\tdocument\n// \t\t\t\t.querySelectorAll(".header__menu li")\n// \t\t\t\t[i].querySelector("a")\n// \t\t\t\t.classList.add("active");\n// \t\t}\n// \t});\n// });\n\n//# sourceURL=webpack:///./src/js/main.js?')}});
//# sourceMappingURL=main.js.map
