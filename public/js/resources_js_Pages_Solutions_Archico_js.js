(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Solutions_Archico_js"],{

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

/***/ "./resources/js/Pages/Solutions/Archico.js":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Solutions/Archico.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _node_modules_video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/video-react/dist/video-react.css */ "./node_modules/video-react/dist/video-react.css");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! video-react */ "./node_modules/video-react/lib/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _Components_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/PageHeader */ "./resources/js/Components/PageHeader.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var Archico = function Archico() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Archico",
      subtitle: "Les organisations modernes savent que la gestion du risque et conformit\xE9"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        mx: "auto",
        my: 3,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          color: "error",
          variant: "h3",
          textAlign: "center",
          children: "Archico"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: "Num\xE9riser et archiver vos informations, permet de s\u2019assurer d\u2019avoir une m\xE9moire organisationnelle en cas de sinistre (feu, inondation, ouragan, tremblement de terre, etc.) et aussi s\u2019assurer de la continuit\xE9 des affaires."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        justifyContent: "center",
        width: "100%",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
          mx: "auto",
          width: 600,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(video_react__WEBPACK_IMPORTED_MODULE_2__.Player, {
            playsInline: true,
            poster: "/assets/poster.png"
            /*  src="https://www.youtube.com/watch?v=EZ5rn_tQ5hk"*/
            ,
            src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
        container: true,
        spacing: 2,
        my: 5,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: true,
          xs: 12,
          sm: 6,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
            sx: {
              color: "red"
            },
            variant: "h4",
            textAlign: "left",
            fontSize: 20,
            fontFamily: "Inter",
            children: "Vos besoins"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
            textAlign: "left",
            fontSize: 14,
            fontFamily: "Inter-Regular",
            children: "Les organisations modernes savent que la gestion du risque et conformit\xE9 (lorsqu\u2019applicable) font partie de la gouvernance de l\u2019organisation. Pour s\u2019assurer la continuit\xE9 des affaires en cas de sinistre, les organisations doivent \xE9tablir \xE0 un plan de rel\xE8ve qui int\xE8gre l\u2019archivage de leurs donn\xE9es en tenant compte de leur RPO (objectifs de points de reprise) et de leur RTO (objectifs de temps de reprise)."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: true,
          xs: 12,
          sm: 6,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
            sx: {
              color: "red"
            },
            variant: "h4",
            textAlign: "left",
            fontSize: 20,
            fontFamily: "Inter",
            children: "Notre solution"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
            textAlign: "left",
            fontSize: 14,
            fontFamily: "Inter-Regular",
            children: "1SIMPLE1 offre des solutions d\u2019archivage et de continuit\xE9s pour aider \xE0 continuer vos affaires/ op\xE9rations, peu importe la mat\xE9rialisation des risques que votre entreprise puisse faire face."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "class": "w-6 h-6 text-blue-500",
                viewBox: "0 0 20 20",
                fill: "red",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  "fill-rule": "evenodd",
                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                  "clip-rule": "evenodd"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                textAlign: "left",
                ml: 1,
                fontSize: 14,
                fontFamily: "Inter-Regular",
                children: "L\u2019\xE9tablissement du profil de risques de votre organisation;"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
              sx: {
                mt: -2
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "class": "w-6 h-6 text-blue-500",
                viewBox: "0 0 20 20",
                fill: "red",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  "fill-rule": "evenodd",
                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                  "clip-rule": "evenodd"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                textAlign: "left",
                ml: 1,
                fontSize: 14,
                fontFamily: "Inter-Regular",
                children: "BIA \u2013 Analyse d\u2019impacts organisationnels;"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
              sx: {
                mt: -2
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "class": "w-6 h-6 text-blue-500",
                viewBox: "0 0 20 20",
                fill: "red",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  "fill-rule": "evenodd",
                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                  "clip-rule": "evenodd"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                textAlign: "left",
                ml: 1,
                fontSize: 14,
                fontFamily: "Inter-Regular",
                children: "Plan d\u2019archivage"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
              sx: {
                mt: -2
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "class": "w-6 h-6 text-blue-500",
                viewBox: "0 0 20 20",
                fill: "red",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  "fill-rule": "evenodd",
                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                  "clip-rule": "evenodd"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                textAlign: "left",
                ml: 1,
                fontSize: 14,
                fontFamily: "Inter-Regular",
                children: "Plan de gestion int\xE9gr\xE9e de vos donn\xE9es (GDI);"
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
        container: true,
        spacing: 2,
        mt: -5,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: true,
          xs: 12,
          sm: 6,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
            sx: {
              color: "red"
            },
            variant: "h4",
            textAlign: "left",
            fontSize: 20,
            fontFamily: "Inter",
            children: "Valeur ajout\xE9es pour le client"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "class": "w-6 h-6 text-blue-500",
                viewBox: "0 0 20 20",
                fill: "red",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  "fill-rule": "evenodd",
                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                  "clip-rule": "evenodd"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                textAlign: "left",
                ml: 1,
                fontSize: 14,
                fontFamily: "Inter-Regular",
                children: "B\xE9n\xE9ficier de l\u2019expertise \xE0 faible co\xFBt;"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "class": "w-6 h-6 text-blue-500",
                viewBox: "0 0 20 20",
                fill: "red",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  "fill-rule": "evenodd",
                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                  "clip-rule": "evenodd"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                textAlign: "left",
                ml: 1,
                fontSize: 14,
                fontFamily: "Inter-Regular",
                children: "Int\xE9grer facilement les meilleures pratiques (ISACA, NIST, SANS, etc.) ;"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "class": "w-6 h-6 text-blue-500",
                viewBox: "0 0 20 20",
                fill: "red",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  "fill-rule": "evenodd",
                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                  "clip-rule": "evenodd"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                textAlign: "left",
                ml: 1,
                fontSize: 14,
                fontFamily: "Inter-Regular",
                children: "Diminution de vos co\xFBts d\u2019assurance;"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "class": "w-6 h-6 text-blue-500",
                viewBox: "0 0 20 20",
                fill: "red",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  "fill-rule": "evenodd",
                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                  "clip-rule": "evenodd"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                textAlign: "left",
                ml: 1,
                fontSize: 14,
                fontFamily: "Inter-Regular",
                children: "Assurance de la continuit\xE9 de vos affaires/ op\xE9rations en cas de sinistres;"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "class": "w-6 h-6 text-blue-500",
                viewBox: "0 0 20 20",
                fill: "red",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  "fill-rule": "evenodd",
                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                  "clip-rule": "evenodd"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                textAlign: "left",
                ml: 1,
                fontSize: 14,
                fontFamily: "Inter-Regular",
                children: "Augmenter la conformit\xE9;"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "class": "w-6 h-6 text-blue-500",
                viewBox: "0 0 20 20",
                fill: "red",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  "fill-rule": "evenodd",
                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                  "clip-rule": "evenodd"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                textAlign: "left",
                ml: 1,
                fontSize: 14,
                fontFamily: "Inter-Regular",
                children: "Augmenter la confiance de vos clients envers votre organisation;"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "class": "w-6 h-6 text-blue-500",
                viewBox: "0 0 20 20",
                fill: "red",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  "fill-rule": "evenodd",
                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                  "clip-rule": "evenodd"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                textAlign: "left",
                ml: 1,
                fontSize: 14,
                fontFamily: "Inter-Regular",
                children: "Automatisation de l\u2019archivage de vos donn\xE9es;"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: true,
          xs: 12,
          sm: 6,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
            sx: {
              color: "red"
            },
            variant: "h4",
            textAlign: "left",
            fontSize: 20,
            fontFamily: "Inter",
            children: "Experience client"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
            textAlign: "left",
            fontSize: 14,
            fontFamily: "Inter-Regular",
            children: ["Les organisations modernes savent que la gestion du risque et conformit\xE9 (lorsqu\u2019applicable) font partie de la gouvernance de l\u2019organisation. Pour s\u2019assurer la continuit\xE9 des affaires en cas de sinistre, les organisations doivent \xE9tablir \xE0 un plan de rel\xE8ve qui int\xE8gre l\u2019archivage de leurs donn\xE9es en tenant compte de leur RPO", " "]
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Archico);

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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.video-react .video-react-control:before, .video-react .video-react-big-play-button:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.video-react .video-react-control:before, .video-react .video-react-big-play-button:before {\n  text-align: center;\n}\n\n@font-face {\n  font-family: \"video-react\";\n  src: url(data:application/vnd.ms-fontobject;base64,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?#iefix) format(\"eot\");\n}\n@font-face {\n  font-family: \"video-react\";\n  src: url(data:application/font-woff;base64,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) format(\"woff\"), url(data:application/x-font-ttf;base64,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) format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n.video-react-icon, .video-react .video-react-closed-caption, .video-react .video-react-bezel .video-react-bezel-icon, .video-react .video-react-volume-level, .video-react .video-react-mute-control,\n.video-react .video-react-volume-menu-button, .video-react .video-react-play-control, .video-react .video-react-play-progress, .video-react .video-react-big-play-button {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"video-react\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.video-react-icon-play-arrow:before, .video-react .video-react-bezel .video-react-bezel-icon-play:before, .video-react .video-react-play-control:before, .video-react .video-react-big-play-button:before {\n  content: \"\";\n}\n\n.video-react-icon-play-circle-filled:before {\n  content: \"\";\n}\n\n.video-react-icon-play-circle-outline:before {\n  content: \"\";\n}\n\n.video-react-icon-pause:before, .video-react .video-react-bezel .video-react-bezel-icon-pause:before, .video-react .video-react-play-control.video-react-playing:before {\n  content: \"\";\n}\n\n.video-react-icon-pause-circle-filled:before {\n  content: \"\";\n}\n\n.video-react-icon-pause-circle-outline:before {\n  content: \"\";\n}\n\n.video-react-icon-stop:before {\n  content: \"\";\n}\n\n.video-react-icon-fast-rewind:before, .video-react .video-react-bezel .video-react-bezel-icon-fast-rewind:before {\n  content: \"\";\n}\n\n.video-react-icon-fast-forward:before, .video-react .video-react-bezel .video-react-bezel-icon-fast-forward:before {\n  content: \"\";\n}\n\n.video-react-icon-skip-previous:before {\n  content: \"\";\n}\n\n.video-react-icon-skip-next:before {\n  content: \"\";\n}\n\n.video-react-icon-replay-5:before, .video-react .video-react-bezel .video-react-bezel-icon-replay-5:before {\n  content: \"\";\n}\n\n.video-react-icon-replay-10:before, .video-react .video-react-bezel .video-react-bezel-icon-replay-10:before {\n  content: \"\";\n}\n\n.video-react-icon-replay-30:before, .video-react .video-react-bezel .video-react-bezel-icon-replay-30:before {\n  content: \"\";\n}\n\n.video-react-icon-forward-5:before, .video-react .video-react-bezel .video-react-bezel-icon-forward-5:before {\n  content: \"\";\n}\n\n.video-react-icon-forward-10:before, .video-react .video-react-bezel .video-react-bezel-icon-forward-10:before {\n  content: \"\";\n}\n\n.video-react-icon-forward-30:before, .video-react .video-react-bezel .video-react-bezel-icon-forward-30:before {\n  content: \"\";\n}\n\n.video-react-icon-volume-off:before, .video-react .video-react-bezel .video-react-bezel-icon-volume-off:before, .video-react .video-react-mute-control.video-react-vol-muted:before,\n.video-react .video-react-volume-menu-button.video-react-vol-muted:before {\n  content: \"\";\n}\n\n.video-react-icon-volume-mute:before, .video-react .video-react-mute-control.video-react-vol-0:before,\n.video-react .video-react-volume-menu-button.video-react-vol-0:before {\n  content: \"\";\n}\n\n.video-react-icon-volume-down:before, .video-react .video-react-bezel .video-react-bezel-icon-volume-down:before, .video-react .video-react-mute-control.video-react-vol-2:before,\n.video-react .video-react-volume-menu-button.video-react-vol-2:before, .video-react .video-react-mute-control.video-react-vol-1:before,\n.video-react .video-react-volume-menu-button.video-react-vol-1:before {\n  content: \"\";\n}\n\n.video-react-icon-volume-up:before, .video-react .video-react-bezel .video-react-bezel-icon-volume-up:before, .video-react .video-react-mute-control:before,\n.video-react .video-react-volume-menu-button:before {\n  content: \"\";\n}\n\n.video-react-icon-fullscreen:before {\n  content: \"\";\n}\n\n.video-react-icon-fullscreen-exit:before {\n  content: \"\";\n}\n\n.video-react-icon-closed-caption:before, .video-react .video-react-closed-caption:before {\n  content: \"\";\n}\n\n.video-react-icon-hd:before {\n  content: \"\";\n}\n\n.video-react-icon-settings:before {\n  content: \"\";\n}\n\n.video-react-icon-share:before {\n  content: \"\";\n}\n\n.video-react-icon-info:before {\n  content: \"\";\n}\n\n.video-react-icon-info-outline:before {\n  content: \"\";\n}\n\n.video-react-icon-close:before {\n  content: \"\";\n}\n\n.video-react-icon-circle:before, .video-react .video-react-volume-level:before, .video-react .video-react-play-progress:before {\n  content: \"\";\n}\n\n.video-react-icon-circle-outline:before {\n  content: \"\";\n}\n\n.video-react-icon-circle-inner-circle:before {\n  content: \"\";\n}\n\n.video-react {\n  display: block;\n  vertical-align: top;\n  box-sizing: border-box;\n  color: #fff;\n  background-color: #000;\n  position: relative;\n  font-size: 10px;\n  line-height: 1;\n  font-family: serif, Times, \"Times New Roman\";\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.video-react:-moz-full-screen {\n  position: absolute;\n}\n.video-react:-webkit-full-screen {\n  width: 100% !important;\n  height: 100% !important;\n}\n.video-react *,\n.video-react *:before,\n.video-react *:after {\n  box-sizing: inherit;\n}\n.video-react ul {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  list-style-position: outside;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.video-react.video-react-fluid, .video-react.video-react-16-9, .video-react.video-react-4-3 {\n  width: 100%;\n  max-width: 100%;\n  height: 0;\n}\n.video-react.video-react-16-9 {\n  padding-top: 56.25%;\n}\n.video-react.video-react-4-3 {\n  padding-top: 75%;\n}\n.video-react.video-react-fill {\n  width: 100%;\n  height: 100%;\n}\n.video-react .video-react-video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.video-react.video-react-fullscreen {\n  width: 100% !important;\n  height: 100% !important;\n  padding-top: 0 !important;\n}\n.video-react.video-react-fullscreen.video-react-user-inactive {\n  cursor: none;\n}\n\nbody.video-react-full-window {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  overflow-y: auto;\n}\nbody.video-react-full-window .video-react-fullscreen {\n  position: fixed;\n  overflow: hidden;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.video-react .video-react-button {\n  background: none;\n  border: none;\n  color: inherit;\n  display: inline-block;\n  cursor: pointer;\n  overflow: visible;\n  font-size: inherit;\n  line-height: inherit;\n  text-transform: none;\n  text-decoration: none;\n  transition: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.video-react .video-react-loading-spinner {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -25px 0 0 -25px;\n  opacity: 0.85;\n  text-align: left;\n  border: 6px solid rgba(43, 51, 63, 0.7);\n  box-sizing: border-box;\n  background-clip: padding-box;\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n}\n.video-react .video-react-loading-spinner:before, .video-react .video-react-loading-spinner:after {\n  content: \"\";\n  position: absolute;\n  margin: -6px;\n  box-sizing: inherit;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  opacity: 1;\n  border: inherit;\n  border-color: transparent;\n  border-top-color: white;\n  -webkit-animation: video-react-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, video-react-spinner-fade 1.1s linear infinite;\n  animation: video-react-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, video-react-spinner-fade 1.1s linear infinite;\n}\n\n.video-react-seeking .video-react-loading-spinner,\n.video-react-waiting .video-react-loading-spinner {\n  display: block;\n}\n\n.video-react-seeking .video-react-loading-spinner:before,\n.video-react-waiting .video-react-loading-spinner:before {\n  border-top-color: white;\n}\n\n.video-react-seeking .video-react-loading-spinner:after,\n.video-react-waiting .video-react-loading-spinner:after {\n  border-top-color: white;\n  -webkit-animation-delay: 0.44s;\n  animation-delay: 0.44s;\n}\n\n@keyframes video-react-spinner-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes video-react-spinner-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes video-react-spinner-fade {\n  0% {\n    border-top-color: #73859f;\n  }\n  20% {\n    border-top-color: #73859f;\n  }\n  35% {\n    border-top-color: white;\n  }\n  60% {\n    border-top-color: #73859f;\n  }\n  100% {\n    border-top-color: #73859f;\n  }\n}\n@-webkit-keyframes video-react-spinner-fade {\n  0% {\n    border-top-color: #73859f;\n  }\n  20% {\n    border-top-color: #73859f;\n  }\n  35% {\n    border-top-color: white;\n  }\n  60% {\n    border-top-color: #73859f;\n  }\n  100% {\n    border-top-color: #73859f;\n  }\n}\n.video-react .video-react-big-play-button {\n  font-size: 3em;\n  line-height: 1.5em;\n  height: 1.5em;\n  width: 3em;\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 0;\n  cursor: pointer;\n  opacity: 1;\n  border: 0.06666em solid #fff;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  border-radius: 0.3em;\n  transition: all 0.4s;\n}\n.video-react .video-react-big-play-button.video-react-big-play-button-center {\n  top: 50%;\n  left: 50%;\n  margin-top: -0.75em;\n  margin-left: -1.5em;\n}\n.video-react .video-react-big-play-button.big-play-button-hide {\n  display: none;\n}\n.video-react:hover .video-react-big-play-button,\n.video-react .video-react-big-play-button:focus {\n  outline: 0;\n  border-color: #fff;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n  transition: all 0s;\n}\n\n.video-react-menu-button {\n  cursor: pointer;\n}\n.video-react-menu-button.video-react-disabled {\n  cursor: default;\n}\n\n.video-react-menu .video-react-menu-content {\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: auto;\n  font-family: serif, Times, \"Times New Roman\";\n}\n.video-react-menu li {\n  list-style: none;\n  margin: 0;\n  padding: 0.2em 0;\n  line-height: 1.4em;\n  font-size: 1.2em;\n  text-align: center;\n}\n.video-react-menu li:focus, .video-react-menu li:hover {\n  outline: 0;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n}\n.video-react-menu li.video-react-selected, .video-react-menu li.video-react-selected:focus, .video-react-menu li.video-react-selected:hover {\n  background-color: #fff;\n  color: #2B333F;\n}\n.video-react-menu li.vjs-menu-title {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1em;\n  line-height: 2em;\n  padding: 0;\n  margin: 0 0 0.3em 0;\n  font-weight: bold;\n  cursor: default;\n}\n\n.video-react-scrubbing .vjs-menu-button:hover .video-react-menu {\n  display: none;\n}\n\n.video-react .video-react-menu-button-popup .video-react-menu {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  width: 10em;\n  left: -3em;\n  height: 0em;\n  margin-bottom: 1.5em;\n  border-top-color: rgba(43, 51, 63, 0.7);\n}\n.video-react .video-react-menu-button-popup .video-react-menu .video-react-menu-content {\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  position: absolute;\n  width: 100%;\n  bottom: 1.5em;\n  max-height: 15em;\n}\n\n.video-react-menu-button-popup .video-react-menu.video-react-lock-showing {\n  display: block;\n}\n\n.video-react .video-react-menu-button-inline {\n  transition: all 0.4s;\n  overflow: hidden;\n}\n.video-react .video-react-menu-button-inline:before {\n  width: 2.222222222em;\n}\n.video-react .video-react-menu-button-inline:hover, .video-react .video-react-menu-button-inline:focus, .video-react .video-react-menu-button-inline.video-react-slider-active {\n  width: 12em;\n}\n.video-react .video-react-menu-button-inline:hover .video-react-menu, .video-react .video-react-menu-button-inline:focus .video-react-menu, .video-react .video-react-menu-button-inline.video-react-slider-active .video-react-menu {\n  display: block;\n  opacity: 1;\n}\n.video-react .video-react-menu-button-inline.video-react-slider-active {\n  transition: none;\n}\n.video-react .video-react-menu-button-inline .video-react-menu {\n  opacity: 0;\n  height: 100%;\n  width: auto;\n  position: absolute;\n  left: 4em;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  transition: all 0.4s;\n}\n.video-react .video-react-menu-button-inline .video-react-menu-content {\n  width: auto;\n  height: 100%;\n  margin: 0;\n  overflow: hidden;\n}\n\n.video-react-no-flex .video-react-menu-button-inline .video-react-menu {\n  display: block;\n  opacity: 1;\n  position: relative;\n  width: auto;\n}\n.video-react-no-flex .video-react-menu-button-inline:hover, .video-react-no-flex .video-react-menu-button-inline:focus, .video-react-no-flex .video-react-menu-button-inline.video-react-slider-active {\n  width: auto;\n}\n\n.video-react .video-react-poster {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: contain;\n  background-color: #000000;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n}\n.video-react .video-react-poster img {\n  display: block;\n  vertical-align: middle;\n  margin: 0 auto;\n  max-height: 100%;\n  padding: 0;\n  width: 100%;\n}\n\n.video-react .video-react-slider {\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n  margin: 0 0.45em 0 0.45em;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n}\n.video-react .video-react-slider:focus {\n  box-shadow: 0 0 1em #fff;\n}\n\n.video-react .video-react-control {\n  outline: none;\n  position: relative;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 4em;\n  flex: none;\n}\n.video-react .video-react-control:before {\n  font-size: 1.8em;\n  line-height: 1.67;\n}\n.video-react .video-react-control:focus:before, .video-react .video-react-control:hover:before, .video-react .video-react-control:focus {\n  text-shadow: 0em 0em 1em #fff, 0em 0em 0.5em #fff;\n}\n\n.video-react .video-react-control-text {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.video-react-no-flex .video-react-control {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.video-react .video-react-control-bar {\n  display: none;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3em;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n}\n\n.video-react-has-started .video-react-control-bar {\n  display: flex;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.1s, opacity 0.1s;\n}\n\n.video-react-has-started.video-react-user-inactive.video-react-playing .video-react-control-bar.video-react-control-bar-auto-hide {\n  visibility: visible;\n  opacity: 0;\n  transition: visibility 1s, opacity 1s;\n}\n\n.video-react-controls-disabled .video-react-control-bar,\n.video-react-using-native-controls .video-react-control-bar,\n.video-react-error .video-react-control-bar {\n  display: none !important;\n}\n\n.video-react-audio.video-react-has-started.video-react-user-inactive.video-react-playing .video-react-control-bar {\n  opacity: 1;\n  visibility: visible;\n}\n\n.video-react-has-started.video-react-no-flex .video-react-control-bar {\n  display: table;\n}\n\n.video-react .video-react-progress-control {\n  flex: auto;\n  display: flex;\n  align-items: center;\n  min-width: 4em;\n}\n\n.video-react-live .video-react-progress-control {\n  display: none;\n}\n\n.video-react .video-react-progress-holder {\n  flex: auto;\n  transition: all 0.2s;\n  height: 0.3em;\n}\n\n.video-react .video-react-progress-control:hover .video-react-progress-holder {\n  font-size: 1.6666666667em;\n}\n\n/* If we let the font size grow as much as everything else, the current time tooltip ends up\n ginormous. If you'd like to enable the current time tooltip all the time, this should be disabled\n to avoid a weird hitch when you roll off the hover. */\n.video-react .video-react-progress-control:hover .video-react-time-tooltip,\n.video-react .video-react-progress-control:hover .video-react-mouse-display:after,\n.video-react .video-react-progress-control:hover .video-react-play-progress:after {\n  visibility: visible;\n  font-size: 0.6em;\n}\n\n.video-react .video-react-progress-holder .video-react-play-progress,\n.video-react .video-react-progress-holder .video-react-load-progress,\n.video-react .video-react-progress-holder .video-react-tooltip-progress-bar,\n.video-react .video-react-progress-holder .video-react-load-progress div {\n  position: absolute;\n  display: block;\n  height: 0.3em;\n  margin: 0;\n  padding: 0;\n  width: 0;\n  left: 0;\n  top: 0;\n}\n\n.video-react .video-react-play-progress {\n  background-color: #fff;\n}\n.video-react .video-react-play-progress:before {\n  position: absolute;\n  top: -0.3333333333em;\n  right: -0.5em;\n  font-size: 0.9em;\n}\n\n.video-react .video-react-time-tooltip,\n.video-react .video-react-mouse-display:after,\n.video-react .video-react-play-progress:after {\n  visibility: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: -3.4em;\n  right: -1.9em;\n  font-size: 0.9em;\n  color: #000;\n  content: attr(data-current-time);\n  padding: 6px 8px 8px 8px;\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 0.3em;\n}\n\n.video-react .video-react-time-tooltip,\n.video-react .video-react-play-progress:before,\n.video-react .video-react-play-progress:after {\n  z-index: 1;\n}\n\n.video-react .video-react-progress-control .video-react-keep-tooltips-inside:after {\n  display: none;\n}\n\n.video-react .video-react-load-progress {\n  background: #bfc7d3;\n  background: rgba(115, 133, 159, 0.5);\n}\n\n.video-react .video-react-load-progress div {\n  background: white;\n  background: rgba(115, 133, 159, 0.75);\n}\n\n.video-react.video-react-no-flex .video-react-progress-control {\n  width: auto;\n}\n\n.video-react .video-react-time-tooltip {\n  display: inline-block;\n  height: 2.4em;\n  position: relative;\n  float: right;\n  right: -1.9em;\n}\n\n.video-react .video-react-tooltip-progress-bar {\n  visibility: hidden;\n}\n\n.video-react .video-react-progress-control .video-react-mouse-display {\n  display: none;\n  position: absolute;\n  width: 1px;\n  height: 100%;\n  background-color: #000;\n  z-index: 1;\n}\n\n.video-react-no-flex .video-react-progress-control .video-react-mouse-display {\n  z-index: 0;\n}\n\n.video-react .video-react-progress-control:hover .video-react-mouse-display {\n  display: block;\n}\n\n.video-react.video-react-user-inactive .video-react-progress-control .video-react-mouse-display,\n.video-react.video-react-user-inactive .video-react-progress-control .video-react-mouse-display:after {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 1s, opacity 1s;\n}\n\n.video-react.video-react-user-inactive.video-react-no-flex .video-react-progress-control .video-react-mouse-display,\n.video-react.video-react-user-inactive.video-react-no-flex .video-react-progress-control .video-react-mouse-display:after {\n  display: none;\n}\n\n.video-react .video-react-mouse-display .video-react-time-tooltip,\n.video-react .video-react-progress-control .video-react-mouse-display:after {\n  color: #fff;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.video-react .video-react-play-control {\n  cursor: pointer;\n  flex: none;\n}\n.video-react .video-react-fullscreen-control {\n  cursor: pointer;\n  flex: none;\n}\n\n.video-react.video-react-fullscreen {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9999;\n}\n\n.video-react .video-react-time-control {\n  flex: none;\n  font-size: 1em;\n  line-height: 3em;\n  min-width: 2em;\n  width: auto;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n.video-react .video-react-time-divider {\n  line-height: 3em;\n  min-width: initial;\n  padding: 0;\n}\n\n.video-react .video-react-mute-control,\n.video-react .video-react-volume-menu-button {\n  cursor: pointer;\n  flex: none;\n}\n.video-react .video-react-volume-control {\n  width: 5em;\n  flex: none;\n  display: flex;\n  align-items: center;\n}\n.video-react .video-react-volume-bar {\n  margin: 1.35em 0.45em;\n}\n.video-react .video-react-volume-bar.video-react-slider-horizontal {\n  width: 5em;\n  height: 0.3em;\n}\n.video-react .video-react-volume-bar.video-react-slider-horizontal .video-react-volume-level {\n  width: 100%;\n}\n.video-react .video-react-volume-bar.video-react-slider-vertical {\n  width: 0.3em;\n  height: 5em;\n  margin: 1.35em auto;\n}\n.video-react .video-react-volume-bar.video-react-slider-vertical .video-react-volume-level {\n  height: 100%;\n}\n.video-react .video-react-volume-level {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: #fff;\n}\n.video-react .video-react-volume-level:before {\n  position: absolute;\n  font-size: 0.9em;\n}\n.video-react .video-react-slider-vertical .video-react-volume-level {\n  width: 0.3em;\n}\n.video-react .video-react-slider-vertical .video-react-volume-level:before {\n  top: -0.5em;\n  left: -0.3em;\n}\n.video-react .video-react-slider-horizontal .video-react-volume-level {\n  height: 0.3em;\n}\n.video-react .video-react-slider-horizontal .video-react-volume-level:before {\n  top: -0.3em;\n  right: -0.5em;\n}\n.video-react .video-react-menu-button-popup.video-react-volume-menu-button .video-react-menu {\n  display: block;\n  width: 0;\n  height: 0;\n  border-top-color: transparent;\n}\n.video-react .video-react-menu-button-popup.video-react-volume-menu-button-vertical .video-react-menu {\n  left: 0.5em;\n  height: 8em;\n}\n.video-react .video-react-menu-button-popup.video-react-volume-menu-button-horizontal .video-react-menu {\n  left: -2em;\n}\n.video-react .video-react-menu-button-popup.video-react-volume-menu-button .video-react-menu-content {\n  height: 0;\n  width: 0;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n.video-react .video-react-volume-menu-button-vertical:hover .video-react-menu-content,\n.video-react .video-react-volume-menu-button-vertical:focus .video-react-menu-content,\n.video-react .video-react-volume-menu-button-vertical.video-react-slider-active .video-react-menu-content,\n.video-react .video-react-volume-menu-button-vertical .video-react-lock-showing .video-react-menu-content {\n  height: 8em;\n  width: 2.9em;\n}\n.video-react .video-react-volume-menu-button-horizontal:hover .video-react-menu-content,\n.video-react .video-react-volume-menu-button-horizontal:focus .video-react-menu-content,\n.video-react .video-react-volume-menu-button-horizontal .video-react-slider-active .video-react-menu-content,\n.video-react .video-react-volume-menu-button-horizontal .video-react-lock-showing .video-react-menu-content {\n  height: 2.9em;\n  width: 8em;\n}\n.video-react .video-react-volume-menu-button.video-react-menu-button-inline .video-react-menu-content {\n  background-color: transparent !important;\n}\n\n.video-react .video-react-playback-rate .video-react-playback-rate-value {\n  line-height: 3em;\n  text-align: center;\n}\n.video-react .video-react-playback-rate .video-react-menu {\n  width: 4em;\n  left: 0em;\n}\n\n.video-react .video-react-bezel {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 52px;\n  height: 52px;\n  z-index: 17;\n  margin-left: -26px;\n  margin-top: -26px;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 26px;\n}\n.video-react .video-react-bezel.video-react-bezel-animation {\n  -webkit-animation: video-react-bezel-fadeout 0.5s linear 1 normal forwards;\n  animation: video-react-bezel-fadeout 0.5s linear 1 normal forwards;\n  pointer-events: none;\n}\n.video-react .video-react-bezel.video-react-bezel-animation-alt {\n  -webkit-animation: video-react-bezel-fadeout-alt 0.5s linear 1 normal forwards;\n  animation: video-react-bezel-fadeout-alt 0.5s linear 1 normal forwards;\n  pointer-events: none;\n}\n.video-react .video-react-bezel .video-react-bezel-icon {\n  width: 36px;\n  height: 36px;\n  margin: 8px;\n  font-size: 26px;\n  line-height: 36px;\n  text-align: center;\n}\n@-webkit-keyframes video-react-bezel-fadeout {\n  0% {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n@keyframes video-react-bezel-fadeout {\n  0% {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n@-webkit-keyframes video-react-bezel-fadeout-alt {\n  0% {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n@keyframes video-react-bezel-fadeout-alt {\n  0% {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n.video-react .video-react-closed-caption {\n  cursor: pointer;\n  flex: none;\n}\n.video-react video::-webkit-media-text-track-container {\n  transform: translateY(-30px);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ })

}]);