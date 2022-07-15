"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_Login_js"],{

/***/ "./node_modules/@mui/icons-material/esm/Google.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Google.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
}), 'Google'));

/***/ }),

/***/ "./resources/js/Components/Button.js":
/*!*******************************************!*\
  !*** ./resources/js/Components/Button.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function Button(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'submit' : _ref$type,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      processing = _ref.processing,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    type: type,
    className: "inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ".concat(processing && 'opacity-25', " ") + className,
    disabled: processing,
    children: children
  });
}

/***/ }),

/***/ "./resources/js/Components/Checkbox.js":
/*!*********************************************!*\
  !*** ./resources/js/Components/Checkbox.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function Checkbox(_ref) {
  var name = _ref.name,
      value = _ref.value,
      handleChange = _ref.handleChange;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
    type: "checkbox",
    name: name,
    value: value,
    className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
    onChange: function onChange(e) {
      return handleChange(e);
    }
  });
}

/***/ }),

/***/ "./resources/js/Components/Input.js":
/*!******************************************!*\
  !*** ./resources/js/Components/Input.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function Input(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      name = _ref.name,
      value = _ref.value,
      className = _ref.className,
      autoComplete = _ref.autoComplete,
      required = _ref.required,
      isFocused = _ref.isFocused,
      handleChange = _ref.handleChange;
  var input = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "flex flex-col items-start",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
      type: type,
      name: name,
      value: value,
      className: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm " + className,
      ref: input,
      autoComplete: autoComplete,
      required: required,
      onChange: function onChange(e) {
        return handleChange(e);
      }
    })
  });
}

/***/ }),

/***/ "./resources/js/Components/Label.js":
/*!******************************************!*\
  !*** ./resources/js/Components/Label.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function Label(_ref) {
  var forInput = _ref.forInput,
      value = _ref.value,
      className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
    htmlFor: forInput,
    className: "block font-medium text-sm text-gray-700 " + className,
    children: value ? value : children
  });
}

/***/ }),

/***/ "./resources/js/Components/ValidationErrors.js":
/*!*****************************************************!*\
  !*** ./resources/js/Components/ValidationErrors.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidationErrors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function ValidationErrors(_ref) {
  var errors = _ref.errors;
  return Object.keys(errors).length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "mb-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "font-medium text-red-600",
      children: "Whoops! Something went wrong."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
      className: "mt-3 list-disc list-inside text-sm text-red-600",
      children: Object.keys(errors).map(function (key, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
          children: errors[key]
        }, index);
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Layouts/Guest.js":
/*!***************************************!*\
  !*** ./resources/js/Layouts/Guest.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Guest)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Components_ApplicationLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/ApplicationLogo */ "./resources/js/Components/ApplicationLogo.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function Guest(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Components_ApplicationLogo__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "w-20 h-20 fill-current text-gray-500"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",
      children: children
    })]
  });
}

/***/ }),

/***/ "./resources/js/Pages/Auth/Login.js":
/*!******************************************!*\
  !*** ./resources/js/Pages/Auth/Login.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Button */ "./resources/js/Components/Button.js");
/* harmony import */ var _Components_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Checkbox */ "./resources/js/Components/Checkbox.js");
/* harmony import */ var _Layouts_Guest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Layouts/Guest */ "./resources/js/Layouts/Guest.js");
/* harmony import */ var _Components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Input */ "./resources/js/Components/Input.js");
/* harmony import */ var _Components_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Label */ "./resources/js/Components/Label.js");
/* harmony import */ var _Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/ValidationErrors */ "./resources/js/Components/ValidationErrors.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Google.js");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/FacebookIcon.js");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/LinkedinIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













function Login(_ref) {
  var status = _ref.status,
      canResetPassword = _ref.canResetPassword;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__.useForm)({
    email: "",
    password: "",
    remember: ""
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors,
      reset = _useForm.reset;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      reset("password");
    };
  }, []);

  var onHandleChange = function onHandleChange(event) {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };

  var submit = function submit(e) {
    e.preventDefault();
    post(route("login"));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Layouts_Guest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__.Head, {
      title: "Log in"
    }), status && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "mb-4 font-medium text-sm text-green-600",
      children: status
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_6__["default"], {
      errors: errors
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      children: "Login with social network "
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
      onSubmit: submit,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
          forInput: "email",
          value: "Email"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "text",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          autoComplete: "username",
          isFocused: true,
          handleChange: onHandleChange
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "mt-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
          forInput: "password",
          value: "Password"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "password",
          name: "password",
          value: data.password,
          className: "mt-1 block w-full",
          autoComplete: "current-password",
          handleChange: onHandleChange
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "block mt-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
          className: "flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
            name: "remember",
            value: data.remember,
            handleChange: onHandleChange
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "ml-2 text-sm text-gray-600",
            children: "Remember me"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex items-center justify-end mt-4",
        children: [canResetPassword && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__.Link, {
          href: route("password.request"),
          className: "underline text-sm text-gray-600 hover:text-gray-900",
          children: "Forgot your password?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "ml-4",
          processing: processing,
          children: "Log in"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
          className: "text-center font-semibold mx-4 mb-0",
          children: "OR"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
        display: "flex",
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
          href: route("googleRedirect"),
          variant: "contained",
          color: "error",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_12__["default"], {}), " "]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
          variant: "outlined",
          sx: {
            border: 'none'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_13__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
          href: route("linkedinRedirect"),
          variant: "outlined",
          fontSize: 22,
          sx: {
            border: 'none'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_14__["default"], {}), " "]
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./node_modules/react-share/es/FacebookIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/FacebookIcon.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var FacebookIcon = (0,_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#3b5998',
    networkName: 'facebook',
    path: 'M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z',
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FacebookIcon);


/***/ }),

/***/ "./node_modules/react-share/es/LinkedinIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/LinkedinIcon.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var LinkedinIcon = (0,_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#007fb1',
    networkName: 'linkedin',
    path: 'M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z',
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkedinIcon);


/***/ }),

/***/ "./node_modules/react-share/es/hocs/createIcon.js":
/*!********************************************************!*\
  !*** ./node_modules/react-share/es/hocs/createIcon.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var __assign = (undefined && undefined.__assign) || function () {
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
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

function createIcon(iconConfig) {
    var Icon = function (_a) {
        var bgStyle = _a.bgStyle, borderRadius = _a.borderRadius, iconFillColor = _a.iconFillColor, round = _a.round, size = _a.size, rest = __rest(_a, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({ viewBox: "0 0 64 64", width: size, height: size }, rest),
            round ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "32", cy: "32", r: "31", fill: iconConfig.color, style: bgStyle })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { width: "64", height: "64", rx: borderRadius, ry: borderRadius, fill: iconConfig.color, style: bgStyle })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: iconConfig.path, fill: iconFillColor })));
    };
    Icon.defaultProps = {
        bgStyle: {},
        borderRadius: 0,
        iconFillColor: 'white',
        size: 64,
    };
    return Icon;
}


/***/ })

}]);