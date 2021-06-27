(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_cookie_notification_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cookie_notification.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cookie_notification.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var vue_property_decorator_1 = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");

var cookie_notification_1 = __importDefault(__webpack_require__(/*! @jsmodules/translations/components/cookie_notification */ "./resources/js/modules/translations/components/cookie_notification.ts"));

var accept_button_vue_1 = __importDefault(__webpack_require__(/*! @jscomponents/form_controls/accept_button.vue */ "./resources/js/components/form_controls/accept_button.vue"));

var CookieNotification =
/** @class */
function (_super) {
  __extends(CookieNotification, _super);

  function CookieNotification() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.translations = cookie_notification_1["default"];
    _this.showNotification = true;
    return _this;
  }

  CookieNotification.prototype.acceptCookies = function () {
    localStorage.setItem("cookiesAccepted", "yes");
    this.showNotification = false;
  };

  CookieNotification = __decorate([vue_property_decorator_1.Component({
    components: {
      AcceptButton: accept_button_vue_1["default"]
    }
  })], CookieNotification);
  return CookieNotification;
}(vue_property_decorator_1.Vue);

exports.default = CookieNotification;

/***/ }),

/***/ "./resources/js/modules/translations/components/cookie_notification.ts":
/*!*****************************************************************************!*\
  !*** ./resources/js/modules/translations/components/cookie_notification.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var translator_js_1 = __importDefault(__webpack_require__(/*! @jsmodules/translator.js */ "./resources/js/modules/translator.js"));

var translations = {
  cookieNotificationHeader: translator_js_1["default"].translate('cookie_notification_header'),
  cookieNotificationBody: translator_js_1["default"].translate('cookie_notification_body'),
  acceptButtonCaption: translator_js_1["default"].translate('accept_button_caption')
};
exports.default = translations;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form_controls/accept_button.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form_controls/accept_button.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
//
//
//
//
//
//
var _default = {
  name: 'accept-button'
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cookie_notification.vue?vue&type=style&index=0&id=20448deb&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cookie_notification.vue?vue&type=style&index=0&id=20448deb&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cookies-notification[data-v-20448deb] {\n  min-width: 250px;\n  width: 20vw;\n  position: fixed;\n  right: 10px;\n  bottom: 10px;\n  -webkit-animation: fadein-data-v-20448deb 1.5s;\n          animation: fadein-data-v-20448deb 1.5s;\n  z-index: 5;\n  font-size: 1vw;\n  font-family: \"Exo 2\", sans-serif;\n  border-radius: 5px;\n  background: #211f20;\n  color: white;\n  padding: 5px;\n  border: 1px solid silver;\n  box-shadow: 2px 2px 2px 2px black;\n}\n@media (max-width: 1400px) {\n.cookies-notification[data-v-20448deb] {\n      font-size: 14px;\n}\n}\n.cookies-notification__header[data-v-20448deb] {\n    text-align: center;\n    color: #ff074a;\n}\n.cookies-notification__accept-button[data-v-20448deb] {\n    font-size: 1.2vw;\n    font-family: \"Exo 2\", sans-serif;\n}\n@media (max-width: 1200px) {\n.cookies-notification__accept-button[data-v-20448deb] {\n        font-size: 16px;\n}\n}\n@-webkit-keyframes fadein-data-v-20448deb {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fadein-data-v-20448deb {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form_controls/accept_button.vue?vue&type=style&index=0&id=3f6667e0&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form_controls/accept_button.vue?vue&type=style&index=0&id=3f6667e0&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".accept-button[data-v-3f6667e0] {\n  background: linear-gradient(#0fe00b, #054004);\n  padding: 5px;\n  color: white;\n  display: block;\n  width: 95%;\n  margin: 7px auto;\n  border-radius: 5px;\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n  font-size: 1.5vw;\n  font-family: \"Exo 2\", sans-serif;\n}\n.accept-button[data-v-3f6667e0]:hover {\n    background: #ef0244;\n}\n@media (max-width: 1200px) {\n.accept-button[data-v-3f6667e0] {\n      font-size: 19px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cookie_notification.vue?vue&type=style&index=0&id=20448deb&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cookie_notification.vue?vue&type=style&index=0&id=20448deb&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cookie_notification_vue_vue_type_style_index_0_id_20448deb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cookie_notification.vue?vue&type=style&index=0&id=20448deb&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cookie_notification.vue?vue&type=style&index=0&id=20448deb&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cookie_notification_vue_vue_type_style_index_0_id_20448deb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cookie_notification_vue_vue_type_style_index_0_id_20448deb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form_controls/accept_button.vue?vue&type=style&index=0&id=3f6667e0&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form_controls/accept_button.vue?vue&type=style&index=0&id=3f6667e0&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_accept_button_vue_vue_type_style_index_0_id_3f6667e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./accept_button.vue?vue&type=style&index=0&id=3f6667e0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form_controls/accept_button.vue?vue&type=style&index=0&id=3f6667e0&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_accept_button_vue_vue_type_style_index_0_id_3f6667e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_accept_button_vue_vue_type_style_index_0_id_3f6667e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/cookie_notification.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/cookie_notification.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__esModule": () => (/* reexport safe */ _cookie_notification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.__esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cookie_notification_vue_vue_type_template_id_20448deb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie_notification.vue?vue&type=template&id=20448deb&scoped=true& */ "./resources/js/components/cookie_notification.vue?vue&type=template&id=20448deb&scoped=true&");
/* harmony import */ var _cookie_notification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie_notification.vue?vue&type=script&lang=ts& */ "./resources/js/components/cookie_notification.vue?vue&type=script&lang=ts&");
/* harmony import */ var _cookie_notification_vue_vue_type_style_index_0_id_20448deb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookie_notification.vue?vue&type=style&index=0&id=20448deb&lang=scss&scoped=true& */ "./resources/js/components/cookie_notification.vue?vue&type=style&index=0&id=20448deb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _cookie_notification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _cookie_notification_vue_vue_type_template_id_20448deb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _cookie_notification_vue_vue_type_template_id_20448deb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "20448deb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cookie_notification.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/form_controls/accept_button.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/form_controls/accept_button.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__esModule": () => (/* reexport safe */ _accept_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.__esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _accept_button_vue_vue_type_template_id_3f6667e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accept_button.vue?vue&type=template&id=3f6667e0&scoped=true& */ "./resources/js/components/form_controls/accept_button.vue?vue&type=template&id=3f6667e0&scoped=true&");
/* harmony import */ var _accept_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accept_button.vue?vue&type=script&lang=js& */ "./resources/js/components/form_controls/accept_button.vue?vue&type=script&lang=js&");
/* harmony import */ var _accept_button_vue_vue_type_style_index_0_id_3f6667e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accept_button.vue?vue&type=style&index=0&id=3f6667e0&lang=scss&scoped=true& */ "./resources/js/components/form_controls/accept_button.vue?vue&type=style&index=0&id=3f6667e0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _accept_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _accept_button_vue_vue_type_template_id_3f6667e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _accept_button_vue_vue_type_template_id_3f6667e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3f6667e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form_controls/accept_button.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/cookie_notification.vue?vue&type=script&lang=ts&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/cookie_notification.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "__esModule": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cookie_notification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.__esModule)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cookie_notification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-6[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cookie_notification.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cookie_notification.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cookie_notification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/form_controls/accept_button.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/form_controls/accept_button.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "__esModule": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accept_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.__esModule)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accept_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./accept_button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form_controls/accept_button.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accept_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/cookie_notification.vue?vue&type=style&index=0&id=20448deb&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/cookie_notification.vue?vue&type=style&index=0&id=20448deb&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cookie_notification_vue_vue_type_style_index_0_id_20448deb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cookie_notification.vue?vue&type=style&index=0&id=20448deb&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cookie_notification.vue?vue&type=style&index=0&id=20448deb&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/form_controls/accept_button.vue?vue&type=style&index=0&id=3f6667e0&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/accept_button.vue?vue&type=style&index=0&id=3f6667e0&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_24_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_accept_button_vue_vue_type_style_index_0_id_3f6667e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./accept_button.vue?vue&type=style&index=0&id=3f6667e0&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form_controls/accept_button.vue?vue&type=style&index=0&id=3f6667e0&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/cookie_notification.vue?vue&type=template&id=20448deb&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/cookie_notification.vue?vue&type=template&id=20448deb&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cookie_notification_vue_vue_type_template_id_20448deb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cookie_notification_vue_vue_type_template_id_20448deb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cookie_notification_vue_vue_type_template_id_20448deb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cookie_notification.vue?vue&type=template&id=20448deb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cookie_notification.vue?vue&type=template&id=20448deb&scoped=true&");


/***/ }),

/***/ "./resources/js/components/form_controls/accept_button.vue?vue&type=template&id=3f6667e0&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/accept_button.vue?vue&type=template&id=3f6667e0&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_accept_button_vue_vue_type_template_id_3f6667e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_accept_button_vue_vue_type_template_id_3f6667e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_accept_button_vue_vue_type_template_id_3f6667e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./accept_button.vue?vue&type=template&id=3f6667e0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form_controls/accept_button.vue?vue&type=template&id=3f6667e0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cookie_notification.vue?vue&type=template&id=20448deb&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cookie_notification.vue?vue&type=template&id=20448deb&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showNotification,
          expression: "showNotification"
        }
      ],
      staticClass: "cookies-notification"
    },
    [
      _c("header", {
        staticClass: "cookies-notification__header",
        domProps: {
          textContent: _vm._s(_vm.translations["cookieNotificationHeader"])
        }
      }),
      _vm._v(" "),
      _c("p", {
        domProps: {
          textContent: _vm._s(_vm.translations["cookieNotificationBody"])
        }
      }),
      _vm._v(" "),
      _c(
        "accept-button",
        {
          staticClass: "cookies-notification__accept-button",
          nativeOn: {
            click: function($event) {
              return _vm.acceptCookies($event)
            }
          }
        },
        [_vm._v("\n    " + _vm._s(_vm.translations["acceptButtonCaption"]))]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form_controls/accept_button.vue?vue&type=template&id=3f6667e0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form_controls/accept_button.vue?vue&type=template&id=3f6667e0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    { staticClass: "accept-button", attrs: { type: "button" } },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);