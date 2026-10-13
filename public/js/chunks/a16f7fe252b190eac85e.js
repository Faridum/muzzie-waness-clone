(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=template&id=5fd7fcfe&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=template&id=5fd7fcfe&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "quotes-page"
  }, [_c("section", {
    staticClass: "quotes-slider",
    attrs: {
      "aria-label": _vm.$t("Quotes")
    }
  }, [_c("div", {
    staticClass: "quotes-slider__frame"
  }, [_c("transition", {
    attrs: {
      name: "quotes-slide-fade",
      mode: "out-in"
    }
  }, [_c("img", {
    key: _vm.currentSlide.src,
    staticClass: "quotes-slider__image",
    attrs: {
      src: _vm.currentSlide.src,
      alt: _vm.$t("Quotes") + " " + (_vm.currentIndex + 1)
    }
  })]), _vm._v(" "), _c("button", {
    staticClass: "quotes-slider__arrow quotes-slider__arrow--previous",
    attrs: {
      type: "button",
      "aria-label": _vm.$t("Previous")
    },
    on: {
      click: _vm.showPrevious
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("❮")])]), _vm._v(" "), _c("button", {
    staticClass: "quotes-slider__arrow quotes-slider__arrow--next",
    attrs: {
      type: "button",
      "aria-label": _vm.$t("Next")
    },
    on: {
      click: _vm.showNext
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("❯")])]), _vm._v(" "), _c("div", {
    staticClass: "quotes-slider__controls"
  }, [_c("button", {
    staticClass: "quotes-slider__play",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.toggleAutoplay
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.$t(_vm.isPlaying ? "Pause" : "Play")))]), _vm._v(" "), _c("span", {
    staticClass: "quotes-slider__play-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v(_vm._s(_vm.isPlaying ? "Ⅱ" : "▶"))])]), _vm._v(" "), _c("div", {
    staticClass: "quotes-slider__timeline",
    attrs: {
      "aria-label": _vm.$t("Choose image")
    }
  }, _vm._l(_vm.slides, function (slide, index) {
    return _c("button", {
      key: slide.src,
      staticClass: "quotes-slider__segment",
      "class": {
        "quotes-slider__segment--active": index === _vm.currentIndex
      },
      attrs: {
        type: "button",
        "aria-label": _vm.$t("Go to image") + " " + (index + 1),
        "aria-current": index === _vm.currentIndex ? "true" : null
      },
      on: {
        click: function click($event) {
          return _vm.showSlide(index);
        }
      }
    });
  }), 0)])], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Quotes",
  data: function data() {
    return {
      currentIndex: 0,
      autoplayTimer: null,
      isPlaying: true,
      slides: ["1012428248waness-quotes-4-02.jpg", "1148303686waness-quotes-5-02.jpg", "1486679655w10.jpg", "2031855359waness-quotes-3-02.jpg", "55064247waness-quotes-6-02.jpg", "744894262w24.jpg", "83410540waness-quotes-7-02.jpg"].map(function (filename) {
        return {
          src: "/images/quotes/" + filename
        };
      })
    };
  },
  computed: {
    currentSlide: function currentSlide() {
      return this.slides[this.currentIndex];
    }
  },
  mounted: function mounted() {
    this.startAutoplay();
  },
  beforeDestroy: function beforeDestroy() {
    window.clearInterval(this.autoplayTimer);
  },
  methods: {
    showSlide: function showSlide(index) {
      this.currentIndex = index;
    },
    startAutoplay: function startAutoplay() {
      window.clearInterval(this.autoplayTimer);
      this.isPlaying = true;
      this.autoplayTimer = window.setInterval(this.showNext, 5000);
    },
    toggleAutoplay: function toggleAutoplay() {
      if (this.isPlaying) {
        window.clearInterval(this.autoplayTimer);
        this.autoplayTimer = null;
        this.isPlaying = false;
        return;
      }
      this.startAutoplay();
    },
    showPrevious: function showPrevious() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    showNext: function showNext() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=style&index=0&id=5fd7fcfe&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=style&index=0&id=5fd7fcfe&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.quotes-page[data-v-5fd7fcfe] {\n    display: flex;\n    min-height: calc(100vh - 64px);\n    align-items: center;\n    justify-content: center;\n    background: #fcffe7;\n    padding-bottom: 7.5em;\n}\n.quotes-slider[data-v-5fd7fcfe] {\n    width: calc(100% - 2rem);\n    max-width: 1332px;\n    margin: 0 auto 3rem;\n}\n.quotes-slider__frame[data-v-5fd7fcfe] {\n    position: relative;\n    width: 100%;\n    aspect-ratio: 2.22 / 1;\n    max-height: 72vh;\n    min-height: 300px;\n    overflow: hidden;\n    background: #ed4260;\n}\n.quotes-slider__image[data-v-5fd7fcfe] {\n    position: absolute;\n    inset: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: fill;\n       object-fit: fill;\n}\n.quotes-slider__arrow[data-v-5fd7fcfe] {\n    position: absolute;\n    top: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 62px;\n    border: 0;\n    color: rgba(255, 255, 255, 0.55);\n    background: rgba(255, 255, 255, 0.08);\n    cursor: pointer;\n    transform: translateY(-50%);\n    transition: color 160ms ease, background-color 160ms ease;\n    font-size: 2.25rem;\n}\n.quotes-slider__arrow[data-v-5fd7fcfe]:hover {\n    color: #fff;\n    background: rgba(255, 255, 255, 0.16);\n}\n.quotes-slider__arrow[data-v-5fd7fcfe]:focus-visible,\n.quotes-slider__segment[data-v-5fd7fcfe]:focus-visible,\n.quotes-slider__play[data-v-5fd7fcfe]:focus-visible {\n    outline: 2px solid #fcffe7;\n    outline-offset: 3px;\n}\n.quotes-slider__arrow--previous[data-v-5fd7fcfe] {\n    inset-inline-start: 5.5%;\n}\n.quotes-slider__arrow--next[data-v-5fd7fcfe] {\n    inset-inline-end: 5.5%;\n}\n.quotes-slider__controls[data-v-5fd7fcfe] {\n    position: absolute;\n    left: 50%;\n    bottom: 3.5%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: min(320px, 60%);\n    transform: translateX(-50%);\n}\n.quotes-slider__play[data-v-5fd7fcfe] {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 12px;\n    min-width: 120px;\n    min-height: 42px;\n    padding: 0 20px;\n    border: 0;\n    border-radius: 999px;\n    color: #292929;\n    background: #fff;\n    cursor: pointer;\n    box-shadow: 0 4px 12px rgba(30, 28, 44, 0.2);\n    font-size: 0.95rem;\n}\n.quotes-slider__play-icon[data-v-5fd7fcfe] {\n    font-size: 0.85em;\n}\n.quotes-slider__timeline[data-v-5fd7fcfe] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: 15px;\n    margin-top: 4px;\n}\n.quotes-slider__segment[data-v-5fd7fcfe] {\n    position: relative;\n    flex: 1 1 0;\n    height: 3px;\n    padding: 0;\n    border: 0;\n    border-radius: 0;\n    background: rgba(255, 255, 255, 0.38);\n    cursor: pointer;\n}\n.quotes-slider__segment + .quotes-slider__segment[data-v-5fd7fcfe] {\n    margin-inline-start: 3px;\n}\n.quotes-slider__segment--active[data-v-5fd7fcfe] {\n    background: #fff;\n}\n.quotes-slider__segment--active[data-v-5fd7fcfe]::after {\n    position: absolute;\n    top: -5px;\n    left: 50%;\n    width: 3px;\n    height: 13px;\n    background: #fff;\n    content: \"\";\n    transform: translateX(-50%);\n}\n.quotes-slide-fade-enter-active[data-v-5fd7fcfe],\n.quotes-slide-fade-leave-active[data-v-5fd7fcfe] {\n    transition: opacity 220ms ease;\n}\n.quotes-slide-fade-enter[data-v-5fd7fcfe],\n.quotes-slide-fade-leave-to[data-v-5fd7fcfe] {\n    opacity: 0;\n}\n@media (max-width: 600px) {\n.quotes-page[data-v-5fd7fcfe] {\n        min-height: calc(100vh - 56px);\n        padding-bottom: 5rem;\n}\n.quotes-slider__frame[data-v-5fd7fcfe] {\n        aspect-ratio: 1.15 / 1;\n        min-height: 260px;\n}\n.quotes-slider__arrow[data-v-5fd7fcfe] {\n        width: 36px;\n        height: 48px;\n        font-size: 1.8rem;\n}\n.quotes-slider__controls[data-v-5fd7fcfe] {\n        bottom: 4%;\n        width: min(250px, 60%);\n}\n.quotes-slider__play[data-v-5fd7fcfe] {\n        min-width: 100px;\n        min-height: 36px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=style&index=0&id=5fd7fcfe&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=style&index=0&id=5fd7fcfe&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Quotes.vue?vue&type=style&index=0&id=5fd7fcfe&scoped=true&lang=css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=style&index=0&id=5fd7fcfe&scoped=true&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/player/pages/quotes/Quotes.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/player/pages/quotes/Quotes.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Quotes_vue_vue_type_template_id_5fd7fcfe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Quotes.vue?vue&type=template&id=5fd7fcfe&scoped=true */ "./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=template&id=5fd7fcfe&scoped=true");
/* harmony import */ var _Quotes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quotes.vue?vue&type=script&lang=js */ "./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Quotes_vue_vue_type_style_index_0_id_5fd7fcfe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quotes.vue?vue&type=style&index=0&id=5fd7fcfe&scoped=true&lang=css */ "./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=style&index=0&id=5fd7fcfe&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Quotes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Quotes_vue_vue_type_template_id_5fd7fcfe_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Quotes_vue_vue_type_template_id_5fd7fcfe_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5fd7fcfe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/player/pages/quotes/Quotes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Quotes.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=style&index=0&id=5fd7fcfe&scoped=true&lang=css":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=style&index=0&id=5fd7fcfe&scoped=true&lang=css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotes_vue_vue_type_style_index_0_id_5fd7fcfe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Quotes.vue?vue&type=style&index=0&id=5fd7fcfe&scoped=true&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=style&index=0&id=5fd7fcfe&scoped=true&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotes_vue_vue_type_style_index_0_id_5fd7fcfe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotes_vue_vue_type_style_index_0_id_5fd7fcfe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotes_vue_vue_type_style_index_0_id_5fd7fcfe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotes_vue_vue_type_style_index_0_id_5fd7fcfe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=template&id=5fd7fcfe&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=template&id=5fd7fcfe&scoped=true ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotes_vue_vue_type_template_id_5fd7fcfe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Quotes.vue?vue&type=template&id=5fd7fcfe&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/pages/quotes/Quotes.vue?vue&type=template&id=5fd7fcfe&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotes_vue_vue_type_template_id_5fd7fcfe_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotes_vue_vue_type_template_id_5fd7fcfe_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);