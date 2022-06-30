"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_FilterPost_js"],{

/***/ "./resources/js/Pages/FilterPost.js":
/*!******************************************!*\
  !*** ./resources/js/Pages/FilterPost.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var FilterPost = function FilterPost(_ref) {
  var post = _ref.post,
      setFilteredPost = _ref.setFilteredPost,
      active = _ref.active,
      setActive = _ref.setActive;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (active === 0) {
      setFilteredPost(post === null || post === void 0 ? void 0 : post.data);
      return;
    }

    var filtered = post.data.filter(function (article) {
      return article.category_id === active;
    });
    setFilteredPost(filtered);
  }, [active]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "flex",
    justifyContent: "space-between",
    width: 300,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: function onClick() {
        return setActive(0);
      },
      mr: 2,
      variant: active === 0 ? 'contained' : 'outlined',
      color: "error",
      children: "Tout"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: function onClick() {
        return setActive(1);
      },
      mr: 2,
      variant: active === 1 ? 'contained' : 'outlined',
      color: "error",
      children: "Videos"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: function onClick() {
        return setActive(2);
      },
      variant: active === 2 ? 'contained' : 'outlined',
      color: "error",
      children: "Archives"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterPost);

/***/ })

}]);