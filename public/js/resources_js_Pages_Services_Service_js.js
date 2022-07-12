(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Services_Service_js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module) => {

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

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./resources/js/Components/PageHeader.js":
/*!***********************************************!*\
  !*** ./resources/js/Components/PageHeader.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_images_isoB_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/isoB.png */ "./resources/js/assets/images/isoB.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var PageHeader = function PageHeader(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#F1F5FD" : _ref$color;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bgcolor: color,
    mt: -8,
    sx: {
      height: "50vh",
      backgroundImage: "url(".concat(_assets_images_isoB_png__WEBPACK_IMPORTED_MODULE_1__["default"], ")"),
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: 'fixed'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 py-40 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-30",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        color: "error",
        fontSize: 36,
        variant: "h3",
        fontFamily: "Inter",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
        className: "mt-2 text-lg font-medium text-black text-opacity-50",
        children: [subtitle, " "]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

/***/ }),

/***/ "./resources/js/Components/VideoSection.js":
/*!*************************************************!*\
  !*** ./resources/js/Components/VideoSection.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var VideoSection = function VideoSection(_ref) {
  var title = _ref.title,
      desc = _ref.desc;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    "class": "relative bg-gray-50 overflow-hidden",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      "class": "hidden lg:block lg:absolute lg:inset-0",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
        "class": "absolute top-0 left-1/2 transform translate-x-64 -translate-y-8",
        width: "640",
        height: "784",
        fill: "red",
        viewBox: "0 0 640 784",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("defs", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pattern", {
            id: "9ebea6f4-a1f5-4d96-8c4e-4c2abf658047",
            x: "118",
            y: "0",
            width: "20",
            height: "20",
            patternUnits: "userSpaceOnUse",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
              x: "0",
              y: "0",
              width: "4",
              height: "4",
              "class": "text-gray-200",
              fill: "currentColor"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          y: "72",
          width: "640",
          height: "640",
          "class": "text-gray-50",
          fill: "currentColor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          x: "118",
          width: "404",
          height: "784",
          fill: "url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      "class": "relative pt-6 pb-16 sm:pb-14 lg:pb-22",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("main", {
        "class": "mt-16 mx-auto max-w-7xl px-4 sm:mt-14 sm:px-6 lg:mt-22",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          "class": "lg:grid lg:grid-cols-12 lg:gap-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            "class": "sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
              fontWeight: "bold",
              fontSize: 42,
              fontFamily: "Inter",
              children: title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
              fontWeight: "600",
              fontSize: 14,
              letterSpacing: 1.5,
              lineHeight: 2,
              fontFamily: "Inter-Roman",
              children: [desc, "Disposer des meilleurs candidats aux meilleurs moments, permet de s\u2019assurer de ne pas manquer d\u2019opportunit\xE9sDisposer des meilleurs candidats aux meilleurs moments, permet de s\u2019assurer de ne pas manquer d\u2019opportunit\xE9sDisposer des meilleurs candidats aux meilleurs moments, permet de s\u2019assurer de ne pas manquer d\u2019opportunit\xE9s"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              "class": "mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
                variant: "contained",
                color: "error",
                children: "Demandez une demo"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            "class": "mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              "class": "relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_player__WEBPACK_IMPORTED_MODULE_1__["default"], {
                playing: true,
                className: "react-player",
                width: "100%",
                height: "400px",
                url: "https://www.youtube.com/watch?v=hYv6BM2fWd8"
              })
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoSection);

/***/ }),

/***/ "./resources/js/Pages/Services/Service.js":
/*!************************************************!*\
  !*** ./resources/js/Pages/Services/Service.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _node_modules_video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/video-react/dist/video-react.css */ "./node_modules/video-react/dist/video-react.css");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! video-react */ "./node_modules/video-react/lib/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _Components_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/PageHeader */ "./resources/js/Components/PageHeader.js");
/* harmony import */ var lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lang.js */ "./node_modules/lang.js/src/lang.js");
/* harmony import */ var lang_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lang_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var _Components_VideoSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/VideoSection */ "./resources/js/Components/VideoSection.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var currentLang = new (lang_js__WEBPACK_IMPORTED_MODULE_4___default())();

var ServiceCard = function ServiceCard(_ref) {
  var service = _ref.service;
  console.log(service);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Components_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Archico",
      subtitle: "Les organisations modernes savent que la gestion du risque et conformit\xE9"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      mb: 20,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
        mx: "auto",
        my: 5,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
          color: "error",
          variant: "h3",
          fontFamily: "Inter-Medium",
          textAlign: "center",
          children: service.title.fr
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
          fontFamily: "Inter-Roman",
          lineHeight: 2,
          fontWeight: "600",
          fontSize: 14,
          textAlign: "center",
          children: [service.extrait.fr, " "]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
        justifyContent: "center",
        width: "100%",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Components_VideoSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: service.title.fr,
          desc: service.extrait.fr
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
        container: true,
        spacing: 2,
        mt: 1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
          item: true,
          xs: 12,
          sm: 6,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
            sx: {
              color: "red"
            },
            variant: "h4",
            textAlign: "left",
            fontSize: 20,
            fontFamily: "Inter",
            children: "Vos besoins"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
            fontFamily: "Inter-Roman",
            lineHeight: 2,
            fontWeight: "600",
            sx: {
              px: {
                xs: 3,
                sm: 3
              },
              fontSize: {
                xs: 12,
                lg: 14
              }
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
              className: "text-left service",
              children: [currentLang.getLocale() === "en" ? (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(" ".concat(service.needs.en, " ")) : (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(service.needs.fr)), " "]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
          item: true,
          xs: 12,
          sm: 6,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
            sx: {
              color: "red"
            },
            variant: "h4",
            textAlign: "left",
            fontSize: 20,
            fontFamily: "Inter",
            children: "Notre service"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
            fontFamily: "Inter-Roman",
            lineHeight: 2,
            fontWeight: "600",
            sx: {
              px: {
                xs: 3,
                sm: 3
              },
              fontSize: {
                xs: 12,
                lg: 14
              }
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
              className: "text-left service",
              children: [currentLang.getLocale() === "en" ? (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(" ".concat(service.our_service.en, " ")) : (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(service.our_service.fr)), " "]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
        container: true,
        spacing: 2,
        mt: 1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
          item: true,
          xs: 12,
          sm: 6,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
            sx: {
              color: "red"
            },
            variant: "h4",
            textAlign: "left",
            fontSize: 20,
            fontFamily: "Inter",
            children: "Valeur ajout\xE9es pour le client"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
            fontFamily: "Inter-Roman",
            lineHeight: 2,
            fontWeight: "600",
            sx: {
              px: {
                xs: 3,
                sm: 3
              },
              fontSize: {
                xs: 12,
                lg: 14
              }
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
              className: "text-left service",
              children: [currentLang.getLocale() === "en" ? (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(" ".concat(service.add_values.en, " ")) : (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(service.add_values.fr)), " "]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
          item: true,
          xs: 12,
          sm: 6,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
            sx: {
              color: "red"
            },
            variant: "h4",
            textAlign: "left",
            fontSize: 20,
            fontFamily: "Inter",
            children: "Experience client"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
            fontFamily: "Inter-Roman",
            lineHeight: 2,
            fontWeight: "600",
            sx: {
              px: {
                xs: 3,
                sm: 3
              },
              fontSize: {
                xs: 12,
                lg: 14
              }
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
              className: "text-left service",
              children: currentLang.getLocale() === "en" ? (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(" ".concat(service.customer_experiences.en, " ")) : (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(service.customer_experiences.fr))
            })
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceCard);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/domelementtype/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/domelementtype/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style);
}
exports.isTag = isTag;
// Exports for backwards compatibility
/** Type for the root element of a document */
exports.Root = ElementType.Root;
/** Type for Text */
exports.Text = ElementType.Text;
/** Type for <? ... ?> */
exports.Directive = ElementType.Directive;
/** Type for <!-- ... --> */
exports.Comment = ElementType.Comment;
/** Type for <script> tags */
exports.Script = ElementType.Script;
/** Type for <style> tags */
exports.Style = ElementType.Style;
/** Type for Any tag */
exports.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
exports.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
exports.Doctype = ElementType.Doctype;


/***/ }),

/***/ "./resources/js/assets/images/isoB.png":
/*!*********************************************!*\
  !*** ./resources/js/assets/images/isoB.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/isoB.png?be3e5d763f0697de2b3805168a96055d");

/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/constants.js ***!
  \**************************************************************/
/***/ ((module) => {

/**
 * SVG elements are case-sensitive.
 *
 * @see {@link https://developer.mozilla.org/docs/Web/SVG/Element#SVG_elements_A_to_Z}
 */
var CASE_SENSITIVE_TAG_NAMES = [
  'animateMotion',
  'animateTransform',
  'clipPath',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussainBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'foreignObject',
  'linearGradient',
  'radialGradient',
  'textPath'
];

module.exports = {
  CASE_SENSITIVE_TAG_NAMES: CASE_SENSITIVE_TAG_NAMES
};


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/domparser.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/domparser.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// constants
var HTML = 'html';
var HEAD = 'head';
var BODY = 'body';
var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/; // e.g., <h1>
var HEAD_TAG_REGEX = /<head.*>/i;
var BODY_TAG_REGEX = /<body.*>/i;

// falls back to `parseFromString` if `createHTMLDocument` cannot be used
var parseFromDocument = function () {
  throw new Error(
    'This browser does not support `document.implementation.createHTMLDocument`'
  );
};

var parseFromString = function () {
  throw new Error(
    'This browser does not support `DOMParser.prototype.parseFromString`'
  );
};

/**
 * DOMParser (performance: slow).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document
 */
if (typeof window.DOMParser === 'function') {
  var domParser = new window.DOMParser();
  var mimeType = 'text/html';

  /**
   * Creates an HTML document using `DOMParser.parseFromString`.
   *
   * @param  {string} html      - The HTML string.
   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
   * @return {HTMLDocument}
   */
  parseFromString = function (html, tagName) {
    if (tagName) {
      html = '<' + tagName + '>' + html + '</' + tagName + '>';
    }

    return domParser.parseFromString(html, mimeType);
  };

  parseFromDocument = parseFromString;
}

/**
 * DOMImplementation (performance: fair).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMImplementation/createHTMLDocument
 */
if (document.implementation) {
  var isIE = (__webpack_require__(/*! ./utilities */ "./node_modules/html-dom-parser/lib/client/utilities.js").isIE);

  // title parameter is required in IE
  // https://msdn.microsoft.com/en-us/library/ff975457(v=vs.85).aspx
  var doc = document.implementation.createHTMLDocument(
    isIE() ? 'html-dom-parser' : undefined
  );

  /**
   * Use HTML document created by `document.implementation.createHTMLDocument`.
   *
   * @param  {string} html      - The HTML string.
   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
   * @return {HTMLDocument}
   */
  parseFromDocument = function (html, tagName) {
    if (tagName) {
      doc.documentElement.getElementsByTagName(tagName)[0].innerHTML = html;
      return doc;
    }

    doc.documentElement.innerHTML = html;
    return doc;
  };
}

/**
 * Template (performance: fast).
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/template
 */
var template = document.createElement('template');
var parseFromTemplate;

if (template.content) {
  /**
   * Uses a template element (content fragment) to parse HTML.
   *
   * @param  {string} html - The HTML string.
   * @return {NodeList}
   */
  parseFromTemplate = function (html) {
    template.innerHTML = html;
    return template.content.childNodes;
  };
}

/**
 * Parses HTML string to DOM nodes.
 *
 * @param  {string}   html - HTML markup.
 * @return {NodeList}
 */
function domparser(html) {
  var firstTagName;
  var match = html.match(FIRST_TAG_REGEX);

  if (match && match[1]) {
    firstTagName = match[1].toLowerCase();
  }

  var doc;
  var element;
  var elements;

  switch (firstTagName) {
    case HTML:
      doc = parseFromString(html);

      // the created document may come with filler head/body elements,
      // so make sure to remove them if they don't actually exist
      if (!HEAD_TAG_REGEX.test(html)) {
        element = doc.getElementsByTagName(HEAD)[0];
        if (element) {
          element.parentNode.removeChild(element);
        }
      }

      if (!BODY_TAG_REGEX.test(html)) {
        element = doc.getElementsByTagName(BODY)[0];
        if (element) {
          element.parentNode.removeChild(element);
        }
      }

      return doc.getElementsByTagName(HTML);

    case HEAD:
    case BODY:
      elements = parseFromDocument(html).getElementsByTagName(firstTagName);

      // if there's a sibling element, then return both elements
      if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
        return elements[0].parentNode.childNodes;
      }
      return elements;

    // low-level tag or text
    default:
      if (parseFromTemplate) {
        return parseFromTemplate(html);
      }

      return parseFromDocument(html, BODY).getElementsByTagName(BODY)[0]
        .childNodes;
  }
}

module.exports = domparser;


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/html-to-dom.js":
/*!****************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/html-to-dom.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var domparser = __webpack_require__(/*! ./domparser */ "./node_modules/html-dom-parser/lib/client/domparser.js");
var formatDOM = (__webpack_require__(/*! ./utilities */ "./node_modules/html-dom-parser/lib/client/utilities.js").formatDOM);

var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/; // e.g., <!doctype html>

/**
 * Parses HTML string to DOM nodes in browser.
 *
 * @param  {string} html  - HTML markup.
 * @return {DomElement[]} - DOM elements.
 */
function HTMLDOMParser(html) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (html === '') {
    return [];
  }

  // match directive
  var match = html.match(DIRECTIVE_REGEX);
  var directive;

  if (match && match[1]) {
    directive = match[1];
  }

  return formatDOM(domparser(html), null, directive);
}

module.exports = HTMLDOMParser;


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/utilities.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/utilities.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constants = __webpack_require__(/*! ./constants */ "./node_modules/html-dom-parser/lib/client/constants.js");
var domhandler = __webpack_require__(/*! domhandler/lib/node */ "./node_modules/html-dom-parser/node_modules/domhandler/lib/node.js");

var CASE_SENSITIVE_TAG_NAMES = constants.CASE_SENSITIVE_TAG_NAMES;

var Comment = domhandler.Comment;
var Element = domhandler.Element;
var ProcessingInstruction = domhandler.ProcessingInstruction;
var Text = domhandler.Text;

var caseSensitiveTagNamesMap = {};
var tagName;

for (var i = 0, len = CASE_SENSITIVE_TAG_NAMES.length; i < len; i++) {
  tagName = CASE_SENSITIVE_TAG_NAMES[i];
  caseSensitiveTagNamesMap[tagName.toLowerCase()] = tagName;
}

/**
 * Gets case-sensitive tag name.
 *
 * @param  {string}           tagName - Tag name in lowercase.
 * @return {string|undefined}         - Case-sensitive tag name.
 */
function getCaseSensitiveTagName(tagName) {
  return caseSensitiveTagNamesMap[tagName];
}

/**
 * Formats DOM attributes to a hash map.
 *
 * @param  {NamedNodeMap} attributes - List of attributes.
 * @return {object}                  - Map of attribute name to value.
 */
function formatAttributes(attributes) {
  var result = {};
  var attribute;
  // `NamedNodeMap` is array-like
  for (var i = 0, len = attributes.length; i < len; i++) {
    attribute = attributes[i];
    result[attribute.name] = attribute.value;
  }
  return result;
}

/**
 * Corrects the tag name if it is case-sensitive (SVG).
 * Otherwise, returns the lowercase tag name (HTML).
 *
 * @param  {string} tagName - Lowercase tag name.
 * @return {string}         - Formatted tag name.
 */
function formatTagName(tagName) {
  tagName = tagName.toLowerCase();
  var caseSensitiveTagName = getCaseSensitiveTagName(tagName);
  if (caseSensitiveTagName) {
    return caseSensitiveTagName;
  }
  return tagName;
}

/**
 * Transforms DOM nodes to `domhandler` nodes.
 *
 * @param  {NodeList}     nodes         - DOM nodes.
 * @param  {Element|null} [parent=null] - Parent node.
 * @param  {string}       [directive]   - Directive.
 * @return {Array<Comment|Element|ProcessingInstruction|Text>}
 */
function formatDOM(nodes, parent, directive) {
  parent = parent || null;
  var result = [];

  for (var index = 0, len = nodes.length; index < len; index++) {
    var node = nodes[index];
    var current;

    // set the node data given the type
    switch (node.nodeType) {
      case 1:
        // script, style, or tag
        current = new Element(
          formatTagName(node.nodeName),
          formatAttributes(node.attributes)
        );
        current.children = formatDOM(node.childNodes, current);
        break;

      case 3:
        current = new Text(node.nodeValue);
        break;

      case 8:
        current = new Comment(node.nodeValue);
        break;

      default:
        continue;
    }

    // set previous node next
    var prev = result[index - 1] || null;
    if (prev) {
      prev.next = current;
    }

    // set properties for current node
    current.parent = parent;
    current.prev = prev;
    current.next = null;

    result.push(current);
  }

  if (directive) {
    current = new ProcessingInstruction(
      directive.substring(0, directive.indexOf(' ')).toLowerCase(),
      directive
    );
    current.next = result[0] || null;
    current.parent = parent;
    result.unshift(current);

    if (result[1]) {
      result[1].prev = result[0];
    }
  }

  return result;
}

/**
 * Detects if browser is Internet Explorer.
 *
 * @return {boolean} - Whether IE is detected.
 */
function isIE() {
  return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
}

module.exports = {
  formatAttributes: formatAttributes,
  formatDOM: formatDOM,
  isIE: isIE
};


/***/ }),

/***/ "./node_modules/html-dom-parser/node_modules/domhandler/lib/node.js":
/*!**************************************************************************!*\
  !*** ./node_modules/html-dom-parser/node_modules/domhandler/lib/node.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
var nodeTypes = new Map([
    [domelementtype_1.ElementType.Tag, 1],
    [domelementtype_1.ElementType.Script, 1],
    [domelementtype_1.ElementType.Style, 1],
    [domelementtype_1.ElementType.Directive, 1],
    [domelementtype_1.ElementType.Text, 3],
    [domelementtype_1.ElementType.CDATA, 4],
    [domelementtype_1.ElementType.Comment, 8],
    [domelementtype_1.ElementType.Root, 9],
]);
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
var Node = /** @class */ (function () {
    /**
     *
     * @param type The type of the node.
     */
    function Node(type) {
        this.type = type;
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "nodeType", {
        // Read-only aliases
        /**
         * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
         * node {@link type}.
         */
        get: function () {
            var _a;
            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.parent;
        },
        set: function (parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.prev;
        },
        set: function (prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.next;
        },
        set: function (next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    Node.prototype.cloneNode = function (recursive) {
        if (recursive === void 0) { recursive = false; }
        return cloneNode(this, recursive);
    };
    return Node;
}());
exports.Node = Node;
/**
 * A node that contains some data.
 */
var DataNode = /** @class */ (function (_super) {
    __extends(DataNode, _super);
    /**
     * @param type The type of the node
     * @param data The content of the data node
     */
    function DataNode(type, data) {
        var _this = _super.call(this, type) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}(Node));
exports.DataNode = DataNode;
/**
 * Text within the document.
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(data) {
        return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
    }
    return Text;
}(DataNode));
exports.Text = Text;
/**
 * Comments within the document.
 */
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment(data) {
        return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
    }
    return Comment;
}(DataNode));
exports.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */
var ProcessingInstruction = /** @class */ (function (_super) {
    __extends(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
        _this.name = name;
        return _this;
    }
    return ProcessingInstruction;
}(DataNode));
exports.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */
var NodeWithChildren = /** @class */ (function (_super) {
    __extends(NodeWithChildren, _super);
    /**
     * @param type Type of the node.
     * @param children Children of the node. Only certain node types can have children.
     */
    function NodeWithChildren(type, children) {
        var _this = _super.call(this, type) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function () {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        /** Last child of the node. */
        get: function () {
            return this.children.length > 0
                ? this.children[this.children.length - 1]
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.children;
        },
        set: function (children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren;
}(Node));
exports.NodeWithChildren = NodeWithChildren;
/**
 * The root node of the document.
 */
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document(children) {
        return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
    }
    return Document;
}(NodeWithChildren));
exports.Document = Document;
/**
 * An element within the DOM.
 */
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    function Element(name, attribs, children, type) {
        if (children === void 0) { children = []; }
        if (type === void 0) { type = name === "script"
            ? domelementtype_1.ElementType.Script
            : name === "style"
                ? domelementtype_1.ElementType.Style
                : domelementtype_1.ElementType.Tag; }
        var _this = _super.call(this, type, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        return _this;
    }
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (name) {
                var _a, _b;
                return ({
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
                });
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element;
}(NodeWithChildren));
exports.Element = Element;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag(node) {
    return (0, domelementtype_1.isTag)(node);
}
exports.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === domelementtype_1.ElementType.CDATA;
}
exports.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === domelementtype_1.ElementType.Text;
}
exports.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === domelementtype_1.ElementType.Comment;
}
exports.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === domelementtype_1.ElementType.Directive;
}
exports.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === domelementtype_1.ElementType.Root;
}
exports.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive) {
    if (recursive === void 0) { recursive = false; }
    var result;
    if (isText(node)) {
        result = new Text(node.data);
    }
    else if (isComment(node)) {
        result = new Comment(node.data);
    }
    else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function (child) { return (child.parent = clone_1); });
        if (node.namespace != null) {
            clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
    }
    else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
        children.forEach(function (child) { return (child.parent = clone_2); });
        result = clone_2;
    }
    else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function (child) { return (child.parent = clone_3); });
        if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
    }
    else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error("Not implemented yet: ".concat(node.type));
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function (child) { return cloneNode(child, true); });
    for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}


/***/ }),

/***/ "./node_modules/html-react-parser/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-react-parser/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var domToReact = __webpack_require__(/*! ./lib/dom-to-react */ "./node_modules/html-react-parser/lib/dom-to-react.js");
var attributesToProps = __webpack_require__(/*! ./lib/attributes-to-props */ "./node_modules/html-react-parser/lib/attributes-to-props.js");
var htmlToDOM = __webpack_require__(/*! html-dom-parser */ "./node_modules/html-dom-parser/lib/client/html-to-dom.js");

// support backwards compatibility for ES Module
htmlToDOM =
  /* istanbul ignore next */
  typeof htmlToDOM.default === 'function' ? htmlToDOM.default : htmlToDOM;

var domParserOptions = { lowerCaseAttributeNames: false };

/**
 * Converts HTML string to React elements.
 *
 * @param  {String}   html                    - HTML string.
 * @param  {Object}   [options]               - Parser options.
 * @param  {Object}   [options.htmlparser2]   - htmlparser2 options.
 * @param  {Object}   [options.library]       - Library for React, Preact, etc.
 * @param  {Function} [options.replace]       - Replace method.
 * @return {JSX.Element|JSX.Element[]|String} - React element(s), empty array, or string.
 */
function HTMLReactParser(html, options) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  if (html === '') {
    return [];
  }
  options = options || {};
  return domToReact(
    htmlToDOM(html, options.htmlparser2 || domParserOptions),
    options
  );
}

HTMLReactParser.domToReact = domToReact;
HTMLReactParser.htmlToDOM = htmlToDOM;
HTMLReactParser.attributesToProps = attributesToProps;
HTMLReactParser.Element = (__webpack_require__(/*! domhandler */ "./node_modules/html-react-parser/node_modules/domhandler/lib/index.js").Element);

// support CommonJS and ES Modules
module.exports = HTMLReactParser;
module.exports["default"] = HTMLReactParser;


/***/ }),

/***/ "./node_modules/html-react-parser/lib/attributes-to-props.js":
/*!*******************************************************************!*\
  !*** ./node_modules/html-react-parser/lib/attributes-to-props.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var reactProperty = __webpack_require__(/*! react-property */ "./node_modules/react-property/lib/index.js");
var utilities = __webpack_require__(/*! ./utilities */ "./node_modules/html-react-parser/lib/utilities.js");

/**
 * Converts HTML/SVG DOM attributes to React props.
 *
 * @param  {object} [attributes={}] - HTML/SVG DOM attributes.
 * @return {object}                 - React props.
 */
module.exports = function attributesToProps(attributes) {
  attributes = attributes || {};

  var valueOnlyInputs = {
    reset: true,
    submit: true
  };

  var attributeName;
  var attributeNameLowerCased;
  var attributeValue;
  var propName;
  var propertyInfo;
  var props = {};
  var inputIsValueOnly = attributes.type && valueOnlyInputs[attributes.type];

  for (attributeName in attributes) {
    attributeValue = attributes[attributeName];

    // ARIA (aria-*) or custom data (data-*) attribute
    if (reactProperty.isCustomAttribute(attributeName)) {
      props[attributeName] = attributeValue;
      continue;
    }

    // convert HTML/SVG attribute to React prop
    attributeNameLowerCased = attributeName.toLowerCase();
    propName = getPropName(attributeNameLowerCased);

    if (propName) {
      propertyInfo = reactProperty.getPropertyInfo(propName);

      // convert attribute to uncontrolled component prop (e.g., `value` to `defaultValue`)
      // https://reactjs.org/docs/uncontrolled-components.html
      if (
        (propName === 'checked' || propName === 'value') &&
        !inputIsValueOnly
      ) {
        propName = getPropName('default' + attributeNameLowerCased);
      }

      props[propName] = attributeValue;

      switch (propertyInfo && propertyInfo.type) {
        case reactProperty.BOOLEAN:
          props[propName] = true;
          break;
        case reactProperty.OVERLOADED_BOOLEAN:
          if (attributeValue === '') {
            props[propName] = true;
          }
          break;
      }
      continue;
    }

    // preserve custom attribute if React >=16
    if (utilities.PRESERVE_CUSTOM_ATTRIBUTES) {
      props[attributeName] = attributeValue;
    }
  }

  // transform inline style to object
  utilities.setStyleProp(attributes.style, props);

  return props;
};

/**
 * Gets prop name from lowercased attribute name.
 *
 * @param {string} attributeName - Lowercased attribute name.
 * @return {string}
 */
function getPropName(attributeName) {
  return reactProperty.possibleStandardNames[attributeName];
}


/***/ }),

/***/ "./node_modules/html-react-parser/lib/dom-to-react.js":
/*!************************************************************!*\
  !*** ./node_modules/html-react-parser/lib/dom-to-react.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var attributesToProps = __webpack_require__(/*! ./attributes-to-props */ "./node_modules/html-react-parser/lib/attributes-to-props.js");
var utilities = __webpack_require__(/*! ./utilities */ "./node_modules/html-react-parser/lib/utilities.js");

var setStyleProp = utilities.setStyleProp;
var canTextBeChildOfNode = utilities.canTextBeChildOfNode;

/**
 * Converts DOM nodes to JSX element(s).
 *
 * @param  {DomElement[]} nodes             - DOM nodes.
 * @param  {object}       [options={}]      - Options.
 * @param  {Function}     [options.replace] - Replacer.
 * @param  {object}       [options.library] - Library (React/Preact/etc.).
 * @return {string|JSX.Element|JSX.Element[]}
 */
function domToReact(nodes, options) {
  options = options || {};

  var library = options.library || React;
  var cloneElement = library.cloneElement;
  var createElement = library.createElement;
  var isValidElement = library.isValidElement;

  var result = [];
  var node;
  var isWhitespace;
  var hasReplace = typeof options.replace === 'function';
  var replaceElement;
  var props;
  var children;
  var trim = options.trim;

  for (var i = 0, len = nodes.length; i < len; i++) {
    node = nodes[i];

    // replace with custom React element (if present)
    if (hasReplace) {
      replaceElement = options.replace(node);

      if (isValidElement(replaceElement)) {
        // set "key" prop for sibling elements
        // https://fb.me/react-warning-keys
        if (len > 1) {
          replaceElement = cloneElement(replaceElement, {
            key: replaceElement.key || i
          });
        }
        result.push(replaceElement);
        continue;
      }
    }

    if (node.type === 'text') {
      isWhitespace = !node.data.trim().length;

      if (isWhitespace && node.parent && !canTextBeChildOfNode(node.parent)) {
        // We have a whitespace node that can't be nested in its parent
        // so skip it
        continue;
      }

      if (trim && isWhitespace) {
        // Trim is enabled and we have a whitespace node
        // so skip it
        continue;
      }

      // We have a text node that's not whitespace and it can be nested
      // in its parent so add it to the results
      result.push(node.data);
      continue;
    }

    props = node.attribs;
    if (skipAttributesToProps(node)) {
      setStyleProp(props.style, props);
    } else if (props) {
      props = attributesToProps(props);
    }

    children = null;

    switch (node.type) {
      case 'script':
      case 'style':
        // prevent text in <script> or <style> from being escaped
        // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
        if (node.children[0]) {
          props.dangerouslySetInnerHTML = {
            __html: node.children[0].data
          };
        }
        break;

      case 'tag':
        // setting textarea value in children is an antipattern in React
        // https://reactjs.org/docs/forms.html#the-textarea-tag
        if (node.name === 'textarea' && node.children[0]) {
          props.defaultValue = node.children[0].data;
        } else if (node.children && node.children.length) {
          // continue recursion of creating React elements (if applicable)
          children = domToReact(node.children, options);
        }
        break;

      // skip all other cases (e.g., comment)
      default:
        continue;
    }

    // set "key" prop for sibling elements
    // https://fb.me/react-warning-keys
    if (len > 1) {
      props.key = i;
    }

    result.push(createElement(node.name, props, children));
  }

  return result.length === 1 ? result[0] : result;
}

/**
 * Determines whether DOM element attributes should be transformed to props.
 * Web Components should not have their attributes transformed except for `style`.
 *
 * @param  {DomElement} node
 * @return {boolean}
 */
function skipAttributesToProps(node) {
  return (
    utilities.PRESERVE_CUSTOM_ATTRIBUTES &&
    node.type === 'tag' &&
    utilities.isCustomComponent(node.name, node.attribs)
  );
}

module.exports = domToReact;


/***/ }),

/***/ "./node_modules/html-react-parser/lib/utilities.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-react-parser/lib/utilities.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styleToJS = (__webpack_require__(/*! style-to-js */ "./node_modules/style-to-js/cjs/index.js")["default"]);

/**
 * Swap key with value in an object.
 *
 * @param  {Object}   obj        - The object.
 * @param  {Function} [override] - The override method.
 * @return {Object}              - The inverted object.
 */
function invertObject(obj, override) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('First argument must be an object');
  }

  var key;
  var value;
  var isOverridePresent = typeof override === 'function';
  var overrides = {};
  var result = {};

  for (key in obj) {
    value = obj[key];

    if (isOverridePresent) {
      overrides = override(key, value);
      if (overrides && overrides.length === 2) {
        result[overrides[0]] = overrides[1];
        continue;
      }
    }

    if (typeof value === 'string') {
      result[value] = key;
    }
  }

  return result;
}

/**
 * Check if a given tag is a custom component.
 *
 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
 *
 * @param {string} tagName - The name of the html tag.
 * @param {Object} props   - The props being passed to the element.
 * @return {boolean}
 */
function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return props && typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

var styleToJSOptions = { reactCompat: true };

/**
 * Sets style prop.
 *
 * @param {null|undefined|string} style
 * @param {object} props
 */
function setStyleProp(style, props) {
  if (style === null || style === undefined) {
    return;
  }
  try {
    props.style = styleToJS(style, styleToJSOptions);
  } catch (err) {
    props.style = {};
  }
}

/**
 * @constant {boolean}
 * @see {@link https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html}
 */
var PRESERVE_CUSTOM_ATTRIBUTES = React.version.split('.')[0] >= 16;

// Taken from
// https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/packages/react-dom/src/client/validateDOMNesting.js#L213
var elementsWithNoTextChildren = new Set([
  'tr',
  'tbody',
  'thead',
  'tfoot',
  'colgroup',
  'table',
  'head',
  'html',
  'frameset'
]);

/**
 * Checks if the given node can contain text nodes
 *
 * @param {DomElement} node
 * @returns {boolean}
 */
function canTextBeChildOfNode(node) {
  return !elementsWithNoTextChildren.has(node.name);
}

module.exports = {
  PRESERVE_CUSTOM_ATTRIBUTES: PRESERVE_CUSTOM_ATTRIBUTES,
  invertObject: invertObject,
  isCustomComponent: isCustomComponent,
  setStyleProp: setStyleProp,
  canTextBeChildOfNode: canTextBeChildOfNode,
  elementsWithNoTextChildren: elementsWithNoTextChildren
};


/***/ }),

/***/ "./node_modules/html-react-parser/node_modules/domhandler/lib/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/html-react-parser/node_modules/domhandler/lib/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomHandler = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
var node_1 = __webpack_require__(/*! ./node */ "./node_modules/html-react-parser/node_modules/domhandler/lib/node.js");
__exportStar(__webpack_require__(/*! ./node */ "./node_modules/html-react-parser/node_modules/domhandler/lib/node.js"), exports);
var reWhitespace = /\s+/g;
// Default options
var defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false,
};
var DomHandler = /** @class */ (function () {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    function DomHandler(callback, options, elementCB) {
        /** The elements of the DOM */
        this.dom = [];
        /** The root element for the DOM */
        this.root = new node_1.Document(this.dom);
        /** Indicated whether parsing has been completed. */
        this.done = false;
        /** Stack of open tags. */
        this.tagStack = [this.root];
        /** A data node that is still being written to. */
        this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */
        this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler.prototype.onparserinit = function (parser) {
        this.parser = parser;
    };
    // Resets the handler back to starting state
    DomHandler.prototype.onreset = function () {
        this.dom = [];
        this.root = new node_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
    };
    // Signals the handler that parsing is done
    DomHandler.prototype.onend = function () {
        if (this.done)
            return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    };
    DomHandler.prototype.onerror = function (error) {
        this.handleCallback(error);
    };
    DomHandler.prototype.onclosetag = function () {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
            this.elementCB(elem);
    };
    DomHandler.prototype.onopentag = function (name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
        var element = new node_1.Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    };
    DomHandler.prototype.ontext = function (data) {
        var normalizeWhitespace = this.options.normalizeWhitespace;
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            if (normalizeWhitespace) {
                lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
            }
            else {
                lastNode.data += data;
            }
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        }
        else {
            if (normalizeWhitespace) {
                data = data.replace(reWhitespace, " ");
            }
            var node = new node_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    };
    DomHandler.prototype.oncomment = function (data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        var node = new node_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
    };
    DomHandler.prototype.oncommentend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.oncdatastart = function () {
        var text = new node_1.Text("");
        var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    };
    DomHandler.prototype.oncdataend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.onprocessinginstruction = function (name, data) {
        var node = new node_1.ProcessingInstruction(name, data);
        this.addNode(node);
    };
    DomHandler.prototype.handleCallback = function (error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        }
        else if (error) {
            throw error;
        }
    };
    DomHandler.prototype.addNode = function (node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    };
    return DomHandler;
}());
exports.DomHandler = DomHandler;
exports["default"] = DomHandler;


/***/ }),

/***/ "./node_modules/html-react-parser/node_modules/domhandler/lib/node.js":
/*!****************************************************************************!*\
  !*** ./node_modules/html-react-parser/node_modules/domhandler/lib/node.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
var nodeTypes = new Map([
    [domelementtype_1.ElementType.Tag, 1],
    [domelementtype_1.ElementType.Script, 1],
    [domelementtype_1.ElementType.Style, 1],
    [domelementtype_1.ElementType.Directive, 1],
    [domelementtype_1.ElementType.Text, 3],
    [domelementtype_1.ElementType.CDATA, 4],
    [domelementtype_1.ElementType.Comment, 8],
    [domelementtype_1.ElementType.Root, 9],
]);
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
var Node = /** @class */ (function () {
    /**
     *
     * @param type The type of the node.
     */
    function Node(type) {
        this.type = type;
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "nodeType", {
        // Read-only aliases
        /**
         * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
         * node {@link type}.
         */
        get: function () {
            var _a;
            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.parent;
        },
        set: function (parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.prev;
        },
        set: function (prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.next;
        },
        set: function (next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    Node.prototype.cloneNode = function (recursive) {
        if (recursive === void 0) { recursive = false; }
        return cloneNode(this, recursive);
    };
    return Node;
}());
exports.Node = Node;
/**
 * A node that contains some data.
 */
var DataNode = /** @class */ (function (_super) {
    __extends(DataNode, _super);
    /**
     * @param type The type of the node
     * @param data The content of the data node
     */
    function DataNode(type, data) {
        var _this = _super.call(this, type) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}(Node));
exports.DataNode = DataNode;
/**
 * Text within the document.
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(data) {
        return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
    }
    return Text;
}(DataNode));
exports.Text = Text;
/**
 * Comments within the document.
 */
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment(data) {
        return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
    }
    return Comment;
}(DataNode));
exports.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */
var ProcessingInstruction = /** @class */ (function (_super) {
    __extends(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
        _this.name = name;
        return _this;
    }
    return ProcessingInstruction;
}(DataNode));
exports.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */
var NodeWithChildren = /** @class */ (function (_super) {
    __extends(NodeWithChildren, _super);
    /**
     * @param type Type of the node.
     * @param children Children of the node. Only certain node types can have children.
     */
    function NodeWithChildren(type, children) {
        var _this = _super.call(this, type) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function () {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        /** Last child of the node. */
        get: function () {
            return this.children.length > 0
                ? this.children[this.children.length - 1]
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.children;
        },
        set: function (children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren;
}(Node));
exports.NodeWithChildren = NodeWithChildren;
/**
 * The root node of the document.
 */
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document(children) {
        return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
    }
    return Document;
}(NodeWithChildren));
exports.Document = Document;
/**
 * An element within the DOM.
 */
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    function Element(name, attribs, children, type) {
        if (children === void 0) { children = []; }
        if (type === void 0) { type = name === "script"
            ? domelementtype_1.ElementType.Script
            : name === "style"
                ? domelementtype_1.ElementType.Style
                : domelementtype_1.ElementType.Tag; }
        var _this = _super.call(this, type, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        return _this;
    }
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (name) {
                var _a, _b;
                return ({
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
                });
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element;
}(NodeWithChildren));
exports.Element = Element;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag(node) {
    return (0, domelementtype_1.isTag)(node);
}
exports.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === domelementtype_1.ElementType.CDATA;
}
exports.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === domelementtype_1.ElementType.Text;
}
exports.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === domelementtype_1.ElementType.Comment;
}
exports.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === domelementtype_1.ElementType.Directive;
}
exports.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === domelementtype_1.ElementType.Root;
}
exports.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive) {
    if (recursive === void 0) { recursive = false; }
    var result;
    if (isText(node)) {
        result = new Text(node.data);
    }
    else if (isComment(node)) {
        result = new Comment(node.data);
    }
    else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function (child) { return (child.parent = clone_1); });
        if (node.namespace != null) {
            clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
    }
    else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
        children.forEach(function (child) { return (child.parent = clone_2); });
        result = clone_2;
    }
    else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function (child) { return (child.parent = clone_3); });
        if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
    }
    else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error("Not implemented yet: ".concat(node.type));
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function (child) { return cloneNode(child, true); });
    for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}


/***/ }),

/***/ "./node_modules/inline-style-parser/index.js":
/*!***************************************************!*\
  !*** ./node_modules/inline-style-parser/index.js ***!
  \***************************************************/
/***/ ((module) => {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
module.exports = function(style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];

  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = { line: lineno, column: column };
    return function(node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  var errorsList = [];

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(
      options.source + ':' + lineno + ':' + column + ': ' + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while ((c = comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

    var i = 2;
    while (
      EMPTY_STRING != style.charAt(i) &&
      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
    ) {
      ++i;
    }
    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;

    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);

    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val
        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
        : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);

    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];

    comments(decls);

    // declarations
    var decl;
    while ((decl = declaration())) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/video-react/dist/video-react.css":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/video-react/dist/video-react.css ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.video-react .video-react-control:before, .video-react .video-react-big-play-button:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.video-react .video-react-control:before, .video-react .video-react-big-play-button:before {\n  text-align: center;\n}\n\n@font-face {\n  font-family: \"video-react\";\n  src: url(data:application/vnd.ms-fontobject;base64,MBgAAHwXAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAic4U8QAAAAAAAAAAAAAAAAAAAAAAABYAdgBpAGQAZQBvAC0AcgBlAGEAYwB0AAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADAAAAAWAHYAaQBkAGUAbwAtAHIAZQBhAGMAdAAAAAAAAAEAAAALAIAAAwAwT1MvMg7RD8oAAAC8AAAAYGNtYXAOVuSnAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zsdb3FIAAAF4AAAS0GhlYWQLMledAAAUSAAAADZoaGVhB6wEJgAAFIAAAAAkaG10eIgAFM8AABSkAAAAlGxvY2FLllAoAAAVOAAAAExtYXhwACoAyQAAFYQAAAAgbmFtZVtqyukAABWkAAABtnBvc3QAAwAAAAAXXAAAACAAAwQAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADyIAQAAAAAAAQAAAAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg8iD//f//AAAAAAAg8gD//f//AAH/4w4EAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAVYA1gMqAyoAAgAACQIBVgHU/iwDKv7W/tYAAgBWAFYDqgOqAAIAFgAAAS0BNzIeAhUUDgIjIi4CNTQ+AgGqAQD/AFZYnHNDQ3ObWVicc0NDc5sBQMDA6kNzm1lYnHNDQ3ObWVicc0MAAAADAFYAVgOqA6oAEwAnACoAACUyPgI1NC4CIyIOAhUUHgITMh4CFRQOAiMiLgI1ND4CExEFAgBGfV02Nl18R0Z9XTY2XXxHWJxzQ0Nzm1lYnHNDQ3ObAwEAqjZdfEdGfV02Nl18R0Z9XTYDAENzm1lYnHNDQ3ObWVicc0P9lgGAwAAAAAACAQAA1gMAAyoAAwAHAAABMxEjIREzEQJWqqr+qqoDKv2sAlT9rAAAAwBWAFYDqgOqAAMABwAbAAABESMRIxEjERMyHgIVFA4CIyIuAjU0PgICgFZUVoBYnHNDQ3ObWVicc0NDc5sBVgFU/qwBVP6sAlRDc5tZWJxzQ0Nzm1lYnHNDAAAEAFYAVgOqA6oAAwAXACsALwAAAREzEQcyPgI1NC4CIyIOAhUUHgITMh4CFRQOAiMiLgI1ND4CAxEzEQIqVoBGfV02Nl18R0Z9XTY2XXxHWJxzQ0Nzm1lYnHNDQ3ObJ1YBVgFU/qysNl18R0Z9XTY2XXxHRn1dNgMAQ3ObWVicc0NDc5tZWJxzQ/2sAVT+rAABAQABAAMAAwAAAwAAASERIQEAAgD+AAMA/gAAAgBqAQADVgMAAAIABQAACQERIQkBAeoBbP6A/pQBbAIAAQD+AAEAAQAAAAACAKoBAAOWAwAAAgAFAAAJAiERAQIqAWz+lP6AAWwDAP8A/wACAP8AAAAAAAIBAAEAAwADAAACAAYAAAkBEQEzESMBlgFq/gBWVgIAAQD+AAIA/gAAAAAAAgEAAQADAAMAAAMABgAAATMRIyERAQKqVlb+VgFqAwD+AAIA/wAAAAIAqgCAA1YD1gBFAGgAAAEOARUUBjEjNzMVIwcwNjU0MjU0FjsBMhYXHgEXHgEVFAYHDgEHDgEHDgEjIiYnLgEnLgE1MxQWMzI2PwEwNj0BLwEwJiMRMh4CFRQOAiMiLgI1MxQeAjMyPgI1NC4CIxUnNwH4AwsEHgpmSgQEBgUDCAYNAwMKAwcLAQMDBQYGBwMDEQYGDQMDCwYICiIODAMGAwoEBAoJA0Z9XTY2XXxHRn1dNlYpRV01NF5FKSlFXTXW1gG8AQUCAwNeHiYBAwMDAwMDAwMGAwcZDgYNAwMNBgYDAwMBAQMDAgMEFgwLCQEDCAkDGggKBAFuNV17R0Z9XTY2XXxHNF5FKSlFXTU0XkUprNbWAAAEAKoAgANWA9YAGwBGAE0AcAAAARQWMzI2PwEwNj0BMCY1NCYjIgYPATAGHQEwFjcUBg8BMAYjIgYjIiYnLgEnLgE9ATQ2PwEwNjMyNjMyFhceARceARceARUHIzUHNTczEzIeAhUUDgIjIi4CNTMUHgIzMj4CNTQuAiMVJzcCNA4GAwgDCAQEEgQDBgMIBgZUAQMMEAYGDgYGDgYGCAYKCAEDDg4GBg4GBg4GBgoGBgMDAwG2KCpMBi5GfV02Nl18R0Z9XTZWKUVdNTReRSkpRV011tYBeAUJAQMKCQNWCQMECgMDCAkDVgknCRMGGgwEAQMDBgMFKA8eCRMGGgwEAQMDBgMDDgkJEAlqjAweGAEeNV17R0Z9XTY2XXxHNF5FKSlFXTU0XkUprNbWAAAABACqAIADVgPWABsARgCjAMYAAAEUFjMyNj8BMDY9ATQmNTQmIyIGDwEwBh0BMBY3FAYPATAGIyIGIyImJy4BJy4BPQE0Nj8BMDYzMjYzMhYXHgEXHgEXHgEVIzI2PQEwJjU0JisBMAYjIgYdASM0NjMyNjMyFhceAR0BMAYVFAYjIgYHHgEXHgEVFAYHDgEHDgEjIgYjIiYnLgEnLgE1MxUwFhUUFjsBMDYzMjY9ATAmNTQmKwE1EzIeAhUUDgIjIi4CNTMUHgIzMj4CNTQuAiMVJzcCPBAGAwYDCAQEEAQDCAMIBARQAQMMEAYGDgYPFQoGAwMDAwMDDBAGBgwGBg4GBgoGBgMDAwHiDBIEBQMWBQMDASwWDgMOAw0ZCggIBAUDAwgDBg0DAwUBAwMGAwMNBgYOBgYLAwMNBggKJAQFAxYFAwMBBAUDGmZGfV02Nl18R0Z9XTZWKUVdNTReRSkpRV011tYBeAYIAQMKCQNWAwYDBAoDAwgJA1YJJwkTBhoMBAsFAw4JCRAJHgkTBhoMBAEDAwYDAw4JCRAJDgwIBQMDAQQFAwgPHwQHBQQYCg4JAwMFBwMDBwYGDgYGDQMDCgMDBQQBAwMCAwQbCwgFAwMBBAUDFgUDAwEeAWo1XXtHRn1dNjZdfEc0XkUpKUVdNTReRSms1tYAAAIAqgCAA1YD1gBCAGUAAAEOARUUBjEjNzMVIwcwNjU0MjU0FjsBMhYXHgEXHgEVFAYHDgEHDgEjIiYnLgEnLgE1MxQWMzI2PwEwNj0BLwEwJiMlND4CMzUXBzUiDgIVFB4CMzI+AjUzFA4CIyIuAgH0AwsEGgpmSgQEBgUDCAYNAwMKAwcLAQMDBQYIFw8GDQMDCwYICiIODAMGAwoEBAoJA/6uNl18R9bWNF5FKSlFXTU0XkUpVjZdfEdGfV02AbwBBQIDA14eJgEDAwMDAwMDAwYDBxkOBg0DAw0GCAgBAwMCAwQWDAsJAQMICQMaCAoEGkZ8XTWs1tasKUVdNTReRSkpRV01Rn1dNjZdfAAABACqAIADVgPWABsARgBNAHAAAAEUFjMyNj8BMDY9ATAmNTQmIyIGDwEwBh0BMBY3FAYPATAGIyIGIyImJy4BJy4BPQE0Nj8BMDYzMjYzMhYXHgEXHgEXHgEVByM1BzU3MwU0PgIzNRcHNSIOAhUUHgIzMj4CNTMUDgIjIi4CAjQOBgMIAwgEBBIEAwYDCAYGUAEDDBAGBg4GBg4GBggGCggBAw4OBgYOBgYOBgYKBgYDAwMBsigqTAb+2DZdfEfW1jReRSkpRV01NF5FKVY2XXxHRn1dNgF4BQkBAwoJA1YJAwQKAwMICQNWCScJEwYaDAQBAwMGAwUoDx4JEwYaDAQBAwMGAwMOCQkQCWqMDB4YNkZ8XTWs1tasKUVdNTReRSkpRV01Rn1dNjZdfAAAAAQAqgCAA1YD1gAiAD4AaQDGAAATND4CMzUXBzUiDgIVFB4CMzI+AjUzFA4CIyIuAgUUFjMyNj8BMDY9ATAmNTQmIyIGDwEwBh0BMBY3FAYPATAGIyIGIyImJy4BJy4BPQE0Nj8BMDYzMjYzMhYXHgEXHgEXHgEVIzI2PQEwJjU0JisBMAYjIgYdASM0NjMyNjMyFhceAR0BMAYVFAYjIgYHHgEXHgEVFAYHDgEHDgEjIgYjIiYnLgEnLgE1MxUwFhUUFjsBMDYzMjY9ATAmNTQmKwE1qjZdfEfW1jReRSkpRV01NF5FKVY2XXxHRn1dNgGODgYDCAMIBAQSBAMGAwgEBFQBAwwQBgYOBg8VCgYDAwMDAwMMEAYGDAYGDgYGCgYGAwMDAeIMEgQFAxYFAwMBLBYOAw4DDRkKCAgEBQMDCAMGDQMDBQEDAwYDAw0GBg4GBgsDAw0GCAokBAUDFgUDAwEEBQMaAdZGfF01rNbWrClFXTU0XkUpKUVdNUZ9XTY2XXwXBQkBAwoJA1YJAwQKAwMICQNWCScJEwYaDAQLBQMOCQkQCR4JEwYaDAQBAwMGAwMOCQkQCQ4MCAUDAwEEBQMIDx8EBwUEGAoOCQMDBQcDAwcGBg4GBg0DAwoDAwUEAQMDAgMEGwsIBQMDAQQFAxYFAwMBHgAAAAAEAIAAgAOAA4AAAgAUACYALgAAARUnJwEHJw4BBzU+ATcnEScjETMnATQuAic1HgMVFAYHJz4BJxwBByc1HgECAFrwAso2WCJOLBswFbbWqsrKAqofOU0vQG5PLRcVQAoMagJoMDoDVrRahP02NlgbKAtYBxoRtv7g1gEAyv62M1xLNg5YDkVjfEQwWydCGTkeBw0GaF4YWwAAAAABASoAqgKqA1YABQAAATM3EScjASqs1NSsAoDW/VTWAAIA1gCqAxYDVgAFAAwAABMzNxEnIyUUBgcRHgHWqtbWqgJAPDAwPAKA1v1U1oA5WxgBWBhbAAAAAwCAAIoDgAN2ABUAHAAiAAABHgMVFA4CBzU+AzU0LgInExQGBxEeASUzNxEnIwJWQG5PLS1PbUEuTjkfHzlNL2o6MDA6/cCq1taqA3YORWN8RER7Y0YOWA03S1wzM1xLNg7+4jlbGAFYGFtH1v1U1gAAAAAEANYA1gMqAyoABQALABEAFwAAATMVIzUjEzUzFSM1ATUzFSMVHQEzFSM1AlbUVICAVNT+gNSAgNQDKtSA/lSA1FQBLNRUgKyAVNQABADWANYDKgMqAAUACwARABcAAAEzFSM1MwM1MxUjFQE1MxUjNRE1MxUjNQKqgNRUVNSA/qxU1NRUAqpU1P2s1FSAAdSA1FT+rFTUgAAAAAADAIAAqgOAA1YAFwAvAD8AAAE1NCYrASIGHQEUFjsBMjY9ASMVIzUzFSM1NCYrASIGHQEUFjsBMjY9ASMVIzUzFQEyFhURFAYjISImNRE0NjMDABgSgBIaGhKAEhhAVlbqGhKAEhgYEoASGkBWVgGUIjQzI/2sJDIyJAIqLBIYGBKsEhgYEiwWgBYsEhgYEqwSGBgSLBaAFgEsMyP+ACI0MyMCACI0AAAEAIAAgAOAA4AAAwANABkAKQAAATUzFScRMzI2PQE0JiMBESMVIzUjETM1MxUBMhYVERQGIyEiJjURNDYzAmpWlqwSGBgS/wBAVkBAVgGUIjQzI/2sJDIyJAHAgIDA/wAYEqwSGP8AAQBqav8AVlYCADMj/awiNDMjAlQiNAAAAAIAZABWA5wDqgALAFkAAAEyNjU0JiMiBhUUFiUXHgEPAQ4BLwEOAQ8BDgErASImLwEuAScHBiYvASY2PwEuATU8ATcnLgE/AT4BHwE+AT8BPgE7ATIWHwEeARc3NhYfARYGDwEeARUcAQIAPVlYPj1ZWAF8WgYCBFYEDghqECQUEAELCKwHCwIQEyQRagcOBVYEAgZaAQECWgYCBFYEDghqECQUEAELCKwHCwIQEyQRagcOBVYEAgZaAQEBalg+PVlYPj1ZbEYEEAiUBwQDKgwWCHAHCwoIcAcVDioDAwiUBxAFRgoVCwoVC0YEEAiUBwQDKgwWCHAHCwoIcAcVDioDAwiUBxAFRgoVCwoVAAAAAQCAAFgDgAOqADMAAAEyFhUUBiMiJjU8ATclDgEjIiY1NDYzMhYXJS4BNTQ2MzIWFRQGIyImJwUeARUUBgcFPgEDADNJSTMzSQL+0hIsGjRMSzUZLRIBLAEDSzU0TEs1GS0S/tQBAwICATAQLAFSSTMzS0szBw8GsBASSzU0TBERrgcPCDRMSzU0TBMRsAcPCAcPCLAPEQADAFYAVgOqA6oAAwAHABsAAAE1IxUTESMREzIeAhUUDgIjIi4CNTQ+AgIqVFRUKlicc0NDc5tZWJxzQ0NzmwKAVlb+qgEA/wACgENzm1lYnHNDQ3ObWVicc0MAAAQAVgBWA6oDqgADABcAKwAvAAABNTMVAzI+AjU0LgIjIg4CFRQeAhMyHgIVFA4CIyIuAjU0PgITETMRAdZUKkZ9XTY2XXxHRn1dNjZdfEdYnHNDQ3ObWVicc0NDc5svVAKAVlb+KjZdfEdGfV02Nl18R0Z9XTYDAENzm1lYnHNDQ3ObWVicc0P9gAEA/wAAAAEA1gDWAyoDKgALAAABBxcHJwcnNyc3FzcDKu7uPO7uPO7uPO7uAu7u7jzu7jzu7jzu7gABAFUAVQOrA6sAFAAAExQeAjMyPgI1NC4CIyIOAhVVQ3ScWFicdENDdJxYWJx0QwIAWJx0Q0N0nFhYnHRDQ3ScWAAAAAIAVQBVA6sDqwAUACgAAAEiDgIVFB4CMzI+AjU0LgIjESIuAjU0PgIzMh4CFRQOAgIAWJx0Q0N0nFhYnHRDQ3ScWEd8XTU1XXxHR3xdNTVdfAOrQ3ScWFicdENDdJxYWJx0Q/0ANV18R0d8XTU1XXxHR3xdNQAAAAMAVQBVA6sDqwAUACgANAAAASIOAhUUHgIzMj4CNTQuAiMRIi4CNTQ+AjMyHgIVFA4CExQGIyImNTQ2MzIWAgBYnHRDQ3ScWFicdENDdJxYR3xdNTVdfEdHfF01NV18OUs1NUtLNTVLA6tDdJxYWJx0Q0N0nFhYnHRD/QA1XXxHR3xdNTVdfEdHfF01AVU1S0s1NUtLAAAAAQAAAAEAAPEUzolfDzz1AAsEAAAAAADUNIllAAAAANQ0iWUAAAAAA6sD1gAAAAgAAgAAAAAAAAABAAAEAAAAAAAEAAAAAAADqwABAAAAAAAAAAAAAAAAAAAAJQQAAAAAAAAAAAAAAAAAAAAEAAFWBAAAVgQAAFYEAAEABAAAVgQAAFYEAAEABAAAagQAAKoEAAEABAABAAQAAKoEAACqBAAAqgQAAKoEAACqBAAAqgQAAIAEAAEqBAAA1gQAAIAEAADWBAAA1gQAAIAEAACABAAAZAQAAIAEAABWBAAAVgQAANYEAABVBAAAVQQAAFUAAAAAAAoAFAAeACwAVACWAKoA2AEgAS4BRAFaAXABhAIQAqgDpgQuBMYFxAYSBiIGPgZ4Bp4GxgcaB1oH4gguCFwIpAi+COAJHAloAAEAAAAlAMcABAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQALAAAAAQAAAAAAAgAHAIQAAQAAAAAAAwALAEIAAQAAAAAABAALAJkAAQAAAAAABQALACEAAQAAAAAABgALAGMAAQAAAAAACgAaALoAAwABBAkAAQAWAAsAAwABBAkAAgAOAIsAAwABBAkAAwAWAE0AAwABBAkABAAWAKQAAwABBAkABQAWACwAAwABBAkABgAWAG4AAwABBAkACgA0ANR2aWRlby1yZWFjdAB2AGkAZABlAG8ALQByAGUAYQBjAHRWZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADB2aWRlby1yZWFjdAB2AGkAZABlAG8ALQByAGUAYQBjAHR2aWRlby1yZWFjdAB2AGkAZABlAG8ALQByAGUAYQBjAHRSZWd1bGFyAFIAZQBnAHUAbABhAHJ2aWRlby1yZWFjdAB2AGkAZABlAG8ALQByAGUAYQBjAHRGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?#iefix) format(\"eot\");\n}\n@font-face {\n  font-family: \"video-react\";\n  src: url(data:application/font-woff;base64,d09GRgABAAAAABfIAAsAAAAAF3wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDtEPymNtYXAAAAFoAAAAVAAAAFQOVuSnZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAEtAAABLQx1vcUmhlYWQAABSUAAAANgAAADYLMledaGhlYQAAFMwAAAAkAAAAJAesBCZobXR4AAAU8AAAAJQAAACUiAAUz2xvY2EAABWEAAAATAAAAExLllAobWF4cAAAFdAAAAAgAAAAIAAqAMluYW1lAAAV8AAAAbYAAAG2W2rK6XBvc3QAABeoAAAAIAAAACAAAwAAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8iAEAAAAAAAEAAAAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIPIg//3//wAAAAAAIPIA//3//wAB/+MOBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQFWANYDKgMqAAIAAAkCAVYB1P4sAyr+1v7WAAIAVgBWA6oDqgACABYAAAEtATcyHgIVFA4CIyIuAjU0PgIBqgEA/wBWWJxzQ0Nzm1lYnHNDQ3ObAUDAwOpDc5tZWJxzQ0Nzm1lYnHNDAAAAAwBWAFYDqgOqABMAJwAqAAAlMj4CNTQuAiMiDgIVFB4CEzIeAhUUDgIjIi4CNTQ+AhMRBQIARn1dNjZdfEdGfV02Nl18R1icc0NDc5tZWJxzQ0NzmwMBAKo2XXxHRn1dNjZdfEdGfV02AwBDc5tZWJxzQ0Nzm1lYnHND/ZYBgMAAAAAAAgEAANYDAAMqAAMABwAAATMRIyERMxECVqqq/qqqAyr9rAJU/awAAAMAVgBWA6oDqgADAAcAGwAAAREjESMRIxETMh4CFRQOAiMiLgI1ND4CAoBWVFaAWJxzQ0Nzm1lYnHNDQ3ObAVYBVP6sAVT+rAJUQ3ObWVicc0NDc5tZWJxzQwAABABWAFYDqgOqAAMAFwArAC8AAAERMxEHMj4CNTQuAiMiDgIVFB4CEzIeAhUUDgIjIi4CNTQ+AgMRMxECKlaARn1dNjZdfEdGfV02Nl18R1icc0NDc5tZWJxzQ0NzmydWAVYBVP6srDZdfEdGfV02Nl18R0Z9XTYDAENzm1lYnHNDQ3ObWVicc0P9rAFU/qwAAQEAAQADAAMAAAMAAAEhESEBAAIA/gADAP4AAAIAagEAA1YDAAACAAUAAAkBESEJAQHqAWz+gP6UAWwCAAEA/gABAAEAAAAAAgCqAQADlgMAAAIABQAACQIhEQECKgFs/pT+gAFsAwD/AP8AAgD/AAAAAAACAQABAAMAAwAAAgAGAAAJAREBMxEjAZYBav4AVlYCAAEA/gACAP4AAAAAAAIBAAEAAwADAAADAAYAAAEzESMhEQECqlZW/lYBagMA/gACAP8AAAACAKoAgANWA9YARQBoAAABDgEVFAYxIzczFSMHMDY1NDI1NBY7ATIWFx4BFx4BFRQGBw4BBw4BBw4BIyImJy4BJy4BNTMUFjMyNj8BMDY9AS8BMCYjETIeAhUUDgIjIi4CNTMUHgIzMj4CNTQuAiMVJzcB+AMLBB4KZkoEBAYFAwgGDQMDCgMHCwEDAwUGBgcDAxEGBg0DAwsGCAoiDgwDBgMKBAQKCQNGfV02Nl18R0Z9XTZWKUVdNTReRSkpRV011tYBvAEFAgMDXh4mAQMDAwMDAwMDBgMHGQ4GDQMDDQYGAwMDAQEDAwIDBBYMCwkBAwgJAxoICgQBbjVde0dGfV02Nl18RzReRSkpRV01NF5FKazW1gAABACqAIADVgPWABsARgBNAHAAAAEUFjMyNj8BMDY9ATAmNTQmIyIGDwEwBh0BMBY3FAYPATAGIyIGIyImJy4BJy4BPQE0Nj8BMDYzMjYzMhYXHgEXHgEXHgEVByM1BzU3MxMyHgIVFA4CIyIuAjUzFB4CMzI+AjU0LgIjFSc3AjQOBgMIAwgEBBIEAwYDCAYGVAEDDBAGBg4GBg4GBggGCggBAw4OBgYOBgYOBgYKBgYDAwMBtigqTAYuRn1dNjZdfEdGfV02VilFXTU0XkUpKUVdNdbWAXgFCQEDCgkDVgkDBAoDAwgJA1YJJwkTBhoMBAEDAwYDBSgPHgkTBhoMBAEDAwYDAw4JCRAJaowMHhgBHjVde0dGfV02Nl18RzReRSkpRV01NF5FKazW1gAAAAQAqgCAA1YD1gAbAEYAowDGAAABFBYzMjY/ATA2PQE0JjU0JiMiBg8BMAYdATAWNxQGDwEwBiMiBiMiJicuAScuAT0BNDY/ATA2MzI2MzIWFx4BFx4BFx4BFSMyNj0BMCY1NCYrATAGIyIGHQEjNDYzMjYzMhYXHgEdATAGFRQGIyIGBx4BFx4BFRQGBw4BBw4BIyIGIyImJy4BJy4BNTMVMBYVFBY7ATA2MzI2PQEwJjU0JisBNRMyHgIVFA4CIyIuAjUzFB4CMzI+AjU0LgIjFSc3AjwQBgMGAwgEBBAEAwgDCAQEUAEDDBAGBg4GDxUKBgMDAwMDAwwQBgYMBgYOBgYKBgYDAwMB4gwSBAUDFgUDAwEsFg4DDgMNGQoICAQFAwMIAwYNAwMFAQMDBgMDDQYGDgYGCwMDDQYICiQEBQMWBQMDAQQFAxpmRn1dNjZdfEdGfV02VilFXTU0XkUpKUVdNdbWAXgGCAEDCgkDVgMGAwQKAwMICQNWCScJEwYaDAQLBQMOCQkQCR4JEwYaDAQBAwMGAwMOCQkQCQ4MCAUDAwEEBQMIDx8EBwUEGAoOCQMDBQcDAwcGBg4GBg0DAwoDAwUEAQMDAgMEGwsIBQMDAQQFAxYFAwMBHgFqNV17R0Z9XTY2XXxHNF5FKSlFXTU0XkUprNbWAAACAKoAgANWA9YAQgBlAAABDgEVFAYxIzczFSMHMDY1NDI1NBY7ATIWFx4BFx4BFRQGBw4BBw4BIyImJy4BJy4BNTMUFjMyNj8BMDY9AS8BMCYjJTQ+AjM1Fwc1Ig4CFRQeAjMyPgI1MxQOAiMiLgIB9AMLBBoKZkoEBAYFAwgGDQMDCgMHCwEDAwUGCBcPBg0DAwsGCAoiDgwDBgMKBAQKCQP+rjZdfEfW1jReRSkpRV01NF5FKVY2XXxHRn1dNgG8AQUCAwNeHiYBAwMDAwMDAwMGAwcZDgYNAwMNBggIAQMDAgMEFgwLCQEDCAkDGggKBBpGfF01rNbWrClFXTU0XkUpKUVdNUZ9XTY2XXwAAAQAqgCAA1YD1gAbAEYATQBwAAABFBYzMjY/ATA2PQEwJjU0JiMiBg8BMAYdATAWNxQGDwEwBiMiBiMiJicuAScuAT0BNDY/ATA2MzI2MzIWFx4BFx4BFx4BFQcjNQc1NzMFND4CMzUXBzUiDgIVFB4CMzI+AjUzFA4CIyIuAgI0DgYDCAMIBAQSBAMGAwgGBlABAwwQBgYOBgYOBgYIBgoIAQMODgYGDgYGDgYGCgYGAwMDAbIoKkwG/tg2XXxH1tY0XkUpKUVdNTReRSlWNl18R0Z9XTYBeAUJAQMKCQNWCQMECgMDCAkDVgknCRMGGgwEAQMDBgMFKA8eCRMGGgwEAQMDBgMDDgkJEAlqjAweGDZGfF01rNbWrClFXTU0XkUpKUVdNUZ9XTY2XXwAAAAEAKoAgANWA9YAIgA+AGkAxgAAEzQ+AjM1Fwc1Ig4CFRQeAjMyPgI1MxQOAiMiLgIFFBYzMjY/ATA2PQEwJjU0JiMiBg8BMAYdATAWNxQGDwEwBiMiBiMiJicuAScuAT0BNDY/ATA2MzI2MzIWFx4BFx4BFx4BFSMyNj0BMCY1NCYrATAGIyIGHQEjNDYzMjYzMhYXHgEdATAGFRQGIyIGBx4BFx4BFRQGBw4BBw4BIyIGIyImJy4BJy4BNTMVMBYVFBY7ATA2MzI2PQEwJjU0JisBNao2XXxH1tY0XkUpKUVdNTReRSlWNl18R0Z9XTYBjg4GAwgDCAQEEgQDBgMIBARUAQMMEAYGDgYPFQoGAwMDAwMDDBAGBgwGBg4GBgoGBgMDAwHiDBIEBQMWBQMDASwWDgMOAw0ZCggIBAUDAwgDBg0DAwUBAwMGAwMNBgYOBgYLAwMNBggKJAQFAxYFAwMBBAUDGgHWRnxdNazW1qwpRV01NF5FKSlFXTVGfV02Nl18FwUJAQMKCQNWCQMECgMDCAkDVgknCRMGGgwECwUDDgkJEAkeCRMGGgwEAQMDBgMDDgkJEAkODAgFAwMBBAUDCA8fBAcFBBgKDgkDAwUHAwMHBgYOBgYNAwMKAwMFBAEDAwIDBBsLCAUDAwEEBQMWBQMDAR4AAAAABACAAIADgAOAAAIAFAAmAC4AAAEVJycBBycOAQc1PgE3JxEnIxEzJwE0LgInNR4DFRQGByc+ASccAQcnNR4BAgBa8ALKNlgiTiwbMBW21qrKygKqHzlNL0BuTy0XFUAKDGoCaDA6A1a0WoT9NjZYGygLWAcaEbb+4NYBAMr+tjNcSzYOWA5FY3xEMFsnQhk5HgcNBmheGFsAAAAAAQEqAKoCqgNWAAUAAAEzNxEnIwEqrNTUrAKA1v1U1gACANYAqgMWA1YABQAMAAATMzcRJyMlFAYHER4B1qrW1qoCQDwwMDwCgNb9VNaAOVsYAVgYWwAAAAMAgACKA4ADdgAVABwAIgAAAR4DFRQOAgc1PgM1NC4CJxMUBgcRHgElMzcRJyMCVkBuTy0tT21BLk45Hx85TS9qOjAwOv3AqtbWqgN2DkVjfEREe2NGDlgNN0tcMzNcSzYO/uI5WxgBWBhbR9b9VNYAAAAABADWANYDKgMqAAUACwARABcAAAEzFSM1IxM1MxUjNQE1MxUjFR0BMxUjNQJW1FSAgFTU/oDUgIDUAyrUgP5UgNRUASzUVICsgFTUAAQA1gDWAyoDKgAFAAsAEQAXAAABMxUjNTMDNTMVIxUBNTMVIzURNTMVIzUCqoDUVFTUgP6sVNTUVAKqVNT9rNRUgAHUgNRU/qxU1IAAAAAAAwCAAKoDgANWABcALwA/AAABNTQmKwEiBh0BFBY7ATI2PQEjFSM1MxUjNTQmKwEiBh0BFBY7ATI2PQEjFSM1MxUBMhYVERQGIyEiJjURNDYzAwAYEoASGhoSgBIYQFZW6hoSgBIYGBKAEhpAVlYBlCI0MyP9rCQyMiQCKiwSGBgSrBIYGBIsFoAWLBIYGBKsEhgYEiwWgBYBLDMj/gAiNDMjAgAiNAAABACAAIADgAOAAAMADQAZACkAAAE1MxUnETMyNj0BNCYjAREjFSM1IxEzNTMVATIWFREUBiMhIiY1ETQ2MwJqVpasEhgYEv8AQFZAQFYBlCI0MyP9rCQyMiQBwICAwP8AGBKsEhj/AAEAamr/AFZWAgAzI/2sIjQzIwJUIjQAAAACAGQAVgOcA6oACwBZAAABMjY1NCYjIgYVFBYlFx4BDwEOAS8BDgEPAQ4BKwEiJi8BLgEnBwYmLwEmNj8BLgE1PAE3Jy4BPwE+AR8BPgE/AT4BOwEyFh8BHgEXNzYWHwEWBg8BHgEVHAECAD1ZWD49WVgBfFoGAgRWBA4IahAkFBABCwisBwsCEBMkEWoHDgVWBAIGWgEBAloGAgRWBA4IahAkFBABCwisBwsCEBMkEWoHDgVWBAIGWgEBAWpYPj1ZWD49WWxGBBAIlAcEAyoMFghwBwsKCHAHFQ4qAwMIlAcQBUYKFQsKFQtGBBAIlAcEAyoMFghwBwsKCHAHFQ4qAwMIlAcQBUYKFQsKFQAAAAEAgABYA4ADqgAzAAABMhYVFAYjIiY1PAE3JQ4BIyImNTQ2MzIWFyUuATU0NjMyFhUUBiMiJicFHgEVFAYHBT4BAwAzSUkzM0kC/tISLBo0TEs1GS0SASwBA0s1NExLNRktEv7UAQMCAgEwECwBUkkzM0tLMwcPBrAQEks1NEwREa4HDwg0TEs1NEwTEbAHDwgHDwiwDxEAAwBWAFYDqgOqAAMABwAbAAABNSMVExEjERMyHgIVFA4CIyIuAjU0PgICKlRUVCpYnHNDQ3ObWVicc0NDc5sCgFZW/qoBAP8AAoBDc5tZWJxzQ0Nzm1lYnHNDAAAEAFYAVgOqA6oAAwAXACsALwAAATUzFQMyPgI1NC4CIyIOAhUUHgITMh4CFRQOAiMiLgI1ND4CExEzEQHWVCpGfV02Nl18R0Z9XTY2XXxHWJxzQ0Nzm1lYnHNDQ3ObL1QCgFZW/io2XXxHRn1dNjZdfEdGfV02AwBDc5tZWJxzQ0Nzm1lYnHND/YABAP8AAAABANYA1gMqAyoACwAAAQcXBycHJzcnNxc3Ayru7jzu7jzu7jzu7gLu7u487u487u487u4AAQBVAFUDqwOrABQAABMUHgIzMj4CNTQuAiMiDgIVVUN0nFhYnHRDQ3ScWFicdEMCAFicdENDdJxYWJx0Q0N0nFgAAAACAFUAVQOrA6sAFAAoAAABIg4CFRQeAjMyPgI1NC4CIxEiLgI1ND4CMzIeAhUUDgICAFicdENDdJxYWJx0Q0N0nFhHfF01NV18R0d8XTU1XXwDq0N0nFhYnHRDQ3ScWFicdEP9ADVdfEdHfF01NV18R0d8XTUAAAADAFUAVQOrA6sAFAAoADQAAAEiDgIVFB4CMzI+AjU0LgIjESIuAjU0PgIzMh4CFRQOAhMUBiMiJjU0NjMyFgIAWJx0Q0N0nFhYnHRDQ3ScWEd8XTU1XXxHR3xdNTVdfDlLNTVLSzU1SwOrQ3ScWFicdENDdJxYWJx0Q/0ANV18R0d8XTU1XXxHR3xdNQFVNUtLNTVLSwAAAAEAAAABAADxFM6JXw889QALBAAAAAAA1DSJZQAAAADUNIllAAAAAAOrA9YAAAAIAAIAAAAAAAAAAQAABAAAAAAABAAAAAAAA6sAAQAAAAAAAAAAAAAAAAAAACUEAAAAAAAAAAAAAAAAAAAABAABVgQAAFYEAABWBAABAAQAAFYEAABWBAABAAQAAGoEAACqBAABAAQAAQAEAACqBAAAqgQAAKoEAACqBAAAqgQAAKoEAACABAABKgQAANYEAACABAAA1gQAANYEAACABAAAgAQAAGQEAACABAAAVgQAAFYEAADWBAAAVQQAAFUEAABVAAAAAAAKABQAHgAsAFQAlgCqANgBIAEuAUQBWgFwAYQCEAKoA6YELgTGBcQGEgYiBj4GeAaeBsYHGgdaB+IILghcCKQIvgjgCRwJaAABAAAAJQDHAAQAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEACwAAAAEAAAAAAAIABwCEAAEAAAAAAAMACwBCAAEAAAAAAAQACwCZAAEAAAAAAAUACwAhAAEAAAAAAAYACwBjAAEAAAAAAAoAGgC6AAMAAQQJAAEAFgALAAMAAQQJAAIADgCLAAMAAQQJAAMAFgBNAAMAAQQJAAQAFgCkAAMAAQQJAAUAFgAsAAMAAQQJAAYAFgBuAAMAAQQJAAoANADUdmlkZW8tcmVhY3QAdgBpAGQAZQBvAC0AcgBlAGEAYwB0VmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmlkZW8tcmVhY3QAdgBpAGQAZQBvAC0AcgBlAGEAYwB0dmlkZW8tcmVhY3QAdgBpAGQAZQBvAC0AcgBlAGEAYwB0UmVndWxhcgBSAGUAZwB1AGwAYQBydmlkZW8tcmVhY3QAdgBpAGQAZQBvAC0AcgBlAGEAYwB0Rm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format(\"woff\"), url(data:application/x-font-ttf;base64,AAEAAAALAIAAAwAwT1MvMg7RD8oAAAC8AAAAYGNtYXAOVuSnAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zsdb3FIAAAF4AAAS0GhlYWQLMledAAAUSAAAADZoaGVhB6wEJgAAFIAAAAAkaG10eIgAFM8AABSkAAAAlGxvY2FLllAoAAAVOAAAAExtYXhwACoAyQAAFYQAAAAgbmFtZVtqyukAABWkAAABtnBvc3QAAwAAAAAXXAAAACAAAwQAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADyIAQAAAAAAAQAAAAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg8iD//f//AAAAAAAg8gD//f//AAH/4w4EAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAVYA1gMqAyoAAgAACQIBVgHU/iwDKv7W/tYAAgBWAFYDqgOqAAIAFgAAAS0BNzIeAhUUDgIjIi4CNTQ+AgGqAQD/AFZYnHNDQ3ObWVicc0NDc5sBQMDA6kNzm1lYnHNDQ3ObWVicc0MAAAADAFYAVgOqA6oAEwAnACoAACUyPgI1NC4CIyIOAhUUHgITMh4CFRQOAiMiLgI1ND4CExEFAgBGfV02Nl18R0Z9XTY2XXxHWJxzQ0Nzm1lYnHNDQ3ObAwEAqjZdfEdGfV02Nl18R0Z9XTYDAENzm1lYnHNDQ3ObWVicc0P9lgGAwAAAAAACAQAA1gMAAyoAAwAHAAABMxEjIREzEQJWqqr+qqoDKv2sAlT9rAAAAwBWAFYDqgOqAAMABwAbAAABESMRIxEjERMyHgIVFA4CIyIuAjU0PgICgFZUVoBYnHNDQ3ObWVicc0NDc5sBVgFU/qwBVP6sAlRDc5tZWJxzQ0Nzm1lYnHNDAAAEAFYAVgOqA6oAAwAXACsALwAAAREzEQcyPgI1NC4CIyIOAhUUHgITMh4CFRQOAiMiLgI1ND4CAxEzEQIqVoBGfV02Nl18R0Z9XTY2XXxHWJxzQ0Nzm1lYnHNDQ3ObJ1YBVgFU/qysNl18R0Z9XTY2XXxHRn1dNgMAQ3ObWVicc0NDc5tZWJxzQ/2sAVT+rAABAQABAAMAAwAAAwAAASERIQEAAgD+AAMA/gAAAgBqAQADVgMAAAIABQAACQERIQkBAeoBbP6A/pQBbAIAAQD+AAEAAQAAAAACAKoBAAOWAwAAAgAFAAAJAiERAQIqAWz+lP6AAWwDAP8A/wACAP8AAAAAAAIBAAEAAwADAAACAAYAAAkBEQEzESMBlgFq/gBWVgIAAQD+AAIA/gAAAAAAAgEAAQADAAMAAAMABgAAATMRIyERAQKqVlb+VgFqAwD+AAIA/wAAAAIAqgCAA1YD1gBFAGgAAAEOARUUBjEjNzMVIwcwNjU0MjU0FjsBMhYXHgEXHgEVFAYHDgEHDgEHDgEjIiYnLgEnLgE1MxQWMzI2PwEwNj0BLwEwJiMRMh4CFRQOAiMiLgI1MxQeAjMyPgI1NC4CIxUnNwH4AwsEHgpmSgQEBgUDCAYNAwMKAwcLAQMDBQYGBwMDEQYGDQMDCwYICiIODAMGAwoEBAoJA0Z9XTY2XXxHRn1dNlYpRV01NF5FKSlFXTXW1gG8AQUCAwNeHiYBAwMDAwMDAwMGAwcZDgYNAwMNBgYDAwMBAQMDAgMEFgwLCQEDCAkDGggKBAFuNV17R0Z9XTY2XXxHNF5FKSlFXTU0XkUprNbWAAAEAKoAgANWA9YAGwBGAE0AcAAAARQWMzI2PwEwNj0BMCY1NCYjIgYPATAGHQEwFjcUBg8BMAYjIgYjIiYnLgEnLgE9ATQ2PwEwNjMyNjMyFhceARceARceARUHIzUHNTczEzIeAhUUDgIjIi4CNTMUHgIzMj4CNTQuAiMVJzcCNA4GAwgDCAQEEgQDBgMIBgZUAQMMEAYGDgYGDgYGCAYKCAEDDg4GBg4GBg4GBgoGBgMDAwG2KCpMBi5GfV02Nl18R0Z9XTZWKUVdNTReRSkpRV011tYBeAUJAQMKCQNWCQMECgMDCAkDVgknCRMGGgwEAQMDBgMFKA8eCRMGGgwEAQMDBgMDDgkJEAlqjAweGAEeNV17R0Z9XTY2XXxHNF5FKSlFXTU0XkUprNbWAAAABACqAIADVgPWABsARgCjAMYAAAEUFjMyNj8BMDY9ATQmNTQmIyIGDwEwBh0BMBY3FAYPATAGIyIGIyImJy4BJy4BPQE0Nj8BMDYzMjYzMhYXHgEXHgEXHgEVIzI2PQEwJjU0JisBMAYjIgYdASM0NjMyNjMyFhceAR0BMAYVFAYjIgYHHgEXHgEVFAYHDgEHDgEjIgYjIiYnLgEnLgE1MxUwFhUUFjsBMDYzMjY9ATAmNTQmKwE1EzIeAhUUDgIjIi4CNTMUHgIzMj4CNTQuAiMVJzcCPBAGAwYDCAQEEAQDCAMIBARQAQMMEAYGDgYPFQoGAwMDAwMDDBAGBgwGBg4GBgoGBgMDAwHiDBIEBQMWBQMDASwWDgMOAw0ZCggIBAUDAwgDBg0DAwUBAwMGAwMNBgYOBgYLAwMNBggKJAQFAxYFAwMBBAUDGmZGfV02Nl18R0Z9XTZWKUVdNTReRSkpRV011tYBeAYIAQMKCQNWAwYDBAoDAwgJA1YJJwkTBhoMBAsFAw4JCRAJHgkTBhoMBAEDAwYDAw4JCRAJDgwIBQMDAQQFAwgPHwQHBQQYCg4JAwMFBwMDBwYGDgYGDQMDCgMDBQQBAwMCAwQbCwgFAwMBBAUDFgUDAwEeAWo1XXtHRn1dNjZdfEc0XkUpKUVdNTReRSms1tYAAAIAqgCAA1YD1gBCAGUAAAEOARUUBjEjNzMVIwcwNjU0MjU0FjsBMhYXHgEXHgEVFAYHDgEHDgEjIiYnLgEnLgE1MxQWMzI2PwEwNj0BLwEwJiMlND4CMzUXBzUiDgIVFB4CMzI+AjUzFA4CIyIuAgH0AwsEGgpmSgQEBgUDCAYNAwMKAwcLAQMDBQYIFw8GDQMDCwYICiIODAMGAwoEBAoJA/6uNl18R9bWNF5FKSlFXTU0XkUpVjZdfEdGfV02AbwBBQIDA14eJgEDAwMDAwMDAwYDBxkOBg0DAw0GCAgBAwMCAwQWDAsJAQMICQMaCAoEGkZ8XTWs1tasKUVdNTReRSkpRV01Rn1dNjZdfAAABACqAIADVgPWABsARgBNAHAAAAEUFjMyNj8BMDY9ATAmNTQmIyIGDwEwBh0BMBY3FAYPATAGIyIGIyImJy4BJy4BPQE0Nj8BMDYzMjYzMhYXHgEXHgEXHgEVByM1BzU3MwU0PgIzNRcHNSIOAhUUHgIzMj4CNTMUDgIjIi4CAjQOBgMIAwgEBBIEAwYDCAYGUAEDDBAGBg4GBg4GBggGCggBAw4OBgYOBgYOBgYKBgYDAwMBsigqTAb+2DZdfEfW1jReRSkpRV01NF5FKVY2XXxHRn1dNgF4BQkBAwoJA1YJAwQKAwMICQNWCScJEwYaDAQBAwMGAwUoDx4JEwYaDAQBAwMGAwMOCQkQCWqMDB4YNkZ8XTWs1tasKUVdNTReRSkpRV01Rn1dNjZdfAAAAAQAqgCAA1YD1gAiAD4AaQDGAAATND4CMzUXBzUiDgIVFB4CMzI+AjUzFA4CIyIuAgUUFjMyNj8BMDY9ATAmNTQmIyIGDwEwBh0BMBY3FAYPATAGIyIGIyImJy4BJy4BPQE0Nj8BMDYzMjYzMhYXHgEXHgEXHgEVIzI2PQEwJjU0JisBMAYjIgYdASM0NjMyNjMyFhceAR0BMAYVFAYjIgYHHgEXHgEVFAYHDgEHDgEjIgYjIiYnLgEnLgE1MxUwFhUUFjsBMDYzMjY9ATAmNTQmKwE1qjZdfEfW1jReRSkpRV01NF5FKVY2XXxHRn1dNgGODgYDCAMIBAQSBAMGAwgEBFQBAwwQBgYOBg8VCgYDAwMDAwMMEAYGDAYGDgYGCgYGAwMDAeIMEgQFAxYFAwMBLBYOAw4DDRkKCAgEBQMDCAMGDQMDBQEDAwYDAw0GBg4GBgsDAw0GCAokBAUDFgUDAwEEBQMaAdZGfF01rNbWrClFXTU0XkUpKUVdNUZ9XTY2XXwXBQkBAwoJA1YJAwQKAwMICQNWCScJEwYaDAQLBQMOCQkQCR4JEwYaDAQBAwMGAwMOCQkQCQ4MCAUDAwEEBQMIDx8EBwUEGAoOCQMDBQcDAwcGBg4GBg0DAwoDAwUEAQMDAgMEGwsIBQMDAQQFAxYFAwMBHgAAAAAEAIAAgAOAA4AAAgAUACYALgAAARUnJwEHJw4BBzU+ATcnEScjETMnATQuAic1HgMVFAYHJz4BJxwBByc1HgECAFrwAso2WCJOLBswFbbWqsrKAqofOU0vQG5PLRcVQAoMagJoMDoDVrRahP02NlgbKAtYBxoRtv7g1gEAyv62M1xLNg5YDkVjfEQwWydCGTkeBw0GaF4YWwAAAAABASoAqgKqA1YABQAAATM3EScjASqs1NSsAoDW/VTWAAIA1gCqAxYDVgAFAAwAABMzNxEnIyUUBgcRHgHWqtbWqgJAPDAwPAKA1v1U1oA5WxgBWBhbAAAAAwCAAIoDgAN2ABUAHAAiAAABHgMVFA4CBzU+AzU0LgInExQGBxEeASUzNxEnIwJWQG5PLS1PbUEuTjkfHzlNL2o6MDA6/cCq1taqA3YORWN8RER7Y0YOWA03S1wzM1xLNg7+4jlbGAFYGFtH1v1U1gAAAAAEANYA1gMqAyoABQALABEAFwAAATMVIzUjEzUzFSM1ATUzFSMVHQEzFSM1AlbUVICAVNT+gNSAgNQDKtSA/lSA1FQBLNRUgKyAVNQABADWANYDKgMqAAUACwARABcAAAEzFSM1MwM1MxUjFQE1MxUjNRE1MxUjNQKqgNRUVNSA/qxU1NRUAqpU1P2s1FSAAdSA1FT+rFTUgAAAAAADAIAAqgOAA1YAFwAvAD8AAAE1NCYrASIGHQEUFjsBMjY9ASMVIzUzFSM1NCYrASIGHQEUFjsBMjY9ASMVIzUzFQEyFhURFAYjISImNRE0NjMDABgSgBIaGhKAEhhAVlbqGhKAEhgYEoASGkBWVgGUIjQzI/2sJDIyJAIqLBIYGBKsEhgYEiwWgBYsEhgYEqwSGBgSLBaAFgEsMyP+ACI0MyMCACI0AAAEAIAAgAOAA4AAAwANABkAKQAAATUzFScRMzI2PQE0JiMBESMVIzUjETM1MxUBMhYVERQGIyEiJjURNDYzAmpWlqwSGBgS/wBAVkBAVgGUIjQzI/2sJDIyJAHAgIDA/wAYEqwSGP8AAQBqav8AVlYCADMj/awiNDMjAlQiNAAAAAIAZABWA5wDqgALAFkAAAEyNjU0JiMiBhUUFiUXHgEPAQ4BLwEOAQ8BDgErASImLwEuAScHBiYvASY2PwEuATU8ATcnLgE/AT4BHwE+AT8BPgE7ATIWHwEeARc3NhYfARYGDwEeARUcAQIAPVlYPj1ZWAF8WgYCBFYEDghqECQUEAELCKwHCwIQEyQRagcOBVYEAgZaAQECWgYCBFYEDghqECQUEAELCKwHCwIQEyQRagcOBVYEAgZaAQEBalg+PVlYPj1ZbEYEEAiUBwQDKgwWCHAHCwoIcAcVDioDAwiUBxAFRgoVCwoVC0YEEAiUBwQDKgwWCHAHCwoIcAcVDioDAwiUBxAFRgoVCwoVAAAAAQCAAFgDgAOqADMAAAEyFhUUBiMiJjU8ATclDgEjIiY1NDYzMhYXJS4BNTQ2MzIWFRQGIyImJwUeARUUBgcFPgEDADNJSTMzSQL+0hIsGjRMSzUZLRIBLAEDSzU0TEs1GS0S/tQBAwICATAQLAFSSTMzS0szBw8GsBASSzU0TBERrgcPCDRMSzU0TBMRsAcPCAcPCLAPEQADAFYAVgOqA6oAAwAHABsAAAE1IxUTESMREzIeAhUUDgIjIi4CNTQ+AgIqVFRUKlicc0NDc5tZWJxzQ0NzmwKAVlb+qgEA/wACgENzm1lYnHNDQ3ObWVicc0MAAAQAVgBWA6oDqgADABcAKwAvAAABNTMVAzI+AjU0LgIjIg4CFRQeAhMyHgIVFA4CIyIuAjU0PgITETMRAdZUKkZ9XTY2XXxHRn1dNjZdfEdYnHNDQ3ObWVicc0NDc5svVAKAVlb+KjZdfEdGfV02Nl18R0Z9XTYDAENzm1lYnHNDQ3ObWVicc0P9gAEA/wAAAAEA1gDWAyoDKgALAAABBxcHJwcnNyc3FzcDKu7uPO7uPO7uPO7uAu7u7jzu7jzu7jzu7gABAFUAVQOrA6sAFAAAExQeAjMyPgI1NC4CIyIOAhVVQ3ScWFicdENDdJxYWJx0QwIAWJx0Q0N0nFhYnHRDQ3ScWAAAAAIAVQBVA6sDqwAUACgAAAEiDgIVFB4CMzI+AjU0LgIjESIuAjU0PgIzMh4CFRQOAgIAWJx0Q0N0nFhYnHRDQ3ScWEd8XTU1XXxHR3xdNTVdfAOrQ3ScWFicdENDdJxYWJx0Q/0ANV18R0d8XTU1XXxHR3xdNQAAAAMAVQBVA6sDqwAUACgANAAAASIOAhUUHgIzMj4CNTQuAiMRIi4CNTQ+AjMyHgIVFA4CExQGIyImNTQ2MzIWAgBYnHRDQ3ScWFicdENDdJxYR3xdNTVdfEdHfF01NV18OUs1NUtLNTVLA6tDdJxYWJx0Q0N0nFhYnHRD/QA1XXxHR3xdNTVdfEdHfF01AVU1S0s1NUtLAAAAAQAAAAEAAPEUzolfDzz1AAsEAAAAAADUNIllAAAAANQ0iWUAAAAAA6sD1gAAAAgAAgAAAAAAAAABAAAEAAAAAAAEAAAAAAADqwABAAAAAAAAAAAAAAAAAAAAJQQAAAAAAAAAAAAAAAAAAAAEAAFWBAAAVgQAAFYEAAEABAAAVgQAAFYEAAEABAAAagQAAKoEAAEABAABAAQAAKoEAACqBAAAqgQAAKoEAACqBAAAqgQAAIAEAAEqBAAA1gQAAIAEAADWBAAA1gQAAIAEAACABAAAZAQAAIAEAABWBAAAVgQAANYEAABVBAAAVQQAAFUAAAAAAAoAFAAeACwAVACWAKoA2AEgAS4BRAFaAXABhAIQAqgDpgQuBMYFxAYSBiIGPgZ4Bp4GxgcaB1oH4gguCFwIpAi+COAJHAloAAEAAAAlAMcABAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQALAAAAAQAAAAAAAgAHAIQAAQAAAAAAAwALAEIAAQAAAAAABAALAJkAAQAAAAAABQALACEAAQAAAAAABgALAGMAAQAAAAAACgAaALoAAwABBAkAAQAWAAsAAwABBAkAAgAOAIsAAwABBAkAAwAWAE0AAwABBAkABAAWAKQAAwABBAkABQAWACwAAwABBAkABgAWAG4AAwABBAkACgA0ANR2aWRlby1yZWFjdAB2AGkAZABlAG8ALQByAGUAYQBjAHRWZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADB2aWRlby1yZWFjdAB2AGkAZABlAG8ALQByAGUAYQBjAHR2aWRlby1yZWFjdAB2AGkAZABlAG8ALQByAGUAYQBjAHRSZWd1bGFyAFIAZQBnAHUAbABhAHJ2aWRlby1yZWFjdAB2AGkAZABlAG8ALQByAGUAYQBjAHRGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n.video-react-icon, .video-react .video-react-closed-caption, .video-react .video-react-bezel .video-react-bezel-icon, .video-react .video-react-volume-level, .video-react .video-react-mute-control,\n.video-react .video-react-volume-menu-button, .video-react .video-react-play-control, .video-react .video-react-play-progress, .video-react .video-react-big-play-button {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"video-react\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.video-react-icon-play-arrow:before, .video-react .video-react-bezel .video-react-bezel-icon-play:before, .video-react .video-react-play-control:before, .video-react .video-react-big-play-button:before {\n  content: \"\";\n}\n\n.video-react-icon-play-circle-filled:before {\n  content: \"\";\n}\n\n.video-react-icon-play-circle-outline:before {\n  content: \"\";\n}\n\n.video-react-icon-pause:before, .video-react .video-react-bezel .video-react-bezel-icon-pause:before, .video-react .video-react-play-control.video-react-playing:before {\n  content: \"\";\n}\n\n.video-react-icon-pause-circle-filled:before {\n  content: \"\";\n}\n\n.video-react-icon-pause-circle-outline:before {\n  content: \"\";\n}\n\n.video-react-icon-stop:before {\n  content: \"\";\n}\n\n.video-react-icon-fast-rewind:before, .video-react .video-react-bezel .video-react-bezel-icon-fast-rewind:before {\n  content: \"\";\n}\n\n.video-react-icon-fast-forward:before, .video-react .video-react-bezel .video-react-bezel-icon-fast-forward:before {\n  content: \"\";\n}\n\n.video-react-icon-skip-previous:before {\n  content: \"\";\n}\n\n.video-react-icon-skip-next:before {\n  content: \"\";\n}\n\n.video-react-icon-replay-5:before, .video-react .video-react-bezel .video-react-bezel-icon-replay-5:before {\n  content: \"\";\n}\n\n.video-react-icon-replay-10:before, .video-react .video-react-bezel .video-react-bezel-icon-replay-10:before {\n  content: \"\";\n}\n\n.video-react-icon-replay-30:before, .video-react .video-react-bezel .video-react-bezel-icon-replay-30:before {\n  content: \"\";\n}\n\n.video-react-icon-forward-5:before, .video-react .video-react-bezel .video-react-bezel-icon-forward-5:before {\n  content: \"\";\n}\n\n.video-react-icon-forward-10:before, .video-react .video-react-bezel .video-react-bezel-icon-forward-10:before {\n  content: \"\";\n}\n\n.video-react-icon-forward-30:before, .video-react .video-react-bezel .video-react-bezel-icon-forward-30:before {\n  content: \"\";\n}\n\n.video-react-icon-volume-off:before, .video-react .video-react-bezel .video-react-bezel-icon-volume-off:before, .video-react .video-react-mute-control.video-react-vol-muted:before,\n.video-react .video-react-volume-menu-button.video-react-vol-muted:before {\n  content: \"\";\n}\n\n.video-react-icon-volume-mute:before, .video-react .video-react-mute-control.video-react-vol-0:before,\n.video-react .video-react-volume-menu-button.video-react-vol-0:before {\n  content: \"\";\n}\n\n.video-react-icon-volume-down:before, .video-react .video-react-bezel .video-react-bezel-icon-volume-down:before, .video-react .video-react-mute-control.video-react-vol-2:before,\n.video-react .video-react-volume-menu-button.video-react-vol-2:before, .video-react .video-react-mute-control.video-react-vol-1:before,\n.video-react .video-react-volume-menu-button.video-react-vol-1:before {\n  content: \"\";\n}\n\n.video-react-icon-volume-up:before, .video-react .video-react-bezel .video-react-bezel-icon-volume-up:before, .video-react .video-react-mute-control:before,\n.video-react .video-react-volume-menu-button:before {\n  content: \"\";\n}\n\n.video-react-icon-fullscreen:before {\n  content: \"\";\n}\n\n.video-react-icon-fullscreen-exit:before {\n  content: \"\";\n}\n\n.video-react-icon-closed-caption:before, .video-react .video-react-closed-caption:before {\n  content: \"\";\n}\n\n.video-react-icon-hd:before {\n  content: \"\";\n}\n\n.video-react-icon-settings:before {\n  content: \"\";\n}\n\n.video-react-icon-share:before {\n  content: \"\";\n}\n\n.video-react-icon-info:before {\n  content: \"\";\n}\n\n.video-react-icon-info-outline:before {\n  content: \"\";\n}\n\n.video-react-icon-close:before {\n  content: \"\";\n}\n\n.video-react-icon-circle:before, .video-react .video-react-volume-level:before, .video-react .video-react-play-progress:before {\n  content: \"\";\n}\n\n.video-react-icon-circle-outline:before {\n  content: \"\";\n}\n\n.video-react-icon-circle-inner-circle:before {\n  content: \"\";\n}\n\n.video-react {\n  display: block;\n  vertical-align: top;\n  box-sizing: border-box;\n  color: #fff;\n  background-color: #000;\n  position: relative;\n  font-size: 10px;\n  line-height: 1;\n  font-family: serif, Times, \"Times New Roman\";\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.video-react:-moz-full-screen {\n  position: absolute;\n}\n.video-react:-webkit-full-screen {\n  width: 100% !important;\n  height: 100% !important;\n}\n.video-react *,\n.video-react *:before,\n.video-react *:after {\n  box-sizing: inherit;\n}\n.video-react ul {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  list-style-position: outside;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.video-react.video-react-fluid, .video-react.video-react-16-9, .video-react.video-react-4-3 {\n  width: 100%;\n  max-width: 100%;\n  height: 0;\n}\n.video-react.video-react-16-9 {\n  padding-top: 56.25%;\n}\n.video-react.video-react-4-3 {\n  padding-top: 75%;\n}\n.video-react.video-react-fill {\n  width: 100%;\n  height: 100%;\n}\n.video-react .video-react-video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.video-react.video-react-fullscreen {\n  width: 100% !important;\n  height: 100% !important;\n  padding-top: 0 !important;\n}\n.video-react.video-react-fullscreen.video-react-user-inactive {\n  cursor: none;\n}\n\nbody.video-react-full-window {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  overflow-y: auto;\n}\nbody.video-react-full-window .video-react-fullscreen {\n  position: fixed;\n  overflow: hidden;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.video-react .video-react-button {\n  background: none;\n  border: none;\n  color: inherit;\n  display: inline-block;\n  cursor: pointer;\n  overflow: visible;\n  font-size: inherit;\n  line-height: inherit;\n  text-transform: none;\n  text-decoration: none;\n  transition: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.video-react .video-react-loading-spinner {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -25px 0 0 -25px;\n  opacity: 0.85;\n  text-align: left;\n  border: 6px solid rgba(43, 51, 63, 0.7);\n  box-sizing: border-box;\n  background-clip: padding-box;\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n}\n.video-react .video-react-loading-spinner:before, .video-react .video-react-loading-spinner:after {\n  content: \"\";\n  position: absolute;\n  margin: -6px;\n  box-sizing: inherit;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  opacity: 1;\n  border: inherit;\n  border-color: transparent;\n  border-top-color: white;\n  -webkit-animation: video-react-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, video-react-spinner-fade 1.1s linear infinite;\n  animation: video-react-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, video-react-spinner-fade 1.1s linear infinite;\n}\n\n.video-react-seeking .video-react-loading-spinner,\n.video-react-waiting .video-react-loading-spinner {\n  display: block;\n}\n\n.video-react-seeking .video-react-loading-spinner:before,\n.video-react-waiting .video-react-loading-spinner:before {\n  border-top-color: white;\n}\n\n.video-react-seeking .video-react-loading-spinner:after,\n.video-react-waiting .video-react-loading-spinner:after {\n  border-top-color: white;\n  -webkit-animation-delay: 0.44s;\n  animation-delay: 0.44s;\n}\n\n@keyframes video-react-spinner-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes video-react-spinner-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes video-react-spinner-fade {\n  0% {\n    border-top-color: #73859f;\n  }\n  20% {\n    border-top-color: #73859f;\n  }\n  35% {\n    border-top-color: white;\n  }\n  60% {\n    border-top-color: #73859f;\n  }\n  100% {\n    border-top-color: #73859f;\n  }\n}\n@-webkit-keyframes video-react-spinner-fade {\n  0% {\n    border-top-color: #73859f;\n  }\n  20% {\n    border-top-color: #73859f;\n  }\n  35% {\n    border-top-color: white;\n  }\n  60% {\n    border-top-color: #73859f;\n  }\n  100% {\n    border-top-color: #73859f;\n  }\n}\n.video-react .video-react-big-play-button {\n  font-size: 3em;\n  line-height: 1.5em;\n  height: 1.5em;\n  width: 3em;\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 0;\n  cursor: pointer;\n  opacity: 1;\n  border: 0.06666em solid #fff;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  border-radius: 0.3em;\n  transition: all 0.4s;\n}\n.video-react .video-react-big-play-button.video-react-big-play-button-center {\n  top: 50%;\n  left: 50%;\n  margin-top: -0.75em;\n  margin-left: -1.5em;\n}\n.video-react .video-react-big-play-button.big-play-button-hide {\n  display: none;\n}\n.video-react:hover .video-react-big-play-button,\n.video-react .video-react-big-play-button:focus {\n  outline: 0;\n  border-color: #fff;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n  transition: all 0s;\n}\n\n.video-react-menu-button {\n  cursor: pointer;\n}\n.video-react-menu-button.video-react-disabled {\n  cursor: default;\n}\n\n.video-react-menu .video-react-menu-content {\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: auto;\n  font-family: serif, Times, \"Times New Roman\";\n}\n.video-react-menu li {\n  list-style: none;\n  margin: 0;\n  padding: 0.2em 0;\n  line-height: 1.4em;\n  font-size: 1.2em;\n  text-align: center;\n}\n.video-react-menu li:focus, .video-react-menu li:hover {\n  outline: 0;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n}\n.video-react-menu li.video-react-selected, .video-react-menu li.video-react-selected:focus, .video-react-menu li.video-react-selected:hover {\n  background-color: #fff;\n  color: #2B333F;\n}\n.video-react-menu li.vjs-menu-title {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1em;\n  line-height: 2em;\n  padding: 0;\n  margin: 0 0 0.3em 0;\n  font-weight: bold;\n  cursor: default;\n}\n\n.video-react-scrubbing .vjs-menu-button:hover .video-react-menu {\n  display: none;\n}\n\n.video-react .video-react-menu-button-popup .video-react-menu {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  width: 10em;\n  left: -3em;\n  height: 0em;\n  margin-bottom: 1.5em;\n  border-top-color: rgba(43, 51, 63, 0.7);\n}\n.video-react .video-react-menu-button-popup .video-react-menu .video-react-menu-content {\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  position: absolute;\n  width: 100%;\n  bottom: 1.5em;\n  max-height: 15em;\n}\n\n.video-react-menu-button-popup .video-react-menu.video-react-lock-showing {\n  display: block;\n}\n\n.video-react .video-react-menu-button-inline {\n  transition: all 0.4s;\n  overflow: hidden;\n}\n.video-react .video-react-menu-button-inline:before {\n  width: 2.222222222em;\n}\n.video-react .video-react-menu-button-inline:hover, .video-react .video-react-menu-button-inline:focus, .video-react .video-react-menu-button-inline.video-react-slider-active {\n  width: 12em;\n}\n.video-react .video-react-menu-button-inline:hover .video-react-menu, .video-react .video-react-menu-button-inline:focus .video-react-menu, .video-react .video-react-menu-button-inline.video-react-slider-active .video-react-menu {\n  display: block;\n  opacity: 1;\n}\n.video-react .video-react-menu-button-inline.video-react-slider-active {\n  transition: none;\n}\n.video-react .video-react-menu-button-inline .video-react-menu {\n  opacity: 0;\n  height: 100%;\n  width: auto;\n  position: absolute;\n  left: 4em;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  transition: all 0.4s;\n}\n.video-react .video-react-menu-button-inline .video-react-menu-content {\n  width: auto;\n  height: 100%;\n  margin: 0;\n  overflow: hidden;\n}\n\n.video-react-no-flex .video-react-menu-button-inline .video-react-menu {\n  display: block;\n  opacity: 1;\n  position: relative;\n  width: auto;\n}\n.video-react-no-flex .video-react-menu-button-inline:hover, .video-react-no-flex .video-react-menu-button-inline:focus, .video-react-no-flex .video-react-menu-button-inline.video-react-slider-active {\n  width: auto;\n}\n\n.video-react .video-react-poster {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: contain;\n  background-color: #000000;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n}\n.video-react .video-react-poster img {\n  display: block;\n  vertical-align: middle;\n  margin: 0 auto;\n  max-height: 100%;\n  padding: 0;\n  width: 100%;\n}\n\n.video-react .video-react-slider {\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n  margin: 0 0.45em 0 0.45em;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n}\n.video-react .video-react-slider:focus {\n  box-shadow: 0 0 1em #fff;\n}\n\n.video-react .video-react-control {\n  outline: none;\n  position: relative;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 4em;\n  flex: none;\n}\n.video-react .video-react-control:before {\n  font-size: 1.8em;\n  line-height: 1.67;\n}\n.video-react .video-react-control:focus:before, .video-react .video-react-control:hover:before, .video-react .video-react-control:focus {\n  text-shadow: 0em 0em 1em #fff, 0em 0em 0.5em #fff;\n}\n\n.video-react .video-react-control-text {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.video-react-no-flex .video-react-control {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.video-react .video-react-control-bar {\n  display: none;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3em;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n}\n\n.video-react-has-started .video-react-control-bar {\n  display: flex;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.1s, opacity 0.1s;\n}\n\n.video-react-has-started.video-react-user-inactive.video-react-playing .video-react-control-bar.video-react-control-bar-auto-hide {\n  visibility: visible;\n  opacity: 0;\n  transition: visibility 1s, opacity 1s;\n}\n\n.video-react-controls-disabled .video-react-control-bar,\n.video-react-using-native-controls .video-react-control-bar,\n.video-react-error .video-react-control-bar {\n  display: none !important;\n}\n\n.video-react-audio.video-react-has-started.video-react-user-inactive.video-react-playing .video-react-control-bar {\n  opacity: 1;\n  visibility: visible;\n}\n\n.video-react-has-started.video-react-no-flex .video-react-control-bar {\n  display: table;\n}\n\n.video-react .video-react-progress-control {\n  flex: auto;\n  display: flex;\n  align-items: center;\n  min-width: 4em;\n}\n\n.video-react-live .video-react-progress-control {\n  display: none;\n}\n\n.video-react .video-react-progress-holder {\n  flex: auto;\n  transition: all 0.2s;\n  height: 0.3em;\n}\n\n.video-react .video-react-progress-control:hover .video-react-progress-holder {\n  font-size: 1.6666666667em;\n}\n\n/* If we let the font size grow as much as everything else, the current time tooltip ends up\n ginormous. If you'd like to enable the current time tooltip all the time, this should be disabled\n to avoid a weird hitch when you roll off the hover. */\n.video-react .video-react-progress-control:hover .video-react-time-tooltip,\n.video-react .video-react-progress-control:hover .video-react-mouse-display:after,\n.video-react .video-react-progress-control:hover .video-react-play-progress:after {\n  visibility: visible;\n  font-size: 0.6em;\n}\n\n.video-react .video-react-progress-holder .video-react-play-progress,\n.video-react .video-react-progress-holder .video-react-load-progress,\n.video-react .video-react-progress-holder .video-react-tooltip-progress-bar,\n.video-react .video-react-progress-holder .video-react-load-progress div {\n  position: absolute;\n  display: block;\n  height: 0.3em;\n  margin: 0;\n  padding: 0;\n  width: 0;\n  left: 0;\n  top: 0;\n}\n\n.video-react .video-react-play-progress {\n  background-color: #fff;\n}\n.video-react .video-react-play-progress:before {\n  position: absolute;\n  top: -0.3333333333em;\n  right: -0.5em;\n  font-size: 0.9em;\n}\n\n.video-react .video-react-time-tooltip,\n.video-react .video-react-mouse-display:after,\n.video-react .video-react-play-progress:after {\n  visibility: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: -3.4em;\n  right: -1.9em;\n  font-size: 0.9em;\n  color: #000;\n  content: attr(data-current-time);\n  padding: 6px 8px 8px 8px;\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 0.3em;\n}\n\n.video-react .video-react-time-tooltip,\n.video-react .video-react-play-progress:before,\n.video-react .video-react-play-progress:after {\n  z-index: 1;\n}\n\n.video-react .video-react-progress-control .video-react-keep-tooltips-inside:after {\n  display: none;\n}\n\n.video-react .video-react-load-progress {\n  background: #bfc7d3;\n  background: rgba(115, 133, 159, 0.5);\n}\n\n.video-react .video-react-load-progress div {\n  background: white;\n  background: rgba(115, 133, 159, 0.75);\n}\n\n.video-react.video-react-no-flex .video-react-progress-control {\n  width: auto;\n}\n\n.video-react .video-react-time-tooltip {\n  display: inline-block;\n  height: 2.4em;\n  position: relative;\n  float: right;\n  right: -1.9em;\n}\n\n.video-react .video-react-tooltip-progress-bar {\n  visibility: hidden;\n}\n\n.video-react .video-react-progress-control .video-react-mouse-display {\n  display: none;\n  position: absolute;\n  width: 1px;\n  height: 100%;\n  background-color: #000;\n  z-index: 1;\n}\n\n.video-react-no-flex .video-react-progress-control .video-react-mouse-display {\n  z-index: 0;\n}\n\n.video-react .video-react-progress-control:hover .video-react-mouse-display {\n  display: block;\n}\n\n.video-react.video-react-user-inactive .video-react-progress-control .video-react-mouse-display,\n.video-react.video-react-user-inactive .video-react-progress-control .video-react-mouse-display:after {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 1s, opacity 1s;\n}\n\n.video-react.video-react-user-inactive.video-react-no-flex .video-react-progress-control .video-react-mouse-display,\n.video-react.video-react-user-inactive.video-react-no-flex .video-react-progress-control .video-react-mouse-display:after {\n  display: none;\n}\n\n.video-react .video-react-mouse-display .video-react-time-tooltip,\n.video-react .video-react-progress-control .video-react-mouse-display:after {\n  color: #fff;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.video-react .video-react-play-control {\n  cursor: pointer;\n  flex: none;\n}\n.video-react .video-react-fullscreen-control {\n  cursor: pointer;\n  flex: none;\n}\n\n.video-react.video-react-fullscreen {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9999;\n}\n\n.video-react .video-react-time-control {\n  flex: none;\n  font-size: 1em;\n  line-height: 3em;\n  min-width: 2em;\n  width: auto;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n.video-react .video-react-time-divider {\n  line-height: 3em;\n  min-width: initial;\n  padding: 0;\n}\n\n.video-react .video-react-mute-control,\n.video-react .video-react-volume-menu-button {\n  cursor: pointer;\n  flex: none;\n}\n.video-react .video-react-volume-control {\n  width: 5em;\n  flex: none;\n  display: flex;\n  align-items: center;\n}\n.video-react .video-react-volume-bar {\n  margin: 1.35em 0.45em;\n}\n.video-react .video-react-volume-bar.video-react-slider-horizontal {\n  width: 5em;\n  height: 0.3em;\n}\n.video-react .video-react-volume-bar.video-react-slider-horizontal .video-react-volume-level {\n  width: 100%;\n}\n.video-react .video-react-volume-bar.video-react-slider-vertical {\n  width: 0.3em;\n  height: 5em;\n  margin: 1.35em auto;\n}\n.video-react .video-react-volume-bar.video-react-slider-vertical .video-react-volume-level {\n  height: 100%;\n}\n.video-react .video-react-volume-level {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: #fff;\n}\n.video-react .video-react-volume-level:before {\n  position: absolute;\n  font-size: 0.9em;\n}\n.video-react .video-react-slider-vertical .video-react-volume-level {\n  width: 0.3em;\n}\n.video-react .video-react-slider-vertical .video-react-volume-level:before {\n  top: -0.5em;\n  left: -0.3em;\n}\n.video-react .video-react-slider-horizontal .video-react-volume-level {\n  height: 0.3em;\n}\n.video-react .video-react-slider-horizontal .video-react-volume-level:before {\n  top: -0.3em;\n  right: -0.5em;\n}\n.video-react .video-react-menu-button-popup.video-react-volume-menu-button .video-react-menu {\n  display: block;\n  width: 0;\n  height: 0;\n  border-top-color: transparent;\n}\n.video-react .video-react-menu-button-popup.video-react-volume-menu-button-vertical .video-react-menu {\n  left: 0.5em;\n  height: 8em;\n}\n.video-react .video-react-menu-button-popup.video-react-volume-menu-button-horizontal .video-react-menu {\n  left: -2em;\n}\n.video-react .video-react-menu-button-popup.video-react-volume-menu-button .video-react-menu-content {\n  height: 0;\n  width: 0;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n.video-react .video-react-volume-menu-button-vertical:hover .video-react-menu-content,\n.video-react .video-react-volume-menu-button-vertical:focus .video-react-menu-content,\n.video-react .video-react-volume-menu-button-vertical.video-react-slider-active .video-react-menu-content,\n.video-react .video-react-volume-menu-button-vertical .video-react-lock-showing .video-react-menu-content {\n  height: 8em;\n  width: 2.9em;\n}\n.video-react .video-react-volume-menu-button-horizontal:hover .video-react-menu-content,\n.video-react .video-react-volume-menu-button-horizontal:focus .video-react-menu-content,\n.video-react .video-react-volume-menu-button-horizontal .video-react-slider-active .video-react-menu-content,\n.video-react .video-react-volume-menu-button-horizontal .video-react-lock-showing .video-react-menu-content {\n  height: 2.9em;\n  width: 8em;\n}\n.video-react .video-react-volume-menu-button.video-react-menu-button-inline .video-react-menu-content {\n  background-color: transparent !important;\n}\n\n.video-react .video-react-playback-rate .video-react-playback-rate-value {\n  line-height: 3em;\n  text-align: center;\n}\n.video-react .video-react-playback-rate .video-react-menu {\n  width: 4em;\n  left: 0em;\n}\n\n.video-react .video-react-bezel {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 52px;\n  height: 52px;\n  z-index: 17;\n  margin-left: -26px;\n  margin-top: -26px;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 26px;\n}\n.video-react .video-react-bezel.video-react-bezel-animation {\n  -webkit-animation: video-react-bezel-fadeout 0.5s linear 1 normal forwards;\n  animation: video-react-bezel-fadeout 0.5s linear 1 normal forwards;\n  pointer-events: none;\n}\n.video-react .video-react-bezel.video-react-bezel-animation-alt {\n  -webkit-animation: video-react-bezel-fadeout-alt 0.5s linear 1 normal forwards;\n  animation: video-react-bezel-fadeout-alt 0.5s linear 1 normal forwards;\n  pointer-events: none;\n}\n.video-react .video-react-bezel .video-react-bezel-icon {\n  width: 36px;\n  height: 36px;\n  margin: 8px;\n  font-size: 26px;\n  line-height: 36px;\n  text-align: center;\n}\n@-webkit-keyframes video-react-bezel-fadeout {\n  0% {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n@keyframes video-react-bezel-fadeout {\n  0% {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n@-webkit-keyframes video-react-bezel-fadeout-alt {\n  0% {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n@keyframes video-react-bezel-fadeout-alt {\n  0% {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n.video-react .video-react-closed-caption {\n  cursor: pointer;\n  flex: none;\n}\n.video-react video::-webkit-media-text-track-container {\n  transform: translateY(-30px);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/load-script/index.js":
/*!*******************************************!*\
  !*** ./node_modules/load-script/index.js ***!
  \*******************************************/
/***/ ((module) => {


module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeOne);


/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/***/ ((module) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-player/lib/Player.js":
/*!*************************************************!*\
  !*** ./node_modules/react-player/lib/Player.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactFastCompare = _interopRequireDefault(__webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js"));

var _props = __webpack_require__(/*! ./props */ "./node_modules/react-player/lib/props.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-player/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SEEK_ON_PLAY_EXPIRY = 5000;

var Player = /*#__PURE__*/function (_Component) {
  _inherits(Player, _Component);

  var _super = _createSuper(Player);

  function Player() {
    var _this;

    _classCallCheck(this, Player);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "isReady", false);

    _defineProperty(_assertThisInitialized(_this), "isPlaying", false);

    _defineProperty(_assertThisInitialized(_this), "isLoading", true);

    _defineProperty(_assertThisInitialized(_this), "loadOnReady", null);

    _defineProperty(_assertThisInitialized(_this), "startOnPlay", true);

    _defineProperty(_assertThisInitialized(_this), "seekOnPlay", null);

    _defineProperty(_assertThisInitialized(_this), "onDurationCalled", false);

    _defineProperty(_assertThisInitialized(_this), "handlePlayerMount", function (player) {
      if (_this.player) return; // Prevent loading twice in strict mode

      _this.player = player;

      _this.player.load(_this.props.url);

      _this.progress();
    });

    _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function (key) {
      if (!_this.player) return null;
      return _this.player[key];
    });

    _defineProperty(_assertThisInitialized(_this), "progress", function () {
      if (_this.props.url && _this.player && _this.isReady) {
        var playedSeconds = _this.getCurrentTime() || 0;

        var loadedSeconds = _this.getSecondsLoaded();

        var duration = _this.getDuration();

        if (duration) {
          var progress = {
            playedSeconds: playedSeconds,
            played: playedSeconds / duration
          };

          if (loadedSeconds !== null) {
            progress.loadedSeconds = loadedSeconds;
            progress.loaded = loadedSeconds / duration;
          } // Only call onProgress if values have changed


          if (progress.playedSeconds !== _this.prevPlayed || progress.loadedSeconds !== _this.prevLoaded) {
            _this.props.onProgress(progress);
          }

          _this.prevPlayed = progress.playedSeconds;
          _this.prevLoaded = progress.loadedSeconds;
        }
      }

      _this.progressTimeout = setTimeout(_this.progress, _this.props.progressFrequency || _this.props.progressInterval);
    });

    _defineProperty(_assertThisInitialized(_this), "handleReady", function () {
      if (!_this.mounted) return;
      _this.isReady = true;
      _this.isLoading = false;
      var _this$props = _this.props,
          onReady = _this$props.onReady,
          playing = _this$props.playing,
          volume = _this$props.volume,
          muted = _this$props.muted;
      onReady();

      if (!muted && volume !== null) {
        _this.player.setVolume(volume);
      }

      if (_this.loadOnReady) {
        _this.player.load(_this.loadOnReady, true);

        _this.loadOnReady = null;
      } else if (playing) {
        _this.player.play();
      }

      _this.handleDurationCheck();
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlay", function () {
      _this.isPlaying = true;
      _this.isLoading = false;
      var _this$props2 = _this.props,
          onStart = _this$props2.onStart,
          onPlay = _this$props2.onPlay,
          playbackRate = _this$props2.playbackRate;

      if (_this.startOnPlay) {
        if (_this.player.setPlaybackRate && playbackRate !== 1) {
          _this.player.setPlaybackRate(playbackRate);
        }

        onStart();
        _this.startOnPlay = false;
      }

      onPlay();

      if (_this.seekOnPlay) {
        _this.seekTo(_this.seekOnPlay);

        _this.seekOnPlay = null;
      }

      _this.handleDurationCheck();
    });

    _defineProperty(_assertThisInitialized(_this), "handlePause", function (e) {
      _this.isPlaying = false;

      if (!_this.isLoading) {
        _this.props.onPause(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnded", function () {
      var _this$props3 = _this.props,
          activePlayer = _this$props3.activePlayer,
          loop = _this$props3.loop,
          onEnded = _this$props3.onEnded;

      if (activePlayer.loopOnEnded && loop) {
        _this.seekTo(0);
      }

      if (!loop) {
        _this.isPlaying = false;
        onEnded();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleError", function () {
      var _this$props4;

      _this.isLoading = false;

      (_this$props4 = _this.props).onError.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDurationCheck", function () {
      clearTimeout(_this.durationCheckTimeout);

      var duration = _this.getDuration();

      if (duration) {
        if (!_this.onDurationCalled) {
          _this.props.onDuration(duration);

          _this.onDurationCalled = true;
        }
      } else {
        _this.durationCheckTimeout = setTimeout(_this.handleDurationCheck, 100);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleLoaded", function () {
      // Sometimes we know loading has stopped but onReady/onPlay are never called
      // so this provides a way for players to avoid getting stuck
      _this.isLoading = false;
    });

    return _this;
  }

  _createClass(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.progressTimeout);
      clearTimeout(this.durationCheckTimeout);

      if (this.isReady && this.props.stopOnUnmount) {
        this.player.stop();

        if (this.player.disablePIP) {
          this.player.disablePIP();
        }
      }

      this.mounted = false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      // If there isn’t a player available, don’t do anything
      if (!this.player) {
        return;
      } // Invoke player methods based on changed props


      var _this$props5 = this.props,
          url = _this$props5.url,
          playing = _this$props5.playing,
          volume = _this$props5.volume,
          muted = _this$props5.muted,
          playbackRate = _this$props5.playbackRate,
          pip = _this$props5.pip,
          loop = _this$props5.loop,
          activePlayer = _this$props5.activePlayer,
          disableDeferredLoading = _this$props5.disableDeferredLoading;

      if (!(0, _reactFastCompare["default"])(prevProps.url, url)) {
        if (this.isLoading && !activePlayer.forceLoad && !disableDeferredLoading && !(0, _utils.isMediaStream)(url)) {
          console.warn("ReactPlayer: the attempt to load ".concat(url, " is being deferred until the player has loaded"));
          this.loadOnReady = url;
          return;
        }

        this.isLoading = true;
        this.startOnPlay = true;
        this.onDurationCalled = false;
        this.player.load(url, this.isReady);
      }

      if (!prevProps.playing && playing && !this.isPlaying) {
        this.player.play();
      }

      if (prevProps.playing && !playing && this.isPlaying) {
        this.player.pause();
      }

      if (!prevProps.pip && pip && this.player.enablePIP) {
        this.player.enablePIP();
      }

      if (prevProps.pip && !pip && this.player.disablePIP) {
        this.player.disablePIP();
      }

      if (prevProps.volume !== volume && volume !== null) {
        this.player.setVolume(volume);
      }

      if (prevProps.muted !== muted) {
        if (muted) {
          this.player.mute();
        } else {
          this.player.unmute();

          if (volume !== null) {
            // Set volume next tick to fix a bug with DailyMotion
            setTimeout(function () {
              return _this2.player.setVolume(volume);
            });
          }
        }
      }

      if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
        this.player.setPlaybackRate(playbackRate);
      }

      if (prevProps.loop !== loop && this.player.setLoop) {
        this.player.setLoop(loop);
      }
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (!this.isReady) return null;
      return this.player.getDuration();
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      if (!this.isReady) return null;
      return this.player.getCurrentTime();
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      if (!this.isReady) return null;
      return this.player.getSecondsLoaded();
    }
  }, {
    key: "seekTo",
    value: function seekTo(amount, type) {
      var _this3 = this;

      // When seeking before player is ready, store value and seek later
      if (!this.isReady) {
        if (amount !== 0) {
          this.seekOnPlay = amount;
          setTimeout(function () {
            _this3.seekOnPlay = null;
          }, SEEK_ON_PLAY_EXPIRY);
        }

        return;
      }

      var isFraction = !type ? amount > 0 && amount < 1 : type === 'fraction';

      if (isFraction) {
        // Convert fraction to seconds based on duration
        var duration = this.player.getDuration();

        if (!duration) {
          console.warn('ReactPlayer: could not seek using fraction – duration not yet available');
          return;
        }

        this.player.seekTo(duration * amount);
        return;
      }

      this.player.seekTo(amount);
    }
  }, {
    key: "render",
    value: function render() {
      var Player = this.props.activePlayer;

      if (!Player) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(Player, _extends({}, this.props, {
        onMount: this.handlePlayerMount,
        onReady: this.handleReady,
        onPlay: this.handlePlay,
        onPause: this.handlePause,
        onEnded: this.handleEnded,
        onLoaded: this.handleLoaded,
        onError: this.handleError
      }));
    }
  }]);

  return Player;
}(_react.Component);

exports["default"] = Player;

_defineProperty(Player, "displayName", 'Player');

_defineProperty(Player, "propTypes", _props.propTypes);

_defineProperty(Player, "defaultProps", _props.defaultProps);

/***/ }),

/***/ "./node_modules/react-player/lib/Preview.js":
/*!**************************************************!*\
  !*** ./node_modules/react-player/lib/Preview.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ICON_SIZE = '64px';
var cache = {};

var Preview = /*#__PURE__*/function (_Component) {
  _inherits(Preview, _Component);

  var _super = _createSuper(Preview);

  function Preview() {
    var _this;

    _classCallCheck(this, Preview);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      image: null
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        _this.props.onClick();
      }
    });

    return _this;
  }

  _createClass(Preview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
      this.fetchImage(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          url = _this$props.url,
          light = _this$props.light;

      if (prevProps.url !== url || prevProps.light !== light) {
        this.fetchImage(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "fetchImage",
    value: function fetchImage(_ref) {
      var _this2 = this;

      var url = _ref.url,
          light = _ref.light,
          oEmbedUrl = _ref.oEmbedUrl;

      if (typeof light === 'string') {
        this.setState({
          image: light
        });
        return;
      }

      if (cache[url]) {
        this.setState({
          image: cache[url]
        });
        return;
      }

      this.setState({
        image: null
      });
      return window.fetch(oEmbedUrl.replace('{url}', url)).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.thumbnail_url && _this2.mounted) {
          var image = data.thumbnail_url.replace('height=100', 'height=480');

          _this2.setState({
            image: image
          });

          cache[url] = image;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onClick = _this$props2.onClick,
          playIcon = _this$props2.playIcon,
          previewTabIndex = _this$props2.previewTabIndex;
      var image = this.state.image;
      var flexCenter = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };
      var styles = {
        preview: _objectSpread({
          width: '100%',
          height: '100%',
          backgroundImage: image ? "url(".concat(image, ")") : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          cursor: 'pointer'
        }, flexCenter),
        shadow: _objectSpread({
          background: 'radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)',
          borderRadius: ICON_SIZE,
          width: ICON_SIZE,
          height: ICON_SIZE
        }, flexCenter),
        playIcon: {
          borderStyle: 'solid',
          borderWidth: '16px 0 16px 26px',
          borderColor: 'transparent transparent transparent white',
          marginLeft: '7px'
        }
      };

      var defaultPlayIcon = /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.shadow,
        className: "react-player__shadow"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.playIcon,
        className: "react-player__play-icon"
      }));

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.preview,
        className: "react-player__preview",
        onClick: onClick,
        tabIndex: previewTabIndex,
        onKeyPress: this.handleKeyPress
      }, playIcon || defaultPlayIcon);
    }
  }]);

  return Preview;
}(_react.Component);

exports["default"] = Preview;

/***/ }),

/***/ "./node_modules/react-player/lib/ReactPlayer.js":
/*!******************************************************!*\
  !*** ./node_modules/react-player/lib/ReactPlayer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createReactPlayer = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _deepmerge = _interopRequireDefault(__webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js"));

var _memoizeOne = _interopRequireDefault(__webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js"));

var _reactFastCompare = _interopRequireDefault(__webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js"));

var _props = __webpack_require__(/*! ./props */ "./node_modules/react-player/lib/props.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-player/lib/utils.js");

var _Player3 = _interopRequireDefault(__webpack_require__(/*! ./Player */ "./node_modules/react-player/lib/Player.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Preview = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(__webpack_require__(/*! ./Preview */ "./node_modules/react-player/lib/Preview.js"));
  });
});
var IS_BROWSER = typeof window !== 'undefined' && window.document;
var IS_GLOBAL = typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.window && __webpack_require__.g.window.document;
var SUPPORTED_PROPS = Object.keys(_props.propTypes); // Return null when rendering on the server
// as Suspense is not supported yet

var UniversalSuspense = IS_BROWSER || IS_GLOBAL ? _react.Suspense : function () {
  return null;
};
var customPlayers = [];

var createReactPlayer = function createReactPlayer(players, fallback) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inherits(ReactPlayer, _Component);

    var _super = _createSuper(ReactPlayer);

    function ReactPlayer() {
      var _this;

      _classCallCheck(this, ReactPlayer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "state", {
        showPreview: !!_this.props.light
      });

      _defineProperty(_assertThisInitialized(_this), "references", {
        wrapper: function wrapper(_wrapper) {
          _this.wrapper = _wrapper;
        },
        player: function player(_player) {
          _this.player = _player;
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleClickPreview", function (e) {
        _this.setState({
          showPreview: false
        });

        _this.props.onClickPreview(e);
      });

      _defineProperty(_assertThisInitialized(_this), "showPreview", function () {
        _this.setState({
          showPreview: true
        });
      });

      _defineProperty(_assertThisInitialized(_this), "getDuration", function () {
        if (!_this.player) return null;
        return _this.player.getDuration();
      });

      _defineProperty(_assertThisInitialized(_this), "getCurrentTime", function () {
        if (!_this.player) return null;
        return _this.player.getCurrentTime();
      });

      _defineProperty(_assertThisInitialized(_this), "getSecondsLoaded", function () {
        if (!_this.player) return null;
        return _this.player.getSecondsLoaded();
      });

      _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function () {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'player';
        if (!_this.player) return null;
        return _this.player.getInternalPlayer(key);
      });

      _defineProperty(_assertThisInitialized(_this), "seekTo", function (fraction, type) {
        if (!_this.player) return null;

        _this.player.seekTo(fraction, type);
      });

      _defineProperty(_assertThisInitialized(_this), "handleReady", function () {
        _this.props.onReady(_assertThisInitialized(_this));
      });

      _defineProperty(_assertThisInitialized(_this), "getActivePlayer", (0, _memoizeOne["default"])(function (url) {
        for (var _i = 0, _arr = [].concat(customPlayers, _toConsumableArray(players)); _i < _arr.length; _i++) {
          var player = _arr[_i];

          if (player.canPlay(url)) {
            return player;
          }
        }

        if (fallback) {
          return fallback;
        }

        return null;
      }));

      _defineProperty(_assertThisInitialized(_this), "getConfig", (0, _memoizeOne["default"])(function (url, key) {
        var config = _this.props.config;
        return _deepmerge["default"].all([_props.defaultProps.config, _props.defaultProps.config[key] || {}, config, config[key] || {}]);
      }));

      _defineProperty(_assertThisInitialized(_this), "getAttributes", (0, _memoizeOne["default"])(function (url) {
        return (0, _utils.omit)(_this.props, SUPPORTED_PROPS);
      }));

      _defineProperty(_assertThisInitialized(_this), "renderActivePlayer", function (url) {
        if (!url) return null;

        var player = _this.getActivePlayer(url);

        if (!player) return null;

        var config = _this.getConfig(url, player.key);

        return /*#__PURE__*/_react["default"].createElement(_Player3["default"], _extends({}, _this.props, {
          key: player.key,
          ref: _this.references.player,
          config: config,
          activePlayer: player.lazyPlayer || player,
          onReady: _this.handleReady
        }));
      });

      return _this;
    }

    _createClass(ReactPlayer, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        return !(0, _reactFastCompare["default"])(this.props, nextProps) || !(0, _reactFastCompare["default"])(this.state, nextState);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var light = this.props.light;

        if (!prevProps.light && light) {
          this.setState({
            showPreview: true
          });
        }

        if (prevProps.light && !light) {
          this.setState({
            showPreview: false
          });
        }
      }
    }, {
      key: "renderPreview",
      value: function renderPreview(url) {
        if (!url) return null;
        var _this$props = this.props,
            light = _this$props.light,
            playIcon = _this$props.playIcon,
            previewTabIndex = _this$props.previewTabIndex,
            oEmbedUrl = _this$props.oEmbedUrl;
        return /*#__PURE__*/_react["default"].createElement(Preview, {
          url: url,
          light: light,
          playIcon: playIcon,
          previewTabIndex: previewTabIndex,
          oEmbedUrl: oEmbedUrl,
          onClick: this.handleClickPreview
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            url = _this$props2.url,
            style = _this$props2.style,
            width = _this$props2.width,
            height = _this$props2.height,
            fallback = _this$props2.fallback,
            Wrapper = _this$props2.wrapper;
        var showPreview = this.state.showPreview;
        var attributes = this.getAttributes(url);
        return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({
          ref: this.references.wrapper,
          style: _objectSpread(_objectSpread({}, style), {}, {
            width: width,
            height: height
          })
        }, attributes), /*#__PURE__*/_react["default"].createElement(UniversalSuspense, {
          fallback: fallback
        }, showPreview ? this.renderPreview(url) : this.renderActivePlayer(url)));
      }
    }]);

    return ReactPlayer;
  }(_react.Component), _defineProperty(_class, "displayName", 'ReactPlayer'), _defineProperty(_class, "propTypes", _props.propTypes), _defineProperty(_class, "defaultProps", _props.defaultProps), _defineProperty(_class, "addCustomPlayer", function (player) {
    customPlayers.push(player);
  }), _defineProperty(_class, "removeCustomPlayers", function () {
    customPlayers.length = 0;
  }), _defineProperty(_class, "canPlay", function (url) {
    for (var _i2 = 0, _arr2 = [].concat(customPlayers, _toConsumableArray(players)); _i2 < _arr2.length; _i2++) {
      var _Player = _arr2[_i2];

      if (_Player.canPlay(url)) {
        return true;
      }
    }

    return false;
  }), _defineProperty(_class, "canEnablePIP", function (url) {
    for (var _i3 = 0, _arr3 = [].concat(customPlayers, _toConsumableArray(players)); _i3 < _arr3.length; _i3++) {
      var _Player2 = _arr3[_i3];

      if (_Player2.canEnablePIP && _Player2.canEnablePIP(url)) {
        return true;
      }
    }

    return false;
  }), _temp;
};

exports.createReactPlayer = createReactPlayer;

/***/ }),

/***/ "./node_modules/react-player/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-player/lib/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _players = _interopRequireDefault(__webpack_require__(/*! ./players */ "./node_modules/react-player/lib/players/index.js"));

var _ReactPlayer = __webpack_require__(/*! ./ReactPlayer */ "./node_modules/react-player/lib/ReactPlayer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Fall back to FilePlayer if nothing else can play the URL
var fallback = _players["default"][_players["default"].length - 1];

var _default = (0, _ReactPlayer.createReactPlayer)(_players["default"], fallback);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-player/lib/patterns.js":
/*!***************************************************!*\
  !*** ./node_modules/react-player/lib/patterns.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.canPlay = exports.FLV_EXTENSIONS = exports.DASH_EXTENSIONS = exports.HLS_EXTENSIONS = exports.VIDEO_EXTENSIONS = exports.AUDIO_EXTENSIONS = exports.MATCH_URL_KALTURA = exports.MATCH_URL_VIDYARD = exports.MATCH_URL_MIXCLOUD = exports.MATCH_URL_DAILYMOTION = exports.MATCH_URL_TWITCH_CHANNEL = exports.MATCH_URL_TWITCH_VIDEO = exports.MATCH_URL_WISTIA = exports.MATCH_URL_STREAMABLE = exports.MATCH_URL_FACEBOOK_WATCH = exports.MATCH_URL_FACEBOOK = exports.MATCH_URL_VIMEO = exports.MATCH_URL_SOUNDCLOUD = exports.MATCH_URL_YOUTUBE = void 0;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-player/lib/utils.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
exports.MATCH_URL_YOUTUBE = MATCH_URL_YOUTUBE;
var MATCH_URL_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
exports.MATCH_URL_SOUNDCLOUD = MATCH_URL_SOUNDCLOUD;
var MATCH_URL_VIMEO = /vimeo\.com\/(?!progressive_redirect).+/;
exports.MATCH_URL_VIMEO = MATCH_URL_VIMEO;
var MATCH_URL_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
exports.MATCH_URL_FACEBOOK = MATCH_URL_FACEBOOK;
var MATCH_URL_FACEBOOK_WATCH = /^https?:\/\/fb\.watch\/.+$/;
exports.MATCH_URL_FACEBOOK_WATCH = MATCH_URL_FACEBOOK_WATCH;
var MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
exports.MATCH_URL_STREAMABLE = MATCH_URL_STREAMABLE;
var MATCH_URL_WISTIA = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
exports.MATCH_URL_WISTIA = MATCH_URL_WISTIA;
var MATCH_URL_TWITCH_VIDEO = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
exports.MATCH_URL_TWITCH_VIDEO = MATCH_URL_TWITCH_VIDEO;
var MATCH_URL_TWITCH_CHANNEL = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
exports.MATCH_URL_TWITCH_CHANNEL = MATCH_URL_TWITCH_CHANNEL;
var MATCH_URL_DAILYMOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
exports.MATCH_URL_DAILYMOTION = MATCH_URL_DAILYMOTION;
var MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
exports.MATCH_URL_MIXCLOUD = MATCH_URL_MIXCLOUD;
var MATCH_URL_VIDYARD = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
exports.MATCH_URL_VIDYARD = MATCH_URL_VIDYARD;
var MATCH_URL_KALTURA = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
exports.MATCH_URL_KALTURA = MATCH_URL_KALTURA;
var AUDIO_EXTENSIONS = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
exports.AUDIO_EXTENSIONS = AUDIO_EXTENSIONS;
var VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
exports.VIDEO_EXTENSIONS = VIDEO_EXTENSIONS;
var HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
exports.HLS_EXTENSIONS = HLS_EXTENSIONS;
var DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
exports.DASH_EXTENSIONS = DASH_EXTENSIONS;
var FLV_EXTENSIONS = /\.(flv)($|\?)/i;
exports.FLV_EXTENSIONS = FLV_EXTENSIONS;

var canPlayFile = function canPlayFile(url) {
  if (url instanceof Array) {
    var _iterator = _createForOfIteratorHelper(url),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (typeof item === 'string' && canPlayFile(item)) {
          return true;
        }

        if (canPlayFile(item.src)) {
          return true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return false;
  }

  if ((0, _utils.isMediaStream)(url) || (0, _utils.isBlobUrl)(url)) {
    return true;
  }

  return AUDIO_EXTENSIONS.test(url) || VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url) || FLV_EXTENSIONS.test(url);
};

var canPlay = {
  youtube: function youtube(url) {
    if (url instanceof Array) {
      return url.every(function (item) {
        return MATCH_URL_YOUTUBE.test(item);
      });
    }

    return MATCH_URL_YOUTUBE.test(url);
  },
  soundcloud: function soundcloud(url) {
    return MATCH_URL_SOUNDCLOUD.test(url) && !AUDIO_EXTENSIONS.test(url);
  },
  vimeo: function vimeo(url) {
    return MATCH_URL_VIMEO.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url);
  },
  facebook: function facebook(url) {
    return MATCH_URL_FACEBOOK.test(url) || MATCH_URL_FACEBOOK_WATCH.test(url);
  },
  streamable: function streamable(url) {
    return MATCH_URL_STREAMABLE.test(url);
  },
  wistia: function wistia(url) {
    return MATCH_URL_WISTIA.test(url);
  },
  twitch: function twitch(url) {
    return MATCH_URL_TWITCH_VIDEO.test(url) || MATCH_URL_TWITCH_CHANNEL.test(url);
  },
  dailymotion: function dailymotion(url) {
    return MATCH_URL_DAILYMOTION.test(url);
  },
  mixcloud: function mixcloud(url) {
    return MATCH_URL_MIXCLOUD.test(url);
  },
  vidyard: function vidyard(url) {
    return MATCH_URL_VIDYARD.test(url);
  },
  kaltura: function kaltura(url) {
    return MATCH_URL_KALTURA.test(url);
  },
  file: canPlayFile
};
exports.canPlay = canPlay;

/***/ }),

/***/ "./node_modules/react-player/lib/players/DailyMotion.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-player/lib/players/DailyMotion.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://api.dmcdn.net/all.js';
var SDK_GLOBAL = 'DM';
var SDK_GLOBAL_READY = 'dmAsyncInit';

var DailyMotion = /*#__PURE__*/function (_Component) {
  _inherits(DailyMotion, _Component);

  var _super = _createSuper(DailyMotion);

  function DailyMotion() {
    var _this;

    _classCallCheck(this, DailyMotion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "onDurationChange", function () {
      var duration = _this.getDuration();

      _this.props.onDuration(duration);
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('setMuted', true);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('setMuted', false);
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(DailyMotion, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props = this.props,
          controls = _this$props.controls,
          config = _this$props.config,
          onError = _this$props.onError,
          playing = _this$props.playing;

      var _url$match = url.match(_patterns.MATCH_URL_DAILYMOTION),
          _url$match2 = _slicedToArray(_url$match, 2),
          id = _url$match2[1];

      if (this.player) {
        this.player.load(id, {
          start: (0, _utils.parseStartTime)(url),
          autoplay: playing
        });
        return;
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function (DM) {
        return DM.player;
      }).then(function (DM) {
        if (!_this2.container) return;
        var Player = DM.player;
        _this2.player = new Player(_this2.container, {
          width: '100%',
          height: '100%',
          video: id,
          params: _objectSpread({
            controls: controls,
            autoplay: _this2.props.playing,
            mute: _this2.props.muted,
            start: (0, _utils.parseStartTime)(url),
            origin: window.location.origin
          }, config.params),
          events: {
            apiready: _this2.props.onReady,
            seeked: function seeked() {
              return _this2.props.onSeek(_this2.player.currentTime);
            },
            video_end: _this2.props.onEnded,
            durationchange: _this2.onDurationChange,
            pause: _this2.props.onPause,
            playing: _this2.props.onPlay,
            waiting: _this2.props.onBuffer,
            error: function error(event) {
              return onError(event);
            }
          }
        });
      }, onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.player.duration || null;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.player.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.player.bufferedTime;
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.ref
      }));
    }
  }]);

  return DailyMotion;
}(_react.Component);

exports["default"] = DailyMotion;

_defineProperty(DailyMotion, "displayName", 'DailyMotion');

_defineProperty(DailyMotion, "canPlay", _patterns.canPlay.dailymotion);

_defineProperty(DailyMotion, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Facebook.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Facebook.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://connect.facebook.net/en_US/sdk.js';
var SDK_GLOBAL = 'FB';
var SDK_GLOBAL_READY = 'fbAsyncInit';
var PLAYER_ID_PREFIX = 'facebook-player-';

var Facebook = /*#__PURE__*/function (_Component) {
  _inherits(Facebook, _Component);

  var _super = _createSuper(Facebook);

  function Facebook() {
    var _this;

    _classCallCheck(this, Facebook);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unmute');
    });

    return _this;
  }

  _createClass(Facebook, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      if (isReady) {
        (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (FB) {
          return FB.XFBML.parse();
        });
        return;
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (FB) {
        FB.init({
          appId: _this2.props.config.appId,
          xfbml: true,
          version: _this2.props.config.version
        });
        FB.Event.subscribe('xfbml.render', function (msg) {
          // Here we know the SDK has loaded, even if onReady/onPlay
          // is not called due to a video that cannot be embedded
          _this2.props.onLoaded();
        });
        FB.Event.subscribe('xfbml.ready', function (msg) {
          if (msg.type === 'video' && msg.id === _this2.playerID) {
            _this2.player = msg.instance;

            _this2.player.subscribe('startedPlaying', _this2.props.onPlay);

            _this2.player.subscribe('paused', _this2.props.onPause);

            _this2.player.subscribe('finishedPlaying', _this2.props.onEnded);

            _this2.player.subscribe('startedBuffering', _this2.props.onBuffer);

            _this2.player.subscribe('finishedBuffering', _this2.props.onBufferEnd);

            _this2.player.subscribe('error', _this2.props.onError);

            if (_this2.props.muted) {
              _this2.callPlayer('mute');
            } else {
              _this2.callPlayer('unmute');
            }

            _this2.props.onReady(); // For some reason Facebook have added `visibility: hidden`
            // to the iframe when autoplay fails, so here we set it back


            document.getElementById(_this2.playerID).querySelector('iframe').style.visibility = 'visible';
          }
        });
      });
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('getDuration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('getCurrentPosition');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var attributes = this.props.config.attributes;
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        style: style,
        id: this.playerID,
        className: "fb-video",
        "data-href": this.props.url,
        "data-autoplay": this.props.playing ? 'true' : 'false',
        "data-allowfullscreen": "true",
        "data-controls": this.props.controls ? 'true' : 'false'
      }, attributes));
    }
  }]);

  return Facebook;
}(_react.Component);

exports["default"] = Facebook;

_defineProperty(Facebook, "displayName", 'Facebook');

_defineProperty(Facebook, "canPlay", _patterns.canPlay.facebook);

_defineProperty(Facebook, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/react-player/lib/players/FilePlayer.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-player/lib/players/FilePlayer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HAS_NAVIGATOR = typeof navigator !== 'undefined';
var IS_IPAD_PRO = HAS_NAVIGATOR && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
var IS_IOS = HAS_NAVIGATOR && (/iPad|iPhone|iPod/.test(navigator.userAgent) || IS_IPAD_PRO) && !window.MSStream;
var HLS_SDK_URL = 'https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js';
var HLS_GLOBAL = 'Hls';
var DASH_SDK_URL = 'https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js';
var DASH_GLOBAL = 'dashjs';
var FLV_SDK_URL = 'https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js';
var FLV_GLOBAL = 'flvjs';
var MATCH_DROPBOX_URL = /www\.dropbox\.com\/.+/;
var MATCH_CLOUDFLARE_STREAM = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;
var REPLACE_CLOUDFLARE_STREAM = 'https://videodelivery.net/{id}/manifest/video.m3u8';

var FilePlayer = /*#__PURE__*/function (_Component) {
  _inherits(FilePlayer, _Component);

  var _super = _createSuper(FilePlayer);

  function FilePlayer() {
    var _this;

    _classCallCheck(this, FilePlayer);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "onReady", function () {
      var _this$props;

      return (_this$props = _this.props).onReady.apply(_this$props, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
      var _this$props2;

      return (_this$props2 = _this.props).onPlay.apply(_this$props2, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onBuffer", function () {
      var _this$props3;

      return (_this$props3 = _this.props).onBuffer.apply(_this$props3, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onBufferEnd", function () {
      var _this$props4;

      return (_this$props4 = _this.props).onBufferEnd.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPause", function () {
      var _this$props5;

      return (_this$props5 = _this.props).onPause.apply(_this$props5, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
      var _this$props6;

      return (_this$props6 = _this.props).onEnded.apply(_this$props6, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onError", function () {
      var _this$props7;

      return (_this$props7 = _this.props).onError.apply(_this$props7, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayBackRateChange", function (event) {
      return _this.props.onPlaybackRateChange(event.target.playbackRate);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnablePIP", function () {
      var _this$props8;

      return (_this$props8 = _this.props).onEnablePIP.apply(_this$props8, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onDisablePIP", function (e) {
      var _this$props9 = _this.props,
          onDisablePIP = _this$props9.onDisablePIP,
          playing = _this$props9.playing;
      onDisablePIP(e);

      if (playing) {
        _this.play();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPresentationModeChange", function (e) {
      if (_this.player && (0, _utils.supportsWebKitPresentationMode)(_this.player)) {
        var webkitPresentationMode = _this.player.webkitPresentationMode;

        if (webkitPresentationMode === 'picture-in-picture') {
          _this.onEnablePIP(e);
        } else if (webkitPresentationMode === 'inline') {
          _this.onDisablePIP(e);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSeek", function (e) {
      _this.props.onSeek(e.target.currentTime);
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.player.muted = true;
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.player.muted = false;
    });

    _defineProperty(_assertThisInitialized(_this), "renderSourceElement", function (source, index) {
      if (typeof source === 'string') {
        return /*#__PURE__*/_react["default"].createElement("source", {
          key: index,
          src: source
        });
      }

      return /*#__PURE__*/_react["default"].createElement("source", _extends({
        key: index
      }, source));
    });

    _defineProperty(_assertThisInitialized(_this), "renderTrack", function (track, index) {
      return /*#__PURE__*/_react["default"].createElement("track", _extends({
        key: index
      }, track));
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (player) {
      if (_this.player) {
        // Store previous player to be used by removeListeners()
        _this.prevPlayer = _this.player;
      }

      _this.player = player;
    });

    return _this;
  }

  _createClass(FilePlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
      this.addListeners(this.player);

      if (IS_IOS) {
        this.player.load();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.shouldUseAudio(this.props) !== this.shouldUseAudio(prevProps)) {
        this.removeListeners(this.prevPlayer, prevProps.url);
        this.addListeners(this.player);
      }

      if (this.props.url !== prevProps.url && !(0, _utils.isMediaStream)(this.props.url)) {
        this.player.srcObject = null;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeListeners(this.player);

      if (this.hls) {
        this.hls.destroy();
      }
    }
  }, {
    key: "addListeners",
    value: function addListeners(player) {
      var _this$props10 = this.props,
          url = _this$props10.url,
          playsinline = _this$props10.playsinline;
      player.addEventListener('play', this.onPlay);
      player.addEventListener('waiting', this.onBuffer);
      player.addEventListener('playing', this.onBufferEnd);
      player.addEventListener('pause', this.onPause);
      player.addEventListener('seeked', this.onSeek);
      player.addEventListener('ended', this.onEnded);
      player.addEventListener('error', this.onError);
      player.addEventListener('ratechange', this.onPlayBackRateChange);
      player.addEventListener('enterpictureinpicture', this.onEnablePIP);
      player.addEventListener('leavepictureinpicture', this.onDisablePIP);
      player.addEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);

      if (!this.shouldUseHLS(url)) {
        // onReady is handled by hls.js
        player.addEventListener('canplay', this.onReady);
      }

      if (playsinline) {
        player.setAttribute('playsinline', '');
        player.setAttribute('webkit-playsinline', '');
        player.setAttribute('x5-playsinline', '');
      }
    }
  }, {
    key: "removeListeners",
    value: function removeListeners(player, url) {
      player.removeEventListener('canplay', this.onReady);
      player.removeEventListener('play', this.onPlay);
      player.removeEventListener('waiting', this.onBuffer);
      player.removeEventListener('playing', this.onBufferEnd);
      player.removeEventListener('pause', this.onPause);
      player.removeEventListener('seeked', this.onSeek);
      player.removeEventListener('ended', this.onEnded);
      player.removeEventListener('error', this.onError);
      player.removeEventListener('ratechange', this.onPlayBackRateChange);
      player.removeEventListener('enterpictureinpicture', this.onEnablePIP);
      player.removeEventListener('leavepictureinpicture', this.onDisablePIP);
      player.removeEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);

      if (!this.shouldUseHLS(url)) {
        // onReady is handled by hls.js
        player.removeEventListener('canplay', this.onReady);
      }
    } // Proxy methods to prevent listener leaks

  }, {
    key: "shouldUseAudio",
    value: function shouldUseAudio(props) {
      if (props.config.forceVideo) {
        return false;
      }

      if (props.config.attributes.poster) {
        return false; // Use <video> so that poster is shown
      }

      return _patterns.AUDIO_EXTENSIONS.test(props.url) || props.config.forceAudio;
    }
  }, {
    key: "shouldUseHLS",
    value: function shouldUseHLS(url) {
      if (this.props.config.forceHLS) {
        return true;
      }

      if (IS_IOS) {
        return false;
      }

      return _patterns.HLS_EXTENSIONS.test(url) || MATCH_CLOUDFLARE_STREAM.test(url);
    }
  }, {
    key: "shouldUseDASH",
    value: function shouldUseDASH(url) {
      return _patterns.DASH_EXTENSIONS.test(url) || this.props.config.forceDASH;
    }
  }, {
    key: "shouldUseFLV",
    value: function shouldUseFLV(url) {
      return _patterns.FLV_EXTENSIONS.test(url) || this.props.config.forceFLV;
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props$config = this.props.config,
          hlsVersion = _this$props$config.hlsVersion,
          hlsOptions = _this$props$config.hlsOptions,
          dashVersion = _this$props$config.dashVersion,
          flvVersion = _this$props$config.flvVersion;

      if (this.hls) {
        this.hls.destroy();
      }

      if (this.dash) {
        this.dash.reset();
      }

      if (this.shouldUseHLS(url)) {
        (0, _utils.getSDK)(HLS_SDK_URL.replace('VERSION', hlsVersion), HLS_GLOBAL).then(function (Hls) {
          _this2.hls = new Hls(hlsOptions);

          _this2.hls.on(Hls.Events.MANIFEST_PARSED, function () {
            _this2.props.onReady();
          });

          _this2.hls.on(Hls.Events.ERROR, function (e, data) {
            _this2.props.onError(e, data, _this2.hls, Hls);
          });

          if (MATCH_CLOUDFLARE_STREAM.test(url)) {
            var id = url.match(MATCH_CLOUDFLARE_STREAM)[1];

            _this2.hls.loadSource(REPLACE_CLOUDFLARE_STREAM.replace('{id}', id));
          } else {
            _this2.hls.loadSource(url);
          }

          _this2.hls.attachMedia(_this2.player);

          _this2.props.onLoaded();
        });
      }

      if (this.shouldUseDASH(url)) {
        (0, _utils.getSDK)(DASH_SDK_URL.replace('VERSION', dashVersion), DASH_GLOBAL).then(function (dashjs) {
          _this2.dash = dashjs.MediaPlayer().create();

          _this2.dash.initialize(_this2.player, url, _this2.props.playing);

          _this2.dash.on('error', _this2.props.onError);

          if (parseInt(dashVersion) < 3) {
            _this2.dash.getDebug().setLogToBrowserConsole(false);
          } else {
            _this2.dash.updateSettings({
              debug: {
                logLevel: dashjs.Debug.LOG_LEVEL_NONE
              }
            });
          }

          _this2.props.onLoaded();
        });
      }

      if (this.shouldUseFLV(url)) {
        (0, _utils.getSDK)(FLV_SDK_URL.replace('VERSION', flvVersion), FLV_GLOBAL).then(function (flvjs) {
          _this2.flv = flvjs.createPlayer({
            type: 'flv',
            url: url
          });

          _this2.flv.attachMediaElement(_this2.player);

          _this2.flv.on(flvjs.Events.ERROR, function (e, data) {
            _this2.props.onError(e, data, _this2.flv, flvjs);
          });

          _this2.flv.load();

          _this2.props.onLoaded();
        });
      }

      if (url instanceof Array) {
        // When setting new urls (<source>) on an already loaded video,
        // HTMLMediaElement.load() is needed to reset the media element
        // and restart the media resource. Just replacing children source
        // dom nodes is not enough
        this.player.load();
      } else if ((0, _utils.isMediaStream)(url)) {
        try {
          this.player.srcObject = url;
        } catch (e) {
          this.player.src = window.URL.createObjectURL(url);
        }
      }
    }
  }, {
    key: "play",
    value: function play() {
      var promise = this.player.play();

      if (promise) {
        promise["catch"](this.props.onError);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.player.pause();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.player.removeAttribute('src');

      if (this.dash) {
        this.dash.reset();
      }
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.player.currentTime = seconds;
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.player.volume = fraction;
    }
  }, {
    key: "enablePIP",
    value: function enablePIP() {
      if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
        this.player.requestPictureInPicture();
      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'picture-in-picture') {
        this.player.webkitSetPresentationMode('picture-in-picture');
      }
    }
  }, {
    key: "disablePIP",
    value: function disablePIP() {
      if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
        document.exitPictureInPicture();
      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'inline') {
        this.player.webkitSetPresentationMode('inline');
      }
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      try {
        this.player.playbackRate = rate;
      } catch (error) {
        this.props.onError(error);
      }
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (!this.player) return null;
      var _this$player = this.player,
          duration = _this$player.duration,
          seekable = _this$player.seekable; // on iOS, live streams return Infinity for the duration
      // so instead we use the end of the seekable timerange

      if (duration === Infinity && seekable.length > 0) {
        return seekable.end(seekable.length - 1);
      }

      return duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      if (!this.player) return null;
      return this.player.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      if (!this.player) return null;
      var buffered = this.player.buffered;

      if (buffered.length === 0) {
        return 0;
      }

      var end = buffered.end(buffered.length - 1);
      var duration = this.getDuration();

      if (end > duration) {
        return duration;
      }

      return end;
    }
  }, {
    key: "getSource",
    value: function getSource(url) {
      var useHLS = this.shouldUseHLS(url);
      var useDASH = this.shouldUseDASH(url);
      var useFLV = this.shouldUseFLV(url);

      if (url instanceof Array || (0, _utils.isMediaStream)(url) || useHLS || useDASH || useFLV) {
        return undefined;
      }

      if (MATCH_DROPBOX_URL.test(url)) {
        return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
      }

      return url;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props11 = this.props,
          url = _this$props11.url,
          playing = _this$props11.playing,
          loop = _this$props11.loop,
          controls = _this$props11.controls,
          muted = _this$props11.muted,
          config = _this$props11.config,
          width = _this$props11.width,
          height = _this$props11.height;
      var useAudio = this.shouldUseAudio(this.props);
      var Element = useAudio ? 'audio' : 'video';
      var style = {
        width: width === 'auto' ? width : '100%',
        height: height === 'auto' ? height : '100%'
      };
      return /*#__PURE__*/_react["default"].createElement(Element, _extends({
        ref: this.ref,
        src: this.getSource(url),
        style: style,
        preload: "auto",
        autoPlay: playing || undefined,
        controls: controls,
        muted: muted,
        loop: loop
      }, config.attributes), url instanceof Array && url.map(this.renderSourceElement), config.tracks.map(this.renderTrack));
    }
  }]);

  return FilePlayer;
}(_react.Component);

exports["default"] = FilePlayer;

_defineProperty(FilePlayer, "displayName", 'FilePlayer');

_defineProperty(FilePlayer, "canPlay", _patterns.canPlay.file);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Kaltura.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Kaltura.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://cdn.embed.ly/player-0.1.0.min.js';
var SDK_GLOBAL = 'playerjs';

var Kaltura = /*#__PURE__*/function (_Component) {
  _inherits(Kaltura, _Component);

  var _super = _createSuper(Kaltura);

  function Kaltura() {
    var _this;

    _classCallCheck(this, Kaltura);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unmute');
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
      _this.iframe = iframe;
    });

    return _this;
  }

  _createClass(Kaltura, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (playerjs) {
        if (!_this2.iframe) return;
        _this2.player = new playerjs.Player(_this2.iframe);

        _this2.player.on('ready', function () {
          // An arbitrary timeout is required otherwise
          // the event listeners won’t work
          setTimeout(function () {
            _this2.player.isReady = true;

            _this2.player.setLoop(_this2.props.loop);

            if (_this2.props.muted) {
              _this2.player.mute();
            }

            _this2.addListeners(_this2.player, _this2.props);

            _this2.props.onReady();
          }, 500);
        });
      }, this.props.onError);
    }
  }, {
    key: "addListeners",
    value: function addListeners(player, props) {
      var _this3 = this;

      player.on('play', props.onPlay);
      player.on('pause', props.onPause);
      player.on('ended', props.onEnded);
      player.on('error', props.onError);
      player.on('timeupdate', function (_ref) {
        var duration = _ref.duration,
            seconds = _ref.seconds;
        _this3.duration = duration;
        _this3.currentTime = seconds;
      });
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('setCurrentTime', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.secondsLoaded;
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("iframe", {
        ref: this.ref,
        src: this.props.url,
        frameBorder: "0",
        scrolling: "no",
        style: style,
        allow: "encrypted-media; autoplay; fullscreen;",
        referrerPolicy: "no-referrer-when-downgrade"
      });
    }
  }]);

  return Kaltura;
}(_react.Component);

exports["default"] = Kaltura;

_defineProperty(Kaltura, "displayName", 'Kaltura');

_defineProperty(Kaltura, "canPlay", _patterns.canPlay.kaltura);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Mixcloud.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Mixcloud.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://widget.mixcloud.com/media/js/widgetApi.js';
var SDK_GLOBAL = 'Mixcloud';

var Mixcloud = /*#__PURE__*/function (_Component) {
  _inherits(Mixcloud, _Component);

  var _super = _createSuper(Mixcloud);

  function Mixcloud() {
    var _this;

    _classCallCheck(this, Mixcloud);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {// No volume support
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {// No volume support
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
      _this.iframe = iframe;
    });

    return _this;
  }

  _createClass(Mixcloud, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Mixcloud) {
        _this2.player = Mixcloud.PlayerWidget(_this2.iframe);

        _this2.player.ready.then(function () {
          _this2.player.events.play.on(_this2.props.onPlay);

          _this2.player.events.pause.on(_this2.props.onPause);

          _this2.player.events.ended.on(_this2.props.onEnded);

          _this2.player.events.error.on(_this2.props.error);

          _this2.player.events.progress.on(function (seconds, duration) {
            _this2.currentTime = seconds;
            _this2.duration = duration;
          });

          _this2.props.onReady();
        });
      }, this.props.onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {// No volume support
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          url = _this$props.url,
          config = _this$props.config;
      var id = url.match(_patterns.MATCH_URL_MIXCLOUD)[1];
      var style = {
        width: '100%',
        height: '100%'
      };
      var query = (0, _utils.queryString)(_objectSpread(_objectSpread({}, config.options), {}, {
        feed: "/".concat(id, "/")
      })); // We have to give the iframe a key here to prevent a
      // weird dialog appearing when loading a new track

      return /*#__PURE__*/_react["default"].createElement("iframe", {
        key: id,
        ref: this.ref,
        style: style,
        src: "https://www.mixcloud.com/widget/iframe/?".concat(query),
        frameBorder: "0"
      });
    }
  }]);

  return Mixcloud;
}(_react.Component);

exports["default"] = Mixcloud;

_defineProperty(Mixcloud, "displayName", 'Mixcloud');

_defineProperty(Mixcloud, "canPlay", _patterns.canPlay.mixcloud);

_defineProperty(Mixcloud, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/react-player/lib/players/SoundCloud.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-player/lib/players/SoundCloud.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://w.soundcloud.com/player/api.js';
var SDK_GLOBAL = 'SC';

var SoundCloud = /*#__PURE__*/function (_Component) {
  _inherits(SoundCloud, _Component);

  var _super = _createSuper(SoundCloud);

  function SoundCloud() {
    var _this;

    _classCallCheck(this, SoundCloud);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "fractionLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.setVolume(0);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      if (_this.props.volume !== null) {
        _this.setVolume(_this.props.volume);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
      _this.iframe = iframe;
    });

    return _this;
  }

  _createClass(SoundCloud, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (SC) {
        if (!_this2.iframe) return;
        var _SC$Widget$Events = SC.Widget.Events,
            PLAY = _SC$Widget$Events.PLAY,
            PLAY_PROGRESS = _SC$Widget$Events.PLAY_PROGRESS,
            PAUSE = _SC$Widget$Events.PAUSE,
            FINISH = _SC$Widget$Events.FINISH,
            ERROR = _SC$Widget$Events.ERROR;

        if (!isReady) {
          _this2.player = SC.Widget(_this2.iframe);

          _this2.player.bind(PLAY, _this2.props.onPlay);

          _this2.player.bind(PAUSE, function () {
            var remaining = _this2.duration - _this2.currentTime;

            if (remaining < 0.05) {
              // Prevent onPause firing right before onEnded
              return;
            }

            _this2.props.onPause();
          });

          _this2.player.bind(PLAY_PROGRESS, function (e) {
            _this2.currentTime = e.currentPosition / 1000;
            _this2.fractionLoaded = e.loadedProgress;
          });

          _this2.player.bind(FINISH, function () {
            return _this2.props.onEnded();
          });

          _this2.player.bind(ERROR, function (e) {
            return _this2.props.onError(e);
          });
        }

        _this2.player.load(url, _objectSpread(_objectSpread({}, _this2.props.config.options), {}, {
          callback: function callback() {
            _this2.player.getDuration(function (duration) {
              _this2.duration = duration / 1000;

              _this2.props.onReady();
            });
          }
        }));
      });
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seekTo', seconds * 1000);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction * 100);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.fractionLoaded * this.duration;
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("iframe", {
        ref: this.ref,
        src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
        style: style,
        frameBorder: 0,
        allow: "autoplay"
      });
    }
  }]);

  return SoundCloud;
}(_react.Component);

exports["default"] = SoundCloud;

_defineProperty(SoundCloud, "displayName", 'SoundCloud');

_defineProperty(SoundCloud, "canPlay", _patterns.canPlay.soundcloud);

_defineProperty(SoundCloud, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Streamable.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-player/lib/players/Streamable.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://cdn.embed.ly/player-0.1.0.min.js';
var SDK_GLOBAL = 'playerjs';

var Streamable = /*#__PURE__*/function (_Component) {
  _inherits(Streamable, _Component);

  var _super = _createSuper(Streamable);

  function Streamable() {
    var _this;

    _classCallCheck(this, Streamable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unmute');
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
      _this.iframe = iframe;
    });

    return _this;
  }

  _createClass(Streamable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (playerjs) {
        if (!_this2.iframe) return;
        _this2.player = new playerjs.Player(_this2.iframe);

        _this2.player.setLoop(_this2.props.loop);

        _this2.player.on('ready', _this2.props.onReady);

        _this2.player.on('play', _this2.props.onPlay);

        _this2.player.on('pause', _this2.props.onPause);

        _this2.player.on('seeked', _this2.props.onSeek);

        _this2.player.on('ended', _this2.props.onEnded);

        _this2.player.on('error', _this2.props.onError);

        _this2.player.on('timeupdate', function (_ref) {
          var duration = _ref.duration,
              seconds = _ref.seconds;
          _this2.duration = duration;
          _this2.currentTime = seconds;
        });

        _this2.player.on('buffered', function (_ref2) {
          var percent = _ref2.percent;

          if (_this2.duration) {
            _this2.secondsLoaded = _this2.duration * percent;
          }
        });

        if (_this2.props.muted) {
          _this2.player.mute();
        }
      }, this.props.onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('setCurrentTime', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction * 100);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.secondsLoaded;
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.url.match(_patterns.MATCH_URL_STREAMABLE)[1];
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("iframe", {
        ref: this.ref,
        src: "https://streamable.com/o/".concat(id),
        frameBorder: "0",
        scrolling: "no",
        style: style,
        allow: "encrypted-media; autoplay; fullscreen;"
      });
    }
  }]);

  return Streamable;
}(_react.Component);

exports["default"] = Streamable;

_defineProperty(Streamable, "displayName", 'Streamable');

_defineProperty(Streamable, "canPlay", _patterns.canPlay.streamable);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Twitch.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Twitch.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://player.twitch.tv/js/embed/v1.js';
var SDK_GLOBAL = 'Twitch';
var PLAYER_ID_PREFIX = 'twitch-player-';

var Twitch = /*#__PURE__*/function (_Component) {
  _inherits(Twitch, _Component);

  var _super = _createSuper(Twitch);

  function Twitch() {
    var _this;

    _classCallCheck(this, Twitch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('setMuted', true);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('setMuted', false);
    });

    return _this;
  }

  _createClass(Twitch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      var _this$props = this.props,
          playsinline = _this$props.playsinline,
          onError = _this$props.onError,
          config = _this$props.config,
          controls = _this$props.controls;

      var isChannel = _patterns.MATCH_URL_TWITCH_CHANNEL.test(url);

      var id = isChannel ? url.match(_patterns.MATCH_URL_TWITCH_CHANNEL)[1] : url.match(_patterns.MATCH_URL_TWITCH_VIDEO)[1];

      if (isReady) {
        if (isChannel) {
          this.player.setChannel(id);
        } else {
          this.player.setVideo('v' + id);
        }

        return;
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Twitch) {
        _this2.player = new Twitch.Player(_this2.playerID, _objectSpread({
          video: isChannel ? '' : id,
          channel: isChannel ? id : '',
          height: '100%',
          width: '100%',
          playsinline: playsinline,
          autoplay: _this2.props.playing,
          muted: _this2.props.muted,
          // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859
          controls: isChannel ? true : controls,
          time: (0, _utils.parseStartTime)(url)
        }, config.options));
        var _Twitch$Player = Twitch.Player,
            READY = _Twitch$Player.READY,
            PLAYING = _Twitch$Player.PLAYING,
            PAUSE = _Twitch$Player.PAUSE,
            ENDED = _Twitch$Player.ENDED,
            ONLINE = _Twitch$Player.ONLINE,
            OFFLINE = _Twitch$Player.OFFLINE,
            SEEK = _Twitch$Player.SEEK;

        _this2.player.addEventListener(READY, _this2.props.onReady);

        _this2.player.addEventListener(PLAYING, _this2.props.onPlay);

        _this2.player.addEventListener(PAUSE, _this2.props.onPause);

        _this2.player.addEventListener(ENDED, _this2.props.onEnded);

        _this2.player.addEventListener(SEEK, _this2.props.onSeek); // Prevent weird isLoading behaviour when streams are offline


        _this2.player.addEventListener(ONLINE, _this2.props.onLoaded);

        _this2.player.addEventListener(OFFLINE, _this2.props.onLoaded);
      }, onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      this.callPlayer('pause');
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('getDuration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('getCurrentTime');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style,
        id: this.playerID
      });
    }
  }]);

  return Twitch;
}(_react.Component);

exports["default"] = Twitch;

_defineProperty(Twitch, "displayName", 'Twitch');

_defineProperty(Twitch, "canPlay", _patterns.canPlay.twitch);

_defineProperty(Twitch, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Vidyard.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Vidyard.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://play.vidyard.com/embed/v4.js';
var SDK_GLOBAL = 'VidyardV4';
var SDK_GLOBAL_READY = 'onVidyardAPI';

var Vidyard = /*#__PURE__*/function (_Component) {
  _inherits(Vidyard, _Component);

  var _super = _createSuper(Vidyard);

  function Vidyard() {
    var _this;

    _classCallCheck(this, Vidyard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.setVolume(0);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      if (_this.props.volume !== null) {
        _this.setVolume(_this.props.volume);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(Vidyard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props = this.props,
          playing = _this$props.playing,
          config = _this$props.config,
          onError = _this$props.onError,
          onDuration = _this$props.onDuration;
      var id = url && url.match(_patterns.MATCH_URL_VIDYARD)[1];

      if (this.player) {
        this.stop();
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (Vidyard) {
        if (!_this2.container) return;
        Vidyard.api.addReadyListener(function (data, player) {
          if (_this2.player) {
            return;
          }

          _this2.player = player;

          _this2.player.on('ready', _this2.props.onReady);

          _this2.player.on('play', _this2.props.onPlay);

          _this2.player.on('pause', _this2.props.onPause);

          _this2.player.on('seek', _this2.props.onSeek);

          _this2.player.on('playerComplete', _this2.props.onEnded);
        }, id);
        Vidyard.api.renderPlayer(_objectSpread({
          uuid: id,
          container: _this2.container,
          autoplay: playing ? 1 : 0
        }, config.options));
        Vidyard.api.getPlayerMetadata(id).then(function (meta) {
          _this2.duration = meta.length_in_seconds;
          onDuration(meta.length_in_seconds);
        });
      }, onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      window.VidyardV4.api.destroyPlayer(this.player);
    }
  }, {
    key: "seekTo",
    value: function seekTo(amount) {
      this.callPlayer('seek', amount);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('setPlaybackSpeed', rate);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('currentTime');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.ref
      }));
    }
  }]);

  return Vidyard;
}(_react.Component);

exports["default"] = Vidyard;

_defineProperty(Vidyard, "displayName", 'Vidyard');

_defineProperty(Vidyard, "canPlay", _patterns.canPlay.vidyard);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Vimeo.js":
/*!********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Vimeo.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://player.vimeo.com/api/player.js';
var SDK_GLOBAL = 'Vimeo';

var Vimeo = /*#__PURE__*/function (_Component) {
  _inherits(Vimeo, _Component);

  var _super = _createSuper(Vimeo);

  function Vimeo() {
    var _this;

    _classCallCheck(this, Vimeo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.setVolume(0);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      if (_this.props.volume !== null) {
        _this.setVolume(_this.props.volume);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(Vimeo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      this.duration = null;
      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Vimeo) {
        if (!_this2.container) return;
        var _this2$props$config = _this2.props.config,
            playerOptions = _this2$props$config.playerOptions,
            title = _this2$props$config.title;
        _this2.player = new Vimeo.Player(_this2.container, _objectSpread({
          url: url,
          autoplay: _this2.props.playing,
          muted: _this2.props.muted,
          loop: _this2.props.loop,
          playsinline: _this2.props.playsinline,
          controls: _this2.props.controls
        }, playerOptions));

        _this2.player.ready().then(function () {
          var iframe = _this2.container.querySelector('iframe');

          iframe.style.width = '100%';
          iframe.style.height = '100%';

          if (title) {
            iframe.title = title;
          }
        })["catch"](_this2.props.onError);

        _this2.player.on('loaded', function () {
          _this2.props.onReady();

          _this2.refreshDuration();
        });

        _this2.player.on('play', function () {
          _this2.props.onPlay();

          _this2.refreshDuration();
        });

        _this2.player.on('pause', _this2.props.onPause);

        _this2.player.on('seeked', function (e) {
          return _this2.props.onSeek(e.seconds);
        });

        _this2.player.on('ended', _this2.props.onEnded);

        _this2.player.on('error', _this2.props.onError);

        _this2.player.on('timeupdate', function (_ref) {
          var seconds = _ref.seconds;
          _this2.currentTime = seconds;
        });

        _this2.player.on('progress', function (_ref2) {
          var seconds = _ref2.seconds;
          _this2.secondsLoaded = seconds;
        });

        _this2.player.on('bufferstart', _this2.props.onBuffer);

        _this2.player.on('bufferend', _this2.props.onBufferEnd);
      }, this.props.onError);
    }
  }, {
    key: "refreshDuration",
    value: function refreshDuration() {
      var _this3 = this;

      this.player.getDuration().then(function (duration) {
        _this3.duration = duration;
      });
    }
  }, {
    key: "play",
    value: function play() {
      var promise = this.callPlayer('play');

      if (promise) {
        promise["catch"](this.props.onError);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      this.callPlayer('unload');
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('setCurrentTime', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('setPlaybackRate', rate);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.secondsLoaded;
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: this.props.url,
        ref: this.ref,
        style: style
      });
    }
  }]);

  return Vimeo;
}(_react.Component);

exports["default"] = Vimeo;

_defineProperty(Vimeo, "displayName", 'Vimeo');

_defineProperty(Vimeo, "canPlay", _patterns.canPlay.vimeo);

_defineProperty(Vimeo, "forceLoad", true);

/***/ }),

/***/ "./node_modules/react-player/lib/players/Wistia.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Wistia.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://fast.wistia.com/assets/external/E-v1.js';
var SDK_GLOBAL = 'Wistia';
var PLAYER_ID_PREFIX = 'wistia-player-';

var Wistia = /*#__PURE__*/function (_Component) {
  _inherits(Wistia, _Component);

  var _super = _createSuper(Wistia);

  function Wistia() {
    var _this;

    _classCallCheck(this, Wistia);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));

    _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
      var _this$props;

      return (_this$props = _this.props).onPlay.apply(_this$props, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPause", function () {
      var _this$props2;

      return (_this$props2 = _this.props).onPause.apply(_this$props2, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onSeek", function () {
      var _this$props3;

      return (_this$props3 = _this.props).onSeek.apply(_this$props3, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
      var _this$props4;

      return (_this$props4 = _this.props).onEnded.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlaybackRateChange", function () {
      var _this$props5;

      return (_this$props5 = _this.props).onPlaybackRateChange.apply(_this$props5, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unmute');
    });

    return _this;
  }

  _createClass(Wistia, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props6 = this.props,
          playing = _this$props6.playing,
          muted = _this$props6.muted,
          controls = _this$props6.controls,
          _onReady = _this$props6.onReady,
          config = _this$props6.config,
          onError = _this$props6.onError;
      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Wistia) {
        if (config.customControls) {
          config.customControls.forEach(function (control) {
            return Wistia.defineControl(control);
          });
        }

        window._wq = window._wq || [];

        window._wq.push({
          id: _this2.playerID,
          options: _objectSpread({
            autoPlay: playing,
            silentAutoPlay: 'allow',
            muted: muted,
            controlsVisibleOnLoad: controls,
            fullscreenButton: controls,
            playbar: controls,
            playbackRateControl: controls,
            qualityControl: controls,
            volumeControl: controls,
            settingsControl: controls,
            smallPlayButton: controls
          }, config.options),
          onReady: function onReady(player) {
            _this2.player = player;

            _this2.unbind();

            _this2.player.bind('play', _this2.onPlay);

            _this2.player.bind('pause', _this2.onPause);

            _this2.player.bind('seek', _this2.onSeek);

            _this2.player.bind('end', _this2.onEnded);

            _this2.player.bind('playbackratechange', _this2.onPlaybackRateChange);

            _onReady();
          }
        });
      }, onError);
    }
  }, {
    key: "unbind",
    value: function unbind() {
      this.player.unbind('play', this.onPlay);
      this.player.unbind('pause', this.onPause);
      this.player.unbind('seek', this.onSeek);
      this.player.unbind('end', this.onEnded);
      this.player.unbind('playbackratechange', this.onPlaybackRateChange);
    } // Proxy methods to prevent listener leaks

  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      this.unbind();
      this.callPlayer('remove');
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('time', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('volume', fraction);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('playbackRate', rate);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('duration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('time');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var url = this.props.url;
      var videoID = url && url.match(_patterns.MATCH_URL_WISTIA)[1];
      var className = "wistia_embed wistia_async_".concat(videoID);
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: this.playerID,
        key: videoID,
        className: className,
        style: style
      });
    }
  }]);

  return Wistia;
}(_react.Component);

exports["default"] = Wistia;

_defineProperty(Wistia, "displayName", 'Wistia');

_defineProperty(Wistia, "canPlay", _patterns.canPlay.wistia);

_defineProperty(Wistia, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/react-player/lib/players/YouTube.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-player/lib/players/YouTube.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://www.youtube.com/iframe_api';
var SDK_GLOBAL = 'YT';
var SDK_GLOBAL_READY = 'onYouTubeIframeAPIReady';
var MATCH_PLAYLIST = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/;
var MATCH_USER_UPLOADS = /user\/([a-zA-Z0-9_-]+)\/?/;
var MATCH_NOCOOKIE = /youtube-nocookie\.com/;
var NOCOOKIE_HOST = 'https://www.youtube-nocookie.com';

var YouTube = /*#__PURE__*/function (_Component) {
  _inherits(YouTube, _Component);

  var _super = _createSuper(YouTube);

  function YouTube() {
    var _this;

    _classCallCheck(this, YouTube);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "parsePlaylist", function (url) {
      if (url instanceof Array) {
        return {
          listType: 'playlist',
          playlist: url.map(_this.getID).join(',')
        };
      }

      if (MATCH_PLAYLIST.test(url)) {
        var _url$match = url.match(MATCH_PLAYLIST),
            _url$match2 = _slicedToArray(_url$match, 2),
            playlistId = _url$match2[1];

        return {
          listType: 'playlist',
          list: playlistId.replace(/^UC/, 'UU')
        };
      }

      if (MATCH_USER_UPLOADS.test(url)) {
        var _url$match3 = url.match(MATCH_USER_UPLOADS),
            _url$match4 = _slicedToArray(_url$match3, 2),
            username = _url$match4[1];

        return {
          listType: 'user_uploads',
          list: username
        };
      }

      return {};
    });

    _defineProperty(_assertThisInitialized(_this), "onStateChange", function (event) {
      var data = event.data;
      var _this$props = _this.props,
          onPlay = _this$props.onPlay,
          onPause = _this$props.onPause,
          onBuffer = _this$props.onBuffer,
          onBufferEnd = _this$props.onBufferEnd,
          onEnded = _this$props.onEnded,
          onReady = _this$props.onReady,
          loop = _this$props.loop,
          _this$props$config = _this$props.config,
          playerVars = _this$props$config.playerVars,
          onUnstarted = _this$props$config.onUnstarted;
      var _window$SDK_GLOBAL$Pl = window[SDK_GLOBAL].PlayerState,
          UNSTARTED = _window$SDK_GLOBAL$Pl.UNSTARTED,
          PLAYING = _window$SDK_GLOBAL$Pl.PLAYING,
          PAUSED = _window$SDK_GLOBAL$Pl.PAUSED,
          BUFFERING = _window$SDK_GLOBAL$Pl.BUFFERING,
          ENDED = _window$SDK_GLOBAL$Pl.ENDED,
          CUED = _window$SDK_GLOBAL$Pl.CUED;
      if (data === UNSTARTED) onUnstarted();

      if (data === PLAYING) {
        onPlay();
        onBufferEnd();
      }

      if (data === PAUSED) onPause();
      if (data === BUFFERING) onBuffer();

      if (data === ENDED) {
        var isPlaylist = !!_this.callPlayer('getPlaylist'); // Only loop manually if not playing a playlist

        if (loop && !isPlaylist) {
          if (playerVars.start) {
            _this.seekTo(playerVars.start);
          } else {
            _this.play();
          }
        }

        onEnded();
      }

      if (data === CUED) onReady();
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unMute');
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(YouTube, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "getID",
    value: function getID(url) {
      if (!url || url instanceof Array || MATCH_PLAYLIST.test(url)) {
        return null;
      }

      return url.match(_patterns.MATCH_URL_YOUTUBE)[1];
    }
  }, {
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      var _this$props2 = this.props,
          playing = _this$props2.playing,
          muted = _this$props2.muted,
          playsinline = _this$props2.playsinline,
          controls = _this$props2.controls,
          loop = _this$props2.loop,
          config = _this$props2.config,
          _onError = _this$props2.onError;
      var playerVars = config.playerVars,
          embedOptions = config.embedOptions;
      var id = this.getID(url);

      if (isReady) {
        if (MATCH_PLAYLIST.test(url) || MATCH_USER_UPLOADS.test(url) || url instanceof Array) {
          this.player.loadPlaylist(this.parsePlaylist(url));
          return;
        }

        this.player.cueVideoById({
          videoId: id,
          startSeconds: (0, _utils.parseStartTime)(url) || playerVars.start,
          endSeconds: (0, _utils.parseEndTime)(url) || playerVars.end
        });
        return;
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function (YT) {
        return YT.loaded;
      }).then(function (YT) {
        if (!_this2.container) return;
        _this2.player = new YT.Player(_this2.container, _objectSpread({
          width: '100%',
          height: '100%',
          videoId: id,
          playerVars: _objectSpread(_objectSpread({
            autoplay: playing ? 1 : 0,
            mute: muted ? 1 : 0,
            controls: controls ? 1 : 0,
            start: (0, _utils.parseStartTime)(url),
            end: (0, _utils.parseEndTime)(url),
            origin: window.location.origin,
            playsinline: playsinline ? 1 : 0
          }, _this2.parsePlaylist(url)), playerVars),
          events: {
            onReady: function onReady() {
              if (loop) {
                _this2.player.setLoop(true); // Enable playlist looping

              }

              _this2.props.onReady();
            },
            onPlaybackRateChange: function onPlaybackRateChange(event) {
              return _this2.props.onPlaybackRateChange(event.data);
            },
            onStateChange: _this2.onStateChange,
            onError: function onError(event) {
              return _onError(event.data);
            }
          },
          host: MATCH_NOCOOKIE.test(url) ? NOCOOKIE_HOST : undefined
        }, embedOptions));
      }, _onError);

      if (embedOptions.events) {
        console.warn('Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause');
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('playVideo');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pauseVideo');
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!document.body.contains(this.callPlayer('getIframe'))) return;
      this.callPlayer('stopVideo');
    }
  }, {
    key: "seekTo",
    value: function seekTo(amount) {
      this.callPlayer('seekTo', amount);

      if (!this.props.playing) {
        this.pause();
      }
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction * 100);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('setPlaybackRate', rate);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('getDuration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('getCurrentTime');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.callPlayer('getVideoLoadedFraction') * this.getDuration();
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.ref
      }));
    }
  }]);

  return YouTube;
}(_react.Component);

exports["default"] = YouTube;

_defineProperty(YouTube, "displayName", 'YouTube');

_defineProperty(YouTube, "canPlay", _patterns.canPlay.youtube);

/***/ }),

/***/ "./node_modules/react-player/lib/players/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-player/lib/players/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lib/patterns.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = [{
  key: 'youtube',
  name: 'YouTube',
  canPlay: _patterns.canPlay.youtube,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./YouTube */ "./node_modules/react-player/lib/players/YouTube.js"));
    });
  })
}, {
  key: 'soundcloud',
  name: 'SoundCloud',
  canPlay: _patterns.canPlay.soundcloud,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./SoundCloud */ "./node_modules/react-player/lib/players/SoundCloud.js"));
    });
  })
}, {
  key: 'vimeo',
  name: 'Vimeo',
  canPlay: _patterns.canPlay.vimeo,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Vimeo */ "./node_modules/react-player/lib/players/Vimeo.js"));
    });
  })
}, {
  key: 'facebook',
  name: 'Facebook',
  canPlay: _patterns.canPlay.facebook,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Facebook */ "./node_modules/react-player/lib/players/Facebook.js"));
    });
  })
}, {
  key: 'streamable',
  name: 'Streamable',
  canPlay: _patterns.canPlay.streamable,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Streamable */ "./node_modules/react-player/lib/players/Streamable.js"));
    });
  })
}, {
  key: 'wistia',
  name: 'Wistia',
  canPlay: _patterns.canPlay.wistia,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Wistia */ "./node_modules/react-player/lib/players/Wistia.js"));
    });
  })
}, {
  key: 'twitch',
  name: 'Twitch',
  canPlay: _patterns.canPlay.twitch,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Twitch */ "./node_modules/react-player/lib/players/Twitch.js"));
    });
  })
}, {
  key: 'dailymotion',
  name: 'DailyMotion',
  canPlay: _patterns.canPlay.dailymotion,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./DailyMotion */ "./node_modules/react-player/lib/players/DailyMotion.js"));
    });
  })
}, {
  key: 'mixcloud',
  name: 'Mixcloud',
  canPlay: _patterns.canPlay.mixcloud,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Mixcloud */ "./node_modules/react-player/lib/players/Mixcloud.js"));
    });
  })
}, {
  key: 'vidyard',
  name: 'Vidyard',
  canPlay: _patterns.canPlay.vidyard,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Vidyard */ "./node_modules/react-player/lib/players/Vidyard.js"));
    });
  })
}, {
  key: 'kaltura',
  name: 'Kaltura',
  canPlay: _patterns.canPlay.kaltura,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Kaltura */ "./node_modules/react-player/lib/players/Kaltura.js"));
    });
  })
}, {
  key: 'file',
  name: 'FilePlayer',
  canPlay: _patterns.canPlay.file,
  canEnablePIP: function canEnablePIP(url) {
    return _patterns.canPlay.file(url) && (document.pictureInPictureEnabled || (0, _utils.supportsWebKitPresentationMode)()) && !_patterns.AUDIO_EXTENSIONS.test(url);
  },
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./FilePlayer */ "./node_modules/react-player/lib/players/FilePlayer.js"));
    });
  })
}];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-player/lib/props.js":
/*!************************************************!*\
  !*** ./node_modules/react-player/lib/props.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultProps = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var string = _propTypes["default"].string,
    bool = _propTypes["default"].bool,
    number = _propTypes["default"].number,
    array = _propTypes["default"].array,
    oneOfType = _propTypes["default"].oneOfType,
    shape = _propTypes["default"].shape,
    object = _propTypes["default"].object,
    func = _propTypes["default"].func,
    node = _propTypes["default"].node;
var propTypes = {
  url: oneOfType([string, array, object]),
  playing: bool,
  loop: bool,
  controls: bool,
  volume: number,
  muted: bool,
  playbackRate: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  style: object,
  progressInterval: number,
  playsinline: bool,
  pip: bool,
  stopOnUnmount: bool,
  light: oneOfType([bool, string]),
  playIcon: node,
  previewTabIndex: number,
  fallback: node,
  oEmbedUrl: string,
  wrapper: oneOfType([string, func, shape({
    render: func.isRequired
  })]),
  config: shape({
    soundcloud: shape({
      options: object
    }),
    youtube: shape({
      playerVars: object,
      embedOptions: object,
      onUnstarted: func
    }),
    facebook: shape({
      appId: string,
      version: string,
      playerId: string,
      attributes: object
    }),
    dailymotion: shape({
      params: object
    }),
    vimeo: shape({
      playerOptions: object,
      title: string
    }),
    file: shape({
      attributes: object,
      tracks: array,
      forceVideo: bool,
      forceAudio: bool,
      forceHLS: bool,
      forceDASH: bool,
      forceFLV: bool,
      hlsOptions: object,
      hlsVersion: string,
      dashVersion: string,
      flvVersion: string
    }),
    wistia: shape({
      options: object,
      playerId: string,
      customControls: array
    }),
    mixcloud: shape({
      options: object
    }),
    twitch: shape({
      options: object,
      playerId: string
    }),
    vidyard: shape({
      options: object
    })
  }),
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onBufferEnd: func,
  onEnded: func,
  onError: func,
  onDuration: func,
  onSeek: func,
  onPlaybackRateChange: func,
  onProgress: func,
  onClickPreview: func,
  onEnablePIP: func,
  onDisablePIP: func
};
exports.propTypes = propTypes;

var noop = function noop() {};

var defaultProps = {
  playing: false,
  loop: false,
  controls: false,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: '640px',
  height: '360px',
  style: {},
  progressInterval: 1000,
  playsinline: false,
  pip: false,
  stopOnUnmount: true,
  light: false,
  fallback: null,
  wrapper: 'div',
  previewTabIndex: 0,
  oEmbedUrl: 'https://noembed.com/embed?url={url}',
  config: {
    soundcloud: {
      options: {
        visual: true,
        // Undocumented, but makes player fill container and look better
        buying: false,
        liking: false,
        download: false,
        sharing: false,
        show_comments: false,
        show_playcount: false
      }
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
      embedOptions: {},
      onUnstarted: noop
    },
    facebook: {
      appId: '1309697205772819',
      version: 'v3.3',
      playerId: null,
      attributes: {}
    },
    dailymotion: {
      params: {
        api: 1,
        'endscreen-enable': false
      }
    },
    vimeo: {
      playerOptions: {
        autopause: false,
        byline: false,
        portrait: false,
        title: false
      },
      title: null
    },
    file: {
      attributes: {},
      tracks: [],
      forceVideo: false,
      forceAudio: false,
      forceHLS: false,
      forceDASH: false,
      forceFLV: false,
      hlsOptions: {},
      hlsVersion: '1.1.4',
      dashVersion: '3.1.3',
      flvVersion: '1.5.0'
    },
    wistia: {
      options: {},
      playerId: null,
      customControls: null
    },
    mixcloud: {
      options: {
        hide_cover: 1
      }
    },
    twitch: {
      options: {},
      playerId: null
    },
    vidyard: {
      options: {}
    }
  },
  onReady: noop,
  onStart: noop,
  onPlay: noop,
  onPause: noop,
  onBuffer: noop,
  onBufferEnd: noop,
  onEnded: noop,
  onError: noop,
  onDuration: noop,
  onSeek: noop,
  onPlaybackRateChange: noop,
  onProgress: noop,
  onClickPreview: noop,
  onEnablePIP: noop,
  onDisablePIP: noop
};
exports.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/react-player/lib/utils.js":
/*!************************************************!*\
  !*** ./node_modules/react-player/lib/utils.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseStartTime = parseStartTime;
exports.parseEndTime = parseEndTime;
exports.randomString = randomString;
exports.queryString = queryString;
exports.getSDK = getSDK;
exports.getConfig = getConfig;
exports.omit = omit;
exports.callPlayer = callPlayer;
exports.isMediaStream = isMediaStream;
exports.isBlobUrl = isBlobUrl;
exports.supportsWebKitPresentationMode = supportsWebKitPresentationMode;

var _loadScript = _interopRequireDefault(__webpack_require__(/*! load-script */ "./node_modules/load-script/index.js"));

var _deepmerge = _interopRequireDefault(__webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
var MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/;
var MATCH_START_STAMP = /(\d+)(h|m|s)/g;
var MATCH_NUMERIC = /^\d+$/; // Parse YouTube URL for a start time param, ie ?t=1h14m30s
// and return the start time in seconds

function parseTimeParam(url, pattern) {
  if (url instanceof Array) {
    return undefined;
  }

  var match = url.match(pattern);

  if (match) {
    var stamp = match[1];

    if (stamp.match(MATCH_START_STAMP)) {
      return parseTimeString(stamp);
    }

    if (MATCH_NUMERIC.test(stamp)) {
      return parseInt(stamp);
    }
  }

  return undefined;
}

function parseTimeString(stamp) {
  var seconds = 0;
  var array = MATCH_START_STAMP.exec(stamp);

  while (array !== null) {
    var _array = array,
        _array2 = _slicedToArray(_array, 3),
        count = _array2[1],
        period = _array2[2];

    if (period === 'h') seconds += parseInt(count, 10) * 60 * 60;
    if (period === 'm') seconds += parseInt(count, 10) * 60;
    if (period === 's') seconds += parseInt(count, 10);
    array = MATCH_START_STAMP.exec(stamp);
  }

  return seconds;
}

function parseStartTime(url) {
  return parseTimeParam(url, MATCH_START_QUERY);
}

function parseEndTime(url) {
  return parseTimeParam(url, MATCH_END_QUERY);
} // http://stackoverflow.com/a/38622545


function randomString() {
  return Math.random().toString(36).substr(2, 5);
}

function queryString(object) {
  return Object.keys(object).map(function (key) {
    return "".concat(key, "=").concat(object[key]);
  }).join('&');
}

function getGlobal(key) {
  if (window[key]) {
    return window[key];
  }

  if (window.exports && window.exports[key]) {
    return window.exports[key];
  }

  if (window.module && window.module.exports && window.module.exports[key]) {
    return window.module.exports[key];
  }

  return null;
} // Util function to load an external SDK
// or return the SDK if it is already loaded


var requests = {};

function getSDK(url, sdkGlobal) {
  var sdkReady = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var isLoaded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
    return true;
  };
  var fetchScript = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _loadScript["default"];
  var existingGlobal = getGlobal(sdkGlobal);

  if (existingGlobal && isLoaded(existingGlobal)) {
    return Promise.resolve(existingGlobal);
  }

  return new Promise(function (resolve, reject) {
    // If we are already loading the SDK, add the resolve and reject
    // functions to the existing array of requests
    if (requests[url]) {
      requests[url].push({
        resolve: resolve,
        reject: reject
      });
      return;
    }

    requests[url] = [{
      resolve: resolve,
      reject: reject
    }];

    var onLoaded = function onLoaded(sdk) {
      // When loaded, resolve all pending request promises
      requests[url].forEach(function (request) {
        return request.resolve(sdk);
      });
    };

    if (sdkReady) {
      var previousOnReady = window[sdkReady];

      window[sdkReady] = function () {
        if (previousOnReady) previousOnReady();
        onLoaded(getGlobal(sdkGlobal));
      };
    }

    fetchScript(url, function (err) {
      if (err) {
        // Loading the SDK failed – reject all requests and
        // reset the array of requests for this SDK
        requests[url].forEach(function (request) {
          return request.reject(err);
        });
        requests[url] = null;
      } else if (!sdkReady) {
        onLoaded(getGlobal(sdkGlobal));
      }
    });
  });
}

function getConfig(props, defaultProps) {
  return (0, _deepmerge["default"])(defaultProps.config, props.config);
}

function omit(object) {
  var _ref;

  for (var _len = arguments.length, arrays = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  var omitKeys = (_ref = []).concat.apply(_ref, arrays);

  var output = {};
  var keys = Object.keys(object);

  for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
    var key = _keys[_i2];

    if (omitKeys.indexOf(key) === -1) {
      output[key] = object[key];
    }
  }

  return output;
}

function callPlayer(method) {
  var _this$player;

  // Util method for calling a method on this.player
  // but guard against errors and console.warn instead
  if (!this.player || !this.player[method]) {
    var message = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(method, "%c \u2013 ");

    if (!this.player) {
      message += 'The player was not available';
    } else if (!this.player[method]) {
      message += 'The method was not available';
    }

    console.warn(message, 'font-weight: bold', '');
    return null;
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return (_this$player = this.player)[method].apply(_this$player, args);
}

function isMediaStream(url) {
  return typeof window !== 'undefined' && typeof window.MediaStream !== 'undefined' && url instanceof window.MediaStream;
}

function isBlobUrl(url) {
  return /^blob:/.test(url);
}

function supportsWebKitPresentationMode() {
  var video = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.createElement('video');
  // Check if Safari supports PiP, and is not on mobile (other than iPad)
  // iPhone safari appears to "support" PiP through the check, however PiP does not function
  var notMobile = /iPhone|iPod/.test(navigator.userAgent) === false;
  return video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === 'function' && notMobile;
}

/***/ }),

/***/ "./node_modules/react-property/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-property/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];
reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      attributeName = _ref2[1];

  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function capitalize(token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

var _require = __webpack_require__(/*! ../lib/possibleStandardNamesOptimized */ "./node_modules/react-property/lib/possibleStandardNamesOptimized.js"),
    CAMELCASE = _require.CAMELCASE,
    SAME = _require.SAME,
    possibleStandardNamesOptimized = _require.possibleStandardNames;

var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
/**
 * Checks whether a property name is a custom attribute.
 *
 * @see {@link https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25}
 *
 * @param {string}
 * @return {boolean}
 */

var isCustomAttribute = RegExp.prototype.test.bind( // eslint-disable-next-line no-misleading-character-class
new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
var possibleStandardNames = Object.keys(possibleStandardNamesOptimized).reduce(function (accumulator, standardName) {
  var propName = possibleStandardNamesOptimized[standardName];

  if (propName === SAME) {
    accumulator[standardName] = standardName;
  } else if (propName === CAMELCASE) {
    accumulator[standardName.toLowerCase()] = standardName;
  } else {
    accumulator[standardName] = propName;
  }

  return accumulator;
}, {});

exports.BOOLEAN = BOOLEAN;
exports.BOOLEANISH_STRING = BOOLEANISH_STRING;
exports.NUMERIC = NUMERIC;
exports.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
exports.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
exports.RESERVED = RESERVED;
exports.STRING = STRING;
exports.getPropertyInfo = getPropertyInfo;
exports.isCustomAttribute = isCustomAttribute;
exports.possibleStandardNames = possibleStandardNames;


/***/ }),

/***/ "./node_modules/react-property/lib/possibleStandardNamesOptimized.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-property/lib/possibleStandardNamesOptimized.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

// An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').
var SAME = 0;
exports.SAME = SAME;

// An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').
var CAMELCASE = 1;
exports.CAMELCASE = CAMELCASE;

exports.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  'accept-charset': 'acceptCharset',
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: 'className',
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: 'htmlFor',
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  'http-equiv': 'httpEquiv',
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  'accent-height': 'accentHeight',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  'alignment-baseline': 'alignmentBaseline',
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  'arabic-form': 'arabicForm',
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  'baseline-shift': 'baselineShift',
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  'cap-height': 'capHeight',
  clip: 0,
  clipPath: 1,
  'clip-path': 'clipPath',
  clipPathUnits: 1,
  clipRule: 1,
  'clip-rule': 'clipRule',
  color: 0,
  colorInterpolation: 1,
  'color-interpolation': 'colorInterpolation',
  colorInterpolationFilters: 1,
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorProfile: 1,
  'color-profile': 'colorProfile',
  colorRendering: 1,
  'color-rendering': 'colorRendering',
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  'dominant-baseline': 'dominantBaseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  'enable-background': 'enableBackground',
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  'fill-opacity': 'fillOpacity',
  fillRule: 1,
  'fill-rule': 'fillRule',
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  'flood-opacity': 'floodOpacity',
  floodColor: 1,
  'flood-color': 'floodColor',
  focusable: 0,
  fontFamily: 1,
  'font-family': 'fontFamily',
  fontSize: 1,
  'font-size': 'fontSize',
  fontSizeAdjust: 1,
  'font-size-adjust': 'fontSizeAdjust',
  fontStretch: 1,
  'font-stretch': 'fontStretch',
  fontStyle: 1,
  'font-style': 'fontStyle',
  fontVariant: 1,
  'font-variant': 'fontVariant',
  fontWeight: 1,
  'font-weight': 'fontWeight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  'glyph-name': 'glyphName',
  glyphOrientationHorizontal: 1,
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphOrientationVertical: 1,
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  'horiz-adv-x': 'horizAdvX',
  horizOriginX: 1,
  'horiz-origin-x': 'horizOriginX',
  ideographic: 0,
  imageRendering: 1,
  'image-rendering': 'imageRendering',
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  'letter-spacing': 'letterSpacing',
  lightingColor: 1,
  'lighting-color': 'lightingColor',
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  'marker-end': 'markerEnd',
  markerHeight: 1,
  markerMid: 1,
  'marker-mid': 'markerMid',
  markerStart: 1,
  'marker-start': 'markerStart',
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  'overline-position': 'overlinePosition',
  overlineThickness: 1,
  'overline-thickness': 'overlineThickness',
  paintOrder: 1,
  'paint-order': 'paintOrder',
  panose1: 0,
  'panose-1': 'panose1',
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  'pointer-events': 'pointerEvents',
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  'rendering-intent': 'renderingIntent',
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  'shape-rendering': 'shapeRendering',
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  'stop-color': 'stopColor',
  stopOpacity: 1,
  'stop-opacity': 'stopOpacity',
  strikethroughPosition: 1,
  'strikethrough-position': 'strikethroughPosition',
  strikethroughThickness: 1,
  'strikethrough-thickness': 'strikethroughThickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  'stroke-dasharray': 'strokeDasharray',
  strokeDashoffset: 1,
  'stroke-dashoffset': 'strokeDashoffset',
  strokeLinecap: 1,
  'stroke-linecap': 'strokeLinecap',
  strokeLinejoin: 1,
  'stroke-linejoin': 'strokeLinejoin',
  strokeMiterlimit: 1,
  'stroke-miterlimit': 'strokeMiterlimit',
  strokeWidth: 1,
  'stroke-width': 'strokeWidth',
  strokeOpacity: 1,
  'stroke-opacity': 'strokeOpacity',
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  'text-anchor': 'textAnchor',
  textDecoration: 1,
  'text-decoration': 'textDecoration',
  textLength: 1,
  textRendering: 1,
  'text-rendering': 'textRendering',
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  'underline-position': 'underlinePosition',
  underlineThickness: 1,
  'underline-thickness': 'underlineThickness',
  unicode: 0,
  unicodeBidi: 1,
  'unicode-bidi': 'unicodeBidi',
  unicodeRange: 1,
  'unicode-range': 'unicodeRange',
  unitsPerEm: 1,
  'units-per-em': 'unitsPerEm',
  unselectable: 0,
  vAlphabetic: 1,
  'v-alphabetic': 'vAlphabetic',
  values: 0,
  vectorEffect: 1,
  'vector-effect': 'vectorEffect',
  version: 0,
  vertAdvY: 1,
  'vert-adv-y': 'vertAdvY',
  vertOriginX: 1,
  'vert-origin-x': 'vertOriginX',
  vertOriginY: 1,
  'vert-origin-y': 'vertOriginY',
  vHanging: 1,
  'v-hanging': 'vHanging',
  vIdeographic: 1,
  'v-ideographic': 'vIdeographic',
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  'v-mathematical': 'vMathematical',
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  'word-spacing': 'wordSpacing',
  writingMode: 1,
  'writing-mode': 'writingMode',
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  'x-height': 'xHeight',
  xlinkActuate: 1,
  'xlink:actuate': 'xlinkActuate',
  xlinkArcrole: 1,
  'xlink:arcrole': 'xlinkArcrole',
  xlinkHref: 1,
  'xlink:href': 'xlinkHref',
  xlinkRole: 1,
  'xlink:role': 'xlinkRole',
  xlinkShow: 1,
  'xlink:show': 'xlinkShow',
  xlinkTitle: 1,
  'xlink:title': 'xlinkTitle',
  xlinkType: 1,
  'xlink:type': 'xlinkType',
  xmlBase: 1,
  'xml:base': 'xmlBase',
  xmlLang: 1,
  'xml:lang': 'xmlLang',
  xmlns: 0,
  'xml:space': 'xmlSpace',
  xmlnsXlink: 1,
  'xmlns:xlink': 'xmlnsXlink',
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};


/***/ }),

/***/ "./node_modules/video-react/dist/video-react.css":
/*!*******************************************************!*\
  !*** ./node_modules/video-react/dist/video-react.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_video_react_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./video-react.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/video-react/dist/video-react.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_video_react_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_video_react_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-to-js/cjs/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-js/cjs/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var style_to_object_1 = __importDefault(__webpack_require__(/*! style-to-object */ "./node_modules/style-to-object/index.js"));
var utilities_1 = __webpack_require__(/*! ./utilities */ "./node_modules/style-to-js/cjs/utilities.js");
function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    style_to_object_1["default"](style, function (property, value) {
        if (property && value) {
            output[utilities_1.camelCase(property, options)] = value;
        }
    });
    return output;
}
exports["default"] = StyleToJS;


/***/ }),

/***/ "./node_modules/style-to-js/cjs/utilities.js":
/*!***************************************************!*\
  !*** ./node_modules/style-to-js/cjs/utilities.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var skipCamelCase = function (property) {
    return !property ||
        NO_HYPHEN_REGEX.test(property) ||
        CUSTOM_PROPERTY_REGEX.test(property);
};
var capitalize = function (match, character) {
    return character.toUpperCase();
};
var trimHyphen = function (match, prefix) { return prefix + "-"; };
var camelCase = function (property, options) {
    if (options === void 0) { options = {}; }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (!options.reactCompat) {
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
exports.camelCase = camelCase;


/***/ }),

/***/ "./node_modules/style-to-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parse = __webpack_require__(/*! inline-style-parser */ "./node_modules/inline-style-parser/index.js");

/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== 'string') {
    return output;
  }

  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
}

module.exports = StyleToObject;


/***/ }),

/***/ "./node_modules/video-react/lib/Manager.js":
/*!*************************************************!*\
  !*** ./node_modules/video-react/lib/Manager.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reducers = _interopRequireDefault(__webpack_require__(/*! ./reducers */ "./node_modules/video-react/lib/reducers/index.js"));

var playerActions = _interopRequireWildcard(__webpack_require__(/*! ./actions/player */ "./node_modules/video-react/lib/actions/player.js"));

var videoActions = _interopRequireWildcard(__webpack_require__(/*! ./actions/video */ "./node_modules/video-react/lib/actions/video.js"));

var Manager =
/*#__PURE__*/
function () {
  function Manager(store) {
    (0, _classCallCheck2["default"])(this, Manager);
    this.store = store || (0, _redux.createStore)(_reducers["default"]);
    this.video = null;
    this.rootElement = null;
  }

  (0, _createClass2["default"])(Manager, [{
    key: "getActions",
    value: function getActions() {
      var manager = this;
      var dispatch = this.store.dispatch;
      var actions = (0, _objectSpread2["default"])({}, playerActions, videoActions);

      function bindActionCreator(actionCreator) {
        return function bindAction() {
          // eslint-disable-next-line prefer-rest-params
          var action = actionCreator.apply(manager, arguments);

          if (typeof action !== 'undefined') {
            dispatch(action);
          }
        };
      }

      return Object.keys(actions).filter(function (key) {
        return typeof actions[key] === 'function';
      }).reduce(function (boundActions, key) {
        boundActions[key] = bindActionCreator(actions[key]);
        return boundActions;
      }, {});
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.store.getState();
    } // subscribe state change

  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, getState) {
      if (!getState) {
        getState = this.getState.bind(this);
      }

      var prevState = getState();

      var handleChange = function handleChange() {
        var state = getState();

        if (state === prevState) {
          return;
        }

        var prevStateCopy = prevState;
        prevState = state;
        listener(state, prevStateCopy);
      };

      return this.store.subscribe(handleChange);
    } // subscribe to operation state change

  }, {
    key: "subscribeToOperationStateChange",
    value: function subscribeToOperationStateChange(listener) {
      var _this = this;

      return this.subscribeToStateChange(listener, function () {
        return _this.getState().operation;
      });
    } // subscribe to player state change

  }, {
    key: "subscribeToPlayerStateChange",
    value: function subscribeToPlayerStateChange(listener) {
      var _this2 = this;

      return this.subscribeToStateChange(listener, function () {
        return _this2.getState().player;
      });
    }
  }]);
  return Manager;
}();

exports["default"] = Manager;

/***/ }),

/***/ "./node_modules/video-react/lib/actions/player.js":
/*!********************************************************!*\
  !*** ./node_modules/video-react/lib/actions/player.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.handleFullscreenChange = handleFullscreenChange;
exports.activate = activate;
exports.userActivate = userActivate;
exports.play = play;
exports.pause = pause;
exports.togglePlay = togglePlay;
exports.seek = seek;
exports.forward = forward;
exports.replay = replay;
exports.changeRate = changeRate;
exports.changeVolume = changeVolume;
exports.mute = mute;
exports.toggleFullscreen = toggleFullscreen;
exports.USER_ACTIVATE = exports.PLAYER_ACTIVATE = exports.FULLSCREEN_CHANGE = exports.OPERATE = void 0;

var _fullscreen = _interopRequireDefault(__webpack_require__(/*! ../utils/fullscreen */ "./node_modules/video-react/lib/utils/fullscreen.js"));

var OPERATE = 'video-react/OPERATE';
exports.OPERATE = OPERATE;
var FULLSCREEN_CHANGE = 'video-react/FULLSCREEN_CHANGE';
exports.FULLSCREEN_CHANGE = FULLSCREEN_CHANGE;
var PLAYER_ACTIVATE = 'video-react/PLAYER_ACTIVATE';
exports.PLAYER_ACTIVATE = PLAYER_ACTIVATE;
var USER_ACTIVATE = 'video-react/USER_ACTIVATE';
exports.USER_ACTIVATE = USER_ACTIVATE;

function handleFullscreenChange(isFullscreen) {
  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen: isFullscreen
  };
}

function activate(activity) {
  return {
    type: PLAYER_ACTIVATE,
    activity: activity
  };
}

function userActivate(activity) {
  return {
    type: USER_ACTIVATE,
    activity: activity
  };
}

function play() {
  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    action: 'play',
    source: ''
  };
  this.video.play();
  return {
    type: OPERATE,
    operation: operation
  };
}

function pause() {
  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    action: 'pause',
    source: ''
  };
  this.video.pause();
  return {
    type: OPERATE,
    operation: operation
  };
}

function togglePlay() {
  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    action: 'toggle-play',
    source: ''
  };
  this.video.togglePlay();
  return {
    type: OPERATE,
    operation: operation
  };
} // seek video by time


function seek(time) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'seek',
    source: ''
  };
  this.video.seek(time);
  return {
    type: OPERATE,
    operation: operation
  };
} // jump forward x seconds


function forward(seconds) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: "forward-".concat(seconds),
    source: ''
  };
  this.video.forward(seconds);
  return {
    type: OPERATE,
    operation: operation
  };
} // jump back x seconds


function replay(seconds) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: "replay-".concat(seconds),
    source: ''
  };
  this.video.replay(seconds);
  return {
    type: OPERATE,
    operation: operation
  };
}

function changeRate(rate) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'change-rate',
    source: ''
  };
  this.video.playbackRate = rate;
  return {
    type: OPERATE,
    operation: operation
  };
}

function changeVolume(volume) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'change-volume',
    source: ''
  };
  var v = volume;

  if (volume < 0) {
    v = 0;
  }

  if (volume > 1) {
    v = 1;
  }

  this.video.volume = v;
  return {
    type: OPERATE,
    operation: operation
  };
}

function mute(muted) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: muted ? 'muted' : 'unmuted',
    source: ''
  };
  this.video.muted = muted;
  return {
    type: OPERATE,
    operation: operation
  };
}

function toggleFullscreen(player) {
  if (_fullscreen["default"].enabled) {
    if (_fullscreen["default"].isFullscreen) {
      _fullscreen["default"].exit();
    } else {
      _fullscreen["default"].request(this.rootElement);
    }

    return {
      type: OPERATE,
      operation: {
        action: 'toggle-fullscreen',
        source: ''
      }
    };
  }

  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen: !player.isFullscreen
  };
}

/***/ }),

/***/ "./node_modules/video-react/lib/actions/video.js":
/*!*******************************************************!*\
  !*** ./node_modules/video-react/lib/actions/video.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.handleLoadStart = handleLoadStart;
exports.handleCanPlay = handleCanPlay;
exports.handleWaiting = handleWaiting;
exports.handleCanPlayThrough = handleCanPlayThrough;
exports.handlePlaying = handlePlaying;
exports.handlePlay = handlePlay;
exports.handlePause = handlePause;
exports.handleEnd = handleEnd;
exports.handleSeeking = handleSeeking;
exports.handleSeeked = handleSeeked;
exports.handleDurationChange = handleDurationChange;
exports.handleTimeUpdate = handleTimeUpdate;
exports.handleVolumeChange = handleVolumeChange;
exports.handleProgressChange = handleProgressChange;
exports.handleRateChange = handleRateChange;
exports.handleSuspend = handleSuspend;
exports.handleAbort = handleAbort;
exports.handleEmptied = handleEmptied;
exports.handleStalled = handleStalled;
exports.handleLoadedMetaData = handleLoadedMetaData;
exports.handleLoadedData = handleLoadedData;
exports.handleResize = handleResize;
exports.handleError = handleError;
exports.handleSeekingTime = handleSeekingTime;
exports.handleEndSeeking = handleEndSeeking;
exports.activateTextTrack = activateTextTrack;
exports.ACTIVATE_TEXT_TRACK = exports.ERROR = exports.RESIZE = exports.LOADED_DATA = exports.LOADED_META_DATA = exports.STALLED = exports.EMPTIED = exports.ABORT = exports.SUSPEND = exports.RATE_CHANGE = exports.PROGRESS_CHANGE = exports.VOLUME_CHANGE = exports.TIME_UPDATE = exports.DURATION_CHANGE = exports.END_SEEKING = exports.SEEKING_TIME = exports.SEEKED = exports.SEEKING = exports.END = exports.PAUSE = exports.PLAY = exports.PLAYING = exports.CAN_PLAY_THROUGH = exports.WAITING = exports.CAN_PLAY = exports.LOAD_START = void 0;
var LOAD_START = 'video-react/LOAD_START';
exports.LOAD_START = LOAD_START;
var CAN_PLAY = 'video-react/CAN_PLAY';
exports.CAN_PLAY = CAN_PLAY;
var WAITING = 'video-react/WAITING';
exports.WAITING = WAITING;
var CAN_PLAY_THROUGH = 'video-react/CAN_PLAY_THROUGH';
exports.CAN_PLAY_THROUGH = CAN_PLAY_THROUGH;
var PLAYING = 'video-react/PLAYING';
exports.PLAYING = PLAYING;
var PLAY = 'video-react/PLAY';
exports.PLAY = PLAY;
var PAUSE = 'video-react/PAUSE';
exports.PAUSE = PAUSE;
var END = 'video-react/END';
exports.END = END;
var SEEKING = 'video-react/SEEKING';
exports.SEEKING = SEEKING;
var SEEKED = 'video-react/SEEKED';
exports.SEEKED = SEEKED;
var SEEKING_TIME = 'video-react/SEEKING_TIME';
exports.SEEKING_TIME = SEEKING_TIME;
var END_SEEKING = 'video-react/END_SEEKING';
exports.END_SEEKING = END_SEEKING;
var DURATION_CHANGE = 'video-react/DURATION_CHANGE';
exports.DURATION_CHANGE = DURATION_CHANGE;
var TIME_UPDATE = 'video-react/TIME_UPDATE';
exports.TIME_UPDATE = TIME_UPDATE;
var VOLUME_CHANGE = 'video-react/VOLUME_CHANGE';
exports.VOLUME_CHANGE = VOLUME_CHANGE;
var PROGRESS_CHANGE = 'video-react/PROGRESS_CHANGE';
exports.PROGRESS_CHANGE = PROGRESS_CHANGE;
var RATE_CHANGE = 'video-react/RATE_CHANGE';
exports.RATE_CHANGE = RATE_CHANGE;
var SUSPEND = 'video-react/SUSPEND';
exports.SUSPEND = SUSPEND;
var ABORT = 'video-react/ABORT';
exports.ABORT = ABORT;
var EMPTIED = 'video-react/EMPTIED';
exports.EMPTIED = EMPTIED;
var STALLED = 'video-react/STALLED';
exports.STALLED = STALLED;
var LOADED_META_DATA = 'video-react/LOADED_META_DATA';
exports.LOADED_META_DATA = LOADED_META_DATA;
var LOADED_DATA = 'video-react/LOADED_DATA';
exports.LOADED_DATA = LOADED_DATA;
var RESIZE = 'video-react/RESIZE';
exports.RESIZE = RESIZE;
var ERROR = 'video-react/ERROR';
exports.ERROR = ERROR;
var ACTIVATE_TEXT_TRACK = 'video-react/ACTIVATE_TEXT_TRACK';
exports.ACTIVATE_TEXT_TRACK = ACTIVATE_TEXT_TRACK;

function handleLoadStart(videoProps) {
  return {
    type: LOAD_START,
    videoProps: videoProps
  };
}

function handleCanPlay(videoProps) {
  return {
    type: CAN_PLAY,
    videoProps: videoProps
  };
}

function handleWaiting(videoProps) {
  return {
    type: WAITING,
    videoProps: videoProps
  };
}

function handleCanPlayThrough(videoProps) {
  return {
    type: CAN_PLAY_THROUGH,
    videoProps: videoProps
  };
}

function handlePlaying(videoProps) {
  return {
    type: PLAYING,
    videoProps: videoProps
  };
}

function handlePlay(videoProps) {
  return {
    type: PLAY,
    videoProps: videoProps
  };
}

function handlePause(videoProps) {
  return {
    type: PAUSE,
    videoProps: videoProps
  };
}

function handleEnd(videoProps) {
  return {
    type: END,
    videoProps: videoProps
  };
}

function handleSeeking(videoProps) {
  return {
    type: SEEKING,
    videoProps: videoProps
  };
}

function handleSeeked(videoProps) {
  return {
    type: SEEKED,
    videoProps: videoProps
  };
}

function handleDurationChange(videoProps) {
  return {
    type: DURATION_CHANGE,
    videoProps: videoProps
  };
}

function handleTimeUpdate(videoProps) {
  return {
    type: TIME_UPDATE,
    videoProps: videoProps
  };
}

function handleVolumeChange(videoProps) {
  return {
    type: VOLUME_CHANGE,
    videoProps: videoProps
  };
}

function handleProgressChange(videoProps) {
  return {
    type: PROGRESS_CHANGE,
    videoProps: videoProps
  };
}

function handleRateChange(videoProps) {
  return {
    type: RATE_CHANGE,
    videoProps: videoProps
  };
}

function handleSuspend(videoProps) {
  return {
    type: SUSPEND,
    videoProps: videoProps
  };
}

function handleAbort(videoProps) {
  return {
    type: ABORT,
    videoProps: videoProps
  };
}

function handleEmptied(videoProps) {
  return {
    type: EMPTIED,
    videoProps: videoProps
  };
}

function handleStalled(videoProps) {
  return {
    type: STALLED,
    videoProps: videoProps
  };
}

function handleLoadedMetaData(videoProps) {
  return {
    type: LOADED_META_DATA,
    videoProps: videoProps
  };
}

function handleLoadedData(videoProps) {
  return {
    type: LOADED_DATA,
    videoProps: videoProps
  };
}

function handleResize(videoProps) {
  return {
    type: RESIZE,
    videoProps: videoProps
  };
}

function handleError(videoProps) {
  return {
    type: ERROR,
    videoProps: videoProps
  };
}

function handleSeekingTime(time) {
  return {
    type: SEEKING_TIME,
    time: time
  };
}

function handleEndSeeking(time) {
  return {
    type: END_SEEKING,
    time: time
  };
}

function activateTextTrack(textTrack) {
  return {
    type: ACTIVATE_TEXT_TRACK,
    textTrack: textTrack
  };
}

/***/ }),

/***/ "./node_modules/video-react/lib/components/Bezel.js":
/*!**********************************************************!*\
  !*** ./node_modules/video-react/lib/components/Bezel.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var propTypes = {
  manager: _propTypes["default"].object,
  className: _propTypes["default"].string
};

var Bezel =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Bezel, _Component);

  function Bezel(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Bezel);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Bezel).call(this, props, context));
    _this.timer = null;
    props.manager.subscribeToOperationStateChange(_this.handleStateChange.bind((0, _assertThisInitialized2["default"])(_this)));
    _this.state = {
      hidden: true,
      operation: {}
    };
    return _this;
  }

  (0, _createClass2["default"])(Bezel, [{
    key: "handleStateChange",
    value: function handleStateChange(state, prevState) {
      var _this2 = this;

      if (state.count !== prevState.count && state.operation.source === 'shortcut') {
        if (this.timer) {
          // previous animation is not finished
          clearTimeout(this.timer); // cancel it

          this.timer = null;
        } // show it
        // update operation


        this.setState({
          hidden: false,
          count: state.count,
          operation: state.operation
        }); // hide it after 0.5s

        this.timer = setTimeout(function () {
          _this2.setState({
            hidden: true
          });

          _this2.timer = null;
        }, 500);
      }
    }
  }, {
    key: "render",
    value: function render() {
      // only displays for shortcut so far
      if (this.state.operation.source !== 'shortcut') {
        return null;
      }

      var style = this.state.hidden ? {
        display: 'none'
      } : null;
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])({
          'video-react-bezel': true,
          'video-react-bezel-animation': this.state.count % 2 === 0,
          'video-react-bezel-animation-alt': this.state.count % 2 === 1
        }, this.props.className),
        style: style,
        role: "status",
        "aria-label": this.state.operation.action
      }, _react["default"].createElement("div", {
        className: (0, _classnames["default"])('video-react-bezel-icon', "video-react-bezel-icon-".concat(this.state.operation.action))
      }));
    }
  }]);
  return Bezel;
}(_react.Component);

exports["default"] = Bezel;
Bezel.propTypes = propTypes;
Bezel.displayName = 'Bezel';

/***/ }),

/***/ "./node_modules/video-react/lib/components/BigPlayButton.js":
/*!******************************************************************!*\
  !*** ./node_modules/video-react/lib/components/BigPlayButton.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var propTypes = {
  actions: _propTypes["default"].object,
  player: _propTypes["default"].object,
  position: _propTypes["default"].string,
  className: _propTypes["default"].string
};
var defaultProps = {
  position: 'left'
};

var BigPlayButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(BigPlayButton, _Component);

  function BigPlayButton(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, BigPlayButton);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(BigPlayButton).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(BigPlayButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "handleClick",
    value: function handleClick() {
      var actions = this.props.actions;
      actions.play();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          player = _this$props.player,
          position = _this$props.position;
      return _react["default"].createElement("button", {
        className: (0, _classnames["default"])('video-react-button', 'video-react-big-play-button', "video-react-big-play-button-".concat(position), this.props.className, {
          'big-play-button-hide': player.hasStarted || !player.currentSrc
        }),
        type: "button",
        "aria-live": "polite",
        tabIndex: "0",
        onClick: this.handleClick
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Play Video"));
    }
  }]);
  return BigPlayButton;
}(_react.Component);

exports["default"] = BigPlayButton;
BigPlayButton.propTypes = propTypes;
BigPlayButton.defaultProps = defaultProps;
BigPlayButton.displayName = 'BigPlayButton';

/***/ }),

/***/ "./node_modules/video-react/lib/components/ClickableComponent.js":
/*!***********************************************************************!*\
  !*** ./node_modules/video-react/lib/components/ClickableComponent.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var propTypes = {
  tagName: _propTypes["default"].string,
  onClick: _propTypes["default"].func.isRequired,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  className: _propTypes["default"].string
};
var defaultProps = {
  tagName: 'div'
};

var ClickableComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ClickableComponent, _Component);

  function ClickableComponent(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, ClickableComponent);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ClickableComponent).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeypress = _this.handleKeypress.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ClickableComponent, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount(e) {
      this.handleBlur(e);
    }
  }, {
    key: "handleKeypress",
    value: function handleKeypress(event) {
      // Support Space (32) or Enter (13) key operation to fire a click event
      if (event.which === 32 || event.which === 13) {
        event.preventDefault();
        this.handleClick(event);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var onClick = this.props.onClick;
      onClick(event);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      document.addEventListener('keydown', this.handleKeypress);

      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(e) {
      document.removeEventListener('keydown', this.handleKeypress);

      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var Tag = this.props.tagName;
      var props = (0, _objectSpread2["default"])({}, this.props);
      delete props.tagName;
      delete props.className;
      return _react["default"].createElement(Tag, (0, _extends2["default"])({
        className: (0, _classnames["default"])(this.props.className),
        role: "button",
        tabIndex: "0",
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }, props));
    }
  }]);
  return ClickableComponent;
}(_react.Component);

exports["default"] = ClickableComponent;
ClickableComponent.propTypes = propTypes;
ClickableComponent.defaultProps = defaultProps;
ClickableComponent.displayName = 'ClickableComponent';

/***/ }),

/***/ "./node_modules/video-react/lib/components/LoadingSpinner.js":
/*!*******************************************************************!*\
  !*** ./node_modules/video-react/lib/components/LoadingSpinner.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = LoadingSpinner;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var propTypes = {
  player: _propTypes["default"].object,
  className: _propTypes["default"].string
};

function LoadingSpinner(_ref) {
  var player = _ref.player,
      className = _ref.className;

  if (player.error) {
    return null;
  }

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('video-react-loading-spinner', className)
  });
}

LoadingSpinner.propTypes = propTypes;
LoadingSpinner.displayName = 'LoadingSpinner';

/***/ }),

/***/ "./node_modules/video-react/lib/components/Player.js":
/*!***********************************************************!*\
  !*** ./node_modules/video-react/lib/components/Player.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Manager = _interopRequireDefault(__webpack_require__(/*! ../Manager */ "./node_modules/video-react/lib/Manager.js"));

var _BigPlayButton = _interopRequireDefault(__webpack_require__(/*! ./BigPlayButton */ "./node_modules/video-react/lib/components/BigPlayButton.js"));

var _LoadingSpinner = _interopRequireDefault(__webpack_require__(/*! ./LoadingSpinner */ "./node_modules/video-react/lib/components/LoadingSpinner.js"));

var _PosterImage = _interopRequireDefault(__webpack_require__(/*! ./PosterImage */ "./node_modules/video-react/lib/components/PosterImage.js"));

var _Video = _interopRequireDefault(__webpack_require__(/*! ./Video */ "./node_modules/video-react/lib/components/Video.js"));

var _Bezel = _interopRequireDefault(__webpack_require__(/*! ./Bezel */ "./node_modules/video-react/lib/components/Bezel.js"));

var _Shortcut = _interopRequireDefault(__webpack_require__(/*! ./Shortcut */ "./node_modules/video-react/lib/components/Shortcut.js"));

var _ControlBar = _interopRequireDefault(__webpack_require__(/*! ./control-bar/ControlBar */ "./node_modules/video-react/lib/components/control-bar/ControlBar.js"));

var browser = _interopRequireWildcard(__webpack_require__(/*! ../utils/browser */ "./node_modules/video-react/lib/utils/browser.js"));

var _dom = __webpack_require__(/*! ../utils/dom */ "./node_modules/video-react/lib/utils/dom.js");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/video-react/lib/utils/index.js");

var _fullscreen = _interopRequireDefault(__webpack_require__(/*! ../utils/fullscreen */ "./node_modules/video-react/lib/utils/fullscreen.js"));

var propTypes = {
  children: _propTypes["default"].any,
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  fluid: _propTypes["default"].bool,
  muted: _propTypes["default"].bool,
  playsInline: _propTypes["default"].bool,
  aspectRatio: _propTypes["default"].string,
  className: _propTypes["default"].string,
  videoId: _propTypes["default"].string,
  startTime: _propTypes["default"].number,
  loop: _propTypes["default"].bool,
  autoPlay: _propTypes["default"].bool,
  src: _propTypes["default"].string,
  poster: _propTypes["default"].string,
  preload: _propTypes["default"].oneOf(['auto', 'metadata', 'none']),
  onLoadStart: _propTypes["default"].func,
  onWaiting: _propTypes["default"].func,
  onCanPlay: _propTypes["default"].func,
  onCanPlayThrough: _propTypes["default"].func,
  onPlaying: _propTypes["default"].func,
  onEnded: _propTypes["default"].func,
  onSeeking: _propTypes["default"].func,
  onSeeked: _propTypes["default"].func,
  onPlay: _propTypes["default"].func,
  onPause: _propTypes["default"].func,
  onProgress: _propTypes["default"].func,
  onDurationChange: _propTypes["default"].func,
  onError: _propTypes["default"].func,
  onSuspend: _propTypes["default"].func,
  onAbort: _propTypes["default"].func,
  onEmptied: _propTypes["default"].func,
  onStalled: _propTypes["default"].func,
  onLoadedMetadata: _propTypes["default"].func,
  onLoadedData: _propTypes["default"].func,
  onTimeUpdate: _propTypes["default"].func,
  onRateChange: _propTypes["default"].func,
  onVolumeChange: _propTypes["default"].func,
  store: _propTypes["default"].object
};
var defaultProps = {
  fluid: true,
  muted: false,
  playsInline: false,
  preload: 'auto',
  aspectRatio: 'auto'
};

var Player =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Player, _Component);

  function Player(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Player);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Player).call(this, props));
    _this.controlsHideTimer = null;
    _this.video = null; // the Video component

    _this.manager = new _Manager["default"](props.store);
    _this.actions = _this.manager.getActions();

    _this.manager.subscribeToPlayerStateChange(_this.handleStateChange.bind((0, _assertThisInitialized2["default"])(_this)));

    _this.getStyle = _this.getStyle.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleResize = _this.handleResize.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getChildren = _this.getChildren.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseMove = (0, _utils.throttle)(_this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this)), 250);
    _this.handleMouseDown = _this.handleMouseDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.startControlsTimer = _this.startControlsTimer.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFullScreenChange = _this.handleFullScreenChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);

      _fullscreen["default"].addEventListener(this.handleFullScreenChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Remove event listener
      window.removeEventListener('resize', this.handleResize);

      _fullscreen["default"].removeEventListener(this.handleFullScreenChange);

      if (this.controlsHideTimer) {
        window.clearTimeout(this.controlsHideTimer);
      }
    }
  }, {
    key: "getDefaultChildren",
    value: function getDefaultChildren(originalChildren) {
      var _this2 = this;

      return [_react["default"].createElement(_Video["default"], {
        ref: function ref(c) {
          _this2.video = c;
          _this2.manager.video = _this2.video;
        },
        key: "video",
        order: 0.0
      }, originalChildren), _react["default"].createElement(_PosterImage["default"], {
        key: "poster-image",
        order: 1.0
      }), _react["default"].createElement(_LoadingSpinner["default"], {
        key: "loading-spinner",
        order: 2.0
      }), _react["default"].createElement(_Bezel["default"], {
        key: "bezel",
        order: 3.0
      }), _react["default"].createElement(_BigPlayButton["default"], {
        key: "big-play-button",
        order: 4.0
      }), _react["default"].createElement(_ControlBar["default"], {
        key: "control-bar",
        order: 5.0
      }), _react["default"].createElement(_Shortcut["default"], {
        key: "shortcut",
        order: 99.0
      })];
    }
  }, {
    key: "getChildren",
    value: function getChildren(props) {
      var _ = props.className,
          originalChildren = props.children,
          propsWithoutChildren = (0, _objectWithoutProperties2["default"])(props, ["className", "children"]);

      var children = _react["default"].Children.toArray(this.props.children).filter(function (e) {
        return !(0, _utils.isVideoChild)(e);
      });

      var defaultChildren = this.getDefaultChildren(originalChildren);
      return (0, _utils.mergeAndSortChildren)(defaultChildren, children, propsWithoutChildren);
    }
  }, {
    key: "setWidthOrHeight",
    value: function setWidthOrHeight(style, name, value) {
      var styleVal;

      if (typeof value === 'string') {
        if (value === 'auto') {
          styleVal = 'auto';
        } else if (value.match(/\d+%/)) {
          styleVal = value;
        }
      } else if (typeof value === 'number') {
        styleVal = "".concat(value, "px");
      }

      Object.assign(style, (0, _defineProperty2["default"])({}, name, styleVal));
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var _this$props = this.props,
          fluid = _this$props.fluid,
          propsAspectRatio = _this$props.aspectRatio,
          propsHeight = _this$props.height,
          propsWidth = _this$props.width;

      var _this$manager$getStat = this.manager.getState(),
          player = _this$manager$getStat.player;

      var style = {};
      var width;
      var height;
      var aspectRatio; // The aspect ratio is either used directly or to calculate width and height.

      if (propsAspectRatio !== undefined && propsAspectRatio !== 'auto') {
        // Use any aspectRatio that's been specifically set
        aspectRatio = propsAspectRatio;
      } else if (player.videoWidth) {
        // Otherwise try to get the aspect ratio from the video metadata
        aspectRatio = "".concat(player.videoWidth, ":").concat(player.videoHeight);
      } else {
        // Or use a default. The video element's is 2:1, but 16:9 is more common.
        aspectRatio = '16:9';
      } // Get the ratio as a decimal we can use to calculate dimensions


      var ratioParts = aspectRatio.split(':');
      var ratioMultiplier = ratioParts[1] / ratioParts[0];

      if (propsWidth !== undefined) {
        // Use any width that's been specifically set
        width = propsWidth;
      } else if (propsHeight !== undefined) {
        // Or calulate the width from the aspect ratio if a height has been set
        width = propsHeight / ratioMultiplier;
      } else {
        // Or use the video's metadata, or use the video el's default of 300
        width = player.videoWidth || 400;
      }

      if (propsHeight !== undefined) {
        // Use any height that's been specifically set
        height = propsHeight;
      } else {
        // Otherwise calculate the height from the ratio and the width
        height = width * ratioMultiplier;
      }

      if (fluid) {
        style.paddingTop = "".concat(ratioMultiplier * 100, "%");
      } else {
        // If Width contains "auto", set "auto" in style
        this.setWidthOrHeight(style, 'width', width);
        this.setWidthOrHeight(style, 'height', height);
      }

      return style;
    } // get redux state
    // { player, operation }

  }, {
    key: "getState",
    value: function getState() {
      return this.manager.getState();
    } // get playback rate

  }, {
    key: "play",
    // play the video
    value: function play() {
      this.video.play();
    } // pause the video

  }, {
    key: "pause",
    value: function pause() {
      this.video.pause();
    } // Change the video source and re-load the video:

  }, {
    key: "load",
    value: function load() {
      this.video.load();
    } // Add a new text track to the video

  }, {
    key: "addTextTrack",
    value: function addTextTrack() {
      var _this$video;

      (_this$video = this.video).addTextTrack.apply(_this$video, arguments);
    } // Check if your browser can play different types of video:

  }, {
    key: "canPlayType",
    value: function canPlayType() {
      var _this$video2;

      (_this$video2 = this.video).canPlayType.apply(_this$video2, arguments);
    } // seek video by time

  }, {
    key: "seek",
    value: function seek(time) {
      this.video.seek(time);
    } // jump forward x seconds

  }, {
    key: "forward",
    value: function forward(seconds) {
      this.video.forward(seconds);
    } // jump back x seconds

  }, {
    key: "replay",
    value: function replay(seconds) {
      this.video.replay(seconds);
    } // enter or exist full screen

  }, {
    key: "toggleFullscreen",
    value: function toggleFullscreen() {
      this.video.toggleFullscreen();
    } // subscribe to player state change

  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener) {
      return this.manager.subscribeToPlayerStateChange(listener);
    } // player resize

  }, {
    key: "handleResize",
    value: function handleResize() {}
  }, {
    key: "handleFullScreenChange",
    value: function handleFullScreenChange(event) {
      if (event.target === this.manager.rootElement) {
        this.actions.handleFullscreenChange(_fullscreen["default"].isFullscreen);
      }
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown() {
      this.startControlsTimer();
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove() {
      this.startControlsTimer();
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown() {
      this.startControlsTimer();
    }
  }, {
    key: "startControlsTimer",
    value: function startControlsTimer() {
      var _this3 = this;

      var controlBarActiveTime = 3000;

      _react["default"].Children.forEach(this.props.children, function (element) {
        if (!_react["default"].isValidElement(element) || element.type !== _ControlBar["default"]) {
          return;
        }

        var autoHideTime = element.props.autoHideTime;

        if (typeof autoHideTime === 'number') {
          controlBarActiveTime = autoHideTime;
        }
      });

      this.actions.userActivate(true);
      clearTimeout(this.controlsHideTimer);
      this.controlsHideTimer = setTimeout(function () {
        _this3.actions.userActivate(false);
      }, controlBarActiveTime);
    }
  }, {
    key: "handleStateChange",
    value: function handleStateChange(state, prevState) {
      if (state.isFullscreen !== prevState.isFullscreen) {
        this.handleResize(); // focus root when switching fullscreen mode to avoid confusion #276

        (0, _dom.focusNode)(this.manager.rootElement);
      }

      this.forceUpdate(); // re-render
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      this.actions.activate(true);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.actions.activate(false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var fluid = this.props.fluid;

      var _this$manager$getStat2 = this.manager.getState(),
          player = _this$manager$getStat2.player;

      var paused = player.paused,
          hasStarted = player.hasStarted,
          waiting = player.waiting,
          seeking = player.seeking,
          isFullscreen = player.isFullscreen,
          userActivity = player.userActivity;
      var props = (0, _objectSpread2["default"])({}, this.props, {
        player: player,
        actions: this.actions,
        manager: this.manager,
        store: this.manager.store,
        video: this.video ? this.video.video : null
      });
      var children = this.getChildren(props);
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])({
          'video-react-controls-enabled': true,
          'video-react-has-started': hasStarted,
          'video-react-paused': paused,
          'video-react-playing': !paused,
          'video-react-waiting': waiting,
          'video-react-seeking': seeking,
          'video-react-fluid': fluid,
          'video-react-fullscreen': isFullscreen,
          'video-react-user-inactive': !userActivity,
          'video-react-user-active': userActivity,
          'video-react-workinghover': !browser.IS_IOS
        }, 'video-react', this.props.className),
        style: this.getStyle(),
        ref: function ref(c) {
          _this4.manager.rootElement = c;
        },
        role: "region",
        onTouchStart: this.handleMouseDown,
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleMouseMove,
        onMouseMove: this.handleMouseMove,
        onKeyDown: this.handleKeyDown,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        tabIndex: "-1"
      }, children);
    }
  }, {
    key: "playbackRate",
    get: function get() {
      return this.video.playbackRate;
    } // set playback rate
    // speed of video
    ,
    set: function set(rate) {
      this.video.playbackRate = rate;
    }
  }, {
    key: "muted",
    get: function get() {
      return this.video.muted;
    },
    set: function set(val) {
      this.video.muted = val;
    }
  }, {
    key: "volume",
    get: function get() {
      return this.video.volume;
    },
    set: function set(val) {
      this.video.volume = val;
    } // video width

  }, {
    key: "videoWidth",
    get: function get() {
      return this.video.videoWidth;
    } // video height

  }, {
    key: "videoHeight",
    get: function get() {
      return this.video.videoHeight;
    }
  }]);
  return Player;
}(_react.Component);

exports["default"] = Player;
Player.contextTypes = {
  store: _propTypes["default"].object
};
Player.propTypes = propTypes;
Player.defaultProps = defaultProps;
Player.displayName = 'Player';

/***/ }),

/***/ "./node_modules/video-react/lib/components/PosterImage.js":
/*!****************************************************************!*\
  !*** ./node_modules/video-react/lib/components/PosterImage.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var propTypes = {
  poster: _propTypes["default"].string,
  player: _propTypes["default"].object,
  actions: _propTypes["default"].object,
  className: _propTypes["default"].string
};

function PosterImage(_ref) {
  var poster = _ref.poster,
      player = _ref.player,
      actions = _ref.actions,
      className = _ref.className;

  if (!poster || player.hasStarted) {
    return null;
  }

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('video-react-poster', className),
    style: {
      backgroundImage: "url(\"".concat(poster, "\")")
    },
    onClick: function onClick() {
      if (player.paused) {
        actions.play();
      }
    }
  });
}

PosterImage.propTypes = propTypes;
PosterImage.displayName = 'PosterImage';
var _default = PosterImage;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/video-react/lib/components/Shortcut.js":
/*!*************************************************************!*\
  !*** ./node_modules/video-react/lib/components/Shortcut.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dom = __webpack_require__(/*! ../utils/dom */ "./node_modules/video-react/lib/utils/dom.js");

var propTypes = {
  clickable: _propTypes["default"].bool,
  dblclickable: _propTypes["default"].bool,
  manager: _propTypes["default"].object,
  actions: _propTypes["default"].object,
  player: _propTypes["default"].object,
  shortcuts: _propTypes["default"].array
};
var defaultProps = {
  clickable: true,
  dblclickable: true
};

var Shortcut =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Shortcut, _Component);

  function Shortcut(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Shortcut);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Shortcut).call(this, props, context));
    _this.defaultShortcuts = [{
      keyCode: 32,
      // spacebar
      handle: _this.togglePlay
    }, {
      keyCode: 75,
      // k
      handle: _this.togglePlay
    }, {
      keyCode: 70,
      // f
      handle: _this.toggleFullscreen
    }, {
      keyCode: 37,
      // Left arrow
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }

        actions.replay(5, {
          action: 'replay-5',
          source: 'shortcut'
        }); // Go back 5 seconds
      }
    }, {
      keyCode: 74,
      // j
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }

        actions.replay(10, {
          action: 'replay-10',
          source: 'shortcut'
        }); // Go back 10 seconds
      }
    }, {
      keyCode: 39,
      // Right arrow
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }

        actions.forward(5, {
          action: 'forward-5',
          source: 'shortcut'
        }); // Go forward 5 seconds
      }
    }, {
      keyCode: 76,
      // l
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }

        actions.forward(10, {
          action: 'forward-10',
          source: 'shortcut'
        }); // Go forward 10 seconds
      }
    }, {
      keyCode: 36,
      // Home
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }

        actions.seek(0); // Go to beginning of video
      }
    }, {
      keyCode: 35,
      // End
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        } // Go to end of video


        actions.seek(player.duration);
      }
    }, {
      keyCode: 38,
      // Up arrow
      handle: function handle(player, actions) {
        // Increase volume 5%
        var v = player.volume + 0.05;

        if (v > 1) {
          v = 1;
        }

        actions.changeVolume(v, {
          action: 'volume-up',
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 40,
      // Down arrow
      handle: function handle(player, actions) {
        // Decrease volume 5%
        var v = player.volume - 0.05;

        if (v < 0) {
          v = 0;
        }

        var action = v > 0 ? 'volume-down' : 'volume-off';
        actions.changeVolume(v, {
          action: action,
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 190,
      // Shift + >
      shift: true,
      handle: function handle(player, actions) {
        // Increase speed
        var playbackRate = player.playbackRate;

        if (playbackRate >= 1.5) {
          playbackRate = 2;
        } else if (playbackRate >= 1.25) {
          playbackRate = 1.5;
        } else if (playbackRate >= 1.0) {
          playbackRate = 1.25;
        } else if (playbackRate >= 0.5) {
          playbackRate = 1.0;
        } else if (playbackRate >= 0.25) {
          playbackRate = 0.5;
        } else if (playbackRate >= 0) {
          playbackRate = 0.25;
        }

        actions.changeRate(playbackRate, {
          action: 'fast-forward',
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 188,
      // Shift + <
      shift: true,
      handle: function handle(player, actions) {
        // Decrease speed
        var playbackRate = player.playbackRate;

        if (playbackRate <= 0.5) {
          playbackRate = 0.25;
        } else if (playbackRate <= 1.0) {
          playbackRate = 0.5;
        } else if (playbackRate <= 1.25) {
          playbackRate = 1.0;
        } else if (playbackRate <= 1.5) {
          playbackRate = 1.25;
        } else if (playbackRate <= 2) {
          playbackRate = 1.5;
        }

        actions.changeRate(playbackRate, {
          action: 'fast-rewind',
          source: 'shortcut'
        });
      }
    }];
    _this.shortcuts = (0, _toConsumableArray2["default"])(_this.defaultShortcuts);
    _this.mergeShortcuts = _this.mergeShortcuts.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleDoubleClick = _this.handleDoubleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Shortcut, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mergeShortcuts();
      document.addEventListener('keydown', this.handleKeyPress);
      document.addEventListener('click', this.handleClick);
      document.addEventListener('dblclick', this.handleDoubleClick);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.shortcuts !== this.props.shortcuts) {
        this.mergeShortcuts();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
      document.removeEventListener('click', this.handleClick);
      document.removeEventListener('dblclick', this.handleDoubleClick);
    } // merge the shortcuts from props

  }, {
    key: "mergeShortcuts",
    value: function mergeShortcuts() {
      var getShortcutKey = function getShortcutKey(_ref) {
        var _ref$keyCode = _ref.keyCode,
            keyCode = _ref$keyCode === void 0 ? 0 : _ref$keyCode,
            _ref$ctrl = _ref.ctrl,
            ctrl = _ref$ctrl === void 0 ? false : _ref$ctrl,
            _ref$shift = _ref.shift,
            shift = _ref$shift === void 0 ? false : _ref$shift,
            _ref$alt = _ref.alt,
            alt = _ref$alt === void 0 ? false : _ref$alt;
        return "".concat(keyCode, ":").concat(ctrl, ":").concat(shift, ":").concat(alt);
      };

      var defaultShortcuts = this.defaultShortcuts.reduce(function (shortcuts, shortcut) {
        return Object.assign(shortcuts, (0, _defineProperty2["default"])({}, getShortcutKey(shortcut), shortcut));
      }, {});
      var mergedShortcuts = (this.props.shortcuts || []).reduce(function (shortcuts, shortcut) {
        var keyCode = shortcut.keyCode,
            handle = shortcut.handle;

        if (keyCode && typeof handle === 'function') {
          return Object.assign(shortcuts, (0, _defineProperty2["default"])({}, getShortcutKey(shortcut), shortcut));
        }

        return shortcuts;
      }, defaultShortcuts);

      var gradeShortcut = function gradeShortcut(s) {
        var score = 0;
        var ps = ['ctrl', 'shift', 'alt'];
        ps.forEach(function (key) {
          if (s[key]) {
            score++;
          }
        });
        return score;
      };

      this.shortcuts = Object.keys(mergedShortcuts).map(function (key) {
        return mergedShortcuts[key];
      }).sort(function (a, b) {
        return gradeShortcut(b) - gradeShortcut(a);
      });
    }
  }, {
    key: "togglePlay",
    value: function togglePlay(player, actions) {
      if (player.paused) {
        actions.play({
          action: 'play',
          source: 'shortcut'
        });
      } else {
        actions.pause({
          action: 'pause',
          source: 'shortcut'
        });
      }
    }
  }, {
    key: "toggleFullscreen",
    value: function toggleFullscreen(player, actions) {
      actions.toggleFullscreen(player);
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      var _this$props = this.props,
          player = _this$props.player,
          actions = _this$props.actions;

      if (!player.isActive) {
        return;
      }

      if (document.activeElement && ((0, _dom.hasClass)(document.activeElement, 'video-react-control') || (0, _dom.hasClass)(document.activeElement, 'video-react-menu-button-active') // || hasClass(document.activeElement, 'video-react-slider')
      || (0, _dom.hasClass)(document.activeElement, 'video-react-big-play-button'))) {
        return;
      }

      var keyCode = e.keyCode || e.which;
      var ctrl = e.ctrlKey || e.metaKey;
      var shift = e.shiftKey;
      var alt = e.altKey;
      var shortcut = this.shortcuts.filter(function (s) {
        if (!s.keyCode || s.keyCode - keyCode !== 0) {
          return false;
        }

        if (s.ctrl !== undefined && s.ctrl !== ctrl || s.shift !== undefined && s.shift !== shift || s.alt !== undefined && s.alt !== alt) {
          return false;
        }

        return true;
      })[0];

      if (shortcut) {
        shortcut.handle(player, actions);
        e.preventDefault();
      }
    } // only if player is active and player is ready

  }, {
    key: "canBeClicked",
    value: function canBeClicked(player, e) {
      if (!player.isActive || e.target.nodeName !== 'VIDEO' || player.readyState !== 4) {
        return false;
      }

      return true;
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this$props2 = this.props,
          player = _this$props2.player,
          actions = _this$props2.actions,
          clickable = _this$props2.clickable;

      if (!this.canBeClicked(player, e) || !clickable) {
        return;
      }

      this.togglePlay(player, actions); // e.preventDefault();
    }
  }, {
    key: "handleDoubleClick",
    value: function handleDoubleClick(e) {
      var _this$props3 = this.props,
          player = _this$props3.player,
          actions = _this$props3.actions,
          dblclickable = _this$props3.dblclickable;

      if (!this.canBeClicked(player, e) || !dblclickable) {
        return;
      }

      this.toggleFullscreen(player, actions); // e.preventDefault();
    } // this component dose not render anything
    // it's just for the key down event

  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Shortcut;
}(_react.Component);

exports["default"] = Shortcut;
Shortcut.propTypes = propTypes;
Shortcut.defaultProps = defaultProps;
Shortcut.displayName = 'Shortcut';

/***/ }),

/***/ "./node_modules/video-react/lib/components/Slider.js":
/*!***********************************************************!*\
  !*** ./node_modules/video-react/lib/components/Slider.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var Dom = _interopRequireWildcard(__webpack_require__(/*! ../utils/dom */ "./node_modules/video-react/lib/utils/dom.js"));

var propTypes = {
  className: _propTypes["default"].string,
  onMouseDown: _propTypes["default"].func,
  onMouseMove: _propTypes["default"].func,
  stepForward: _propTypes["default"].func,
  stepBack: _propTypes["default"].func,
  sliderActive: _propTypes["default"].func,
  sliderInactive: _propTypes["default"].func,
  onMouseUp: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  getPercent: _propTypes["default"].func,
  vertical: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  label: _propTypes["default"].string,
  valuenow: _propTypes["default"].string,
  valuetext: _propTypes["default"].string
};

var Slider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Slider, _Component);

  function Slider(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Slider);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Slider).call(this, props, context));
    _this.handleMouseDown = _this.handleMouseDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseUp = _this.handleMouseUp.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind((0, _assertThisInitialized2["default"])(_this));
    _this.stepForward = _this.stepForward.bind((0, _assertThisInitialized2["default"])(_this));
    _this.stepBack = _this.stepBack.bind((0, _assertThisInitialized2["default"])(_this));
    _this.calculateDistance = _this.calculateDistance.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getProgress = _this.getProgress.bind((0, _assertThisInitialized2["default"])(_this));
    _this.renderChildren = _this.renderChildren.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      active: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Slider, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousemove', this.handleMouseMove, true);
      document.removeEventListener('mouseup', this.handleMouseUp, true);
      document.removeEventListener('touchmove', this.handleMouseMove, true);
      document.removeEventListener('touchend', this.handleMouseUp, true);
      document.removeEventListener('keydown', this.handleKeyPress, true);
    }
  }, {
    key: "getProgress",
    value: function getProgress() {
      var getPercent = this.props.getPercent;

      if (!getPercent) {
        return 0;
      }

      var progress = getPercent(); // Protect against no duration and other division issues

      if (typeof progress !== 'number' || progress < 0 || progress === Infinity) {
        progress = 0;
      }

      return progress;
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      var onMouseDown = this.props.onMouseDown; // event.preventDefault();
      // event.stopPropagation();

      document.addEventListener('mousemove', this.handleMouseMove, true);
      document.addEventListener('mouseup', this.handleMouseUp, true);
      document.addEventListener('touchmove', this.handleMouseMove, true);
      document.addEventListener('touchend', this.handleMouseUp, true);
      this.setState({
        active: true
      });

      if (this.props.sliderActive) {
        this.props.sliderActive(event);
      }

      this.handleMouseMove(event);

      if (onMouseDown) {
        onMouseDown(event);
      }
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      var onMouseMove = this.props.onMouseMove;

      if (onMouseMove) {
        onMouseMove(event);
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      // On iOS safari, a subsequent mouseup event will be fired after touchend.
      // Its weird event positions make the player seek a wrong time.
      // calling preventDefault (at touchend phase) will prevent the mouseup event
      event.preventDefault();
      var onMouseUp = this.props.onMouseUp;
      document.removeEventListener('mousemove', this.handleMouseMove, true);
      document.removeEventListener('mouseup', this.handleMouseUp, true);
      document.removeEventListener('touchmove', this.handleMouseMove, true);
      document.removeEventListener('touchend', this.handleMouseUp, true);
      this.setState({
        active: false
      });

      if (this.props.sliderInactive) {
        this.props.sliderInactive(event);
      }

      if (onMouseUp) {
        onMouseUp(event);
      }
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      document.addEventListener('keydown', this.handleKeyPress, true);

      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(e) {
      document.removeEventListener('keydown', this.handleKeyPress, true);

      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault(); // event.stopPropagation();

      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      if (event.which === 37 || event.which === 40) {
        // Left and Down Arrows
        event.preventDefault();
        event.stopPropagation();
        this.stepBack();
      } else if (event.which === 38 || event.which === 39) {
        // Up and Right Arrows
        event.preventDefault();
        event.stopPropagation();
        this.stepForward();
      }
    }
  }, {
    key: "stepForward",
    value: function stepForward() {
      if (this.props.stepForward) {
        this.props.stepForward();
      }
    }
  }, {
    key: "stepBack",
    value: function stepBack() {
      if (this.props.stepBack) {
        this.props.stepBack();
      }
    }
  }, {
    key: "calculateDistance",
    value: function calculateDistance(event) {
      var node = this.slider;
      var position = Dom.getPointerPosition(node, event);

      if (this.props.vertical) {
        return position.y;
      }

      return position.x;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var progress = this.getProgress();
      var percentage = "".concat((progress * 100).toFixed(2), "%");
      return _react["default"].Children.map(this.props.children, function (child) {
        return _react["default"].cloneElement(child, {
          progress: progress,
          percentage: percentage
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          vertical = _this$props.vertical,
          label = _this$props.label,
          valuenow = _this$props.valuenow,
          valuetext = _this$props.valuetext;
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])(this.props.className, {
          'video-react-slider-vertical': vertical,
          'video-react-slider-horizontal': !vertical,
          'video-react-sliding': this.state.active
        }, 'video-react-slider'),
        ref: function ref(c) {
          _this2.slider = c;
        },
        tabIndex: "0",
        role: "slider",
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleMouseDown,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        "aria-label": label || '',
        "aria-valuenow": valuenow || '',
        "aria-valuetext": valuetext || '',
        "aria-valuemin": 0,
        "aria-valuemax": 100
      }, this.renderChildren());
    }
  }]);
  return Slider;
}(_react.Component);

exports["default"] = Slider;
Slider.propTypes = propTypes;
Slider.displayName = 'Slider';

/***/ }),

/***/ "./node_modules/video-react/lib/components/Video.js":
/*!**********************************************************!*\
  !*** ./node_modules/video-react/lib/components/Video.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/video-react/lib/utils/index.js");

var propTypes = {
  actions: _propTypes["default"].object,
  player: _propTypes["default"].object,
  children: _propTypes["default"].any,
  startTime: _propTypes["default"].number,
  loop: _propTypes["default"].bool,
  muted: _propTypes["default"].bool,
  autoPlay: _propTypes["default"].bool,
  playsInline: _propTypes["default"].bool,
  src: _propTypes["default"].string,
  poster: _propTypes["default"].string,
  className: _propTypes["default"].string,
  preload: _propTypes["default"].oneOf(['auto', 'metadata', 'none']),
  crossOrigin: _propTypes["default"].string,
  onLoadStart: _propTypes["default"].func,
  onWaiting: _propTypes["default"].func,
  onCanPlay: _propTypes["default"].func,
  onCanPlayThrough: _propTypes["default"].func,
  onPlaying: _propTypes["default"].func,
  onEnded: _propTypes["default"].func,
  onSeeking: _propTypes["default"].func,
  onSeeked: _propTypes["default"].func,
  onPlay: _propTypes["default"].func,
  onPause: _propTypes["default"].func,
  onProgress: _propTypes["default"].func,
  onDurationChange: _propTypes["default"].func,
  onError: _propTypes["default"].func,
  onSuspend: _propTypes["default"].func,
  onAbort: _propTypes["default"].func,
  onEmptied: _propTypes["default"].func,
  onStalled: _propTypes["default"].func,
  onLoadedMetadata: _propTypes["default"].func,
  onLoadedData: _propTypes["default"].func,
  onTimeUpdate: _propTypes["default"].func,
  onRateChange: _propTypes["default"].func,
  onVolumeChange: _propTypes["default"].func,
  onResize: _propTypes["default"].func
};

var Video =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Video, _Component);

  function Video(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Video);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Video).call(this, props));
    _this.video = null; // the html5 video

    _this.play = _this.play.bind((0, _assertThisInitialized2["default"])(_this));
    _this.pause = _this.pause.bind((0, _assertThisInitialized2["default"])(_this));
    _this.seek = _this.seek.bind((0, _assertThisInitialized2["default"])(_this));
    _this.forward = _this.forward.bind((0, _assertThisInitialized2["default"])(_this));
    _this.replay = _this.replay.bind((0, _assertThisInitialized2["default"])(_this));
    _this.toggleFullscreen = _this.toggleFullscreen.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getProperties = _this.getProperties.bind((0, _assertThisInitialized2["default"])(_this));
    _this.renderChildren = _this.renderChildren.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleLoadStart = _this.handleLoadStart.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleCanPlay = _this.handleCanPlay.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleCanPlayThrough = _this.handleCanPlayThrough.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handlePlay = _this.handlePlay.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handlePlaying = _this.handlePlaying.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handlePause = _this.handlePause.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleEnded = _this.handleEnded.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleWaiting = _this.handleWaiting.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSeeking = _this.handleSeeking.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSeeked = _this.handleSeeked.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFullscreenChange = _this.handleFullscreenChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleError = _this.handleError.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSuspend = _this.handleSuspend.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleAbort = _this.handleAbort.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleEmptied = _this.handleEmptied.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleStalled = _this.handleStalled.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleLoadedMetaData = _this.handleLoadedMetaData.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleLoadedData = _this.handleLoadedData.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleTimeUpdate = _this.handleTimeUpdate.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleRateChange = _this.handleRateChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleVolumeChange = _this.handleVolumeChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleDurationChange = _this.handleDurationChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleProgress = (0, _utils.throttle)(_this.handleProgress.bind((0, _assertThisInitialized2["default"])(_this)), 250);
    _this.handleKeypress = _this.handleKeypress.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleTextTrackChange = _this.handleTextTrackChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Video, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.forceUpdate(); // make sure the children can get the video property

      if (this.video && this.video.textTracks) {
        this.video.textTracks.onaddtrack = this.handleTextTrackChange;
        this.video.textTracks.onremovetrack = this.handleTextTrackChange;
      }
    } // get all video properties

  }, {
    key: "getProperties",
    value: function getProperties() {
      var _this2 = this;

      if (!this.video) {
        return null;
      }

      return _utils.mediaProperties.reduce(function (properties, key) {
        properties[key] = _this2.video[key];
        return properties;
      }, {});
    } // get playback rate

  }, {
    key: "handleTextTrackChange",
    value: function handleTextTrackChange() {
      var _this$props = this.props,
          actions = _this$props.actions,
          player = _this$props.player;

      if (this.video && this.video.textTracks) {
        var activeTextTrack = Array.from(this.video.textTracks).find(function (textTrack) {
          return textTrack.mode === 'showing';
        });

        if (activeTextTrack !== player.activeTextTrack) {
          actions.activateTextTrack(activeTextTrack);
        }
      }
    } // play the video

  }, {
    key: "play",
    value: function play() {
      var promise = this.video.play();

      if (promise !== undefined) {
        promise["catch"](function () {}).then(function () {});
      }
    } // pause the video

  }, {
    key: "pause",
    value: function pause() {
      var promise = this.video.pause();

      if (promise !== undefined) {
        promise["catch"](function () {}).then(function () {});
      }
    } // Change the video source and re-load the video:

  }, {
    key: "load",
    value: function load() {
      this.video.load();
    } // Add a new text track to the video

  }, {
    key: "addTextTrack",
    value: function addTextTrack() {
      var _this$video;

      (_this$video = this.video).addTextTrack.apply(_this$video, arguments);
    } // Check if your browser can play different types of video:

  }, {
    key: "canPlayType",
    value: function canPlayType() {
      var _this$video2;

      (_this$video2 = this.video).canPlayType.apply(_this$video2, arguments);
    } // toggle play

  }, {
    key: "togglePlay",
    value: function togglePlay() {
      if (this.video.paused) {
        this.play();
      } else {
        this.pause();
      }
    } // seek video by time

  }, {
    key: "seek",
    value: function seek(time) {
      try {
        this.video.currentTime = time;
      } catch (e) {// console.log(e, 'Video is not ready.')
      }
    } // jump forward x seconds

  }, {
    key: "forward",
    value: function forward(seconds) {
      this.seek(this.video.currentTime + seconds);
    } // jump back x seconds

  }, {
    key: "replay",
    value: function replay(seconds) {
      this.forward(-seconds);
    } // enter or exist full screen

  }, {
    key: "toggleFullscreen",
    value: function toggleFullscreen() {
      var _this$props2 = this.props,
          player = _this$props2.player,
          actions = _this$props2.actions;
      actions.toggleFullscreen(player);
    } // Fired when the user agent
    // begins looking for media data

  }, {
    key: "handleLoadStart",
    value: function handleLoadStart() {
      var _this$props3 = this.props,
          actions = _this$props3.actions,
          onLoadStart = _this$props3.onLoadStart;
      actions.handleLoadStart(this.getProperties());

      if (onLoadStart) {
        onLoadStart.apply(void 0, arguments);
      }
    } // A handler for events that
    // signal that waiting has ended

  }, {
    key: "handleCanPlay",
    value: function handleCanPlay() {
      var _this$props4 = this.props,
          actions = _this$props4.actions,
          onCanPlay = _this$props4.onCanPlay;
      actions.handleCanPlay(this.getProperties());

      if (onCanPlay) {
        onCanPlay.apply(void 0, arguments);
      }
    } // A handler for events that
    // signal that waiting has ended

  }, {
    key: "handleCanPlayThrough",
    value: function handleCanPlayThrough() {
      var _this$props5 = this.props,
          actions = _this$props5.actions,
          onCanPlayThrough = _this$props5.onCanPlayThrough;
      actions.handleCanPlayThrough(this.getProperties());

      if (onCanPlayThrough) {
        onCanPlayThrough.apply(void 0, arguments);
      }
    } // A handler for events that
    // signal that waiting has ended

  }, {
    key: "handlePlaying",
    value: function handlePlaying() {
      var _this$props6 = this.props,
          actions = _this$props6.actions,
          onPlaying = _this$props6.onPlaying;
      actions.handlePlaying(this.getProperties());

      if (onPlaying) {
        onPlaying.apply(void 0, arguments);
      }
    } // Fired whenever the media has been started

  }, {
    key: "handlePlay",
    value: function handlePlay() {
      var _this$props7 = this.props,
          actions = _this$props7.actions,
          onPlay = _this$props7.onPlay;
      actions.handlePlay(this.getProperties());

      if (onPlay) {
        onPlay.apply(void 0, arguments);
      }
    } // Fired whenever the media has been paused

  }, {
    key: "handlePause",
    value: function handlePause() {
      var _this$props8 = this.props,
          actions = _this$props8.actions,
          onPause = _this$props8.onPause;
      actions.handlePause(this.getProperties());

      if (onPause) {
        onPause.apply(void 0, arguments);
      }
    } // Fired when the duration of
    // the media resource is first known or changed

  }, {
    key: "handleDurationChange",
    value: function handleDurationChange() {
      var _this$props9 = this.props,
          actions = _this$props9.actions,
          onDurationChange = _this$props9.onDurationChange;
      actions.handleDurationChange(this.getProperties());

      if (onDurationChange) {
        onDurationChange.apply(void 0, arguments);
      }
    } // Fired while the user agent
    // is downloading media data

  }, {
    key: "handleProgress",
    value: function handleProgress() {
      var _this$props10 = this.props,
          actions = _this$props10.actions,
          onProgress = _this$props10.onProgress;

      if (this.video) {
        actions.handleProgressChange(this.getProperties());
      }

      if (onProgress) {
        onProgress.apply(void 0, arguments);
      }
    } // Fired when the end of the media resource
    // is reached (currentTime == duration)

  }, {
    key: "handleEnded",
    value: function handleEnded() {
      var _this$props11 = this.props,
          loop = _this$props11.loop,
          player = _this$props11.player,
          actions = _this$props11.actions,
          onEnded = _this$props11.onEnded;

      if (loop) {
        this.seek(0);
        this.play();
      } else if (!player.paused) {
        this.pause();
      }

      actions.handleEnd(this.getProperties());

      if (onEnded) {
        onEnded.apply(void 0, arguments);
      }
    } // Fired whenever the media begins waiting

  }, {
    key: "handleWaiting",
    value: function handleWaiting() {
      var _this$props12 = this.props,
          actions = _this$props12.actions,
          onWaiting = _this$props12.onWaiting;
      actions.handleWaiting(this.getProperties());

      if (onWaiting) {
        onWaiting.apply(void 0, arguments);
      }
    } // Fired whenever the player
    // is jumping to a new time

  }, {
    key: "handleSeeking",
    value: function handleSeeking() {
      var _this$props13 = this.props,
          actions = _this$props13.actions,
          onSeeking = _this$props13.onSeeking;
      actions.handleSeeking(this.getProperties());

      if (onSeeking) {
        onSeeking.apply(void 0, arguments);
      }
    } // Fired when the player has
    // finished jumping to a new time

  }, {
    key: "handleSeeked",
    value: function handleSeeked() {
      var _this$props14 = this.props,
          actions = _this$props14.actions,
          onSeeked = _this$props14.onSeeked;
      actions.handleSeeked(this.getProperties());

      if (onSeeked) {
        onSeeked.apply(void 0, arguments);
      }
    } // Handle Fullscreen Change

  }, {
    key: "handleFullscreenChange",
    value: function handleFullscreenChange() {} // Fires when the browser is
    // intentionally not getting media data

  }, {
    key: "handleSuspend",
    value: function handleSuspend() {
      var _this$props15 = this.props,
          actions = _this$props15.actions,
          onSuspend = _this$props15.onSuspend;
      actions.handleSuspend(this.getProperties());

      if (onSuspend) {
        onSuspend.apply(void 0, arguments);
      }
    } // Fires when the loading of an audio/video is aborted

  }, {
    key: "handleAbort",
    value: function handleAbort() {
      var _this$props16 = this.props,
          actions = _this$props16.actions,
          onAbort = _this$props16.onAbort;
      actions.handleAbort(this.getProperties());

      if (onAbort) {
        onAbort.apply(void 0, arguments);
      }
    } // Fires when the current playlist is empty

  }, {
    key: "handleEmptied",
    value: function handleEmptied() {
      var _this$props17 = this.props,
          actions = _this$props17.actions,
          onEmptied = _this$props17.onEmptied;
      actions.handleEmptied(this.getProperties());

      if (onEmptied) {
        onEmptied.apply(void 0, arguments);
      }
    } // Fires when the browser is trying to
    // get media data, but data is not available

  }, {
    key: "handleStalled",
    value: function handleStalled() {
      var _this$props18 = this.props,
          actions = _this$props18.actions,
          onStalled = _this$props18.onStalled;
      actions.handleStalled(this.getProperties());

      if (onStalled) {
        onStalled.apply(void 0, arguments);
      }
    } // Fires when the browser has loaded
    // meta data for the audio/video

  }, {
    key: "handleLoadedMetaData",
    value: function handleLoadedMetaData() {
      var _this$props19 = this.props,
          actions = _this$props19.actions,
          onLoadedMetadata = _this$props19.onLoadedMetadata,
          startTime = _this$props19.startTime;

      if (startTime && startTime > 0) {
        this.video.currentTime = startTime;
      }

      actions.handleLoadedMetaData(this.getProperties());

      if (onLoadedMetadata) {
        onLoadedMetadata.apply(void 0, arguments);
      }
    } // Fires when the browser has loaded
    // the current frame of the audio/video

  }, {
    key: "handleLoadedData",
    value: function handleLoadedData() {
      var _this$props20 = this.props,
          actions = _this$props20.actions,
          onLoadedData = _this$props20.onLoadedData;
      actions.handleLoadedData(this.getProperties());

      if (onLoadedData) {
        onLoadedData.apply(void 0, arguments);
      }
    } // Fires when the current
    // playback position has changed

  }, {
    key: "handleTimeUpdate",
    value: function handleTimeUpdate() {
      var _this$props21 = this.props,
          actions = _this$props21.actions,
          onTimeUpdate = _this$props21.onTimeUpdate;
      actions.handleTimeUpdate(this.getProperties());

      if (onTimeUpdate) {
        onTimeUpdate.apply(void 0, arguments);
      }
    }
    /**
     * Fires when the playing speed of the audio/video is changed
     */

  }, {
    key: "handleRateChange",
    value: function handleRateChange() {
      var _this$props22 = this.props,
          actions = _this$props22.actions,
          onRateChange = _this$props22.onRateChange;
      actions.handleRateChange(this.getProperties());

      if (onRateChange) {
        onRateChange.apply(void 0, arguments);
      }
    } // Fires when the volume has been changed

  }, {
    key: "handleVolumeChange",
    value: function handleVolumeChange() {
      var _this$props23 = this.props,
          actions = _this$props23.actions,
          onVolumeChange = _this$props23.onVolumeChange;
      actions.handleVolumeChange(this.getProperties());

      if (onVolumeChange) {
        onVolumeChange.apply(void 0, arguments);
      }
    } // Fires when an error occurred
    // during the loading of an audio/video

  }, {
    key: "handleError",
    value: function handleError() {
      var _this$props24 = this.props,
          actions = _this$props24.actions,
          onError = _this$props24.onError;
      actions.handleError(this.getProperties());

      if (onError) {
        onError.apply(void 0, arguments);
      }
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var _this$props25 = this.props,
          actions = _this$props25.actions,
          onResize = _this$props25.onResize;
      actions.handleResize(this.getProperties());

      if (onResize) {
        onResize.apply(void 0, arguments);
      }
    }
  }, {
    key: "handleKeypress",
    value: function handleKeypress() {}
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this3 = this;

      var props = (0, _objectSpread2["default"])({}, this.props, {
        video: this.video
      }); // to make sure the children can get video property

      if (!this.video) {
        return null;
      } // only keep <source />, <track />, <MyComponent isVideoChild /> elements


      return _react["default"].Children.toArray(this.props.children).filter(_utils.isVideoChild).map(function (c) {
        var cprops;

        if (typeof c.type === 'string') {
          // add onError to <source />
          if (c.type === 'source') {
            cprops = (0, _objectSpread2["default"])({}, c.props);
            var preOnError = cprops.onError;

            cprops.onError = function () {
              if (preOnError) {
                preOnError.apply(void 0, arguments);
              }

              _this3.handleError.apply(_this3, arguments);
            };
          }
        } else {
          cprops = props;
        }

        return _react["default"].cloneElement(c, cprops);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props26 = this.props,
          loop = _this$props26.loop,
          poster = _this$props26.poster,
          preload = _this$props26.preload,
          src = _this$props26.src,
          autoPlay = _this$props26.autoPlay,
          playsInline = _this$props26.playsInline,
          muted = _this$props26.muted,
          crossOrigin = _this$props26.crossOrigin,
          videoId = _this$props26.videoId;
      return _react["default"].createElement("video", {
        className: (0, _classnames["default"])('video-react-video', this.props.className),
        id: videoId,
        crossOrigin: crossOrigin,
        ref: function ref(c) {
          _this4.video = c;
        },
        muted: muted,
        preload: preload,
        loop: loop,
        playsInline: playsInline,
        autoPlay: autoPlay,
        poster: poster,
        src: src,
        onLoadStart: this.handleLoadStart,
        onWaiting: this.handleWaiting,
        onCanPlay: this.handleCanPlay,
        onCanPlayThrough: this.handleCanPlayThrough,
        onPlaying: this.handlePlaying,
        onEnded: this.handleEnded,
        onSeeking: this.handleSeeking,
        onSeeked: this.handleSeeked,
        onPlay: this.handlePlay,
        onPause: this.handlePause,
        onProgress: this.handleProgress,
        onDurationChange: this.handleDurationChange,
        onError: this.handleError,
        onSuspend: this.handleSuspend,
        onAbort: this.handleAbort,
        onEmptied: this.handleEmptied,
        onStalled: this.handleStalled,
        onLoadedMetadata: this.handleLoadedMetaData,
        onLoadedData: this.handleLoadedData,
        onTimeUpdate: this.handleTimeUpdate,
        onRateChange: this.handleRateChange,
        onVolumeChange: this.handleVolumeChange,
        tabIndex: "-1"
      }, this.renderChildren());
    }
  }, {
    key: "playbackRate",
    get: function get() {
      return this.video.playbackRate;
    } // set playback rate
    // speed of video
    ,
    set: function set(rate) {
      this.video.playbackRate = rate;
    }
  }, {
    key: "muted",
    get: function get() {
      return this.video.muted;
    },
    set: function set(val) {
      this.video.muted = val;
    }
  }, {
    key: "volume",
    get: function get() {
      return this.video.volume;
    },
    set: function set(val) {
      if (val > 1) {
        val = 1;
      }

      if (val < 0) {
        val = 0;
      }

      this.video.volume = val;
    } // video width

  }, {
    key: "videoWidth",
    get: function get() {
      return this.video.videoWidth;
    } // video height

  }, {
    key: "videoHeight",
    get: function get() {
      return this.video.videoHeight;
    }
  }]);
  return Video;
}(_react.Component);

exports["default"] = Video;
Video.propTypes = propTypes;
Video.displayName = 'Video';

/***/ }),

/***/ "./node_modules/video-react/lib/components/control-bar/ClosedCaptionButton.js":
/*!************************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/control-bar/ClosedCaptionButton.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _MenuButton = _interopRequireDefault(__webpack_require__(/*! ../menu/MenuButton */ "./node_modules/video-react/lib/components/menu/MenuButton.js"));

var propTypes = {
  player: _propTypes["default"].object,
  actions: _propTypes["default"].object,
  className: _propTypes["default"].string,
  offMenuText: _propTypes["default"].string,
  showOffMenu: _propTypes["default"].bool,
  kinds: _propTypes["default"].array
};
var defaultProps = {
  offMenuText: 'Off',
  showOffMenu: true,
  kinds: ['captions', 'subtitles'] // `kind`s of TextTrack to look for to associate it with this menu.

};

var ClosedCaptionButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ClosedCaptionButton, _Component);

  function ClosedCaptionButton(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, ClosedCaptionButton);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ClosedCaptionButton).call(this, props, context));
    _this.getTextTrackItems = _this.getTextTrackItems.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateState = _this.updateState.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSelectItem = _this.handleSelectItem.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = _this.getTextTrackItems();
    return _this;
  }

  (0, _createClass2["default"])(ClosedCaptionButton, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateState();
    }
  }, {
    key: "getTextTrackItems",
    value: function getTextTrackItems() {
      var _this$props = this.props,
          kinds = _this$props.kinds,
          player = _this$props.player,
          offMenuText = _this$props.offMenuText,
          showOffMenu = _this$props.showOffMenu;
      var textTracks = player.textTracks,
          activeTextTrack = player.activeTextTrack;
      var textTrackItems = {
        items: [],
        selectedIndex: 0
      };
      var tracks = Array.from(textTracks || []);

      if (tracks.length === 0) {
        return textTrackItems;
      }

      if (showOffMenu) {
        textTrackItems.items.push({
          label: offMenuText || 'Off',
          value: null
        });
      }

      tracks.forEach(function (textTrack) {
        // ignore invalid text track kind
        if (kinds.length && !kinds.includes(textTrack.kind)) {
          return;
        }

        textTrackItems.items.push({
          label: textTrack.label,
          value: textTrack.language
        });
      });
      textTrackItems.selectedIndex = textTrackItems.items.findIndex(function (item) {
        return activeTextTrack && activeTextTrack.language === item.value;
      });

      if (textTrackItems.selectedIndex === -1) {
        textTrackItems.selectedIndex = 0;
      }

      return textTrackItems;
    }
  }, {
    key: "updateState",
    value: function updateState() {
      var textTrackItems = this.getTextTrackItems();

      if (textTrackItems.selectedIndex !== this.state.selectedIndex || !this.textTrackItemsAreEqual(textTrackItems.items, this.state.items)) {
        this.setState(textTrackItems);
      }
    }
  }, {
    key: "textTrackItemsAreEqual",
    value: function textTrackItemsAreEqual(items1, items2) {
      if (items1.length !== items2.length) {
        return false;
      }

      for (var i = 0; i < items1.length; i++) {
        if (!items2[i] || items1[i].label !== items2[i].label || items1[i].value !== items2[i].value) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "handleSelectItem",
    value: function handleSelectItem(index) {
      var _this$props2 = this.props,
          player = _this$props2.player,
          actions = _this$props2.actions,
          showOffMenu = _this$props2.showOffMenu;
      var textTracks = player.textTracks; // For the 'subtitles-off' button, the first condition will never match
      // so all subtitles will be turned off

      Array.from(textTracks).forEach(function (textTrack, i) {
        // if it shows the `Off` menu, the first item is `Off`
        if (index === (showOffMenu ? i + 1 : i)) {
          textTrack.mode = 'showing';
          actions.activateTextTrack(textTrack);
        } else {
          textTrack.mode = 'hidden';
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          items = _this$state.items,
          selectedIndex = _this$state.selectedIndex;
      return _react["default"].createElement(_MenuButton["default"], {
        className: (0, _classnames["default"])('video-react-closed-caption', this.props.className),
        onSelectItem: this.handleSelectItem,
        items: items,
        selectedIndex: selectedIndex
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Closed Caption"));
    }
  }]);
  return ClosedCaptionButton;
}(_react.Component);

ClosedCaptionButton.propTypes = propTypes;
ClosedCaptionButton.defaultProps = defaultProps;
ClosedCaptionButton.displayName = 'ClosedCaptionButton';
var _default = ClosedCaptionButton;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/video-react/lib/components/control-bar/ControlBar.js":
/*!***************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/control-bar/ControlBar.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _ProgressControl = _interopRequireDefault(__webpack_require__(/*! ./ProgressControl */ "./node_modules/video-react/lib/components/control-bar/ProgressControl.js"));

var _PlayToggle = _interopRequireDefault(__webpack_require__(/*! ./PlayToggle */ "./node_modules/video-react/lib/components/control-bar/PlayToggle.js"));

var _ForwardControl = _interopRequireDefault(__webpack_require__(/*! ./ForwardControl */ "./node_modules/video-react/lib/components/control-bar/ForwardControl.js"));

var _ReplayControl = _interopRequireDefault(__webpack_require__(/*! ./ReplayControl */ "./node_modules/video-react/lib/components/control-bar/ReplayControl.js"));

var _FullscreenToggle = _interopRequireDefault(__webpack_require__(/*! ./FullscreenToggle */ "./node_modules/video-react/lib/components/control-bar/FullscreenToggle.js"));

var _RemainingTimeDisplay = _interopRequireDefault(__webpack_require__(/*! ../time-controls/RemainingTimeDisplay */ "./node_modules/video-react/lib/components/time-controls/RemainingTimeDisplay.js"));

var _CurrentTimeDisplay = _interopRequireDefault(__webpack_require__(/*! ../time-controls/CurrentTimeDisplay */ "./node_modules/video-react/lib/components/time-controls/CurrentTimeDisplay.js"));

var _DurationDisplay = _interopRequireDefault(__webpack_require__(/*! ../time-controls/DurationDisplay */ "./node_modules/video-react/lib/components/time-controls/DurationDisplay.js"));

var _TimeDivider = _interopRequireDefault(__webpack_require__(/*! ../time-controls/TimeDivider */ "./node_modules/video-react/lib/components/time-controls/TimeDivider.js"));

var _VolumeMenuButton = _interopRequireDefault(__webpack_require__(/*! ./VolumeMenuButton */ "./node_modules/video-react/lib/components/control-bar/VolumeMenuButton.js"));

var _PlaybackRateMenuButton = _interopRequireDefault(__webpack_require__(/*! ./PlaybackRateMenuButton */ "./node_modules/video-react/lib/components/control-bar/PlaybackRateMenuButton.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/video-react/lib/utils/index.js");

var propTypes = {
  children: _propTypes["default"].any,
  autoHide: _propTypes["default"].bool,
  autoHideTime: _propTypes["default"].number,
  // used in Player
  disableDefaultControls: _propTypes["default"].bool,
  disableCompletely: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
var defaultProps = {
  autoHide: true,
  disableCompletely: false
};

var ControlBar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ControlBar, _Component);

  function ControlBar(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ControlBar);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ControlBar).call(this, props));
    _this.getDefaultChildren = _this.getDefaultChildren.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getFullChildren = _this.getFullChildren.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ControlBar, [{
    key: "getDefaultChildren",
    value: function getDefaultChildren() {
      return [_react["default"].createElement(_PlayToggle["default"], {
        key: "play-toggle",
        order: 1
      }), _react["default"].createElement(_VolumeMenuButton["default"], {
        key: "volume-menu-button",
        order: 4
      }), _react["default"].createElement(_CurrentTimeDisplay["default"], {
        key: "current-time-display",
        order: 5.1
      }), _react["default"].createElement(_TimeDivider["default"], {
        key: "time-divider",
        order: 5.2
      }), _react["default"].createElement(_DurationDisplay["default"], {
        key: "duration-display",
        order: 5.3
      }), _react["default"].createElement(_ProgressControl["default"], {
        key: "progress-control",
        order: 6
      }), _react["default"].createElement(_FullscreenToggle["default"], {
        key: "fullscreen-toggle",
        order: 8
      })];
    }
  }, {
    key: "getFullChildren",
    value: function getFullChildren() {
      return [_react["default"].createElement(_PlayToggle["default"], {
        key: "play-toggle",
        order: 1
      }), _react["default"].createElement(_ReplayControl["default"], {
        key: "replay-control",
        order: 2
      }), _react["default"].createElement(_ForwardControl["default"], {
        key: "forward-control",
        order: 3
      }), _react["default"].createElement(_VolumeMenuButton["default"], {
        key: "volume-menu-button",
        order: 4
      }), _react["default"].createElement(_CurrentTimeDisplay["default"], {
        key: "current-time-display",
        order: 5
      }), _react["default"].createElement(_TimeDivider["default"], {
        key: "time-divider",
        order: 6
      }), _react["default"].createElement(_DurationDisplay["default"], {
        key: "duration-display",
        order: 7
      }), _react["default"].createElement(_ProgressControl["default"], {
        key: "progress-control",
        order: 8
      }), _react["default"].createElement(_RemainingTimeDisplay["default"], {
        key: "remaining-time-display",
        order: 9
      }), _react["default"].createElement(_PlaybackRateMenuButton["default"], {
        rates: [1, 1.25, 1.5, 2],
        key: "playback-rate",
        order: 10
      }), _react["default"].createElement(_FullscreenToggle["default"], {
        key: "fullscreen-toggle",
        order: 11
      })];
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var children = _react["default"].Children.toArray(this.props.children);

      var defaultChildren = this.props.disableDefaultControls ? [] : this.getDefaultChildren();
      var _this$props = this.props,
          className = _this$props.className,
          parentProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className"]); // remove className

      return (0, _utils.mergeAndSortChildren)(defaultChildren, children, parentProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          autoHide = _this$props2.autoHide,
          className = _this$props2.className,
          disableCompletely = _this$props2.disableCompletely;
      var children = this.getChildren();
      return disableCompletely ? null : _react["default"].createElement("div", {
        className: (0, _classnames["default"])('video-react-control-bar', {
          'video-react-control-bar-auto-hide': autoHide
        }, className)
      }, children);
    }
  }]);
  return ControlBar;
}(_react.Component);

exports["default"] = ControlBar;
ControlBar.propTypes = propTypes;
ControlBar.defaultProps = defaultProps;
ControlBar.displayName = 'ControlBar';

/***/ }),

/***/ "./node_modules/video-react/lib/components/control-bar/ForwardControl.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/control-bar/ForwardControl.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _ForwardReplayControl = _interopRequireDefault(__webpack_require__(/*! ./ForwardReplayControl */ "./node_modules/video-react/lib/components/control-bar/ForwardReplayControl.js"));

// Pass mode into parent function
var ForwardControl = (0, _ForwardReplayControl["default"])('forward');
ForwardControl.displayName = 'ForwardControl';
var _default = ForwardControl;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/video-react/lib/components/control-bar/ForwardReplayControl.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/control-bar/ForwardReplayControl.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var propTypes = {
  actions: _propTypes["default"].object,
  className: _propTypes["default"].string,
  seconds: _propTypes["default"].oneOf([5, 10, 30])
};
var defaultProps = {
  seconds: 10
};

var _default = function _default(mode) {
  var ForwardReplayControl =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(ForwardReplayControl, _Component);

    function ForwardReplayControl(props, context) {
      var _this;

      (0, _classCallCheck2["default"])(this, ForwardReplayControl);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ForwardReplayControl).call(this, props, context));
      _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
      return _this;
    }

    (0, _createClass2["default"])(ForwardReplayControl, [{
      key: "handleClick",
      value: function handleClick() {
        var _this$props = this.props,
            actions = _this$props.actions,
            seconds = _this$props.seconds; // Depends mode to implement different actions

        if (mode === 'forward') {
          actions.forward(seconds);
        } else {
          actions.replay(seconds);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            seconds = _this$props2.seconds,
            className = _this$props2.className;
        var classNames = ['video-react-control', 'video-react-button', 'video-react-icon'];
        classNames.push("video-react-icon-".concat(mode, "-").concat(seconds), "video-react-".concat(mode, "-control"));

        if (className) {
          classNames.push(className);
        }

        return _react["default"].createElement("button", {
          ref: function ref(c) {
            _this2.button = c;
          },
          className: classNames.join(' '),
          type: "button",
          onClick: this.handleClick
        }, _react["default"].createElement("span", {
          className: "video-react-control-text"
        }, "".concat(mode, " ").concat(seconds, " seconds")));
      }
    }]);
    return ForwardReplayControl;
  }(_react.Component);

  ForwardReplayControl.propTypes = propTypes;
  ForwardReplayControl.defaultProps = defaultProps;
  return ForwardReplayControl;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/video-react/lib/components/control-bar/FullscreenToggle.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/control-bar/FullscreenToggle.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var propTypes = {
  actions: _propTypes["default"].object,
  player: _propTypes["default"].object,
  className: _propTypes["default"].string
};

var FullscreenToggle =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(FullscreenToggle, _Component);

  function FullscreenToggle(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, FullscreenToggle);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(FullscreenToggle).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(FullscreenToggle, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          player = _this$props.player,
          actions = _this$props.actions;
      actions.toggleFullscreen(player);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          player = _this$props2.player,
          className = _this$props2.className;
      return _react["default"].createElement("button", {
        className: (0, _classnames["default"])(className, {
          'video-react-icon-fullscreen-exit': player.isFullscreen,
          'video-react-icon-fullscreen': !player.isFullscreen
        }, 'video-react-fullscreen-control video-react-control video-react-button video-react-icon'),
        ref: function ref(c) {
          _this2.button = c;
        },
        type: "button",
        tabIndex: "0",
        onClick: this.handleClick
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Non-Fullscreen"));
    }
  }]);
  return FullscreenToggle;
}(_react.Component);

exports["default"] = FullscreenToggle;
FullscreenToggle.propTypes = propTypes;
FullscreenToggle.displayName = 'FullscreenToggle';

/***/ }),

/***/ "./node_modules/video-react/lib/components/control-bar/LoadProgressBar.js":
/*!********************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/control-bar/LoadProgressBar.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = LoadProgressBar;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var propTypes = {
  duration: _propTypes["default"].number,
  buffered: _propTypes["default"].object,
  className: _propTypes["default"].string
}; // Shows load progress

function LoadProgressBar(_ref) {
  var buffered = _ref.buffered,
      duration = _ref.duration,
      className = _ref.className;

  if (!buffered || !buffered.length) {
    return null;
  }

  var bufferedEnd = buffered.end(buffered.length - 1);
  var style = {};

  if (bufferedEnd > duration) {
    bufferedEnd = duration;
  } // get the percent width of a time compared to the total end


  function percentify(time, end) {
    var percent = time / end || 0; // no NaN

    return "".concat((percent >= 1 ? 1 : percent) * 100, "%");
  } // the width of the progress bar


  style.width = percentify(bufferedEnd, duration);
  var parts = []; // add child elements to represent the individual buffered time ranges

  for (var i = 0; i < buffered.length; i++) {
    var start = buffered.start(i);
    var end = buffered.end(i); // set the percent based on the width of the progress bar (bufferedEnd)

    var part = _react["default"].createElement("div", {
      style: {
        left: percentify(start, bufferedEnd),
        width: percentify(end - start, bufferedEnd)
      },
      key: "part-".concat(i)
    });

    parts.push(part);
  }

  if (parts.length === 0) {
    parts = null;
  }

  return _react["default"].createElement("div", {
    style: style,
    className: (0, _classnames["default"])('video-react-load-progress', className)
  }, _react["default"].createElement("span", {
    className: "video-react-control-text"
  }, "Loaded: 0%"), parts);
}

LoadProgressBar.propTypes = propTypes;
LoadProgressBar.displayName = 'LoadProgressBar';

/***/ }),

/***/ "./node_modules/video-react/lib/components/control-bar/MouseTimeDisplay.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/control-bar/MouseTimeDisplay.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/video-react/lib/utils/index.js");

function MouseTimeDisplay(_ref) {
  var duration = _ref.duration,
      mouseTime = _ref.mouseTime,
      className = _ref.className,
      text = _ref.text;

  if (!mouseTime.time) {
    return null;
  }

  var time = text || (0, _utils.formatTime)(mouseTime.time, duration);
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('video-react-mouse-display', className),
    style: {
      left: "".concat(mouseTime.position, "px")
    },
    "data-current-time": time
  });
}

MouseTimeDisplay.propTypes = {
  duration: _propTypes["default"].number,
  mouseTime: _propTypes["default"].object,
  className: _propTypes["default"].string
};
MouseTimeDisplay.displayName = 'MouseTimeDisplay';
var _default = MouseTimeDisplay;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/video-react/lib/components/control-bar/PlayProgressBar.js":
/*!********************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/control-bar/PlayProgressBar.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = PlayProgressBar;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/video-react/lib/utils/index.js");

var propTypes = {
  currentTime: _propTypes["default"].number,
  duration: _propTypes["default"].number,
  percentage: _propTypes["default"].string,
  className: _propTypes["default"].string
}; // Shows play progress

function PlayProgressBar(_ref) {
  var currentTime = _ref.currentTime,
      duration = _ref.duration,
      percentage = _ref.percentage,
      className = _ref.className;
  return _react["default"].createElement("div", {
    "data-current-time": (0, _utils.formatTime)(currentTime, duration),
    className: (0, _classnames["default"])('video-react-play-progress video-react-slider-bar', className),
    style: {
      width: percentage
    }
  }, _react["default"].createElement("span", {
    className: "video-react-control-text"
  }, "Progress: ".concat(percentage)));
}

PlayProgressBar.propTypes = propTypes;
PlayProgressBar.displayName = 'PlayProgressBar';

/***/ }),

/***/ "./node_modules/video-react/lib/components/control-bar/PlayToggle.js":
/*!***************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/control-bar/PlayToggle.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var propTypes = {
  actions: _propTypes["default"].object,
  player: _propTypes["default"].object,
  className: _propTypes["default"].string
};

var PlayToggle =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(PlayToggle, _Component);

  function PlayToggle(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, PlayToggle);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PlayToggle).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(PlayToggle, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          actions = _this$props.actions,
          player = _this$props.player;

      if (player.paused) {
        actions.play();
      } else {
        actions.pause();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          player = _this$props2.player,
          className = _this$props2.className;
      var controlText = player.paused ? 'Play' : 'Pause';
      return _react["default"].createElement("button", {
        ref: function ref(c) {
          _this2.button = c;
        },
        className: (0, _classnames["default"])(className, {
          'video-react-play-control': true,
          'video-react-control': true,
          'video-react-button': true,
          'video-react-paused': player.paused,
          'video-react-playing': !player.paused
        }),
        type: "button",
        tabIndex: "0",
        onClick: this.handleClick
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }, controlText));
    }
  }]);
  return PlayToggle;
}(_react.Component);

exports["default"] = PlayToggle;
PlayToggle.propTypes = propTypes;
PlayToggle.displayName = 'PlayToggle';

/***/ }),

/***/ "./node_modules/video-react/lib/components/control-bar/PlaybackRate.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/control-bar/PlaybackRate.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _PlaybackRateMenuButton = _interopRequireDefault(__webpack_require__(/*! ./PlaybackRateMenuButton */ "./node_modules/video-react/lib/components/control-bar/PlaybackRateMenuButton.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/video-react/lib/utils/index.js");

var PlaybackRate =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(PlaybackRate, _Component);

  function PlaybackRate(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, PlaybackRate);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PlaybackRate).call(this, props, context));
    (0, _utils.deprecatedWarning)('PlaybackRate', 'PlaybackRateMenuButton');
    return _this;
  }

  (0, _createClass2["default"])(PlaybackRate, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_PlaybackRateMenuButton["default"], this.props);
    }
  }]);
  return PlaybackRate;
}(_react.Component);

exports["default"] = PlaybackRate;
PlaybackRate.displayName = 'PlaybackRate';

/***/ }),

/***/ "./node_modules/video-react/lib/components/control-bar/PlaybackRateMenuButton.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/control-bar/PlaybackRateMenuButton.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _MenuButton = _interopRequireDefault(__webpack_require__(/*! ../menu/MenuButton */ "./node_modules/video-react/lib/components/menu/MenuButton.js"));

var propTypes = {
  player: _propTypes["default"].object,
  actions: _propTypes["default"].object,
  rates: _propTypes["default"].array,
  className: _propTypes["default"].string
};
var defaultProps = {
  rates: [2, 1.5, 1.25, 1, 0.5, 0.25]
};

var PlaybackRateMenuButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(PlaybackRateMenuButton, _Component);

  function PlaybackRateMenuButton(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, PlaybackRateMenuButton);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PlaybackRateMenuButton).call(this, props, context));
    _this.handleSelectItem = _this.handleSelectItem.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(PlaybackRateMenuButton, [{
    key: "handleSelectItem",
    value: function handleSelectItem(index) {
      var _this$props = this.props,
          rates = _this$props.rates,
          actions = _this$props.actions;

      if (index >= 0 && index < rates.length) {
        actions.changeRate(rates[index]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          rates = _this$props2.rates,
          player = _this$props2.player;
      var items = rates.map(function (rate) {
        return {
          label: "".concat(rate, "x"),
          value: rate
        };
      });
      var selectedIndex = rates.indexOf(player.playbackRate) || 0;
      return _react["default"].createElement(_MenuButton["default"], {
        className: (0, _classnames["default"])('video-react-playback-rate', this.props.className),
        onSelectItem: this.handleSelectItem,
        items: items,
        selectedIndex: selectedIndex
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Playback Rate"), _react["default"].createElement("div", {
        className: "video-react-playback-rate-value"
      }, "".concat(player.playbackRate.toFixed(2), "x")));
    }
  }]);
  return PlaybackRateMenuButton;
}(_react.Component);

PlaybackRateMenuButton.propTypes = propTypes;
PlaybackRateMenuButton.defaultProps = defaultProps;
PlaybackRateMenuButton.displayName = 'PlaybackRateMenuButton';
var _default = PlaybackRateMenuButton;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/video-react/lib/components/control-bar/ProgressControl.js":
/*!********************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/control-bar/ProgressControl.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var Dom = _interopRequireWildcard(__webpack_require__(/*! ../../utils/dom */ "./node_modules/video-react/lib/utils/dom.js"));

var _SeekBar = _interopRequireDefault(__webpack_require__(/*! ./SeekBar */ "./node_modules/video-react/lib/components/control-bar/SeekBar.js"));

var propTypes = {
  player: _propTypes["default"].object,
  className: _propTypes["default"].string
};

var ProgressControl =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ProgressControl, _Component);

  function ProgressControl(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, ProgressControl);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ProgressControl).call(this, props, context));
    _this.state = {
      mouseTime: {
        time: null,
        position: 0
      }
    };
    _this.handleMouseMoveThrottle = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ProgressControl, [{
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      if (!event.pageX) {
        return;
      }

      var duration = this.props.player.duration;
      var node = this.seekBar;
      var newTime = Dom.getPointerPosition(node, event).x * duration;
      var position = event.pageX - Dom.findElPosition(node).left;
      this.setState({
        mouseTime: {
          time: newTime,
          position: position
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = this.props.className;
      return _react["default"].createElement("div", {
        onMouseMove: this.handleMouseMoveThrottle,
        className: (0, _classnames["default"])('video-react-progress-control video-react-control', className)
      }, _react["default"].createElement(_SeekBar["default"], (0, _extends2["default"])({
        mouseTime: this.state.mouseTime,
        ref: function ref(c) {
          _this2.seekBar = c;
        }
      }, this.props)));
    }
  }]);
  return ProgressControl;
}(_react.Component);

exports["default"] = ProgressControl;
ProgressControl.propTypes = propTypes;
ProgressControl.displayName = 'ProgressControl';

/***/ }),

/***/ "./node_modules/video-react/lib/components/control-bar/ReplayControl.js":
/*!******************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/control-bar/ReplayControl.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _ForwardReplayControl = _interopRequireDefault(__webpack_require__(/*! ./ForwardReplayControl */ "./node_modules/video-react/lib/components/control-bar/ForwardReplayControl.js"));

// Pass mode into parent function
var ReplayControl = (0, _ForwardReplayControl["default"])('replay');
ReplayControl.displayName = 'ReplayControl';
var _default = ReplayControl;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/video-react/lib/components/control-bar/SeekBar.js":
/*!************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/control-bar/SeekBar.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Slider = _interopRequireDefault(__webpack_require__(/*! ../Slider */ "./node_modules/video-react/lib/components/Slider.js"));

var _PlayProgressBar = _interopRequireDefault(__webpack_require__(/*! ./PlayProgressBar */ "./node_modules/video-react/lib/components/control-bar/PlayProgressBar.js"));

var _LoadProgressBar = _interopRequireDefault(__webpack_require__(/*! ./LoadProgressBar */ "./node_modules/video-react/lib/components/control-bar/LoadProgressBar.js"));

var _MouseTimeDisplay = _interopRequireDefault(__webpack_require__(/*! ./MouseTimeDisplay */ "./node_modules/video-react/lib/components/control-bar/MouseTimeDisplay.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/video-react/lib/utils/index.js");

var propTypes = {
  player: _propTypes["default"].object,
  mouseTime: _propTypes["default"].object,
  actions: _propTypes["default"].object,
  className: _propTypes["default"].string
};

var SeekBar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(SeekBar, _Component);

  function SeekBar(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, SeekBar);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SeekBar).call(this, props, context));
    _this.getPercent = _this.getPercent.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getNewTime = _this.getNewTime.bind((0, _assertThisInitialized2["default"])(_this));
    _this.stepForward = _this.stepForward.bind((0, _assertThisInitialized2["default"])(_this));
    _this.stepBack = _this.stepBack.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseDown = _this.handleMouseDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseUp = _this.handleMouseUp.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(SeekBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
    /**
     * Get percentage of video played
     *
     * @return {Number} Percentage played
     * @method getPercent
     */

  }, {
    key: "getPercent",
    value: function getPercent() {
      var _this$props$player = this.props.player,
          currentTime = _this$props$player.currentTime,
          seekingTime = _this$props$player.seekingTime,
          duration = _this$props$player.duration;
      var time = seekingTime || currentTime;
      var percent = time / duration;
      return percent >= 1 ? 1 : percent;
    }
  }, {
    key: "getNewTime",
    value: function getNewTime(event) {
      var duration = this.props.player.duration;
      var distance = this.slider.calculateDistance(event);
      var newTime = distance * duration; // Don't let video end while scrubbing.

      return newTime === duration ? newTime - 0.1 : newTime;
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown() {}
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      var actions = this.props.actions;
      var newTime = this.getNewTime(event); // Set new time (tell video to seek to new time)

      actions.seek(newTime);
      actions.handleEndSeeking(newTime);
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      var actions = this.props.actions;
      var newTime = this.getNewTime(event);
      actions.handleSeekingTime(newTime);
    }
  }, {
    key: "stepForward",
    value: function stepForward() {
      var actions = this.props.actions;
      actions.forward(5);
    }
  }, {
    key: "stepBack",
    value: function stepBack() {
      var actions = this.props.actions;
      actions.replay(5);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$player2 = _this$props.player,
          currentTime = _this$props$player2.currentTime,
          seekingTime = _this$props$player2.seekingTime,
          duration = _this$props$player2.duration,
          buffered = _this$props$player2.buffered,
          mouseTime = _this$props.mouseTime;
      var time = seekingTime || currentTime;
      return _react["default"].createElement(_Slider["default"], {
        ref: function ref(input) {
          _this2.slider = input;
        },
        label: "video progress bar",
        className: (0, _classnames["default"])('video-react-progress-holder', this.props.className),
        valuenow: (this.getPercent() * 100).toFixed(2),
        valuetext: (0, _utils.formatTime)(time, duration),
        onMouseDown: this.handleMouseDown,
        onMouseMove: this.handleMouseMove,
        onMouseUp: this.handleMouseUp,
        getPercent: this.getPercent,
        stepForward: this.stepForward,
        stepBack: this.stepBack
      }, _react["default"].createElement(_LoadProgressBar["default"], {
        buffered: buffered,
        currentTime: time,
        duration: duration
      }), _react["default"].createElement(_MouseTimeDisplay["default"], {
        duration: duration,
        mouseTime: mouseTime
      }), _react["default"].createElement(_PlayProgressBar["default"], {
        currentTime: time,
        duration: duration
      }));
    }
  }]);
  return SeekBar;
}(_react.Component);

exports["default"] = SeekBar;
SeekBar.propTypes = propTypes;
SeekBar.displayName = 'SeekBar';

/***/ }),

/***/ "./node_modules/video-react/lib/components/control-bar/VolumeMenuButton.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/control-bar/VolumeMenuButton.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _PopupButton = _interopRequireDefault(__webpack_require__(/*! ../popup/PopupButton */ "./node_modules/video-react/lib/components/popup/PopupButton.js"));

var _VolumeBar = _interopRequireDefault(__webpack_require__(/*! ../volume-control/VolumeBar */ "./node_modules/video-react/lib/components/volume-control/VolumeBar.js"));

var propTypes = {
  player: _propTypes["default"].object,
  actions: _propTypes["default"].object,
  vertical: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  alwaysShowVolume: _propTypes["default"].bool
};
var defaultProps = {
  vertical: false
};

var VolumeMenuButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(VolumeMenuButton, _Component);

  function VolumeMenuButton(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, VolumeMenuButton);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(VolumeMenuButton).call(this, props, context));
    _this.state = {
      active: false
    };
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(VolumeMenuButton, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          player = _this$props.player,
          actions = _this$props.actions;
      actions.mute(!player.muted);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      this.setState({
        active: true
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.setState({
        active: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          vertical = _this$props2.vertical,
          player = _this$props2.player,
          className = _this$props2.className;
      var inline = !vertical;
      var level = this.volumeLevel;
      return _react["default"].createElement(_PopupButton["default"], {
        className: (0, _classnames["default"])(className, {
          'video-react-volume-menu-button-vertical': vertical,
          'video-react-volume-menu-button-horizontal': !vertical,
          'video-react-vol-muted': player.muted,
          'video-react-vol-0': level === 0 && !player.muted,
          'video-react-vol-1': level === 1,
          'video-react-vol-2': level === 2,
          'video-react-vol-3': level === 3,
          'video-react-slider-active': this.props.alwaysShowVolume || this.state.active,
          'video-react-lock-showing': this.props.alwaysShowVolume || this.state.active
        }, 'video-react-volume-menu-button'),
        onClick: this.handleClick,
        inline: inline
      }, _react["default"].createElement(_VolumeBar["default"], (0, _extends2["default"])({
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }, this.props)));
    }
  }, {
    key: "volumeLevel",
    get: function get() {
      var _this$props$player = this.props.player,
          volume = _this$props$player.volume,
          muted = _this$props$player.muted;
      var level = 3;

      if (volume === 0 || muted) {
        level = 0;
      } else if (volume < 0.33) {
        level = 1;
      } else if (volume < 0.67) {
        level = 2;
      }

      return level;
    }
  }]);
  return VolumeMenuButton;
}(_react.Component);

VolumeMenuButton.propTypes = propTypes;
VolumeMenuButton.defaultProps = defaultProps;
VolumeMenuButton.displayName = 'VolumeMenuButton';
var _default = VolumeMenuButton;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/video-react/lib/components/menu/Menu.js":
/*!**************************************************************!*\
  !*** ./node_modules/video-react/lib/components/menu/Menu.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var propTypes = {
  children: _propTypes["default"].any
};

var Menu =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Menu, _Component);

  function Menu(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Menu);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Menu).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Menu, [{
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault(); // event.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "video-react-menu video-react-lock-showing",
        role: "presentation",
        onClick: this.handleClick
      }, _react["default"].createElement("ul", {
        className: "video-react-menu-content"
      }, this.props.children));
    }
  }]);
  return Menu;
}(_react.Component);

exports["default"] = Menu;
Menu.propTypes = propTypes;
Menu.displayName = 'Menu';

/***/ }),

/***/ "./node_modules/video-react/lib/components/menu/MenuButton.js":
/*!********************************************************************!*\
  !*** ./node_modules/video-react/lib/components/menu/MenuButton.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Menu = _interopRequireDefault(__webpack_require__(/*! ./Menu */ "./node_modules/video-react/lib/components/menu/Menu.js"));

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! ./MenuItem */ "./node_modules/video-react/lib/components/menu/MenuItem.js"));

var _ClickableComponent = _interopRequireDefault(__webpack_require__(/*! ../ClickableComponent */ "./node_modules/video-react/lib/components/ClickableComponent.js"));

var propTypes = {
  inline: _propTypes["default"].bool,
  items: _propTypes["default"].array,
  className: _propTypes["default"].string,
  onSelectItem: _propTypes["default"].func,
  children: _propTypes["default"].any,
  selectedIndex: _propTypes["default"].number
};

var MenuButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(MenuButton, _Component);

  function MenuButton(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, MenuButton);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MenuButton).call(this, props, context));
    _this.state = {
      active: false,
      activateIndex: props.selectedIndex || 0
    };
    _this.commitSelection = _this.commitSelection.bind((0, _assertThisInitialized2["default"])(_this));
    _this.activateMenuItem = _this.activateMenuItem.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.renderMenu = _this.renderMenu.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleUpArrow = _this.handleUpArrow.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleDownArrow = _this.handleDownArrow.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleEscape = _this.handleEscape.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleReturn = _this.handleReturn.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleTab = _this.handleTab.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSelectItem = _this.handleSelectItem.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleIndexChange = _this.handleIndexChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(MenuButton, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.selectedIndex !== this.props.selectedIndex) {
        this.activateMenuItem(this.props.selectedIndex);
      }
    }
  }, {
    key: "commitSelection",
    value: function commitSelection(index) {
      this.setState({
        activateIndex: index
      });
      this.handleIndexChange(index);
    }
  }, {
    key: "activateMenuItem",
    value: function activateMenuItem(index) {
      this.setState({
        activateIndex: index
      });
      this.handleIndexChange(index);
    }
  }, {
    key: "handleIndexChange",
    value: function handleIndexChange(index) {
      var onSelectItem = this.props.onSelectItem;
      onSelectItem(index);
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.setState(function (prevState) {
        return {
          active: !prevState.active
        };
      });
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.setState({
        active: false
      });
      document.removeEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: "handleUpArrow",
    value: function handleUpArrow(e) {
      var items = this.props.items;

      if (this.state.active) {
        e.preventDefault();
        var newIndex = this.state.activateIndex - 1;

        if (newIndex < 0) {
          newIndex = items.length ? items.length - 1 : 0;
        }

        this.activateMenuItem(newIndex);
      }
    }
  }, {
    key: "handleDownArrow",
    value: function handleDownArrow(e) {
      var items = this.props.items;

      if (this.state.active) {
        e.preventDefault();
        var newIndex = this.state.activateIndex + 1;

        if (newIndex >= items.length) {
          newIndex = 0;
        }

        this.activateMenuItem(newIndex);
      }
    }
  }, {
    key: "handleTab",
    value: function handleTab(e) {
      if (this.state.active) {
        e.preventDefault();
        this.commitSelection(this.state.activateIndex);
      }
    }
  }, {
    key: "handleReturn",
    value: function handleReturn(e) {
      e.preventDefault();

      if (this.state.active) {
        this.commitSelection(this.state.activateIndex);
      } else {
        this.setState({
          active: true
        });
      }
    }
  }, {
    key: "handleEscape",
    value: function handleEscape() {
      this.setState({
        active: false,
        activateIndex: 0
      });
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      // Escape (27) key
      if (event.which === 27) {
        this.handleEscape(event);
      } else if (event.which === 9) {
        // Tab (9) key
        this.handleTab(event);
      } else if (event.which === 13) {
        // Enter (13) key
        this.handleReturn(event);
      } else if (event.which === 38) {
        // Up (38) key
        this.handleUpArrow(event);
      } else if (event.which === 40) {
        // Down (40) key press
        this.handleDownArrow(event);
      }
    }
  }, {
    key: "handleSelectItem",
    value: function handleSelectItem(i) {
      this.commitSelection(i);
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this2 = this;

      if (!this.state.active) {
        return null;
      }

      var items = this.props.items;
      return _react["default"].createElement(_Menu["default"], null, items.map(function (item, i) {
        return _react["default"].createElement(_MenuItem["default"], {
          item: item,
          index: i,
          onSelectItem: _this2.handleSelectItem,
          activateIndex: _this2.state.activateIndex,
          key: "item-".concat(i++)
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          inline = _this$props.inline,
          className = _this$props.className;
      return _react["default"].createElement(_ClickableComponent["default"], {
        className: (0, _classnames["default"])(className, {
          'video-react-menu-button-inline': !!inline,
          'video-react-menu-button-popup': !inline,
          'video-react-menu-button-active': this.state.active
        }, 'video-react-control video-react-button video-react-menu-button'),
        role: "button",
        tabIndex: "0",
        ref: function ref(c) {
          _this3.menuButton = c;
        },
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }, this.props.children, this.renderMenu());
    }
  }]);
  return MenuButton;
}(_react.Component);

exports["default"] = MenuButton;
MenuButton.propTypes = propTypes;
MenuButton.displayName = 'MenuButton';

/***/ }),

/***/ "./node_modules/video-react/lib/components/menu/MenuItem.js":
/*!******************************************************************!*\
  !*** ./node_modules/video-react/lib/components/menu/MenuItem.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var propTypes = {
  item: _propTypes["default"].object,
  index: _propTypes["default"].number,
  activateIndex: _propTypes["default"].number,
  onSelectItem: _propTypes["default"].func
};

var MenuItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(MenuItem, _Component);

  function MenuItem(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, MenuItem);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MenuItem).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(MenuItem, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          index = _this$props.index,
          onSelectItem = _this$props.onSelectItem;
      onSelectItem(index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          item = _this$props2.item,
          index = _this$props2.index,
          activateIndex = _this$props2.activateIndex;
      return _react["default"].createElement("li", {
        className: (0, _classnames["default"])({
          'video-react-menu-item': true,
          'video-react-selected': index === activateIndex
        }),
        role: "menuitem",
        onClick: this.handleClick
      }, item.label, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }));
    }
  }]);
  return MenuItem;
}(_react.Component);

exports["default"] = MenuItem;
MenuItem.propTypes = propTypes;
MenuItem.displayName = 'MenuItem';

/***/ }),

/***/ "./node_modules/video-react/lib/components/popup/Popup.js":
/*!****************************************************************!*\
  !*** ./node_modules/video-react/lib/components/popup/Popup.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var propTypes = {
  player: _propTypes["default"].object,
  children: _propTypes["default"].any
};

var Popup =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Popup, _Component);

  function Popup(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Popup);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Popup).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Popup, [{
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault(); // event.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react["default"].createElement("div", {
        className: "video-react-menu",
        onClick: this.handleClick
      }, _react["default"].createElement("div", {
        className: "video-react-menu-content"
      }, children));
    }
  }]);
  return Popup;
}(_react.Component);

exports["default"] = Popup;
Popup.propTypes = propTypes;
Popup.displayName = 'Popup';

/***/ }),

/***/ "./node_modules/video-react/lib/components/popup/PopupButton.js":
/*!**********************************************************************!*\
  !*** ./node_modules/video-react/lib/components/popup/PopupButton.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = PopupButton;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _ClickableComponent = _interopRequireDefault(__webpack_require__(/*! ../ClickableComponent */ "./node_modules/video-react/lib/components/ClickableComponent.js"));

var _Popup = _interopRequireDefault(__webpack_require__(/*! ./Popup */ "./node_modules/video-react/lib/components/popup/Popup.js"));

var propTypes = {
  inline: _propTypes["default"].bool,
  onClick: _propTypes["default"].func.isRequired,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  className: _propTypes["default"].string
};
var defaultProps = {
  inline: true
};

function PopupButton(props) {
  var inline = props.inline,
      className = props.className;
  var ps = (0, _objectSpread2["default"])({}, props);
  delete ps.children;
  delete ps.inline;
  delete ps.className;
  return _react["default"].createElement(_ClickableComponent["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])(className, {
      'video-react-menu-button-inline': !!inline,
      'video-react-menu-button-popup': !inline
    }, 'video-react-control video-react-button video-react-menu-button')
  }, ps), _react["default"].createElement(_Popup["default"], props));
}

PopupButton.propTypes = propTypes;
PopupButton.defaultProps = defaultProps;
PopupButton.displayName = 'PopupButton';

/***/ }),

/***/ "./node_modules/video-react/lib/components/time-controls/CurrentTimeDisplay.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/time-controls/CurrentTimeDisplay.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/video-react/lib/utils/index.js");

var propTypes = {
  player: _propTypes["default"].object,
  className: _propTypes["default"].string
};

function CurrentTimeDisplay(_ref) {
  var _ref$player = _ref.player,
      currentTime = _ref$player.currentTime,
      duration = _ref$player.duration,
      className = _ref.className;
  var formattedTime = (0, _utils.formatTime)(currentTime, duration);
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('video-react-current-time video-react-time-control video-react-control', className)
  }, _react["default"].createElement("div", {
    className: "video-react-current-time-display",
    "aria-live": "off"
  }, _react["default"].createElement("span", {
    className: "video-react-control-text"
  }, "Current Time "), formattedTime));
}

CurrentTimeDisplay.propTypes = propTypes;
CurrentTimeDisplay.displayName = 'CurrentTimeDisplay';
var _default = CurrentTimeDisplay;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/video-react/lib/components/time-controls/DurationDisplay.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/time-controls/DurationDisplay.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/video-react/lib/utils/index.js");

var propTypes = {
  player: _propTypes["default"].object,
  className: _propTypes["default"].string
};

function DurationDisplay(_ref) {
  var duration = _ref.player.duration,
      className = _ref.className;
  var formattedTime = (0, _utils.formatTime)(duration);
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])(className, 'video-react-duration video-react-time-control video-react-control')
  }, _react["default"].createElement("div", {
    className: "video-react-duration-display",
    "aria-live": "off"
  }, _react["default"].createElement("span", {
    className: "video-react-control-text"
  }, "Duration Time "), formattedTime));
}

DurationDisplay.propTypes = propTypes;
DurationDisplay.displayName = 'DurationDisplay';
var _default = DurationDisplay;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/video-react/lib/components/time-controls/RemainingTimeDisplay.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/time-controls/RemainingTimeDisplay.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/video-react/lib/utils/index.js");

var propTypes = {
  player: _propTypes["default"].object,
  className: _propTypes["default"].string
};

function RemainingTimeDisplay(_ref) {
  var _ref$player = _ref.player,
      currentTime = _ref$player.currentTime,
      duration = _ref$player.duration,
      className = _ref.className;
  var remainingTime = duration - currentTime;
  var formattedTime = (0, _utils.formatTime)(remainingTime);
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('video-react-remaining-time video-react-time-control video-react-control', className)
  }, _react["default"].createElement("div", {
    className: "video-react-remaining-time-display",
    "aria-live": "off"
  }, _react["default"].createElement("span", {
    className: "video-react-control-text"
  }, "Remaining Time "), "-".concat(formattedTime)));
}

RemainingTimeDisplay.propTypes = propTypes;
RemainingTimeDisplay.displayName = 'RemainingTimeDisplay';
var _default = RemainingTimeDisplay;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/video-react/lib/components/time-controls/TimeDivider.js":
/*!******************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/time-controls/TimeDivider.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = TimeDivider;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var propTypes = {
  separator: _propTypes["default"].string,
  className: _propTypes["default"].string
};

function TimeDivider(_ref) {
  var separator = _ref.separator,
      className = _ref.className;
  var separatorText = separator || '/';
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('video-react-time-control video-react-time-divider', className),
    dir: "ltr"
  }, _react["default"].createElement("div", null, _react["default"].createElement("span", null, separatorText)));
}

TimeDivider.propTypes = propTypes;
TimeDivider.displayName = 'TimeDivider';

/***/ }),

/***/ "./node_modules/video-react/lib/components/volume-control/VolumeBar.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/volume-control/VolumeBar.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Slider = _interopRequireDefault(__webpack_require__(/*! ../Slider */ "./node_modules/video-react/lib/components/Slider.js"));

var _VolumeLevel = _interopRequireDefault(__webpack_require__(/*! ./VolumeLevel */ "./node_modules/video-react/lib/components/volume-control/VolumeLevel.js"));

var propTypes = {
  actions: _propTypes["default"].object,
  player: _propTypes["default"].object,
  className: _propTypes["default"].string,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func
};

var VolumeBar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(VolumeBar, _Component);

  function VolumeBar(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, VolumeBar);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(VolumeBar).call(this, props, context));
    _this.state = {
      percentage: '0%'
    };
    _this.handleMouseMove = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handlePercentageChange = _this.handlePercentageChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.checkMuted = _this.checkMuted.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getPercent = _this.getPercent.bind((0, _assertThisInitialized2["default"])(_this));
    _this.stepForward = _this.stepForward.bind((0, _assertThisInitialized2["default"])(_this));
    _this.stepBack = _this.stepBack.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(VolumeBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "getPercent",
    value: function getPercent() {
      var player = this.props.player;

      if (player.muted) {
        return 0;
      }

      return player.volume;
    }
  }, {
    key: "checkMuted",
    value: function checkMuted() {
      var _this$props = this.props,
          player = _this$props.player,
          actions = _this$props.actions;

      if (player.muted) {
        actions.mute(false);
      }
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      var actions = this.props.actions;
      this.checkMuted();
      var distance = this.slider.calculateDistance(event);
      actions.changeVolume(distance);
    }
  }, {
    key: "stepForward",
    value: function stepForward() {
      var _this$props2 = this.props,
          player = _this$props2.player,
          actions = _this$props2.actions;
      this.checkMuted();
      actions.changeVolume(player.volume + 0.1);
    }
  }, {
    key: "stepBack",
    value: function stepBack() {
      var _this$props3 = this.props,
          player = _this$props3.player,
          actions = _this$props3.actions;
      this.checkMuted();
      actions.changeVolume(player.volume - 0.1);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: "handlePercentageChange",
    value: function handlePercentageChange(percentage) {
      if (percentage !== this.state.percentage) {
        this.setState({
          percentage: percentage
        });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      event.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          player = _this$props4.player,
          className = _this$props4.className;
      var volume = (player.volume * 100).toFixed(2);
      return _react["default"].createElement(_Slider["default"], (0, _extends2["default"])({
        ref: function ref(c) {
          _this2.slider = c;
        },
        label: "volume level",
        valuenow: volume,
        valuetext: "".concat(volume, "%"),
        onMouseMove: this.handleMouseMove,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        sliderActive: this.handleFocus,
        sliderInactive: this.handleBlur,
        getPercent: this.getPercent,
        onPercentageChange: this.handlePercentageChange,
        stepForward: this.stepForward,
        stepBack: this.stepBack
      }, this.props, {
        className: (0, _classnames["default"])(className, 'video-react-volume-bar video-react-slider-bar')
      }), _react["default"].createElement(_VolumeLevel["default"], this.props));
    }
  }]);
  return VolumeBar;
}(_react.Component);

VolumeBar.propTypes = propTypes;
VolumeBar.displayName = 'VolumeBar';
var _default = VolumeBar;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/video-react/lib/components/volume-control/VolumeLevel.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/video-react/lib/components/volume-control/VolumeLevel.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var propTypes = {
  percentage: _propTypes["default"].string,
  vertical: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
var defaultProps = {
  percentage: '100%',
  vertical: false
};

function VolumeLevel(_ref) {
  var percentage = _ref.percentage,
      vertical = _ref.vertical,
      className = _ref.className;
  var style = {};

  if (vertical) {
    style.height = percentage;
  } else {
    style.width = percentage;
  }

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])(className, 'video-react-volume-level'),
    style: style
  }, _react["default"].createElement("span", {
    className: "video-react-control-text"
  }));
}

VolumeLevel.propTypes = propTypes;
VolumeLevel.defaultProps = defaultProps;
VolumeLevel.displayName = 'VolumeLevel';
var _default = VolumeLevel;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/video-react/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/video-react/lib/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Player", ({
  enumerable: true,
  get: function get() {
    return _Player["default"];
  }
}));
Object.defineProperty(exports, "Video", ({
  enumerable: true,
  get: function get() {
    return _Video["default"];
  }
}));
Object.defineProperty(exports, "BigPlayButton", ({
  enumerable: true,
  get: function get() {
    return _BigPlayButton["default"];
  }
}));
Object.defineProperty(exports, "LoadingSpinner", ({
  enumerable: true,
  get: function get() {
    return _LoadingSpinner["default"];
  }
}));
Object.defineProperty(exports, "PosterImage", ({
  enumerable: true,
  get: function get() {
    return _PosterImage["default"];
  }
}));
Object.defineProperty(exports, "Slider", ({
  enumerable: true,
  get: function get() {
    return _Slider["default"];
  }
}));
Object.defineProperty(exports, "Bezel", ({
  enumerable: true,
  get: function get() {
    return _Bezel["default"];
  }
}));
Object.defineProperty(exports, "Shortcut", ({
  enumerable: true,
  get: function get() {
    return _Shortcut["default"];
  }
}));
Object.defineProperty(exports, "ControlBar", ({
  enumerable: true,
  get: function get() {
    return _ControlBar["default"];
  }
}));
Object.defineProperty(exports, "PlayToggle", ({
  enumerable: true,
  get: function get() {
    return _PlayToggle["default"];
  }
}));
Object.defineProperty(exports, "ForwardControl", ({
  enumerable: true,
  get: function get() {
    return _ForwardControl["default"];
  }
}));
Object.defineProperty(exports, "ReplayControl", ({
  enumerable: true,
  get: function get() {
    return _ReplayControl["default"];
  }
}));
Object.defineProperty(exports, "FullscreenToggle", ({
  enumerable: true,
  get: function get() {
    return _FullscreenToggle["default"];
  }
}));
Object.defineProperty(exports, "ProgressControl", ({
  enumerable: true,
  get: function get() {
    return _ProgressControl["default"];
  }
}));
Object.defineProperty(exports, "SeekBar", ({
  enumerable: true,
  get: function get() {
    return _SeekBar["default"];
  }
}));
Object.defineProperty(exports, "PlayProgressBar", ({
  enumerable: true,
  get: function get() {
    return _PlayProgressBar["default"];
  }
}));
Object.defineProperty(exports, "LoadProgressBar", ({
  enumerable: true,
  get: function get() {
    return _LoadProgressBar["default"];
  }
}));
Object.defineProperty(exports, "MouseTimeDisplay", ({
  enumerable: true,
  get: function get() {
    return _MouseTimeDisplay["default"];
  }
}));
Object.defineProperty(exports, "VolumeMenuButton", ({
  enumerable: true,
  get: function get() {
    return _VolumeMenuButton["default"];
  }
}));
Object.defineProperty(exports, "PlaybackRateMenuButton", ({
  enumerable: true,
  get: function get() {
    return _PlaybackRateMenuButton["default"];
  }
}));
Object.defineProperty(exports, "PlaybackRate", ({
  enumerable: true,
  get: function get() {
    return _PlaybackRate["default"];
  }
}));
Object.defineProperty(exports, "ClosedCaptionButton", ({
  enumerable: true,
  get: function get() {
    return _ClosedCaptionButton["default"];
  }
}));
Object.defineProperty(exports, "RemainingTimeDisplay", ({
  enumerable: true,
  get: function get() {
    return _RemainingTimeDisplay["default"];
  }
}));
Object.defineProperty(exports, "CurrentTimeDisplay", ({
  enumerable: true,
  get: function get() {
    return _CurrentTimeDisplay["default"];
  }
}));
Object.defineProperty(exports, "DurationDisplay", ({
  enumerable: true,
  get: function get() {
    return _DurationDisplay["default"];
  }
}));
Object.defineProperty(exports, "TimeDivider", ({
  enumerable: true,
  get: function get() {
    return _TimeDivider["default"];
  }
}));
Object.defineProperty(exports, "MenuButton", ({
  enumerable: true,
  get: function get() {
    return _MenuButton["default"];
  }
}));
Object.defineProperty(exports, "playerReducer", ({
  enumerable: true,
  get: function get() {
    return _reducers.playerReducer;
  }
}));
Object.defineProperty(exports, "operationReducer", ({
  enumerable: true,
  get: function get() {
    return _reducers.operationReducer;
  }
}));
exports.videoActions = exports.playerActions = void 0;

var _Player = _interopRequireDefault(__webpack_require__(/*! ./components/Player */ "./node_modules/video-react/lib/components/Player.js"));

var _Video = _interopRequireDefault(__webpack_require__(/*! ./components/Video */ "./node_modules/video-react/lib/components/Video.js"));

var _BigPlayButton = _interopRequireDefault(__webpack_require__(/*! ./components/BigPlayButton */ "./node_modules/video-react/lib/components/BigPlayButton.js"));

var _LoadingSpinner = _interopRequireDefault(__webpack_require__(/*! ./components/LoadingSpinner */ "./node_modules/video-react/lib/components/LoadingSpinner.js"));

var _PosterImage = _interopRequireDefault(__webpack_require__(/*! ./components/PosterImage */ "./node_modules/video-react/lib/components/PosterImage.js"));

var _Slider = _interopRequireDefault(__webpack_require__(/*! ./components/Slider */ "./node_modules/video-react/lib/components/Slider.js"));

var _Bezel = _interopRequireDefault(__webpack_require__(/*! ./components/Bezel */ "./node_modules/video-react/lib/components/Bezel.js"));

var _Shortcut = _interopRequireDefault(__webpack_require__(/*! ./components/Shortcut */ "./node_modules/video-react/lib/components/Shortcut.js"));

var _ControlBar = _interopRequireDefault(__webpack_require__(/*! ./components/control-bar/ControlBar */ "./node_modules/video-react/lib/components/control-bar/ControlBar.js"));

var _PlayToggle = _interopRequireDefault(__webpack_require__(/*! ./components/control-bar/PlayToggle */ "./node_modules/video-react/lib/components/control-bar/PlayToggle.js"));

var _ForwardControl = _interopRequireDefault(__webpack_require__(/*! ./components/control-bar/ForwardControl */ "./node_modules/video-react/lib/components/control-bar/ForwardControl.js"));

var _ReplayControl = _interopRequireDefault(__webpack_require__(/*! ./components/control-bar/ReplayControl */ "./node_modules/video-react/lib/components/control-bar/ReplayControl.js"));

var _FullscreenToggle = _interopRequireDefault(__webpack_require__(/*! ./components/control-bar/FullscreenToggle */ "./node_modules/video-react/lib/components/control-bar/FullscreenToggle.js"));

var _ProgressControl = _interopRequireDefault(__webpack_require__(/*! ./components/control-bar/ProgressControl */ "./node_modules/video-react/lib/components/control-bar/ProgressControl.js"));

var _SeekBar = _interopRequireDefault(__webpack_require__(/*! ./components/control-bar/SeekBar */ "./node_modules/video-react/lib/components/control-bar/SeekBar.js"));

var _PlayProgressBar = _interopRequireDefault(__webpack_require__(/*! ./components/control-bar/PlayProgressBar */ "./node_modules/video-react/lib/components/control-bar/PlayProgressBar.js"));

var _LoadProgressBar = _interopRequireDefault(__webpack_require__(/*! ./components/control-bar/LoadProgressBar */ "./node_modules/video-react/lib/components/control-bar/LoadProgressBar.js"));

var _MouseTimeDisplay = _interopRequireDefault(__webpack_require__(/*! ./components/control-bar/MouseTimeDisplay */ "./node_modules/video-react/lib/components/control-bar/MouseTimeDisplay.js"));

var _VolumeMenuButton = _interopRequireDefault(__webpack_require__(/*! ./components/control-bar/VolumeMenuButton */ "./node_modules/video-react/lib/components/control-bar/VolumeMenuButton.js"));

var _PlaybackRateMenuButton = _interopRequireDefault(__webpack_require__(/*! ./components/control-bar/PlaybackRateMenuButton */ "./node_modules/video-react/lib/components/control-bar/PlaybackRateMenuButton.js"));

var _PlaybackRate = _interopRequireDefault(__webpack_require__(/*! ./components/control-bar/PlaybackRate */ "./node_modules/video-react/lib/components/control-bar/PlaybackRate.js"));

var _ClosedCaptionButton = _interopRequireDefault(__webpack_require__(/*! ./components/control-bar/ClosedCaptionButton */ "./node_modules/video-react/lib/components/control-bar/ClosedCaptionButton.js"));

var _RemainingTimeDisplay = _interopRequireDefault(__webpack_require__(/*! ./components/time-controls/RemainingTimeDisplay */ "./node_modules/video-react/lib/components/time-controls/RemainingTimeDisplay.js"));

var _CurrentTimeDisplay = _interopRequireDefault(__webpack_require__(/*! ./components/time-controls/CurrentTimeDisplay */ "./node_modules/video-react/lib/components/time-controls/CurrentTimeDisplay.js"));

var _DurationDisplay = _interopRequireDefault(__webpack_require__(/*! ./components/time-controls/DurationDisplay */ "./node_modules/video-react/lib/components/time-controls/DurationDisplay.js"));

var _TimeDivider = _interopRequireDefault(__webpack_require__(/*! ./components/time-controls/TimeDivider */ "./node_modules/video-react/lib/components/time-controls/TimeDivider.js"));

var _MenuButton = _interopRequireDefault(__webpack_require__(/*! ./components/menu/MenuButton */ "./node_modules/video-react/lib/components/menu/MenuButton.js"));

var playerActions = _interopRequireWildcard(__webpack_require__(/*! ./actions/player */ "./node_modules/video-react/lib/actions/player.js"));

exports.playerActions = playerActions;

var videoActions = _interopRequireWildcard(__webpack_require__(/*! ./actions/video */ "./node_modules/video-react/lib/actions/video.js"));

exports.videoActions = videoActions;

var _reducers = __webpack_require__(/*! ./reducers */ "./node_modules/video-react/lib/reducers/index.js");

/***/ }),

/***/ "./node_modules/video-react/lib/reducers/index.js":
/*!********************************************************!*\
  !*** ./node_modules/video-react/lib/reducers/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
exports.operationReducer = exports.playerReducer = void 0;

var _player = _interopRequireDefault(__webpack_require__(/*! ./player */ "./node_modules/video-react/lib/reducers/player.js"));

var _operation = _interopRequireDefault(__webpack_require__(/*! ./operation */ "./node_modules/video-react/lib/reducers/operation.js"));

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return {
    player: (0, _player["default"])(state.player, action),
    operation: (0, _operation["default"])(state.operation, action)
  };
}

var playerReducer = _player["default"];
exports.playerReducer = playerReducer;
var operationReducer = _operation["default"];
exports.operationReducer = operationReducer;

/***/ }),

/***/ "./node_modules/video-react/lib/reducers/operation.js":
/*!************************************************************!*\
  !*** ./node_modules/video-react/lib/reducers/operation.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = operation;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _player = __webpack_require__(/*! ../actions/player */ "./node_modules/video-react/lib/actions/player.js");

var initialState = {
  count: 0,
  operation: {
    action: '',
    source: ''
  }
};

function operation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _player.OPERATE:
      return (0, _objectSpread2["default"])({}, state, {
        count: state.count + 1,
        operation: (0, _objectSpread2["default"])({}, state.operation, action.operation)
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./node_modules/video-react/lib/reducers/player.js":
/*!*********************************************************!*\
  !*** ./node_modules/video-react/lib/reducers/player.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = player;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _video = __webpack_require__(/*! ../actions/video */ "./node_modules/video-react/lib/actions/video.js");

var _player = __webpack_require__(/*! ../actions/player */ "./node_modules/video-react/lib/actions/player.js");

var initialState = {
  currentSrc: null,
  duration: 0,
  currentTime: 0,
  seekingTime: 0,
  buffered: null,
  waiting: false,
  seeking: false,
  paused: true,
  autoPaused: false,
  ended: false,
  playbackRate: 1,
  muted: false,
  volume: 1,
  readyState: 0,
  networkState: 0,
  videoWidth: 0,
  videoHeight: 0,
  hasStarted: false,
  userActivity: true,
  isActive: false,
  isFullscreen: false,
  activeTextTrack: null
};

function player() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _player.USER_ACTIVATE:
      return (0, _objectSpread2["default"])({}, state, {
        userActivity: action.activity
      });

    case _player.PLAYER_ACTIVATE:
      return (0, _objectSpread2["default"])({}, state, {
        isActive: action.activity
      });

    case _player.FULLSCREEN_CHANGE:
      return (0, _objectSpread2["default"])({}, state, {
        isFullscreen: !!action.isFullscreen
      });

    case _video.SEEKING_TIME:
      return (0, _objectSpread2["default"])({}, state, {
        seekingTime: action.time
      });

    case _video.END_SEEKING:
      return (0, _objectSpread2["default"])({}, state, {
        seekingTime: 0
      });

    case _video.LOAD_START:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        hasStarted: false,
        ended: false
      });

    case _video.CAN_PLAY:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        waiting: false
      });

    case _video.WAITING:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        waiting: true
      });

    case _video.CAN_PLAY_THROUGH:
    case _video.PLAYING:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        waiting: false
      });

    case _video.PLAY:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        ended: false,
        paused: false,
        autoPaused: false,
        waiting: false,
        hasStarted: true
      });

    case _video.PAUSE:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        paused: true
      });

    case _video.END:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        ended: true
      });

    case _video.SEEKING:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        seeking: true
      });

    case _video.SEEKED:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        seeking: false
      });

    case _video.ERROR:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        error: 'UNKNOWN ERROR',
        ended: true
      });

    case _video.DURATION_CHANGE:
    case _video.TIME_UPDATE:
    case _video.VOLUME_CHANGE:
    case _video.PROGRESS_CHANGE:
    case _video.RATE_CHANGE:
    case _video.SUSPEND:
    case _video.ABORT:
    case _video.EMPTIED:
    case _video.STALLED:
    case _video.LOADED_META_DATA:
    case _video.LOADED_DATA:
    case _video.RESIZE:
      return (0, _objectSpread2["default"])({}, state, action.videoProps);

    case _video.ACTIVATE_TEXT_TRACK:
      return (0, _objectSpread2["default"])({}, state, {
        activeTextTrack: action.textTrack
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./node_modules/video-react/lib/utils/browser.js":
/*!*******************************************************!*\
  !*** ./node_modules/video-react/lib/utils/browser.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.IS_IOS = exports.IS_IPOD = exports.IS_IPHONE = exports.IS_IPAD = void 0;
var USER_AGENT = typeof window !== 'undefined' && window.navigator ? window.navigator.userAgent : ''; // const webkitVersionMap = (/AppleWebKit\/([\d.]+)/i).exec(USER_AGENT);
// const appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;

/*
 * Device is an iPhone
 *
 * @type {Boolean}
 * @constant
 * @private
 */

var IS_IPAD = /iPad/i.test(USER_AGENT); // The Facebook app's UIWebView identifies as both an iPhone and iPad, so
// to identify iPhones, we need to exclude iPads.
// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/

exports.IS_IPAD = IS_IPAD;
var IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
exports.IS_IPHONE = IS_IPHONE;
var IS_IPOD = /iPod/i.test(USER_AGENT);
exports.IS_IPOD = IS_IPOD;
var IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;
exports.IS_IOS = IS_IOS;

/***/ }),

/***/ "./node_modules/video-react/lib/utils/dom.js":
/*!***************************************************!*\
  !*** ./node_modules/video-react/lib/utils/dom.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.findElPosition = findElPosition;
exports.getPointerPosition = getPointerPosition;
exports.blurNode = blurNode;
exports.focusNode = focusNode;
exports.hasClass = hasClass;

/**
 * Offset Left
 * getBoundingClientRect technique from
 * John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
 *
 * @function findElPosition
 * @param {ReactNodeRef} el React Node ref from which to get offset
 * @return {Object}
 */
function findElPosition(el) {
  var box;

  if (el.getBoundingClientRect && el.parentNode) {
    box = el.getBoundingClientRect();
  }

  if (!box) {
    return {
      left: 0,
      top: 0
    };
  }

  var _document = document,
      body = _document.body,
      docEl = _document.documentElement;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var scrollLeft = window.pageXOffset || body.scrollLeft;
  var left = box.left + scrollLeft - clientLeft;
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var scrollTop = window.pageYOffset || body.scrollTop;
  var top = box.top + scrollTop - clientTop; // Android sometimes returns slightly off decimal values, so need to round

  return {
    left: Math.round(left),
    top: Math.round(top)
  };
}
/**
 * Get pointer position in a React Node ref
 * Returns an object with x and y coordinates.
 * The base on the coordinates are the bottom left of the element.
 *
 * @function getPointerPosition
 * @param {ReactNodeRef} el React Node ref on which to get the pointer position on
 * @param {Event} event Event object
 * @return {Object} This object will have x and y coordinates corresponding to the mouse position
 */


function getPointerPosition(el, event) {
  var position = {};
  var box = findElPosition(el);
  var boxW = el.offsetWidth;
  var boxH = el.offsetHeight;
  var boxY = box.top;
  var boxX = box.left;
  var evtPageY = event.pageY;
  var evtPageX = event.pageX;

  if (event.changedTouches) {
    evtPageX = event.changedTouches[0].pageX;
    evtPageY = event.changedTouches[0].pageY;
  }

  position.y = Math.max(0, Math.min(1, (boxY - evtPageY + boxH) / boxH));
  position.x = Math.max(0, Math.min(1, (evtPageX - boxX) / boxW));
  return position;
} // blur an element


function blurNode(reactNode) {
  if (reactNode && reactNode.blur) {
    reactNode.blur();
  }
} // focus an element


function focusNode(reactNode) {
  if (reactNode && reactNode.focus) {
    reactNode.focus();
  }
} // check if an element has a class name


function hasClass(elm, cls) {
  var classes = elm.className.split(' ');

  for (var i = 0; i < classes.length; i++) {
    if (classes[i].toLowerCase() === cls.toLowerCase()) {
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "./node_modules/video-react/lib/utils/fullscreen.js":
/*!**********************************************************!*\
  !*** ./node_modules/video-react/lib/utils/fullscreen.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var Fullscreen =
/*#__PURE__*/
function () {
  function Fullscreen() {
    (0, _classCallCheck2["default"])(this, Fullscreen);
  }

  (0, _createClass2["default"])(Fullscreen, [{
    key: "request",
    value: function request(elm) {
      if (elm.requestFullscreen) {
        elm.requestFullscreen();
      } else if (elm.webkitRequestFullscreen) {
        elm.webkitRequestFullscreen();
      } else if (elm.mozRequestFullScreen) {
        elm.mozRequestFullScreen();
      } else if (elm.msRequestFullscreen) {
        elm.msRequestFullscreen();
      }
    }
  }, {
    key: "exit",
    value: function exit() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(handler) {
      document.addEventListener('fullscreenchange', handler);
      document.addEventListener('webkitfullscreenchange', handler);
      document.addEventListener('mozfullscreenchange', handler);
      document.addEventListener('MSFullscreenChange', handler);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(handler) {
      document.removeEventListener('fullscreenchange', handler);
      document.removeEventListener('webkitfullscreenchange', handler);
      document.removeEventListener('mozfullscreenchange', handler);
      document.removeEventListener('MSFullscreenChange', handler);
    }
  }, {
    key: "isFullscreen",
    get: function get() {
      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    }
  }, {
    key: "enabled",
    get: function get() {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
    }
  }]);
  return Fullscreen;
}();

var _default = new Fullscreen();

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/video-react/lib/utils/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/video-react/lib/utils/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.formatTime = formatTime;
exports.isVideoChild = isVideoChild;
exports.mergeAndSortChildren = mergeAndSortChildren;
exports.deprecatedWarning = deprecatedWarning;
exports.throttle = throttle;
exports.mediaProperties = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

// NaN is the only value in javascript which is not equal to itself.
// eslint-disable-next-line no-self-compare
var isNaN = Number.isNaN || function (value) {
  return value !== value;
};
/**
 * @file format-time.js
 *
 * Format seconds as a time string, H:MM:SS or M:SS
 * Supplying a guide (in seconds) will force a number of leading zeros
 * to cover the length of the guide
 *
 * @param  {Number} seconds Number of seconds to be turned into a string
 * @param  {Number} guide   Number (in seconds) to model the string after
 * @return {String}         Time formatted as H:MM:SS or M:SS
 * @private
 * @function formatTime
 */


function formatTime() {
  var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var guide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : seconds;
  var s = Math.floor(seconds % 60);
  var m = Math.floor(seconds / 60 % 60);
  var h = Math.floor(seconds / 3600);
  var gm = Math.floor(guide / 60 % 60);
  var gh = Math.floor(guide / 3600); // handle invalid times

  if (isNaN(seconds) || seconds === Infinity) {
    // '-' is false for all relational operators (e.g. <, >=) so this setting
    // will add the minimum number of fields specified by the guide
    h = '-';
    m = '-';
    s = '-';
  } // Check if we need to show hours


  h = h > 0 || gh > 0 ? "".concat(h, ":") : ''; // If hours are showing, we may need to add a leading zero.
  // Always show at least one digit of minutes.

  m = "".concat((h || gm >= 10) && m < 10 ? "0".concat(m) : m, ":"); // Check if leading zero is need for seconds

  s = s < 10 ? "0".concat(s) : s;
  return h + m + s;
} // Check if the element belongs to a video element
// only accept <source />, <track />,
// <MyComponent isVideoChild />
// elements


function isVideoChild(c) {
  if (c.props && c.props.isVideoChild) {
    return true;
  }

  return c.type === 'source' || c.type === 'track';
}

var find = function find(elements, func) {
  return elements.filter(func)[0];
}; // check if two components are the same type


var isTypeEqual = function isTypeEqual(component1, component2) {
  var type1 = component1.type;
  var type2 = component2.type;

  if (typeof type1 === 'string' || typeof type2 === 'string') {
    return type1 === type2;
  }

  if (typeof type1 === 'function' && typeof type2 === 'function') {
    return type1.displayName === type2.displayName;
  }

  return false;
}; // merge default children
// sort them by `order` property
// filter them by `disabled` property


function mergeAndSortChildren(defaultChildren, _children, _parentProps) {
  var defaultOrder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  var children = _react["default"].Children.toArray(_children);

  var order = _parentProps.order,
      parentProps = (0, _objectWithoutProperties2["default"])(_parentProps, ["order"]); // ignore order from parent

  return children.filter(function (e) {
    return !e.props.disabled;
  }) // filter the disabled components
  .concat(defaultChildren.filter(function (c) {
    return !find(children, function (component) {
      return isTypeEqual(component, c);
    });
  })).map(function (element) {
    var defaultComponent = find(defaultChildren, function (c) {
      return isTypeEqual(c, element);
    });
    var defaultProps = defaultComponent ? defaultComponent.props : {};
    var props = (0, _objectSpread2["default"])({}, parentProps, defaultProps, element.props);

    var e = _react["default"].cloneElement(element, props, element.props.children);

    return e;
  }).sort(function (a, b) {
    return (a.props.order || defaultOrder) - (b.props.order || defaultOrder);
  });
}
/**
 * Temporary utility for generating the warnings
 */


function deprecatedWarning(oldMethodCall, newMethodCall) {
  // eslint-disable-next-line no-console
  console.warn("WARNING: ".concat(oldMethodCall, " will be deprecated soon! Please use ").concat(newMethodCall, " instead."));
}

function throttle(callback, limit) {
  var _arguments = arguments;
  var wait = false;
  return function () {
    if (!wait) {
      // eslint-disable-next-line prefer-rest-params
      callback.apply(void 0, (0, _toConsumableArray2["default"])(_arguments));
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}

var mediaProperties = ['error', 'src', 'srcObject', 'currentSrc', 'crossOrigin', 'networkState', 'preload', 'buffered', 'readyState', 'seeking', 'currentTime', 'duration', 'paused', 'defaultPlaybackRate', 'playbackRate', 'played', 'seekable', 'ended', 'autoplay', 'loop', 'mediaGroup', 'controller', 'controls', 'volume', 'muted', 'defaultMuted', 'audioTracks', 'videoTracks', 'textTracks', 'width', 'height', 'videoWidth', 'videoHeight', 'poster'];
exports.mediaProperties = mediaProperties;

/***/ }),

/***/ "./node_modules/html-react-parser/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/html-react-parser/index.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "attributesToProps": () => (/* binding */ attributesToProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "domToReact": () => (/* binding */ domToReact),
/* harmony export */   "htmlToDOM": () => (/* binding */ htmlToDOM)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/html-react-parser/index.js");


var domToReact = _index_js__WEBPACK_IMPORTED_MODULE_0__.domToReact;
var htmlToDOM = _index_js__WEBPACK_IMPORTED_MODULE_0__.htmlToDOM;
var attributesToProps = _index_js__WEBPACK_IMPORTED_MODULE_0__.attributesToProps;
var Element = _index_js__WEBPACK_IMPORTED_MODULE_0__.Element;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

}]);