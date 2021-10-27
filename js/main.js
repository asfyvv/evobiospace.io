!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./src/js/main.js")}({"./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = ({\n  $window: window,\n  $document: document,\n  $html: document.documentElement,\n  $body: document.body\n});\n\n//# sourceURL=webpack:///./src/js/_vars.js?')},"./src/js/functions/resize.js":
/*!************************************!*\
  !*** ./src/js/functions/resize.js ***!
  \************************************/
/*! exports provided: resizeContent */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resizeContent\", function() { return resizeContent; });\nvar resizeContent = function resizeContent(selector) {\n  var mobileWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 576;\n  var isPlugin = arguments.length > 2 ? arguments[2] : undefined;\n  var desktopAction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n  var mobileAction = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n\n  if (!isPlugin) {\n    // actions with selector\n    if (window.innerWidth > mobileWidth) {\n      desktopAction();\n    } else {\n      mobileAction();\n    }\n  } else {\n    if (window.innerWidth <= mobileWidth && selector.dataset.pluginActivated == 'false') {\n      mobileAction();\n      selector.dataset.pluginActivated = 'true';\n    }\n\n    if (window.innerWidth > mobileWidth) {\n      desktopAction();\n      selector.dataset.pluginActivated = 'false';\n    }\n  }\n}; // plugin selector must have data-plugin-activated attribute\n\n/*\nconst slider = document.querySelector('.swiper-container');\n\nlet mySwiper;\n\nfunction sliderMobile() {\n\tmySwiper = new Swiper(slider, {\n\t\tspeed: 400,\n\t\tspaceBetween: 100\n\t});\n}\n\nfunction disableSlider() {\n\tif (slider.classList.contains('swiper-container-initialized')) {\n\t\tmySwiper.destroy();\n\t}\n}\n\nresizeContent(slider, 768, true, disableSlider, sliderMobile);\n\nwindow.addEventListener('resize', () => {\n\tresizeContent(slider, 768, true, disableSlider, sliderMobile);\n});\n\n*/\n\n//# sourceURL=webpack:///./src/js/functions/resize.js?")},"./src/js/functions/smooth-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/smooth-scroll.js ***!
  \*******************************************/
/*! exports provided: scrollTo */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollTo\", function() { return scrollTo; });\nvar scrollTo = function scrollTo(element) {\n  window.scroll({\n    behavior: 'smooth',\n    left: 0,\n    top: element.offsetTop // - document.querySelector('.nav').clientHeight,\n\n  });\n}; // usage\n// anchors.forEach((el) => {\n// \tel.addEventListener('click', (e) => {\n// \t\te.preventDefault();\n// \t\tlet id = e.currentTarget.getAttribute('href');\n// \t\tscrollTo(document.querySelector(id))\n// \t});\n// });\n\n//# sourceURL=webpack:///./src/js/functions/smooth-scroll.js?")},"./src/js/functions/stop-scroll.js":
/*!*****************************************!*\
  !*** ./src/js/functions/stop-scroll.js ***!
  \*****************************************/
/*! exports provided: disableScroll, enableScroll */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disableScroll\", function() { return disableScroll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enableScroll\", function() { return enableScroll; });\nvar disableScroll = function disableScroll(fix) {\n  var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';\n  document.body.style.paddingRight = paddingOffset;\n  fix.forEach(function (el) {\n    el.style.paddingRight = paddingOffset;\n  });\n  var pagePosition = window.scrollY;\n  document.body.classList.add('disable-scroll');\n  document.body.dataset.position = pagePosition;\n  document.body.style.top = -pagePosition + 'px';\n};\nvar enableScroll = function enableScroll(fix) {\n  var pagePosition = parseInt(document.body.dataset.position, 10);\n  document.body.style.top = 'auto';\n  document.body.classList.remove('disable-scroll');\n  fix.forEach(function (el) {\n    el.style.paddingRight = '0px';\n  });\n  body.style.paddingRight = '0px';\n  window.scroll({\n    top: pagePosition,\n    left: 0\n  });\n  document.body.removeAttribute('data-position');\n};\n\n//# sourceURL=webpack:///./src/js/functions/stop-scroll.js?")},"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendor_focus_visible_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.min.js */ "./src/js/vendor/focus-visible.min.js");\n/* harmony import */ var _vendor_focus_visible_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_min_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");\n/* harmony import */ var _functions_resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/resize */ "./src/js/functions/resize.js");\n/* harmony import */ var _functions_smooth_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/smooth-scroll */ "./src/js/functions/smooth-scroll.js");\n/* harmony import */ var _functions_stop_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/stop-scroll */ "./src/js/functions/stop-scroll.js");\n\n\n\n\n\n\n\ndocument.addEventListener("DOMContentLoaded", function () {\n  var isMobile = {\n    Android: function Android() {\n      return navigator.userAgent.match(/Android/i);\n    },\n    BlackBerry: function BlackBerry() {\n      return navigator.userAgent.match(/BlackBerry/i);\n    },\n    iOS: function iOS() {\n      return navigator.userAgent.match(/iPhone|iPad|iPod/i);\n    },\n    Opera: function Opera() {\n      return navigator.userAgent.match(/Opera Mini/i);\n    },\n    Windows: function Windows() {\n      return navigator.userAgent.match(/IEMobile/i);\n    },\n    any: function any() {\n      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();\n    }\n  };\n\n  if (isMobile.any()) {\n    document.body.classList.add("_touch");\n    var menuArrows = document.querySelectorAll(\'.menu__arrow\');\n\n    if (menuArrows.length > 0) {\n      var _loop = function _loop(index) {\n        var menuArrow = menuArrows[index];\n        menuArrow.addEventListener("click", function (e) {\n          menuArrow.parentElement.classList.toggle(\'_active\');\n        });\n      };\n\n      for (var index = 0; index < menuArrows.length; index++) {\n        _loop(index);\n      }\n    }\n  } else {\n    document.body.classList.add("_pc");\n  }\n\n  var iconMenu = document.querySelector(\'.menu__icon\');\n  var menuBody = document.querySelector(\'.menu__body\');\n\n  if (iconMenu) {\n    iconMenu.addEventListener("click", function (e) {\n      document.body.classList.toggle(\'lock\');\n      iconMenu.classList.toggle(\'_active\');\n      menuBody.classList.toggle(\'_active\');\n    });\n  }\n\n  var menuLinks = document.querySelectorAll(\'.menu__link[data-goto]\');\n\n  if (menuLinks.length > 0) {\n    menuLinks.forEach(function (menuLink) {\n      menuLink.addEventListener("click", onMenuLinkClick);\n    });\n  }\n\n  function onMenuLinkClick(e) {\n    var menuLink = e.target;\n\n    if (menuLink.dataset["goto"] && document.querySelector(menuLink.dataset["goto"])) {\n      var gotoBlock = document.querySelector(menuLink.dataset["goto"]);\n      var gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(\'header\').offsetHeight;\n\n      if (iconMenu.classList.contains(\'_active\')) {\n        document.body.classList.remove(\'lock\');\n        iconMenu.classList.remove(\'_active\');\n        menuBody.classList.remove(\'_active\');\n      }\n\n      window.scrollTo({\n        top: gotoBlockValue,\n        behavior: "smooth"\n      });\n      e.preventDefault();\n    }\n  } // Переключение слайдов по таймеру\n\n\n  var mainSlide = document.querySelectorAll(".slider__slide");\n\n  if (mainSlide.length > 0) {\n    var slideSwitch = function slideSwitch() {\n      var activeSlide = 0;\n\n      for (var _index = 0; _index < mainSlide.length; ++_index) {\n        if (mainSlide[_index].classList.contains("active") === true) activeSlide = _index;\n      }\n\n      mainSlide[activeSlide].classList.remove("active");\n\n      if (activeSlide + 1 < mainSlide.length) {\n        mainSlide[activeSlide + 1].classList.add("active");\n      } else mainSlide[0].classList.add("active");\n    };\n\n    var timerId = setInterval(function () {\n      return slideSwitch();\n    }, 4000);\n  }\n  /* begin Scroll Down Button */\n\n\n  (function () {\n    "use strict";\n\n    var btnScrollDown = document.querySelector("#scroll_down");\n\n    if (btnScrollDown !== null) {\n      var scrollDown = function scrollDown() {\n        var windowCoords = document.documentElement.clientHeight;\n\n        (function scroll() {\n          if (window.pageYOffset < windowCoords) {\n            window.scrollBy(0, 10);\n            setTimeout(scroll, 0);\n          }\n\n          if (window.pageYOffset > windowCoords) {\n            window.scrollTo(0, windowCoords);\n          }\n        })();\n      };\n\n      btnScrollDown.addEventListener("click", scrollDown);\n    }\n  })();\n  /* end Scroll Down Button */\n  // плавное затемнение меню\n\n\n  var pageTwo = document.getElementById("screen2");\n\n  if (pageTwo !== null) {\n    var pageTwoPos = document.getElementById("screen2").offsetTop,\n        headerOpacity = document.querySelector(".header");\n    window.addEventListener("scroll", function (e) {\n      var op = window.scrollY / pageTwoPos;\n      if (op > 1) op = 1;\n      op = Math.round(op * 255);\n      headerOpacity.style.backgroundColor = "#111111" + ("00" + op.toString(16)).slice(-2);\n    });\n  }\n}); // const navLine = document.querySelector(".menu_line"),\n// \tnavItem = document.querySelectorAll(".menu--list__item"),\n// \tmenuLink = document.querySelectorAll("menu--list__link"),\n// \tanchors = document.querySelectorAll("a.scroll-to"),\n// \tnavBurger = document.querySelector(".burger"),\n// \tnavMenu = document.querySelector(".menu--list"),\n// \tbodyLock = document.querySelector("body");\n// navItem.forEach((el) => {\n// \tel.addEventListener("click", (e) => {\n// \t\tnavBurger.classList.toggle("active");\n// \t\tnavMenu.classList.toggle("active");\n// \t\tbodyLock.classList.toggle("lock");\n// \t});\n// });\n// navBurger.addEventListener("click", (e) => {\n// \tnavBurger.classList.toggle("active");\n// \tnavMenu.classList.toggle("active");\n// \tbodyLock.classList.toggle("lock");\n// });\n// for (let anchor of anchors) {\n// \tanchor.addEventListener("click", function (e) {\n// \t\te.preventDefault();\n// \t\tconst blockID = anchor.getAttribute("href");\n// \t\tdocument.querySelector(blockID).scrollIntoView({\n// \t\t\tbehavior: "smooth",\n// \t\t\tblock: "start",\n// \t\t});\n// \t});\n// }\n// window.addEventListener("scroll", () => {\n// \tlet scrollDistance = window.scrollY;\n// console.log(scrollDistance);\n// \tdocument.querySelectorAll(".section").forEach((el, i) => {\n// \t\tif (\n// \t\t\tel.offsetTop - document.querySelector(".header__menu").clientHeight <=\n// \t\t\tscrollDistance\n// \t\t) {\n// \t\t\tdocument.querySelectorAll(".menu--list__link").forEach((el) => {\n// \t\t\t\tif (el.classList.contains("active")) {\n// \t\t\t\t\tel.classList.remove("active");\n// \t\t\t\t}\n// \t\t\t});\n// \t\t\tdocument\n// \t\t\t\t.querySelectorAll(".header__menu li")\n// \t\t\t\t[i].querySelector("a")\n// \t\t\t\t.classList.add("active");\n// \t\t}\n// \t});\n// });\n\n//# sourceURL=webpack:///./src/js/main.js?')},"./src/js/vendor/focus-visible.min.js":
/*!********************************************!*\
  !*** ./src/js/vendor/focus-visible.min.js ***!
  \********************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\n!function (e, t) {\n  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === \'function\' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(0, function () {\n  "use strict";\n\n  function e(e) {\n    var t = !0,\n        n = !1,\n        o = null,\n        d = {\n      text: !0,\n      search: !0,\n      url: !0,\n      tel: !0,\n      email: !0,\n      password: !0,\n      number: !0,\n      date: !0,\n      month: !0,\n      week: !0,\n      time: !0,\n      datetime: !0,\n      "datetime-local": !0\n    };\n\n    function i(e) {\n      return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList);\n    }\n\n    function s(e) {\n      e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""));\n    }\n\n    function u(e) {\n      t = !1;\n    }\n\n    function a() {\n      document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c);\n    }\n\n    function c(e) {\n      e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c));\n    }\n\n    document.addEventListener("keydown", function (n) {\n      n.metaKey || n.altKey || n.ctrlKey || (i(e.activeElement) && s(e.activeElement), t = !0);\n    }, !0), document.addEventListener("mousedown", u, !0), document.addEventListener("pointerdown", u, !0), document.addEventListener("touchstart", u, !0), document.addEventListener("visibilitychange", function (e) {\n      "hidden" === document.visibilityState && (n && (t = !0), a());\n    }, !0), a(), e.addEventListener("focus", function (e) {\n      var n, o, u;\n      i(e.target) && (t || (n = e.target, o = n.type, "INPUT" === (u = n.tagName) && d[o] && !n.readOnly || "TEXTAREA" === u && !n.readOnly || n.isContentEditable)) && s(e.target);\n    }, !0), e.addEventListener("blur", function (e) {\n      var t;\n      i(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (n = !0, window.clearTimeout(o), o = window.setTimeout(function () {\n        n = !1;\n      }, 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")));\n    }, !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""));\n  }\n\n  if ("undefined" != typeof window && "undefined" != typeof document) {\n    var t;\n    window.applyFocusVisiblePolyfill = e;\n\n    try {\n      t = new CustomEvent("focus-visible-polyfill-ready");\n    } catch (e) {\n      (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {});\n    }\n\n    window.dispatchEvent(t);\n  }\n\n  "undefined" != typeof document && e(document);\n});\n\n//# sourceURL=webpack:///./src/js/vendor/focus-visible.min.js?')}});
//# sourceMappingURL=main.js.map
