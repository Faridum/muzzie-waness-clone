(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/chat/Chat.vue?vue&type=template&id=70667bec&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=template&id=70667bec&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-card", {
    staticClass: "chats-wrapper absolute-panel",
    attrs: {
      rounded: "lg"
    }
  }, [_c("div", {
    staticClass: "card-title-medium"
  }, [_vm._v(_vm._s(_vm.$t("Chats")))]), _vm._v(" "), !_vm.isLoading ? _c("div", {
    staticClass: "chats"
  }, [_vm.isThereASession ? _c("ul", [_vm._l(_vm.friends, function (friend) {
    return [friend.session ? _c("li", {
      key: friend.id,
      on: {
        click: function click($event) {
          return _vm.openChat(friend);
        }
      }
    }, [_c("div", {
      staticClass: "avatar"
    }, [_c("img", {
      attrs: {
        src: friend.avatar,
        alt: ""
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "infos"
    }, [_c("div", {
      staticClass: "name-unread"
    }, [_c("div", {
      staticClass: "name max-1-lines"
    }, [_vm._v(_vm._s(friend.name))]), _vm._v(" "), friend.session.unreadCount > 0 ? _c("div", {
      staticClass: "unread-messages-count"
    }, [_vm._v("\n                                " + _vm._s(friend.session.unreadCount) + "\n                            ")]) : _vm._e()]), _vm._v(" "), friend.session.last_message.length ? _c("div", {
      staticClass: "last_message",
      "class": {
        unread: friend.session.unreadCount > 0
      }
    }, [_vm._v("\n                            " + _vm._s(friend.session.last_message[0].content) + "\n                        ")]) : _vm._e()])]) : _vm._e()];
  })], 2) : _c("empty-page", {
    attrs: {
      headline: _vm.$t("No chats to show!"),
      sub: _vm.$t("Add some friends and start chatting!")
    }
  })], 1) : _c("div", {
    staticClass: "loading"
  }, [_vm._v(_vm._s(_vm.$t("Opening chat...Please wait!")))]), _vm._v(" "), _vm.currentOpenChat ? [_c("message-component", {
    attrs: {
      friend: _vm.currentOpenChat
    },
    on: {
      close: function close($event) {
        return _vm.close(_vm.currentOpenChat);
      }
    }
  })] : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/chat/Chat.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["whoToOpen", "amIAlive"],
  components: {
    MessageComponent: function MessageComponent() {
      return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./MessageComponent */ "./resources/js/components/player/chat/MessageComponent.vue"));
    }
  },
  data: function data() {
    return {
      currentOpenChat: null,
      friends: this.$store.getters.getFriends,
      isLoading: false
    };
  },
  methods: {
    close: function close(currentOpenChat) {
      if (currentOpenChat) {
        var index = this.friends.findIndex(function (friend) {
          return friend.id == currentOpenChat.id;
        });
        this.friends[index].session.open = false;
      }
      this.currentOpenChat = null;
    },
    openChat: function openChat(friend) {
      this.isLoading = true;
      if (friend.session) {
        this.friends.forEach(function (friend) {
          return friend.session ? friend.session.open = false : "";
        });
        friend.session.open = true;
        this.currentOpenChat = friend;
        friend.session.unreadCount = 0;
        this.isLoading = false;
      } else {
        this.createSession(friend);
      }
    },
    createSession: function createSession(friend) {
      var _this = this;
      axios.post("/api/sessions/create", {
        friend_id: friend.id
      }).then(function (res) {
        friend.session = res.data, friend.session.open = true, _this.currentOpenChat = friend, _this.isLoading = false;
      });
    },
    listenForEverySession: function listenForEverySession(friend) {
      var _this2 = this;
      window.Echo["private"]("Chat.".concat(friend.session.id)).listen("PrivateChatEvent", function (e) {
        if (!friend.session.open) {
          if (!_this2.amIAlive) {
            _this2.$emit("unread", 1);
          }
          friend.session.unreadCount++;
          friend.session.last_message[0].content = e.content;
        }
      });
    }
  },
  computed: {
    isThereASession: function isThereASession() {
      return this.friends.some(function (friend) {
        return friend.session;
      });
    }
  },
  created: function created() {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var unread;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (_this3.whoToOpen) {
              _this3.openChat(_this3.friends.find(function (friend) {
                return friend.id == _this3.whoToOpen;
              }));
              _this3.$emit("chatOpened");
            }
            _this3.friends.forEach(function (friend) {
              _this3.listenForEverySession(friend);
            });
            unread = _this3.friends.reduce(function (a, b) {
              return a + b.session.unreadCount;
            }, 0);
            if (!_this3.amIAlive) {
              _this3.$emit("unread", unread);
            }
            window.Echo.channel("Chat").listen("HearingEvent", function (e) {
              var friend = _this3.friends.find(function (friend) {
                return friend.id == e.user_id;
              });
              if (friend) {
                friend.isPlaying = e.is_playing;
              }
            });
            window.Echo.channel("Chat").listen("SessionEvent", function (e) {
              var friend = _this3.friends.find(function (friend) {
                return friend.id == e.session_by;
              });
              friend.session = e.session;
            });
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  watch: {
    whoToOpen: function whoToOpen(val) {
      if (val) {
        this.openChat(this.friends.find(function (friend) {
          return friend.id == val;
        }));
        this.$emit("chatOpened");
      }
    },
    amIAlive: function amIAlive(val) {
      if (!val) {
        this.close(this.currentOpenChat);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chats-wrapper[data-v-70667bec] {\n  min-width: 350px;\n  max-width: 500px;\n  position: relative;\n  min-height: 40vh;\n  border-radius: 10px;\n  padding: 0.5rem;\n}\n@media screen and (max-width: 500px) {\n.chats-wrapper[data-v-70667bec] {\n    min-width: auto;\n}\n}\n.chats-wrapper .title-wrapper[data-v-70667bec] {\n  padding-left: 0.5em;\n}\n.chats-wrapper ul[data-v-70667bec] {\n  list-style: none;\n}\n.chats-wrapper ul li[data-v-70667bec] {\n  padding: 0.5rem 0.3rem;\n  border-radius: 5px;\n  border-radius: 15px;\n  word-break: break-all;\n  display: flex;\n  cursor: pointer;\n}\n.chats-wrapper ul li .avatar[data-v-70667bec] {\n  margin-right: 1rem;\n}\n.chats-wrapper ul li .avatar img[data-v-70667bec] {\n  border-radius: 50%;\n  width: 3em;\n}\n.chats-wrapper ul li .infos[data-v-70667bec] {\n  flex-grow: 2;\n}\n.chats-wrapper ul li .infos .name-unread[data-v-70667bec] {\n  display: flex;\n  align-items: center;\n}\n.chats-wrapper ul li .infos .name-unread .name[data-v-70667bec] {\n  font-weight: 600;\n  margin-right: 1em;\n  max-width: 100%;\n}\n.chats-wrapper ul li .infos .name-unread .unread-messages-count[data-v-70667bec] {\n  height: 1.6em;\n  width: 1.6em;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background-color: purple;\n  font-size: 0.55em;\n}\n.chats-wrapper ul li .infos .last_message[data-v-70667bec] {\n  opacity: 0.8;\n}\n.chats-wrapper ul li .infos .unread[data-v-70667bec] {\n  color: purple;\n  font-weight: 600;\n}\n.chats-wrapper ul li[data-v-70667bec]:hover {\n  background-color: rgba(107, 107, 107, 0.26);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/player/chat/Chat.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/player/chat/Chat.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat_vue_vue_type_template_id_70667bec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=70667bec&scoped=true */ "./resources/js/components/player/chat/Chat.vue?vue&type=template&id=70667bec&scoped=true");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js */ "./resources/js/components/player/chat/Chat.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Chat_vue_vue_type_style_index_0_id_70667bec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true */ "./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_70667bec_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chat_vue_vue_type_template_id_70667bec_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "70667bec",
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/player/chat/Chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/player/chat/Chat.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/player/chat/Chat.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/chat/Chat.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_70667bec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/chat/Chat.vue?vue&type=style&index=0&id=70667bec&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_70667bec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_70667bec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_70667bec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_70667bec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/player/chat/Chat.vue?vue&type=template&id=70667bec&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/player/chat/Chat.vue?vue&type=template&id=70667bec&scoped=true ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_70667bec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=template&id=70667bec&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/player/chat/Chat.vue?vue&type=template&id=70667bec&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_70667bec_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_70667bec_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);