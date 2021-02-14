/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"/js/register": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/empire_logo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/empire_logo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsmodules_translator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsmodules/translator.js */ "./resources/js/modules/translator.js");
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'empire-logo',
  data: function data() {
    return {
      logoDescription: "",
      logoDescriptionShort: ""
    };
  },
  mounted: function mounted() {
    this.translator = _jsmodules_translator_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.logoDescription = this.translator.translate('sex_empire');
    this.logoDescriptionShort = this.translator.translate('sex_empire_short');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/expect_circle.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/expect_circle.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'expect-circle',
  props: {
    label: {
      required: false,
      type: String,
      "default": null
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_confirm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/icon_confirm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'icon-confirm',
  props: {
    aditionalClasses: {
      required: false,
      type: Object,
      "default": undefined
    },
    attachedIcon: {
      required: false,
      type: Boolean,
      "default": false
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.aditionalClasses) {
      Object.keys(this.aditionalClasses).forEach(function (key) {
        return _this.$refs[key].classList.add(_this.aditionalClasses[key]);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_stop.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/icon_stop.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'icon-stop',
  props: {
    aditionalClasses: {
      required: false,
      type: Object,
      "default": undefined
    },
    attachedIcon: {
      required: false,
      type: Boolean,
      "default": false
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.aditionalClasses) {
      Object.keys(this.aditionalClasses).forEach(function (key) {
        return _this.$refs[key].classList.add(_this.aditionalClasses[key]);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/button_close.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/button_close.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'button-close',
  data: function data() {
    return {
      translator: undefined
    };
  },
  props: {
    title: {
      required: false,
      type: String,
      "default": ""
    },
    label: {
      required: false,
      type: String,
      "default": 'close'
    }
  },
  created: function created() {
    this.translator = this.$root.translator;
  },
  mounted: function mounted() {
    if (this.title) {
      this.$refs.container.setAttribute('title', this.translator.translate(this.title));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/date_picker.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/date_picker.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsmodules_months_in_different_languages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsmodules/months_in_different_languages.js */ "./resources/js/modules/months_in_different_languages.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'date-picker',
  methods: {
    adjustDays: function adjustDays() {
      var selectedMonth = this.selectedMonth;

      if (selectedMonth != "0") {
        var months31 = [1, 3, 5, 7, 8, 10, 12];
        var months30 = [4, 6, 9, 11];
        var selectedYear = this.selectedYear;

        if (months31.includes(selectedMonth)) {
          this.numberOfDaysInMonth = 31;
        } else if (months30.includes(selectedMonth)) {
          this.numberOfDaysInMonth = 30;
        } else {
          this.numberOfDaysInMonth = selectedYear % 4 === 0 && selectedYear !== 0 ? 29 : 28;
        }

        this.selectedDay = this.selectedDay > this.numberOfDaysInMonth ? this.numberOfDaysInMonth : this.selectedDay;

        if (selectedYear != "0" && this.selectedDay != "0" && this.onDateSelectCallback) {
          this.onDateSelectCallback(this);
        }
      } else {
        this.numberOfDaysInMonth = 31;
      }
    },
    showError: function showError() {
      var errorMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var root = this.$root;
      this.valueOK = false;
      this.errorMessage = root.translator.translate(errorMessage);
    },
    showValueIsOK: function showValueIsOK() {
      this.valueOK = true;
      this.errorMessage = "";
    },
    invokeCallback: function invokeCallback() {
      if (this.selectedDay != "0" && this.selectedMonth != 0 && this.selectedYear != 0) {
        this.onDateSelectCallback(this);
      }
    },
    initiateDate: function initiateDate() {
      if (this.initialValue !== "00-00-00") {
        var splittedDate = this.initialValue.split("-");
        this.selectedYear = splittedDate[0].replace("0", "");
        this.selectedMonth = splittedDate[1].replace("0", "");
        this.selectedDay = splittedDate[2].replace("0", "");
      }
    }
  },
  props: {
    language: {
      required: false,
      type: String,
      "default": 'Polski'
    },
    initialValue: {
      required: false,
      type: String,
      "default": "00-00-00"
    },
    name: {
      required: false,
      type: String,
      "default": "date_picker"
    },
    sinceYear: {
      required: false,
      type: Number,
      "default": new Date().getFullYear() - 120
    },
    lastYear: {
      required: false,
      type: Number,
      "default": new Date().getFullYear()
    },
    errorIconAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    confirmationIconAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    redBorderAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    greenBorderAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    initialOk: {
      required: false,
      type: Boolean,
      "default": undefined
    },
    completeErrorDisplayAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    completeConfirmationDisplayAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    completeValidationDisplayAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    errorMessageBoxAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    initialErrorText: {
      required: false,
      type: String,
      "default": undefined
    },
    onDateSelectCallback: {
      required: false,
      type: Function,
      "default": null
    },
    isDisabled: {
      required: false,
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      valueOK: undefined,
      errorMessage: undefined,
      months: undefined,
      timespan: undefined,
      numberOfDaysInMonth: 31,
      selectedDay: 0,
      selectedMonth: 0,
      selectedYear: 0,
      descriptions: undefined
    };
  },
  created: function created() {
    this.months = _jsmodules_months_in_different_languages_js__WEBPACK_IMPORTED_MODULE_0__["default"][this.language]['months'];
    this.errorMessage = this.initialErrorText;
    this.iconErrorCanBeDisplayed = this.errorIconAvailable || this.completeErrorDisplayAvailable || this.completeValidationDisplayAvailable;
    this.iconConfirmationCanBeDisplayed = this.confirmationIconAvailable || this.completeConfirmationDisplayAvailable || this.completeValidationDisplayAvailable;
    this.redBorderCanBeDisplayed = this.redBorderAvailable || this.completeErrorDisplayAvailable || this.completeValidationDisplayAvailable;
    this.greenBorderCanBeDisplayed = this.greenBorderAvailable || this.completeConfirmationDisplayAvailable || this.completeValidationDisplayAvailable;
    this.timespan = this.lastYear - this.sinceYear + 1;
    this.descriptions = _jsmodules_months_in_different_languages_js__WEBPACK_IMPORTED_MODULE_0__["default"][this.language]['timeSpanNames'];
    this.valueOK = this.initialOk;
    this.initiateDate();
  },
  mounted: function mounted() {
    if (this.onDateSelectCallback) {
      this.$refs.day_select.addEventListener('change', this.invokeCallback.bind(this));
    }
  },
  computed: {
    displayIconError: function displayIconError() {
      return this.iconErrorCanBeDisplayed && this.valueOK === false;
    },
    displayRedBorder: function displayRedBorder() {
      return this.redBorderCanBeDisplayed && this.valueOK === false;
    },
    displayIconConfirmation: function displayIconConfirmation() {
      return this.iconConfirmationCanBeDisplayed && this.valueOK === true;
    },
    displayGreenBorder: function displayGreenBorder() {
      return this.greenBorderCanBeDisplayed && this.valueOK === true;
    },
    dateString: function dateString() {
      return "".concat(this.selectedYear.toString().padStart(2, "0"), "-").concat(this.selectedMonth.toString().padStart(2, "0"), "-").concat(this.selectedDay.toString().padStart(2, "0"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/described_select.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/described_select.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jscomponents_decoration_icon_stop_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jscomponents-decoration/icon_stop.vue */ "./resources/js/components/decoration/icon_stop.vue");
/* harmony import */ var _jscomponents_decoration_icon_confirm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jscomponents-decoration/icon_confirm.vue */ "./resources/js/components/decoration/icon_confirm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'described-select',
  components: {
    IconStop: _jscomponents_decoration_icon_stop_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    IconConfirm: _jscomponents_decoration_icon_confirm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      valueOK: undefined,
      errorMessage: undefined,
      inputValue: undefined,
      iconErrorCanBeDisplayed: undefined,
      iconConfirmationCanBeDisplayed: undefined,
      redBorderCanBeDisplayed: undefined,
      greenBorderCanBeDisplayed: undefined,
      optionsValuesInternal: undefined
    };
  },
  computed: {
    displayIconError: function displayIconError() {
      return this.iconErrorCanBeDisplayed && this.valueOK === false;
    },
    displayRedBorder: function displayRedBorder() {
      return this.redBorderCanBeDisplayed && this.valueOK === false;
    },
    displayIconConfirmation: function displayIconConfirmation() {
      return this.iconConfirmationCanBeDisplayed && this.valueOK === true;
    },
    displayGreenBorder: function displayGreenBorder() {
      return this.greenBorderCanBeDisplayed && this.valueOK === true;
    }
  },
  created: function created() {
    this.inputValue = this.initialValue;
    this.errorMessage = this.initialErrorText;
    this.iconErrorCanBeDisplayed = this.errorIconAvailable || this.completeErrorDisplayAvailable || this.completeValidationDisplayAvailable;
    this.iconConfirmationCanBeDisplayed = this.confirmationIconAvailable || this.completeConfirmationDisplayAvailable || this.completeValidationDisplayAvailable;
    this.redBorderCanBeDisplayed = this.redBorderAvailable || this.completeErrorDisplayAvailable || this.completeValidationDisplayAvailable;
    this.greenBorderCanBeDisplayed = this.greenBorderAvailable || this.completeConfirmationDisplayAvailable || this.completeValidationDisplayAvailable;
    this.optionsValuesInternal = this.optionValues === undefined ? this.visibleOptionsList : this.optionValues;
    this.valueOK = this.initialOk;
  },
  mounted: function mounted() {
    var _this = this;

    if (this.onChangeCallback) {
      this.$refs.select_value.addEventListener('change', function () {
        return _this.onChangeCallback(_this);
      });
    }
  },
  props: {
    visibleOptionsList: {
      required: true,
      type: Array
    },
    optionValues: {
      required: false,
      type: Array,
      "default": undefined
    },
    name: {
      required: false,
      type: String,
      "default": "described_select"
    },
    initialValue: {
      required: false,
      type: String,
      "default": "not-selected"
    },
    errorIconAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    confirmationIconAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    redBorderAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    greenBorderAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    initialOk: {
      required: false,
      type: Boolean,
      "default": undefined
    },
    completeErrorDisplayAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    completeConfirmationDisplayAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    completeValidationDisplayAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    errorMessageBoxAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    initialErrorText: {
      required: false,
      type: String,
      "default": undefined
    },
    onChangeCallback: {
      required: false,
      type: Function,
      "default": null
    }
  },
  methods: {
    showError: function showError() {
      var errorMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var root = this.$root;
      this.valueOK = false;
      this.errorMessage = root.translator.translate(errorMessage);
    },
    showValueIsOK: function showValueIsOK() {
      this.valueOK = true;
      this.errorMessage = "";
    },
    resetValidation: function resetValidation() {
      this.valueOK = undefined;
      this.errorMessage = "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'labeled-checkbox',
  props: {
    name: {
      type: String,
      required: false,
      "default": "labeled-checkbox"
    },
    aditionalClasses: {
      type: Object,
      required: false,
      "default": undefined
    },
    checkedAtStart: {
      required: false,
      type: Boolean,
      "default": false
    },
    value: {
      required: false,
      "default": false
    },
    checkboxValue: {
      required: false,
      "default": 1
    }
  },
  data: function data() {
    return {
      checked: undefined
    };
  },
  methods: {
    updateModel: function updateModel(event) {
      this.$emit('input', event.target.checked);
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.aditionalClasses) {
      Object.keys(this.aditionalClasses).forEach(function (key) {
        return _this.$refs[key].classList.add(_this.aditionalClasses[key]);
      });
    }

    this.$refs.checkbox.checked = this.checkedAtStart;
    this.$emit('input', this.checkedAtStart);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/phantom_button.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/phantom_button.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'phantom-button',
  props: {
    label: {
      required: false,
      type: String,
      "default": undefined
    },
    title: {
      required: false,
      type: String,
      "default": undefined
    }
  },
  mounted: function mounted() {
    if (this.title) {
      this.$refs.button.setAttribute('title', this.title);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/submit_button.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/submit_button.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'submit-button',
  data: function data() {
    return {
      description: "Zaloguj"
    };
  },
  mounted: function mounted() {
    this.description = this.$slots["default"][0].text;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/text_input_combo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/text_input_combo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'text-input-combo',
  data: function data() {
    return {
      valueOK: undefined,
      errorMessage: undefined,
      inputValue: undefined,
      iconErrorCanBeDisplayed: undefined,
      iconConfirmationCanBeDisplayed: undefined,
      redBorderCanBeDisplayed: undefined,
      greenBorderCanBeDisplayed: undefined
    };
  },
  computed: {
    displayIconError: function displayIconError() {
      return this.iconErrorCanBeDisplayed && this.valueOK === false;
    },
    displayRedBorder: function displayRedBorder() {
      return this.redBorderCanBeDisplayed && this.valueOK === false;
    },
    displayIconConfirmation: function displayIconConfirmation() {
      return this.iconConfirmationCanBeDisplayed && this.valueOK === true;
    },
    displayGreenBorder: function displayGreenBorder() {
      return this.greenBorderCanBeDisplayed && this.valueOK === true;
    }
  },
  methods: {
    showError: function showError() {
      var errorMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var root = this.$root;
      this.valueOK = false;
      this.errorMessage = root.translator.translate(errorMessage);
    },
    showValueIsOK: function showValueIsOK() {
      this.valueOK = true;
      this.errorMessage = "";
    },
    resetValidation: function resetValidation() {
      this.valueOK = undefined;
      this.errorMessage = "";
    }
  },
  created: function created() {
    this.inputValue = this.initialValue;
    this.errorMessage = this.initialErrorText;
    this.iconErrorCanBeDisplayed = this.errorIconAvailable || this.completeErrorDisplayAvailable || this.completeValidationDisplayAvailable;
    this.iconConfirmationCanBeDisplayed = this.confirmationIconAvailable || this.completeConfirmationDisplayAvailable || this.completeValidationDisplayAvailable;
    this.redBorderCanBeDisplayed = this.redBorderAvailable || this.completeErrorDisplayAvailable || this.completeValidationDisplayAvailable;
    this.greenBorderCanBeDisplayed = this.greenBorderAvailable || this.completeConfirmationDisplayAvailable || this.completeValidationDisplayAvailable;
    this.valueOK = this.initialOk;
  },
  mounted: function mounted() {
    var _this = this;

    if (this.onBlurCallback) {
      this.$refs.text_input.addEventListener('blur', function () {
        return _this.onBlurCallback(_this);
      });
    }

    if (this.inputId) {
      this.$refs.text_input.id = this.inputId;
    }

    if (this.aditionalClasses) {
      Object.keys(this.aditionalClasses).forEach(function (key) {
        return _this.$refs[key].classList.add(_this.aditionalClasses[key]);
      });
    }
  },
  props: {
    initialValue: {
      required: false,
      type: String,
      "default": ""
    },
    name: {
      required: false,
      type: String,
      "default": "text_input_combo"
    },
    inputType: {
      required: false,
      type: String,
      "default": "text"
    },
    errorIconAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    confirmationIconAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    redBorderAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    greenBorderAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    initialOk: {
      required: false,
      type: Boolean,
      "default": undefined
    },
    completeErrorDisplayAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    completeConfirmationDisplayAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    completeValidationDisplayAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    errorMessageBoxAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    initialErrorText: {
      required: false,
      type: String,
      "default": undefined
    },
    onBlurCallback: {
      required: false,
      type: Function,
      "default": null
    },
    placeholderText: {
      required: false,
      type: String,
      "default": ""
    },
    inputIsRequired: {
      required: false,
      type: Boolean,
      "default": false
    },
    inputId: {
      required: false,
      type: String,
      "default": undefined
    },
    aditionalClasses: {
      required: false,
      type: Object,
      "default": undefined
    },
    isDisabled: {
      required: false,
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/textarea_combo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/textarea_combo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'textarea-combo',
  data: function data() {
    return {
      valueOK: undefined,
      errorMessage: undefined,
      inputValue: undefined,
      iconErrorCanBeDisplayed: undefined,
      iconConfirmationCanBeDisplayed: undefined,
      redBorderCanBeDisplayed: undefined,
      greenBorderCanBeDisplayed: undefined
    };
  },
  computed: {
    displayIconError: function displayIconError() {
      return this.iconErrorCanBeDisplayed && this.valueOK === false;
    },
    displayRedBorder: function displayRedBorder() {
      return this.redBorderCanBeDisplayed && this.valueOK === false;
    },
    displayIconConfirmation: function displayIconConfirmation() {
      return this.iconConfirmationCanBeDisplayed && this.valueOK === true;
    },
    displayGreenBorder: function displayGreenBorder() {
      return this.greenBorderCanBeDisplayed && this.valueOK === true;
    }
  },
  methods: {
    showError: function showError() {
      var errorMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var root = this.$root;
      this.valueOK = false;
      this.errorMessage = root.translator.translate(errorMessage);
    },
    showValueIsOK: function showValueIsOK() {
      this.valueOK = true;
      this.errorMessage = "";
    },
    resetValidation: function resetValidation() {
      this.valueOK = undefined;
      this.errorMessage = "";
    }
  },
  created: function created() {
    this.inputValue = this.initialValue;
    this.errorMessage = this.initialErrorText;
    this.iconErrorCanBeDisplayed = this.errorIconAvailable || this.completeErrorDisplayAvailable || this.completeValidationDisplayAvailable;
    this.iconConfirmationCanBeDisplayed = this.confirmationIconAvailable || this.completeConfirmationDisplayAvailable || this.completeValidationDisplayAvailable;
    this.redBorderCanBeDisplayed = this.redBorderAvailable || this.completeErrorDisplayAvailable || this.completeValidationDisplayAvailable;
    this.greenBorderCanBeDisplayed = this.greenBorderAvailable || this.completeConfirmationDisplayAvailable || this.completeValidationDisplayAvailable;
    this.valueOK = this.initialOk;
  },
  mounted: function mounted() {
    var _this = this;

    if (this.onBlurCallback) {
      this.$refs.text_input.addEventListener('blur', function () {
        return _this.onBlurCallback(_this);
      });
    }
  },
  props: {
    initialValue: {
      required: false,
      type: String,
      "default": ""
    },
    textareaName: {
      required: false,
      type: String,
      "default": "textarea_combo"
    },
    errorIconAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    confirmationIconAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    redBorderAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    greenBorderAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    initialOk: {
      required: false,
      type: Boolean,
      "default": undefined
    },
    completeErrorDisplayAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    completeConfirmationDisplayAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    completeValidationDisplayAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    errorMessageBoxAvailable: {
      required: false,
      type: Boolean,
      "default": false
    },
    initialErrorText: {
      required: false,
      type: String,
      "default": undefined
    },
    onBlurCallback: {
      required: false,
      type: Function,
      "default": null
    },
    placeholderText: {
      required: false,
      type: String,
      "default": ""
    },
    inputIsRequired: {
      required: false,
      type: Boolean,
      "default": false
    },
    maxCharacters: {
      required: false,
      type: Number,
      "default": 1000
    },
    rowsNumber: {
      required: false,
      type: Number,
      "default": 6
    },
    phantomLabel: {
      required: false,
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navbar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/navbar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-clickaway */ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_clickaway__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'navbar',
  directives: {
    onClickaway: vue_clickaway__WEBPACK_IMPORTED_MODULE_0__["directive"]
  },
  props: {
    userId: {
      type: Number,
      required: false,
      "default": undefined
    },
    userName: {
      required: false,
      type: String,
      "default": ""
    },
    avatarFileName: {
      required: false,
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {
      pornSubMenuIsVisible: false,
      moviesSubMenuIsVisible: false,
      loginPanelIsVisible: false,
      csrfToken: "",
      animatePanel: false,
      userIsAuthenticated: undefined,
      authenticatedUserSideBarIsVisible: true,
      contentSideBarIsVisible: true
    };
  },
  methods: {
    showCategories: function showCategories() {
      this.resetNavbar();
      this.$root.$emit('showCategories');
    },
    showContentSideBar: function showContentSideBar() {
      this.contentSideBarIsVisible = true;
      this.setSideBarVisibilityInformation(true, 'contentSideBar');
    },
    hideAuthenticatedUserSideBar: function hideAuthenticatedUserSideBar() {
      this.authenticatedUserSideBarIsVisible = false;
      this.setSideBarVisibilityInformation(false, 'authenticatedUserSideBar');
    },
    hideContentSideBar: function hideContentSideBar() {
      this.contentSideBarIsVisible = false;
      this.setSideBarVisibilityInformation(false, 'contentSideBar');
    },
    toggleAuthenticatedUserSideBar: function toggleAuthenticatedUserSideBar() {
      this.authenticatedUserSideBarIsVisible = !this.authenticatedUserSideBarIsVisible;
      this.setSideBarVisibilityInformation(this.authenticatedUserSideBarIsVisible, 'authenticatedUserSideBar');
    },
    setSideBarVisibilityInformation: function setSideBarVisibilityInformation(hidden, sideBarType) {
      var visible = hidden ? 'visible' : 'hidden';
      localStorage.setItem(sideBarType, visible);
    },
    isSideBarVisible: function isSideBarVisible(sideBarType) {
      return localStorage.getItem(sideBarType) !== 'hidden';
    },
    hideAllSecondLevelSubMenus: function hideAllSecondLevelSubMenus() {
      this.moviesSubMenuIsVisible = false;
    },
    togglePornSubMenu: function togglePornSubMenu() {
      this.pornSubMenuIsVisible = !this.pornSubMenuIsVisible;
      this.hideAllSubMenusExcept("pornSubMenuIsVisible");
      this.hideAllSecondLevelSubMenus();
    },
    toggleMoviesSubMenu: function toggleMoviesSubMenu() {
      this.moviesSubMenuIsVisible = !this.moviesSubMenuIsVisible;
    },
    showPornSubMenu: function showPornSubMenu(event) {
      this.pornSubMenuIsVisible = true;
      this.hideAllSubMenusExcept("pornSubMenuIsVisible");
    },
    resetNavbar: function resetNavbar() {
      this.hideAllSubMenusExcept();
      this.hideAllSecondLevelSubMenus();
    },
    toggleLoginPanel: function toggleLoginPanel() {
      var _this = this;

      this.loginPanelIsVisible = !this.loginPanelIsVisible;
      setTimeout(function () {
        return _this.animatePanel = !_this.animatePanel;
      }, 300);
    },
    hideAllSubMenusExcept: function hideAllSubMenusExcept() {
      var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var subMenusControlVariableNames = ["pornSubMenuIsVisible"];

      for (var _i = 0, _subMenusControlVaria = subMenusControlVariableNames; _i < _subMenusControlVaria.length; _i++) {
        var variableName = _subMenusControlVaria[_i];

        if (variableName != except) {
          this[variableName] = false;
        }
      }
    },
    handleClickoutsideNavbar: function handleClickoutsideNavbar() {
      if (this.anySubMenuIsVisible) {
        this.resetNavbar();
      }
    }
  },
  computed: {
    anySubMenuIsVisible: function anySubMenuIsVisible() {
      return this.pornSubMenuIsVisible;
    },
    avatarFilePath: function avatarFilePath() {
      return "/images/decoration/users/avatars/".concat(this.avatarFileName);
    },
    userAvatarDescription: function userAvatarDescription() {
      return "".concat(this.translator.translate('user_avatar_description'), " : ").concat(this.userName);
    }
  },
  created: function created() {
    this.userIsAuthenticated = Boolean(this.userId);

    if (this.userIsAuthenticated) {
      this.authenticatedUserSideBarIsVisible = this.isSideBarVisible('authenticatedUserSideBar');
    }

    this.contentSideBarIsVisible = this.isSideBarVisible('contentSideBar');
  },
  mounted: function mounted() {
    this.csrfToken = document.getElementById("csrf-token").content;
    this.$root.$on('hide-side-bar', this.hideAuthenticatedUserSideBar);
    this.$root.$on('hide-content-bar', this.hideContentSideBar);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/empire_logo.vue?vue&type=style&index=0&id=e62713bc&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/empire_logo.vue?vue&type=style&index=0&id=e62713bc&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo-description[data-v-e62713bc] {\n  font-size: 1em;\n  font-family: \"Exo 2\", sans-serif;\n  color: white;\n}\n@media (max-width: 1200px) {\n.logo-description[data-v-e62713bc] {\n    font-size: 1em;\n}\n}\n.logo-container[data-v-e62713bc] {\n  display: inline-block;\n}\n.decoration-heart[data-v-e62713bc] {\n  font-size: 1em;\n  margin-right: 2px;\n  color: #eb091c;\n}\n@media (max-width: 550px) {\n.logo-description-short[data-v-e62713bc] {\n    display: inline;\n}\n}\n@media (min-width: 551px) {\n.logo-description-short[data-v-e62713bc] {\n    display: none;\n}\n}\n@media (max-width: 550px) {\n.logo-description-long[data-v-e62713bc] {\n    display: none;\n}\n}\n@media (min-width: 551px) {\n.logo-description-long[data-v-e62713bc] {\n    display: inline;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/expect_circle.vue?vue&type=style&index=0&id=08c0afbc&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/expect_circle.vue?vue&type=style&index=0&id=08c0afbc&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".expect-circles-outer-container[data-v-08c0afbc] {\n  display: inline-block;\n}\n.expect-circles-label[data-v-08c0afbc] {\n  padding: 4px 0;\n  text-align: center;\n  font-size: 1.2vw;\n  font-family: \"Exo 2\", sans-serif;\n  color: white;\n}\n@media (max-width: 1200px) {\n.expect-circles-label[data-v-08c0afbc] {\n    font-size: 16px;\n}\n}\n.expect-circles-inner-container[data-v-08c0afbc] {\n  min-width: 100px;\n  min-height: 100px;\n  width: 10vw;\n  height: 10vw;\n  position: relative;\n  margin: 0 auto;\n}\n.flickering-circle[data-v-08c0afbc] {\n  border-radius: 50%;\n  width: 20%;\n  height: 20%;\n  background: #0b5a8a;\n  position: absolute;\n  opacity: 0;\n  -webkit-animation: flicker-data-v-08c0afbc 4s linear 0s infinite;\n          animation: flicker-data-v-08c0afbc 4s linear 0s infinite;\n}\n.circle-1[data-v-08c0afbc] {\n  top: 5%;\n  left: 40%;\n}\n.circle-2[data-v-08c0afbc] {\n  top: 15%;\n  right: 15%;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n.circle-3[data-v-08c0afbc] {\n  top: 40%;\n  right: 5%;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n.circle-4[data-v-08c0afbc] {\n  bottom: 15%;\n  right: 15%;\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n}\n.circle-5[data-v-08c0afbc] {\n  bottom: 5%;\n  left: 40%;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n.circle-6[data-v-08c0afbc] {\n  left: 15%;\n  bottom: 15%;\n  -webkit-animation-delay: 2.5s;\n          animation-delay: 2.5s;\n}\n.circle-7[data-v-08c0afbc] {\n  left: 5%;\n  top: 40%;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n}\n.circle-8[data-v-08c0afbc] {\n  top: 15%;\n  left: 15%;\n  -webkit-animation-delay: 3.5s;\n          animation-delay: 3.5s;\n}\n@-webkit-keyframes flicker-data-v-08c0afbc {\n0% {\n    opacity: 0;\n}\n50% {\n    opacity: 1;\n}\n70% {\n    opacity: 0;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes flicker-data-v-08c0afbc {\n0% {\n    opacity: 0;\n}\n50% {\n    opacity: 1;\n}\n70% {\n    opacity: 0;\n}\n100% {\n    opacity: 0;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_confirm.vue?vue&type=style&index=0&id=5787bafe&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/icon_confirm.vue?vue&type=style&index=0&id=5787bafe&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon-correct-value[data-v-5787bafe] {\n  background: green;\n  display: inline-block;\n}\n.confirmation-icon-bird[data-v-5787bafe] {\n  width: 30%;\n  height: 50%;\n  position: relative;\n  left: 35%;\n  top: 15%;\n  border-right: 2px solid white;\n  border-bottom: 2px solid white;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.icon-container[data-v-5787bafe] {\n  border-radius: 50%;\n  z-index: 2;\n  width: 2.1vw;\n  height: 2.1vw;\n  min-width: 25px;\n  min-height: 25px;\n  font-size: 0;\n}\n.attached-icon[data-v-5787bafe] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_stop.vue?vue&type=style&index=0&id=087d39b4&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/icon_stop.vue?vue&type=style&index=0&id=087d39b4&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon-container[data-v-087d39b4] {\n  border-radius: 50%;\n  z-index: 2;\n  width: 2.1vw;\n  height: 2.1vw;\n  min-width: 30px;\n  min-height: 30px;\n  font-size: 0;\n}\n.icon-incorrect-value[data-v-087d39b4] {\n  background: red;\n}\n.white-bar[data-v-087d39b4] {\n  background: white;\n  height: 100%;\n  -webkit-clip-path: polygon(13% 34%, 87% 34%, 87% 64%, 13% 64%);\n          clip-path: polygon(13% 34%, 87% 34%, 87% 64%, 13% 64%);\n}\n.attached-icon[data-v-087d39b4] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/button_close.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/button_close.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-close:hover .button-close__cross {\n  background: white;\n}\n.button-close {\n  position: relative;\n  background: white;\n  border-radius: 50%;\n  border: 3px solid #ef0244;\n  font-size: 0;\n  min-width: 30px;\n  min-height: 30px;\n  width: 2.3vw;\n  height: 2.3vw;\n  cursor: pointer;\n  display: inline-block;\n}\n.button-close:hover {\n  background: #ef0244;\n}\n.button-close__cross {\n  display: inline-block;\n  background: #ef0244;\n  width: 65%;\n  height: 65%;\n  position: absolute;\n  font-size: 0;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);\n          clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);\n}\n.button-close__label {\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/date_picker.vue?vue&type=style&index=0&id=9960fe74&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/date_picker.vue?vue&type=style&index=0&id=9960fe74&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-message-box[data-v-9960fe74] {\n  display: block;\n  font-size: 1vw;\n  font-family: \"Exo 2\", sans-serif;\n  color: red;\n  padding: 2px 2px 3px;\n  text-align: center;\n  height: calc(1em + 6px);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n@media (max-width: 1200px) {\n.error-message-box[data-v-9960fe74] {\n    font-size: 13px;\n}\n}\n.date-picker-container[data-v-9960fe74] {\n  color: white;\n}\n.disabled-input-icon[data-v-9960fe74] {\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 1%;\n  position: absolute;\n  color: red;\n  font-size: 1.3vw;\n}\n@media (max-width: 1200px) {\n.disabled-input-icon[data-v-9960fe74] {\n    font-size: 18px;\n}\n}\n.date-picker-description[data-v-9960fe74] {\n  text-align: center;\n  position: relative;\n  padding: 3px;\n  color: white;\n  font-size: 1.3vw;\n  font-family: \"Exo 2\", sans-serif;\n}\n@media (max-width: 1200px) {\n.date-picker-description[data-v-9960fe74] {\n    font-size: 17px;\n}\n}\n.date-picker-flex-container[data-v-9960fe74] {\n  display: -webkit-box;\n  display: flex;\n  border-radius: 8px;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  background: #242229;\n  padding: 3px;\n  border: 2px solid transparent;\n  position: relative;\n  width: 95%;\n  height: 2em;\n  margin: 0 auto;\n  font-size: 1vw;\n  font-family: \"Exo 2\", sans-serif;\n  -webkit-box-align: center;\n          align-items: center;\n}\n@media (max-width: 1200px) {\n.date-picker-flex-container[data-v-9960fe74] {\n    font-size: 14px;\n}\n}\n.time-span-select[data-v-9960fe74] {\n  border-radius: 4px;\n  background: #242229;\n  color: white;\n  border: 1px solid black;\n  font-size: 1vw;\n  font-family: \"Exo 2\", sans-serif;\n}\n@media (max-width: 1200px) {\n.time-span-select[data-v-9960fe74] {\n    font-size: 14px;\n}\n}\n.time-span-label[data-v-9960fe74] {\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n}\n.time-span-container[data-v-9960fe74] {\n  padding: 2px;\n  border-radius: 6px;\n}\n.incorrect-value[data-v-9960fe74] {\n  border: 2px solid red;\n}\n.correct-value[data-v-9960fe74] {\n  border: 2px solid green;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/described_select.vue?vue&type=style&index=0&id=4f72d48b&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/described_select.vue?vue&type=style&index=0&id=4f72d48b&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-message-box[data-v-4f72d48b] {\n  display: block;\n  font-size: 1vw;\n  font-family: \"Exo 2\", sans-serif;\n  color: red;\n  padding: 2px 2px 3px;\n  text-align: center;\n  height: calc(1em + 6px);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n@media (max-width: 1200px) {\n.error-message-box[data-v-4f72d48b] {\n    font-size: 13px;\n}\n}\n.select-label[data-v-4f72d48b] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  border-radius: 7px;\n  padding: 3px 10px;\n  color: white;\n  width: 95%;\n  margin: 0 auto;\n  background: #242229;\n  position: relative;\n  border: 2px solid transparent;\n  height: 2em;\n}\n.select-description[data-v-4f72d48b] {\n  white-space: nowrap;\n}\n.described-select[data-v-4f72d48b] {\n  width: 1%;\n  -webkit-box-flex: 10;\n          flex-grow: 10;\n  color: white;\n  border: none;\n  background: #242229;\n  outline: none;\n}\n.described-select[data-v-4f72d48b], .select-description[data-v-4f72d48b], .select-label[data-v-4f72d48b] {\n  font-size: 1.2vw;\n  font-family: \"Exo 2\", sans-serif;\n}\n@media (max-width: 1200px) {\n.described-select[data-v-4f72d48b], .select-description[data-v-4f72d48b], .select-label[data-v-4f72d48b] {\n    font-size: 16px;\n}\n}\n.incorrect-value[data-v-4f72d48b] {\n  border: 2px solid red;\n}\n.correct-value[data-v-4f72d48b] {\n  border: 2px solid green;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=style&index=0&id=233684f8&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=style&index=0&id=233684f8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".labeled-checkbox[data-v-233684f8] {\n  opacity: 0;\n}\n.labeled-checkbox-description[data-v-233684f8] {\n  position: relative;\n  padding: 0 8px;\n}\n.labeled-checkbox-description[data-v-233684f8]:before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: -1.2vw;\n  width: 1.2vw;\n  height: 1.2vw;\n  cursor: pointer;\n  background: white;\n  border: none;\n  border-radius: 2px;\n  z-index: 1;\n}\n.labeled-checkbox-description[data-v-233684f8]:after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: -0.8vw;\n  width: 0.3vw;\n  height: 0.8vw;\n  cursor: pointer;\n  border-bottom: 2px solid white;\n  border-right: 2px solid white;\n  z-index: 2;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  opacity: 0;\n}\n@media (max-width: 1200px) {\n.labeled-checkbox-description[data-v-233684f8]:before {\n    left: -16px;\n    width: 16px;\n    height: 16px;\n}\n.labeled-checkbox-description[data-v-233684f8]:after {\n    left: -11px;\n    width: 5px;\n    height: 12px;\n}\n}\n.labeled-checkbox-container[data-v-233684f8] {\n  display: table;\n}\n.labeled-checkbox:hover + .labeled-checkbox-description[data-v-233684f8]:before {\n  background: #e80e53;\n}\n.labeled-checkbox:checked + .labeled-checkbox-description[data-v-233684f8]:before {\n  background: #e80e53;\n}\n.labeled-checkbox:checked + .labeled-checkbox-description[data-v-233684f8]:after {\n  opacity: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/phantom_button.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/phantom_button.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".phantom-button {\n  background: transparent;\n  border: none;\n  margin: 0;\n  padding: 0;\n  outline: none;\n  display: inline-block;\n  cursor: pointer;\n  font: inherit;\n  color: inherit;\n}\n.phantom-button:active {\n  border: none;\n  outline: none;\n}\n.phantom-button-description {\n  position: absolute;\n  top: -9999px;\n  left: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/submit_button.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/submit_button.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".submit-button {\n  background: -webkit-gradient(linear, left top, left bottom, from(#0fe00b), to(#054004));\n  background: linear-gradient(#0fe00b, #054004);\n  padding: 5px;\n  color: white;\n  display: block;\n  width: 95%;\n  margin: 7px auto;\n  border-radius: 5px;\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n  font-size: 1.5vw;\n  font-family: \"Exo 2\", sans-serif;\n}\n.submit-button:hover {\n  background: #ef0244;\n}\n@media (max-width: 1200px) {\n.submit-button {\n    font-size: 19px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/text_input_combo.vue?vue&type=style&index=0&id=6c07a9d0&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/text_input_combo.vue?vue&type=style&index=0&id=6c07a9d0&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-message-box[data-v-6c07a9d0] {\n  display: block;\n  font-size: 1vw;\n  font-family: \"Exo 2\", sans-serif;\n  color: red;\n  padding: 2px 2px 3px;\n  text-align: center;\n  height: calc(1em + 6px);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n@media (max-width: 1200px) {\n.error-message-box[data-v-6c07a9d0] {\n    font-size: 13px;\n}\n}\n.icon-container[data-v-6c07a9d0] {\n  top: 0;\n  right: 0;\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n  position: absolute;\n}\n.disabled-input-icon[data-v-6c07a9d0] {\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 1%;\n  position: absolute;\n  color: red;\n  font-size: 1.3vw;\n}\n@media (max-width: 1200px) {\n.disabled-input-icon[data-v-6c07a9d0] {\n    font-size: 18px;\n}\n}\n.text-input-combo-value-label[data-v-6c07a9d0] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  background: #242229;\n  padding: 3px 10px;\n  border-radius: 8px;\n  color: white;\n  width: 95%;\n  margin: 0 auto;\n  border: 2px solid transparent;\n  position: relative;\n  height: 2em;\n}\n.text-input-description[data-v-6c07a9d0] {\n  white-space: nowrap;\n}\n.text-input-combo-value[data-v-6c07a9d0] {\n  background: #242229;\n  border: none;\n  border-bottom: 1px solid transparent;\n  color: #fff;\n  width: 1%;\n  -webkit-box-flex: 10;\n          flex-grow: 10;\n  padding-left: 4px;\n  box-shadow: 0 0 0 1000px #242229 inset;\n}\n.text-input-combo-value[data-v-6c07a9d0], .text-input-description[data-v-6c07a9d0], .text-input-combo-value-label[data-v-6c07a9d0] {\n  font-size: 1.2vw;\n  font-family: \"Exo 2\", sans-serif;\n}\n@media (max-width: 1200px) {\n.text-input-combo-value[data-v-6c07a9d0], .text-input-description[data-v-6c07a9d0], .text-input-combo-value-label[data-v-6c07a9d0] {\n    font-size: 16px;\n}\n}\n.text-input-combo-value[data-v-6c07a9d0]:focus {\n  outline: none;\n  border-bottom: 1px solid #86838f;\n}\n.incorrect-value[data-v-6c07a9d0] {\n  border: 2px solid red;\n}\n.correct-value[data-v-6c07a9d0] {\n  border: 2px solid green;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/textarea_combo.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/textarea_combo.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-message-box {\n  display: block;\n  font-size: 1vw;\n  font-family: \"Exo 2\", sans-serif;\n  color: red;\n  padding: 2px 2px 3px;\n  text-align: center;\n  height: calc(1em + 6px);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n@media (max-width: 1200px) {\n.error-message-box {\n    font-size: 13px;\n}\n}\n.textarea-wrapper {\n  position: relative;\n}\n.message-label {\n  text-align: center;\n  color: white;\n  display: block;\n  padding: 3px 0px;\n  font-size: 1.4vw;\n  font-family: \"Exo 2\", sans-serif;\n}\n@media (max-width: 1200px) {\n.message-label {\n    font-size: 20px;\n}\n}\n.phantom-label {\n  position: absolute;\n  top: -9999px;\n  left: 0;\n}\n.textarea-combo-container {\n  width: 95%;\n  margin: 10px auto;\n}\n.textarea-combo-message {\n  width: 100%;\n  display: block;\n  border-radius: 8px;\n  background: #242229;\n  color: white;\n  border: 2px solid transparent;\n  resize: none;\n  color: white;\n  font-size: 1.2vw;\n  font-family: \"Exo 2\", sans-serif;\n}\n@media (max-width: 1200px) {\n.textarea-combo-message {\n    font-size: 16px;\n}\n}\n.textarea-combo-message:focus {\n  outline: none;\n  border: 2px solid #6e0d1a;\n}\n.incorrect-value {\n  border: 2px solid red;\n}\n.correct-value {\n  border: 2px solid green;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=style&index=0&id=a04b05d0&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=style&index=0&id=a04b05d0&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fixed-sidebar[data-v-a04b05d0] {\n  position: fixed;\n  top: 0;\n  width: 4vw;\n  z-index: 3;\n  background: #0d0c0d;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: height 1s;\n  transition: height 1s;\n  overflow: hidden;\n}\n.visible-sidebar[data-v-a04b05d0] {\n  height: 100vh;\n}\n.hidden-sidebar[data-v-a04b05d0] {\n  height: 0;\n}\n.user-sidebar-list[data-v-a04b05d0] {\n  padding: calc(25px + 2vw) 0 0 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 0;\n  list-style-type: none;\n}\n.sidebar-icon[data-v-a04b05d0], .sidebar-item-description[data-v-a04b05d0], .show-sidebar-button-element[data-v-a04b05d0] {\n  display: block;\n  text-align: center;\n}\n.sidebar-item-description[data-v-a04b05d0] {\n  font-size: 0.9vw;\n  font-family: \"Exo 2\", sans-serif;\n  color: white;\n}\n@media (max-width: 1200px) {\n.sidebar-item-description[data-v-a04b05d0] {\n    font-size: 10px;\n}\n}\n.logout-form[data-v-a04b05d0] {\n  display: none;\n}\n.sub-menu-link[data-v-a04b05d0] {\n  text-decoration: none;\n  color: white;\n}\n.authenticated-user-side-bar[data-v-a04b05d0] {\n  right: 0;\n  box-shadow: -1px -1px 2px 2px black;\n  min-width: 65px;\n}\n.authenticated-user-sidebar-list-element[data-v-a04b05d0] {\n  margin-top: 6px;\n  border-radius: 3px;\n  text-align: center;\n  cursor: pointer;\n  padding: 4px 0;\n}\n.authenticated-user-sidebar-list-element[data-v-a04b05d0]:hover {\n  background: #211e1e;\n}\n.authenticated-user-sidebar-icon[data-v-a04b05d0] {\n  font-size: 1.4vw;\n  font-family: initial, sans-serif;\n  color: red;\n}\n@media (max-width: 1200px) {\n.authenticated-user-sidebar-icon[data-v-a04b05d0] {\n    font-size: 16px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/content_sidebar.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/content_sidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fixed-sidebar {\n  position: fixed;\n  top: 0;\n  width: 4vw;\n  z-index: 3;\n  background: #0d0c0d;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: height 1s;\n  transition: height 1s;\n  overflow: hidden;\n}\n.visible-sidebar {\n  height: 100vh;\n}\n.hidden-sidebar {\n  height: 0;\n}\n.user-sidebar-list {\n  padding: calc(25px + 2vw) 0 0 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 0;\n  list-style-type: none;\n}\n.sidebar-icon, .sidebar-item-description, .show-sidebar-button-element {\n  display: block;\n  text-align: center;\n}\n.sidebar-item-description {\n  font-size: 0.9vw;\n  font-family: \"Exo 2\", sans-serif;\n  color: white;\n}\n@media (max-width: 1200px) {\n.sidebar-item-description {\n    font-size: 10px;\n}\n}\n.logout-form {\n  display: none;\n}\n.sub-menu-link {\n  text-decoration: none;\n  color: white;\n}\n.enlighted-list-content {\n  display: block;\n  padding: 3px 0;\n}\n.enlighted-list-content:hover {\n  background: #211e1e;\n}\n.visible-sidebar-menu {\n  max-height: 2000px;\n}\n.hidden-sidebar-menu {\n  max-height: 0;\n}\n.content-side-bar {\n  left: 0;\n  display: none;\n  box-shadow: 1px 1px 2px 2px black;\n  min-width: 85px;\n}\n.nested-user-sidebar-list {\n  overflow: hidden;\n  -webkit-transition: max-height 1.5s;\n  transition: max-height 1.5s;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.content-sidebar-list-element {\n  margin-top: 6px;\n  border-radius: 3px;\n  text-align: center;\n  cursor: pointer;\n}\n.content-sidebar-icon {\n  font-size: 1.4vw;\n  font-family: initial, sans-serif;\n  color: red;\n}\n@media (max-width: 1200px) {\n.content-sidebar-icon {\n    font-size: 20px;\n}\n}\n.content-sidebar-icon-nested {\n  font-size: 1.4vw;\n  font-family: initial, sans-serif;\n  color: #e0c814;\n}\n@media (max-width: 1200px) {\n.content-sidebar-icon-nested {\n    font-size: 20px;\n}\n}\n@media (max-width: 540px) {\n.content-side-bar {\n    display: block;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navbar.vue?vue&type=style&index=0&id=5b8f8430&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/navbar.vue?vue&type=style&index=0&id=5b8f8430&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-info[data-v-5b8f8430] {\n  font-size: 1.5vw;\n  font-family: Play, sans-serif;\n  color: white;\n}\n@media (max-width: 1200px) {\n.login-info[data-v-5b8f8430] {\n    font-size: 19px;\n}\n}\n.login-form-container[data-v-5b8f8430] {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.75);\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 999;\n}\n.login-panel-toolbar[data-v-5b8f8430] {\n  border-radius: 5px 5px 0 0;\n  background: #242229;\n  padding: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.login-form[data-v-5b8f8430] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: black;\n  border-radius: 8px;\n  box-shadow: 3px 3px 3px 3px black;\n  min-width: 320px;\n  width: 25%;\n  font-family: \"Exo 2\", sans-serif;\n  border: 2px solid #242229;\n  opacity: 0;\n  -webkit-transition: opacity 1.5s;\n  transition: opacity 1.5s;\n}\n.visible-login-form[data-v-5b8f8430] {\n  opacity: 1;\n}\n.show-sidebar-button[data-v-5b8f8430] {\n  position: absolute;\n  padding: 4px 2px;\n  top: 100%;\n  width: 5vw;\n  min-width: 35px;\n  text-align: center;\n  color: white;\n  border-radius: 0 0 5px 5px;\n  border-left: 1px solid black;\n  border-right: 1px solid black;\n  border-bottom: 1px solid black;\n  border-top: none;\n  background: #0d0c0d;\n  opacity: 0;\n  cursor: pointer;\n  -webkit-transition: opacity 1s, background 2s;\n  transition: opacity 1s, background 2s;\n  box-shadow: -1px 2px 2px 1px black;\n}\n.show-sidebar-button[data-v-5b8f8430]:hover {\n  background: #2d2d30;\n}\n.show-authenticated-user-side-bar-button[data-v-5b8f8430] {\n  right: 0;\n}\n.show-content-side-bar-button[data-v-5b8f8430] {\n  left: 0;\n}\n.visible-sidebar-button[data-v-5b8f8430] {\n  opacity: 1;\n}\n.show-sidebar-button-decoration[data-v-5b8f8430] {\n  font-size: 1.5vw;\n}\n@media (max-width: 1200px) {\n.show-sidebar-button-decoration[data-v-5b8f8430] {\n    font-size: 18px;\n}\n}\n.logo-link[data-v-5b8f8430] {\n  color: white;\n  text-decoration: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\n.sub-menu-link[data-v-5b8f8430] {\n  text-decoration: none;\n  color: inherit;\n  display: block;\n}\n.logo-description[data-v-5b8f8430]::after {\n  content: \"Sex-Imperium\";\n}\n.navigation-list[data-v-5b8f8430] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  background: #0d0c0d;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  position: relative;\n  z-index: 3;\n  box-shadow: 2px 2px 2px 2px black;\n}\n.register-selection[data-v-5b8f8430] {\n  margin-left: auto;\n}\n.navigation-element-main[data-v-5b8f8430] {\n  -webkit-transition: background 2s;\n  transition: background 2s;\n  color: white;\n  display: inline-block;\n  line-height: 100%;\n  font-size: 1.5vw;\n  font-family: \"Aldrich\", sans-serif;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  padding: 6px;\n}\n.navigation-element-main[data-v-5b8f8430]:hover {\n  background: #2d2d30;\n}\n.navigation-element-main[data-v-5b8f8430]:hover {\n  cursor: pointer;\n}\n@media (max-width: 1200px) {\n.navigation-element-main[data-v-5b8f8430] {\n    font-size: 18px;\n}\n}\n.navbar-element-user[data-v-5b8f8430] {\n  margin-left: auto;\n  padding: 0 4px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.page-navigation[data-v-5b8f8430] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 10;\n  font-size: 0;\n}\n.page-navigation[data-v-5b8f8430]:focus {\n  outline: none;\n}\n.sub-menu-list[data-v-5b8f8430] {\n  position: absolute;\n  overflow: hidden;\n  display: inline-block;\n  top: 100%;\n  max-height: 0;\n  padding: 0;\n  list-style-type: none;\n  margin: 0;\n  font-size: 1.5vw;\n  font-family: \"Aldrich\", sans-serif;\n  color: white;\n  min-width: 140px;\n  z-index: 1;\n  border-radius: 0 0 8px 8px;\n}\n@media (max-width: 1200px) {\n.sub-menu-list[data-v-5b8f8430] {\n    font-size: 18px;\n}\n}\n.porn-sub-menu-list[data-v-5b8f8430] {\n  left: 13vw;\n}\n.hidden-sub-menu[data-v-5b8f8430] {\n  max-height: 0;\n  -webkit-transition: none;\n  transition: none;\n}\n.visible-sub-menu[data-v-5b8f8430] {\n  -webkit-transition: max-height 1.5s;\n  transition: max-height 1.5s;\n  max-height: 1500px;\n  box-shadow: 2px 2px 4px 3px black;\n}\n.sub-menu-list-element[data-v-5b8f8430] {\n  background: -webkit-gradient(linear, left top, right top, from(#0a0a0a), to(#2e2e2d));\n  background: linear-gradient(to right, #0a0a0a, #2e2e2d);\n  border-bottom: 1px solid black;\n  cursor: pointer;\n}\n.sub-menu-list-nested-level-two[data-v-5b8f8430] {\n  list-style-type: none;\n  overflow: hidden;\n  padding: 0;\n  -webkit-transition: max-height 0.7s;\n  transition: max-height 0.7s;\n}\n.navbar-icon-second-level[data-v-5b8f8430] {\n  color: #bbb606;\n}\n.sub-menu-list-element-intendation-second-level[data-v-5b8f8430] {\n  padding: 5px 2px 5px 2vw;\n  border-bottom: 1px solid black;\n  white-space: nowrap;\n  background: -webkit-gradient(linear, left top, right top, from(#0a0a0a), to(#2e2e2d));\n  background: linear-gradient(to right, #0a0a0a, #2e2e2d);\n}\n.sub-menu-list-element-intendation-second-level[data-v-5b8f8430]:hover {\n  background: black;\n  cursor: pointer;\n}\n.visible-movies-sub-menu[data-v-5b8f8430] {\n  max-height: 500px;\n}\n.hidden-movies-sub-menu[data-v-5b8f8430] {\n  max-height: 0;\n}\n.sub-menu-level-one-item[data-v-5b8f8430] {\n  padding: 5px 2px 5px 1vw;\n}\n.sub-menu-level-one-item[data-v-5b8f8430]:hover {\n  background: black;\n}\n.sum-menu-list-element[data-v-5b8f8430]:last-child {\n  border-radius: 0 0 8px 8px;\n}\n.navbar-icon[data-v-5b8f8430] {\n  margin: 0 5px;\n}\n.navbar-icon-outer[data-v-5b8f8430] {\n  color: #eb091c;\n}\n.contenerized-navbar-element[data-v-5b8f8430] {\n  position: relative;\n  padding: 0;\n}\n.show-user-sidebar-button[data-v-5b8f8430] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.user-nick[data-v-5b8f8430] {\n  margin: 0 4px;\n}\n.user-avatar[data-v-5b8f8430] {\n  width: 1.8vw;\n  height: 1.8vw;\n  margin: 0 4px;\n  border-radius: 2px;\n  border-radius: 30%;\n}\n@media (max-width: 1200px) {\n.user-avatar[data-v-5b8f8430] {\n    width: 30px;\n    height: 30px;\n}\n}\n.navbar-link-main-manu[data-v-5b8f8430] {\n  color: white;\n  text-decoration: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\n.remember-me-checkbox[data-v-5b8f8430] {\n  color: white;\n}\n.phantom-text[data-v-5b8f8430] {\n  position: absolute;\n  top: -9999px;\n  left: 0;\n}\n.remember-me-description[data-v-5b8f8430] {\n  color: white;\n  font-size: 1.2vw;\n  font-family: \"Exo 2\", sans-serif;\n}\n@media (max-width: 1200px) {\n.remember-me-description[data-v-5b8f8430] {\n    font-size: 16px;\n}\n}\n.labeled-checkbox-container[data-v-5b8f8430] {\n  display: block;\n  width: 95%;\n  margin: 4px auto 1px auto;\n}\n.labeled-checkbox-description[data-v-5b8f8430] {\n  color: white;\n}\n.main-panel-label[data-v-5b8f8430] {\n  display: block;\n  text-align: center;\n  padding: 4px;\n  font-size: 1.3vw;\n  font-family: \"Exo 2\", sans-serif;\n  color: white;\n}\n@media (max-width: 1200px) {\n.main-panel-label[data-v-5b8f8430] {\n    font-size: 18px;\n}\n}\n.forgot-password-link[data-v-5b8f8430] {\n  display: block;\n  padding: 4px;\n  text-align: center;\n  color: white;\n  text-decoration: none;\n  font-size: 1.2vw;\n  font-family: \"Exo 2\", sans-serif;\n  border-radius: 0 0 7px 7px;\n  background: #242229;\n}\n@media (max-width: 1200px) {\n.forgot-password-link[data-v-5b8f8430] {\n    font-size: 17px;\n}\n}\n.forgot-password-link[data-v-5b8f8430]:hover {\n  text-decoration: underline;\n}\n.login-button-container[data-v-5b8f8430] {\n  height: 100%;\n}\n@media (max-width: 540px) {\n.navigation-element-main-has-content[data-v-5b8f8430] {\n    display: none;\n}\n}\n@media (min-width: 541px) {\n.show-content-side-bar-button[data-v-5b8f8430] {\n    display: none;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/empire_logo.vue?vue&type=style&index=0&id=e62713bc&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/empire_logo.vue?vue&type=style&index=0&id=e62713bc&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./empire_logo.vue?vue&type=style&index=0&id=e62713bc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/empire_logo.vue?vue&type=style&index=0&id=e62713bc&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/expect_circle.vue?vue&type=style&index=0&id=08c0afbc&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/expect_circle.vue?vue&type=style&index=0&id=08c0afbc&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./expect_circle.vue?vue&type=style&index=0&id=08c0afbc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/expect_circle.vue?vue&type=style&index=0&id=08c0afbc&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_confirm.vue?vue&type=style&index=0&id=5787bafe&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/icon_confirm.vue?vue&type=style&index=0&id=5787bafe&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./icon_confirm.vue?vue&type=style&index=0&id=5787bafe&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_confirm.vue?vue&type=style&index=0&id=5787bafe&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_stop.vue?vue&type=style&index=0&id=087d39b4&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/icon_stop.vue?vue&type=style&index=0&id=087d39b4&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./icon_stop.vue?vue&type=style&index=0&id=087d39b4&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_stop.vue?vue&type=style&index=0&id=087d39b4&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/button_close.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/button_close.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./button_close.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/button_close.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/date_picker.vue?vue&type=style&index=0&id=9960fe74&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/date_picker.vue?vue&type=style&index=0&id=9960fe74&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./date_picker.vue?vue&type=style&index=0&id=9960fe74&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/date_picker.vue?vue&type=style&index=0&id=9960fe74&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/described_select.vue?vue&type=style&index=0&id=4f72d48b&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/described_select.vue?vue&type=style&index=0&id=4f72d48b&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./described_select.vue?vue&type=style&index=0&id=4f72d48b&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/described_select.vue?vue&type=style&index=0&id=4f72d48b&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=style&index=0&id=233684f8&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=style&index=0&id=233684f8&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./labeled_checkbox.vue?vue&type=style&index=0&id=233684f8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=style&index=0&id=233684f8&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/phantom_button.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/phantom_button.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./phantom_button.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/phantom_button.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/submit_button.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/submit_button.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./submit_button.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/submit_button.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/text_input_combo.vue?vue&type=style&index=0&id=6c07a9d0&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/text_input_combo.vue?vue&type=style&index=0&id=6c07a9d0&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./text_input_combo.vue?vue&type=style&index=0&id=6c07a9d0&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/text_input_combo.vue?vue&type=style&index=0&id=6c07a9d0&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/textarea_combo.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/textarea_combo.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./textarea_combo.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/textarea_combo.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=style&index=0&id=a04b05d0&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=style&index=0&id=a04b05d0&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./authenticated_user_sidebar.vue?vue&type=style&index=0&id=a04b05d0&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=style&index=0&id=a04b05d0&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/content_sidebar.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/content_sidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./content_sidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/content_sidebar.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navbar.vue?vue&type=style&index=0&id=5b8f8430&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--16-2!./node_modules/sass-loader/dist/cjs.js??ref--16-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/navbar.vue?vue&type=style&index=0&id=5b8f8430&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./navbar.vue?vue&type=style&index=0&id=5b8f8430&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navbar.vue?vue&type=style&index=0&id=5b8f8430&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/svg-vue/dist/svg-vue.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/svg-vue/dist/svg-vue.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {var e=function(e,t,n,i,o,s,r,a,l,d){"boolean"!=typeof r&&(l=a,a=r,r=!1);var c,u="function"==typeof n?n.options:n;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),i&&(u._scopeId=i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):t&&(c=r?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),c)if(u.functional){var g=u.render;u.render=function(e,t){return c.call(t),g(e,t)}}else{var v=u.beforeCreate;u.beforeCreate=v?[].concat(v,c):[c]}return n}({render:function(){var e=this.$createElement;return(this._self._c||e)("svg",{attrs:{viewBox:this.svgViewBoxValues,xmlns:"http://www.w3.org/2000/svg"},domProps:{innerHTML:this._s(this.svgContent)}})},staticRenderFns:[]},void 0,{props:{icon:String},data:function(){return{svgString:__webpack_require__("./resources/svg sync recursive ^\\.\\/.*$")("./"+this.iconPath).default}},computed:{iconPath:{cache:!1,get:function(){return this.icon.replace(new RegExp(".".replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),"/")+".svg"}},svgViewBoxValues:function(){return this.svgString?(/viewBox="([^"]+)"/.exec(this.svgString)||"")[1]:null},svgContent:function(){return this.svgString?this.svgString.replace(/^<svg[^>]*>|<\/svg>$/g,""):null}}},void 0,!1,void 0,void 0,void 0);function t(n){t.installed||(t.installed=!0,n.component("SvgVue",e))}var n={install:t},i=null;"undefined"!=typeof window?i=window.Vue:"undefined"!=typeof global&&(i=global.Vue),i&&i.use(n),e.install=t;/* harmony default export */ __webpack_exports__["default"] = (e);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--21!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_property_decorator_1 = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
var translator_js_1 = __webpack_require__(/*! @jsmodules/translator.js */ "./resources/js/modules/translator.js");
var AuthenticatedUserSidebar = /** @class */ (function (_super) {
    __extends(AuthenticatedUserSidebar, _super);
    function AuthenticatedUserSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.translations = translator_js_1.default.getPackage('authenticated_user_sidebar');
        return _this;
    }
    AuthenticatedUserSidebar.prototype.logout = function () {
        document.getElementById('logoutForm').submit();
    };
    AuthenticatedUserSidebar.prototype.hideSideBar = function () {
        this.$root.$emit('hide-side-bar');
    };
    __decorate([
        vue_property_decorator_1.Prop({
            type: String,
            required: true,
        })
    ], AuthenticatedUserSidebar.prototype, "csrfToken", void 0);
    AuthenticatedUserSidebar = __decorate([
        vue_property_decorator_1.Component
    ], AuthenticatedUserSidebar);
    return AuthenticatedUserSidebar;
}(vue_property_decorator_1.Vue));
exports.default = AuthenticatedUserSidebar;


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/content_sidebar.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--21!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/content_sidebar.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_property_decorator_1 = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
var translator_js_1 = __webpack_require__(/*! @jsmodules/translator.js */ "./resources/js/modules/translator.js");
var ContentSideBar = /** @class */ (function (_super) {
    __extends(ContentSideBar, _super);
    function ContentSideBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.translations = translator_js_1.default.getPackage('content_sidebar');
        _this.moviesSubMenuIsVisible = false;
        return _this;
    }
    ContentSideBar.prototype.hideSideBar = function () {
        this.$root.$emit('hide-content-bar');
    };
    ContentSideBar.prototype.toggleMoviesMenu = function () {
        this.moviesSubMenuIsVisible = !this.moviesSubMenuIsVisible;
    };
    ContentSideBar = __decorate([
        vue_property_decorator_1.Component
    ], ContentSideBar);
    return ContentSideBar;
}(vue_property_decorator_1.Vue));
exports.default = ContentSideBar;


/***/ }),

/***/ "./node_modules/vue-class-component/dist/vue-class-component.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vue-class-component/dist/vue-class-component.esm.js ***!
  \**************************************************************************/
/*! exports provided: default, createDecorator, mixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDecorator", function() { return createDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return mixins; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      Object.defineProperty(_this, key, {
        get: function get() {
          return vm[key];
        },
        set: function set(value) {
          vm[key] = value;
        },
        configurable: true
      });
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (true) {
    if (!(Component.prototype instanceof vue__WEBPACK_IMPORTED_MODULE_0___default.a) && Object.keys(plainData).length > 0) {
      warn('Component class must inherit Vue or its descendant class ' + 'when class property is used.');
    }
  }

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof vue__WEBPACK_IMPORTED_MODULE_0___default.a ? superProto.constructor : vue__WEBPACK_IMPORTED_MODULE_0___default.a;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if ( true && reservedPropertyNames.indexOf(key) >= 0) {
      warn("Static property name '".concat(key, "' declared on class '").concat(Original.name, "' ") + 'conflicts with reserved property name of Vue internal. ' + 'It may cause unexpected behavior of the component. Consider renaming the property.');
    }

    Object.defineProperty(Extended, key, descriptor);
  });
}

function Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/* harmony default export */ __webpack_exports__["default"] = (Component);



/***/ }),

/***/ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-clickaway/dist/vue-clickaway.common.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
Vue = 'default' in Vue ? Vue['default'] : Vue;

var version = '2.2.2';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}



// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';

function bind(el, binding, vnode) {
  unbind(el);

  var vm = vnode.context;

  var callback = binding.value;
  if (typeof callback !== 'function') {
    if (true) {
      Vue.util.warn(
        'v-' + binding.name + '="' +
        binding.expression + '" expects a function value, ' +
        'got ' + callback
      );
    }
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: this test used to be just `el.containts`, but working with path is better,
    //        because it tests whether the element was there at the time of
    //        the click, not whether it is there now, that the event has arrived
    //        to the top.
    // @NOTE: `.path` is non-standard, the standard way is `.composedPath()`
    var path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener('click', el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}

var directive = {
  bind: bind,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind,
};

var mixin = {
  directives: { onClickaway: directive },
};

exports.version = version;
exports.directive = directive;
exports.mixin = mixin;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/empire_logo.vue?vue&type=template&id=e62713bc&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/empire_logo.vue?vue&type=template&id=e62713bc&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "logo-container", attrs: { "aria-hidden": "true" } },
    [
      _c("span", { staticClass: "fas fa-heartbeat decoration-heart" }),
      _vm._v(" "),
      _c("span", {
        staticClass: "logo-description logo-description-long",
        attrs: { "aria-hidden": "true" },
        domProps: { textContent: _vm._s(_vm.logoDescription) }
      }),
      _vm._v(" "),
      _c("span", {
        staticClass: "logo-description logo-description-short",
        attrs: { "aria-hidden": "true" },
        domProps: { textContent: _vm._s(_vm.logoDescriptionShort) }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/expect_circle.vue?vue&type=template&id=08c0afbc&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/expect_circle.vue?vue&type=template&id=08c0afbc&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "expect-circles-outer-container" }, [
    _vm.label
      ? _c("div", {
          staticClass: "expect-circles-label",
          domProps: { textContent: _vm._s(_vm.label) }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "expect-circles-inner-container" }, [
      _c("div", { staticClass: "flickering-circle circle-1" }),
      _vm._v(" "),
      _c("div", { staticClass: "flickering-circle circle-2" }),
      _vm._v(" "),
      _c("div", { staticClass: "flickering-circle circle-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "flickering-circle circle-4" }),
      _vm._v(" "),
      _c("div", { staticClass: "flickering-circle circle-5" }),
      _vm._v(" "),
      _c("div", { staticClass: "flickering-circle circle-6" }),
      _vm._v(" "),
      _c("div", { staticClass: "flickering-circle circle-7" }),
      _vm._v(" "),
      _c("div", { staticClass: "flickering-circle circle-8" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_confirm.vue?vue&type=template&id=5787bafe&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/icon_confirm.vue?vue&type=template&id=5787bafe&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "container",
      staticClass: "icon-container icon-correct-value",
      class: { "attached-icon": _vm.attachedIcon }
    },
    [_c("div", { staticClass: "confirmation-icon-bird" })]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_stop.vue?vue&type=template&id=087d39b4&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/decoration/icon_stop.vue?vue&type=template&id=087d39b4&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "container",
      staticClass: "icon-container icon-incorrect-value",
      class: { "attached-icon": _vm.attachedIcon }
    },
    [_c("div", { staticClass: "white-bar" })]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/button_close.vue?vue&type=template&id=363bbe34&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/button_close.vue?vue&type=template&id=363bbe34& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      ref: "container",
      staticClass: "button-close",
      attrs: { type: "button" }
    },
    [
      _c("div", { staticClass: "button-close__cross" }),
      _vm._v(" "),
      _c("span", {
        staticClass: "button-close__label",
        domProps: { textContent: _vm._s(_vm.label) }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/date_picker.vue?vue&type=template&id=9960fe74&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/date_picker.vue?vue&type=template&id=9960fe74&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "date-picker-container" }, [
    _c("input", {
      attrs: { type: "hidden", disabled: _vm.isDisabled, name: _vm.name },
      domProps: { value: _vm.dateString }
    }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "date-picker-description" },
      [
        _vm._t("default"),
        _vm._v(" "),
        _vm.isDisabled
          ? _c("span", { staticClass: "fas fa-lock disabled-input-icon" })
          : _vm._e()
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "date-picker-flex-container",
        class: {
          "incorrect-value": _vm.displayRedBorder,
          "correct-value": _vm.displayGreenBorder
        }
      },
      [
        _vm.iconErrorCanBeDisplayed
          ? _c("icon-stop", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.displayIconError,
                  expression: "displayIconError"
                }
              ],
              attrs: { "attached-icon": true }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.iconConfirmationCanBeDisplayed
          ? _c("icon-confirm", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.displayIconConfirmation,
                  expression: "displayIconConfirmation"
                }
              ],
              attrs: { "attached-icon": true }
            })
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "time-span-container" }, [
          _c(
            "label",
            {
              staticClass: "time-span-label",
              attrs: { for: "date-picker-day" }
            },
            [_vm._v(_vm._s(_vm.descriptions["day"]))]
          ),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.selectedDay,
                  expression: "selectedDay"
                }
              ],
              ref: "day_select",
              staticClass: "time-span-select",
              attrs: { disabled: _vm.isDisabled, id: "date-picker-day" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.selectedDay = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", { attrs: { value: "0" } }, [
                _vm._v("--" + _vm._s(_vm.descriptions["day"]) + "--")
              ]),
              _vm._v(" "),
              _vm._l(_vm.numberOfDaysInMonth, function(day) {
                return _c("option", { domProps: { value: day } }, [
                  _vm._v(_vm._s(day))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "time-span-container" }, [
          _c(
            "label",
            {
              staticClass: "time-span-label",
              attrs: { for: "date-picker-month" }
            },
            [_vm._v(_vm._s(_vm.descriptions["month"]))]
          ),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.selectedMonth,
                  expression: "selectedMonth"
                }
              ],
              staticClass: "time-span-select",
              attrs: { disabled: _vm.isDisabled, id: "date-picker-month" },
              on: {
                change: [
                  function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.selectedMonth = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  _vm.adjustDays
                ]
              }
            },
            [
              _c("option", { attrs: { value: "0" } }, [
                _vm._v("--" + _vm._s(_vm.descriptions["month"]) + "--")
              ]),
              _vm._v(" "),
              _vm._l(_vm.months, function(month, index) {
                return _c("option", { domProps: { value: index + 1 } }, [
                  _vm._v(_vm._s(month))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "time-span-container" }, [
          _c(
            "label",
            {
              staticClass: "time-span-label",
              attrs: { for: "date-picker-year" }
            },
            [_vm._v(_vm._s(_vm.descriptions["year"]))]
          ),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.selectedYear,
                  expression: "selectedYear"
                }
              ],
              staticClass: "time-span-select",
              attrs: { disabled: _vm.isDisabled, id: "date-picker-year" },
              on: {
                change: [
                  function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.selectedYear = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  _vm.adjustDays
                ]
              }
            },
            [
              _c("option", { attrs: { value: "0" } }, [
                _vm._v("--" + _vm._s(_vm.descriptions["year"]) + "--")
              ]),
              _vm._v(" "),
              _vm._l(_vm.timespan, function(n) {
                return _c(
                  "option",
                  { domProps: { value: _vm.lastYear - n + 1 } },
                  [_vm._v(_vm._s(_vm.lastYear - n + 1))]
                )
              })
            ],
            2
          )
        ])
      ],
      1
    ),
    _vm._v(" "),
    _vm.errorMessageBoxAvailable
      ? _c("div", {
          staticClass: "error-message-box",
          domProps: { textContent: _vm._s(_vm.errorMessage) }
        })
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/described_select.vue?vue&type=template&id=4f72d48b&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/described_select.vue?vue&type=template&id=4f72d48b&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "described-select-container" }, [
    _vm.errorMessageBoxAvailable
      ? _c("div", {
          staticClass: "error-message-box",
          domProps: { textContent: _vm._s(_vm.errorMessage) }
        })
      : _vm._e(),
    _vm._v(" "),
    _c(
      "label",
      {
        staticClass: "select-label",
        class: {
          "incorrect-value": _vm.displayRedBorder,
          "correct-value": _vm.displayGreenBorder
        }
      },
      [
        _vm.iconErrorCanBeDisplayed
          ? _c("icon-stop", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.displayIconError,
                  expression: "displayIconError"
                }
              ],
              attrs: { "attached-icon": true }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.iconConfirmationCanBeDisplayed
          ? _c("icon-confirm", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.displayIconConfirmation,
                  expression: "displayIconConfirmation"
                }
              ],
              attrs: { "attached-icon": true }
            })
          : _vm._e(),
        _vm._v(" "),
        _c(
          "span",
          { staticClass: "select-description" },
          [_vm._t("default")],
          2
        ),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.inputValue,
                expression: "inputValue"
              }
            ],
            ref: "select_value",
            staticClass: "described-select",
            attrs: { name: _vm.name },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.inputValue = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              }
            }
          },
          _vm._l(_vm.visibleOptionsList, function(option, index) {
            return _c(
              "option",
              { domProps: { value: _vm.optionsValuesInternal[index] } },
              [_vm._v(_vm._s(option))]
            )
          }),
          0
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=template&id=233684f8&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=template&id=233684f8&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "container", staticClass: "labeled-checkbox-container" },
    [
      _c("input", {
        ref: "checkbox",
        staticClass: "labeled-checkbox",
        attrs: { type: "checkbox", name: _vm.name, id: _vm.name },
        domProps: { checked: _vm.value, value: _vm.checkboxValue },
        on: { input: _vm.updateModel }
      }),
      _vm._v(" "),
      _c(
        "label",
        {
          ref: "label",
          staticClass: "labeled-checkbox-description",
          attrs: { for: _vm.name }
        },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/phantom_button.vue?vue&type=template&id=99cf0926&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/phantom_button.vue?vue&type=template&id=99cf0926& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    { ref: "button", staticClass: "phantom-button" },
    [
      _vm._t("default"),
      _vm._v(" "),
      _vm.label
        ? _c("span", {
            staticClass: "phantom-button-description",
            domProps: { textContent: _vm._s(_vm.label) }
          })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/submit_button.vue?vue&type=template&id=d0049200&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/submit_button.vue?vue&type=template&id=d0049200& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("input", {
    staticClass: "submit-button",
    attrs: { type: "submit" },
    domProps: { value: _vm.description }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/text_input_combo.vue?vue&type=template&id=6c07a9d0&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/text_input_combo.vue?vue&type=template&id=6c07a9d0&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "container", staticClass: "text-input-combo-container" },
    [
      _vm.errorMessageBoxAvailable
        ? _c("div", {
            staticClass: "error-message-box",
            domProps: { textContent: _vm._s(_vm.errorMessage) }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "label",
        {
          ref: "label",
          staticClass: "text-input-combo-value-label",
          class: {
            "incorrect-value": _vm.displayRedBorder,
            "correct-value": _vm.displayGreenBorder
          }
        },
        [
          _vm.isDisabled
            ? _c("span", { staticClass: "fas fa-lock disabled-input-icon" })
            : _vm._e(),
          _vm._v(" "),
          _vm.iconErrorCanBeDisplayed
            ? _c("icon-stop", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.displayIconError,
                    expression: "displayIconError"
                  }
                ],
                attrs: { "attached-icon": true }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.iconConfirmationCanBeDisplayed
            ? _c("icon-confirm", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.displayIconConfirmation,
                    expression: "displayIconConfirmation"
                  }
                ],
                attrs: { "attached-icon": true }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "text-input-description" },
            [_vm._t("default")],
            2
          ),
          _vm._v(" "),
          _vm.inputType === "checkbox"
            ? _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.inputValue,
                    expression: "inputValue"
                  }
                ],
                ref: "text_input",
                staticClass: "text-input-combo-value",
                attrs: {
                  disabled: _vm.isDisabled,
                  name: _vm.name,
                  required: _vm.inputIsRequired,
                  placeholder: _vm.placeholderText,
                  type: "checkbox"
                },
                domProps: {
                  checked: Array.isArray(_vm.inputValue)
                    ? _vm._i(_vm.inputValue, null) > -1
                    : _vm.inputValue
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.inputValue,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.inputValue = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.inputValue = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.inputValue = $$c
                    }
                  }
                }
              })
            : _vm.inputType === "radio"
            ? _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.inputValue,
                    expression: "inputValue"
                  }
                ],
                ref: "text_input",
                staticClass: "text-input-combo-value",
                attrs: {
                  disabled: _vm.isDisabled,
                  name: _vm.name,
                  required: _vm.inputIsRequired,
                  placeholder: _vm.placeholderText,
                  type: "radio"
                },
                domProps: { checked: _vm._q(_vm.inputValue, null) },
                on: {
                  change: function($event) {
                    _vm.inputValue = null
                  }
                }
              })
            : _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.inputValue,
                    expression: "inputValue"
                  }
                ],
                ref: "text_input",
                staticClass: "text-input-combo-value",
                attrs: {
                  disabled: _vm.isDisabled,
                  name: _vm.name,
                  required: _vm.inputIsRequired,
                  placeholder: _vm.placeholderText,
                  type: _vm.inputType
                },
                domProps: { value: _vm.inputValue },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.inputValue = $event.target.value
                  }
                }
              })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/textarea_combo.vue?vue&type=template&id=4d72a492&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form_controls/textarea_combo.vue?vue&type=template&id=4d72a492& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "textarea-combo-container" }, [
    _c(
      "label",
      {
        staticClass: "message-label",
        class: { "phantom-label": _vm.phantomLabel },
        attrs: { for: "textarea-combo-message" }
      },
      [_vm._t("default")],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "textarea-wrapper" },
      [
        _vm.iconErrorCanBeDisplayed
          ? _c("icon-stop", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.displayIconError,
                  expression: "displayIconError"
                }
              ],
              attrs: { "attached-icon": true }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.iconConfirmationCanBeDisplayed
          ? _c("icon-confirm", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.displayIconConfirmation,
                  expression: "displayIconConfirmation"
                }
              ],
              attrs: { "attached-icon": true }
            })
          : _vm._e(),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.inputValue,
              expression: "inputValue"
            }
          ],
          ref: "text_input",
          staticClass: "textarea-combo-message",
          class: {
            "incorrect-value": _vm.displayRedBorder,
            "correct-value": _vm.displayGreenBorder
          },
          attrs: {
            max: _vm.maxCharacters,
            placeholder: _vm.placeholderText,
            required: _vm.inputIsRequired,
            id: "textarea-combo-message",
            name: _vm.textareaName,
            rows: _vm.rowsNumber
          },
          domProps: { value: _vm.inputValue },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.inputValue = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm.errorMessageBoxAvailable
          ? _c("div", {
              staticClass: "error-message-box",
              domProps: { textContent: _vm._s(_vm.errorMessage) }
            })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=template&id=a04b05d0&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=template&id=a04b05d0&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    { staticClass: "fixed-sidebar authenticated-user-side-bar" },
    [
      _c("ul", { staticClass: "user-sidebar-list" }, [
        _c(
          "li",
          {
            staticClass: "authenticated-user-sidebar-list-element",
            attrs: { title: _vm.translations["hide_side_bar_title"] },
            on: { click: _vm.hideSideBar }
          },
          [
            _c("phantom-button", [
              _c("span", {
                staticClass: "fas fa-angle-up authenticated-user-sidebar-icon"
              }),
              _vm._v(" "),
              _c("span", {
                staticClass: "sidebar-item-description",
                domProps: {
                  textContent: _vm._s(
                    _vm.translations["hide_authenticated_user_sidebar_caption"]
                  )
                }
              })
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "authenticated-user-sidebar-list-element",
            attrs: {
              title: _vm.translations["show_user_profile_settings_title"]
            }
          },
          [
            _c(
              "a",
              {
                staticClass: "sub-menu-link",
                attrs: { href: "/profil/ustawienia" }
              },
              [
                _c("span", {
                  staticClass: "fas fa-cogs authenticated-user-sidebar-icon"
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "sidebar-item-description",
                  domProps: {
                    textContent: _vm._s(
                      _vm.translations["show_user_profile_settings_caption"]
                    )
                  }
                })
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("li", { staticClass: "authenticated-user-sidebar-list-element" }, [
          _c("span", {
            staticClass: "fas fa-envelope authenticated-user-sidebar-icon"
          }),
          _vm._v(" "),
          _c("span", {
            staticClass: "sidebar-item-description",
            domProps: {
              textContent: _vm._s(_vm.translations["mailbox_caption"])
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "authenticated-user-sidebar-list-element",
            attrs: { title: _vm.translations["favourites_title"] }
          },
          [
            _c("span", {
              staticClass: "fas fa-thumbs-up authenticated-user-sidebar-icon"
            }),
            _vm._v(" "),
            _c("span", {
              staticClass: "sidebar-item-description",
              domProps: {
                textContent: _vm._s(_vm.translations["favourites_caption"])
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("li", { staticClass: "authenticated-user-sidebar-list-element" }, [
          _c("span", {
            staticClass: "fas fa-user-friends authenticated-user-sidebar-icon"
          }),
          _vm._v(" "),
          _c("span", {
            staticClass: "sidebar-item-description",
            domProps: {
              textContent: _vm._s(_vm.translations["friends_caption"])
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "authenticated-user-sidebar-list-element",
            on: { click: _vm.logout }
          },
          [
            _c("phantom-button", [
              _c("span", {
                staticClass:
                  "fas fa-sign-out-alt authenticated-user-sidebar-icon"
              }),
              _vm._v(" "),
              _c("span", {
                staticClass: "sidebar-item-description",
                domProps: {
                  textContent: _vm._s(_vm.translations["logout_caption"])
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "logout-form",
                attrs: {
                  "aria-hidden": "true",
                  id: "logoutForm",
                  method: "POST",
                  action: "/wyloguj"
                }
              },
              [
                _c("input", {
                  attrs: { type: "hidden", name: "_token" },
                  domProps: { value: _vm.csrfToken }
                })
              ]
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/content_sidebar.vue?vue&type=template&id=02cdd0a6&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/content_sidebar.vue?vue&type=template&id=02cdd0a6& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "fixed-sidebar content-side-bar" }, [
    _c("ul", { staticClass: "user-sidebar-list" }, [
      _c(
        "li",
        {
          staticClass: "content-sidebar-list-element enlighted-list-content",
          attrs: { title: _vm.translations["hide_side_bar_title"] },
          on: { click: _vm.hideSideBar }
        },
        [
          _c("phantom-button", [
            _c("span", { staticClass: "fas fa-angle-up content-sidebar-icon" }),
            _vm._v(" "),
            _c("span", {
              staticClass: "sidebar-item-description",
              domProps: {
                textContent: _vm._s(_vm.translations["hide_side_bar_caption"])
              }
            })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("li", { staticClass: "content-sidebar-list-element" }, [
        _c(
          "span",
          {
            staticClass: "enlighted-list-content",
            on: { click: _vm.toggleMoviesMenu }
          },
          [
            _c("span", {
              staticClass: "fas content-sidebar-icon",
              class: {
                "fa-film": !_vm.moviesSubMenuIsVisible,
                "fa-angle-up": _vm.moviesSubMenuIsVisible
              }
            }),
            _vm._v(" "),
            _c("span", {
              staticClass: "sidebar-item-description",
              domProps: {
                textContent: _vm._s(_vm.translations["movies_caption"])
              }
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "ul",
          {
            staticClass: "nested-user-sidebar-list",
            class: {
              "visible-sidebar-menu": _vm.moviesSubMenuIsVisible,
              "hidden-sidebar-menu": !_vm.moviesSubMenuIsVisible
            },
            attrs: { "aria-hidden": !_vm.moviesSubMenuIsVisible }
          },
          [
            _c(
              "li",
              {
                staticClass:
                  "content-sidebar-list-element enlighted-list-content",
                attrs: { title: _vm.translations["movie_categories_title"] }
              },
              [
                _c("span", {
                  staticClass: "fas fa-images content-sidebar-icon-nested"
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "sidebar-item-description",
                  domProps: {
                    textContent: _vm._s(
                      _vm.translations["movie_categories_label"]
                    )
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass:
                  "content-sidebar-list-element enlighted-list-content",
                attrs: { title: _vm.translations["latest_porn_movies_title"] }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "sub-menu-link",
                    attrs: { href: "/filmy/najnowsze/strona/1" }
                  },
                  [
                    _c("span", {
                      staticClass:
                        "fas fa-folder-plus content-sidebar-icon-nested"
                    }),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "sidebar-item-description",
                      domProps: {
                        textContent: _vm._s(
                          _vm.translations["latest_porn_movies_caption"]
                        )
                      }
                    })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass:
                  "content-sidebar-list-element enlighted-list-content",
                attrs: {
                  title: _vm.translations["the_most_popular_porn_movies_title"]
                }
              },
              [
                _c("span", {
                  staticClass: "fas content-sidebar-icon-nested fa-grin"
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "sidebar-item-description",
                  domProps: {
                    textContent: _vm._s(
                      _vm.translations["the_most_popular_porn_movies_caption"]
                    )
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass:
                  "content-sidebar-list-element enlighted-list-content",
                attrs: { title: _vm.translations["advanced_search_title"] }
              },
              [
                _c("span", {
                  staticClass: "fas content-sidebar-icon-nested fa-search"
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "sidebar-item-description",
                  domProps: {
                    textContent: _vm._s(
                      _vm.translations["advanced_search_caption"]
                    )
                  }
                })
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "content-sidebar-list-element enlighted-list-content" },
        [
          _c(
            "a",
            {
              staticClass: "sub-menu-link",
              attrs: { href: "/gwiazdy-porno/lista" }
            },
            [
              _c("span", { staticClass: "fas fa-star content-sidebar-icon" }),
              _vm._v(" "),
              _c("span", {
                staticClass: "sidebar-item-description",
                domProps: { textContent: _vm._s(_vm.translations["pornstars"]) }
              })
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navbar.vue?vue&type=template&id=5b8f8430&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/navbar.vue?vue&type=template&id=5b8f8430&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "nav",
        {
          directives: [
            {
              name: "on-clickaway",
              rawName: "v-on-clickaway",
              value: _vm.handleClickoutsideNavbar,
              expression: "handleClickoutsideNavbar"
            }
          ],
          staticClass: "page-navigation"
        },
        [
          _c("ul", { staticClass: "navigation-list" }, [
            _c(
              "li",
              {
                staticClass:
                  "navigation-element-main contenerized-navbar-element",
                attrs: { "aria-hidden": !_vm.contentSideBarIsVisible },
                on: { click: _vm.showContentSideBar }
              },
              [
                _c(
                  "button",
                  {
                    staticClass:
                      "show-sidebar-button show-content-side-bar-button",
                    class: {
                      "visible-sidebar-button": !_vm.contentSideBarIsVisible
                    },
                    attrs: { title: "rozwiń menu boczne" }
                  },
                  [
                    _c("span", {
                      staticClass:
                        "fas fa-angle-down show-sidebar-button-decoration show-sidebar-button-element"
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "phantom-text" }, [
                      _vm._v("rozwiń menu boczne")
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("li", { staticClass: "navigation-element-main" }, [
              _c(
                "a",
                {
                  staticClass: "logo-link",
                  attrs: { title: "Strona główna", href: "/" }
                },
                [_c("empire-logo")],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass:
                  "navigation-element-main navigation-element-main-has-content",
                on: {
                  click: _vm.togglePornSubMenu,
                  mouseenter: _vm.showPornSubMenu
                }
              },
              [
                _c("span", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.pornSubMenuIsVisible,
                      expression: "!pornSubMenuIsVisible"
                    }
                  ],
                  staticClass:
                    "fas navbar-icon navbar-icon-outer fa-camera-retro"
                }),
                _vm._v(" "),
                _c("span", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.pornSubMenuIsVisible,
                      expression: "pornSubMenuIsVisible"
                    }
                  ],
                  staticClass: "fas navbar-icon navbar-icon-outer fa-arrow-up"
                }),
                _vm._v(" "),
                _c("phantom-button", [
                  _vm._v("\r\n                 Porno\r\n\t\t\t   ")
                ])
              ],
              1
            ),
            _vm._v(" "),
            !_vm.userIsAuthenticated
              ? _c(
                  "li",
                  {
                    staticClass: "navigation-element-main register-selection "
                  },
                  [_vm._m(0)]
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.userIsAuthenticated
              ? _c(
                  "li",
                  {
                    staticClass: "navigation-element-main",
                    on: { click: _vm.toggleLoginPanel }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "login-button-container" },
                      [
                        _c("phantom-button", [
                          _c("span", {
                            staticClass:
                              "fas navbar-icon navbar-icon-outer fa-sign-in-alt"
                          }),
                          _vm._v("\r\n\t\t\t       Loguj\r\n\t\t\t\t")
                        ])
                      ],
                      1
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.userIsAuthenticated
              ? _c(
                  "li",
                  {
                    staticClass: "navigation-element-main navbar-element-user",
                    on: { click: _vm.toggleAuthenticatedUserSideBar }
                  },
                  [
                    _c(
                      "phantom-button",
                      {
                        staticClass: "show-user-sidebar-button",
                        attrs: { label: "rozwiń menu użytkownika" }
                      },
                      [
                        !_vm.avatarFileName
                          ? _c("span", {
                              staticClass:
                                "fas navbar-icon navbar-icon-outer fa-user"
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "user-nick",
                          domProps: { textContent: _vm._s(_vm.userName) }
                        }),
                        _vm._v(" "),
                        _vm.avatarFileName
                          ? _c("img", {
                              staticClass: "user-avatar",
                              attrs: {
                                src: _vm.avatarFilePath,
                                alt: _vm.userAvatarDescription
                              }
                            })
                          : _vm._e()
                      ]
                    )
                  ],
                  1
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "ul",
            {
              staticClass: "sub-menu-list porn-sub-menu-list",
              class: {
                "visible-sub-menu": _vm.pornSubMenuIsVisible,
                "hidden-sub-menu": !_vm.pornSubMenuIsVisible
              },
              attrs: { "aria-hidden": !_vm.pornSubMenuIsVisible }
            },
            [
              _c(
                "li",
                {
                  staticClass: "sub-menu-list-element intendation-first-level"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "sub-menu-level-one-item",
                      on: { click: _vm.toggleMoviesSubMenu }
                    },
                    [
                      _c("span", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.moviesSubMenuIsVisible,
                            expression: "!moviesSubMenuIsVisible"
                          }
                        ],
                        staticClass: "fas navbar-icon navbar-icon-outer fa-film"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.moviesSubMenuIsVisible,
                            expression: "moviesSubMenuIsVisible"
                          }
                        ],
                        staticClass:
                          "fas navbar-icon navbar-icon-outer fa-arrow-up"
                      }),
                      _vm._v(" "),
                      _c("phantom-button", [
                        _vm._v("\r\n                  Filmy\r\n\t\t\t\t")
                      ])
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c("li", [
                _c(
                  "ul",
                  {
                    staticClass: "sub-menu-list-nested-level-two",
                    class: {
                      "visible-movies-sub-menu": _vm.moviesSubMenuIsVisible,
                      "hidden-movies-sub-menu": !_vm.moviesSubMenuIsVisible
                    },
                    attrs: { "aria-hidden": !_vm.moviesSubMenuIsVisible }
                  },
                  [
                    _c(
                      "li",
                      {
                        staticClass:
                          "sub-menu-list-element-intendation-second-level",
                        on: { click: _vm.showCategories }
                      },
                      [
                        _c("span", {
                          staticClass:
                            "fas navbar-icon navbar-icon-second-level fa-images"
                        }),
                        _vm._v("\r\n\t\t\t\t\t\tKategorie\r\n\t\t\t\t\t")
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3)
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(4)
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.userIsAuthenticated
        ? _c("authenticated-user-sidebar", {
            class: {
              "visible-sidebar": _vm.authenticatedUserSideBarIsVisible,
              "hidden-sidebar": !_vm.authenticatedUserSideBarIsVisible
            },
            attrs: {
              "aria-hidden": !_vm.authenticatedUserSideBarIsVisible,
              "csrf-token": _vm.csrfToken
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("content-sidebar", {
        class: {
          "visible-sidebar": _vm.contentSideBarIsVisible,
          "hidden-sidebar": !_vm.contentSideBarIsVisible
        }
      }),
      _vm._v(" "),
      !_vm.userIsAuthenticated
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loginPanelIsVisible,
                  expression: "loginPanelIsVisible"
                }
              ],
              staticClass: "login-form-container"
            },
            [
              _c(
                "form",
                {
                  staticClass: "login-form",
                  class: { "visible-login-form": _vm.animatePanel },
                  attrs: { action: "/login", method: "POST", id: "login-form" }
                },
                [
                  _c(
                    "header",
                    { staticClass: "login-panel-toolbar" },
                    [
                      _c("span", { staticClass: "login-info" }, [
                        _vm._v("Zaloguj się do Sex-Imperium")
                      ]),
                      _vm._v(" "),
                      _c("button-close", {
                        attrs: {
                          title: "Zamknij okno logowania",
                          "aria-label": "Zamknij okno logowania"
                        },
                        nativeOn: {
                          click: function($event) {
                            return _vm.toggleLoginPanel($event)
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "hidden", name: "_token" },
                    domProps: { value: _vm.csrfToken }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "main-panel-label",
                      attrs: { for: "login" }
                    },
                    [_vm._v("Email lub login")]
                  ),
                  _vm._v(" "),
                  _c("text-input-combo", {
                    attrs: {
                      "input-is-required": true,
                      "input-id": "login",
                      inputType: "text",
                      name: "login-or-email"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "main-panel-label",
                      attrs: { for: "password" }
                    },
                    [_vm._v("Hasło")]
                  ),
                  _vm._v(" "),
                  _c("text-input-combo", {
                    attrs: {
                      "input-is-required": true,
                      "input-id": "password",
                      inputType: "password",
                      name: "password"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "labeled-checkbox",
                    {
                      staticClass: "remember-me-checkbox",
                      attrs: { name: "remember" }
                    },
                    [_vm._v("\r\n\t\t\t\t\t\tZapamiętaj mnie\r\n\t\t\t\t\t")]
                  ),
                  _vm._v(" "),
                  _c("submit-button", [_vm._v("Zaloguj")]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "forgot-password-link",
                      attrs: { href: "/haslo/resetuj/wyslij-link" }
                    },
                    [_vm._v("Zapomniałem hasła")]
                  )
                ],
                1
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "navbar-link-main-manu", attrs: { href: "/rejestruj" } },
      [
        _c("span", {
          staticClass: "fas navbar-icon navbar-icon-outer fa-user-plus"
        }),
        _vm._v(" \r\n\t\t\t  Rejestruj\r\n\t\t\t")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      { staticClass: "sub-menu-list-element-intendation-second-level" },
      [
        _c(
          "a",
          {
            staticClass: "navbar-link-main-manu",
            attrs: { href: "/filmy/najnowsze/strona/1" }
          },
          [
            _c("span", {
              staticClass:
                "fas navbar-icon navbar-icon-second-level fa-folder-plus"
            }),
            _vm._v("\r\n\t\t\t\t\t\t  Najnowsze\r\n\t\t\t\t\t\t")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      { staticClass: "sub-menu-list-element-intendation-second-level" },
      [
        _c("span", {
          staticClass: "fas navbar-icon navbar-icon-second-level fa-grin"
        }),
        _vm._v("\r\n\t\t\t\t\t\tNajpopularniejsze\r\n\t\t\t\t\t")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      { staticClass: "sub-menu-list-element-intendation-second-level" },
      [
        _c(
          "a",
          {
            staticClass: "navbar-link-main-manu",
            attrs: { href: "/filmy/wyszukiwanie-zaawansowane" }
          },
          [
            _c("span", {
              staticClass: "fas navbar-icon navbar-icon-second-level fa-search"
            }),
            _vm._v("\r\n\t\t\t\t\t\t  Szukanie zaawansowane\r\n\t\t\t\t\t\t")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      { staticClass: "sub-menu-list-element intendation-first-level" },
      [
        _c("div", { staticClass: "sub-menu-level-one-item" }, [
          _c(
            "a",
            {
              staticClass: "navbar-link-main-manu",
              attrs: { href: "/gwiazdy-porno/lista" }
            },
            [
              _c("span", {
                staticClass: "fas navbar-icon navbar-icon-outer fa-star"
              }),
              _vm._v("\r\n\t\t\t\t\t    Gwiazdy porno\r\n\t\t\t\t\t  ")
            ]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/vue-property-decorator.js ***!
  \***************************************************************************/
/*! exports provided: Component, Vue, Mixins, Inject, InjectReactive, Provide, ProvideReactive, Model, Prop, PropSync, Watch, Emit, Ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inject", function() { return Inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectReactive", function() { return InjectReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provide", function() { return Provide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideReactive", function() { return ProvideReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return Prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropSync", function() { return PropSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Watch", function() { return Watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emit", function() { return Emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ref", function() { return Ref; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Vue", function() { return vue__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-class-component */ "./node_modules/vue-class-component/dist/vue-class-component.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mixins", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_1__["mixins"]; });

/** vue-property-decorator verson 9.0.0 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>




/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}
function produceProvide(original) {
    var provide = function () {
        var _this = this;
        var rv = typeof original === 'function' ? original.call(this) : original;
        rv = Object.create(rv || null);
        // set reactive services (propagates previous services if necessary)
        rv[reactiveInjectKey] = this[reactiveInjectKey] || {};
        for (var i in provide.managed) {
            rv[provide.managed[i]] = this[i];
        }
        var _loop_1 = function (i) {
            rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
            Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                enumerable: true,
                get: function () { return _this[i]; },
            });
        };
        var this_1 = this;
        for (var i in provide.managedReactive) {
            _loop_1(i);
        }
        return rv;
    };
    provide.managed = {};
    provide.managedReactive = {};
    return provide;
}
function needToProduceProvide(original) {
    return (typeof original !== 'function' ||
        (!original.managed && !original.managedReactive));
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        // inject parent reactive services (if any)
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject = componentOptions.inject || {};
            componentOptions.inject[reactiveInjectKey] = {
                from: reactiveInjectKey,
                default: {},
            };
        }
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managedReactive[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    // @ts-ignore
    return function (target, key) {
        applyMetadata(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, propertyKey, descriptor) {
        var key = hyphenate(propertyKey);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                var emitName = event || key;
                if (returnValue === undefined) {
                    if (args.length === 0) {
                        _this.$emit(emitName);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, [emitName].concat(args));
                    }
                }
                else {
                    if (args.length === 0) {
                        _this.$emit(emitName, returnValue);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, returnValue, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, [emitName, returnValue].concat(args));
                    }
                }
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(emit);
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.common.dev.js":
/*!*************************************************!*\
  !*** ./node_modules/vue/dist/vue.common.dev.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (!config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (!isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (!config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (!(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.12';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (!stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if (options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (i > pos || !tagName &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /\s+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anything as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if (options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if (name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (el.children.length !== 1 || ast.type !== 1) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (name === 'v-slot' || name[0] === '#') {
            checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stripped = exp.replace(stripStringRE, '');
  var keywordMatch = stripped.match(unaryOperatorsRE);
  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

function checkFunctionParameterExpression (exp, text, warn, range) {
  try {
    new Function(exp, '');
  } catch (e) {
    warn(
      "invalid function parameter expression: " + (e.message) + " in\n\n" +
      "    " + exp + "\n\n" +
      "  Raw expression: " + (text.trim()) + "\n",
      range
    );
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (!template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./vue.common.dev.js */ "./node_modules/vue/dist/vue.common.dev.js")
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/auth/register.js":
/*!***************************************!*\
  !*** ./resources/js/auth/register.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsmodules_basic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsmodules/basic.js */ "./resources/js/modules/basic.js");
/* harmony import */ var _jscomponents_form_controls_textarea_combo_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jscomponents/form_controls/textarea_combo.vue */ "./resources/js/components/form_controls/textarea_combo.vue");
/* harmony import */ var _jscomponents_decoration_icon_stop_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jscomponents/decoration/icon_stop.vue */ "./resources/js/components/decoration/icon_stop.vue");
/* harmony import */ var _jscomponents_decoration_icon_confirm_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jscomponents/decoration/icon_confirm.vue */ "./resources/js/components/decoration/icon_confirm.vue");
/* harmony import */ var _jscomponents_decoration_expect_circle_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jscomponents/decoration/expect_circle.vue */ "./resources/js/components/decoration/expect_circle.vue");
/* harmony import */ var _jscomponents_form_controls_described_select_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jscomponents/form_controls/described_select.vue */ "./resources/js/components/form_controls/described_select.vue");
/* harmony import */ var _jscomponents_form_controls_date_picker_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @jscomponents/form_controls/date_picker.vue */ "./resources/js/components/form_controls/date_picker.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var Vue = _jsmodules_basic_js__WEBPACK_IMPORTED_MODULE_1__["default"].build();
Vue.component('textarea-combo', _jscomponents_form_controls_textarea_combo_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
Vue.component('icon-stop', _jscomponents_decoration_icon_stop_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
Vue.component('icon-confirm', _jscomponents_decoration_icon_confirm_vue__WEBPACK_IMPORTED_MODULE_4__["default"]);
Vue.component('expect-circle', _jscomponents_decoration_expect_circle_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
Vue.component('described-select', _jscomponents_form_controls_described_select_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);
Vue.component('date-picker', _jscomponents_form_controls_date_picker_vue__WEBPACK_IMPORTED_MODULE_7__["default"]);
new Vue({
  el: '#app',
  data: {
    verificationInProgress: false
  },
  methods: {
    validateLogin: function validateLogin(sender) {
      function checkIfLoginExists(_x) {
        return _checkIfLoginExists.apply(this, arguments);
      }

      function _checkIfLoginExists() {
        _checkIfLoginExists = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(login) {
          var response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  login = encodeURI(login);
                  _context.prev = 1;
                  _context.next = 4;
                  return fetch("verify-login/".concat(login));

                case 4:
                  response = _context.sent;
                  _context.t0 = response.status;
                  _context.next = _context.t0 === 200 ? 8 : _context.t0 === 400 ? 10 : _context.t0 === 429 ? 12 : 14;
                  break;

                case 8:
                  sender.showValueIsOK();
                  return _context.abrupt("break", 16);

                case 10:
                  throw "login_has_already_been_taken";

                case 12:
                  throw "to_many_attemts_during_one_minute";

                case 14:
                  throw "undefined_error";

                case 16:
                  _context.next = 21;
                  break;

                case 18:
                  _context.prev = 18;
                  _context.t1 = _context["catch"](1);
                  sender.showError(_context.t1);

                case 21:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[1, 18]]);
        }));
        return _checkIfLoginExists.apply(this, arguments);
      }

      var login = sender.inputValue;

      if (!login) {
        sender.resetValidation();
        return;
      }

      this.$root.$emit('awaitingResponse');

      try {
        if (login.length < 3) {
          throw "login_contains_less_then_3_characters";
        }

        if (login.length > 20) {
          throw "login_contains_more_then_20_characters";
        }

        checkIfLoginExists.call(this, login);
      } catch (error) {
        sender.showError(error);
      } finally {
        this.$root.$emit('responseReceived');
      }
    },
    validateEmail: function validateEmail(sender) {
      function checkIfEmailExists(_x2) {
        return _checkIfEmailExists.apply(this, arguments);
      }

      function _checkIfEmailExists() {
        _checkIfEmailExists = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email) {
          var response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  email = encodeURI(email);
                  _context2.prev = 1;
                  _context2.next = 4;
                  return fetch("/verify-email/".concat(email));

                case 4:
                  response = _context2.sent;
                  _context2.t0 = response.status;
                  _context2.next = _context2.t0 === 200 ? 8 : _context2.t0 === 400 ? 10 : _context2.t0 === 429 ? 12 : 14;
                  break;

                case 8:
                  sender.showValueIsOK();
                  return _context2.abrupt("break", 16);

                case 10:
                  throw "email_has_already_been_taken";

                case 12:
                  throw "to_many_attemts_during_one_minute";

                case 14:
                  throw "undefined_error";

                case 16:
                  _context2.next = 21;
                  break;

                case 18:
                  _context2.prev = 18;
                  _context2.t1 = _context2["catch"](1);
                  sender.showError(_context2.t1);

                case 21:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[1, 18]]);
        }));
        return _checkIfEmailExists.apply(this, arguments);
      }

      function emailhasCorrectFormat(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }

      var email = sender.inputValue;

      if (!email) {
        sender.resetValidation();
        return;
      }

      try {
        if (!emailhasCorrectFormat(email)) {
          throw "email_seems_to_be_incorrect";
        }

        this.$root.$emit('awaitingResponse');
        checkIfEmailExists.call(this, email);
      } catch (error) {
        sender.showError(error);
      } finally {
        this.$root.$emit('responseReceived');
      }
    },
    validatePassword: function validatePassword(sender) {
      try {
        var password = sender.inputValue;

        if (!password) {
          sender.resetValidation();
          return;
        }

        if (password.length < 3) {
          throw "password_has_less_then_3_characters";
        }

        if (password.length > 20) {
          throw "password_has_more_then_20_characters";
        }

        sender.showValueIsOK();
      } catch (error) {
        sender.showError(error);
      }
    },
    validateSelect: function validateSelect(sender) {
      var userType = sender.inputValue;

      if (userType === 'not-selected') {
        sender.showError("you_have_to_choose_one_option");
      } else {
        sender.showValueIsOK();
      }
    },
    checkIfUserIsAdault: function checkIfUserIsAdault(sender) {
      var dateNow = new Date();
      var date18yearsAgo = dateNow.setFullYear(dateNow.getFullYear() - 18);
      var userSelectedDate = new Date(sender.selectedYear, sender.selectedMonth - 1, sender.selectedDay);

      if (userSelectedDate <= date18yearsAgo) {
        sender.showValueIsOK();
      } else {
        sender.showError("you_are_under_18");
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('awaitingResponse', function () {
      return _this.verificationInProgress = true;
    });
    this.$root.$on('responseReceived', function () {
      return _this.verificationInProgress = false;
    });
  }
});

/***/ }),

/***/ "./resources/js/components/decoration/empire_logo.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/decoration/empire_logo.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _empire_logo_vue_vue_type_template_id_e62713bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empire_logo.vue?vue&type=template&id=e62713bc&scoped=true& */ "./resources/js/components/decoration/empire_logo.vue?vue&type=template&id=e62713bc&scoped=true&");
/* harmony import */ var _empire_logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empire_logo.vue?vue&type=script&lang=js& */ "./resources/js/components/decoration/empire_logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _empire_logo_vue_vue_type_style_index_0_id_e62713bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empire_logo.vue?vue&type=style&index=0&id=e62713bc&lang=scss&scoped=true& */ "./resources/js/components/decoration/empire_logo.vue?vue&type=style&index=0&id=e62713bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _empire_logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _empire_logo_vue_vue_type_template_id_e62713bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _empire_logo_vue_vue_type_template_id_e62713bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e62713bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/decoration/empire_logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/decoration/empire_logo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/decoration/empire_logo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_empire_logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./empire_logo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/empire_logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_empire_logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/decoration/empire_logo.vue?vue&type=style&index=0&id=e62713bc&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/decoration/empire_logo.vue?vue&type=style&index=0&id=e62713bc&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_empire_logo_vue_vue_type_style_index_0_id_e62713bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./empire_logo.vue?vue&type=style&index=0&id=e62713bc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/empire_logo.vue?vue&type=style&index=0&id=e62713bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_empire_logo_vue_vue_type_style_index_0_id_e62713bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_empire_logo_vue_vue_type_style_index_0_id_e62713bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_empire_logo_vue_vue_type_style_index_0_id_e62713bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_empire_logo_vue_vue_type_style_index_0_id_e62713bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_empire_logo_vue_vue_type_style_index_0_id_e62713bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/decoration/empire_logo.vue?vue&type=template&id=e62713bc&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/decoration/empire_logo.vue?vue&type=template&id=e62713bc&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_empire_logo_vue_vue_type_template_id_e62713bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./empire_logo.vue?vue&type=template&id=e62713bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/empire_logo.vue?vue&type=template&id=e62713bc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_empire_logo_vue_vue_type_template_id_e62713bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_empire_logo_vue_vue_type_template_id_e62713bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/decoration/expect_circle.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/decoration/expect_circle.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expect_circle_vue_vue_type_template_id_08c0afbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expect_circle.vue?vue&type=template&id=08c0afbc&scoped=true& */ "./resources/js/components/decoration/expect_circle.vue?vue&type=template&id=08c0afbc&scoped=true&");
/* harmony import */ var _expect_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expect_circle.vue?vue&type=script&lang=js& */ "./resources/js/components/decoration/expect_circle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _expect_circle_vue_vue_type_style_index_0_id_08c0afbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expect_circle.vue?vue&type=style&index=0&id=08c0afbc&lang=scss&scoped=true& */ "./resources/js/components/decoration/expect_circle.vue?vue&type=style&index=0&id=08c0afbc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _expect_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _expect_circle_vue_vue_type_template_id_08c0afbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _expect_circle_vue_vue_type_template_id_08c0afbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "08c0afbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/decoration/expect_circle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/decoration/expect_circle.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/decoration/expect_circle.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_expect_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./expect_circle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/expect_circle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_expect_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/decoration/expect_circle.vue?vue&type=style&index=0&id=08c0afbc&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/decoration/expect_circle.vue?vue&type=style&index=0&id=08c0afbc&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_expect_circle_vue_vue_type_style_index_0_id_08c0afbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./expect_circle.vue?vue&type=style&index=0&id=08c0afbc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/expect_circle.vue?vue&type=style&index=0&id=08c0afbc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_expect_circle_vue_vue_type_style_index_0_id_08c0afbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_expect_circle_vue_vue_type_style_index_0_id_08c0afbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_expect_circle_vue_vue_type_style_index_0_id_08c0afbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_expect_circle_vue_vue_type_style_index_0_id_08c0afbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_expect_circle_vue_vue_type_style_index_0_id_08c0afbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/decoration/expect_circle.vue?vue&type=template&id=08c0afbc&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/decoration/expect_circle.vue?vue&type=template&id=08c0afbc&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_expect_circle_vue_vue_type_template_id_08c0afbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./expect_circle.vue?vue&type=template&id=08c0afbc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/expect_circle.vue?vue&type=template&id=08c0afbc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_expect_circle_vue_vue_type_template_id_08c0afbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_expect_circle_vue_vue_type_template_id_08c0afbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/decoration/icon_confirm.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/decoration/icon_confirm.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_confirm_vue_vue_type_template_id_5787bafe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon_confirm.vue?vue&type=template&id=5787bafe&scoped=true& */ "./resources/js/components/decoration/icon_confirm.vue?vue&type=template&id=5787bafe&scoped=true&");
/* harmony import */ var _icon_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon_confirm.vue?vue&type=script&lang=js& */ "./resources/js/components/decoration/icon_confirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _icon_confirm_vue_vue_type_style_index_0_id_5787bafe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon_confirm.vue?vue&type=style&index=0&id=5787bafe&lang=scss&scoped=true& */ "./resources/js/components/decoration/icon_confirm.vue?vue&type=style&index=0&id=5787bafe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _icon_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _icon_confirm_vue_vue_type_template_id_5787bafe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _icon_confirm_vue_vue_type_template_id_5787bafe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5787bafe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/decoration/icon_confirm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/decoration/icon_confirm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/decoration/icon_confirm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./icon_confirm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_confirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/decoration/icon_confirm.vue?vue&type=style&index=0&id=5787bafe&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/decoration/icon_confirm.vue?vue&type=style&index=0&id=5787bafe&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_confirm_vue_vue_type_style_index_0_id_5787bafe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./icon_confirm.vue?vue&type=style&index=0&id=5787bafe&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_confirm.vue?vue&type=style&index=0&id=5787bafe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_confirm_vue_vue_type_style_index_0_id_5787bafe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_confirm_vue_vue_type_style_index_0_id_5787bafe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_confirm_vue_vue_type_style_index_0_id_5787bafe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_confirm_vue_vue_type_style_index_0_id_5787bafe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_confirm_vue_vue_type_style_index_0_id_5787bafe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/decoration/icon_confirm.vue?vue&type=template&id=5787bafe&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/decoration/icon_confirm.vue?vue&type=template&id=5787bafe&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_confirm_vue_vue_type_template_id_5787bafe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./icon_confirm.vue?vue&type=template&id=5787bafe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_confirm.vue?vue&type=template&id=5787bafe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_confirm_vue_vue_type_template_id_5787bafe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_confirm_vue_vue_type_template_id_5787bafe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/decoration/icon_stop.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/decoration/icon_stop.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_stop_vue_vue_type_template_id_087d39b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon_stop.vue?vue&type=template&id=087d39b4&scoped=true& */ "./resources/js/components/decoration/icon_stop.vue?vue&type=template&id=087d39b4&scoped=true&");
/* harmony import */ var _icon_stop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon_stop.vue?vue&type=script&lang=js& */ "./resources/js/components/decoration/icon_stop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _icon_stop_vue_vue_type_style_index_0_id_087d39b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon_stop.vue?vue&type=style&index=0&id=087d39b4&lang=scss&scoped=true& */ "./resources/js/components/decoration/icon_stop.vue?vue&type=style&index=0&id=087d39b4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _icon_stop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _icon_stop_vue_vue_type_template_id_087d39b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _icon_stop_vue_vue_type_template_id_087d39b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "087d39b4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/decoration/icon_stop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/decoration/icon_stop.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/decoration/icon_stop.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_stop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./icon_stop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_stop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_stop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/decoration/icon_stop.vue?vue&type=style&index=0&id=087d39b4&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/decoration/icon_stop.vue?vue&type=style&index=0&id=087d39b4&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_stop_vue_vue_type_style_index_0_id_087d39b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./icon_stop.vue?vue&type=style&index=0&id=087d39b4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_stop.vue?vue&type=style&index=0&id=087d39b4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_stop_vue_vue_type_style_index_0_id_087d39b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_stop_vue_vue_type_style_index_0_id_087d39b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_stop_vue_vue_type_style_index_0_id_087d39b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_stop_vue_vue_type_style_index_0_id_087d39b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_stop_vue_vue_type_style_index_0_id_087d39b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/decoration/icon_stop.vue?vue&type=template&id=087d39b4&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/decoration/icon_stop.vue?vue&type=template&id=087d39b4&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_stop_vue_vue_type_template_id_087d39b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./icon_stop.vue?vue&type=template&id=087d39b4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/decoration/icon_stop.vue?vue&type=template&id=087d39b4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_stop_vue_vue_type_template_id_087d39b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_stop_vue_vue_type_template_id_087d39b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/form_controls/button_close.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/form_controls/button_close.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_close_vue_vue_type_template_id_363bbe34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button_close.vue?vue&type=template&id=363bbe34& */ "./resources/js/components/form_controls/button_close.vue?vue&type=template&id=363bbe34&");
/* harmony import */ var _button_close_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button_close.vue?vue&type=script&lang=js& */ "./resources/js/components/form_controls/button_close.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _button_close_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button_close.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/form_controls/button_close.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _button_close_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _button_close_vue_vue_type_template_id_363bbe34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _button_close_vue_vue_type_template_id_363bbe34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form_controls/button_close.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form_controls/button_close.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/form_controls/button_close.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_close_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./button_close.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/button_close.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_close_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form_controls/button_close.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/button_close.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_button_close_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./button_close.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/button_close.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_button_close_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_button_close_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_button_close_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_button_close_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_button_close_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/form_controls/button_close.vue?vue&type=template&id=363bbe34&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/form_controls/button_close.vue?vue&type=template&id=363bbe34& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_button_close_vue_vue_type_template_id_363bbe34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./button_close.vue?vue&type=template&id=363bbe34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/button_close.vue?vue&type=template&id=363bbe34&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_button_close_vue_vue_type_template_id_363bbe34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_button_close_vue_vue_type_template_id_363bbe34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/form_controls/date_picker.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/form_controls/date_picker.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_picker_vue_vue_type_template_id_9960fe74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date_picker.vue?vue&type=template&id=9960fe74&scoped=true& */ "./resources/js/components/form_controls/date_picker.vue?vue&type=template&id=9960fe74&scoped=true&");
/* harmony import */ var _date_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date_picker.vue?vue&type=script&lang=js& */ "./resources/js/components/form_controls/date_picker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _date_picker_vue_vue_type_style_index_0_id_9960fe74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date_picker.vue?vue&type=style&index=0&id=9960fe74&lang=scss&scoped=true& */ "./resources/js/components/form_controls/date_picker.vue?vue&type=style&index=0&id=9960fe74&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _date_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _date_picker_vue_vue_type_template_id_9960fe74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _date_picker_vue_vue_type_template_id_9960fe74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9960fe74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form_controls/date_picker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form_controls/date_picker.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/form_controls/date_picker.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_date_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./date_picker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/date_picker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_date_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form_controls/date_picker.vue?vue&type=style&index=0&id=9960fe74&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/date_picker.vue?vue&type=style&index=0&id=9960fe74&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_date_picker_vue_vue_type_style_index_0_id_9960fe74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./date_picker.vue?vue&type=style&index=0&id=9960fe74&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/date_picker.vue?vue&type=style&index=0&id=9960fe74&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_date_picker_vue_vue_type_style_index_0_id_9960fe74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_date_picker_vue_vue_type_style_index_0_id_9960fe74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_date_picker_vue_vue_type_style_index_0_id_9960fe74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_date_picker_vue_vue_type_style_index_0_id_9960fe74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_date_picker_vue_vue_type_style_index_0_id_9960fe74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/form_controls/date_picker.vue?vue&type=template&id=9960fe74&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/date_picker.vue?vue&type=template&id=9960fe74&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_date_picker_vue_vue_type_template_id_9960fe74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./date_picker.vue?vue&type=template&id=9960fe74&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/date_picker.vue?vue&type=template&id=9960fe74&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_date_picker_vue_vue_type_template_id_9960fe74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_date_picker_vue_vue_type_template_id_9960fe74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/form_controls/described_select.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/form_controls/described_select.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _described_select_vue_vue_type_template_id_4f72d48b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./described_select.vue?vue&type=template&id=4f72d48b&scoped=true& */ "./resources/js/components/form_controls/described_select.vue?vue&type=template&id=4f72d48b&scoped=true&");
/* harmony import */ var _described_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./described_select.vue?vue&type=script&lang=js& */ "./resources/js/components/form_controls/described_select.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _described_select_vue_vue_type_style_index_0_id_4f72d48b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./described_select.vue?vue&type=style&index=0&id=4f72d48b&lang=scss&scoped=true& */ "./resources/js/components/form_controls/described_select.vue?vue&type=style&index=0&id=4f72d48b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _described_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _described_select_vue_vue_type_template_id_4f72d48b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _described_select_vue_vue_type_template_id_4f72d48b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4f72d48b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form_controls/described_select.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form_controls/described_select.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/form_controls/described_select.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_described_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./described_select.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/described_select.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_described_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form_controls/described_select.vue?vue&type=style&index=0&id=4f72d48b&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/described_select.vue?vue&type=style&index=0&id=4f72d48b&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_described_select_vue_vue_type_style_index_0_id_4f72d48b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./described_select.vue?vue&type=style&index=0&id=4f72d48b&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/described_select.vue?vue&type=style&index=0&id=4f72d48b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_described_select_vue_vue_type_style_index_0_id_4f72d48b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_described_select_vue_vue_type_style_index_0_id_4f72d48b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_described_select_vue_vue_type_style_index_0_id_4f72d48b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_described_select_vue_vue_type_style_index_0_id_4f72d48b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_described_select_vue_vue_type_style_index_0_id_4f72d48b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/form_controls/described_select.vue?vue&type=template&id=4f72d48b&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/described_select.vue?vue&type=template&id=4f72d48b&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_described_select_vue_vue_type_template_id_4f72d48b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./described_select.vue?vue&type=template&id=4f72d48b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/described_select.vue?vue&type=template&id=4f72d48b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_described_select_vue_vue_type_template_id_4f72d48b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_described_select_vue_vue_type_template_id_4f72d48b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/form_controls/labeled_checkbox.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/form_controls/labeled_checkbox.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _labeled_checkbox_vue_vue_type_template_id_233684f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labeled_checkbox.vue?vue&type=template&id=233684f8&scoped=true& */ "./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=template&id=233684f8&scoped=true&");
/* harmony import */ var _labeled_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./labeled_checkbox.vue?vue&type=script&lang=js& */ "./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _labeled_checkbox_vue_vue_type_style_index_0_id_233684f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./labeled_checkbox.vue?vue&type=style&index=0&id=233684f8&lang=scss&scoped=true& */ "./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=style&index=0&id=233684f8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _labeled_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _labeled_checkbox_vue_vue_type_template_id_233684f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _labeled_checkbox_vue_vue_type_template_id_233684f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "233684f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form_controls/labeled_checkbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_labeled_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./labeled_checkbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_labeled_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=style&index=0&id=233684f8&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=style&index=0&id=233684f8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_labeled_checkbox_vue_vue_type_style_index_0_id_233684f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./labeled_checkbox.vue?vue&type=style&index=0&id=233684f8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=style&index=0&id=233684f8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_labeled_checkbox_vue_vue_type_style_index_0_id_233684f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_labeled_checkbox_vue_vue_type_style_index_0_id_233684f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_labeled_checkbox_vue_vue_type_style_index_0_id_233684f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_labeled_checkbox_vue_vue_type_style_index_0_id_233684f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_labeled_checkbox_vue_vue_type_style_index_0_id_233684f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=template&id=233684f8&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=template&id=233684f8&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_labeled_checkbox_vue_vue_type_template_id_233684f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./labeled_checkbox.vue?vue&type=template&id=233684f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/labeled_checkbox.vue?vue&type=template&id=233684f8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_labeled_checkbox_vue_vue_type_template_id_233684f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_labeled_checkbox_vue_vue_type_template_id_233684f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/form_controls/phantom_button.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/form_controls/phantom_button.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phantom_button_vue_vue_type_template_id_99cf0926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phantom_button.vue?vue&type=template&id=99cf0926& */ "./resources/js/components/form_controls/phantom_button.vue?vue&type=template&id=99cf0926&");
/* harmony import */ var _phantom_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phantom_button.vue?vue&type=script&lang=js& */ "./resources/js/components/form_controls/phantom_button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _phantom_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phantom_button.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/form_controls/phantom_button.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _phantom_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _phantom_button_vue_vue_type_template_id_99cf0926___WEBPACK_IMPORTED_MODULE_0__["render"],
  _phantom_button_vue_vue_type_template_id_99cf0926___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form_controls/phantom_button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form_controls/phantom_button.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/form_controls/phantom_button.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_phantom_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./phantom_button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/phantom_button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_phantom_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form_controls/phantom_button.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/phantom_button.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_phantom_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./phantom_button.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/phantom_button.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_phantom_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_phantom_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_phantom_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_phantom_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_phantom_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/form_controls/phantom_button.vue?vue&type=template&id=99cf0926&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/phantom_button.vue?vue&type=template&id=99cf0926& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_phantom_button_vue_vue_type_template_id_99cf0926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./phantom_button.vue?vue&type=template&id=99cf0926& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/phantom_button.vue?vue&type=template&id=99cf0926&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_phantom_button_vue_vue_type_template_id_99cf0926___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_phantom_button_vue_vue_type_template_id_99cf0926___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/form_controls/submit_button.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/form_controls/submit_button.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _submit_button_vue_vue_type_template_id_d0049200___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit_button.vue?vue&type=template&id=d0049200& */ "./resources/js/components/form_controls/submit_button.vue?vue&type=template&id=d0049200&");
/* harmony import */ var _submit_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit_button.vue?vue&type=script&lang=js& */ "./resources/js/components/form_controls/submit_button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _submit_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submit_button.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/form_controls/submit_button.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _submit_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _submit_button_vue_vue_type_template_id_d0049200___WEBPACK_IMPORTED_MODULE_0__["render"],
  _submit_button_vue_vue_type_template_id_d0049200___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form_controls/submit_button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form_controls/submit_button.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/form_controls/submit_button.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submit_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./submit_button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/submit_button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submit_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form_controls/submit_button.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/submit_button.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_submit_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./submit_button.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/submit_button.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_submit_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_submit_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_submit_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_submit_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_submit_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/form_controls/submit_button.vue?vue&type=template&id=d0049200&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/submit_button.vue?vue&type=template&id=d0049200& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_submit_button_vue_vue_type_template_id_d0049200___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./submit_button.vue?vue&type=template&id=d0049200& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/submit_button.vue?vue&type=template&id=d0049200&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_submit_button_vue_vue_type_template_id_d0049200___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_submit_button_vue_vue_type_template_id_d0049200___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/form_controls/text_input_combo.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/form_controls/text_input_combo.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_input_combo_vue_vue_type_template_id_6c07a9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_input_combo.vue?vue&type=template&id=6c07a9d0&scoped=true& */ "./resources/js/components/form_controls/text_input_combo.vue?vue&type=template&id=6c07a9d0&scoped=true&");
/* harmony import */ var _text_input_combo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text_input_combo.vue?vue&type=script&lang=js& */ "./resources/js/components/form_controls/text_input_combo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _text_input_combo_vue_vue_type_style_index_0_id_6c07a9d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text_input_combo.vue?vue&type=style&index=0&id=6c07a9d0&lang=scss&scoped=true& */ "./resources/js/components/form_controls/text_input_combo.vue?vue&type=style&index=0&id=6c07a9d0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _text_input_combo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _text_input_combo_vue_vue_type_template_id_6c07a9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _text_input_combo_vue_vue_type_template_id_6c07a9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6c07a9d0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form_controls/text_input_combo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form_controls/text_input_combo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/form_controls/text_input_combo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_text_input_combo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./text_input_combo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/text_input_combo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_text_input_combo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form_controls/text_input_combo.vue?vue&type=style&index=0&id=6c07a9d0&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/text_input_combo.vue?vue&type=style&index=0&id=6c07a9d0&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_text_input_combo_vue_vue_type_style_index_0_id_6c07a9d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./text_input_combo.vue?vue&type=style&index=0&id=6c07a9d0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/text_input_combo.vue?vue&type=style&index=0&id=6c07a9d0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_text_input_combo_vue_vue_type_style_index_0_id_6c07a9d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_text_input_combo_vue_vue_type_style_index_0_id_6c07a9d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_text_input_combo_vue_vue_type_style_index_0_id_6c07a9d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_text_input_combo_vue_vue_type_style_index_0_id_6c07a9d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_text_input_combo_vue_vue_type_style_index_0_id_6c07a9d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/form_controls/text_input_combo.vue?vue&type=template&id=6c07a9d0&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/text_input_combo.vue?vue&type=template&id=6c07a9d0&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_text_input_combo_vue_vue_type_template_id_6c07a9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./text_input_combo.vue?vue&type=template&id=6c07a9d0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/text_input_combo.vue?vue&type=template&id=6c07a9d0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_text_input_combo_vue_vue_type_template_id_6c07a9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_text_input_combo_vue_vue_type_template_id_6c07a9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/form_controls/textarea_combo.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/form_controls/textarea_combo.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textarea_combo_vue_vue_type_template_id_4d72a492___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea_combo.vue?vue&type=template&id=4d72a492& */ "./resources/js/components/form_controls/textarea_combo.vue?vue&type=template&id=4d72a492&");
/* harmony import */ var _textarea_combo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea_combo.vue?vue&type=script&lang=js& */ "./resources/js/components/form_controls/textarea_combo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _textarea_combo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textarea_combo.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/form_controls/textarea_combo.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _textarea_combo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _textarea_combo_vue_vue_type_template_id_4d72a492___WEBPACK_IMPORTED_MODULE_0__["render"],
  _textarea_combo_vue_vue_type_template_id_4d72a492___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form_controls/textarea_combo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form_controls/textarea_combo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/form_controls/textarea_combo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_combo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./textarea_combo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/textarea_combo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_combo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form_controls/textarea_combo.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/textarea_combo.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_combo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./textarea_combo.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/textarea_combo.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_combo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_combo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_combo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_combo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_combo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/form_controls/textarea_combo.vue?vue&type=template&id=4d72a492&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/form_controls/textarea_combo.vue?vue&type=template&id=4d72a492& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_combo_vue_vue_type_template_id_4d72a492___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./textarea_combo.vue?vue&type=template&id=4d72a492& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form_controls/textarea_combo.vue?vue&type=template&id=4d72a492&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_combo_vue_vue_type_template_id_4d72a492___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_textarea_combo_vue_vue_type_template_id_4d72a492___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/navigation/authenticated_user_sidebar.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/navigation/authenticated_user_sidebar.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authenticated_user_sidebar_vue_vue_type_template_id_a04b05d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authenticated_user_sidebar.vue?vue&type=template&id=a04b05d0&scoped=true& */ "./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=template&id=a04b05d0&scoped=true&");
/* harmony import */ var _authenticated_user_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authenticated_user_sidebar.vue?vue&type=script&lang=ts& */ "./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _authenticated_user_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _authenticated_user_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _authenticated_user_sidebar_vue_vue_type_style_index_0_id_a04b05d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authenticated_user_sidebar.vue?vue&type=style&index=0&id=a04b05d0&lang=scss&scoped=true& */ "./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=style&index=0&id=a04b05d0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _authenticated_user_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _authenticated_user_sidebar_vue_vue_type_template_id_a04b05d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _authenticated_user_sidebar_vue_vue_type_template_id_a04b05d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a04b05d0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/navigation/authenticated_user_sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_21_node_modules_vue_loader_lib_index_js_vue_loader_options_authenticated_user_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader??ref--21!../../../../node_modules/vue-loader/lib??vue-loader-options!./authenticated_user_sidebar.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_21_node_modules_vue_loader_lib_index_js_vue_loader_options_authenticated_user_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_21_node_modules_vue_loader_lib_index_js_vue_loader_options_authenticated_user_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_21_node_modules_vue_loader_lib_index_js_vue_loader_options_authenticated_user_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_21_node_modules_vue_loader_lib_index_js_vue_loader_options_authenticated_user_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_21_node_modules_vue_loader_lib_index_js_vue_loader_options_authenticated_user_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=style&index=0&id=a04b05d0&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=style&index=0&id=a04b05d0&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_authenticated_user_sidebar_vue_vue_type_style_index_0_id_a04b05d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./authenticated_user_sidebar.vue?vue&type=style&index=0&id=a04b05d0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=style&index=0&id=a04b05d0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_authenticated_user_sidebar_vue_vue_type_style_index_0_id_a04b05d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_authenticated_user_sidebar_vue_vue_type_style_index_0_id_a04b05d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_authenticated_user_sidebar_vue_vue_type_style_index_0_id_a04b05d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_authenticated_user_sidebar_vue_vue_type_style_index_0_id_a04b05d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_authenticated_user_sidebar_vue_vue_type_style_index_0_id_a04b05d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=template&id=a04b05d0&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=template&id=a04b05d0&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_authenticated_user_sidebar_vue_vue_type_template_id_a04b05d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./authenticated_user_sidebar.vue?vue&type=template&id=a04b05d0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/authenticated_user_sidebar.vue?vue&type=template&id=a04b05d0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_authenticated_user_sidebar_vue_vue_type_template_id_a04b05d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_authenticated_user_sidebar_vue_vue_type_template_id_a04b05d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/navigation/content_sidebar.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/navigation/content_sidebar.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_sidebar_vue_vue_type_template_id_02cdd0a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content_sidebar.vue?vue&type=template&id=02cdd0a6& */ "./resources/js/components/navigation/content_sidebar.vue?vue&type=template&id=02cdd0a6&");
/* harmony import */ var _content_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content_sidebar.vue?vue&type=script&lang=ts& */ "./resources/js/components/navigation/content_sidebar.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _content_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _content_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _content_sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content_sidebar.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/navigation/content_sidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _content_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _content_sidebar_vue_vue_type_template_id_02cdd0a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _content_sidebar_vue_vue_type_template_id_02cdd0a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/navigation/content_sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/navigation/content_sidebar.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/navigation/content_sidebar.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_21_node_modules_vue_loader_lib_index_js_vue_loader_options_content_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader??ref--21!../../../../node_modules/vue-loader/lib??vue-loader-options!./content_sidebar.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/content_sidebar.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_21_node_modules_vue_loader_lib_index_js_vue_loader_options_content_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_21_node_modules_vue_loader_lib_index_js_vue_loader_options_content_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_21_node_modules_vue_loader_lib_index_js_vue_loader_options_content_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_21_node_modules_vue_loader_lib_index_js_vue_loader_options_content_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_21_node_modules_vue_loader_lib_index_js_vue_loader_options_content_sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/navigation/content_sidebar.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/navigation/content_sidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_content_sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./content_sidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/content_sidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_content_sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_content_sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_content_sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_content_sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_content_sidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/navigation/content_sidebar.vue?vue&type=template&id=02cdd0a6&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/navigation/content_sidebar.vue?vue&type=template&id=02cdd0a6& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_content_sidebar_vue_vue_type_template_id_02cdd0a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./content_sidebar.vue?vue&type=template&id=02cdd0a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/content_sidebar.vue?vue&type=template&id=02cdd0a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_content_sidebar_vue_vue_type_template_id_02cdd0a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_content_sidebar_vue_vue_type_template_id_02cdd0a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/navigation/navbar.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/navigation/navbar.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_vue_vue_type_template_id_5b8f8430_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.vue?vue&type=template&id=5b8f8430&scoped=true& */ "./resources/js/components/navigation/navbar.vue?vue&type=template&id=5b8f8430&scoped=true&");
/* harmony import */ var _navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/navigation/navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _navbar_vue_vue_type_style_index_0_id_5b8f8430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.vue?vue&type=style&index=0&id=5b8f8430&lang=scss&scoped=true& */ "./resources/js/components/navigation/navbar.vue?vue&type=style&index=0&id=5b8f8430&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _navbar_vue_vue_type_template_id_5b8f8430_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _navbar_vue_vue_type_template_id_5b8f8430_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5b8f8430",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/navigation/navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/navigation/navbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/navigation/navbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/navigation/navbar.vue?vue&type=style&index=0&id=5b8f8430&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/navigation/navbar.vue?vue&type=style&index=0&id=5b8f8430&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_5b8f8430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--16-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--16-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./navbar.vue?vue&type=style&index=0&id=5b8f8430&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navbar.vue?vue&type=style&index=0&id=5b8f8430&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_5b8f8430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_5b8f8430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_5b8f8430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_5b8f8430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_16_2_node_modules_sass_loader_dist_cjs_js_ref_16_3_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_5b8f8430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/navigation/navbar.vue?vue&type=template&id=5b8f8430&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/navigation/navbar.vue?vue&type=template&id=5b8f8430&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_5b8f8430_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./navbar.vue?vue&type=template&id=5b8f8430&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navbar.vue?vue&type=template&id=5b8f8430&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_5b8f8430_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_5b8f8430_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/basic.js":
/*!***************************************!*\
  !*** ./resources/js/modules/basic.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_modules_translator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/modules/translator.js */ "./resources/js/modules/translator.js");
/* harmony import */ var _jscomponents_navigation_navbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jscomponents/navigation/navbar.vue */ "./resources/js/components/navigation/navbar.vue");
/* harmony import */ var _jscomponents_form_controls_text_input_combo_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jscomponents/form_controls/text_input_combo.vue */ "./resources/js/components/form_controls/text_input_combo.vue");
/* harmony import */ var _jscomponents_form_controls_submit_button_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jscomponents/form_controls/submit_button.vue */ "./resources/js/components/form_controls/submit_button.vue");
/* harmony import */ var _jscomponents_form_controls_button_close_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jscomponents/form_controls/button_close.vue */ "./resources/js/components/form_controls/button_close.vue");
/* harmony import */ var _jscomponents_form_controls_phantom_button_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jscomponents/form_controls/phantom_button.vue */ "./resources/js/components/form_controls/phantom_button.vue");
/* harmony import */ var _jscomponents_form_controls_labeled_checkbox_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @jscomponents/form_controls/labeled_checkbox.vue */ "./resources/js/components/form_controls/labeled_checkbox.vue");
/* harmony import */ var _jscomponents_navigation_authenticated_user_sidebar_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @jscomponents/navigation/authenticated_user_sidebar.vue */ "./resources/js/components/navigation/authenticated_user_sidebar.vue");
/* harmony import */ var _jscomponents_decoration_empire_logo_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @jscomponents/decoration/empire_logo.vue */ "./resources/js/components/decoration/empire_logo.vue");
/* harmony import */ var _jscomponents_navigation_content_sidebar_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @jscomponents/navigation/content_sidebar.vue */ "./resources/js/components/navigation/content_sidebar.vue");
/* harmony import */ var svg_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! svg-vue */ "./node_modules/svg-vue/dist/svg-vue.esm.js");












/* harmony default export */ __webpack_exports__["default"] = ({
  build: function build() {
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.translator = _js_modules_translator_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('authenticated-user-sidebar', _jscomponents_navigation_authenticated_user_sidebar_vue__WEBPACK_IMPORTED_MODULE_8__["default"]);
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('navbar', _jscomponents_navigation_navbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('text-input-combo', _jscomponents_form_controls_text_input_combo_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('submit-button', _jscomponents_form_controls_submit_button_vue__WEBPACK_IMPORTED_MODULE_4__["default"]);
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('phantom-button', _jscomponents_form_controls_phantom_button_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('labeled-checkbox', _jscomponents_form_controls_labeled_checkbox_vue__WEBPACK_IMPORTED_MODULE_7__["default"]);
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('button-close', _jscomponents_form_controls_button_close_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('empire-logo', _jscomponents_decoration_empire_logo_vue__WEBPACK_IMPORTED_MODULE_9__["default"]);
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('content-sidebar', _jscomponents_navigation_content_sidebar_vue__WEBPACK_IMPORTED_MODULE_10__["default"]);
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('categories-list', function () {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @jscomponents/categories_list.vue */ "./resources/js/components/categories_list.vue"));
    });
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('svg-vue', svg_vue__WEBPACK_IMPORTED_MODULE_11__["default"]);
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a;
  }
});

/***/ }),

/***/ "./resources/js/modules/months_in_different_languages.js":
/*!***************************************************************!*\
  !*** ./resources/js/modules/months_in_different_languages.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  Polski: {
    months: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
    timeSpanNames: {
      day: 'dzień',
      month: 'miesiąc',
      year: 'rok'
    }
  },
  English: {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    timeSpanNames: {
      day: 'day',
      month: 'month',
      year: 'year'
    }
  }
});

/***/ }),

/***/ "./resources/js/modules/translator.js":
/*!********************************************!*\
  !*** ./resources/js/modules/translator.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _pl;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* harmony default export */ __webpack_exports__["default"] = ({
  currentLanguage: undefined,
  initiate: function initiate() {
    this.currentLanguage = document.getElementsByTagName('html')[0].getAttribute('lang');
  },

  get language() {
    if (this.currentLanguage === undefined) {
      this.initiate();
    }

    return this.currentLanguage;
  },

  getSentence: function getSentence(text) {
    if (this[this.language].hasOwnProperty(text)) {
      return this[this.language][text];
    } else {
      return text;
    }
  },
  translate: function translate(text) {
    var _this = this;

    var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';

    if (_typeof(text) === "object") {
      var translatedSentences = "";
      Object.entries(text).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            sentence = _ref2[1];

        return translatedSentences += "".concat(_this.getSentence(sentence)).concat(delimiter, " ");
      });
      return translatedSentences;
    } else {
      return this.getSentence(text);
    }
  },
  getPackage: function getPackage(packageName) {
    return this[this.language]['packages'][packageName];
  },
  pl: (_pl = {
    email_has_already_been_taken: "Adres email jest już zajęty",
    email_is_invalid: "Adres email jest nieprawidłowy",
    the_user_type_is_incorrect: "Niepoprawny typ użytkownika. Należy wybrać 1 opcję z listy",
    to_many_attempts: "Za dużo prób w ciągu jednej minuty",
    the_sexual_orientation_is_incorrect: "Niepoprawna orientacja seksualna należy wybrać 1 opcję z listy",
    to_many_user_settings_change_attempts: "Za dużo prób w ciągu jednej minuty. Ze względów bezpieczeństwa liczba prób jest ograniczona. Proszę spróbować za chwilę.",
    undefined_error: "Bliżej niezidentyfikowany błąd",
    user_data_has_been_modified_successfully: "Pomyślnie zmodyfikowano dane użytkownika",
    password_must_contain_at_least_3_characters: "Hasło musi zawierać co najmniej 3 znaki",
    password_must_not_exceed_20_characters: "Hasło nie może przekraczać 20 znaków",
    password_is_missing: "Nie podano hasła",
    password_is_required: "Należy podać hasło",
    the_given_password_is_incorrect: "Wprowadzone hasło jest nieprawidłowe",
    the_following_errors_occured: "Wykryto następujące problemy : ",
    data_has_been_changed_successfully: "Pomyślnie zmieniono dane użytkownika.",
    the_requested_data_is_probably_ok_but_a_server_error_occured: "Wprowadzone dane są prawdopodobnie w porządku jednak wystąpił błąd po stronie serwera",
    the_requested_data_is_ok_but_a_server_error_occured: "Wprowadzone dane są poprawne jednak serwer napotkał nieoczekiwany błąd. Prosimy spróbować później lub skontaktować się z obsługą",
    please_type_in_a_valid_password: "Proszę wprowadzić swoje hasło o długości od 3 do 20 znaków",
    no_data_has_been_changed: "Żadne pole nie zostało zmienione.",
    this_input_must_not_be_changed: "Tego pola nie można edytować",
    you_have_to_choose_one_option: "Należy wybrać jedną opcję",
    information: "Informacja",
    error: "Błąd",
    incorrect_image_dimensions: "Szerokość lub wysokość obrazu przekracza 128px",
    invalid_file_extension: "Niewłaściwe rozszerzenie pliku. Dozwolone rozszerzenia to : jpg, jpeg, svg, bmp, png, gif, webp",
    url_address: "Adres URL",
    incorrect_extension: "Niewłaściwe rozszerzenie pliku",
    invalid_image_url: "Wygląda na to, że podany adres URL obrazu jest nieprawidłowy. Jeżeli jesteś przekonany, że jest inaczej zawsze możesz pobrać obraz na dysk i stamtąd wczytać",
    invalid_image_extension: "Wygląda na to, że plik ma niewłaściwe rozszerzenie",
    invalid_image_dimensions: "Wprowadzony adres odnosi się do obrazu z właściwym rozszerzeniem jednak szerokość lub wysokość przekracza 128px",
    operation_in_progress: "Operacja w toku",
    checking_image: "Sprawdzam obraz",
    checking_the_email: "Sprawdzam email",
    changing_user_data: "Pracuję nad zmianą danych",
    invalid_image_url_or_another_error: "Prawdopodobnie adres URL jest nieprawidłowy lub wystąpił inny bliżej niezidentyfikowany problem",
    deleting_the_avatar: "Usuwam avatar",
    this_email_address_does_not_exist: "Taki adres email nie istnieje",
    to_many_attemts_during_one_minute: "Za dużo prób w ciągu 1 minuty",
    password_has_less_then_3_characters: "Hasło ma mniej niż 3 znaki",
    password_has_more_then_20_characters: "Hasło ma więcej niż 20 znaków",
    passwords_do_not_match: "Hasła nie pokrywają się",
    login_has_already_been_taken: "Login jest już zajęty",
    login_contains_less_then_3_characters: "Login ma mniej niż 3 znaki",
    login_contains_more_then_20_characters: "Login ma więcej niż 20 znaków"
  }, _defineProperty(_pl, "email_has_already_been_taken", "Email jest już zajęty"), _defineProperty(_pl, "email_seems_to_be_incorrect", "Email wygląda na nieprawidłowy"), _defineProperty(_pl, "you_are_under_18", "Nie ukończyłeś 18 lat"), _defineProperty(_pl, "avatar_has_been_deleted_successfully", "Pomyślnie usunięto avatar"), _defineProperty(_pl, "the_user_has_no_avatar", "Użytkownik nie posiada avataru"), _defineProperty(_pl, "password_change_attempt", "Próba zmiany hasła"), _defineProperty(_pl, "password_changed_successfully", "Pomyślnie zmieniono hasło"), _defineProperty(_pl, "please_type_in_new_valid_password_as_described", "Proszę wprowadzić nowe hasło zgodnie z wytycznymi"), _defineProperty(_pl, "please_type_in_current_password_as_described", "Proszę wprowadzić aktualne hasło zgodnie z wytycznymi"), _defineProperty(_pl, "new_password_does_not_match", "Wprowadzone nowe hasło nie pokrywa się z potwierdzeniem"), _defineProperty(_pl, "new_password_is_required", "Nie podano nowego hasła(środkowe pole)"), _defineProperty(_pl, "new_password_must_contain_at_least_3_characters", "Nowe hasło musi zawierać co najmniej 3 znaki(środkowe pole)"), _defineProperty(_pl, "the_given_new_passwords_do_not_match", "Podane nowe hasło nie pokrywa się z potwierdzeniem"), _defineProperty(_pl, "new_password__confirmation_must_contain_at_least_3_characters", "Potwierdzenie nowego hasła musi zawierać co najmniej 3 znaki"), _defineProperty(_pl, "new_password__confirmation_must_not_exceed_20_characters", "Potwierdzenie nowego hasła przekracza 20 znaków"), _defineProperty(_pl, "no_image_has_been_selected", "Nie wybrano żadnego prawidłowego obrazu"), _defineProperty(_pl, "the_file_selected_from_hard_drive_is_not_an_image", "Plik wybrany z dysku nie jest obrazem"), _defineProperty(_pl, "invalid_image_dimensions", "Niewłaściwe wymiary obrazu"), _defineProperty(_pl, "the_data_looks_ok_but_an_unexpected_error_occured", "Wprowadzone dane są w porządku jednak pojawił się nieoczekiwany błąd"), _defineProperty(_pl, "settings_change_attempt", "Próba zmiany ustawień"), _defineProperty(_pl, "settings_changed_successfully", "Pomyślnie zmieniono ustawienia"), _defineProperty(_pl, "the_shows_birthday_field_is_missing", "Brak informacji o tym czy wyświetlać datę urodzenia innym użytkownikom"), _defineProperty(_pl, "the_shows_birthday_field_must_be_a_boolean_value", "Pole pokazuj datę urodzenia musi zawierać wartość typu logicznego"), _defineProperty(_pl, "fetching_movies", "Pobieram filmy"), _defineProperty(_pl, "views", "Wyświetleń"), _defineProperty(_pl, "preview", "Podgląd"), _defineProperty(_pl, "pornstars", "Gwiazdy"), _defineProperty(_pl, "scroll_previous_links", "Przewijaj listę podstron do tyłu"), _defineProperty(_pl, "movie_frame", "Kadr z filmu"), _defineProperty(_pl, "close_movie_preview", "Zamknij podgląd filmu"), _defineProperty(_pl, "play_movie_preview", "Uruchom podgląd filmu"), _defineProperty(_pl, "sex_empire", "Sex-Imperium"), _defineProperty(_pl, "movie_translated_to_polish", "Film przetłumaczony na język polski"), _defineProperty(_pl, "scroll_next_links", "Przewijaj listę podstron do przodu"), _defineProperty(_pl, "hide_side_bar", "Schowaj boczny pasek"), _defineProperty(_pl, "previous_page", "poprzednia"), _defineProperty(_pl, "next_page", "następna"), _defineProperty(_pl, "first_page", "pierwsza"), _defineProperty(_pl, "profile", "Profil"), _defineProperty(_pl, "profile_settings", "Ustawienia profilu"), _defineProperty(_pl, "messages", "Wiadomości"), _defineProperty(_pl, "favourites", "Ulubione"), _defineProperty(_pl, "friends", "Znajomi"), _defineProperty(_pl, "logout", "Wyloguj"), _defineProperty(_pl, "porn", "Porno"), _defineProperty(_pl, "user_avatar_description", "Avatar użytkownika o nicku"), _defineProperty(_pl, "hide", "Schowaj"), _defineProperty(_pl, "pornstar_has_been_rated", "Ocena została wystawiona. Możesz zawsze zmienić zdanie i ocenić ponownie."), _defineProperty(_pl, "pornstar_rate_data_is_invalid", "Niepoprawne dane oceny lub gwiazdy"), _defineProperty(_pl, "nickname_is_missing", "Nie podano pseudonimu"), _defineProperty(_pl, "the_nickname_exceeds_20_characters", "Długość pseudonimu przekracza 20 znaków"), _defineProperty(_pl, "unexpected_error_occured_while_fetching_comments", "Niestety pojawił się bliżej niezidentyfikowany błąd podczas pobierania komentarzy"), _defineProperty(_pl, "nickname", "Pseudonim"), _defineProperty(_pl, "comment_text", "Treść komentarza"), _defineProperty(_pl, "add_comment", "Dodaj komentarz"), _defineProperty(_pl, "add", "dodaj"), _defineProperty(_pl, "unregistered_user", "Niezarejestrowany"), _defineProperty(_pl, "comment_text", "Treść komentarza"), _defineProperty(_pl, "adding_comment", "Dodaję komentarz"), _defineProperty(_pl, "fetching_comments", "Pobieram komentarze"), _defineProperty(_pl, "comment_text_is_missing", "Nie podano treści komentarza"), _defineProperty(_pl, "comment_text_exceeds_1000_characters", "Treść komentarza przekracza 1000 znaków"), _defineProperty(_pl, "nickname_exceeds_50_characters", "Pseudonim przekracza 50 znaków"), _defineProperty(_pl, "because_of_safety_reasons_adding_comments_is_limited_to_2_per_minute", "Z powodów bezpieczeństwa ograniczono liczbę dodawanych komentarzy do 2 na minutę"), _defineProperty(_pl, "total_comments", "Liczba wszystkich komentarzy"), _defineProperty(_pl, "show_comments_sub_page_with_number", "Pokaż podstronę komentarzy o numerze"), _defineProperty(_pl, "sex_empire_short", "SI"), _defineProperty(_pl, "small_ass", "mały"), _defineProperty(_pl, "medium_ass", "średni"), _defineProperty(_pl, "big_ass", "duży"), _defineProperty(_pl, "small_tits", "małe"), _defineProperty(_pl, "medium_tits", "średnie"), _defineProperty(_pl, "big_tits", "duże"), _defineProperty(_pl, "skinny_tchickness", "chuda"), _defineProperty(_pl, "medium_tchickness", "średnia"), _defineProperty(_pl, "fat_tchickness", "gruba"), _defineProperty(_pl, "teenagers", "nastolatki(18 - 19)"), _defineProperty(_pl, "age_range_young", "młode (20 -29)"), _defineProperty(_pl, "age_range_mature", "dojrzałe(30 - 50)"), _defineProperty(_pl, "dark_hair", "czarny"), _defineProperty(_pl, "blonde_hair", "blond"), _defineProperty(_pl, "brown_hair", "brązowy"), _defineProperty(_pl, "red_hair", "rudy"), _defineProperty(_pl, "white_race", "biała"), _defineProperty(_pl, "asian_race", "azjatki"), _defineProperty(_pl, "ebony_race", "murzynki"), _defineProperty(_pl, "latin_race", "latynoski"), _defineProperty(_pl, "arabic_race", "arabki"), _defineProperty(_pl, "yes", "tak"), _defineProperty(_pl, "no", "nie"), _defineProperty(_pl, "one_male_one_female", "facet i kobieta"), _defineProperty(_pl, "bukkake", "bukkake"), _defineProperty(_pl, "single_female", "kobieta solo"), _defineProperty(_pl, "lesbians", "lesbijki"), _defineProperty(_pl, "group_sex", "grupowy"), _defineProperty(_pl, "one_male_many_females", "facet i wiele kobiet"), _defineProperty(_pl, "GangBang", "GangBang"), _defineProperty(_pl, "one_female_two_males", "Na 2 baty"), _defineProperty(_pl, "lesbian_group_sex", "Lesbijki grupowo"), _defineProperty(_pl, "only", "tylko i wyłącznie"), _defineProperty(_pl, "maximum", "maximum"), _defineProperty(_pl, "a_lot", "dużo"), _defineProperty(_pl, "medium", "średnio"), _defineProperty(_pl, "a_little", "trochę"), _defineProperty(_pl, "exclude", "wyklucz"), _defineProperty(_pl, "on_face", "na twarz"), _defineProperty(_pl, "cum_swallow", "z połykiem"), _defineProperty(_pl, "creampie", "w cipkę"), _defineProperty(_pl, "anal_creampie", "w dupkę"), _defineProperty(_pl, "on_tits", "na cycki"), _defineProperty(_pl, "on_pussy", "na cipkę"), _defineProperty(_pl, "on_ass", "na dupkę"), _defineProperty(_pl, "on_feet", "na stopy"), _defineProperty(_pl, "on_many_places", "na wiele miejsc"), _defineProperty(_pl, "on_other_body_parts", "na inne miejsca"), _defineProperty(_pl, "american_nationality", "amerykańska"), _defineProperty(_pl, "japanese_nationality", "japońska"), _defineProperty(_pl, "german_nationality", "niemiecka"), _defineProperty(_pl, "czech_nationality", "czeska"), _defineProperty(_pl, "russian_nationality", "rosyjska"), _defineProperty(_pl, "british_nationality", "brytyjska"), _defineProperty(_pl, "swedish_nationality", "szwedzka"), _defineProperty(_pl, "ukrainian_nationality", "ukraińska"), _defineProperty(_pl, "slovac_nationality", "słowacka"), _defineProperty(_pl, "hanguarian_nationality", "węgierska"), _defineProperty(_pl, "polish_nationality", "polska"), _defineProperty(_pl, "dutch_nationality", "holenderska"), _defineProperty(_pl, "hindu_nationality", "hinduska"), _defineProperty(_pl, "french_nationality", "francuska"), _defineProperty(_pl, "spanish_nationality", "hiszpańska"), _defineProperty(_pl, "italian_nationality", "włoska"), _defineProperty(_pl, "canadian_nationality", "kanadyjska"), _defineProperty(_pl, "argentinian_nationality", "argentyńska"), _defineProperty(_pl, "house", "dom"), _defineProperty(_pl, "bathroom", "łazienka"), _defineProperty(_pl, "office", "biuro"), _defineProperty(_pl, "school", "szkoła"), _defineProperty(_pl, "public_place", "miejsca publiczne"), _defineProperty(_pl, "car", "samochód"), _defineProperty(_pl, "nature", "łono natury"), _defineProperty(_pl, "solarium", "solarium"), _defineProperty(_pl, "elevator", "winda"), _defineProperty(_pl, "beach", "plaża"), _defineProperty(_pl, "gym", "siłownia"), _defineProperty(_pl, "POV", "POV"), _defineProperty(_pl, "outside_camera_style", "z zewnątrz"), _defineProperty(_pl, "mixed_camera_style", "mieszane"), _defineProperty(_pl, "female_pupil", "uczennica"), _defineProperty(_pl, "female_employee", "pracownica"), _defineProperty(_pl, "female_student", "studentka"), _defineProperty(_pl, "wife", "żona"), _defineProperty(_pl, "female_teacher", "nauczycielka"), _defineProperty(_pl, "nurse", "pielęgniarka"), _defineProperty(_pl, "female_slave", "niewolnica"), _defineProperty(_pl, "nun", "zakonnica"), _defineProperty(_pl, "female_police_officer", "policjantka"), _defineProperty(_pl, "prostitute", "prostytutka"), _defineProperty(_pl, "female_boss", "szefowa"), _defineProperty(_pl, "cleaner", "sprzątaczka"), _defineProperty(_pl, "mommy", "mamusia"), _defineProperty(_pl, "amateur", "amatorski"), _defineProperty(_pl, "professional", "profesjonalny"), _defineProperty(_pl, "choose_options", "wybierz opcje"), _defineProperty(_pl, "search", "szukaj"), _defineProperty(_pl, "remove_option", "usuń opcję"), _defineProperty(_pl, "close", "zamknij"), _defineProperty(_pl, "failed_to_fetch_pornstars_list", "Nie udało się pobrać listy gwiazd, w razie potrzeby prosimy odświeżyć stronę"), _defineProperty(_pl, "fetching_pornstars", "Pobieram listę gwiazd"), _defineProperty(_pl, "not_selected", "nie wybrano"), _defineProperty(_pl, "minutes_inflected", "minut(y)"), _defineProperty(_pl, "views_inflected", "wyświetleń"), _defineProperty(_pl, "unexpected_error_occured", "Pojawił się bliżej niezidentyfikowany błąd"), _defineProperty(_pl, "titsSize", "rozmiar cycków"), _defineProperty(_pl, "assSize", "rozmiar dupci"), _defineProperty(_pl, "thicknessSize", "tusza"), _defineProperty(_pl, "ageRange", "przedział wiekowy"), _defineProperty(_pl, "hairColor", "kolor włosów"), _defineProperty(_pl, "race", "rasa"), _defineProperty(_pl, "abundanceType", "liczebność"), _defineProperty(_pl, "cumshotType", "typ wytrysku"), _defineProperty(_pl, "nationality", "narodowość"), _defineProperty(_pl, "location", "lokalizacja"), _defineProperty(_pl, "cameraStyle", "ujęcie kamery"), _defineProperty(_pl, "storyOrCostume", "motyw fabularno kostiumowy"), _defineProperty(_pl, "professionalismLevel", "poziom filmu"), _defineProperty(_pl, "shavedPussy", "wygolona cipka"), _defineProperty(_pl, "analAmmount", "anal"), _defineProperty(_pl, "blowjob", "obciąganie"), _defineProperty(_pl, "handjob", "walenie konika"), _defineProperty(_pl, "blondes", "blondynki"), _defineProperty(_pl, "tittfuck", "na hiszpana"), _defineProperty(_pl, "pussy_licking", "minetka"), _defineProperty(_pl, "feet", "stopy"), _defineProperty(_pl, "femdom", "kobieca dominacja"), _defineProperty(_pl, "brunettes", "brunetki"), _defineProperty(_pl, "redheads", "rude"), _defineProperty(_pl, "milfs", "dojrzałe"), _defineProperty(_pl, "teens", 'nastolatki'), _defineProperty(_pl, "amateur", "amatorskie"), _defineProperty(_pl, "asian", 'azjatki'), _defineProperty(_pl, "latins", 'latynoski'), _defineProperty(_pl, "ebony", 'murzynki'), _defineProperty(_pl, "lesbians", 'lesbijki'), _defineProperty(_pl, "group", 'grupowy'), _defineProperty(_pl, "cumshot_compilation", 'kompilacja wytrysków'), _defineProperty(_pl, "cum_on_face", 'wytrysk na twarz'), _defineProperty(_pl, "cum_swallow", 'połykanie spermy'), _defineProperty(_pl, "cum_on_feet", 'wytrysk na stopy'), _defineProperty(_pl, "creampie", 'wytrysk w cipkę'), _defineProperty(_pl, "cum_in_ass", 'wytrysk w dupkę'), _defineProperty(_pl, "cum_on_titts", 'wytrysk na cycki'), _defineProperty(_pl, "pantyhose", 'rajstopki'), _defineProperty(_pl, "high_heels", 'szpile'), _defineProperty(_pl, "nurses", 'pielęgniarki'), _defineProperty(_pl, "teachers", 'nauczycielki'), _defineProperty(_pl, "japanese", 'japonki'), _defineProperty(_pl, "russian", 'rosjanki'), _defineProperty(_pl, "pornstars", 'gwiazdy'), _defineProperty(_pl, "blowjobAmmount", 'obciąganie'), _defineProperty(_pl, "doublePenetrationAmmount", "wtyczka"), _defineProperty(_pl, "vaginalAmmount", "waginalny"), _defineProperty(_pl, "pussyLickingAmmount", 'minetka'), _defineProperty(_pl, "feetAmmount", 'pieszczenie stóp'), _defineProperty(_pl, "position69Ammount", 'pozycja 69'), _defineProperty(_pl, "tittfuckAmmount", "na hiszpana"), _defineProperty(_pl, "isCumshotCompilation", 'kompilacja wytrysków'), _defineProperty(_pl, "recordedBySpamCamera", 'nagrany kamerą szpiegowską'), _defineProperty(_pl, "isSadisticOrMasochistic", 'sado-masochostyczny'), _defineProperty(_pl, "isFemaleDomination", 'kobieca dominacja'), _defineProperty(_pl, "isTranslatedToPolish", 'polska wersja językowa'), _defineProperty(_pl, "showPantyhose", 'rajstopy'), _defineProperty(_pl, "showStockings", 'pończochy'), _defineProperty(_pl, "showGlasses", 'okulary'), _defineProperty(_pl, "showHighHeels", 'szpile'), _defineProperty(_pl, "showHugeCock", 'wielki kutas'), _defineProperty(_pl, "showWhips", 'bicze'), _defineProperty(_pl, "showSexToys", 'sex-zabawki'), _defineProperty(_pl, "minimumMovieTime", "minimalny czas"), _defineProperty(_pl, "maximumMovieTime", "maksymalny czas"), _defineProperty(_pl, "minimumMovieViews", 'minimalna liczba wyświetleń'), _defineProperty(_pl, "maximumMovieViews", 'maksymalna liczba wyświetleń'), _defineProperty(_pl, "hasStory", 'zawiera fabułę'), _defineProperty(_pl, "total_movies_found", "Ilość znalezionych filmów"), _defineProperty(_pl, "movie_with_following_pornstars", "występują jednocześnie następujące gwiazdy"), _defineProperty(_pl, "last_page", "ostatnia"), _defineProperty(_pl, "movie_with_pornstar", "Film w którym występuje"), _defineProperty(_pl, "no_movies_have_been_found", "Nie znaleziono żadnych filmów pasujących do wybranych kryteriów"), _defineProperty(_pl, "no_options_have_been_selected", "Nie wybrano żadnych opcji"), _defineProperty(_pl, "failed_to_fetch_pornstars_list", "Nie udało się pobrać listy gwiazd"), _defineProperty(_pl, "because_of_security_reasons_search_was_blocked", "Ze względów bezpieczeństwa ilość zapytań do wyszukiwarki w ciągu minuty jest ograniczona. Prosimy zaczekać chwilę i spróbować ponownie."), _defineProperty(_pl, "popular_categories", "Popularne kategorie"), _defineProperty(_pl, "categories_list", "Lista kategorii"), _defineProperty(_pl, "big_titts", "duże cycki"), _defineProperty(_pl, "packages", {
    content_sidebar: {
      hide_side_bar_title: "Schowaj boczne menu",
      hide_side_bar_caption: "Schowaj",
      porn_caption: "Porno",
      movie_categories_title: "Zobacz dostępne kategorie filmów porno",
      movie_categories_label: "Kategorie",
      latest_porn_movies_title: "Najnowsze filmy porno",
      latest_porn_movies_caption: "Najnowsze",
      the_most_popular_porn_movies_title: "Najpopularniejsze filmy porno",
      the_most_popular_porn_movies_caption: "Najpopularniejsze",
      advanced_search_caption: "Szukanie zaawansowane",
      advanced_search_title: "Użyj wyszukiwarki do precyzyjnego odnajdywania filmów porno",
      movies_caption: "Filmy",
      pornstars: "Gwiazdy porno"
    },
    authenticated_user_sidebar: {
      hide_side_bar_title: "Schowaj menu użytkownika",
      hide_authenticated_user_sidebar_caption: "Schowaj",
      show_user_profile_settings_title: "Ustawienia profilu : hasło, avatar, dane personalne",
      show_user_profile_settings_caption: "Profil",
      mailbox_caption: "Wiadomości",
      favourites_title: "Twoje ulubione filmy, gwiazdy itp",
      favourites_caption: "Ulubione",
      friends_caption: "Znajomi",
      logout_caption: "Wyloguj",
      must_choose_integer_between_1_and_10: "Należy wbrać wartość pomiędzy 1 a 10"
    },
    pornstars_list: {
      search_field_description: "Wpisz pseudonim gwiazdy porno aby wyszukać odpowiedni profil",
      search_field_placeholder: "pseudonim",
      no_results_has_been_found: "Nie znaleziono żadnych panienek pasujących do podanego pseudonimu",
      reset_search_button_caption: "Resetuj wyszukiwanie"
    },
    hinted_search_field: {
      search: "szukaj"
    },
    star_rating: {
      no_selected_value: "Nie wybrano oceny"
    },
    comment_box: {
      your_nickname: "Twój pseudonim"
    }
  }), _pl)
});

/***/ }),

/***/ "./resources/svg sync recursive ^\\.\\/.*$":
/*!*************************************!*\
  !*** ./resources/svg sync ^\.\/.*$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arrow_down": "./resources/svg/arrow_down.svg",
	"./arrow_down.svg": "./resources/svg/arrow_down.svg",
	"./camera": "./resources/svg/camera.svg",
	"./camera.svg": "./resources/svg/camera.svg",
	"./computer_folder_search": "./resources/svg/computer_folder_search.svg",
	"./computer_folder_search.svg": "./resources/svg/computer_folder_search.svg",
	"./control_panel": "./resources/svg/control_panel.svg",
	"./control_panel.svg": "./resources/svg/control_panel.svg",
	"./exit_arrow": "./resources/svg/exit_arrow.svg",
	"./exit_arrow.svg": "./resources/svg/exit_arrow.svg",
	"./fast_backward": "./resources/svg/fast_backward.svg",
	"./fast_backward.svg": "./resources/svg/fast_backward.svg",
	"./fast_forward": "./resources/svg/fast_forward.svg",
	"./fast_forward.svg": "./resources/svg/fast_forward.svg",
	"./finger_point": "./resources/svg/finger_point.svg",
	"./finger_point.svg": "./resources/svg/finger_point.svg",
	"./folder": "./resources/svg/folder.svg",
	"./folder.svg": "./resources/svg/folder.svg",
	"./folder_search": "./resources/svg/folder_search.svg",
	"./folder_search.svg": "./resources/svg/folder_search.svg",
	"./improvement_performance": "./resources/svg/improvement_performance.svg",
	"./improvement_performance.svg": "./resources/svg/improvement_performance.svg",
	"./magnifier": "./resources/svg/magnifier.svg",
	"./magnifier.svg": "./resources/svg/magnifier.svg",
	"./movie_tape": "./resources/svg/movie_tape.svg",
	"./movie_tape.svg": "./resources/svg/movie_tape.svg",
	"./photo_gallery": "./resources/svg/photo_gallery.svg",
	"./photo_gallery.svg": "./resources/svg/photo_gallery.svg",
	"./play_round": "./resources/svg/play_round.svg",
	"./play_round.svg": "./resources/svg/play_round.svg",
	"./rocket_launch": "./resources/svg/rocket_launch.svg",
	"./rocket_launch.svg": "./resources/svg/rocket_launch.svg",
	"./search": "./resources/svg/search.svg",
	"./search.svg": "./resources/svg/search.svg",
	"./shutdown": "./resources/svg/shutdown.svg",
	"./shutdown.svg": "./resources/svg/shutdown.svg",
	"./smile_in_glasses": "./resources/svg/smile_in_glasses.svg",
	"./smile_in_glasses.svg": "./resources/svg/smile_in_glasses.svg",
	"./star_full": "./resources/svg/star_full.svg",
	"./star_full.svg": "./resources/svg/star_full.svg",
	"./star_yellow": "./resources/svg/star_yellow.svg",
	"./star_yellow.svg": "./resources/svg/star_yellow.svg",
	"./video_playlist": "./resources/svg/video_playlist.svg",
	"./video_playlist.svg": "./resources/svg/video_playlist.svg",
	"./video_setting": "./resources/svg/video_setting.svg",
	"./video_setting.svg": "./resources/svg/video_setting.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/svg sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./resources/svg/arrow_down.svg":
/*!**************************************!*\
  !*** ./resources/svg/arrow_down.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.88 80.593\"><path fill=\"none\" d=\"M-1-1h802v602H-1z\"/><path fill=\"#fff\" d=\"M123.88 0v30.82L62.44 80.593 1 30.82V0l61.44 49.772L123.88 0z\"/></svg>");

/***/ }),

/***/ "./resources/svg/camera.svg":
/*!**********************************!*\
  !*** ./resources/svg/camera.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 108.1 122.88\"><path d=\"M17.61 47.71h52.57c4.88 0 8.86 3.99 8.86 8.86v38.52c0 4.87-3.99 8.86-8.86 8.86H53.94l11.79 18.92H54.75l-12.86-17.29-12.99 17.29H17.76l11.72-18.92H17.61c-4.87 0-8.86-3.99-8.86-8.86V56.57c0-4.87 3.98-8.86 8.86-8.86zm.22-38.49c4.92 0 9.38 2 12.61 5.22 3.23 3.23 5.22 7.69 5.22 12.61 0 4.92-2 9.38-5.22 12.61-3.23 3.23-7.69 5.22-12.61 5.22s-9.38-2-12.61-5.22A17.776 17.776 0 010 27.06c0-4.92 2-9.38 5.22-12.61s7.69-5.23 12.61-5.23zm7.1 10.74a10.006 10.006 0 00-7.1-2.94c-2.77 0-5.28 1.12-7.1 2.94a10.006 10.006 0 00-2.94 7.1c0 2.77 1.12 5.28 2.94 7.1s4.33 2.94 7.1 2.94c2.77 0 5.28-1.12 7.1-2.94s2.94-4.33 2.94-7.1a9.948 9.948 0 00-2.94-7.1zM60.62 0c6.2 0 11.81 2.51 15.87 6.57a22.37 22.37 0 016.57 15.87c0 6.2-2.51 11.81-6.57 15.87-4.06 4.06-9.67 6.57-15.87 6.57s-11.81-2.51-15.87-6.57a22.37 22.37 0 01-6.57-15.87c0-6.2 2.51-11.81 6.57-15.87S54.42 0 60.62 0zm10.26 12.19c-2.62-2.62-6.25-4.25-10.26-4.25s-7.63 1.62-10.26 4.25c-2.62 2.62-4.25 6.25-4.25 10.26s1.62 7.63 4.25 10.26c2.62 2.62 6.25 4.25 10.26 4.25s7.63-1.62 10.26-4.25 4.25-6.25 4.25-10.26-1.63-7.64-4.25-10.26zm13.19 77.78V61.52l24.02-14.16v57.15L84.07 89.97z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"/></svg>");

/***/ }),

/***/ "./resources/svg/computer_folder_search.svg":
/*!**************************************************!*\
  !*** ./resources/svg/computer_folder_search.svg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.879 95.205\"><path d=\"M2.476 20.741h4.496v-9.858A2.483 2.483 0 019.455 8.4h4.409V2.482A2.483 2.483 0 0116.347 0h40.26a2.482 2.482 0 012.482 2.482V8.4h54.296a2.482 2.482 0 012.481 2.483v9.858h4.529a2.482 2.482 0 012.426 3.006l-8.68 63.812c-.283 2.081-1.192 4.011-2.588 5.406-1.383 1.382-3.21 2.239-5.36 2.239H14.697c-2.163 0-4.028-.865-5.426-2.264-1.406-1.405-2.314-3.35-2.536-5.464l-6.722-64a2.476 2.476 0 012.462-2.729v-.006h.001zm56.328 16.295c5.385 0 10.271 2.192 13.809 5.716a19.445 19.445 0 015.717 13.81c0 3.939-1.175 7.621-3.181 10.687l8.452 9.212-5.831 5.329-8.151-8.968a19.443 19.443 0 01-10.815 3.266c-5.387 0-10.272-2.191-13.811-5.716a19.443 19.443 0 01-5.716-13.81c0-5.387 2.191-10.271 5.716-13.81a19.447 19.447 0 0113.811-5.716zm11.233 8.292a15.852 15.852 0 00-11.233-4.659 15.85 15.85 0 00-11.234 4.659 15.855 15.855 0 00-4.66 11.234c0 4.383 1.786 8.359 4.66 11.233s6.85 4.659 11.234 4.659c4.382 0 8.359-1.785 11.233-4.659s4.659-6.851 4.659-11.233c0-4.383-1.785-8.359-4.659-11.234zM9.455 25.706H5.227l6.435 61.268c.103.979.497 1.854 1.101 2.457.5.5 1.165.81 1.935.81h91.498c.747 0 1.384-.301 1.869-.785.621-.621 1.033-1.534 1.172-2.555l8.324-61.194H9.455v-.001zm2.483-12.341v7.358l98.965-1.052v-6.307H56.607a2.483 2.483 0 01-2.483-2.482V4.965H18.83v5.918a2.482 2.482 0 01-2.482 2.482h-4.41z\"/></svg>");

/***/ }),

/***/ "./resources/svg/control_panel.svg":
/*!*****************************************!*\
  !*** ./resources/svg/control_panel.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.879 122.102\"><path d=\"M9.96 0h102.96a9.926 9.926 0 017.035 2.919 9.927 9.927 0 012.924 7.032v102.201a9.93 9.93 0 01-2.924 7.031 9.913 9.913 0 01-7.035 2.918H9.96a9.91 9.91 0 01-7.035-2.918A9.925 9.925 0 010 112.152V9.951a9.922 9.922 0 012.925-7.032A9.922 9.922 0 019.96 0zm70.669 41.732h7.365V17.8a3.715 3.715 0 013.721-3.722c1.029 0 1.961.414 2.631 1.088a3.71 3.71 0 011.092 2.634v23.932h7.359a4.022 4.022 0 014.01 4.009 4.02 4.02 0 01-4.01 4.009h-7.359v36.488a3.699 3.699 0 01-1.092 2.629 3.708 3.708 0 01-2.631 1.092 3.73 3.73 0 01-2.633-1.092 3.703 3.703 0 01-1.088-2.629V49.75h-7.365a4.02 4.02 0 01-4.008-4.009 4.02 4.02 0 014.008-4.009zM50.165 58.956h7.362V17.8a3.71 3.71 0 011.091-2.634 3.701 3.701 0 012.633-1.088c1.022 0 1.956.414 2.628 1.088a3.707 3.707 0 011.088 2.634v41.155h7.365a4.022 4.022 0 014.01 4.009 4.022 4.022 0 01-4.01 4.01h-7.365v19.264a3.695 3.695 0 01-1.088 2.629 3.715 3.715 0 01-5.261 0 3.698 3.698 0 01-1.091-2.629V66.975h-7.362a4.022 4.022 0 01-4.009-4.01 4.019 4.019 0 014.009-4.009zM19.971 41.35h7.194V17.8c0-1.031.419-1.96 1.094-2.634a3.7 3.7 0 012.63-1.088c1.026 0 1.957.414 2.631 1.088a3.707 3.707 0 011.088 2.634v23.55h7.53a4.02 4.02 0 014.009 4.009 4.02 4.02 0 01-4.009 4.009h-7.53v36.871a3.72 3.72 0 01-3.719 3.721 3.71 3.71 0 01-2.63-1.092 3.7 3.7 0 01-1.094-2.629V49.368h-7.194a4.02 4.02 0 01-4.009-4.009 4.02 4.02 0 014.009-4.009zm71.744 53.83c2.205 0 4.203.895 5.658 2.346l.006-.004a7.994 7.994 0 012.346 5.668 7.98 7.98 0 01-2.346 5.652l-.012.018a8.008 8.008 0 01-11.314-.006l-.123-.139a7.993 7.993 0 01.123-11.193 7.987 7.987 0 015.662-2.342zm2.734 5.267a3.848 3.848 0 00-2.734-1.123 3.857 3.857 0 00-2.732 1.131 3.855 3.855 0 00-1.135 2.734c0 1.025.4 1.955 1.043 2.646l.092.084a3.857 3.857 0 002.732 1.131 3.831 3.831 0 002.734-1.123l.008-.008a3.868 3.868 0 00-.008-5.464l.006-.002-.006-.006zm-33.2-5.267a7.98 7.98 0 015.658 2.346l.004-.004a7.989 7.989 0 012.35 5.668 7.973 7.973 0 01-2.354 5.658l.004.006a7.983 7.983 0 01-5.662 2.344 7.997 7.997 0 01-5.655-2.344l-.014-.018a7.968 7.968 0 01-2.339-5.646c0-2.215.897-4.217 2.348-5.668l.132-.123a7.983 7.983 0 015.528-2.219zm2.733 5.267a3.862 3.862 0 00-2.734-1.123 3.852 3.852 0 00-2.648 1.037l-.083.094a3.842 3.842 0 00-1.134 2.734c0 1.068.428 2.035 1.125 2.73l.009.008a3.827 3.827 0 002.73 1.123 3.861 3.861 0 002.734-1.131l.006.002.002-.002a3.848 3.848 0 001.123-2.73 3.844 3.844 0 00-1.131-2.734l.006-.002-.005-.006zM30.89 95.18c2.211 0 4.216.895 5.661 2.342a7.99 7.99 0 01-.003 11.326l.003.006a8.006 8.006 0 01-11.319 0l-.012-.018a7.97 7.97 0 01-2.342-5.646c0-2.215.896-4.217 2.348-5.668l.131-.123a7.995 7.995 0 015.533-2.219zm2.731 5.275a3.847 3.847 0 00-2.731-1.131 3.848 3.848 0 00-2.647 1.037l-.085.094a3.84 3.84 0 00-1.131 2.734c0 1.068.429 2.035 1.123 2.73l.009.008a3.834 3.834 0 002.733 1.123 3.847 3.847 0 002.731-1.131l.006.002.003-.002a3.845 3.845 0 001.125-2.73 3.848 3.848 0 00-1.136-2.734zM112.92 4.981H9.96c-1.369 0-2.611.56-3.51 1.463a4.948 4.948 0 00-1.463 3.507v102.201c0 1.361.56 2.607 1.463 3.506a4.929 4.929 0 003.51 1.461h102.96a4.927 4.927 0 003.51-1.461 4.948 4.948 0 001.463-3.506V9.951a4.95 4.95 0 00-1.463-3.507 4.941 4.941 0 00-3.51-1.463z\"/></svg>");

/***/ }),

/***/ "./resources/svg/exit_arrow.svg":
/*!**************************************!*\
  !*** ./resources/svg/exit_arrow.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 110.395 122.88\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M93.359 17.16L75.68 9.377 75.99 0h34.404v122.879H75.99l-.311-6.835 17.68-10.946V17.16zm-11.33 62.079v-34.54H47.004V13.631L0 61.937l47.004 48.373V79.24h35.025v-.001z\"/></svg>");

/***/ }),

/***/ "./resources/svg/fast_backward.svg":
/*!*****************************************!*\
  !*** ./resources/svg/fast_backward.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.88 99.73\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.71 58.97l52.95 40.76V58l54.22 41.73V5.08L68.66 46.17V5.08L15.71 45.21V0H0v93.23h15.71V58.97z\"/></svg>");

/***/ }),

/***/ "./resources/svg/fast_forward.svg":
/*!****************************************!*\
  !*** ./resources/svg/fast_forward.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.88 96.93\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M107.61 0h15.27v90.62h-15.27V54.67L52.7 96.93V56.37L0 96.93v-92l52.7 39.94V4.93l54.91 41.62V0z\"/></svg>");

/***/ }),

/***/ "./resources/svg/finger_point.svg":
/*!****************************************!*\
  !*** ./resources/svg/finger_point.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 104.31 122.88\"><path d=\"M25.85 63.15c-.04-.12-.08-.28-.1-.42-.22-1.89-.43-3.98-.62-5.78-.26-2.64-.55-5.69-.76-7.83-.14-1.45-.6-2.83-1.27-3.86-.45-.66-.95-1.15-1.51-1.39-.45-.18-1-.2-1.57.02-.78.3-1.65.93-2.62 2.03-.86.98-1.53 2.29-2.09 3.68-.79 2.03-1.26 4.19-1.45 5.67-.02.1-.02.18-.06.26L8.42 86.07c-.08.4-.24.76-.48 1.04-1.81 2.33-2.95 4.33-3.28 5.95-.24 1.19 0 2.15.79 2.9l19.8 19.8a8.47 8.47 0 004.47 2.29c1.91.36 4.14.16 6.7-.54.04 0 .1-.02.14-.02.97-.26 2.24-.57 3.46-.88 5.31-1.29 9.94-2.43 14.23-6.33l5.52-5.76c.05-.1.14-.18.22-.26s.62-.62 1.35-1.31c3.78-3.69 8.45-8.25 5.61-12.24l-2.21-2.21c-1.07 1.04-2.21 2.05-3.3 3.02-1 .88-1.93 1.69-2.78 2.55-.91.91-2.38.91-3.3 0-.91-.92-.91-2.38 0-3.3.86-.86 1.91-1.79 3-2.76 3.74-3.3 8.03-7.07 5.73-10.38l-2.19-2.19a2.38 2.38 0 01-.31-.4c-1.26 1.29-2.64 2.52-4 3.72-1 .88-1.93 1.69-2.78 2.55-.91.91-2.38.91-3.3 0s-.91-2.38 0-3.3c.86-.86 1.91-1.79 3-2.76 3.74-3.3 8.03-7.07 5.73-10.38l-2.19-2.19c-.16-.16-.28-.31-.38-.5l-6.42 6.42c-.91.91-2.38.91-3.3 0s-.91-2.38 0-3.3l17.22-17.25c2.88-2.88 3.54-5.88 2.78-8.15-.28-.83-.74-1.57-1.31-2.14s-1.31-1.03-2.14-1.31c-2.24-.74-5.23-.06-8.19 2.9l-30.2 30.2c-.91.91-2.38.91-3.3 0s-.91-2.38 0-3.3l3.07-3.07-.03-.03zm57.38-38.84a3.195 3.195 0 01-4.52.14 3.195 3.195 0 01-.14-4.52l8.82-9.39a3.195 3.195 0 014.52-.14c1.3 1.22 1.34 3.24.14 4.52l-8.82 9.39zm-39.27-.66c1.3 1.22 1.34 3.25.14 4.52a3.195 3.195 0 01-4.52.14l-9.4-8.82a3.214 3.214 0 01-.14-4.52 3.195 3.195 0 014.52-.14l9.4 8.82zm19.73-7.69c.05 1.76-1.34 3.24-3.09 3.3s-3.24-1.34-3.3-3.09L56.91 3.3C56.85 1.55 58.25.06 60 0c1.76-.05 3.24 1.34 3.29 3.09l.4 12.87zm13.19 47.35a3.195 3.195 0 01-.14-4.52 3.195 3.195 0 014.52-.14l9.39 8.82c1.3 1.22 1.34 3.24.14 4.52a3.195 3.195 0 01-4.52.14l-9.39-8.82zm11.48-18.96c-1.75.06-3.24-1.34-3.3-3.09-.05-1.75 1.34-3.24 3.09-3.3l12.86-.43c1.75-.06 3.24 1.34 3.3 3.09s-1.34 3.24-3.09 3.3l-12.86.43zM60.88 58.97c.17.1.34.22.5.38l2.29 2.29c.12.12.24.28.34.42 2.57 3.52 2.17 6.66.42 9.52.31.12.62.29.86.54l2.29 2.29c.12.12.24.28.34.42 2.76 3.8 2.07 7.12 0 10.14.1.05.17.14.28.24l2.29 2.29c.12.12.24.28.34.42 5.31 7.26-1.02 13.42-6.1 18.39l-1.31 1.31-5.67 5.95-.18.17c-5.19 4.71-10.33 5.97-16.28 7.42-1 .24-2 .5-3.4.86-.04 0-.06.02-.1.02-3.22.88-6.14 1.09-8.76.62-2.66-.48-4.97-1.67-6.9-3.56L2.31 99.29c-2-1.93-2.69-4.31-2.12-7.14.43-2.26 1.75-4.77 3.81-7.47l5.3-29.94v-.12c.24-1.71.78-4.24 1.71-6.68.71-1.83 1.67-3.62 2.92-5.07 1.51-1.71 3-2.76 4.47-3.32 1.81-.69 3.54-.6 5.07.06 1.43.6 2.64 1.69 3.56 3.08 1.12 1.67 1.85 3.8 2.05 6.02.16 1.83.48 4.85.78 7.81l.24 2.47L53 36.07c4.4-4.4 9.16-5.27 12.97-4.02 1.53.5 2.88 1.33 4 2.45s1.95 2.47 2.45 4c1.26 3.8.4 8.63-3.92 12.95l-7.59 7.59-.03-.07z\"/></svg>");

/***/ }),

/***/ "./resources/svg/folder.svg":
/*!**********************************!*\
  !*** ./resources/svg/folder.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.88 94.03\"><path d=\"M7.27 8.75h7.18V0H56.4v8.75h59.17v11.71l-108.3-5.2V8.75zM0 21.61h122.88l-9.07 66.7c-.42 3.11-2.59 5.72-5.73 5.72H12.73c-3.14 0-5.4-2.59-5.73-5.73L0 21.61z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"/></svg>");

/***/ }),

/***/ "./resources/svg/folder_search.svg":
/*!*****************************************!*\
  !*** ./resources/svg/folder_search.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.879 94.035\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.272 8.754h7.181V0h41.954v8.754h59.167v11.708L7.272 15.257V8.754zm50.469 26.243c5.626 0 10.73 2.289 14.425 5.97a20.313 20.313 0 015.971 14.425c0 4.115-1.227 7.961-3.322 11.164l8.83 9.621-6.092 5.567-8.514-9.368a20.313 20.313 0 01-11.298 3.412c-5.626 0-10.729-2.289-14.426-5.971a20.31 20.31 0 01-5.971-14.426c0-5.626 2.29-10.729 5.971-14.425a20.312 20.312 0 0114.426-5.969zm11.734 8.662a16.555 16.555 0 00-11.734-4.867 16.552 16.552 0 00-11.734 4.867 16.558 16.558 0 00-4.867 11.734c0 4.579 1.865 8.732 4.867 11.734a16.554 16.554 0 0011.734 4.867 16.55 16.55 0 0011.734-4.867 16.557 16.557 0 004.867-11.734c0-4.579-1.865-8.732-4.867-11.734zM0 21.613h122.879l-9.072 66.698c-.424 3.112-2.586 5.724-5.727 5.724H12.735c-3.145 0-5.401-2.594-5.73-5.729L0 21.613z\"/></svg>");

/***/ }),

/***/ "./resources/svg/improvement_performance.svg":
/*!***************************************************!*\
  !*** ./resources/svg/improvement_performance.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.88 97.62\"><path d=\"M90.51 64.82c-.39-.27-.83-.39-1.28-.3-.45.09-.83.33-1.1.71l-1.52 2.14c-.54-.24-1.1-.42-1.7-.57-.6-.15-1.16-.27-1.76-.36l-.48-2.8c-.09-.48-.33-.83-.68-1.1-.39-.27-.8-.36-1.28-.27l-3.51.63c-.45.09-.8.3-1.1.69-.27.39-.39.8-.3 1.28l.45 2.56c-.57.24-1.1.51-1.61.83-.51.3-1.01.66-1.46 1.01l-2.38-1.64c-.39-.27-.8-.39-1.25-.3-.45.09-.83.33-1.1.72l-2.03 2.89c-.27.39-.39.83-.3 1.28.09.48.33.83.72 1.1l2.14 1.52c-.24.54-.42 1.1-.57 1.7-.15.6-.27 1.16-.36 1.76l-2.8.48c-.48.09-.83.33-1.1.68-.27.39-.36.8-.27 1.28l.63 3.51c.09.45.3.8.68 1.1.39.27.8.39 1.28.3l2.56-.45c.24.57.51 1.1.83 1.61.3.51.66 1.01 1.01 1.49l-1.64 2.35c-.27.39-.39.8-.3 1.25.09.45.33.83.71 1.1l2.92 2.05c.39.27.83.36 1.28.27.45-.09.83-.3 1.13-.68l1.52-2.17c.54.24 1.1.42 1.7.57.6.15 1.16.27 1.76.36l.48 2.8c.09.48.33.83.68 1.1.39.27.8.36 1.28.27l3.51-.63c.45-.09.8-.3 1.1-.68.27-.39.39-.8.3-1.28l-.45-2.56c.57-.24 1.1-.51 1.61-.83.51-.3 1.01-.65 1.49-1.01l2.35 1.64c.39.27.8.39 1.28.3.48-.09.83-.33 1.1-.71l2.05-2.92c.27-.39.36-.83.27-1.28-.09-.45-.3-.83-.69-1.13l-2.17-1.49c.24-.54.42-1.1.57-1.7.15-.6.27-1.16.36-1.76l2.8-.48c.48-.09.83-.33 1.1-.69.27-.39.36-.8.27-1.28l-.63-3.51c-.09-.45-.3-.8-.68-1.1-.39-.27-.8-.39-1.28-.3l-2.56.45c-.24-.54-.51-1.07-.83-1.61-.3-.54-.66-1.01-1.01-1.46l1.64-2.38c.27-.39.39-.8.3-1.25-.09-.45-.33-.83-.71-1.1l-2.89-2.03-.08.03zm26.41-9.69l-6.52.06a1.72 1.72 0 01-.03-3.44l10.73-.11h.26l.04.01h.01l.04.01h.01l.04.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02.01.01.02.02.01.01.02.02.02.02v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.01.03v.01l.01.03v.01l.01.03.01.03v.02l.01.03v.01l.01.03v.01l.01.03v.01l.01.03v.01l.01.03V53l.01.04v.01l.01.04v.01l.01.04v.01l.01.04v.2l.05 11.09c0 .95-.76 1.72-1.71 1.73-.95 0-1.72-.76-1.72-1.71l-.03-6.96-6.3 6.3c-.67.67-1.77.67-2.44 0s-.67-1.77 0-2.44l6.18-6.27zM57.64 3.48l-6.52.06c-.95.01-1.72-.76-1.73-1.7A1.72 1.72 0 0151.1.11L61.83 0h.26l.04.01h.01l.04.01h.01l.04.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.01h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02h.01l.03.02H63l.03.02h.01l.03.02h.01l.03.02h.01l.03.02.01.01.02.02.01.01.02.02v.01l.02.02v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01l.02.03v.01L63.4 1v.01l.01.03v.01l.01.03v.01l.01.03.01.03v.02l.01.03v.01l.01.03v.01l.01.03v.01l.01.03v.01l.01.04v.01l.01.04v.01l.01.04v.01l.01.04v.25l.05 11.09c0 .95-.76 1.72-1.71 1.72s-1.72-.76-1.72-1.71l-.03-6.96-6.3 6.3c-.67.67-1.77.67-2.44 0-.67-.67-.67-1.77 0-2.44l6.27-6.29zm39.85 14.28l-12.13.12a2.57 2.57 0 11-.04-5.14l18.43-.18h.29l.05.01h.01l.05.01h.01l.05.01h.01l.05.01h.01l.05.01h.01l.05.01h.01l.05.01h.01l.05.01h.01l.05.02h.01l.05.02h.01l.05.02h.01l.05.02h.01l.05.02h.01l.05.02h.01l.05.02h.01l.05.02.01.01.05.02.01.01.04.03.01.01.04.03.01.01.04.03.01.01.04.03.01.01.04.03.01.01.04.03.01.01.04.03.01.01.04.03.01.01.04.03.01.01.04.03.01.01.04.04.01.01.04.04.01.01.04.04.01.01.03.04.01.01.03.04.01.01.03.04.01.01.03.04.01.01.03.04.01.01.03.04.01.01.03.04.01.01.03.04.01.01.03.04v.01l.03.05v.01l.03.05.02.05v.01l.02.05v.01l.02.05v.01l.02.05v.01l.02.05v.01l.02.05v.01l.02.05v.01l.02.05v.01l.01.05v.01l.01.05v.01l.01.05v.01l.01.06.01.05v.01l.01.05v.01l.01.05v.01l.01.06v.22l.08 18.69a2.57 2.57 0 01-2.56 2.58 2.57 2.57 0 01-2.58-2.56l-.05-12.51-17.84 17.81a2.577 2.577 0 01-3.65 0 2.577 2.577 0 010-3.65l17.73-17.73zM80.29 73.1c.92-.15 1.85-.15 2.77.06.89.21 1.7.57 2.44 1.07.71.51 1.34 1.16 1.85 1.94.51.77.83 1.64.98 2.56.15.92.15 1.85-.06 2.77-.21.89-.57 1.7-1.07 2.44-.51.71-1.16 1.34-1.94 1.85-.77.51-1.64.83-2.56.98-.92.15-1.85.15-2.77-.06-.89-.21-1.7-.57-2.44-1.07a7.295 7.295 0 01-1.85-1.94c-.51-.77-.83-1.64-.98-2.56-.15-.92-.15-1.85.06-2.77.21-.89.57-1.7 1.07-2.44.51-.71 1.16-1.34 1.94-1.85.78-.5 1.64-.83 2.56-.98zM53.25 31.35a1.22 1.22 0 00-.42-.3c-.12-.06-.27-.09-.45-.09s-.33.03-.45.09-.27.15-.39.27l-.03.03-3.37 3.37a1.9 1.9 0 01-2.44.21c-.39-.24-.77-.48-1.22-.71-.48-.24-.92-.48-1.34-.69-.45-.21-.92-.42-1.4-.6-.42-.15-.89-.33-1.46-.51-.8-.27-1.31-1.01-1.31-1.82v-5.15c0-.18-.03-.36-.09-.48s-.15-.27-.27-.36a1.41 1.41 0 00-.36-.27c-.12-.06-.3-.09-.48-.09H31.3c-.18 0-.33.03-.45.06-.12.06-.27.15-.42.3-.12.12-.21.24-.24.36-.06.12-.09.3-.09.48v4.74c0 .95-.69 1.73-1.58 1.91-.51.12-.98.24-1.4.36-.48.15-.92.3-1.4.48-.45.18-.92.36-1.37.6-.48.21-.89.45-1.31.66-.77.42-1.67.27-2.26-.33l-3.72-3.69c-.03-.03-.03-.03-.03-.06a1.41 1.41 0 00-.36-.27c-.12-.06-.24-.06-.42-.06s-.33.03-.45.09c-.15.06-.27.15-.42.3l-4.53 4.56c-.15.15-.24.27-.3.42-.06.12-.09.27-.09.45s.03.33.09.45.15.27.27.39v.03l3.37 3.37c.65.65.74 1.7.21 2.44-.24.39-.48.77-.71 1.22-.24.48-.48.92-.69 1.34-.21.45-.42.92-.6 1.4-.15.42-.33.89-.51 1.46-.27.8-1.01 1.31-1.82 1.31H4.94c-.18 0-.36.03-.48.09s-.24.15-.36.24c-.12.12-.21.24-.24.36-.06.12-.09.3-.09.48v6.49c0 .18.03.33.06.45.06.12.15.27.3.42.12.12.24.21.36.24.12.06.3.09.48.09h4.74c.95 0 1.73.68 1.91 1.58.12.51.24.98.36 1.37.15.48.3.95.48 1.43.18.45.36.92.6 1.4.24.51.45.95.66 1.37.39.77.24 1.67-.36 2.23l-3.69 3.66-.05-.02c-.12.12-.21.24-.27.36-.06.12-.06.24-.06.42s.03.33.09.45c.06.15.15.3.3.42l4.5 4.56c.12.12.27.21.42.27.15.06.3.09.48.09s.36-.03.51-.09c.12-.06.27-.15.39-.24l3.34-3.4c.66-.69 1.7-.74 2.44-.24.39.24.77.48 1.22.71.48.24.92.48 1.34.68.45.21.92.42 1.4.6.42.15.89.33 1.46.51.8.27 1.31 1.01 1.31 1.82v5.15c0 .18.03.36.09.48s.15.27.24.36c.24.24.51.33.86.33h6.49c.18 0 .33-.03.45-.06.12-.06.27-.15.42-.3.12-.12.21-.24.24-.36.06-.12.09-.3.09-.48V78.2c0-.95.69-1.73 1.58-1.91.51-.12.98-.24 1.4-.36.48-.15.92-.3 1.4-.48.45-.18.92-.36 1.4-.6.51-.24.95-.45 1.37-.66.77-.39 1.67-.24 2.23.36l3.66 3.69.03.03c.12.12.24.21.36.27.12.06.27.06.45.06s.33-.03.45-.09.24-.15.36-.27c.03-.03.06-.06.09-.06l4.53-4.47c.12-.12.21-.27.27-.42.06-.15.09-.3.09-.48s-.03-.36-.09-.51c-.06-.12-.15-.27-.24-.39l-3.4-3.34c-.69-.65-.74-1.7-.24-2.44.24-.39.48-.77.71-1.22.24-.48.48-.92.69-1.34.21-.45.42-.92.6-1.4.15-.42.33-.89.51-1.46.27-.8 1.01-1.31 1.82-1.31h5.15c.18 0 .36-.03.48-.09s.27-.15.36-.24c.24-.24.33-.51.33-.86v-6.49c0-.18-.03-.33-.06-.45-.06-.12-.15-.27-.3-.42-.12-.12-.24-.21-.36-.24-.12-.06-.3-.09-.48-.09h-4.74c-.95 0-1.76-.71-1.91-1.61-.12-.42-.24-.86-.36-1.31-.15-.45-.3-.92-.51-1.43 0-.03-.03-.06-.03-.09-.18-.48-.36-.89-.54-1.31-.21-.45-.42-.89-.66-1.31-.42-.77-.27-1.67.33-2.26l3.69-3.72c0-.03.03-.03.06-.03.12-.12.21-.24.27-.36.06-.12.06-.24.06-.42s-.03-.33-.09-.45a1.22 1.22 0 00-.3-.42l-4.56-4.53.02.08zm1.07-3.85c.63.27 1.16.63 1.64 1.1l4.56 4.53h.03c.48.48.83 1.01 1.1 1.61.27.63.39 1.25.39 1.94 0 .68-.15 1.34-.39 1.94-.27.6-.63 1.13-1.13 1.58l-2.68 2.71c.03.09.09.18.12.27.24.51.45 1.04.65 1.55 0 .03.03.06.03.09.21.51.39 1.07.57 1.67l.06.21h3.28c.68 0 1.34.12 1.94.39.6.24 1.13.63 1.61 1.1l.03.03c.48.48.83 1.01 1.07 1.61.24.6.39 1.25.39 1.91v6.49c0 1.4-.48 2.59-1.46 3.57-.48.48-1.04.86-1.64 1.1-.6.24-1.25.36-1.94.36h-3.81c-.03.09-.09.21-.12.3-.21.54-.45 1.07-.68 1.61-.27.57-.51 1.1-.77 1.58l-.09.18 2.32 2.29.09.09c.48.48.8 1.04 1.04 1.64.24.6.36 1.22.36 1.91 0 .66-.12 1.28-.36 1.88-.24.6-.57 1.13-1.04 1.64l-.06.06-4.56 4.53c-.48.51-1.01.86-1.61 1.13-.6.27-1.25.39-1.97.39-.68 0-1.34-.15-1.97-.39-.63-.27-1.16-.66-1.61-1.13l-2.65-2.68c-.09.06-.18.09-.3.12-.51.21-1.04.45-1.61.66-.54.21-1.1.39-1.67.57-.09.03-.15.06-.24.06v3.25c0 .68-.12 1.34-.39 1.94-.24.6-.63 1.13-1.1 1.61l-.03.03c-.48.48-1.01.83-1.61 1.07-.6.24-1.25.39-1.91.39h-6.49c-1.4 0-2.59-.48-3.57-1.46-.48-.48-.86-1.04-1.1-1.64-.24-.6-.36-1.25-.36-1.94v-3.81c-.09-.03-.21-.09-.3-.12-.54-.21-1.07-.45-1.61-.69-.57-.27-1.1-.51-1.58-.77l-.18-.09-2.29 2.32-.09.09c-.48.48-1.04.8-1.64 1.04-.6.24-1.22.36-1.91.36-.66 0-1.28-.12-1.88-.36-.6-.24-1.13-.57-1.64-1.04l-.06-.06-4.56-4.62c-.48-.48-.83-1.01-1.1-1.61-.27-.63-.39-1.25-.39-1.94s.15-1.34.39-1.94c.27-.6.66-1.13 1.13-1.61l2.68-2.65a.898.898 0 01-.12-.3c-.21-.51-.45-1.04-.66-1.61-.21-.57-.42-1.1-.57-1.67l-.06-.24H5.03c-.69 0-1.34-.12-1.94-.39-.6-.24-1.13-.63-1.61-1.1l-.03-.03C.97 59.63.62 59.1.38 58.5.15 57.88 0 57.23 0 56.57v-6.49c0-.68.12-1.31.36-1.94.24-.6.63-1.13 1.1-1.64.48-.48 1.04-.86 1.64-1.1.6-.24 1.25-.36 1.94-.36h3.81c.03-.09.09-.21.12-.3.21-.54.45-1.07.68-1.61.27-.57.51-1.1.77-1.58l.09-.18-2.29-2.32c-.48-.48-.86-1.01-1.1-1.64-.27-.63-.39-1.28-.39-1.94 0-.68.12-1.31.39-1.94.27-.63.63-1.16 1.1-1.64l4.53-4.56v-.03c.48-.48 1.01-.83 1.61-1.1.63-.27 1.25-.39 1.94-.39s1.34.15 1.94.39c.6.27 1.13.63 1.58 1.13l2.71 2.68c.09-.03.18-.09.24-.12.51-.24 1.04-.45 1.61-.68.54-.21 1.1-.39 1.67-.57.09-.03.15-.06.24-.06v-3.25c0-.69.12-1.34.39-1.94.24-.6.63-1.13 1.1-1.61l.03-.03c.48-.48 1.01-.83 1.61-1.07.6-.24 1.25-.39 1.91-.39h6.49c.68 0 1.31.12 1.94.36.63.24 1.16.63 1.64 1.1.48.48.86 1.04 1.1 1.64.24.6.36 1.25.36 1.94v3.81c.09.03.21.09.3.12.54.21 1.07.45 1.61.69.57.27 1.1.51 1.58.77l.18.09 2.32-2.29c.48-.48 1.01-.86 1.64-1.1.63-.27 1.28-.39 1.94-.39.69 0 1.31.12 1.94.39v.08h-.05zM33.74 39.57c.98 0 1.97.09 2.92.3.92.18 1.85.48 2.77.86.86.39 1.7.83 2.47 1.34.77.51 1.49 1.1 2.14 1.76.66.66 1.25 1.37 1.76 2.17.54.77.98 1.61 1.34 2.47.03.06.03.12.06.15.36.86.63 1.76.8 2.62.18.95.3 1.94.3 2.92s-.09 1.97-.3 2.92c-.18.92-.48 1.85-.86 2.77-.39.86-.83 1.7-1.34 2.47-.54.77-1.1 1.49-1.76 2.17-.66.66-1.37 1.25-2.17 1.76-.77.54-1.61.98-2.47 1.34-.06.03-.12.03-.15.06-.86.36-1.76.63-2.62.8-.95.18-1.94.3-2.92.3s-1.97-.09-2.92-.3c-.92-.18-1.85-.48-2.77-.86-.86-.39-1.7-.83-2.47-1.34-.77-.51-1.49-1.1-2.14-1.76-.66-.66-1.25-1.37-1.76-2.17-.54-.77-.98-1.61-1.34-2.47-.03-.06-.03-.12-.06-.15-.36-.86-.63-1.76-.8-2.62-.18-.95-.3-1.94-.3-2.92s.09-1.97.3-2.92c.18-.92.48-1.85.86-2.77.39-.86.83-1.7 1.34-2.47.51-.77 1.1-1.49 1.76-2.17.65-.65 1.37-1.25 2.14-1.76.77-.54 1.61-.98 2.47-1.34.06-.03.12-.03.15-.06.86-.36 1.76-.63 2.62-.8.95-.18 1.94-.3 2.92-.3h.03zm2.18 4.05c-.68-.15-1.43-.21-2.17-.21s-1.46.06-2.17.21c-.68.15-1.31.33-1.91.57-.03.03-.06.03-.12.06-.68.3-1.31.63-1.88 1.01-.57.39-1.1.8-1.58 1.28s-.92 1.01-1.28 1.58c-.39.57-.71 1.19-1.01 1.88-.27.63-.48 1.31-.63 2.03-.15.68-.21 1.43-.21 2.17s.06 1.46.21 2.17c.15.68.33 1.31.57 1.91.03.03.03.06.06.12.3.69.63 1.31 1.01 1.88.39.57.8 1.1 1.28 1.58s1.01.92 1.58 1.28c.57.39 1.19.71 1.88 1.01.63.27 1.31.48 2.03.63.68.15 1.43.21 2.17.21s1.46-.06 2.17-.21c.69-.15 1.31-.33 1.91-.57.03-.03.06-.03.12-.06.68-.3 1.31-.63 1.88-1.01.57-.39 1.1-.8 1.58-1.28s.92-1.01 1.28-1.58c.39-.57.71-1.19 1.01-1.88.27-.63.48-1.31.63-2.03.15-.69.21-1.43.21-2.17s-.06-1.46-.21-2.17c-.15-.68-.33-1.31-.57-1.91-.03-.03-.03-.06-.06-.12-.3-.69-.63-1.31-1.01-1.88-.39-.57-.8-1.1-1.28-1.58s-1.01-.92-1.58-1.28c-.57-.39-1.19-.71-1.88-1.01-.63-.28-1.32-.48-2.03-.63z\"/></svg>");

/***/ }),

/***/ "./resources/svg/magnifier.svg":
/*!*************************************!*\
  !*** ./resources/svg/magnifier.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.879 119.799\"><path fill=\"none\" d=\"M-1-1h802v602H-1z\"/><path fill=\"#fff\" d=\"M49.988 0h.016v.007C63.803.011 76.298 5.608 85.34 14.652c9.027 9.031 14.619 21.515 14.628 35.303h.007v.073h-.007a49.932 49.932 0 01-3.471 18.301v.007a50.011 50.011 0 01-5.547 10.307l29.082 26.139.018.016.157.146.011.011a8.602 8.602 0 012.649 5.78 8.611 8.611 0 01-1.979 5.971l-.011.016-.175.203-.035.035-.146.16-.016.021a8.594 8.594 0 01-5.78 2.646 8.602 8.602 0 01-5.971-1.978l-.015-.011-.204-.175-.029-.024-29.745-26.734c-.88.62-1.778 1.209-2.687 1.765a50.063 50.063 0 01-3.813 2.115c-6.699 3.342-14.269 5.222-22.272 5.222v.007h-.016v-.007c-13.799-.004-26.296-5.601-35.338-14.645C5.605 76.291.016 63.805.007 50.021H0v-.049h.007c.004-13.799 5.601-26.296 14.645-35.338C23.683 5.608 36.167.016 49.955.007V0h.033zm.016 11.21v.007h-.049v-.007c-10.686.007-20.372 4.35-27.384 11.359-7.011 7.009-11.358 16.705-11.361 27.404h.007v.049h-.007c.007 10.686 4.347 20.367 11.359 27.381 7.009 7.012 16.705 11.359 27.403 11.361v-.007h.049v.007c10.686-.007 20.368-4.348 27.382-11.359 7.011-7.009 11.358-16.702 11.36-27.4h-.006v-.049h.006c-.006-10.686-4.35-20.372-11.358-27.384-7.009-7.012-16.702-11.359-27.401-11.362z\"/></svg>");

/***/ }),

/***/ "./resources/svg/movie_tape.svg":
/*!**************************************!*\
  !*** ./resources/svg/movie_tape.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.88 95.8\"><path d=\"M12.14 0h98.6c3.34 0 6.38 1.37 8.58 3.56 2.2 2.2 3.56 5.24 3.56 8.58v71.47c0 3.34-1.37 6.38-3.56 8.58a12.11 12.11 0 01-8.58 3.56h-19.2c-.16.03-.33.04-.51.04-.17 0-.34-.01-.51-.04H62.74c-.16.03-.33.04-.51.04-.17 0-.34-.01-.51-.04H33.31c-.16.03-.33.04-.51.04-.17 0-.34-.01-.51-.04H12.14c-3.34 0-6.38-1.37-8.58-3.56S0 86.95 0 83.61V12.14C0 8.8 1.37 5.76 3.56 3.56 5.76 1.37 8.8 0 12.14 0zm43.05 31.24l20.53 14.32a2.92 2.92 0 01.1 4.87L55.37 64.57a2.928 2.928 0 01-4.78-2.27V33.63h.01c0-.58.17-1.16.52-1.67a2.93 2.93 0 014.07-.72zm38.76 48.21V89.9h16.78c1.73 0 3.3-.71 4.44-1.85a6.267 6.267 0 001.85-4.44v-4.16H93.95zM88.1 89.9V79.45H65.16V89.9H88.1zm-28.79 0V79.45H35.73V89.9h23.58zm-29.44 0V79.45H5.85v4.16c0 1.73.71 3.3 1.85 4.44a6.267 6.267 0 004.44 1.85h17.73zM5.85 73.6h111.18V22.2H5.85v51.4zM88.1 16.35V5.85H65.16v10.49H88.1v.01zm5.85-10.5v10.49h23.07v-4.2c0-1.73-.71-3.3-1.85-4.44a6.267 6.267 0 00-4.44-1.85H93.95zm-34.64 10.5V5.85H35.73v10.49h23.58v.01zm-29.44 0V5.85H12.14c-1.73 0-3.3.71-4.44 1.85a6.267 6.267 0 00-1.85 4.44v4.2h24.02v.01z\"/></svg>");

/***/ }),

/***/ "./resources/svg/photo_gallery.svg":
/*!*****************************************!*\
  !*** ./resources/svg/photo_gallery.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.879 96.568\"><path d=\"M5.535 15.447h98.221c1.527 0 2.891.62 3.883 1.611a5.54 5.54 0 011.611 3.882v70.134a5.469 5.469 0 01-1.611 3.883 1.807 1.807 0 01-.289.247c-.951.868-2.23 1.363-3.635 1.363H5.494c-1.528 0-2.892-.619-3.883-1.61S0 92.562 0 91.075V20.941c0-1.528.62-2.891 1.611-3.882s2.396-1.611 3.883-1.611h.041v-.001zm22.683 19.042a7.88 7.88 0 017.882 7.882 7.882 7.882 0 11-15.764 0 7.88 7.88 0 017.882-7.882zm33.171 33.827l15.766-27.258 16.748 42.363-78.165-.001v-5.254l6.57-.327 6.567-16.093 3.282 11.496h9.855l8.537-22.004 10.84 17.078zM21.891 6.525a3.27 3.27 0 01-3.263-3.263A3.27 3.27 0 0121.891 0h97.726a3.27 3.27 0 013.262 3.263v68.895a3.27 3.27 0 01-3.262 3.264 3.27 3.27 0 01-3.264-3.264V6.567H21.891v-.042zm80.832 15.449H6.567v68.027h96.155V21.974h.001z\"/></svg>");

/***/ }),

/***/ "./resources/svg/play_round.svg":
/*!**************************************!*\
  !*** ./resources/svg/play_round.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.88 122.88\"><path d=\"M61.44 0c33.93 0 61.44 27.51 61.44 61.44s-27.51 61.44-61.44 61.44S0 95.37 0 61.44 27.51 0 61.44 0zm23.47 65.52c3.41-2.2 3.41-4.66 0-6.61L49.63 38.63c-2.78-1.75-5.69-.72-5.61 2.92l.11 40.98c.24 3.94 2.49 5.02 5.8 3.19l34.98-20.2z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"/></svg>");

/***/ }),

/***/ "./resources/svg/rocket_launch.svg":
/*!*****************************************!*\
  !*** ./resources/svg/rocket_launch.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.88 121.08\"><path d=\"M15.36 86.24c1.14-.89 2.79-.68 3.68.46.89 1.14.68 2.79-.46 3.68L5.35 100.66l-.1 13.85 16.25-.91 8.82-14.02a2.622 2.622 0 013.61-.82c1.22.77 1.59 2.39.82 3.61l-9.5 15.09c-.43.73-1.21 1.24-2.12 1.29L2.76 119.9h-.15a2.614 2.614 0 01-2.6-2.63l.13-17.71c-.06-.85.29-1.71 1.01-2.27l14.21-11.05zm24.73-32.31c6.6-19.73 15.5-33.72 28.02-42.53C81.1 2.25 97.8-1.21 119.68.37a2.89 2.89 0 012.69 2.83c2.12 23.69-2.48 40.49-12.28 53.22-9.43 12.24-23.58 20.52-41.14 27.47v23.13c0 1.13-.65 2.12-1.6 2.59l-17.88 11.05a2.89 2.89 0 01-3.98-.94c-.22-.36-.36-.75-.41-1.14-3.96-30.26-8.17-31.71-32.91-40.27-2.96-1.02-6.15-2.13-8.31-2.89a2.895 2.895 0 01-1.77-3.69c.11-.32.28-.61.48-.87l11.79-16.8c.59-.84 1.55-1.28 2.5-1.23l23.23 1.1zm50.62-22.29a8.78 8.78 0 00-6.24-2.58c-2.43 0-4.64.99-6.24 2.58a8.78 8.78 0 00-2.58 6.24c0 2.43.99 4.64 2.58 6.24a8.78 8.78 0 006.24 2.58c2.43 0 4.64-.99 6.24-2.58a8.78 8.78 0 002.58-6.24c0-2.44-.99-4.64-2.58-6.24z\"/></svg>");

/***/ }),

/***/ "./resources/svg/search.svg":
/*!**********************************!*\
  !*** ./resources/svg/search.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.879 119.799\"><path d=\"M49.988 0h.016v.007C63.803.011 76.298 5.608 85.34 14.652c9.027 9.031 14.619 21.515 14.628 35.303h.007v.073h-.007a49.932 49.932 0 01-3.471 18.301v.007a50.011 50.011 0 01-5.547 10.307l29.082 26.139.018.016.157.146.011.011a8.602 8.602 0 012.649 5.78 8.611 8.611 0 01-1.979 5.971l-.011.016-.175.203-.035.035-.146.16-.016.021a8.594 8.594 0 01-5.78 2.646 8.602 8.602 0 01-5.971-1.978l-.015-.011-.204-.175-.029-.024-29.745-26.734c-.88.62-1.778 1.209-2.687 1.765a50.063 50.063 0 01-3.813 2.115c-6.699 3.342-14.269 5.222-22.272 5.222v.007h-.016v-.007c-13.799-.004-26.296-5.601-35.338-14.645C5.605 76.291.016 63.805.007 50.021H0v-.049h.007c.004-13.799 5.601-26.296 14.645-35.338C23.683 5.608 36.167.016 49.955.007V0h.033zm.016 11.21v.007h-.049v-.007c-10.686.007-20.372 4.35-27.384 11.359-7.011 7.009-11.358 16.705-11.361 27.404h.007v.049h-.007c.007 10.686 4.347 20.367 11.359 27.381 7.009 7.012 16.705 11.359 27.403 11.361v-.007h.049v.007c10.686-.007 20.368-4.348 27.382-11.359 7.011-7.009 11.358-16.702 11.36-27.4h-.006v-.049h.006c-.006-10.686-4.35-20.372-11.358-27.384-7.009-7.012-16.702-11.359-27.401-11.362z\"/></svg>");

/***/ }),

/***/ "./resources/svg/shutdown.svg":
/*!************************************!*\
  !*** ./resources/svg/shutdown.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 122.88 122.88\" xml:space=\"preserve\"><style>.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}</style><path d=\"M61.44 0c33.93 0 61.44 27.51 61.44 61.44 0 33.93-27.51 61.44-61.44 61.44C27.51 122.88 0 95.37 0 61.44 0 27.51 27.51 0 61.44 0z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"transparent\"/><path class=\"st1\" d=\"M79.16 46.24c-2.32-2.68-2.03-6.73.65-9.05s6.73-2.03 9.05.65c2.79 3.23 5.01 6.96 6.53 11.04 1.48 3.98 2.29 8.23 2.29 12.62 0 10.01-4.06 19.07-10.62 25.63S71.45 97.75 61.44 97.75c-10.01 0-19.07-4.06-25.63-10.62S25.2 71.51 25.2 61.5c0-4.32.78-8.5 2.2-12.4 1.46-4 3.62-7.69 6.33-10.91a6.406 6.406 0 019.03-.78 6.406 6.406 0 01.78 9.03 23.366 23.366 0 00-4.07 7.04c-.9 2.47-1.39 5.17-1.39 8.02 0 6.45 2.62 12.3 6.84 16.53a23.285 23.285 0 0016.52 6.84c6.45 0 12.3-2.62 16.52-6.84s6.85-10.07 6.85-16.53c0-2.91-.51-5.65-1.43-8.14-.98-2.62-2.41-5.03-4.22-7.12z\"/><path class=\"st1\" d=\"M67.88 49.12c0 3.55-2.88 6.44-6.44 6.44-3.55 0-6.44-2.88-6.44-6.44V29.93c0-3.55 2.88-6.44 6.44-6.44 3.55 0 6.44 2.88 6.44 6.44v19.19z\"/></svg>");

/***/ }),

/***/ "./resources/svg/smile_in_glasses.svg":
/*!********************************************!*\
  !*** ./resources/svg/smile_in_glasses.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.88 122.88\"><path d=\"M61.44 0v.01c16.97 0 32.33 6.87 43.44 17.98s17.98 26.47 17.98 43.44h.01v.01h-.01c0 16.97-6.87 32.33-17.98 43.44s-26.47 17.98-43.44 17.98v.01h-.01v-.01c-16.97 0-32.33-6.87-43.44-17.98C6.89 93.77.02 78.41.02 61.44H0v-.01h.02C.02 44.47 6.89 29.11 18 18S44.47.02 61.44.01V0zm26.33 77.33c-15.86 13.2-33.31 14.03-52.67 0 9.54 25.7 45.38 25.3 52.67 0zM52.95 38.32c.71.17 1.29.53 1.77 1.02 2.57-1.44 5.08-2.09 7.52-2.04 2.14.05 4.17.62 6.11 1.67 1.26-1.25 3.38-1.64 6.94-1.57 5.83.12 12.87-.12 17.22.91.55.13 1.02.37 1.42.7l8.58 2.08-6.19 4.93c.05.8.06 1.58.06 2.31 0 8.24-6.68 14.34-14.91 14.34-8.24 0-14.91-6.1-14.91-14.34 0-1.74.03-3.21.14-4.47-1.48-.96-3-1.49-4.55-1.52-1.72-.04-3.57.52-5.56 1.76.2 1.42.24 2.92.24 4.23 0 8.24-6.68 14.34-14.91 14.34-8.24 0-14.91-6.1-14.91-14.34 0-.94.01-1.8.03-2.6l-6.66-5.23 8.92-1.97c1.3-.92 3.31-1.21 6.43-1.14 5.83.13 12.87-.11 17.22.93zm8.49-30.49v.02h-.01l.01-.02c-14.79 0-28.19 6.01-37.9 15.71-9.7 9.71-15.71 23.11-15.71 37.89h.01v.01h-.01c0 14.79 6.01 28.19 15.71 37.89 9.71 9.71 23.11 15.72 37.89 15.72v-.02h.01v.02c14.79 0 28.19-6.01 37.89-15.71 9.71-9.71 15.71-23.11 15.71-37.9h-.01v-.01h.02c0-14.78-6.01-28.18-15.71-37.89-9.71-9.71-23.11-15.71-37.9-15.71z\"/></svg>");

/***/ }),

/***/ "./resources/svg/star_full.svg":
/*!*************************************!*\
  !*** ./resources/svg/star_full.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.88 116.864\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M61.44 0l16.911 41.326 44.529 3.312-34.077 28.853 10.609 43.373L61.44 93.371l-37.972 23.493 10.61-43.373L0 44.638l44.529-3.312L61.44 0z\"/></svg>");

/***/ }),

/***/ "./resources/svg/star_yellow.svg":
/*!***************************************!*\
  !*** ./resources/svg/star_yellow.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 26.9 25.65\"><defs><path id=\"a\" d=\"M14.1.43l3.44 8.05 8.72.78c.39.03.67.37.64.76-.02.19-.1.35-.24.47l-6.6 5.76 1.95 8.54a.699.699 0 01-1.07.74l-7.5-4.48-7.52 4.5a.7.7 0 01-1.04-.76l1.95-8.54-6.6-5.76a.708.708 0 01-.07-.99c.14-.15.32-.22.5-.23l8.7-.78L12.8.43c.15-.36.56-.52.92-.37.18.07.31.21.38.37z\"/></defs><clipPath id=\"b\"><use xlink:href=\"#a\" overflow=\"visible\"/></clipPath><g clip-path=\"url(#b)\"><defs><path id=\"c\" d=\"M-.08-.1h27.01v25.85H-.08z\"/></defs><clipPath id=\"d\"><use xlink:href=\"#c\" overflow=\"visible\"/></clipPath><g clip-path=\"url(#d)\"><image width=\"64\" height=\"57\" xlink:href=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q==\" transform=\"matrix(.48 0 0 -.48 -1.14 26.747)\" overflow=\"visible\"/></g></g><path d=\"M14.1.43l3.44 8.05 8.72.78c.39.03.67.37.64.76-.02.19-.1.35-.24.47l-1.18 1.03c-3.21 1.11-7.42 1.78-12.03 1.78-4.61 0-8.83-.67-12.03-1.78L.24 10.49a.708.708 0 01-.07-.99c.13-.15.31-.22.49-.23l8.7-.78L12.8.43c.15-.36.56-.52.92-.37.18.07.31.21.38.37z\" fill=\"#ffd401\"/></svg>");

/***/ }),

/***/ "./resources/svg/video_playlist.svg":
/*!******************************************!*\
  !*** ./resources/svg/video_playlist.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 121.78 122.88\"><path d=\"M30.06 0h61.65c3.43 0 6.23 2.81 6.23 6.23v6.47H23.83V6.23c0-3.43 2.8-6.23 6.23-6.23zM11.23 38.38h99.32c6.18 0 11.23 5.05 11.23 11.23v62.04c0 6.18-5.05 11.23-11.23 11.23H11.23C5.05 122.88 0 117.83 0 111.65V49.61c0-6.18 5.05-11.23 11.23-11.23zm42.88 20L81.4 77.41c.45.29.86.67 1.18 1.13 1.28 1.85.81 4.39-1.04 5.67L54.37 103c-.7.58-1.6.92-2.59.92-2.26 0-4.09-1.83-4.09-4.09V61.72h.02a4.066 4.066 0 016.4-3.34zM18.14 18.81h85.49c3.43 0 6.23 2.81 6.23 6.23v6.72H11.91v-6.72c0-3.43 2.8-6.23 6.23-6.23z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"/></svg>");

/***/ }),

/***/ "./resources/svg/video_setting.svg":
/*!*****************************************!*\
  !*** ./resources/svg/video_setting.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.88 110.35\"><path d=\"M73.65 40.96l2.68 2.68c.71.71.71 1.86 0 2.57l-2.16 2.16c.6 1.13 1.05 2.33 1.34 3.57h2.8c1 0 1.81.82 1.81 1.81v3.79c0 1-.82 1.81-1.81 1.81h-3.05c-.37 1.22-.9 2.39-1.58 3.47l1.98 1.98c.71.71.71 1.86 0 2.57l-2.68 2.68c-.71.71-1.86.71-2.57 0l-2.16-2.16c-1.13.6-2.33 1.06-3.57 1.34v2.8c0 1-.82 1.81-1.81 1.81h-3.79c-1 0-1.81-.82-1.81-1.81v-3.05c-1.22-.37-2.39-.9-3.47-1.58l-1.98 1.98c-.71.71-1.86.71-2.57 0l-2.68-2.68c-.71-.71-.71-1.86 0-2.57l2.16-2.16c-.6-1.13-1.06-2.33-1.34-3.57h-2.8c-1 0-1.81-.82-1.81-1.81V52.8c0-1 .82-1.81 1.81-1.81h3.05c.37-1.22.9-2.39 1.58-3.47l-1.98-1.98c-.71-.71-.71-1.86 0-2.57l2.68-2.68c.71-.71 1.86-.71 2.57 0l2.16 2.16c1.11-.6 2.31-1.05 3.57-1.34v-2.8c0-1 .82-1.81 1.81-1.81h3.79c1 0 1.81.82 1.81 1.81v3.05c1.22.37 2.39.9 3.47 1.58l1.98-1.98c.71-.7 1.86-.7 2.57 0zM6.32 0v6.22h12.22V0h6.32v14.88h73.15V0h6.32v6.22h12.22V0h6.32v110.35h-6.32v-7.19h-12.22v7.19h-6.32V94.79H24.87v15.56h-6.32v-7.19H6.32v7.19H0V0h6.32zm91.69 21.2H24.87v67.27h73.15V21.2h-.01zm18.55 75.64v-11.8h-12.22v11.8h12.22zm0-18.12v-11.8h-12.22v11.8h12.22zm0-18.13v-11.8h-12.22v11.8h12.22zm0-18.12v-11.8h-12.22v11.8h12.22zm0-18.12v-11.8h-12.22v11.8h12.22zM18.54 96.84v-11.8H6.32v11.8h12.22zm0-18.12v-11.8H6.32v11.8h12.22zm0-18.13v-11.8H6.32v11.8h12.22zm0-18.12v-11.8H6.32v11.8h12.22zm0-18.12v-11.8H6.32v11.8h12.22zm42.9 23.37a7.45 7.45 0 017.45 7.45 7.45 7.45 0 01-7.45 7.45 7.45 7.45 0 01-7.45-7.45 7.45 7.45 0 017.45-7.45z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"/></svg>");

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi ./resources/js/auth/register.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/sex-imperium/resources/js/auth/register.js */"./resources/js/auth/register.js");


/***/ })

/******/ });