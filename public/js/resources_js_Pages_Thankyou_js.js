"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Thankyou_js"],{

/***/ "./node_modules/@mui/material/CardHeader/CardHeader.js":
/*!*************************************************************!*\
  !*** ./node_modules/@mui/material/CardHeader/CardHeader.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/composeClasses/composeClasses.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _cardHeaderClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cardHeaderClasses */ "./node_modules/@mui/material/CardHeader/cardHeaderClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["action", "avatar", "className", "component", "disableTypography", "subheader", "subheaderTypographyProps", "title", "titleTypographyProps"];











const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    avatar: ['avatar'],
    action: ['action'],
    content: ['content'],
    title: ['title'],
    subheader: ['subheader']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _cardHeaderClasses__WEBPACK_IMPORTED_MODULE_6__.getCardHeaderUtilityClass, classes);
};

const CardHeaderRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiCardHeader',
  slot: 'Root',
  overridesResolver: (props, styles) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    [`& .${_cardHeaderClasses__WEBPACK_IMPORTED_MODULE_6__["default"].title}`]: styles.title,
    [`& .${_cardHeaderClasses__WEBPACK_IMPORTED_MODULE_6__["default"].subheader}`]: styles.subheader
  }, styles.root)
})({
  display: 'flex',
  alignItems: 'center',
  padding: 16
});
const CardHeaderAvatar = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiCardHeader',
  slot: 'Avatar',
  overridesResolver: (props, styles) => styles.avatar
})({
  display: 'flex',
  flex: '0 0 auto',
  marginRight: 16
});
const CardHeaderAction = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiCardHeader',
  slot: 'Action',
  overridesResolver: (props, styles) => styles.action
})({
  flex: '0 0 auto',
  alignSelf: 'flex-start',
  marginTop: -4,
  marginRight: -8,
  marginBottom: -4
});
const CardHeaderContent = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiCardHeader',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})({
  flex: '1 1 auto'
});
const CardHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function CardHeader(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__["default"])({
    props: inProps,
    name: 'MuiCardHeader'
  });

  const {
    action,
    avatar,
    className,
    component = 'div',
    disableTypography = false,
    subheader: subheaderProp,
    subheaderTypographyProps,
    title: titleProp,
    titleTypographyProps
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    component,
    disableTypography
  });

  const classes = useUtilityClasses(ownerState);
  let title = titleProp;

  if (title != null && title.type !== _Typography__WEBPACK_IMPORTED_MODULE_9__["default"] && !disableTypography) {
    title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      variant: avatar ? 'body2' : 'h5',
      className: classes.title,
      component: "span",
      display: "block"
    }, titleTypographyProps, {
      children: title
    }));
  }

  let subheader = subheaderProp;

  if (subheader != null && subheader.type !== _Typography__WEBPACK_IMPORTED_MODULE_9__["default"] && !disableTypography) {
    subheader = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      variant: avatar ? 'body2' : 'body1',
      className: classes.subheader,
      color: "text.secondary",
      component: "span",
      display: "block"
    }, subheaderTypographyProps, {
      children: subheader
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(CardHeaderRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    as: component,
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: [avatar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CardHeaderAvatar, {
      className: classes.avatar,
      ownerState: ownerState,
      children: avatar
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(CardHeaderContent, {
      className: classes.content,
      ownerState: ownerState,
      children: [title, subheader]
    }), action && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CardHeaderAction, {
      className: classes.action,
      ownerState: ownerState,
      children: action
    })]
  }));
});
 true ? CardHeader.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The action to display in the card header.
   */
  action: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * The Avatar element to display.
   */
  avatar: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * @ignore
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().elementType),

  /**
   * If `true`, `subheader` and `title` won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `title` text, and optional `subheader` text
   * with the Typography component.
   * @default false
   */
  disableTypography: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /**
   * The content of the component.
   */
  subheader: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * These props will be forwarded to the subheader
   * (as long as disableTypography is not `true`).
   */
  subheaderTypographyProps: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)]),

  /**
   * The content of the component.
   */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * These props will be forwarded to the title
   * (as long as disableTypography is not `true`).
   */
  titleTypographyProps: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardHeader);

/***/ }),

/***/ "./node_modules/@mui/material/CardHeader/cardHeaderClasses.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mui/material/CardHeader/cardHeaderClasses.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getCardHeaderUtilityClass": () => (/* binding */ getCardHeaderUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/generateUtilityClasses/generateUtilityClasses.js");

function getCardHeaderUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiCardHeader', slot);
}
const cardHeaderClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiCardHeader', ['root', 'avatar', 'action', 'content', 'title', 'subheader']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardHeaderClasses);

/***/ }),

/***/ "./resources/js/Components/PageHeader.js":
/*!***********************************************!*\
  !*** ./resources/js/Components/PageHeader.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/Pages/Thankyou.js":
/*!****************************************!*\
  !*** ./resources/js/Pages/Thankyou.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_PageHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/PageHeader */ "./resources/js/Components/PageHeader.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardHeader/CardHeader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_icons_succes_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/succes.png */ "./resources/js/assets/icons/succes.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var Thankyou = function Thankyou() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      justifyContent: "center",
      ml: "49%",
      width: "100%",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: _assets_icons_succes_png__WEBPACK_IMPORTED_MODULE_2__["default"],
        height: 60,
        width: 60
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        height: 200
      },
      title: "Payement reussi avec succ\xE8s",
      subheader: " Vous avez des questions concernant notre gamme de formations ou de services ?"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thankyou);

/***/ }),

/***/ "./resources/js/assets/icons/succes.png":
/*!**********************************************!*\
  !*** ./resources/js/assets/icons/succes.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/succes.png?6776e7dbfd58b183ee467efdecb9bee6");

/***/ }),

/***/ "./resources/js/assets/images/isoB.png":
/*!*********************************************!*\
  !*** ./resources/js/assets/images/isoB.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/isoB.png?be3e5d763f0697de2b3805168a96055d");

/***/ })

}]);