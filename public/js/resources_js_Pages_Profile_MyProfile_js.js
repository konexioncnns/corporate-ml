"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_MyProfile_js"],{

/***/ "./node_modules/@mui/icons-material/esm/Home.js":
/*!******************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Home.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
}), 'Home'));

/***/ }),

/***/ "./node_modules/@mui/icons-material/esm/Inbox.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Inbox.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"
}), 'Inbox'));

/***/ }),

/***/ "./node_modules/@mui/material/Breadcrumbs/BreadcrumbCollapsed.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@mui/material/Breadcrumbs/BreadcrumbCollapsed.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _internal_svg_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/svg-icons/MoreHoriz */ "./node_modules/@mui/material/internal/svg-icons/MoreHoriz.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@mui/material/ButtonBase/ButtonBase.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








const BreadcrumbCollapsedButton = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_3__["default"])(_ButtonBase__WEBPACK_IMPORTED_MODULE_4__["default"])(({
  theme
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  display: 'flex',
  marginLeft: `calc(${theme.spacing(1)} * 0.5)`,
  marginRight: `calc(${theme.spacing(1)} * 0.5)`
}, theme.palette.mode === 'light' ? {
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.grey[700]
} : {
  backgroundColor: theme.palette.grey[700],
  color: theme.palette.grey[100]
}, {
  borderRadius: 2,
  '&:hover, &:focus': (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.palette.mode === 'light' ? {
    backgroundColor: theme.palette.grey[200]
  } : {
    backgroundColor: theme.palette.grey[600]
  }),
  '&:active': (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    boxShadow: theme.shadows[0]
  }, theme.palette.mode === 'light' ? {
    backgroundColor: (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.emphasize)(theme.palette.grey[200], 0.12)
  } : {
    backgroundColor: (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.emphasize)(theme.palette.grey[600], 0.12)
  })
}));
const BreadcrumbCollapsedIcon = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_3__["default"])(_internal_svg_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_6__["default"])({
  width: 24,
  height: 16
});
/**
 * @ignore - internal component.
 */

function BreadcrumbCollapsed(props) {
  const ownerState = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BreadcrumbCollapsedButton, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      focusRipple: true
    }, props, {
      ownerState: ownerState,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BreadcrumbCollapsedIcon, {
        ownerState: ownerState
      })
    }))
  });
}

 true ? BreadcrumbCollapsed.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadcrumbCollapsed);

/***/ }),

/***/ "./node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js":
/*!***************************************************************!*\
  !*** ./node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/integerPropType.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/composeClasses/composeClasses.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _BreadcrumbCollapsed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BreadcrumbCollapsed */ "./node_modules/@mui/material/Breadcrumbs/BreadcrumbCollapsed.js");
/* harmony import */ var _breadcrumbsClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./breadcrumbsClasses */ "./node_modules/@mui/material/Breadcrumbs/breadcrumbsClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["children", "className", "component", "expandText", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "separator"];













const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    li: ['li'],
    ol: ['ol'],
    separator: ['separator']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_6__["default"])(slots, _breadcrumbsClasses__WEBPACK_IMPORTED_MODULE_7__.getBreadcrumbsUtilityClass, classes);
};

const BreadcrumbsRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])(_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
  name: 'MuiBreadcrumbs',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [{
      [`& .${_breadcrumbsClasses__WEBPACK_IMPORTED_MODULE_7__["default"].li}`]: styles.li
    }, styles.root];
  }
})({});
const BreadcrumbsOl = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])('ol', {
  name: 'MuiBreadcrumbs',
  slot: 'Ol',
  overridesResolver: (props, styles) => styles.ol
})({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  listStyle: 'none'
});
const BreadcrumbsSeparator = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])('li', {
  name: 'MuiBreadcrumbs',
  slot: 'Separator',
  overridesResolver: (props, styles) => styles.separator
})({
  display: 'flex',
  userSelect: 'none',
  marginLeft: 8,
  marginRight: 8
});

function insertSeparators(items, className, separator, ownerState) {
  return items.reduce((acc, current, index) => {
    if (index < items.length - 1) {
      acc = acc.concat(current, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BreadcrumbsSeparator, {
        "aria-hidden": true,
        className: className,
        ownerState: ownerState,
        children: separator
      }, `separator-${index}`));
    } else {
      acc.push(current);
    }

    return acc;
  }, []);
}

const Breadcrumbs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Breadcrumbs(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_10__["default"])({
    props: inProps,
    name: 'MuiBreadcrumbs'
  });

  const {
    children,
    className,
    component = 'nav',
    expandText = 'Show path',
    itemsAfterCollapse = 1,
    itemsBeforeCollapse = 1,
    maxItems = 8,
    separator = '/'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    component,
    expanded,
    expandText,
    itemsAfterCollapse,
    itemsBeforeCollapse,
    maxItems,
    separator
  });

  const classes = useUtilityClasses(ownerState);
  const listRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);

  const renderItemsBeforeAndAfter = allItems => {
    const handleClickExpand = () => {
      setExpanded(true); // The clicked element received the focus but gets removed from the DOM.
      // Let's keep the focus in the component after expanding.
      // Moving it to the <ol> or <nav> does not cause any announcement in NVDA.
      // By moving it to some link/button at least we have some announcement.

      const focusable = listRef.current.querySelector('a[href],button,[tabindex]');

      if (focusable) {
        focusable.focus();
      }
    }; // This defends against someone passing weird input, to ensure that if all
    // items would be shown anyway, we just show all items without the EllipsisItem


    if (itemsBeforeCollapse + itemsAfterCollapse >= allItems.length) {
      if (true) {
        console.error(['MUI: You have provided an invalid combination of props to the Breadcrumbs.', `itemsAfterCollapse={${itemsAfterCollapse}} + itemsBeforeCollapse={${itemsBeforeCollapse}} >= maxItems={${maxItems}}`].join('\n'));
      }

      return allItems;
    }

    return [...allItems.slice(0, itemsBeforeCollapse), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_BreadcrumbCollapsed__WEBPACK_IMPORTED_MODULE_11__["default"], {
      "aria-label": expandText,
      onClick: handleClickExpand
    }, "ellipsis"), ...allItems.slice(allItems.length - itemsAfterCollapse, allItems.length)];
  };

  const allItems = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).filter(child => {
    if (true) {
      if ((0,react_is__WEBPACK_IMPORTED_MODULE_3__.isFragment)(child)) {
        console.error(["MUI: The Breadcrumbs component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(child);
  }).map((child, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
    className: classes.li,
    children: child
  }, `child-${index}`));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BreadcrumbsRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    component: component,
    color: "text.secondary",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BreadcrumbsOl, {
      className: classes.ol,
      ref: listRef,
      ownerState: ownerState,
      children: insertSeparators(expanded || maxItems && allItems.length <= maxItems ? allItems : renderItemsBeforeAndAfter(allItems), classes.separator, separator, ownerState)
    })
  }));
});
 true ? Breadcrumbs.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().elementType),

  /**
   * Override the default label for the expand button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Show path'
   */
  expandText: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /**
   * If max items is exceeded, the number of items to show after the ellipsis.
   * @default 1
   */
  itemsAfterCollapse: _mui_utils__WEBPACK_IMPORTED_MODULE_13__["default"],

  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   * @default 1
   */
  itemsBeforeCollapse: _mui_utils__WEBPACK_IMPORTED_MODULE_13__["default"],

  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   * @default 8
   */
  maxItems: _mui_utils__WEBPACK_IMPORTED_MODULE_13__["default"],

  /**
   * Custom separator node.
   * @default '/'
   */
  separator: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().node),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumbs);

/***/ }),

/***/ "./node_modules/@mui/material/Breadcrumbs/breadcrumbsClasses.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@mui/material/Breadcrumbs/breadcrumbsClasses.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getBreadcrumbsUtilityClass": () => (/* binding */ getBreadcrumbsUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/generateUtilityClasses/generateUtilityClasses.js");

function getBreadcrumbsUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiBreadcrumbs', slot);
}
const breadcrumbsClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiBreadcrumbs', ['root', 'ol', 'li', 'separator']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (breadcrumbsClasses);

/***/ }),

/***/ "./node_modules/@mui/material/internal/svg-icons/MoreHoriz.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mui/material/internal/svg-icons/MoreHoriz.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


/**
 * @ignore - internal component.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreHoriz'));

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

/***/ "./resources/js/Layouts/ProfileLayout.js":
/*!***********************************************!*\
  !*** ./resources/js/Layouts/ProfileLayout.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Home.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Inbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_images_user_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/user.jpg */ "./resources/js/assets/images/user.jpg");
/* harmony import */ var _assets_images_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/arrow.png */ "./resources/js/assets/images/arrow.png");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/FolderIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/UsersIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/ChartBarIcon.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var navigation = [{
  name: "Mes Commandes",
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["default"],
  href: "".concat(route("getorders")),
  count: 4,
  current: false
}, {
  name: "Mon profile",
  icon: _mui_icons_material__WEBPACK_IMPORTED_MODULE_7__["default"],
  href: "".concat(route("profile")),
  current: true
}, {
  name: "Mes reglages",
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__["default"],
  href: "".concat(route("profile/setting")),
  count: 3,
  current: false
}, {
  name: "Tous les messages",
  icon: _mui_icons_material__WEBPACK_IMPORTED_MODULE_9__["default"],
  href: "#",
  current: false
}, {
  name: "Factures",
  icon: _mui_icons_material__WEBPACK_IMPORTED_MODULE_9__["default"],
  href: "#",
  count: 12,
  current: false
}, {
  name: "Liste des souhait",
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__["default"],
  href: "#",
  current: false
}];

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(" ");
}

function ProfileLayout(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      height: 128,
      width: "100%",
      bgcolor: "#111827",
      mb: 5,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
            underline: "hover",
            color: "inherit",
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
              color: "white",
              children: " Home"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
            underline: "hover",
            color: "inherit",
            href: "/profile",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
              color: "white",
              children: "MyProfile"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
          mt: 3,
          color: "white",
          textAlign: "left",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: 32,
          fontFamily: "Inter",
          children: "Mise a jour du profile d'utilisateurs"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "flex ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
          container: true,
          spacing: 2,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
            item: true,
            xs: 12,
            sm: 3,
            sx: {},
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "w-72 h-screen bg-dark-light position relative",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "flex-1 flex flex-col min-h-0 border-b border-black-300 border-t border-black-300 border-l border-black-300 border-r border-black-300 bg-white",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "flex-1 flex flex-col pt-5 pb-4 overflow-y-auto",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "flex items-center flex-shrink-0 px-auto",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      className: "h-30 w-30 mx-auto rounded-full border border-gray-100 shadow-sm",
                      src: _assets_images_user_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
                      alt: "Workflow"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("nav", {
                    className: "mt-5 flex-1 px-2 bg-white space-y-1",
                    "aria-label": "Sidebar",
                    children: navigation.map(function (item) {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.InertiaLink, {
                        href: item.href,
                        className: classNames(item.current ? "bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50", "group flex items-center px-2 py-2 text-sm font-medium rounded-md"),
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(item.icon, {
                          className: classNames(item.current ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500", "mr-1 flex-shrink-0 h-6 w-6"),
                          "aria-hidden": "true"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
                          ml: 2,
                          children: item.name
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
                          color: "error"
                        })]
                      }, item.name);
                    })
                  })]
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
            item: true,
            xs: 12,
            sm: 9,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "p-7 text-2xl font-semibold flex-1 h-screen",
              children: children
            })
          })]
        })
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileLayout);

/***/ }),

/***/ "./resources/js/Pages/Profile/MyProfile.js":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Profile/MyProfile.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_ProfileLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/ProfileLayout */ "./resources/js/Layouts/ProfileLayout.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _Layouts_Guest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Guest */ "./resources/js/Layouts/Guest.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var MyProfile = function MyProfile(_ref) {
  var profile = _ref.profile;
  console.log(profile);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Layouts_ProfileLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      component: "form",
      noValidate: true,
      autoComplete: "off",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "mt-6 grid grid-cols-4 gap-y-6 gap-x-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "col-span-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
              fontSize: 13,
              textAlign: "left",
              fontFamily: "Inter-Regular",
              children: ["Nom", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "text-red-500",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "mt-1",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                type: "text",
                name: "firstname",
                value: profile.name,
                className: "block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-sm"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "col-span-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
              fontSize: 13,
              textAlign: "left",
              fontFamily: "Inter-Regular",
              children: ["Prenom", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                "class": "text-red-500",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "mt-1",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                type: "text",
                name: "lastname",
                placeholder: "Prenom",
                value: profile.lastname,
                className: "block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-md"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "col-span-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
              fontSize: 13,
              textAlign: "left",
              fontFamily: "Inter-Regular",
              children: ["Email", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                "class": "text-red-500",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "mt-1",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                type: "email",
                name: "email",
                value: profile.email,
                className: "block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-md"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "col-span-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
              fontSize: 13,
              textAlign: "left",
              fontFamily: "Inter-Regular",
              children: ["Phone", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                "class": "text-red-500",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "mt-1",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                type: "text",
                name: "phone",
                value: profile.phone,
                className: "block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-md"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "col-span-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
              fontSize: 13,
              textAlign: "left",
              fontFamily: "Inter-Regular",
              children: ["Profession", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                "class": "text-red-500",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "mt-1",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                type: "text",
                name: "profession",
                value: profile.profession,
                className: "block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-md"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "col-span-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
              fontSize: 13,
              textAlign: "left",
              fontFamily: "Inter-Regular",
              children: ["Country", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                "class": "text-red-500",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "mt-1",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                type: "text",
                name: "country",
                value: profile.country,
                className: "block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-md"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          mt: 3,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
            variant: "contained",
            type: "submit",
            color: "error",
            sx: {
              mb: 2,
              fontFamily: "Inter-Regular"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
              variant: "h7",
              fontFamily: "Inter-Regular",
              children: " Mettre a jour le profile"
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyProfile);

/***/ }),

/***/ "./resources/js/assets/images/arrow.png":
/*!**********************************************!*\
  !*** ./resources/js/assets/images/arrow.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/arrow.png?2189b92cb7448c5fb1fc562c811515ea");

/***/ }),

/***/ "./resources/js/assets/images/user.jpg":
/*!*********************************************!*\
  !*** ./resources/js/assets/images/user.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/user.jpg?fb46f5442b9a337cf44fb5c5155dcb10");

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChartBarIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChartBarIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChartBarIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChartBarIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/FolderIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/FolderIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FolderIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FolderIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/UsersIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/UsersIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UsersIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(UsersIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);