(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Posts_js"],{

/***/ "./node_modules/@mui/material/CardContent/CardContent.js":
/*!***************************************************************!*\
  !*** ./node_modules/@mui/material/CardContent/CardContent.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/composeClasses/composeClasses.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _cardContentClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cardContentClasses */ "./node_modules/@mui/material/CardContent/cardContentClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className", "component"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _cardContentClasses__WEBPACK_IMPORTED_MODULE_6__.getCardContentUtilityClass, classes);
};

const CardContentRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiCardContent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => {
  return {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  };
});
const CardContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function CardContent(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__["default"])({
    props: inProps,
    name: 'MuiCardContent'
  });

  const {
    className,
    component = 'div'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    component
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CardContentRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: component,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 true ? CardContent.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().elementType),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardContent);

/***/ }),

/***/ "./node_modules/@mui/material/CardContent/cardContentClasses.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@mui/material/CardContent/cardContentClasses.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getCardContentUtilityClass": () => (/* binding */ getCardContentUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/generateUtilityClasses/generateUtilityClasses.js");

function getCardContentUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiCardContent', slot);
}
const cardContentClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiCardContent', ['root']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardContentClasses);

/***/ }),

/***/ "./node_modules/@mui/material/Card/Card.js":
/*!*************************************************!*\
  !*** ./node_modules/@mui/material/Card/Card.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/chainPropTypes.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/composeClasses/composeClasses.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Paper */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _cardClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cardClasses */ "./node_modules/@mui/material/Card/cardClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className", "raised"];











const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _cardClasses__WEBPACK_IMPORTED_MODULE_6__.getCardUtilityClass, classes);
};

const CardRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])(_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
  name: 'MuiCard',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => {
  return {
    overflow: 'hidden'
  };
});
const Card = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Card(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__["default"])({
    props: inProps,
    name: 'MuiCard'
  });

  const {
    className,
    raised = false
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    raised
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CardRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    elevation: raised ? 8 : undefined,
    ref: ref,
    ownerState: ownerState
  }, other));
});
 true ? Card.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
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
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised: (0,_mui_utils__WEBPACK_IMPORTED_MODULE_11__["default"])((prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool), props => {
    if (props.raised && props.variant === 'outlined') {
      return new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.');
    }

    return null;
  }),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./node_modules/@mui/material/Card/cardClasses.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/material/Card/cardClasses.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getCardUtilityClass": () => (/* binding */ getCardUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/generateUtilityClasses/generateUtilityClasses.js");

function getCardUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiCard', slot);
}
const cardClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiCard', ['root']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardClasses);

/***/ }),

/***/ "./node_modules/@mui/material/PaginationItem/PaginationItem.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@mui/material/PaginationItem/PaginationItem.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/composeClasses/composeClasses.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _paginationItemClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paginationItemClasses */ "./node_modules/@mui/material/PaginationItem/paginationItemClasses.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@mui/material/ButtonBase/ButtonBase.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@mui/material/utils/capitalize.js");
/* harmony import */ var _internal_svg_icons_FirstPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../internal/svg-icons/FirstPage */ "./node_modules/@mui/material/internal/svg-icons/FirstPage.js");
/* harmony import */ var _internal_svg_icons_LastPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../internal/svg-icons/LastPage */ "./node_modules/@mui/material/internal/svg-icons/LastPage.js");
/* harmony import */ var _internal_svg_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../internal/svg-icons/NavigateBefore */ "./node_modules/@mui/material/internal/svg-icons/NavigateBefore.js");
/* harmony import */ var _internal_svg_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../internal/svg-icons/NavigateNext */ "./node_modules/@mui/material/internal/svg-icons/NavigateNext.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className", "color", "component", "components", "disabled", "page", "selected", "shape", "size", "type", "variant"];


















const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, styles[ownerState.variant], styles[`size${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(ownerState.size)}`], ownerState.variant === 'text' && styles[`text${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(ownerState.color)}`], ownerState.variant === 'outlined' && styles[`outlined${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(ownerState.color)}`], ownerState.shape === 'rounded' && styles.rounded, ownerState.type === 'page' && styles.page, (ownerState.type === 'start-ellipsis' || ownerState.type === 'end-ellipsis') && styles.ellipsis, (ownerState.type === 'previous' || ownerState.type === 'next') && styles.previousNext, (ownerState.type === 'first' || ownerState.type === 'last') && styles.firstLast];
};

const useUtilityClasses = ownerState => {
  const {
    classes,
    color,
    disabled,
    selected,
    size,
    shape,
    type,
    variant
  } = ownerState;
  const slots = {
    root: ['root', `size${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(size)}`, variant, shape, color !== 'standard' && `${variant}${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(color)}`, disabled && 'disabled', selected && 'selected', {
      page: 'page',
      first: 'firstLast',
      last: 'firstLast',
      'start-ellipsis': 'ellipsis',
      'end-ellipsis': 'ellipsis',
      previous: 'previousNext',
      next: 'previousNext'
    }[type]],
    icon: ['icon']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_6__["default"])(slots, _paginationItemClasses__WEBPACK_IMPORTED_MODULE_7__.getPaginationItemUtilityClass, classes);
};

const PaginationItemEllipsis = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])('div', {
  name: 'MuiPaginationItem',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.body2, {
  borderRadius: 32 / 2,
  textAlign: 'center',
  boxSizing: 'border-box',
  minWidth: 32,
  padding: '0 6px',
  margin: '0 3px',
  color: (theme.vars || theme).palette.text.primary,
  height: 'auto',
  [`&.${_paginationItemClasses__WEBPACK_IMPORTED_MODULE_7__["default"].disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.size === 'small' && {
  minWidth: 26,
  borderRadius: 26 / 2,
  margin: '0 1px',
  padding: '0 4px'
}, ownerState.size === 'large' && {
  minWidth: 40,
  borderRadius: 40 / 2,
  padding: '0 10px',
  fontSize: theme.typography.pxToRem(15)
}));
const PaginationItemPage = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])(_ButtonBase__WEBPACK_IMPORTED_MODULE_9__["default"], {
  name: 'MuiPaginationItem',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.body2, {
  borderRadius: 32 / 2,
  textAlign: 'center',
  boxSizing: 'border-box',
  minWidth: 32,
  height: 32,
  padding: '0 6px',
  margin: '0 3px',
  color: (theme.vars || theme).palette.text.primary,
  [`&.${_paginationItemClasses__WEBPACK_IMPORTED_MODULE_7__["default"].focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${_paginationItemClasses__WEBPACK_IMPORTED_MODULE_7__["default"].disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  transition: theme.transitions.create(['color', 'background-color'], {
    duration: theme.transitions.duration.short
  }),
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${_paginationItemClasses__WEBPACK_IMPORTED_MODULE_7__["default"].selected}`]: {
    backgroundColor: (theme.vars || theme).palette.action.selected,
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selected} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__.alpha)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: (theme.vars || theme).palette.action.selected
      }
    },
    [`&.${_paginationItemClasses__WEBPACK_IMPORTED_MODULE_7__["default"].focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selected} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__.alpha)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    },
    [`&.${_paginationItemClasses__WEBPACK_IMPORTED_MODULE_7__["default"].disabled}`]: {
      opacity: 1,
      color: (theme.vars || theme).palette.action.disabled,
      backgroundColor: (theme.vars || theme).palette.action.selected
    }
  }
}, ownerState.size === 'small' && {
  minWidth: 26,
  height: 26,
  borderRadius: 26 / 2,
  margin: '0 1px',
  padding: '0 4px'
}, ownerState.size === 'large' && {
  minWidth: 40,
  height: 40,
  borderRadius: 40 / 2,
  padding: '0 10px',
  fontSize: theme.typography.pxToRem(15)
}, ownerState.shape === 'rounded' && {
  borderRadius: (theme.vars || theme).shape.borderRadius
}), ({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerState.variant === 'text' && {
  [`&.${_paginationItemClasses__WEBPACK_IMPORTED_MODULE_7__["default"].selected}`]: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerState.color !== 'standard' && {
    color: (theme.vars || theme).palette[ownerState.color].contrastText,
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
    '&:hover': {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
      }
    },
    [`&.${_paginationItemClasses__WEBPACK_IMPORTED_MODULE_7__["default"].focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
    }
  }, {
    [`&.${_paginationItemClasses__WEBPACK_IMPORTED_MODULE_7__["default"].disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled
    }
  })
}, ownerState.variant === 'outlined' && {
  border: theme.vars ? `1px solid rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`,
  [`&.${_paginationItemClasses__WEBPACK_IMPORTED_MODULE_7__["default"].selected}`]: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerState.color !== 'standard' && {
    color: (theme.vars || theme).palette[ownerState.color].main,
    border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__.alpha)(theme.palette[ownerState.color].main, 0.5)}`,
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.activatedOpacity})` : (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__.alpha)(theme.palette[ownerState.color].main, theme.palette.action.activatedOpacity),
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__.alpha)(theme.palette[ownerState.color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    [`&.${_paginationItemClasses__WEBPACK_IMPORTED_MODULE_7__["default"].focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__.alpha)(theme.palette[ownerState.color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity)
    }
  }, {
    [`&.${_paginationItemClasses__WEBPACK_IMPORTED_MODULE_7__["default"].disabled}`]: {
      borderColor: (theme.vars || theme).palette.action.disabledBackground,
      color: (theme.vars || theme).palette.action.disabled
    }
  })
}));
const PaginationItemPageIcon = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])('div', {
  name: 'MuiPaginationItem',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  fontSize: theme.typography.pxToRem(20),
  margin: '0 -8px'
}, ownerState.size === 'small' && {
  fontSize: theme.typography.pxToRem(18)
}, ownerState.size === 'large' && {
  fontSize: theme.typography.pxToRem(22)
}));
const PaginationItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function PaginationItem(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_11__["default"])({
    props: inProps,
    name: 'MuiPaginationItem'
  });

  const {
    className,
    color = 'standard',
    component,
    components = {
      first: _internal_svg_icons_FirstPage__WEBPACK_IMPORTED_MODULE_12__["default"],
      last: _internal_svg_icons_LastPage__WEBPACK_IMPORTED_MODULE_13__["default"],
      next: _internal_svg_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_14__["default"],
      previous: _internal_svg_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_15__["default"]
    },
    disabled = false,
    page,
    selected = false,
    shape = 'circular',
    size = 'medium',
    type = 'page',
    variant = 'text'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    color,
    disabled,
    selected,
    shape,
    size,
    type,
    variant
  });

  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const classes = useUtilityClasses(ownerState);
  const normalizedIcons = theme.direction === 'rtl' ? {
    previous: components.next || _internal_svg_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_14__["default"],
    next: components.previous || _internal_svg_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_15__["default"],
    last: components.first || _internal_svg_icons_FirstPage__WEBPACK_IMPORTED_MODULE_12__["default"],
    first: components.last || _internal_svg_icons_LastPage__WEBPACK_IMPORTED_MODULE_13__["default"]
  } : {
    previous: components.previous || _internal_svg_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_15__["default"],
    next: components.next || _internal_svg_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_14__["default"],
    first: components.first || _internal_svg_icons_FirstPage__WEBPACK_IMPORTED_MODULE_12__["default"],
    last: components.last || _internal_svg_icons_LastPage__WEBPACK_IMPORTED_MODULE_13__["default"]
  };
  const Icon = normalizedIcons[type];
  return type === 'start-ellipsis' || type === 'end-ellipsis' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(PaginationItemEllipsis, {
    ref: ref,
    ownerState: ownerState,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    children: "\u2026"
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(PaginationItemPage, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: ref,
    ownerState: ownerState,
    component: component,
    disabled: disabled,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className)
  }, other, {
    children: [type === 'page' && page, Icon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(PaginationItemPageIcon, {
      as: Icon,
      ownerState: ownerState,
      className: classes.icon
    }) : null]
  }));
});
 true ? PaginationItem.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string),

  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'standard'
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOf(['primary', 'secondary', 'standard']), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string)]),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().elementType),

  /**
   * The components used for first, last, next & previous item type
   * @default {
   *   first: FirstPageIcon,
   *   last: LastPageIcon,
   *   next: NavigateNextIcon,
   *   previous: NavigateBeforeIcon,
   * }
   */
  components: prop_types__WEBPACK_IMPORTED_MODULE_17___default().shape({
    first: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().elementType),
    last: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().elementType),
    next: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().elementType),
    previous: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().elementType)
  }),

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool),

  /**
   * The current page number.
   */
  page: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().node),

  /**
   * If `true` the pagination item is selected.
   * @default false
   */
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool),

  /**
   * The shape of the pagination item.
   * @default 'circular'
   */
  shape: prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOf(['circular', 'rounded']),

  /**
   * The size of the component.
   * @default 'medium'
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOf(['small', 'medium', 'large']), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string)]),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_17___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_17___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object)]),

  /**
   * The type of pagination item.
   * @default 'page'
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOf(['end-ellipsis', 'first', 'last', 'next', 'page', 'previous', 'start-ellipsis']),

  /**
   * The variant to use.
   * @default 'text'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOf(['outlined', 'text']), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationItem);

/***/ }),

/***/ "./node_modules/@mui/material/PaginationItem/paginationItemClasses.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@mui/material/PaginationItem/paginationItemClasses.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getPaginationItemUtilityClass": () => (/* binding */ getPaginationItemUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/generateUtilityClasses/generateUtilityClasses.js");

function getPaginationItemUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiPaginationItem', slot);
}
const paginationItemClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiPaginationItem', ['root', 'page', 'sizeSmall', 'sizeLarge', 'text', 'textPrimary', 'textSecondary', 'outlined', 'outlinedPrimary', 'outlinedSecondary', 'rounded', 'ellipsis', 'firstLast', 'previousNext', 'focusVisible', 'disabled', 'selected', 'icon']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paginationItemClasses);

/***/ }),

/***/ "./node_modules/@mui/material/Pagination/Pagination.js":
/*!*************************************************************!*\
  !*** ./node_modules/@mui/material/Pagination/Pagination.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/composeClasses/composeClasses.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/integerPropType.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _paginationClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginationClasses */ "./node_modules/@mui/material/Pagination/paginationClasses.js");
/* harmony import */ var _usePagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../usePagination */ "./node_modules/@mui/material/usePagination/usePagination.js");
/* harmony import */ var _PaginationItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../PaginationItem */ "./node_modules/@mui/material/PaginationItem/PaginationItem.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["boundaryCount", "className", "color", "count", "defaultPage", "disabled", "getItemAriaLabel", "hideNextButton", "hidePrevButton", "onChange", "page", "renderItem", "shape", "showFirstButton", "showLastButton", "siblingCount", "size", "variant"];












const useUtilityClasses = ownerState => {
  const {
    classes,
    variant
  } = ownerState;
  const slots = {
    root: ['root', variant],
    ul: ['ul']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _paginationClasses__WEBPACK_IMPORTED_MODULE_6__.getPaginationUtilityClass, classes);
};

const PaginationRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('nav', {
  name: 'MuiPagination',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant]];
  }
})({});
const PaginationUl = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('ul', {
  name: 'MuiPagination',
  slot: 'Ul',
  overridesResolver: (props, styles) => styles.ul
})({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  listStyle: 'none'
});

function defaultGetAriaLabel(type, page, selected) {
  if (type === 'page') {
    return `${selected ? '' : 'Go to '}page ${page}`;
  }

  return `Go to ${type} page`;
}

const Pagination = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Pagination(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__["default"])({
    props: inProps,
    name: 'MuiPagination'
  });

  const {
    boundaryCount = 1,
    className,
    color = 'standard',
    count = 1,
    defaultPage = 1,
    disabled = false,
    getItemAriaLabel = defaultGetAriaLabel,
    hideNextButton = false,
    hidePrevButton = false,
    renderItem = item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_9__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item)),
    shape = 'circular',
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    size = 'medium',
    variant = 'text'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const {
    items
  } = (0,_usePagination__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    componentName: 'Pagination'
  }));

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    boundaryCount,
    color,
    count,
    defaultPage,
    disabled,
    getItemAriaLabel,
    hideNextButton,
    hidePrevButton,
    renderItem,
    shape,
    showFirstButton,
    showLastButton,
    siblingCount,
    size,
    variant
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(PaginationRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": "pagination navigation",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(PaginationUl, {
      className: classes.ul,
      ownerState: ownerState,
      children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
        children: renderItem((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
          color,
          'aria-label': getItemAriaLabel(item.type, item.page, item.selected),
          shape,
          size,
          variant
        }))
      }, index))
    })
  }));
}); // @default tags synced with default values from usePagination

 true ? Pagination.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount: _mui_utils__WEBPACK_IMPORTED_MODULE_11__["default"],

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'standard'
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['primary', 'secondary', 'standard']), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)]),

  /**
   * The total number of pages.
   * @default 1
   */
  count: _mui_utils__WEBPACK_IMPORTED_MODULE_11__["default"],

  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage: _mui_utils__WEBPACK_IMPORTED_MODULE_11__["default"],

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous'). Defaults to 'page'.
   * @param {number} page The page number to format.
   * @param {bool} selected If true, the current page is selected.
   * @returns {string}
   */
  getItemAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func),

  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /**
   * Callback fired when the page is changed.
   *
   * @param {React.ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func),

  /**
   * The current page.
   */
  page: _mui_utils__WEBPACK_IMPORTED_MODULE_11__["default"],

  /**
   * Render the item.
   * @param {PaginationRenderItemParams} params The props to spread on a PaginationItem.
   * @returns {ReactNode}
   * @default (item) => <PaginationItem {...item} />
   */
  renderItem: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func),

  /**
   * The shape of the pagination items.
   * @default 'circular'
   */
  shape: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['circular', 'rounded']),

  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount: _mui_utils__WEBPACK_IMPORTED_MODULE_11__["default"],

  /**
   * The size of the component.
   * @default 'medium'
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['small', 'medium', 'large']), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)]),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object)]),

  /**
   * The variant to use.
   * @default 'text'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['outlined', 'text']), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./node_modules/@mui/material/Pagination/paginationClasses.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mui/material/Pagination/paginationClasses.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getPaginationUtilityClass": () => (/* binding */ getPaginationUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/generateUtilityClasses/generateUtilityClasses.js");

function getPaginationUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiPagination', slot);
}
const paginationClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiPagination', ['root', 'ul', 'outlined', 'text']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paginationClasses);

/***/ }),

/***/ "./node_modules/@mui/material/internal/svg-icons/FirstPage.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mui/material/internal/svg-icons/FirstPage.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), 'FirstPage'));

/***/ }),

/***/ "./node_modules/@mui/material/internal/svg-icons/LastPage.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@mui/material/internal/svg-icons/LastPage.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), 'LastPage'));

/***/ }),

/***/ "./node_modules/@mui/material/internal/svg-icons/NavigateBefore.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@mui/material/internal/svg-icons/NavigateBefore.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'NavigateBefore'));

/***/ }),

/***/ "./node_modules/@mui/material/internal/svg-icons/NavigateNext.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@mui/material/internal/svg-icons/NavigateNext.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'NavigateNext'));

/***/ }),

/***/ "./node_modules/@mui/material/usePagination/usePagination.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@mui/material/usePagination/usePagination.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePagination)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/useControlled.js");


const _excluded = ["boundaryCount", "componentName", "count", "defaultPage", "disabled", "hideNextButton", "hidePrevButton", "onChange", "page", "showFirstButton", "showLastButton", "siblingCount"];

function usePagination(props = {}) {
  // keep default values in sync with @default tags in Pagination.propTypes
  const {
    boundaryCount = 1,
    componentName = 'usePagination',
    count = 1,
    defaultPage = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange: handleChange,
    page: pageProp,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const [page, setPageState] = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__["default"])({
    controlled: pageProp,
    default: defaultPage,
    name: componentName,
    state: 'page'
  });

  const handleClick = (event, value) => {
    if (!pageProp) {
      setPageState(value);
    }

    if (handleChange) {
      handleChange(event, value);
    }
  }; // https://dev.to/namirsab/comment/2050


  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({
      length
    }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  const siblingsStart = Math.max(Math.min( // Natural start
  page - siblingCount, // Lower boundary when page is high
  count - boundaryCount - siblingCount * 2 - 1), // Greater than startPages
  boundaryCount + 2);
  const siblingsEnd = Math.min(Math.max( // Natural end
  page + siblingCount, // Upper boundary when page is low
  boundaryCount + siblingCount * 2 + 2), // Less than endPages
  endPages.length > 0 ? endPages[0] - 2 : count - 1); // Basic list of items to render
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']

  const itemList = [...(showFirstButton ? ['first'] : []), ...(hidePrevButton ? [] : ['previous']), ...startPages, // Start ellipsis
  // eslint-disable-next-line no-nested-ternary
  ...(siblingsStart > boundaryCount + 2 ? ['start-ellipsis'] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []), // Sibling pages
  ...range(siblingsStart, siblingsEnd), // End ellipsis
  // eslint-disable-next-line no-nested-ternary
  ...(siblingsEnd < count - boundaryCount - 1 ? ['end-ellipsis'] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []), ...endPages, ...(hideNextButton ? [] : ['next']), ...(showLastButton ? ['last'] : [])]; // Map the button type to its page number

  const buttonPage = type => {
    switch (type) {
      case 'first':
        return 1;

      case 'previous':
        return page - 1;

      case 'next':
        return page + 1;

      case 'last':
        return count;

      default:
        return null;
    }
  }; // Convert the basic item list to PaginationItem props objects


  const items = itemList.map(item => {
    return typeof item === 'number' ? {
      onClick: event => {
        handleClick(event, item);
      },
      type: 'page',
      page: item,
      selected: item === page,
      disabled,
      'aria-current': item === page ? 'true' : undefined
    } : {
      onClick: event => {
        handleClick(event, buttonPage(item));
      },
      type: item,
      page: buttonPage(item),
      selected: false,
      disabled: disabled || item.indexOf('ellipsis') === -1 && (item === 'next' || item === 'last' ? page >= count : page <= 1)
    };
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items
  }, other);
}

/***/ }),

/***/ "./resources/js/Pages/FilterPost.js":
/*!******************************************!*\
  !*** ./resources/js/Pages/FilterPost.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./resources/js/Pages/Posts.js":
/*!*************************************!*\
  !*** ./resources/js/Pages/Posts.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Pagination/Pagination.js");
/* harmony import */ var react_ribbons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-ribbons */ "./node_modules/react-ribbons/index.js");
/* harmony import */ var react_ribbons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_ribbons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_iso2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/iso2.png */ "./resources/js/assets/images/iso2.png");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lang.js */ "./node_modules/lang.js/src/lang.js");
/* harmony import */ var lang_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lang_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _FilterPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterPost */ "./resources/js/Pages/FilterPost.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var currentLang = new (lang_js__WEBPACK_IMPORTED_MODULE_4___default())();

var Posts = function Posts(_ref) {
  var posts = _ref.posts,
      postsData = _ref.postsData;

  //const {posts  } = usePage().props
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      post = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      filteredPost = _useState4[0],
      setFilteredPost = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      active = _useState6[0],
      setActive = _useState6[1];
  /* 
  console.log(posts)
  useEffect(() => {
    console.log("Redux:",first)
  }, []) */


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchPost();
  }, []);
  console.log("Data with fetch:", filteredPost);

  var fetchPost = function fetchPost() {
    setData(posts);
    setFilteredPost(posts.data);
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var handleChange = function handleChange(event, value) {
    setPage(value);
    window.location.href = "http://127.0.0.1:8000/articles?page=".concat(value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    mb: 20,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
        color: "red",
        variant: "h4",
        fontFamily: "Inter",
        children: "Retrouvez notre selection de publications TI \xE9labor\xE9es par notre equipe"
      })
    }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      justifyContent: "center",
      width: "100%"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: "10vh",
        justifyContent: "flex-start",
        my: 5,
        sx: {
          borderRadius: 5
        },
        alignItems: "center"
        /* bgcolor="#ed8484" */
        ,
        display: "flex",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
          textAlign: "left",
          fontFamily: "Inter",
          color: "red",
          variant: "h6",
          mx: 2,
          children: "Filtrer par"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_FilterPost__WEBPACK_IMPORTED_MODULE_6__["default"], {
          post: post,
          setFilteredPost: setFilteredPost,
          active: active,
          setActive: setActive
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
        container: true,
        spacing: 5,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_12__.AnimatePresence, {
          children: filteredPost ? filteredPost.map(function (item, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
              component: framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.div,
              Layout: true,
              whileHover: {
                scale: 1.2,
                transition: {
                  duration: 0.3
                }
              },
              item: true,
              xs: 12,
              sm: 3,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_ribbons__WEBPACK_IMPORTED_MODULE_1__.RibbonContainer, {
                className: "custom-class",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_ribbons__WEBPACK_IMPORTED_MODULE_1__.RightCornerLargeRibbon, {
                  backgroundColor: "#cc0000",
                  color: "#f0f0f0",
                  fontFamily: "Arial",
                  children: "1SIMPLE1"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
                  sx: {
                    xs: {
                      mx: 2
                    },
                    maxWidth: 350,
                    minHeight: 320
                  },
                  elevation: 2,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                    src: "../img/posts/".concat(item.image),
                    style: {
                      width: "100vh",
                      height: 150
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
                    children: [currentLang.getLocale() === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      mb: 1,
                      fontFamily: "Inter",
                      color: "red",
                      children: [" ", item.title.en, " "]
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      mb: 1,
                      fontFamily: "Inter",
                      color: "red",
                      children: [" ", item.title.fr, " "]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      fontFamily: "Inter-Regular",
                      textAlign: "left",
                      children: currentLang.getLocale() === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        mb: 1,
                        fontFamily: "Inter-Regular",
                        sx: {
                          display: "-webkit-box",
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 3
                        },
                        children: [" ", item.description.en, " "]
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        mb: 1,
                        fontFamily: "Inter-Regular",
                        sx: {
                          display: "-webkit-box",
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 3
                        },
                        children: [" ", item.description.fr, " "]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
                      variant: "contained",
                      sx: {
                        bgcolor: "red",
                        position: "relative"
                      },
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.InertiaLink, {
                        href: "/article/".concat(item.id),
                        children: "Lire plus"
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    sx: {
                      height: "40px",
                      backgroundColor: "#f6f6f6"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      textAlign: "left",
                      variant: "body2",
                      fontSize: 11,
                      fontFamily: "Inter-Regular",
                      children: "Juin 2022"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      fontSize: 11,
                      children: ["Category:", item.category.title.fr]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      variant: "body2",
                      fontSize: 11,
                      fontFamily: "Inter-Regular",
                      children: "publier par:1SIMPLE1"
                    })]
                  })]
                }), " "]
              })
            }, i);
          }) : "Loading..."
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      mt: 10,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
        size: "large",
        color: "error",
        count: posts.total / posts.per_page,
        page: posts.current_page,
        onChange: handleChange
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);

/***/ }),

/***/ "./resources/js/assets/images/iso2.png":
/*!*********************************************!*\
  !*** ./resources/js/assets/images/iso2.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/iso2.png?be57a15d86dc7a06edd54852d698ce58");

/***/ }),

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/hey-listen/dist/hey-listen.es.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invariant": () => (/* binding */ invariant),
/* harmony export */   "warning": () => (/* binding */ warning)
/* harmony export */ });
var warning = function () { };
var invariant = function () { };
if (true) {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/react-ribbons/index.js":
/*!*********************************************!*\
  !*** ./node_modules/react-ribbons/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js")):0}(window,(function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(t,n){t.exports=e},function(e,t,n){e.exports=n(4)()},function(e,t,n){var o=n(6);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(8)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){"use strict";n.r(t),n.d(t,"RibbonContainer",(function(){return c})),n.d(t,"RightCornerRibbon",(function(){return b})),n.d(t,"RightCornerLargeRibbon",(function(){return f})),n.d(t,"LeftCornerRibbon",(function(){return p})),n.d(t,"LeftCornerLargeRibbon",(function(){return u})),n.d(t,"RightRibbon",(function(){return d})),n.d(t,"RightLargeRibbon",(function(){return g})),n.d(t,"LeftRibbon",(function(){return R})),n.d(t,"LeftLargeRibbon",(function(){return h}));var o=n(0),r=n.n(o),i=n(1),a=n.n(i),s=n(2),l=n.n(s),c=function(e){var t=e.children,n=e.className;return r.a.createElement("div",{className:"".concat(l.a.ribbonContainer," ").concat(n||"")},t)};c.propTypes={children:a.a.any.isRequired,className:a.a.string},c.defaultProps={className:void 0};var b=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:l.a.rightCornerRibbon},r.a.createElement("svg",{height:"70",width:"70"},r.a.createElement("polygon",{points:"0 0, 0 10, 10 10",fill:"".concat(n,"77"),strokeWidth:"0"}),r.a.createElement("polygon",{points:"0 0, 70 70, 70 40, 30 0",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"60 60, 60 70, 70 70",fill:"".concat(n,"77"),strokeWidth:"0"})),r.a.createElement("span",{style:{color:o,fontFamily:i},className:l.a.rightCornerRibbonText},t))};b.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},b.defaultProps={fontFamily:"Arial"};var f=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:l.a.rightCornerLargeRibbon},r.a.createElement("svg",{height:"84",width:"84"},r.a.createElement("polygon",{points:"0 0, 0 12, 12 12",fill:"".concat(n,"77"),strokeWidth:"0"}),r.a.createElement("polygon",{points:"0 0, 84 84, 84 48, 36 0",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"72 72, 72 84, 84 84",fill:"".concat(n,"77"),strokeWidth:"0"})),r.a.createElement("span",{style:{color:o,fontFamily:i},className:l.a.rightCornerLargeRibbonText},t))};f.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},f.defaultProps={fontFamily:"Arial"};var p=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:l.a.leftCornerRibbon},r.a.createElement("svg",{height:"70",width:"70"},r.a.createElement("g",{transform:"rotate(-90, 35, 35)"},r.a.createElement("polygon",{points:"0 0, 0 10, 10 10",fill:"".concat(n,"77"),strokeWidth:"0"}),r.a.createElement("polygon",{points:"0 0, 70 70, 70 40, 30 0",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"60 60, 60 70, 70 70",fill:"".concat(n,"77"),strokeWidth:"0"}))),r.a.createElement("span",{style:{color:o,fontFamily:i},className:l.a.leftCornerRibbonText},t))};p.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},p.defaultProps={fontFamily:"Arial"};var u=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:l.a.leftCornerLargeRibbon},r.a.createElement("svg",{height:"84",width:"84"},r.a.createElement("g",{transform:"rotate(-90, 42, 42)"},r.a.createElement("polygon",{points:"0 0, 0 12, 12 12",fill:"".concat(n,"77"),strokeWidth:"0"}),r.a.createElement("polygon",{points:"0 0, 84 84, 84 48, 36 0",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"72 72, 72 84, 84 84",fill:"".concat(n,"77"),strokeWidth:"0"}))),r.a.createElement("span",{style:{color:o,fontFamily:i},className:l.a.leftCornerLargeRibbonText},t))};u.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},u.defaultProps={fontFamily:"Arial"};var d=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:l.a.rightRibbon},r.a.createElement("svg",{height:"40",width:"70"},r.a.createElement("polygon",{points:"0 10, 10 20, 0 30, 70 30, 70 10",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"60 40, 60 30, 70 30",fill:"".concat(n,"77"),strokeWidth:"0"})),r.a.createElement("span",{style:{color:o,fontFamily:i},className:l.a.rightRibbonText},t))};d.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},d.defaultProps={fontFamily:"Arial"};var g=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:l.a.rightLargeRibbon},r.a.createElement("svg",{height:"60",width:"90"},r.a.createElement("polygon",{points:"0 15, 15 30, 0 45, 90 45, 90 15",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"75 60, 75 40, 90 45",fill:"".concat(n,"77"),strokeWidth:"0"})),r.a.createElement("span",{style:{color:o,fontFamily:i},className:l.a.rightLargeRibbonText},t))};g.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},g.defaultProps={fontFamily:"Arial"};var R=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:l.a.leftRibbon},r.a.createElement("svg",{height:"40",width:"70"},r.a.createElement("g",{transform:"scale(-1,1) translate(-70, 0)"},r.a.createElement("polygon",{points:"0 10, 10 20, 0 30, 70 30, 70 10",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"60 40, 60 30, 70 30",fill:"".concat(n,"77"),strokeWidth:"0"}))),r.a.createElement("span",{style:{color:o,fontFamily:i},className:l.a.leftRibbonText},t))};R.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},R.defaultProps={fontFamily:"Arial"};var h=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:l.a.leftLargeRibbon},r.a.createElement("svg",{height:"60",width:"90"},r.a.createElement("g",{transform:"scale(-1,1) translate(-90, 0)"},r.a.createElement("polygon",{points:"0 15, 15 30, 0 45, 90 45, 90 15",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"75 60, 75 40, 90 45",fill:"".concat(n,"77"),strokeWidth:"0"}))),r.a.createElement("span",{style:{color:o,fontFamily:i},className:l.a.leftLargeRibbonText},t))};h.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},h.defaultProps={fontFamily:"Arial"}},function(e,t,n){"use strict";var o=n(5);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){(t=e.exports=n(7)(!1)).push([e.i,".ReactRibbons_ribbonContainer_3Zi1le5BXstWhvxMbxE3QQ{position:relative;min-height:100px}.ReactRibbons_rightCornerRibbon_1-P96PNPfVooTf7iAd8ts4{position:absolute;top:-10px;right:-10px}.ReactRibbons_rightCornerRibbonText_lAUhrhctW69RCvQMzXCAj{position:absolute;transform:rotate(45deg);font-size:0.8em;display:flex;align-items:center;justify-content:center;width:100%;height:100%;top:-8px;right:-8px}.ReactRibbons_rightCornerLargeRibbon_2Iq3FJ4ppvHaWBuB2ELV4y{position:absolute;top:-12px;right:-12px}.ReactRibbons_rightCornerLargeRibbonText_1WZuhM5iMjMsIZmZzSn15R{position:absolute;transform:rotate(45deg);font-size:0.9em;display:flex;align-items:center;justify-content:center;width:100%;height:100%;top:-10px;right:-10px}.ReactRibbons_leftCornerRibbon_2L1X3PRpoW_Cbx04HKYerO{position:absolute;top:-10px;left:-10px}.ReactRibbons_leftCornerRibbonText_5DsxRgO9L2R7yhdWr5MWZ{position:absolute;transform:rotate(-45deg);font-size:0.8em;display:flex;align-items:center;justify-content:center;width:100%;height:100%;top:-8px;left:-8px}.ReactRibbons_leftCornerLargeRibbon_2k55QxRrtg-UM6V8xbnbKL{position:absolute;top:-12px;left:-12px}.ReactRibbons_leftCornerLargeRibbonText_1vPBHBrNbo1_T7ApSNGFBz{position:absolute;transform:rotate(-45deg);font-size:0.9em;display:flex;align-items:center;justify-content:center;width:100%;height:100%;top:-10px;left:-10px}.ReactRibbons_rightRibbon_1U_hyaQbXrjGdr5diDkP4J{position:absolute;top:0;right:-10px}.ReactRibbons_rightRibbonText_3oO5W55LjrYkBS1zXIqGFo{position:absolute;font-size:0.8em;top:12px;right:7px}.ReactRibbons_rightLargeRibbon_3kFosVYSxjkNLiIlgAau5-{position:absolute;top:0;right:-15px}.ReactRibbons_rightLargeRibbonText_2Qt8aGFwCEOMXDh3gE7LPt{position:absolute;font-size:0.9em;top:21px;right:9px}.ReactRibbons_leftRibbon_3GNEv0eSmq2XZPFgY3OdU4{position:absolute;top:0;left:-10px}.ReactRibbons_leftRibbonText_aBRlvzZrqntSZwv1D7Bjt{position:absolute;font-size:0.8em;top:12px;left:7px}.ReactRibbons_leftLargeRibbon__DwM5zy9iBDjj17ph6pUf{position:absolute;top:0;left:-15px}.ReactRibbons_leftLargeRibbonText_1SAojwHIrk8Rz0e2pG0aF_{position:absolute;font-size:0.9em;top:21px;left:9px}\n",""]),t.locals={ribbonContainer:"ReactRibbons_ribbonContainer_3Zi1le5BXstWhvxMbxE3QQ",rightCornerRibbon:"ReactRibbons_rightCornerRibbon_1-P96PNPfVooTf7iAd8ts4",rightCornerRibbonText:"ReactRibbons_rightCornerRibbonText_lAUhrhctW69RCvQMzXCAj",rightCornerLargeRibbon:"ReactRibbons_rightCornerLargeRibbon_2Iq3FJ4ppvHaWBuB2ELV4y",rightCornerLargeRibbonText:"ReactRibbons_rightCornerLargeRibbonText_1WZuhM5iMjMsIZmZzSn15R",leftCornerRibbon:"ReactRibbons_leftCornerRibbon_2L1X3PRpoW_Cbx04HKYerO",leftCornerRibbonText:"ReactRibbons_leftCornerRibbonText_5DsxRgO9L2R7yhdWr5MWZ",leftCornerLargeRibbon:"ReactRibbons_leftCornerLargeRibbon_2k55QxRrtg-UM6V8xbnbKL",leftCornerLargeRibbonText:"ReactRibbons_leftCornerLargeRibbonText_1vPBHBrNbo1_T7ApSNGFBz",rightRibbon:"ReactRibbons_rightRibbon_1U_hyaQbXrjGdr5diDkP4J",rightRibbonText:"ReactRibbons_rightRibbonText_3oO5W55LjrYkBS1zXIqGFo",rightLargeRibbon:"ReactRibbons_rightLargeRibbon_3kFosVYSxjkNLiIlgAau5-",rightLargeRibbonText:"ReactRibbons_rightLargeRibbonText_2Qt8aGFwCEOMXDh3gE7LPt",leftRibbon:"ReactRibbons_leftRibbon_3GNEv0eSmq2XZPFgY3OdU4",leftRibbonText:"ReactRibbons_leftRibbonText_aBRlvzZrqntSZwv1D7Bjt",leftLargeRibbon:"ReactRibbons_leftLargeRibbon__DwM5zy9iBDjj17ph6pUf",leftLargeRibbonText:"ReactRibbons_leftLargeRibbonText_1SAojwHIrk8Rz0e2pG0aF_"}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){"use strict";var o,r={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function l(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(R(o.parts[a],t))}else{for(var s=[];a<o.parts.length;a++)s.push(R(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var o=n.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var b,f=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r&&e.setAttribute("media",r),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var d=null,g=0;function R(e,t){var n,o,r;if(t.singleton){var i=g++;n=d||(d=c(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=c(t),o=u.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e,t);return l(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i],c=r[a.id];c&&(c.refs--,o.push(c))}e&&l(s(e,t),t);for(var b=0;b<o.length;b++){var f=o[b];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete r[f.id]}}}}}])}));

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animate.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animate.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animate": () => (/* binding */ animate)
/* harmony export */ });
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/transitions.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs");




/**
 * Animate a single value or a `MotionValue`.
 *
 * The first argument is either a `MotionValue` to animate, or an initial animation value.
 *
 * The second is either a value to animate to, or an array of keyframes to animate through.
 *
 * The third argument can be either tween or spring options, and optional lifecycle methods: `onUpdate`, `onPlay`, `onComplete`, `onRepeat` and `onStop`.
 *
 * Returns `AnimationPlaybackControls`, currently just a `stop` method.
 *
 * ```javascript
 * const x = useMotionValue(0)
 *
 * useEffect(() => {
 *   const controls = animate(x, 100, {
 *     type: "spring",
 *     stiffness: 2000,
 *     onComplete: v => {}
 *   })
 *
 *   return controls.stop
 * })
 * ```
 *
 * @public
 */
function animate(from, to, transition) {
    if (transition === void 0) { transition = {}; }
    var value = (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(from) ? from : (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.motionValue)(from);
    (0,_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_2__.startAnimation)("", value, to, transition);
    return {
        stop: function () { return value.stop(); },
        isAnimating: function () { return value.isAnimating(); },
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "criticallyDampedSpring": () => (/* binding */ criticallyDampedSpring),
/* harmony export */   "getDefaultTransition": () => (/* binding */ getDefaultTransition),
/* harmony export */   "linearTween": () => (/* binding */ linearTween),
/* harmony export */   "underDampedSpring": () => (/* binding */ underDampedSpring)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-keyframes-target.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs");



var underDampedSpring = function () { return ({
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
}); };
var criticallyDampedSpring = function (to) { return ({
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
}); };
var linearTween = function () { return ({
    type: "keyframes",
    ease: "linear",
    duration: 0.3,
}); };
var keyframes = function (values) { return ({
    type: "keyframes",
    duration: 0.8,
    values: values,
}); };
var defaultTransitions = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: criticallyDampedSpring,
    scaleY: criticallyDampedSpring,
    scale: criticallyDampedSpring,
    opacity: linearTween,
    backgroundColor: linearTween,
    color: linearTween,
    default: criticallyDampedSpring,
};
var getDefaultTransition = function (valueKey, to) {
    var transitionFactory;
    if ((0,_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__.isKeyframesTarget)(to)) {
        transitionFactory = keyframes;
    }
    else {
        transitionFactory =
            defaultTransitions[valueKey] || defaultTransitions.default;
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ to: to }, transitionFactory(to));
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/easing.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/easing.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easingDefinitionToFunction": () => (/* binding */ easingDefinitionToFunction),
/* harmony export */   "isEasingArray": () => (/* binding */ isEasingArray)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/easing/index.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/easing/cubic-bezier.mjs");




var easingLookup = {
    linear: popmotion__WEBPACK_IMPORTED_MODULE_1__.linear,
    easeIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.easeIn,
    easeInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.easeInOut,
    easeOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.easeOut,
    circIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.circIn,
    circInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.circInOut,
    circOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.circOut,
    backIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.backIn,
    backInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.backInOut,
    backOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.backOut,
    anticipate: popmotion__WEBPACK_IMPORTED_MODULE_1__.anticipate,
    bounceIn: popmotion__WEBPACK_IMPORTED_MODULE_1__.bounceIn,
    bounceInOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.bounceInOut,
    bounceOut: popmotion__WEBPACK_IMPORTED_MODULE_1__.bounceOut,
};
var easingDefinitionToFunction = function (definition) {
    if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
        var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
        return (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.cubicBezier)(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(easingLookup[definition] !== undefined, "Invalid easing type '".concat(definition, "'"));
        return easingLookup[definition];
    }
    return definition;
};
var isEasingArray = function (ease) {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAnimatable": () => (/* binding */ isAnimatable)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.mjs");


/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
var isAnimatable = function (key, value) {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (key === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        style_value_types__WEBPACK_IMPORTED_MODULE_0__.complex.test(value) && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAnimationControls": () => (/* binding */ isAnimationControls)
/* harmony export */ });
function isAnimationControls(v) {
    return typeof v === "object" && typeof v.start === "function";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isKeyframesTarget": () => (/* binding */ isKeyframesTarget)
/* harmony export */ });
var isKeyframesTarget = function (v) {
    return Array.isArray(v);
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTransitionToAnimationOptions": () => (/* binding */ convertTransitionToAnimationOptions),
/* harmony export */   "getDelayFromTransition": () => (/* binding */ getDelayFromTransition),
/* harmony export */   "getPopmotionAnimationOptions": () => (/* binding */ getPopmotionAnimationOptions),
/* harmony export */   "getValueTransition": () => (/* binding */ getValueTransition),
/* harmony export */   "getZeroUnit": () => (/* binding */ getZeroUnit),
/* harmony export */   "hydrateKeyframes": () => (/* binding */ hydrateKeyframes),
/* harmony export */   "isTransitionDefined": () => (/* binding */ isTransitionDefined),
/* harmony export */   "isZero": () => (/* binding */ isZero),
/* harmony export */   "startAnimation": () => (/* binding */ startAnimation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/animations/inertia.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/animations/index.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _easing_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easing.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/easing.mjs");
/* harmony import */ var _is_animatable_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-animatable.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs");
/* harmony import */ var _default_transitions_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-transitions.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _render_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../render/dom/value-types/animatable-none.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs");
/* harmony import */ var _utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/use-instant-transition-state.mjs */ "./node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs");
/* harmony import */ var _utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/resolve-value.mjs */ "./node_modules/framer-motion/dist/es/utils/resolve-value.mjs");











/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined(_a) {
    _a.when; _a.delay; _a.delayChildren; _a.staggerChildren; _a.staggerDirection; _a.repeat; _a.repeatType; _a.repeatDelay; _a.from; var transition = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
    return !!Object.keys(transition).length;
}
var legacyRepeatWarning = false;
/**
 * Convert Framer Motion's Transition type into Popmotion-compatible options.
 */
function convertTransitionToAnimationOptions(_a) {
    var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["ease", "times", "yoyo", "flip", "loop"]);
    var options = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, transition);
    if (times)
        options["offset"] = times;
    /**
     * Convert any existing durations from seconds to milliseconds
     */
    if (transition.duration)
        options["duration"] = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(transition.duration);
    if (transition.repeatDelay)
        options.repeatDelay = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(transition.repeatDelay);
    /**
     * Map easing names to Popmotion's easing functions
     */
    if (ease) {
        options["ease"] = (0,_easing_mjs__WEBPACK_IMPORTED_MODULE_3__.isEasingArray)(ease)
            ? ease.map(_easing_mjs__WEBPACK_IMPORTED_MODULE_3__.easingDefinitionToFunction)
            : (0,_easing_mjs__WEBPACK_IMPORTED_MODULE_3__.easingDefinitionToFunction)(ease);
    }
    /**
     * Support legacy transition API
     */
    if (transition.type === "tween")
        options.type = "keyframes";
    /**
     * TODO: These options are officially removed from the API.
     */
    if (yoyo || loop || flip) {
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.warning)(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
        legacyRepeatWarning = true;
        if (yoyo) {
            options.repeatType = "reverse";
        }
        else if (loop) {
            options.repeatType = "loop";
        }
        else if (flip) {
            options.repeatType = "mirror";
        }
        options.repeat = loop || yoyo || flip || transition.repeat;
    }
    /**
     * TODO: Popmotion 9 has the ability to automatically detect whether to use
     * a keyframes or spring animation, but does so by detecting velocity and other spring options.
     * It'd be good to introduce a similar thing here.
     */
    if (transition.type !== "spring")
        options.type = "keyframes";
    return options;
}
/**
 * Get the delay for a value by checking Transition with decreasing specificity.
 */
function getDelayFromTransition(transition, key) {
    var _a, _b;
    var valueTransition = getValueTransition(transition, key) || {};
    return (_b = (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : transition.delay) !== null && _b !== void 0 ? _b : 0;
}
function hydrateKeyframes(options) {
    if (Array.isArray(options.to) && options.to[0] === null) {
        options.to = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(options.to), false);
        options.to[0] = options.from;
    }
    return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
    var _a;
    if (Array.isArray(options.to)) {
        (_a = transition.duration) !== null && _a !== void 0 ? _a : (transition.duration = 0.8);
    }
    hydrateKeyframes(options);
    /**
     * Get a default transition if none is determined to be defined.
     */
    if (!isTransitionDefined(transition)) {
        transition = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, transition), (0,_default_transitions_mjs__WEBPACK_IMPORTED_MODULE_4__.getDefaultTransition)(key, options.to));
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), convertTransitionToAnimationOptions(transition));
}
/**
 *
 */
function getAnimation(key, value, target, transition, onComplete) {
    var _a;
    var valueTransition = getValueTransition(transition, key);
    var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
    var isTargetAnimatable = (0,_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_5__.isAnimatable)(key, target);
    if (origin === "none" && isTargetAnimatable && typeof target === "string") {
        /**
         * If we're trying to animate from "none", try and get an animatable version
         * of the target. This could be improved to work both ways.
         */
        origin = (0,_render_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_6__.getAnimatableNone)(key, target);
    }
    else if (isZero(origin) && typeof target === "string") {
        origin = getZeroUnit(target);
    }
    else if (!Array.isArray(target) &&
        isZero(target) &&
        typeof origin === "string") {
        target = getZeroUnit(origin);
    }
    var isOriginAnimatable = (0,_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_5__.isAnimatable)(key, origin);
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.warning)(isOriginAnimatable === isTargetAnimatable, "You are trying to animate ".concat(key, " from \"").concat(origin, "\" to \"").concat(target, "\". ").concat(origin, " is not an animatable value - to enable this animation set ").concat(origin, " to a value animatable to ").concat(target, " via the `style` property."));
    function start() {
        var options = {
            from: origin,
            to: target,
            velocity: value.getVelocity(),
            onComplete: onComplete,
            onUpdate: function (v) { return value.set(v); },
        };
        return valueTransition.type === "inertia" ||
            valueTransition.type === "decay"
            ? (0,popmotion__WEBPACK_IMPORTED_MODULE_7__.inertia)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), valueTransition))
            : (0,popmotion__WEBPACK_IMPORTED_MODULE_8__.animate)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function (v) {
                    var _a;
                    options.onUpdate(v);
                    (_a = valueTransition.onUpdate) === null || _a === void 0 ? void 0 : _a.call(valueTransition, v);
                }, onComplete: function () {
                    var _a;
                    options.onComplete();
                    (_a = valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
                } }));
    }
    function set() {
        var _a, _b;
        var finalTarget = (0,_utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_9__.resolveFinalValueInKeyframes)(target);
        value.set(finalTarget);
        onComplete();
        (_a = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onUpdate) === null || _a === void 0 ? void 0 : _a.call(valueTransition, finalTarget);
        (_b = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _b === void 0 ? void 0 : _b.call(valueTransition);
        return { stop: function () { } };
    }
    return !isOriginAnimatable ||
        !isTargetAnimatable ||
        valueTransition.type === false
        ? set
        : start;
}
function isZero(value) {
    return (value === 0 ||
        (typeof value === "string" &&
            parseFloat(value) === 0 &&
            value.indexOf(" ") === -1));
}
function getZeroUnit(potentialUnitType) {
    return typeof potentialUnitType === "number"
        ? 0
        : (0,_render_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_6__.getAnimatableNone)("", potentialUnitType);
}
function getValueTransition(transition, key) {
    return transition[key] || transition["default"] || transition;
}
/**
 * Start animation on a MotionValue. This function is an interface between
 * Framer Motion and Popmotion
 */
function startAnimation(key, value, target, transition) {
    if (transition === void 0) { transition = {}; }
    if (_utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_10__.instantAnimationState.current) {
        transition = { type: false };
    }
    return value.start(function (onComplete) {
        var delayTimer;
        var controls;
        var animation = getAnimation(key, value, target, transition, onComplete);
        var delay = getDelayFromTransition(transition, key);
        var start = function () { return (controls = animation()); };
        if (delay) {
            delayTimer = window.setTimeout(start, (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(delay));
        }
        else {
            start();
        }
        return function () {
            clearTimeout(delayTimer);
            controls === null || controls === void 0 ? void 0 : controls.stop();
        };
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresenceChild": () => (/* binding */ PresenceChild)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");
/* harmony import */ var _utils_use_id_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-id.mjs */ "./node_modules/framer-motion/dist/es/utils/use-id.mjs");







var PresenceChild = function (_a) {
    var children = _a.children, initial = _a.initial, isPresent = _a.isPresent, onExitComplete = _a.onExitComplete, custom = _a.custom, presenceAffectsLayout = _a.presenceAffectsLayout;
    var presenceChildren = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__.useConstant)(newChildrenMap);
    var id = (0,_utils_use_id_mjs__WEBPACK_IMPORTED_MODULE_2__.useId)();
    var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return ({
        id: id,
        initial: initial,
        isPresent: isPresent,
        custom: custom,
        onExitComplete: function (childId) {
            var e_1, _a;
            presenceChildren.set(childId, true);
            try {
                for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(presenceChildren.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var isComplete = _c.value;
                    if (!isComplete)
                        return; // can stop searching when any is incomplete
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete();
        },
        register: function (childId) {
            presenceChildren.set(childId, false);
            return function () { return presenceChildren.delete(childId); };
        },
    }); }, 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? undefined : [isPresent]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        presenceChildren.forEach(function (_, key) { return presenceChildren.set(key, false); });
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        !isPresent && !presenceChildren.size && (onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete());
    }, [isPresent]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_4__.PresenceContext.Provider, { value: context }, children));
};
function newChildrenMap() {
    return new Map();
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimatePresence": () => (/* binding */ AnimatePresence)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_process_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/process.mjs */ "./node_modules/framer-motion/dist/es/utils/process.mjs");
/* harmony import */ var _utils_use_force_update_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-force-update.mjs */ "./node_modules/framer-motion/dist/es/utils/use-force-update.mjs");
/* harmony import */ var _utils_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/use-is-mounted.mjs */ "./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs");
/* harmony import */ var _PresenceChild_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PresenceChild.mjs */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs");
/* harmony import */ var _context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/LayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");
/* harmony import */ var _utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/use-isomorphic-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");
/* harmony import */ var _utils_use_unmount_effect_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/use-unmount-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs");











var getChildKey = function (child) { return child.key || ""; };
function updateChildLookup(children, allChildren) {
    children.forEach(function (child) {
        var key = getChildKey(child);
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    var filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, function (child) {
        if ((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
var AnimatePresence = function (_a) {
    var children = _a.children, custom = _a.custom, _b = _a.initial, initial = _b === void 0 ? true : _b, onExitComplete = _a.onExitComplete, exitBeforeEnter = _a.exitBeforeEnter, _c = _a.presenceAffectsLayout, presenceAffectsLayout = _c === void 0 ? true : _c;
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceRender function, or one from a parent context if it exists.
    var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,_utils_use_force_update_mjs__WEBPACK_IMPORTED_MODULE_2__.useForceUpdate)(), 1), forceRender = _d[0];
    var forceRenderLayoutGroup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_3__.LayoutGroupContext).forceRender;
    if (forceRenderLayoutGroup)
        forceRender = forceRenderLayoutGroup;
    var isMounted = (0,_utils_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_4__.useIsMounted)();
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    var filteredChildren = onlyElements(children);
    var childrenToRender = filteredChildren;
    var exiting = new Set();
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    var presentChildren = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(childrenToRender);
    // A lookup table to quickly reference components by key
    var allChildren = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map()).current;
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    var isInitialRender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
    (0,_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(function () {
        isInitialRender.current = false;
        updateChildLookup(filteredChildren, allChildren);
        presentChildren.current = childrenToRender;
    });
    (0,_utils_use_unmount_effect_mjs__WEBPACK_IMPORTED_MODULE_6__.useUnmountEffect)(function () {
        isInitialRender.current = true;
        allChildren.clear();
        exiting.clear();
    });
    if (isInitialRender.current) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, childrenToRender.map(function (child) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PresenceChild_mjs__WEBPACK_IMPORTED_MODULE_7__.PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false, presenceAffectsLayout: presenceAffectsLayout }, child)); })));
    }
    // If this is a subsequent render, deal with entering and exiting children
    childrenToRender = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(childrenToRender), false);
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    var presentKeys = presentChildren.current.map(getChildKey);
    var targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    var numPresent = presentKeys.length;
    for (var i = 0; i < numPresent; i++) {
        var key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
            exiting.add(key);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (exitBeforeEnter && exiting.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exiting.forEach(function (key) {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        var child = allChildren.get(key);
        if (!child)
            return;
        var insertionIndex = presentKeys.indexOf(key);
        var onExit = function () {
            allChildren.delete(key);
            exiting.delete(key);
            // Remove this child from the present children
            var removeIndex = presentChildren.current.findIndex(function (presentChild) { return presentChild.key === key; });
            presentChildren.current.splice(removeIndex, 1);
            // Defer re-rendering until all exiting children have indeed left
            if (!exiting.size) {
                presentChildren.current = filteredChildren;
                if (isMounted.current === false)
                    return;
                forceRender();
                onExitComplete && onExitComplete();
            }
        };
        childrenToRender.splice(insertionIndex, 0, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PresenceChild_mjs__WEBPACK_IMPORTED_MODULE_7__.PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom, presenceAffectsLayout: presenceAffectsLayout }, child));
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map(function (child) {
        var key = child.key;
        return exiting.has(key) ? (child) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PresenceChild_mjs__WEBPACK_IMPORTED_MODULE_7__.PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout: presenceAffectsLayout }, child));
    });
    if (_utils_process_mjs__WEBPACK_IMPORTED_MODULE_8__.env !== "production" &&
        exitBeforeEnter &&
        childrenToRender.length > 1) {
        console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.");
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, exiting.size
        ? childrenToRender
        : childrenToRender.map(function (child) { return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child); })));
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPresent": () => (/* binding */ isPresent),
/* harmony export */   "useIsPresent": () => (/* binding */ useIsPresent),
/* harmony export */   "usePresence": () => (/* binding */ usePresence)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
/* harmony import */ var _utils_use_id_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-id.mjs */ "./node_modules/framer-motion/dist/es/utils/use-id.mjs");




/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_1__.PresenceContext);
    if (context === null)
        return [true, null];
    var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    // Replace with useId when released in React
    var id = (0,_utils_use_id_mjs__WEBPACK_IMPORTED_MODULE_2__.useId)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return register(id); }, []);
    var safeToRemove = function () { return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id); };
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */
function useIsPresent() {
    return isPresent((0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_1__.PresenceContext));
}
function isPresent(context) {
    return context === null ? true : context.isPresent;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutGroupContext": () => (/* binding */ LayoutGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var LayoutGroupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/LazyContext.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/LazyContext.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyContext": () => (/* binding */ LazyContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var LazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({ strict: false });




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionConfigContext": () => (/* binding */ MotionConfigContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/**
 * @public
 */
var MotionConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    transformPagePoint: function (p) { return p; },
    isStatic: false,
    reducedMotion: "never",
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCreateMotionContext": () => (/* binding */ useCreateMotionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs");




function useCreateMotionContext(props) {
    var _a = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.getCurrentTreeVariants)(props, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_index_mjs__WEBPACK_IMPORTED_MODULE_2__.MotionContext)), initial = _a.initial, animate = _a.animate;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return ({ initial: initial, animate: animate }); }, [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionContext": () => (/* binding */ MotionContext),
/* harmony export */   "useVisualElementContext": () => (/* binding */ useVisualElementContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var MotionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function useVisualElementContext() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MotionContext).visualElement;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentTreeVariants": () => (/* binding */ getCurrentTreeVariants)
/* harmony export */ });
/* harmony import */ var _render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/utils/variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variants.mjs");


function getCurrentTreeVariants(props, context) {
    if ((0,_render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.checkIfControllingVariants)(props)) {
        var initial = props.initial, animate = props.animate;
        return {
            initial: initial === false || (0,_render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.isVariantLabel)(initial)
                ? initial
                : undefined,
            animate: (0,_render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.isVariantLabel)(animate) ? animate : undefined,
        };
    }
    return props.inherit !== false ? context : {};
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/PresenceContext.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresenceContext": () => (/* binding */ PresenceContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/**
 * @public
 */
var PresenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchLayoutGroupContext": () => (/* binding */ SwitchLayoutGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/**
 * Internal, exported only for usage in Framer
 */
var SwitchLayoutGroupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/event-info.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/event-info.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractEventInfo": () => (/* binding */ extractEventInfo),
/* harmony export */   "wrapHandler": () => (/* binding */ wrapHandler)
/* harmony export */ });
/* harmony import */ var _gestures_utils_event_type_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gestures/utils/event-type.mjs */ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs");


/**
 * Filters out events not attached to the primary pointer (currently left mouse button)
 * @param eventHandler
 */
function filterPrimaryPointer(eventHandler) {
    return function (event) {
        var isMouseEvent = event instanceof MouseEvent;
        var isPrimaryPointer = !isMouseEvent ||
            (isMouseEvent && event.button === 0);
        if (isPrimaryPointer) {
            eventHandler(event);
        }
    };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    var primaryTouch = e.touches[0] || e.changedTouches[0];
    var point = primaryTouch || defaultPagePoint;
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function pointFromMouse(point, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function extractEventInfo(event, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        point: (0,_gestures_utils_event_type_mjs__WEBPACK_IMPORTED_MODULE_0__.isTouchEvent)(event)
            ? pointFromTouch(event, pointType)
            : pointFromMouse(event, pointType),
    };
}
var wrapHandler = function (handler, shouldFilterPrimaryPointer) {
    if (shouldFilterPrimaryPointer === void 0) { shouldFilterPrimaryPointer = false; }
    var listener = function (event) {
        return handler(event, extractEventInfo(event));
    };
    return shouldFilterPrimaryPointer
        ? filterPrimaryPointer(listener)
        : listener;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/use-dom-event.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/use-dom-event.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDomEvent": () => (/* binding */ addDomEvent),
/* harmony export */   "useDomEvent": () => (/* binding */ useDomEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function addDomEvent(target, eventName, handler, options) {
    if (options === void 0) { options = { passive: true }; }
    target.addEventListener(eventName, handler, options);
    return function () { return target.removeEventListener(eventName, handler); };
}
/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */
function useDomEvent(ref, eventName, handler, options) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var element = ref.current;
        if (handler && element) {
            return addDomEvent(element, eventName, handler, options);
        }
    }, [ref, eventName, handler, options]);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/use-pointer-event.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/use-pointer-event.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPointerEvent": () => (/* binding */ addPointerEvent),
/* harmony export */   "usePointerEvent": () => (/* binding */ usePointerEvent)
/* harmony export */ });
/* harmony import */ var _use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-dom-event.mjs");
/* harmony import */ var _event_info_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-info.mjs */ "./node_modules/framer-motion/dist/es/events/event-info.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/framer-motion/dist/es/events/utils.mjs");




var mouseEventNames = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
};
var touchEventNames = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
};
function getPointerEventName(name) {
    if ((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsPointerEvents)()) {
        return name;
    }
    else if ((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsTouchEvents)()) {
        return touchEventNames[name];
    }
    else if ((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsMouseEvents)()) {
        return mouseEventNames[name];
    }
    return name;
}
function addPointerEvent(target, eventName, handler, options) {
    return (0,_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__.addDomEvent)(target, getPointerEventName(eventName), (0,_event_info_mjs__WEBPACK_IMPORTED_MODULE_2__.wrapHandler)(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
    return (0,_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__.useDomEvent)(ref, getPointerEventName(eventName), handler && (0,_event_info_mjs__WEBPACK_IMPORTED_MODULE_2__.wrapHandler)(handler, eventName === "pointerdown"), options);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/utils.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/utils.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportsMouseEvents": () => (/* binding */ supportsMouseEvents),
/* harmony export */   "supportsPointerEvents": () => (/* binding */ supportsPointerEvents),
/* harmony export */   "supportsTouchEvents": () => (/* binding */ supportsTouchEvents)
/* harmony export */ });
/* harmony import */ var _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-browser.mjs */ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs");


// We check for event support via functions in case they've been mocked by a testing suite.
var supportsPointerEvents = function () {
    return _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_0__.isBrowser && window.onpointerdown === null;
};
var supportsTouchEvents = function () {
    return _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_0__.isBrowser && window.ontouchstart === null;
};
var supportsMouseEvents = function () {
    return _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_0__.isBrowser && window.onmousedown === null;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/PanSession.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/PanSession.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanSession": () => (/* binding */ PanSession)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_event_type_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/event-type.mjs */ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs");
/* harmony import */ var _events_event_info_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/event-info.mjs */ "./node_modules/framer-motion/dist/es/events/event-info.mjs");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/time-conversion.mjs */ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../events/use-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/distance.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/pipe.mjs");








/**
 * @internal
 */
var PanSession = /** @class */ (function () {
    function PanSession(event, handlers, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, transformPagePoint = _b.transformPagePoint;
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        this.updatePoint = function () {
            if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
                return;
            var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
            var isPanStarted = _this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            var isDistancePastThreshold = (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.distance)(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            var point = info.point;
            var timestamp = (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)().timestamp;
            _this.history.push((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, point), { timestamp: timestamp }));
            var _a = _this.handlers, onStart = _a.onStart, onMove = _a.onMove;
            if (!isPanStarted) {
                onStart && onStart(_this.lastMoveEvent, info);
                _this.startEvent = _this.lastMoveEvent;
            }
            onMove && onMove(_this.lastMoveEvent, info);
        };
        this.handlePointerMove = function (event, info) {
            _this.lastMoveEvent = event;
            _this.lastMoveEventInfo = transformPoint(info, _this.transformPagePoint);
            // Because Safari doesn't trigger mouseup events when it's above a `<select>`
            if ((0,_utils_event_type_mjs__WEBPACK_IMPORTED_MODULE_3__.isMouseEvent)(event) && event.buttons === 0) {
                _this.handlePointerUp(event, info);
                return;
            }
            // Throttle mouse move event to once per frame
            framesync__WEBPACK_IMPORTED_MODULE_0__["default"].update(_this.updatePoint, true);
        };
        this.handlePointerUp = function (event, info) {
            _this.end();
            var _a = _this.handlers, onEnd = _a.onEnd, onSessionEnd = _a.onSessionEnd;
            var panInfo = getPanInfo(transformPoint(info, _this.transformPagePoint), _this.history);
            if (_this.startEvent && onEnd) {
                onEnd(event, panInfo);
            }
            onSessionEnd && onSessionEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if ((0,_utils_event_type_mjs__WEBPACK_IMPORTED_MODULE_3__.isTouchEvent)(event) && event.touches.length > 1)
            return;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        var info = (0,_events_event_info_mjs__WEBPACK_IMPORTED_MODULE_4__.extractEventInfo)(event);
        var initialInfo = transformPoint(info, this.transformPagePoint);
        var point = initialInfo.point;
        var timestamp = (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)().timestamp;
        this.history = [(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, point), { timestamp: timestamp })];
        var onSessionStart = handlers.onSessionStart;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = (0,popmotion__WEBPACK_IMPORTED_MODULE_5__.pipe)((0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_6__.addPointerEvent)(window, "pointermove", this.handlePointerMove), (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_6__.addPointerEvent)(window, "pointerup", this.handlePointerUp), (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_6__.addPointerEvent)(window, "pointercancel", this.handlePointerUp));
    }
    PanSession.prototype.updateHandlers = function (handlers) {
        this.handlers = handlers;
    };
    PanSession.prototype.end = function () {
        this.removeListeners && this.removeListeners();
        framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.update(this.updatePoint);
    };
    return PanSession;
}());
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo(_a, history) {
    var point = _a.point;
    return {
        point: point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    var i = history.length - 1;
    var timestampedPoint = null;
    var lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_7__.secondsToMilliseconds)(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000;
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    var currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualElementDragControls": () => (/* binding */ VisualElementDragControls),
/* harmony export */   "elementDragControls": () => (/* binding */ elementDragControls)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _PanSession_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PanSession.mjs */ "./node_modules/framer-motion/dist/es/gestures/PanSession.mjs");
/* harmony import */ var _utils_lock_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/lock.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs");
/* harmony import */ var _utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/is-ref-object.mjs */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs");
/* harmony import */ var _events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../events/use-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.mjs");
/* harmony import */ var _utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/constraints.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs");
/* harmony import */ var _render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../render/utils/types.mjs */ "./node_modules/framer-motion/dist/es/render/utils/types.mjs");
/* harmony import */ var _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projection/geometry/models.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projection/utils/each-axis.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs");
/* harmony import */ var _projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../projection/utils/measure.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/measure.mjs");
/* harmony import */ var _events_event_info_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events/event-info.mjs */ "./node_modules/framer-motion/dist/es/events/event-info.mjs");
/* harmony import */ var _animation_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../animation/utils/transitions.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs");
/* harmony import */ var _projection_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../projection/geometry/conversion.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs");
/* harmony import */ var _events_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../events/use-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-dom-event.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");
/* harmony import */ var _projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../projection/geometry/delta-calc.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs");



















var elementDragControls = new WeakMap();
/**
 *
 */
// let latestPointerEvent: AnyPointerEvent
var VisualElementDragControls = /** @class */ (function () {
    function VisualElementDragControls(visualElement) {
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        this.isDragging = false;
        this.currentDirection = null;
        this.originPoint = { x: 0, y: 0 };
        /**
         * The permitted boundaries of travel, in pixels.
         */
        this.constraints = false;
        this.hasMutatedConstraints = false;
        /**
         * The per-axis resolved elastic values.
         */
        this.elastic = (0,_projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_1__.createBox)();
        this.visualElement = visualElement;
    }
    VisualElementDragControls.prototype.start = function (originEvent, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c;
        /**
         * Don't start dragging if this component is exiting
         */
        if (this.visualElement.isPresent === false)
            return;
        var onSessionStart = function (event) {
            // Stop any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            _this.stopAnimation();
            if (snapToCursor) {
                _this.snapToCursor((0,_events_event_info_mjs__WEBPACK_IMPORTED_MODULE_2__.extractEventInfo)(event, "page").point);
            }
        };
        var onStart = function (event, info) {
            var _a;
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            var _b = _this.getProps(), drag = _b.drag, dragPropagation = _b.dragPropagation, onDragStart = _b.onDragStart;
            if (drag && !dragPropagation) {
                if (_this.openGlobalLock)
                    _this.openGlobalLock();
                _this.openGlobalLock = (0,_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_3__.getGlobalLock)(drag);
                // If we don 't have the lock, don't start dragging
                if (!_this.openGlobalLock)
                    return;
            }
            _this.isDragging = true;
            _this.currentDirection = null;
            _this.resolveConstraints();
            if (_this.visualElement.projection) {
                _this.visualElement.projection.isAnimationBlocked = true;
                _this.visualElement.projection.target = undefined;
            }
            /**
             * Record gesture origin
             */
            (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
                var _a, _b;
                var current = _this.getAxisMotionValue(axis).get() || 0;
                /**
                 * If the MotionValue is a percentage value convert to px
                 */
                if (style_value_types__WEBPACK_IMPORTED_MODULE_5__.percent.test(current)) {
                    var measuredAxis = (_b = (_a = _this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.actual[axis];
                    if (measuredAxis) {
                        var length_1 = (0,_projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_6__.calcLength)(measuredAxis);
                        current = length_1 * (parseFloat(current) / 100);
                    }
                }
                _this.originPoint[axis] = current;
            });
            // Fire onDragStart event
            onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(event, info);
            (_a = _this.visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_7__.AnimationType.Drag, true);
        };
        var onMove = function (event, info) {
            // latestPointerEvent = event
            var _a = _this.getProps(), dragPropagation = _a.dragPropagation, dragDirectionLock = _a.dragDirectionLock, onDirectionLock = _a.onDirectionLock, onDrag = _a.onDrag;
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !_this.openGlobalLock)
                return;
            var offset = info.offset;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && _this.currentDirection === null) {
                _this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (_this.currentDirection !== null) {
                    onDirectionLock === null || onDirectionLock === void 0 ? void 0 : onDirectionLock(_this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            _this.updateAxis("x", info.point, offset);
            _this.updateAxis("y", info.point, offset);
            /**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */
            _this.visualElement.syncRender();
            /**
             * This must fire after the syncRender call as it might trigger a state
             * change which itself might trigger a layout update.
             */
            onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, info);
        };
        var onSessionEnd = function (event, info) {
            return _this.stop(event, info);
        };
        this.panSession = new _PanSession_mjs__WEBPACK_IMPORTED_MODULE_8__.PanSession(originEvent, {
            onSessionStart: onSessionStart,
            onStart: onStart,
            onMove: onMove,
            onSessionEnd: onSessionEnd,
        }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
    };
    VisualElementDragControls.prototype.stop = function (event, info) {
        var isDragging = this.isDragging;
        this.cancel();
        if (!isDragging)
            return;
        var velocity = info.velocity;
        this.startAnimation(velocity);
        var onDragEnd = this.getProps().onDragEnd;
        onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
    };
    VisualElementDragControls.prototype.cancel = function () {
        var _a, _b;
        this.isDragging = false;
        if (this.visualElement.projection) {
            this.visualElement.projection.isAnimationBlocked = false;
        }
        (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
        this.panSession = undefined;
        var dragPropagation = this.getProps().dragPropagation;
        if (!dragPropagation && this.openGlobalLock) {
            this.openGlobalLock();
            this.openGlobalLock = null;
        }
        (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_7__.AnimationType.Drag, false);
    };
    VisualElementDragControls.prototype.updateAxis = function (axis, _point, offset) {
        var drag = this.getProps().drag;
        // If we're not dragging this axis, do an early return.
        if (!offset || !shouldDrag(axis, drag, this.currentDirection))
            return;
        var axisValue = this.getAxisMotionValue(axis);
        var next = this.originPoint[axis] + offset[axis];
        // Apply constraints
        if (this.constraints && this.constraints[axis]) {
            next = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.applyConstraints)(next, this.constraints[axis], this.elastic[axis]);
        }
        axisValue.set(next);
    };
    VisualElementDragControls.prototype.resolveConstraints = function () {
        var _this = this;
        var _a = this.getProps(), dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
        var layout = (this.visualElement.projection || {}).layout;
        var prevConstraints = this.constraints;
        if (dragConstraints && (0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_10__.isRefObject)(dragConstraints)) {
            if (!this.constraints) {
                this.constraints = this.resolveRefConstraints();
            }
        }
        else {
            if (dragConstraints && layout) {
                this.constraints = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.calcRelativeConstraints)(layout.actual, dragConstraints);
            }
            else {
                this.constraints = false;
            }
        }
        this.elastic = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.resolveDragElastic)(dragElastic);
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */
        if (prevConstraints !== this.constraints &&
            layout &&
            this.constraints &&
            !this.hasMutatedConstraints) {
            (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
                if (_this.getAxisMotionValue(axis)) {
                    _this.constraints[axis] = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.rebaseAxisConstraints)(layout.actual[axis], _this.constraints[axis]);
                }
            });
        }
    };
    VisualElementDragControls.prototype.resolveRefConstraints = function () {
        var _a = this.getProps(), constraints = _a.dragConstraints, onMeasureDragConstraints = _a.onMeasureDragConstraints;
        if (!constraints || !(0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_10__.isRefObject)(constraints))
            return false;
        var constraintsElement = constraints.current;
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        var projection = this.visualElement.projection;
        // TODO
        if (!projection || !projection.layout)
            return false;
        var constraintsBox = (0,_projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_11__.measurePageBox)(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
        var measuredConstraints = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.calcViewportConstraints)(projection.layout.actual, constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
            var userConstraints = onMeasureDragConstraints((0,_projection_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.convertBoxToBoundingBox)(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) {
                measuredConstraints = (0,_projection_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.convertBoundingBoxToBox)(userConstraints);
            }
        }
        return measuredConstraints;
    };
    VisualElementDragControls.prototype.startAnimation = function (velocity) {
        var _this = this;
        var _a = this.getProps(), drag = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition, dragSnapToOrigin = _a.dragSnapToOrigin, onDragTransitionEnd = _a.onDragTransitionEnd;
        var constraints = this.constraints || {};
        var momentumAnimations = (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
            var _a;
            if (!shouldDrag(axis, drag, _this.currentDirection)) {
                return;
            }
            var transition = (_a = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a !== void 0 ? _a : {};
            if (dragSnapToOrigin)
                transition = { min: 0, max: 0 };
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            var bounceStiffness = dragElastic ? 200 : 1000000;
            var bounceDamping = dragElastic ? 40 : 10000000;
            var inertia = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_13__.__assign)({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness: bounceStiffness, bounceDamping: bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition);
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return _this.startAxisValueAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    };
    VisualElementDragControls.prototype.startAxisValueAnimation = function (axis, transition) {
        var axisValue = this.getAxisMotionValue(axis);
        return (0,_animation_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_14__.startAnimation)(axis, axisValue, 0, transition);
    };
    VisualElementDragControls.prototype.stopAnimation = function () {
        var _this = this;
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) { return _this.getAxisMotionValue(axis).stop(); });
    };
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    VisualElementDragControls.prototype.getAxisMotionValue = function (axis) {
        var _a, _b;
        var dragKey = "_drag" + axis.toUpperCase();
        var externalMotionValue = this.visualElement.getProps()[dragKey];
        return externalMotionValue
            ? externalMotionValue
            : this.visualElement.getValue(axis, (_b = (_a = this.visualElement.getProps().initial) === null || _a === void 0 ? void 0 : _a[axis]) !== null && _b !== void 0 ? _b : 0);
    };
    VisualElementDragControls.prototype.snapToCursor = function (point) {
        var _this = this;
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
            var drag = _this.getProps().drag;
            // If we're not dragging this axis, do an early return.
            if (!shouldDrag(axis, drag, _this.currentDirection))
                return;
            var projection = _this.visualElement.projection;
            var axisValue = _this.getAxisMotionValue(axis);
            if (projection && projection.layout) {
                var _a = projection.layout.actual[axis], min = _a.min, max = _a.max;
                axisValue.set(point[axis] - (0,popmotion__WEBPACK_IMPORTED_MODULE_15__.mix)(min, max, 0.5));
            }
        });
    };
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    VisualElementDragControls.prototype.scalePositionWithinConstraints = function () {
        var _this = this;
        var _a;
        var _b = this.getProps(), drag = _b.drag, dragConstraints = _b.dragConstraints;
        var projection = this.visualElement.projection;
        if (!(0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_10__.isRefObject)(dragConstraints) || !projection || !this.constraints)
            return;
        /**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */
        this.stopAnimation();
        /**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */
        var boxProgress = { x: 0, y: 0 };
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
            var axisValue = _this.getAxisMotionValue(axis);
            if (axisValue) {
                var latest = axisValue.get();
                boxProgress[axis] = (0,_utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.calcOrigin)({ min: latest, max: latest }, _this.constraints[axis]);
            }
        });
        /**
         * Update the layout of this element and resolve the latest drag constraints
         */
        var transformTemplate = this.visualElement.getProps().transformTemplate;
        this.visualElement.getInstance().style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
        projection.updateLayout();
        this.resolveConstraints();
        /**
         * For each axis, calculate the current progress of the layout axis
         * within the new constraints.
         */
        (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
            if (!shouldDrag(axis, drag, null))
                return;
            /**
             * Calculate a new transform based on the previous box progress
             */
            var axisValue = _this.getAxisMotionValue(axis);
            var _a = _this.constraints[axis], min = _a.min, max = _a.max;
            axisValue.set((0,popmotion__WEBPACK_IMPORTED_MODULE_15__.mix)(min, max, boxProgress[axis]));
        });
    };
    VisualElementDragControls.prototype.addListeners = function () {
        var _this = this;
        var _a;
        elementDragControls.set(this.visualElement, this);
        var element = this.visualElement.getInstance();
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        var stopPointerListener = (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_16__.addPointerEvent)(element, "pointerdown", function (event) {
            var _a = _this.getProps(), drag = _a.drag, _b = _a.dragListener, dragListener = _b === void 0 ? true : _b;
            drag && dragListener && _this.start(event);
        });
        var measureDragConstraints = function () {
            var dragConstraints = _this.getProps().dragConstraints;
            if ((0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_10__.isRefObject)(dragConstraints)) {
                _this.constraints = _this.resolveRefConstraints();
            }
        };
        var projection = this.visualElement.projection;
        var stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
        if (projection && !projection.layout) {
            (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
            projection.updateLayout();
        }
        measureDragConstraints();
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        var stopResizeListener = (0,_events_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_17__.addDomEvent)(window, "resize", function () {
            return _this.scalePositionWithinConstraints();
        });
        /**
         * If the element's layout changes, calculate the delta and apply that to
         * the drag gesture's origin point.
         */
        projection.addEventListener("didUpdate", (function (_a) {
            var delta = _a.delta, hasLayoutChanged = _a.hasLayoutChanged;
            if (_this.isDragging && hasLayoutChanged) {
                (0,_projection_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_4__.eachAxis)(function (axis) {
                    var motionValue = _this.getAxisMotionValue(axis);
                    if (!motionValue)
                        return;
                    _this.originPoint[axis] += delta[axis].translate;
                    motionValue.set(motionValue.get() + delta[axis].translate);
                });
                _this.visualElement.syncRender();
            }
        }));
        return function () {
            stopResizeListener();
            stopPointerListener();
            stopMeasureLayoutListener();
        };
    };
    VisualElementDragControls.prototype.getProps = function () {
        var props = this.visualElement.getProps();
        var _a = props.drag, drag = _a === void 0 ? false : _a, _b = props.dragDirectionLock, dragDirectionLock = _b === void 0 ? false : _b, _c = props.dragPropagation, dragPropagation = _c === void 0 ? false : _c, _d = props.dragConstraints, dragConstraints = _d === void 0 ? false : _d, _e = props.dragElastic, dragElastic = _e === void 0 ? _utils_constraints_mjs__WEBPACK_IMPORTED_MODULE_9__.defaultElastic : _e, _f = props.dragMomentum, dragMomentum = _f === void 0 ? true : _f;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_13__.__assign)({}, props), { drag: drag, dragDirectionLock: dragDirectionLock, dragPropagation: dragPropagation, dragConstraints: dragConstraints, dragElastic: dragElastic, dragMomentum: dragMomentum });
    };
    return VisualElementDragControls;
}());
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold) {
    if (lockThreshold === void 0) { lockThreshold = 10; }
    var direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDrag": () => (/* binding */ useDrag)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _VisualElementDragControls_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VisualElementDragControls.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs");
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");




/**
 * A hook that allows an element to be dragged.
 *
 * @internal
 */
function useDrag(props) {
    var groupDragControls = props.dragControls, visualElement = props.visualElement;
    var dragControls = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__.useConstant)(function () { return new _VisualElementDragControls_mjs__WEBPACK_IMPORTED_MODULE_2__.VisualElementDragControls(visualElement); });
    // If we've been provided a DragControls for manual control over the drag gesture,
    // subscribe this component to it on mount.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return groupDragControls && groupDragControls.subscribe(dragControls); }, [dragControls, groupDragControls]);
    // Apply the event listeners to the element
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return dragControls.addListeners(); }, [dragControls]);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyConstraints": () => (/* binding */ applyConstraints),
/* harmony export */   "calcOrigin": () => (/* binding */ calcOrigin),
/* harmony export */   "calcRelativeAxisConstraints": () => (/* binding */ calcRelativeAxisConstraints),
/* harmony export */   "calcRelativeConstraints": () => (/* binding */ calcRelativeConstraints),
/* harmony export */   "calcViewportAxisConstraints": () => (/* binding */ calcViewportAxisConstraints),
/* harmony export */   "calcViewportConstraints": () => (/* binding */ calcViewportConstraints),
/* harmony export */   "defaultElastic": () => (/* binding */ defaultElastic),
/* harmony export */   "rebaseAxisConstraints": () => (/* binding */ rebaseAxisConstraints),
/* harmony export */   "resolveAxisElastic": () => (/* binding */ resolveAxisElastic),
/* harmony export */   "resolveDragElastic": () => (/* binding */ resolveDragElastic),
/* harmony export */   "resolvePointElastic": () => (/* binding */ resolvePointElastic)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/progress.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/clamp.mjs");
/* harmony import */ var _projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projection/geometry/delta-calc.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs");




/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, _a, elastic) {
    var min = _a.min, max = _a.max;
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic ? (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(min, point, elastic.min) : Math.max(point, min);
    }
    else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic ? (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.mix)(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined
            ? axis.max + max - (axis.max - axis.min)
            : undefined,
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, _a) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    var _a;
    var min = constraintsAxis.min - layoutAxis.min;
    var max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min <
        layoutAxis.max - layoutAxis.min) {
        _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)([max, min], 2), min = _a[0], max = _a[1];
    }
    return { min: min, max: max };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
    };
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function calcOrigin(source, target) {
    var origin = 0.5;
    var sourceLength = (0,_projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_2__.calcLength)(source);
    var targetLength = (0,_projection_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_2__.calcLength)(target);
    if (targetLength > sourceLength) {
        origin = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.progress)(target.min, target.max - sourceLength, source.min);
    }
    else if (sourceLength > targetLength) {
        origin = (0,popmotion__WEBPACK_IMPORTED_MODULE_3__.progress)(source.min, source.max - targetLength, target.min);
    }
    return (0,popmotion__WEBPACK_IMPORTED_MODULE_4__.clamp)(0, 1, origin);
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
    var relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}
var defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
function resolveDragElastic(dragElastic) {
    if (dragElastic === void 0) { dragElastic = defaultElastic; }
    if (dragElastic === false) {
        dragElastic = 0;
    }
    else if (dragElastic === true) {
        dragElastic = defaultElastic;
    }
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom"),
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel),
    };
}
function resolvePointElastic(dragElastic, label) {
    var _a;
    return typeof dragElastic === "number"
        ? dragElastic
        : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLock": () => (/* binding */ createLock),
/* harmony export */   "getGlobalLock": () => (/* binding */ getGlobalLock),
/* harmony export */   "isDragActive": () => (/* binding */ isDragActive)
/* harmony export */ });
function createLock(name) {
    var lock = null;
    return function () {
        var openLock = function () {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    var lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        var openHorizontal_1 = globalHorizontalLock();
        var openVertical_1 = globalVerticalLock();
        if (openHorizontal_1 && openVertical_1) {
            lock = function () {
                openHorizontal_1();
                openVertical_1();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal_1)
                openHorizontal_1();
            if (openVertical_1)
                openVertical_1();
        }
    }
    return lock;
}
function isDragActive() {
    // Check the gesture lock - if we get it, it means no drag gesture is active
    // and we can safely fire the tap gesture.
    var openGestureLock = getGlobalLock(true);
    if (!openGestureLock)
        return true;
    openGestureLock();
    return false;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFocusGesture": () => (/* binding */ useFocusGesture)
/* harmony export */ });
/* harmony import */ var _render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/utils/types.mjs */ "./node_modules/framer-motion/dist/es/render/utils/types.mjs");
/* harmony import */ var _events_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/use-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-dom-event.mjs");



/**
 *
 * @param props
 * @param ref
 * @internal
 */
function useFocusGesture(_a) {
    var whileFocus = _a.whileFocus, visualElement = _a.visualElement;
    var onFocus = function () {
        var _a;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus, true);
    };
    var onBlur = function () {
        var _a;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus, false);
    };
    (0,_events_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__.useDomEvent)(visualElement, "focus", whileFocus ? onFocus : undefined);
    (0,_events_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__.useDomEvent)(visualElement, "blur", whileFocus ? onBlur : undefined);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHoverGesture": () => (/* binding */ useHoverGesture)
/* harmony export */ });
/* harmony import */ var _utils_event_type_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/event-type.mjs */ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs");
/* harmony import */ var _render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/utils/types.mjs */ "./node_modules/framer-motion/dist/es/render/utils/types.mjs");
/* harmony import */ var _events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/use-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.mjs");
/* harmony import */ var _drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag/utils/lock.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs");





function createHoverEvent(visualElement, isActive, callback) {
    return function (event, info) {
        var _a;
        if (!(0,_utils_event_type_mjs__WEBPACK_IMPORTED_MODULE_0__.isMouseEvent)(event) || (0,_drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_1__.isDragActive)())
            return;
        /**
         * Ensure we trigger animations before firing event callback
         */
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_2__.AnimationType.Hover, isActive);
        callback === null || callback === void 0 ? void 0 : callback(event, info);
    };
}
function useHoverGesture(_a) {
    var onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, whileHover = _a.whileHover, visualElement = _a.visualElement;
    (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_3__.usePointerEvent)(visualElement, "pointerenter", onHoverStart || whileHover
        ? createHoverEvent(visualElement, true, onHoverStart)
        : undefined, { passive: !onHoverStart });
    (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_3__.usePointerEvent)(visualElement, "pointerleave", onHoverEnd || whileHover
        ? createHoverEvent(visualElement, false, onHoverEnd)
        : undefined, { passive: !onHoverEnd });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePanGesture": () => (/* binding */ usePanGesture)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/MotionConfigContext.mjs */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");
/* harmony import */ var _utils_use_unmount_effect_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/use-unmount-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs");
/* harmony import */ var _events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/use-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.mjs");
/* harmony import */ var _PanSession_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PanSession.mjs */ "./node_modules/framer-motion/dist/es/gestures/PanSession.mjs");






/**
 *
 * @param handlers -
 * @param ref -
 *
 * @privateRemarks
 * Currently this sets new pan gesture functions every render. The memo route has been explored
 * in the past but ultimately we're still creating new functions every render. An optimisation
 * to explore is creating the pan gestures and loading them into a `ref`.
 *
 * @internal
 */
function usePanGesture(_a) {
    var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart, visualElement = _a.visualElement;
    var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
    var panSession = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var transformPagePoint = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_1__.MotionConfigContext).transformPagePoint;
    var handlers = {
        onSessionStart: onPanSessionStart,
        onStart: onPanStart,
        onMove: onPan,
        onEnd: function (event, info) {
            panSession.current = null;
            onPanEnd && onPanEnd(event, info);
        },
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (panSession.current !== null) {
            panSession.current.updateHandlers(handlers);
        }
    });
    function onPointerDown(event) {
        panSession.current = new _PanSession_mjs__WEBPACK_IMPORTED_MODULE_2__.PanSession(event, handlers, {
            transformPagePoint: transformPagePoint,
        });
    }
    (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_3__.usePointerEvent)(visualElement, "pointerdown", hasPanEvents && onPointerDown);
    (0,_utils_use_unmount_effect_mjs__WEBPACK_IMPORTED_MODULE_4__.useUnmountEffect)(function () { return panSession.current && panSession.current.end(); });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTapGesture": () => (/* binding */ useTapGesture)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_is_node_or_child_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/is-node-or-child.mjs */ "./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs");
/* harmony import */ var _events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/use-pointer-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.mjs");
/* harmony import */ var _utils_use_unmount_effect_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/use-unmount-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/pipe.mjs");
/* harmony import */ var _render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/utils/types.mjs */ "./node_modules/framer-motion/dist/es/render/utils/types.mjs");
/* harmony import */ var _drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag/utils/lock.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs");








/**
 * @param handlers -
 * @internal
 */
function useTapGesture(_a) {
    var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, visualElement = _a.visualElement;
    var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
    var isPressing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    var cancelPointerEndListeners = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    /**
     * Only set listener to passive if there are no external listeners.
     */
    var eventOptions = {
        passive: !(onTapStart || onTap || onTapCancel || onPointerDown),
    };
    function removePointerEndListener() {
        var _a;
        (_a = cancelPointerEndListeners.current) === null || _a === void 0 ? void 0 : _a.call(cancelPointerEndListeners);
        cancelPointerEndListeners.current = null;
    }
    function checkPointerEnd() {
        var _a;
        removePointerEndListener();
        isPressing.current = false;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_1__.AnimationType.Tap, false);
        return !(0,_drag_utils_lock_mjs__WEBPACK_IMPORTED_MODULE_2__.isDragActive)();
    }
    function onPointerUp(event, info) {
        if (!checkPointerEnd())
            return;
        /**
         * We only count this as a tap gesture if the event.target is the same
         * as, or a child of, this component's element
         */
        !(0,_utils_is_node_or_child_mjs__WEBPACK_IMPORTED_MODULE_3__.isNodeOrChild)(visualElement.getInstance(), event.target)
            ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info)
            : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
    }
    function onPointerCancel(event, info) {
        if (!checkPointerEnd())
            return;
        onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
    }
    function onPointerDown(event, info) {
        var _a;
        removePointerEndListener();
        if (isPressing.current)
            return;
        isPressing.current = true;
        cancelPointerEndListeners.current = (0,popmotion__WEBPACK_IMPORTED_MODULE_4__.pipe)((0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(window, "pointerup", onPointerUp, eventOptions), (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.addPointerEvent)(window, "pointercancel", onPointerCancel, eventOptions));
        /**
         * Ensure we trigger animations before firing event callback
         */
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_1__.AnimationType.Tap, true);
        onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
    }
    (0,_events_use_pointer_event_mjs__WEBPACK_IMPORTED_MODULE_5__.usePointerEvent)(visualElement, "pointerdown", hasPressListeners ? onPointerDown : undefined, eventOptions);
    (0,_utils_use_unmount_effect_mjs__WEBPACK_IMPORTED_MODULE_6__.useUnmountEffect)(removePointerEndListener);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMouseEvent": () => (/* binding */ isMouseEvent),
/* harmony export */   "isTouchEvent": () => (/* binding */ isTouchEvent)
/* harmony export */ });
function isMouseEvent(event) {
    // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.
    if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
        return !!(event.pointerType === "mouse");
    }
    return event instanceof MouseEvent;
}
function isTouchEvent(event) {
    var hasTouches = !!event.touches;
    return hasTouches;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNodeOrChild": () => (/* binding */ isNodeOrChild)
/* harmony export */ });
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
var isNodeOrChild = function (parent, child) {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/animations.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/animations.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animations": () => (/* binding */ animations)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _components_AnimatePresence_use_presence_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AnimatePresence/use-presence.mjs */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
/* harmony import */ var _render_utils_animation_state_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/utils/animation-state.mjs */ "./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs");
/* harmony import */ var _render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../render/utils/types.mjs */ "./node_modules/framer-motion/dist/es/render/utils/types.mjs");
/* harmony import */ var _utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/make-renderless-component.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs");









var animations = {
    animation: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_1__.makeRenderlessComponent)(function (_a) {
        var visualElement = _a.visualElement, animate = _a.animate;
        /**
         * We dynamically generate the AnimationState manager as it contains a reference
         * to the underlying animation library. We only want to load that if we load this,
         * so people can optionally code split it out using the `m` component.
         */
        visualElement.animationState || (visualElement.animationState = (0,_render_utils_animation_state_mjs__WEBPACK_IMPORTED_MODULE_2__.createAnimationState)(visualElement));
        /**
         * Subscribe any provided AnimationControls to the component's VisualElement
         */
        if ((0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_3__.isAnimationControls)(animate)) {
            (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return animate.subscribe(visualElement); }, [animate]);
        }
    }),
    exit: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_1__.makeRenderlessComponent)(function (props) {
        var custom = props.custom, visualElement = props.visualElement;
        var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,_components_AnimatePresence_use_presence_mjs__WEBPACK_IMPORTED_MODULE_5__.usePresence)(), 2), isPresent = _a[0], safeToRemove = _a[1];
        var presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_6__.PresenceContext);
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            var _a, _b;
            visualElement.isPresent = isPresent;
            var animation = (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_7__.AnimationType.Exit, !isPresent, { custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom });
            !isPresent && (animation === null || animation === void 0 ? void 0 : animation.then(safeToRemove));
        }, [isPresent]);
    }),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/definitions.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/definitions.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "featureDefinitions": () => (/* binding */ featureDefinitions),
/* harmony export */   "loadFeatures": () => (/* binding */ loadFeatures)
/* harmony export */ });
var createDefinition = function (propNames) { return ({
    isEnabled: function (props) { return propNames.some(function (name) { return !!props[name]; }); },
}); };
var featureDefinitions = {
    measureLayout: createDefinition(["layout", "layoutId", "drag"]),
    animation: createDefinition([
        "animate",
        "exit",
        "variants",
        "whileHover",
        "whileTap",
        "whileFocus",
        "whileDrag",
        "whileInView",
    ]),
    exit: createDefinition(["exit"]),
    drag: createDefinition(["drag", "dragControls"]),
    focus: createDefinition(["whileFocus"]),
    hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: createDefinition([
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd",
    ]),
    inView: createDefinition([
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
    ]),
};
function loadFeatures(features) {
    for (var key in features) {
        if (features[key] === null)
            continue;
        if (key === "projectionNodeConstructor") {
            featureDefinitions.projectionNodeConstructor = features[key];
        }
        else {
            featureDefinitions[key].Component = features[key];
        }
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/drag.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/drag.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drag": () => (/* binding */ drag)
/* harmony export */ });
/* harmony import */ var _gestures_drag_use_drag_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestures/drag/use-drag.mjs */ "./node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs");
/* harmony import */ var _gestures_use_pan_gesture_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestures/use-pan-gesture.mjs */ "./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.mjs");
/* harmony import */ var _utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/make-renderless-component.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs");




var drag = {
    pan: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_pan_gesture_mjs__WEBPACK_IMPORTED_MODULE_1__.usePanGesture),
    drag: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_drag_use_drag_mjs__WEBPACK_IMPORTED_MODULE_2__.useDrag),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/gestures.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/gestures.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gestureAnimations": () => (/* binding */ gestureAnimations)
/* harmony export */ });
/* harmony import */ var _gestures_use_focus_gesture_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gestures/use-focus-gesture.mjs */ "./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs");
/* harmony import */ var _gestures_use_hover_gesture_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../gestures/use-hover-gesture.mjs */ "./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs");
/* harmony import */ var _gestures_use_tap_gesture_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestures/use-tap-gesture.mjs */ "./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs");
/* harmony import */ var _viewport_use_viewport_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewport/use-viewport.mjs */ "./node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs");
/* harmony import */ var _utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/make-renderless-component.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs");






var gestureAnimations = {
    inView: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_viewport_use_viewport_mjs__WEBPACK_IMPORTED_MODULE_1__.useViewport),
    tap: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_tap_gesture_mjs__WEBPACK_IMPORTED_MODULE_2__.useTapGesture),
    focus: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_focus_gesture_mjs__WEBPACK_IMPORTED_MODULE_3__.useFocusGesture),
    hover: (0,_utils_make_renderless_component_mjs__WEBPACK_IMPORTED_MODULE_0__.makeRenderlessComponent)(_gestures_use_hover_gesture_mjs__WEBPACK_IMPORTED_MODULE_4__.useHoverGesture),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeasureLayout": () => (/* binding */ MeasureLayout)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_AnimatePresence_use_presence_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/AnimatePresence/use-presence.mjs */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs");
/* harmony import */ var _context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/LayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");
/* harmony import */ var _context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../context/SwitchLayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs");
/* harmony import */ var _projection_node_create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../projection/node/create-projection-node.mjs */ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs");
/* harmony import */ var _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../projection/styles/scale-border-radius.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs");
/* harmony import */ var _projection_styles_scale_box_shadow_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../projection/styles/scale-box-shadow.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs");
/* harmony import */ var _projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projection/styles/scale-correction.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs");











var MeasureLayoutWithContext = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MeasureLayoutWithContext, _super);
    function MeasureLayoutWithContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    MeasureLayoutWithContext.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, visualElement = _a.visualElement, layoutGroup = _a.layoutGroup, switchLayoutGroup = _a.switchLayoutGroup, layoutId = _a.layoutId;
        var projection = visualElement.projection;
        (0,_projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_3__.addScaleCorrector)(defaultScaleCorrectors);
        if (projection) {
            if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
                layoutGroup.group.add(projection);
            if ((switchLayoutGroup === null || switchLayoutGroup === void 0 ? void 0 : switchLayoutGroup.register) && layoutId) {
                switchLayoutGroup.register(projection);
            }
            projection.root.didUpdate();
            projection.addEventListener("animationComplete", function () {
                _this.safeToRemove();
            });
            projection.setOptions((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, projection.options), { onExitComplete: function () { return _this.safeToRemove(); } }));
        }
        _projection_node_create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_4__.globalProjectionState.hasEverUpdated = true;
    };
    MeasureLayoutWithContext.prototype.getSnapshotBeforeUpdate = function (prevProps) {
        var _this = this;
        var _a = this.props, layoutDependency = _a.layoutDependency, visualElement = _a.visualElement, drag = _a.drag, isPresent = _a.isPresent;
        var projection = visualElement.projection;
        if (!projection)
            return null;
        /**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */
        projection.isPresent = isPresent;
        if (drag ||
            prevProps.layoutDependency !== layoutDependency ||
            layoutDependency === undefined) {
            projection.willUpdate();
        }
        else {
            this.safeToRemove();
        }
        if (prevProps.isPresent !== isPresent) {
            if (isPresent) {
                projection.promote();
            }
            else if (!projection.relegate()) {
                /**
                 * If there's another stack member taking over from this one,
                 * it's in charge of the exit animation and therefore should
                 * be in charge of the safe to remove. Otherwise we call it here.
                 */
                framesync__WEBPACK_IMPORTED_MODULE_0__["default"].postRender(function () {
                    var _a;
                    if (!((_a = projection.getStack()) === null || _a === void 0 ? void 0 : _a.members.length)) {
                        _this.safeToRemove();
                    }
                });
            }
        }
        return null;
    };
    MeasureLayoutWithContext.prototype.componentDidUpdate = function () {
        var projection = this.props.visualElement.projection;
        if (projection) {
            projection.root.didUpdate();
            if (!projection.currentAnimation && projection.isLead()) {
                this.safeToRemove();
            }
        }
    };
    MeasureLayoutWithContext.prototype.componentWillUnmount = function () {
        var _a = this.props, visualElement = _a.visualElement, layoutGroup = _a.layoutGroup, promoteContext = _a.switchLayoutGroup;
        var projection = visualElement.projection;
        if (projection) {
            projection.scheduleCheckAfterUnmount();
            if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
                layoutGroup.group.remove(projection);
            if (promoteContext === null || promoteContext === void 0 ? void 0 : promoteContext.deregister)
                promoteContext.deregister(projection);
        }
    };
    MeasureLayoutWithContext.prototype.safeToRemove = function () {
        var safeToRemove = this.props.safeToRemove;
        safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove();
    };
    MeasureLayoutWithContext.prototype.render = function () {
        return null;
    };
    return MeasureLayoutWithContext;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component));
function MeasureLayout(props) {
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)((0,_components_AnimatePresence_use_presence_mjs__WEBPACK_IMPORTED_MODULE_5__.usePresence)(), 2), isPresent = _a[0], safeToRemove = _a[1];
    var layoutGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_6__.LayoutGroupContext);
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(MeasureLayoutWithContext, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, props, { layoutGroup: layoutGroup, switchLayoutGroup: (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_7__.SwitchLayoutGroupContext), isPresent: isPresent, safeToRemove: safeToRemove })));
}
var defaultScaleCorrectors = {
    borderRadius: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_8__.correctBorderRadius), { applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ] }),
    borderTopLeftRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_8__.correctBorderRadius,
    borderTopRightRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_8__.correctBorderRadius,
    borderBottomLeftRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_8__.correctBorderRadius,
    borderBottomRightRadius: _projection_styles_scale_border_radius_mjs__WEBPACK_IMPORTED_MODULE_8__.correctBorderRadius,
    boxShadow: _projection_styles_scale_box_shadow_mjs__WEBPACK_IMPORTED_MODULE_9__.correctBoxShadow,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/index.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/index.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "layoutFeatures": () => (/* binding */ layoutFeatures)
/* harmony export */ });
/* harmony import */ var _MeasureLayout_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MeasureLayout.mjs */ "./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs");


var layoutFeatures = {
    measureLayout: _MeasureLayout_mjs__WEBPACK_IMPORTED_MODULE_0__.MeasureLayout,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/use-features.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/use-features.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFeatures": () => (/* binding */ useFeatures)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_process_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/process.mjs */ "./node_modules/framer-motion/dist/es/utils/process.mjs");
/* harmony import */ var _definitions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions.mjs */ "./node_modules/framer-motion/dist/es/motion/features/definitions.mjs");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/LazyContext.mjs */ "./node_modules/framer-motion/dist/es/context/LazyContext.mjs");








var featureNames = Object.keys(_definitions_mjs__WEBPACK_IMPORTED_MODULE_2__.featureDefinitions);
var numFeatures = featureNames.length;
/**
 * Load features via renderless components based on the provided MotionProps.
 */
function useFeatures(props, visualElement, preloadedFeatures) {
    var features = [];
    var lazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_3__.LazyContext);
    if (!visualElement)
        return null;
    /**
     * If we're in development mode, check to make sure we're not rendering a motion component
     * as a child of LazyMotion, as this will break the file-size benefits of using it.
     */
    if (_utils_process_mjs__WEBPACK_IMPORTED_MODULE_4__.env !== "production" && preloadedFeatures && lazyContext.strict) {
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_1__.invariant)(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    }
    for (var i = 0; i < numFeatures; i++) {
        var name_1 = featureNames[i];
        var _a = _definitions_mjs__WEBPACK_IMPORTED_MODULE_2__.featureDefinitions[name_1], isEnabled = _a.isEnabled, Component = _a.Component;
        /**
         * It might be possible in the future to use this moment to
         * dynamically request functionality. In initial tests this
         * was producing a lot of duplication amongst bundles.
         */
        if (isEnabled(props) && Component) {
            features.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({ key: name_1 }, props, { visualElement: visualElement })));
        }
    }
    return features;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/use-projection.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/use-projection.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProjection": () => (/* binding */ useProjection)
/* harmony export */ });
/* harmony import */ var _utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/is-ref-object.mjs */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/SwitchLayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs");




function useProjection(projectionId, _a, visualElement, ProjectionNodeConstructor) {
    var _b;
    var layoutId = _a.layoutId, layout = _a.layout, drag = _a.drag, dragConstraints = _a.dragConstraints, layoutScroll = _a.layoutScroll;
    var initialPromotionConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_SwitchLayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_1__.SwitchLayoutGroupContext);
    if (!ProjectionNodeConstructor ||
        !visualElement ||
        (visualElement === null || visualElement === void 0 ? void 0 : visualElement.projection)) {
        return;
    }
    visualElement.projection = new ProjectionNodeConstructor(projectionId, visualElement.getLatestValues(), (_b = visualElement.parent) === null || _b === void 0 ? void 0 : _b.projection);
    visualElement.projection.setOptions({
        layoutId: layoutId,
        layout: layout,
        alwaysMeasureLayout: Boolean(drag) || (dragConstraints && (0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_2__.isRefObject)(dragConstraints)),
        visualElement: visualElement,
        scheduleRender: function () { return visualElement.scheduleRender(); },
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof layout === "string" ? layout : "both",
        initialPromotionConfig: initialPromotionConfig,
        layoutScroll: layoutScroll,
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observeIntersection": () => (/* binding */ observeIntersection)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */
var observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */
var observers = new WeakMap();
var fireObserverCallback = function (entry) {
    var _a;
    (_a = observerCallbacks.get(entry.target)) === null || _a === void 0 ? void 0 : _a(entry);
};
var fireAllObserverCallbacks = function (entries) {
    entries.forEach(fireObserverCallback);
};
function initIntersectionObserver(_a) {
    var root = _a.root, options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["root"]);
    var lookupRoot = root || document;
    /**
     * If we don't have an observer lookup map for this root, create one.
     */
    if (!observers.has(lookupRoot)) {
        observers.set(lookupRoot, {});
    }
    var rootObservers = observers.get(lookupRoot);
    var key = JSON.stringify(options);
    /**
     * If we don't have an observer for this combination of root and settings,
     * create one.
     */
    if (!rootObservers[key]) {
        rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ root: root }, options));
    }
    return rootObservers[key];
}
function observeIntersection(element, options, callback) {
    var rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return function () {
        observerCallbacks.delete(element);
        rootInteresectionObserver.unobserve(element);
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useViewport": () => (/* binding */ useViewport)
/* harmony export */ });
/* harmony import */ var _utils_process_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/process.mjs */ "./node_modules/framer-motion/dist/es/utils/process.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../render/utils/types.mjs */ "./node_modules/framer-motion/dist/es/render/utils/types.mjs");
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/warn-once.mjs */ "./node_modules/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _observers_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers.mjs */ "./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs");






function useViewport(_a) {
    var visualElement = _a.visualElement, whileInView = _a.whileInView, onViewportEnter = _a.onViewportEnter, onViewportLeave = _a.onViewportLeave, _b = _a.viewport, viewport = _b === void 0 ? {} : _b;
    var state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        hasEnteredView: false,
        isInView: false,
    });
    var shouldObserve = Boolean(whileInView || onViewportEnter || onViewportLeave);
    if (viewport.once && state.current.hasEnteredView)
        shouldObserve = false;
    var useObserver = typeof IntersectionObserver === "undefined"
        ? useMissingIntersectionObserver
        : useIntersectionObserver;
    useObserver(shouldObserve, state.current, visualElement, viewport);
}
var thresholdNames = {
    some: 0,
    all: 1,
};
function useIntersectionObserver(shouldObserve, state, visualElement, _a) {
    var root = _a.root, rootMargin = _a.margin, _b = _a.amount, amount = _b === void 0 ? "some" : _b, once = _a.once;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (!shouldObserve)
            return;
        var options = {
            root: root === null || root === void 0 ? void 0 : root.current,
            rootMargin: rootMargin,
            threshold: typeof amount === "number" ? amount : thresholdNames[amount],
        };
        var intersectionCallback = function (entry) {
            var _a;
            var isIntersecting = entry.isIntersecting;
            /**
             * If there's been no change in the viewport state, early return.
             */
            if (state.isInView === isIntersecting)
                return;
            state.isInView = isIntersecting;
            /**
             * Handle hasEnteredView. If this is only meant to run once, and
             * element isn't visible, early return. Otherwise set hasEnteredView to true.
             */
            if (once && !isIntersecting && state.hasEnteredView) {
                return;
            }
            else if (isIntersecting) {
                state.hasEnteredView = true;
            }
            (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_1__.AnimationType.InView, isIntersecting);
            /**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */
            var props = visualElement.getProps();
            var callback = isIntersecting
                ? props.onViewportEnter
                : props.onViewportLeave;
            callback === null || callback === void 0 ? void 0 : callback(entry);
        };
        return (0,_observers_mjs__WEBPACK_IMPORTED_MODULE_2__.observeIntersection)(visualElement.getInstance(), options, intersectionCallback);
    }, [shouldObserve, root, rootMargin, amount]);
}
/**
 * If IntersectionObserver is missing, we activate inView and fire onViewportEnter
 * on mount. This way, the page will be in the state the author expects users
 * to see it in for everyone.
 */
function useMissingIntersectionObserver(shouldObserve, state, visualElement, _a) {
    var _b = _a.fallback, fallback = _b === void 0 ? true : _b;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (!shouldObserve || !fallback)
            return;
        if (_utils_process_mjs__WEBPACK_IMPORTED_MODULE_3__.env !== "production") {
            (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_4__.warnOnce)(false, "IntersectionObserver not available on this device. whileInView animations will trigger on mount.");
        }
        /**
         * Fire this in an rAF because, at this point, the animation state
         * won't have flushed for the first time and there's certain logic in
         * there that behaves differently on the initial animation.
         *
         * This hook should be quite rarely called so setting this in an rAF
         * is preferred to changing the behaviour of the animation state.
         */
        requestAnimationFrame(function () {
            var _a;
            state.hasEnteredView = true;
            var onViewportEnter = visualElement.getProps().onViewportEnter;
            onViewportEnter === null || onViewportEnter === void 0 ? void 0 : onViewportEnter(null);
            (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_mjs__WEBPACK_IMPORTED_MODULE_1__.AnimationType.InView, true);
        });
    }, [shouldObserve]);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMotionComponent": () => (/* binding */ createMotionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _features_use_features_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/use-features.mjs */ "./node_modules/framer-motion/dist/es/motion/features/use-features.mjs");
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/MotionConfigContext.mjs */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");
/* harmony import */ var _context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/MotionContext/index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");
/* harmony import */ var _utils_use_visual_element_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/use-visual-element.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs");
/* harmony import */ var _utils_use_motion_ref_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/use-motion-ref.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs");
/* harmony import */ var _context_MotionContext_create_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/MotionContext/create.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs");
/* harmony import */ var _features_definitions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/definitions.mjs */ "./node_modules/framer-motion/dist/es/motion/features/definitions.mjs");
/* harmony import */ var _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/is-browser.mjs */ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs");
/* harmony import */ var _projection_node_id_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projection/node/id.mjs */ "./node_modules/framer-motion/dist/es/projection/node/id.mjs");
/* harmony import */ var _context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../context/LayoutGroupContext.mjs */ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");
/* harmony import */ var _features_use_projection_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/use-projection.mjs */ "./node_modules/framer-motion/dist/es/motion/features/use-projection.mjs");
/* harmony import */ var _utils_VisualElementHandler_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/VisualElementHandler.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/VisualElementHandler.mjs");
















/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */
function createMotionComponent(_a) {
    var preloadedFeatures = _a.preloadedFeatures, createVisualElement = _a.createVisualElement, projectionNodeConstructor = _a.projectionNodeConstructor, useRender = _a.useRender, useVisualState = _a.useVisualState, Component = _a.Component;
    preloadedFeatures && (0,_features_definitions_mjs__WEBPACK_IMPORTED_MODULE_1__.loadFeatures)(preloadedFeatures);
    function MotionComponent(props, externalRef) {
        var layoutId = useLayoutId(props);
        props = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, props), { layoutId: layoutId });
        /**
         * If we're rendering in a static environment, we only visually update the component
         * as a result of a React-rerender rather than interactions or animations. This
         * means we don't need to load additional memory structures like VisualElement,
         * or any gesture/animation features.
         */
        var config = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__.MotionConfigContext);
        var features = null;
        var context = (0,_context_MotionContext_create_mjs__WEBPACK_IMPORTED_MODULE_4__.useCreateMotionContext)(props);
        /**
         * Create a unique projection ID for this component. If a new component is added
         * during a layout animation we'll use this to query the DOM and hydrate its ref early, allowing
         * us to measure it as soon as any layout effect flushes pending layout animations.
         *
         * Performance note: It'd be better not to have to search the DOM for these elements.
         * For newly-entering components it could be enough to only correct treeScale, in which
         * case we could mount in a scale-correction mode. This wouldn't be enough for
         * shared element transitions however. Perhaps for those we could revert to a root node
         * that gets forceRendered and layout animations are triggered on its layout effect.
         */
        var projectionId = config.isStatic ? undefined : (0,_projection_node_id_mjs__WEBPACK_IMPORTED_MODULE_5__.useProjectionId)();
        /**
         *
         */
        var visualState = useVisualState(props, config.isStatic);
        if (!config.isStatic && _utils_is_browser_mjs__WEBPACK_IMPORTED_MODULE_6__.isBrowser) {
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */
            context.visualElement = (0,_utils_use_visual_element_mjs__WEBPACK_IMPORTED_MODULE_7__.useVisualElement)(Component, visualState, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, config), props), createVisualElement);
            (0,_features_use_projection_mjs__WEBPACK_IMPORTED_MODULE_8__.useProjection)(projectionId, props, context.visualElement, projectionNodeConstructor ||
                _features_definitions_mjs__WEBPACK_IMPORTED_MODULE_1__.featureDefinitions.projectionNodeConstructor);
            /**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             */
            features = (0,_features_use_features_mjs__WEBPACK_IMPORTED_MODULE_9__.useFeatures)(props, context.visualElement, preloadedFeatures);
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils_VisualElementHandler_mjs__WEBPACK_IMPORTED_MODULE_10__.VisualElementHandler, { visualElement: context.visualElement, props: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, config), props) },
            features,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_11__.MotionContext.Provider, { value: context }, useRender(Component, props, projectionId, (0,_utils_use_motion_ref_mjs__WEBPACK_IMPORTED_MODULE_12__.useMotionRef)(visualState, context.visualElement, externalRef), visualState, config.isStatic, context.visualElement))));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(MotionComponent);
}
function useLayoutId(_a) {
    var _b;
    var layoutId = _a.layoutId;
    var layoutGroupId = (_b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LayoutGroupContext_mjs__WEBPACK_IMPORTED_MODULE_13__.LayoutGroupContext)) === null || _b === void 0 ? void 0 : _b.id;
    return layoutGroupId && layoutId !== undefined
        ? layoutGroupId + "-" + layoutId
        : layoutId;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/VisualElementHandler.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/VisualElementHandler.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualElementHandler": () => (/* binding */ VisualElementHandler)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var VisualElementHandler = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(VisualElementHandler, _super);
    function VisualElementHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Update visual element props as soon as we know this update is going to be commited.
     */
    VisualElementHandler.prototype.getSnapshotBeforeUpdate = function () {
        this.updateProps();
        return null;
    };
    VisualElementHandler.prototype.componentDidUpdate = function () { };
    VisualElementHandler.prototype.updateProps = function () {
        var _a = this.props, visualElement = _a.visualElement, props = _a.props;
        if (visualElement)
            visualElement.setProps(props);
    };
    VisualElementHandler.prototype.render = function () {
        return this.props.children;
    };
    return VisualElementHandler;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isForcedMotionValue": () => (/* binding */ isForcedMotionValue)
/* harmony export */ });
/* harmony import */ var _projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projection/styles/scale-correction.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs");
/* harmony import */ var _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");



function isForcedMotionValue(key, _a) {
    var layout = _a.layout, layoutId = _a.layoutId;
    return ((0,_render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.isTransformProp)(key) ||
        (0,_render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.isTransformOriginProp)(key) ||
        ((layout || layoutId !== undefined) &&
            (!!_projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_1__.scaleCorrectors[key] || key === "opacity")));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeRenderlessComponent": () => (/* binding */ makeRenderlessComponent)
/* harmony export */ });
var makeRenderlessComponent = function (hook) { return function (props) {
    hook(props);
    return null;
}; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMotionRef": () => (/* binding */ useMotionRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/is-ref-object.mjs */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs");



/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (instance) {
        var _a;
        instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
        if (visualElement) {
            instance
                ? visualElement.mount(instance)
                : visualElement.unmount();
        }
        if (externalRef) {
            if (typeof externalRef === "function") {
                externalRef(instance);
            }
            else if ((0,_utils_is_ref_object_mjs__WEBPACK_IMPORTED_MODULE_1__.isRefObject)(externalRef)) {
                externalRef.current = instance;
            }
        }
    }, 
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useVisualElement": () => (/* binding */ useVisualElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
/* harmony import */ var _context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/MotionContext/index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");
/* harmony import */ var _utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/use-isomorphic-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");
/* harmony import */ var _context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/LazyContext.mjs */ "./node_modules/framer-motion/dist/es/context/LazyContext.mjs");
/* harmony import */ var _utils_use_reduced_motion_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/use-reduced-motion.mjs */ "./node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs");







function useVisualElement(Component, visualState, props, createVisualElement) {
    var lazyContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LazyContext_mjs__WEBPACK_IMPORTED_MODULE_1__.LazyContext);
    var parent = (0,_context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_2__.useVisualElementContext)();
    var presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_3__.PresenceContext);
    var shouldReduceMotion = (0,_utils_use_reduced_motion_mjs__WEBPACK_IMPORTED_MODULE_4__.useReducedMotionConfig)();
    var visualElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */
    if (!createVisualElement)
        createVisualElement = lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState: visualState,
            parent: parent,
            props: props,
            presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
            blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false,
            shouldReduceMotion: shouldReduceMotion,
        });
    }
    var visualElement = visualElementRef.current;
    (0,_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(function () {
        visualElement === null || visualElement === void 0 ? void 0 : visualElement.syncRender();
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var _a;
        (_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
    });
    (0,_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(function () { return function () { return visualElement === null || visualElement === void 0 ? void 0 : visualElement.notifyUnmount(); }; }, []);
    return visualElement;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeUseVisualState": () => (/* binding */ makeUseVisualState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/PresenceContext.mjs */ "./node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
/* harmony import */ var _render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../render/utils/variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variants.mjs");
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");
/* harmony import */ var _value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../value/utils/resolve-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs");
/* harmony import */ var _context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/MotionContext/index.mjs */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs");









function makeState(_a, props, context, presenceContext) {
    var scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps, createRenderState = _a.createRenderState, onMount = _a.onMount;
    var state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState(),
    };
    if (onMount) {
        state.mount = function (instance) { return onMount(props, instance, state); };
    }
    return state;
}
var makeUseVisualState = function (config) {
    return function (props, isStatic) {
        var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionContext_index_mjs__WEBPACK_IMPORTED_MODULE_1__.MotionContext);
        var presenceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_PresenceContext_mjs__WEBPACK_IMPORTED_MODULE_2__.PresenceContext);
        return isStatic
            ? makeState(config, props, context, presenceContext)
            : (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_3__.useConstant)(function () {
                return makeState(config, props, context, presenceContext);
            });
    };
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    var values = {};
    var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
    var motionValues = scrapeMotionValues(props);
    for (var key in motionValues) {
        values[key] = (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.resolveMotionValue)(motionValues[key]);
    }
    var initial = props.initial, animate = props.animate;
    var isControllingVariants = (0,_render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_5__.checkIfControllingVariants)(props);
    var isVariantNode = (0,_render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_5__.checkIfVariantNode)(props);
    if (context &&
        isVariantNode &&
        !isControllingVariants &&
        props.inherit !== false) {
        initial !== null && initial !== void 0 ? initial : (initial = context.initial);
        animate !== null && animate !== void 0 ? animate : (animate = context.animate);
    }
    var initialAnimationIsBlocked = blockInitialAnimation || initial === false;
    var variantToSet = initialAnimationIsBlocked ? animate : initial;
    if (variantToSet &&
        typeof variantToSet !== "boolean" &&
        !(0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_6__.isAnimationControls)(variantToSet)) {
        var list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
        list.forEach(function (definition) {
            var resolved = (0,_render_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_5__.resolveVariantFromProps)(props, definition);
            if (!resolved)
                return;
            var transitionEnd = resolved.transitionEnd; resolved.transition; var target = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__rest)(resolved, ["transitionEnd", "transition"]);
            for (var key in target) {
                var valueTarget = target[key];
                if (Array.isArray(valueTarget)) {
                    /**
                     * Take final keyframe if the initial animation is blocked because
                     * we want to initialise at the end of that blocked animation.
                     */
                    var index = initialAnimationIsBlocked
                        ? valueTarget.length - 1
                        : 0;
                    valueTarget = valueTarget[index];
                }
                if (valueTarget !== null) {
                    values[key] = valueTarget;
                }
            }
            for (var key in transitionEnd)
                values[key] = transitionEnd[key];
        });
    }
    return values;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidMotionProp": () => (/* binding */ isValidMotionProp)
/* harmony export */ });
/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
var validMotionProps = new Set([
    "initial",
    "animate",
    "exit",
    "style",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "layout",
    "layoutId",
    "layoutDependency",
    "onLayoutAnimationStart",
    "onLayoutAnimationComplete",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "dragSnapToOrigin",
    "_dragX",
    "_dragY",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "whileDrag",
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "onHoverStart",
    "onHoverEnd",
    "whileFocus",
    "whileTap",
    "whileHover",
    "whileInView",
    "onViewportEnter",
    "onViewportLeave",
    "viewport",
    "layoutScroll",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return validMotionProps.has(key);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mixValues": () => (/* binding */ mixValues)
/* harmony export */ });
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/easing/index.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/progress.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");



var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = function (value) {
    return typeof value === "string" ? parseFloat(value) : value;
};
var isPx = function (value) {
    return typeof value === "number" || style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.test(value);
};
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
    var _a, _b, _c, _d;
    if (shouldCrossfadeOpacity) {
        target.opacity = (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.mix)(0, 
        // (follow?.opacity as number) ?? 0,
        // TODO Reinstate this if only child
        (_a = lead.opacity) !== null && _a !== void 0 ? _a : 1, easeCrossfadeIn(progress));
        target.opacityExit = (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.mix)((_b = follow.opacity) !== null && _b !== void 0 ? _b : 1, 0, easeCrossfadeOut(progress));
    }
    else if (isOnlyMember) {
        target.opacity = (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.mix)((_c = follow.opacity) !== null && _c !== void 0 ? _c : 1, (_d = lead.opacity) !== null && _d !== void 0 ? _d : 1, progress);
    }
    /**
     * Mix border radius
     */
    for (var i = 0; i < numBorders; i++) {
        var borderLabel = "border".concat(borders[i], "Radius");
        var followRadius = getRadius(follow, borderLabel);
        var leadRadius = getRadius(lead, borderLabel);
        if (followRadius === undefined && leadRadius === undefined)
            continue;
        followRadius || (followRadius = 0);
        leadRadius || (leadRadius = 0);
        var canMix = followRadius === 0 ||
            leadRadius === 0 ||
            isPx(followRadius) === isPx(leadRadius);
        if (canMix) {
            target[borderLabel] = Math.max((0,popmotion__WEBPACK_IMPORTED_MODULE_1__.mix)(asNumber(followRadius), asNumber(leadRadius), progress), 0);
            if (style_value_types__WEBPACK_IMPORTED_MODULE_0__.percent.test(leadRadius) || style_value_types__WEBPACK_IMPORTED_MODULE_0__.percent.test(followRadius)) {
                target[borderLabel] += "%";
            }
        }
        else {
            target[borderLabel] = leadRadius;
        }
    }
    /**
     * Mix rotation
     */
    if (follow.rotate || lead.rotate) {
        target.rotate = (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.mix)(follow.rotate || 0, lead.rotate || 0, progress);
    }
}
function getRadius(values, radiusName) {
    var _a;
    return (_a = values[radiusName]) !== null && _a !== void 0 ? _a : values.borderRadius;
}
// /**
//  * We only want to mix the background color if there's a follow element
//  * that we're not crossfading opacity between. For instance with switch
//  * AnimateSharedLayout animations, this helps the illusion of a continuous
//  * element being animated but also cuts down on the number of paints triggered
//  * for elements where opacity is doing that work for us.
//  */
// if (
//     !hasFollowElement &&
//     latestLeadValues.backgroundColor &&
//     latestFollowValues.backgroundColor
// ) {
//     /**
//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
//      * We could probably create a mixer that runs at the start of the animation but
//      * the idea behind the crossfader is that it runs dynamically between two potentially
//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
//      */
//     leadState.backgroundColor = followState.backgroundColor = mixColor(
//         latestFollowValues.backgroundColor as string,
//         latestLeadValues.backgroundColor as string
//     )(p)
// }
var easeCrossfadeIn = compress(0, 0.5, popmotion__WEBPACK_IMPORTED_MODULE_2__.circOut);
var easeCrossfadeOut = compress(0.5, 0.95, popmotion__WEBPACK_IMPORTED_MODULE_2__.linear);
function compress(min, max, easing) {
    return function (p) {
        // Could replace ifs with clamp
        if (p < min)
            return 0;
        if (p > max)
            return 1;
        return easing((0,popmotion__WEBPACK_IMPORTED_MODULE_3__.progress)(min, max, p));
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertBoundingBoxToBox": () => (/* binding */ convertBoundingBoxToBox),
/* harmony export */   "convertBoxToBoundingBox": () => (/* binding */ convertBoxToBoundingBox),
/* harmony export */   "transformBoxPoints": () => (/* binding */ transformBoxPoints)
/* harmony export */ });
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToBox(_a) {
    var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertBoxToBoundingBox(_a) {
    var x = _a.x, y = _a.y;
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoxPoints(point, transformPoint) {
    if (!transformPoint)
        return point;
    var topLeft = transformPoint({ x: point.left, y: point.top });
    var bottomRight = transformPoint({ x: point.right, y: point.bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyAxisInto": () => (/* binding */ copyAxisInto),
/* harmony export */   "copyBoxInto": () => (/* binding */ copyBoxInto)
/* harmony export */ });
/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyAxisDelta": () => (/* binding */ applyAxisDelta),
/* harmony export */   "applyBoxDelta": () => (/* binding */ applyBoxDelta),
/* harmony export */   "applyPointDelta": () => (/* binding */ applyPointDelta),
/* harmony export */   "applyTreeDeltas": () => (/* binding */ applyTreeDeltas),
/* harmony export */   "scalePoint": () => (/* binding */ scalePoint),
/* harmony export */   "transformAxis": () => (/* binding */ transformAxis),
/* harmony export */   "transformBox": () => (/* binding */ transformBox),
/* harmony export */   "translateAxis": () => (/* binding */ translateAxis)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var _utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-transform.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs");




/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    var distanceFromOrigin = point - originPoint;
    var scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate, scale, originPoint, boxScale) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, _a) {
    var x = _a.x, y = _a.y;
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition) {
    var _a, _b;
    if (isSharedTransition === void 0) { isSharedTransition = false; }
    var treeLength = treePath.length;
    if (!treeLength)
        return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    var node;
    var delta;
    for (var i = 0; i < treeLength; i++) {
        node = treePath[i];
        delta = node.projectionDelta;
        if (((_b = (_a = node.instance) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.display) === "contents")
            continue;
        if (isSharedTransition &&
            node.options.layoutScroll &&
            node.scroll &&
            node !== node.root) {
            transformBox(box, { x: -node.scroll.x, y: -node.scroll.y });
        }
        if (delta) {
            // Incoporate each ancestor's scale into a culmulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.hasTransform)(node.latestValues)) {
            transformBox(box, node.latestValues);
        }
    }
}
function translateAxis(axis, distance) {
    axis.min = axis.min + distance;
    axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function transformAxis(axis, transforms, _a) {
    var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    var axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
    var originPoint = (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.mix)(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function transformBox(box, transform) {
    transformAxis(box.x, transform, xKeys);
    transformAxis(box.y, transform, yKeys);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcAxisDelta": () => (/* binding */ calcAxisDelta),
/* harmony export */   "calcBoxDelta": () => (/* binding */ calcBoxDelta),
/* harmony export */   "calcLength": () => (/* binding */ calcLength),
/* harmony export */   "calcRelativeAxis": () => (/* binding */ calcRelativeAxis),
/* harmony export */   "calcRelativeAxisPosition": () => (/* binding */ calcRelativeAxisPosition),
/* harmony export */   "calcRelativeBox": () => (/* binding */ calcRelativeBox),
/* harmony export */   "calcRelativePosition": () => (/* binding */ calcRelativePosition),
/* harmony export */   "isNear": () => (/* binding */ isNear)
/* harmony export */ });
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/distance.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");


function calcLength(axis) {
    return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
    if (target === void 0) { target = 0; }
    if (maxDistance === void 0) { maxDistance = 0.01; }
    return (0,popmotion__WEBPACK_IMPORTED_MODULE_0__.distance)(value, target) < maxDistance;
}
function calcAxisDelta(delta, source, target, origin) {
    if (origin === void 0) { origin = 0.5; }
    delta.origin = origin;
    delta.originPoint = (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.mix)(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    if (isNear(delta.scale, 1, 0.0001) || isNaN(delta.scale))
        delta.scale = 1;
    delta.translate =
        (0,popmotion__WEBPACK_IMPORTED_MODULE_1__.mix)(target.min, target.max, delta.origin) - delta.originPoint;
    if (isNear(delta.translate) || isNaN(delta.translate))
        delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin === null || origin === void 0 ? void 0 : origin.originX);
    calcAxisDelta(delta.y, source.y, target.y, origin === null || origin === void 0 ? void 0 : origin.originY);
}
function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
    target.min = layout.min - parent.min;
    target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
    calcRelativeAxisPosition(target.x, layout.x, parent.x);
    calcRelativeAxisPosition(target.y, layout.y, parent.y);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeAxisDelta": () => (/* binding */ removeAxisDelta),
/* harmony export */   "removeAxisTransforms": () => (/* binding */ removeAxisTransforms),
/* harmony export */   "removeBoxTransforms": () => (/* binding */ removeBoxTransforms),
/* harmony export */   "removePointDelta": () => (/* binding */ removePointDelta)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");
/* harmony import */ var _delta_apply_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delta-apply.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs");





/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = (0,_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_0__.scalePoint)(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = (0,_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_0__.scalePoint)(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate, scale, origin, boxScale, originAxis, sourceAxis) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    if (origin === void 0) { origin = 0.5; }
    if (originAxis === void 0) { originAxis = axis; }
    if (sourceAxis === void 0) { sourceAxis = axis; }
    if (style_value_types__WEBPACK_IMPORTED_MODULE_1__.percent.test(translate)) {
        translate = parseFloat(translate);
        var relativeProgress = (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.mix)(sourceAxis.min, sourceAxis.max, translate / 100);
        translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number")
        return;
    var originPoint = (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.mix)(originAxis.min, originAxis.max, origin);
    if (axis === originAxis)
        originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, _a, origin, sourceAxis) {
    var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox === null || originBox === void 0 ? void 0 : originBox.x, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.x);
    removeAxisTransforms(box.y, transforms, yKeys, originBox === null || originBox === void 0 ? void 0 : originBox.y, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.y);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/models.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAxis": () => (/* binding */ createAxis),
/* harmony export */   "createAxisDelta": () => (/* binding */ createAxisDelta),
/* harmony export */   "createBox": () => (/* binding */ createBox),
/* harmony export */   "createDelta": () => (/* binding */ createDelta)
/* harmony export */ });
var createAxisDelta = function () { return ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
}); };
var createDelta = function () { return ({
    x: createAxisDelta(),
    y: createAxisDelta(),
}); };
var createAxis = function () { return ({ min: 0, max: 0 }); };
var createBox = function () { return ({
    x: createAxis(),
    y: createAxis(),
}); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boxEquals": () => (/* binding */ boxEquals),
/* harmony export */   "isDeltaZero": () => (/* binding */ isDeltaZero)
/* harmony export */ });
function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a, b) {
    return (a.x.min === b.x.min &&
        a.x.max === b.x.max &&
        a.y.min === b.y.min &&
        a.y.max === b.y.max);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentProjectionNode": () => (/* binding */ DocumentProjectionNode)
/* harmony export */ });
/* harmony import */ var _create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-projection-node.mjs */ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs");
/* harmony import */ var _events_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../events/use-dom-event.mjs */ "./node_modules/framer-motion/dist/es/events/use-dom-event.mjs");



var DocumentProjectionNode = (0,_create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__.createProjectionNode)({
    attachResizeListener: function (ref, notify) { return (0,_events_use_dom_event_mjs__WEBPACK_IMPORTED_MODULE_1__.addDomEvent)(ref, "resize", notify); },
    measureScroll: function () { return ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
    }); },
    checkIsScrollRoot: function () { return true; },
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLProjectionNode": () => (/* binding */ HTMLProjectionNode),
/* harmony export */   "rootProjectionNode": () => (/* binding */ rootProjectionNode)
/* harmony export */ });
/* harmony import */ var _create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-projection-node.mjs */ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs");
/* harmony import */ var _DocumentProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentProjectionNode.mjs */ "./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs");



var rootProjectionNode = {
    current: undefined,
};
var HTMLProjectionNode = (0,_create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_0__.createProjectionNode)({
    measureScroll: function (instance) { return ({
        x: instance.scrollLeft,
        y: instance.scrollTop,
    }); },
    defaultParent: function () {
        if (!rootProjectionNode.current) {
            var documentNode = new _DocumentProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_1__.DocumentProjectionNode(0, {});
            documentNode.mount(window);
            documentNode.setOptions({ layoutScroll: true });
            rootProjectionNode.current = documentNode;
        }
        return rootProjectionNode.current;
    },
    resetTransform: function (instance, value) {
        instance.style.transform = value !== null && value !== void 0 ? value : "none";
    },
    checkIsScrollRoot: function (instance) {
        return Boolean(window.getComputedStyle(instance).position === "fixed");
    },
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectionNode": () => (/* binding */ createProjectionNode),
/* harmony export */   "globalProjectionState": () => (/* binding */ globalProjectionState),
/* harmony export */   "mixAxis": () => (/* binding */ mixAxis),
/* harmony export */   "mixAxisDelta": () => (/* binding */ mixAxisDelta),
/* harmony export */   "mixBox": () => (/* binding */ mixBox)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var _animation_animate_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../animation/animate.mjs */ "./node_modules/framer-motion/dist/es/animation/animate.mjs");
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/subscription-manager.mjs */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs");
/* harmony import */ var _animation_mix_values_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../animation/mix-values.mjs */ "./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs");
/* harmony import */ var _geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../geometry/copy.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs");
/* harmony import */ var _geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../geometry/delta-apply.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs");
/* harmony import */ var _geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../geometry/delta-calc.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs");
/* harmony import */ var _geometry_delta_remove_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/delta-remove.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs");
/* harmony import */ var _geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../geometry/models.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _animation_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animation/utils/transitions.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs");
/* harmony import */ var _geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../geometry/utils.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs");
/* harmony import */ var _shared_stack_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/stack.mjs */ "./node_modules/framer-motion/dist/es/projection/shared/stack.mjs");
/* harmony import */ var _styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../styles/scale-correction.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs");
/* harmony import */ var _styles_transform_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/transform.mjs */ "./node_modules/framer-motion/dist/es/projection/styles/transform.mjs");
/* harmony import */ var _utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/each-axis.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs");
/* harmony import */ var _utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/has-transform.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs");
/* harmony import */ var _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../render/html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _render_utils_flat_tree_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/utils/flat-tree.mjs */ "./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs");
/* harmony import */ var _value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../value/utils/resolve-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs");






















/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */
var animationTarget = 1000;
/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */
var globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: false,
};
function createProjectionNode(_a) {
    var attachResizeListener = _a.attachResizeListener, defaultParent = _a.defaultParent, measureScroll = _a.measureScroll, checkIsScrollRoot = _a.checkIsScrollRoot, resetTransform = _a.resetTransform;
    return /** @class */ (function () {
        function ProjectionNode(id, latestValues, parent) {
            var _this = this;
            if (latestValues === void 0) { latestValues = {}; }
            if (parent === void 0) { parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent(); }
            /**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */
            this.children = new Set();
            /**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */
            this.options = {};
            /**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */
            this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            /**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */
            this.isLayoutDirty = false;
            /**
             * Block layout updates for instant layout transitions throughout the tree.
             */
            this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            /**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */
            this.isUpdating = false;
            /**
             * If this is an SVG element we currently disable projection transforms
             */
            this.isSVG = false;
            /**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */
            this.needsReset = false;
            /**
             * Flags whether this node should have its transform reset prior to measuring.
             */
            this.shouldResetTransform = false;
            /**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to actually
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */
            this.treeScale = { x: 1, y: 1 };
            /**
             *
             */
            this.eventHandlers = new Map();
            // Note: Currently only running on root node
            this.potentialNodes = new Map();
            this.checkUpdateFailed = function () {
                if (_this.isUpdating) {
                    _this.isUpdating = false;
                    _this.clearAllSnapshots();
                }
            };
            this.updateProjection = function () {
                _this.nodes.forEach(resolveTargetDelta);
                _this.nodes.forEach(calcProjection);
            };
            this.hasProjected = false;
            this.isVisible = true;
            this.animationProgress = 0;
            /**
             * Shared layout
             */
            // TODO Only running on root node
            this.sharedNodes = new Map();
            this.id = id;
            this.latestValues = latestValues;
            this.root = parent ? parent.root || parent : this;
            this.path = parent ? (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(parent.path), false), [parent], false) : [];
            this.parent = parent;
            this.depth = parent ? parent.depth + 1 : 0;
            id && this.root.registerPotentialNode(id, this);
            for (var i = 0; i < this.path.length; i++) {
                this.path[i].shouldResetTransform = true;
            }
            if (this.root === this)
                this.nodes = new _render_utils_flat_tree_mjs__WEBPACK_IMPORTED_MODULE_2__.FlatTree();
        }
        ProjectionNode.prototype.addEventListener = function (name, handler) {
            if (!this.eventHandlers.has(name)) {
                this.eventHandlers.set(name, new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_3__.SubscriptionManager());
            }
            return this.eventHandlers.get(name).add(handler);
        };
        ProjectionNode.prototype.notifyListeners = function (name) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var subscriptionManager = this.eventHandlers.get(name);
            subscriptionManager === null || subscriptionManager === void 0 ? void 0 : subscriptionManager.notify.apply(subscriptionManager, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(args), false));
        };
        ProjectionNode.prototype.hasListeners = function (name) {
            return this.eventHandlers.has(name);
        };
        ProjectionNode.prototype.registerPotentialNode = function (id, node) {
            this.potentialNodes.set(id, node);
        };
        /**
         * Lifecycles
         */
        ProjectionNode.prototype.mount = function (instance, isLayoutDirty) {
            var _this = this;
            var _a;
            if (isLayoutDirty === void 0) { isLayoutDirty = false; }
            if (this.instance)
                return;
            this.isSVG =
                instance instanceof SVGElement && instance.tagName !== "svg";
            this.instance = instance;
            var _b = this.options, layoutId = _b.layoutId, layout = _b.layout, visualElement = _b.visualElement;
            if (visualElement && !visualElement.getInstance()) {
                visualElement.mount(instance);
            }
            this.root.nodes.add(this);
            (_a = this.parent) === null || _a === void 0 ? void 0 : _a.children.add(this);
            this.id && this.root.potentialNodes.delete(this.id);
            if (isLayoutDirty && (layout || layoutId)) {
                this.isLayoutDirty = true;
            }
            if (attachResizeListener) {
                var unblockTimeout_1;
                var resizeUnblockUpdate_1 = function () {
                    return (_this.root.updateBlockedByResize = false);
                };
                attachResizeListener(instance, function () {
                    _this.root.updateBlockedByResize = true;
                    clearTimeout(unblockTimeout_1);
                    unblockTimeout_1 = window.setTimeout(resizeUnblockUpdate_1, 250);
                    if (globalProjectionState.hasAnimatedSinceResize) {
                        globalProjectionState.hasAnimatedSinceResize = false;
                        _this.nodes.forEach(finishAnimation);
                    }
                });
            }
            if (layoutId) {
                this.root.registerSharedNode(layoutId, this);
            }
            // Only register the handler if it requires layout animation
            if (this.options.animate !== false &&
                visualElement &&
                (layoutId || layout)) {
                this.addEventListener("didUpdate", function (_a) {
                    var _b, _c, _d, _e, _f;
                    var delta = _a.delta, hasLayoutChanged = _a.hasLayoutChanged, hasRelativeTargetChanged = _a.hasRelativeTargetChanged, newLayout = _a.layout;
                    if (_this.isTreeAnimationBlocked()) {
                        _this.target = undefined;
                        _this.relativeTarget = undefined;
                        return;
                    }
                    // TODO: Check here if an animation exists
                    var layoutTransition = (_c = (_b = _this.options.transition) !== null && _b !== void 0 ? _b : visualElement.getDefaultTransition()) !== null && _c !== void 0 ? _c : defaultLayoutTransition;
                    var _g = visualElement.getProps(), onLayoutAnimationStart = _g.onLayoutAnimationStart, onLayoutAnimationComplete = _g.onLayoutAnimationComplete;
                    /**
                     * The target layout of the element might stay the same,
                     * but its position relative to its parent has changed.
                     */
                    var targetChanged = !_this.targetLayout ||
                        !(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.boxEquals)(_this.targetLayout, newLayout) ||
                        hasRelativeTargetChanged;
                    /**
                     * If the layout hasn't seemed to have changed, it might be that the
                     * element is visually in the same place in the document but its position
                     * relative to its parent has indeed changed. So here we check for that.
                     */
                    var hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
                    if (((_d = _this.resumeFrom) === null || _d === void 0 ? void 0 : _d.instance) ||
                        hasOnlyRelativeTargetChanged ||
                        (hasLayoutChanged &&
                            (targetChanged || !_this.currentAnimation))) {
                        if (_this.resumeFrom) {
                            _this.resumingFrom = _this.resumeFrom;
                            _this.resumingFrom.resumingFrom = undefined;
                        }
                        _this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
                        var animationOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (0,_animation_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_5__.getValueTransition)(layoutTransition, "layout")), { onPlay: onLayoutAnimationStart, onComplete: onLayoutAnimationComplete });
                        if (visualElement.shouldReduceMotion) {
                            animationOptions.delay = 0;
                            animationOptions.type = false;
                        }
                        _this.startAnimation(animationOptions);
                    }
                    else {
                        /**
                         * If the layout hasn't changed and we have an animation that hasn't started yet,
                         * finish it immediately. Otherwise it will be animating from a location
                         * that was probably never commited to screen and look like a jumpy box.
                         */
                        if (!hasLayoutChanged &&
                            _this.animationProgress === 0) {
                            _this.finishAnimation();
                        }
                        _this.isLead() && ((_f = (_e = _this.options).onExitComplete) === null || _f === void 0 ? void 0 : _f.call(_e));
                    }
                    _this.targetLayout = newLayout;
                });
            }
        };
        ProjectionNode.prototype.unmount = function () {
            var _a, _b;
            this.options.layoutId && this.willUpdate();
            this.root.nodes.remove(this);
            (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.remove(this);
            (_b = this.parent) === null || _b === void 0 ? void 0 : _b.children.delete(this);
            this.instance = undefined;
            framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.preRender(this.updateProjection);
        };
        // only on the root
        ProjectionNode.prototype.blockUpdate = function () {
            this.updateManuallyBlocked = true;
        };
        ProjectionNode.prototype.unblockUpdate = function () {
            this.updateManuallyBlocked = false;
        };
        ProjectionNode.prototype.isUpdateBlocked = function () {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        };
        ProjectionNode.prototype.isTreeAnimationBlocked = function () {
            var _a;
            return (this.isAnimationBlocked ||
                ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isTreeAnimationBlocked()) ||
                false);
        };
        // Note: currently only running on root node
        ProjectionNode.prototype.startUpdate = function () {
            var _a;
            if (this.isUpdateBlocked())
                return;
            this.isUpdating = true;
            (_a = this.nodes) === null || _a === void 0 ? void 0 : _a.forEach(resetRotation);
        };
        ProjectionNode.prototype.willUpdate = function (shouldNotifyListeners) {
            var _a, _b, _c;
            if (shouldNotifyListeners === void 0) { shouldNotifyListeners = true; }
            if (this.root.isUpdateBlocked()) {
                (_b = (_a = this.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
                return;
            }
            !this.root.isUpdating && this.root.startUpdate();
            if (this.isLayoutDirty)
                return;
            this.isLayoutDirty = true;
            for (var i = 0; i < this.path.length; i++) {
                var node = this.path[i];
                node.shouldResetTransform = true;
                /**
                 * TODO: Check we haven't updated the scroll
                 * since the last didUpdate
                 */
                node.updateScroll();
            }
            var _d = this.options, layoutId = _d.layoutId, layout = _d.layout;
            if (layoutId === undefined && !layout)
                return;
            var transformTemplate = (_c = this.options.visualElement) === null || _c === void 0 ? void 0 : _c.getProps().transformTemplate;
            this.prevTransformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
            this.updateSnapshot();
            shouldNotifyListeners && this.notifyListeners("willUpdate");
        };
        // Note: Currently only running on root node
        ProjectionNode.prototype.didUpdate = function () {
            var updateWasBlocked = this.isUpdateBlocked();
            // When doing an instant transition, we skip the layout update,
            // but should still clean up the measurements so that the next
            // snapshot could be taken correctly.
            if (updateWasBlocked) {
                this.unblockUpdate();
                this.clearAllSnapshots();
                this.nodes.forEach(clearMeasurements);
                return;
            }
            if (!this.isUpdating)
                return;
            this.isUpdating = false;
            /**
             * Search for and mount newly-added projection elements.
             *
             * TODO: Every time a new component is rendered we could search up the tree for
             * the closest mounted node and query from there rather than document.
             */
            if (this.potentialNodes.size) {
                this.potentialNodes.forEach(mountNodeEarly);
                this.potentialNodes.clear();
            }
            /**
             * Write
             */
            this.nodes.forEach(resetTransformStyle);
            /**
             * Read ==================
             */
            // Update layout measurements of updated children
            this.nodes.forEach(updateLayout);
            /**
             * Write
             */
            // Notify listeners that the layout is updated
            this.nodes.forEach(notifyLayoutUpdate);
            this.clearAllSnapshots();
            // Flush any scheduled updates
            framesync__WEBPACK_IMPORTED_MODULE_0__.flushSync.update();
            framesync__WEBPACK_IMPORTED_MODULE_0__.flushSync.preRender();
            framesync__WEBPACK_IMPORTED_MODULE_0__.flushSync.render();
        };
        ProjectionNode.prototype.clearAllSnapshots = function () {
            this.nodes.forEach(clearSnapshot);
            this.sharedNodes.forEach(removeLeadSnapshots);
        };
        ProjectionNode.prototype.scheduleUpdateProjection = function () {
            framesync__WEBPACK_IMPORTED_MODULE_0__["default"].preRender(this.updateProjection, false, true);
        };
        ProjectionNode.prototype.scheduleCheckAfterUnmount = function () {
            var _this = this;
            /**
             * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
             * we manually call didUpdate to give a chance to the siblings to animate.
             * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
             */
            framesync__WEBPACK_IMPORTED_MODULE_0__["default"].postRender(function () {
                if (_this.isLayoutDirty) {
                    _this.root.didUpdate();
                }
                else {
                    _this.root.checkUpdateFailed();
                }
            });
        };
        /**
         * Update measurements
         */
        ProjectionNode.prototype.updateSnapshot = function () {
            if (this.snapshot || !this.instance)
                return;
            var measured = this.measure();
            var layout = this.removeTransform(this.removeElementScroll(measured));
            roundBox(layout);
            this.snapshot = {
                measured: measured,
                layout: layout,
                latestValues: {},
            };
        };
        ProjectionNode.prototype.updateLayout = function () {
            var _a;
            if (!this.instance)
                return;
            // TODO: Incorporate into a forwarded scroll offset
            this.updateScroll();
            if (!(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty) {
                return;
            }
            /**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */
            if (this.resumeFrom && !this.resumeFrom.instance) {
                for (var i = 0; i < this.path.length; i++) {
                    var node = this.path[i];
                    node.updateScroll();
                }
            }
            var measured = this.measure();
            roundBox(measured);
            var prevLayout = this.layout;
            this.layout = {
                measured: measured,
                actual: this.removeElementScroll(measured),
            };
            this.layoutCorrected = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
            this.isLayoutDirty = false;
            this.projectionDelta = undefined;
            this.notifyListeners("measure", this.layout.actual);
            (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.notifyLayoutMeasure(this.layout.actual, prevLayout === null || prevLayout === void 0 ? void 0 : prevLayout.actual);
        };
        ProjectionNode.prototype.updateScroll = function () {
            if (this.options.layoutScroll && this.instance) {
                this.isScrollRoot = checkIsScrollRoot(this.instance);
                this.scroll = measureScroll(this.instance);
            }
        };
        ProjectionNode.prototype.resetTransform = function () {
            var _a;
            if (!resetTransform)
                return;
            var isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
            var hasProjection = this.projectionDelta && !(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.isDeltaZero)(this.projectionDelta);
            var transformTemplate = (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.getProps().transformTemplate;
            var transformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
            var transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
            if (isResetRequested &&
                (hasProjection ||
                    (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasTransform)(this.latestValues) ||
                    transformTemplateHasChanged)) {
                resetTransform(this.instance, transformTemplateValue);
                this.shouldResetTransform = false;
                this.scheduleRender();
            }
        };
        ProjectionNode.prototype.measure = function () {
            var visualElement = this.options.visualElement;
            if (!visualElement)
                return (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
            var box = visualElement.measureViewportBox();
            // Remove viewport scroll to give page-relative coordinates
            var scroll = this.root.scroll;
            if (scroll) {
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.translateAxis)(box.x, scroll.x);
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.translateAxis)(box.y, scroll.y);
            }
            return box;
        };
        ProjectionNode.prototype.removeElementScroll = function (box) {
            var boxWithoutScroll = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(boxWithoutScroll, box);
            /**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */
            for (var i = 0; i < this.path.length; i++) {
                var node = this.path[i];
                var scroll_1 = node.scroll, options = node.options, isScrollRoot = node.isScrollRoot;
                if (node !== this.root && scroll_1 && options.layoutScroll) {
                    /**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */
                    if (isScrollRoot) {
                        (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(boxWithoutScroll, box);
                        var rootScroll = this.root.scroll;
                        /**
                         * Undo the application of page scroll that was originally added
                         * to the measured bounding box.
                         */
                        if (rootScroll) {
                            (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.translateAxis)(boxWithoutScroll.x, -rootScroll.x);
                            (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.translateAxis)(boxWithoutScroll.y, -rootScroll.y);
                        }
                    }
                    (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.translateAxis)(boxWithoutScroll.x, scroll_1.x);
                    (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.translateAxis)(boxWithoutScroll.y, scroll_1.y);
                }
            }
            return boxWithoutScroll;
        };
        ProjectionNode.prototype.applyTransform = function (box, transformOnly) {
            if (transformOnly === void 0) { transformOnly = false; }
            var withTransforms = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(withTransforms, box);
            for (var i = 0; i < this.path.length; i++) {
                var node = this.path[i];
                if (!transformOnly &&
                    node.options.layoutScroll &&
                    node.scroll &&
                    node !== node.root) {
                    (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.transformBox)(withTransforms, {
                        x: -node.scroll.x,
                        y: -node.scroll.y,
                    });
                }
                if (!(0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasTransform)(node.latestValues))
                    continue;
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.transformBox)(withTransforms, node.latestValues);
            }
            if ((0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasTransform)(this.latestValues)) {
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.transformBox)(withTransforms, this.latestValues);
            }
            return withTransforms;
        };
        ProjectionNode.prototype.removeTransform = function (box) {
            var _a;
            var boxWithoutTransform = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(boxWithoutTransform, box);
            for (var i = 0; i < this.path.length; i++) {
                var node = this.path[i];
                if (!node.instance)
                    continue;
                if (!(0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasTransform)(node.latestValues))
                    continue;
                (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasScale)(node.latestValues) && node.updateSnapshot();
                var sourceBox = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                var nodeBox = node.measure();
                (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(sourceBox, nodeBox);
                (0,_geometry_delta_remove_mjs__WEBPACK_IMPORTED_MODULE_10__.removeBoxTransforms)(boxWithoutTransform, node.latestValues, (_a = node.snapshot) === null || _a === void 0 ? void 0 : _a.layout, sourceBox);
            }
            if ((0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasTransform)(this.latestValues)) {
                (0,_geometry_delta_remove_mjs__WEBPACK_IMPORTED_MODULE_10__.removeBoxTransforms)(boxWithoutTransform, this.latestValues);
            }
            return boxWithoutTransform;
        };
        /**
         *
         */
        ProjectionNode.prototype.setTargetDelta = function (delta) {
            this.targetDelta = delta;
            this.root.scheduleUpdateProjection();
        };
        ProjectionNode.prototype.setOptions = function (options) {
            var _a;
            this.options = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, this.options), options), { crossfade: (_a = options.crossfade) !== null && _a !== void 0 ? _a : true });
        };
        ProjectionNode.prototype.clearMeasurements = function () {
            this.scroll = undefined;
            this.layout = undefined;
            this.snapshot = undefined;
            this.prevTransformTemplateValue = undefined;
            this.targetDelta = undefined;
            this.target = undefined;
            this.isLayoutDirty = false;
        };
        /**
         * Frame calculations
         */
        ProjectionNode.prototype.resolveTargetDelta = function () {
            var _a;
            var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
            /**
             * If we have no layout, we can't perform projection, so early return
             */
            if (!this.layout || !(layout || layoutId))
                return;
            /**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */
            // TODO If this is unsuccessful this currently happens every frame
            if (!this.targetDelta && !this.relativeTarget) {
                // TODO: This is a semi-repetition of further down this function, make DRY
                this.relativeParent = this.getClosestProjectingParent();
                if (this.relativeParent && this.relativeParent.layout) {
                    this.relativeTarget = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                    this.relativeTargetOrigin = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcRelativePosition)(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual);
                    (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin);
                }
            }
            /**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */
            if (!this.relativeTarget && !this.targetDelta)
                return;
            /**
             * Lazy-init target data structure
             */
            if (!this.target) {
                this.target = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                this.targetWithTransforms = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
            }
            /**
             * If we've got a relative box for this component, resolve it into a target relative to the parent.
             */
            if (this.relativeTarget &&
                this.relativeTargetOrigin &&
                ((_a = this.relativeParent) === null || _a === void 0 ? void 0 : _a.target)) {
                (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcRelativeBox)(this.target, this.relativeTarget, this.relativeParent.target);
                /**
                 * If we've only got a targetDelta, resolve it into a target
                 */
            }
            else if (this.targetDelta) {
                if (Boolean(this.resumingFrom)) {
                    // TODO: This is creating a new object every frame
                    this.target = this.applyTransform(this.layout.actual);
                }
                else {
                    (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(this.target, this.layout.actual);
                }
                (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.applyBoxDelta)(this.target, this.targetDelta);
            }
            else {
                /**
                 * If no target, use own layout as target
                 */
                (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(this.target, this.layout.actual);
            }
            /**
             * If we've been told to attempt to resolve a relative target, do so.
             */
            if (this.attemptToResolveRelativeTarget) {
                this.attemptToResolveRelativeTarget = false;
                this.relativeParent = this.getClosestProjectingParent();
                if (this.relativeParent &&
                    Boolean(this.relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                    !this.relativeParent.options.layoutScroll &&
                    this.relativeParent.target) {
                    this.relativeTarget = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                    this.relativeTargetOrigin = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcRelativePosition)(this.relativeTargetOrigin, this.target, this.relativeParent.target);
                    (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin);
                }
            }
        };
        ProjectionNode.prototype.getClosestProjectingParent = function () {
            if (!this.parent || (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasTransform)(this.parent.latestValues))
                return undefined;
            if ((this.parent.relativeTarget || this.parent.targetDelta) &&
                this.parent.layout) {
                return this.parent;
            }
            else {
                return this.parent.getClosestProjectingParent();
            }
        };
        ProjectionNode.prototype.calcProjection = function () {
            var _a;
            var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
            /**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */
            this.isTreeAnimating = Boolean(((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation);
            if (!this.isTreeAnimating) {
                this.targetDelta = this.relativeTarget = undefined;
            }
            if (!this.layout || !(layout || layoutId))
                return;
            var lead = this.getLead();
            /**
             * Reset the corrected box with the latest values from box, as we're then going
             * to perform mutative operations on it.
             */
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(this.layoutCorrected, this.layout.actual);
            /**
             * Apply all the parent deltas to this box to produce the corrected box. This
             * is the layout box, as it will appear on screen as a result of the transforms of its parents.
             */
            (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== lead);
            var target = lead.target;
            if (!target)
                return;
            if (!this.projectionDelta) {
                this.projectionDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createDelta)();
                this.projectionDeltaWithTransform = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createDelta)();
            }
            var prevTreeScaleX = this.treeScale.x;
            var prevTreeScaleY = this.treeScale.y;
            var prevProjectionTransform = this.projectionTransform;
            /**
             * Update the delta between the corrected box and the target box before user-set transforms were applied.
             * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
             * for our layout reprojection, but still allow them to be scaled correctly by the user.
             * It might be that to simplify this we may want to accept that user-set scale is also corrected
             * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
             * to allow people to choose whether these styles are corrected based on just the
             * layout reprojection or the final bounding box.
             */
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcBoxDelta)(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
            this.projectionTransform = (0,_styles_transform_mjs__WEBPACK_IMPORTED_MODULE_12__.buildProjectionTransform)(this.projectionDelta, this.treeScale);
            if (this.projectionTransform !== prevProjectionTransform ||
                this.treeScale.x !== prevTreeScaleX ||
                this.treeScale.y !== prevTreeScaleY) {
                this.hasProjected = true;
                this.scheduleRender();
                this.notifyListeners("projectionUpdate", target);
            }
        };
        ProjectionNode.prototype.hide = function () {
            this.isVisible = false;
            // TODO: Schedule render
        };
        ProjectionNode.prototype.show = function () {
            this.isVisible = true;
            // TODO: Schedule render
        };
        ProjectionNode.prototype.scheduleRender = function (notifyAll) {
            var _a, _b, _c;
            if (notifyAll === void 0) { notifyAll = true; }
            (_b = (_a = this.options).scheduleRender) === null || _b === void 0 ? void 0 : _b.call(_a);
            notifyAll && ((_c = this.getStack()) === null || _c === void 0 ? void 0 : _c.scheduleRender());
            if (this.resumingFrom && !this.resumingFrom.instance) {
                this.resumingFrom = undefined;
            }
        };
        ProjectionNode.prototype.setAnimationOrigin = function (delta, hasOnlyRelativeTargetChanged) {
            var _this = this;
            var _a;
            if (hasOnlyRelativeTargetChanged === void 0) { hasOnlyRelativeTargetChanged = false; }
            var snapshot = this.snapshot;
            var snapshotLatestValues = (snapshot === null || snapshot === void 0 ? void 0 : snapshot.latestValues) || {};
            var mixedValues = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, this.latestValues);
            var targetDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createDelta)();
            this.relativeTarget = this.relativeTargetOrigin = undefined;
            this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
            var relativeLayout = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
            var isSharedLayoutAnimation = snapshot === null || snapshot === void 0 ? void 0 : snapshot.isShared;
            var isOnlyMember = (((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.members.length) || 0) <= 1;
            var shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation &&
                !isOnlyMember &&
                this.options.crossfade === true &&
                !this.path.some(hasOpacityCrossfade));
            this.animationProgress = 0;
            this.mixTargetDelta = function (latest) {
                var _a;
                var progress = latest / 1000;
                mixAxisDelta(targetDelta.x, delta.x, progress);
                mixAxisDelta(targetDelta.y, delta.y, progress);
                _this.setTargetDelta(targetDelta);
                if (_this.relativeTarget &&
                    _this.relativeTargetOrigin &&
                    _this.layout &&
                    ((_a = _this.relativeParent) === null || _a === void 0 ? void 0 : _a.layout)) {
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcRelativePosition)(relativeLayout, _this.layout.actual, _this.relativeParent.layout.actual);
                    mixBox(_this.relativeTarget, _this.relativeTargetOrigin, relativeLayout, progress);
                }
                if (isSharedLayoutAnimation) {
                    _this.animationValues = mixedValues;
                    (0,_animation_mix_values_mjs__WEBPACK_IMPORTED_MODULE_13__.mixValues)(mixedValues, snapshotLatestValues, _this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
                }
                _this.root.scheduleUpdateProjection();
                _this.scheduleRender();
                _this.animationProgress = progress;
            };
            this.mixTargetDelta(0);
        };
        ProjectionNode.prototype.startAnimation = function (options) {
            var _this = this;
            var _a, _b;
            this.notifyListeners("animationStart");
            (_a = this.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
            if (this.resumingFrom) {
                (_b = this.resumingFrom.currentAnimation) === null || _b === void 0 ? void 0 : _b.stop();
            }
            if (this.pendingAnimation) {
                framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.update(this.pendingAnimation);
                this.pendingAnimation = undefined;
            }
            /**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */
            this.pendingAnimation = framesync__WEBPACK_IMPORTED_MODULE_0__["default"].update(function () {
                globalProjectionState.hasAnimatedSinceResize = true;
                _this.currentAnimation = (0,_animation_animate_mjs__WEBPACK_IMPORTED_MODULE_14__.animate)(0, animationTarget, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), { onUpdate: function (latest) {
                        var _a;
                        _this.mixTargetDelta(latest);
                        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, latest);
                    }, onComplete: function () {
                        var _a;
                        (_a = options.onComplete) === null || _a === void 0 ? void 0 : _a.call(options);
                        _this.completeAnimation();
                    } }));
                if (_this.resumingFrom) {
                    _this.resumingFrom.currentAnimation = _this.currentAnimation;
                }
                _this.pendingAnimation = undefined;
            });
        };
        ProjectionNode.prototype.completeAnimation = function () {
            var _a;
            if (this.resumingFrom) {
                this.resumingFrom.currentAnimation = undefined;
                this.resumingFrom.preserveOpacity = undefined;
            }
            (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.exitAnimationComplete();
            this.resumingFrom =
                this.currentAnimation =
                    this.animationValues =
                        undefined;
            this.notifyListeners("animationComplete");
        };
        ProjectionNode.prototype.finishAnimation = function () {
            var _a;
            if (this.currentAnimation) {
                (_a = this.mixTargetDelta) === null || _a === void 0 ? void 0 : _a.call(this, animationTarget);
                this.currentAnimation.stop();
            }
            this.completeAnimation();
        };
        ProjectionNode.prototype.applyTransformsToTarget = function () {
            var _a = this.getLead(), targetWithTransforms = _a.targetWithTransforms, target = _a.target, layout = _a.layout, latestValues = _a.latestValues;
            if (!targetWithTransforms || !target || !layout)
                return;
            (0,_geometry_copy_mjs__WEBPACK_IMPORTED_MODULE_9__.copyBoxInto)(targetWithTransforms, target);
            /**
             * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
             * This is the final box that we will then project into by calculating a transform delta and
             * applying it to the corrected box.
             */
            (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_8__.transformBox)(targetWithTransforms, latestValues);
            /**
             * Update the delta between the corrected box and the final target box, after
             * user-set transforms are applied to it. This will be used by the renderer to
             * create a transform style that will reproject the element from its actual layout
             * into the desired bounding box.
             */
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcBoxDelta)(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
        };
        ProjectionNode.prototype.registerSharedNode = function (layoutId, node) {
            var _a, _b, _c;
            if (!this.sharedNodes.has(layoutId)) {
                this.sharedNodes.set(layoutId, new _shared_stack_mjs__WEBPACK_IMPORTED_MODULE_15__.NodeStack());
            }
            var stack = this.sharedNodes.get(layoutId);
            stack.add(node);
            node.promote({
                transition: (_a = node.options.initialPromotionConfig) === null || _a === void 0 ? void 0 : _a.transition,
                preserveFollowOpacity: (_c = (_b = node.options.initialPromotionConfig) === null || _b === void 0 ? void 0 : _b.shouldPreserveFollowOpacity) === null || _c === void 0 ? void 0 : _c.call(_b, node),
            });
        };
        ProjectionNode.prototype.isLead = function () {
            var stack = this.getStack();
            return stack ? stack.lead === this : true;
        };
        ProjectionNode.prototype.getLead = function () {
            var _a;
            var layoutId = this.options.layoutId;
            return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
        };
        ProjectionNode.prototype.getPrevLead = function () {
            var _a;
            var layoutId = this.options.layoutId;
            return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : undefined;
        };
        ProjectionNode.prototype.getStack = function () {
            var layoutId = this.options.layoutId;
            if (layoutId)
                return this.root.sharedNodes.get(layoutId);
        };
        ProjectionNode.prototype.promote = function (_a) {
            var _b = _a === void 0 ? {} : _a, needsReset = _b.needsReset, transition = _b.transition, preserveFollowOpacity = _b.preserveFollowOpacity;
            var stack = this.getStack();
            if (stack)
                stack.promote(this, preserveFollowOpacity);
            if (needsReset) {
                this.projectionDelta = undefined;
                this.needsReset = true;
            }
            if (transition)
                this.setOptions({ transition: transition });
        };
        ProjectionNode.prototype.relegate = function () {
            var stack = this.getStack();
            if (stack) {
                return stack.relegate(this);
            }
            else {
                return false;
            }
        };
        ProjectionNode.prototype.resetRotation = function () {
            var visualElement = this.options.visualElement;
            if (!visualElement)
                return;
            // If there's no detected rotation values, we can early return without a forced render.
            var hasRotate = false;
            // Keep a record of all the values we've reset
            var resetValues = {};
            // Check the rotate value of all axes and reset to 0
            for (var i = 0; i < _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_16__.transformAxes.length; i++) {
                var axis = _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_16__.transformAxes[i];
                var key = "rotate" + axis;
                // If this rotation doesn't exist as a motion value, then we don't
                // need to reset it
                if (!visualElement.getStaticValue(key)) {
                    continue;
                }
                hasRotate = true;
                // Record the rotation and then temporarily set it to 0
                resetValues[key] = visualElement.getStaticValue(key);
                visualElement.setStaticValue(key, 0);
            }
            // If there's no rotation values, we don't need to do any more.
            if (!hasRotate)
                return;
            // Force a render of this element to apply the transform with all rotations
            // set to 0.
            visualElement === null || visualElement === void 0 ? void 0 : visualElement.syncRender();
            // Put back all the values we reset
            for (var key in resetValues) {
                visualElement.setStaticValue(key, resetValues[key]);
            }
            // Schedule a render for the next frame. This ensures we won't visually
            // see the element with the reset rotate value applied.
            visualElement.scheduleRender();
        };
        ProjectionNode.prototype.getProjectionStyles = function (styleProp) {
            var _a, _b, _c, _d, _e, _f;
            if (styleProp === void 0) { styleProp = {}; }
            // TODO: Return lifecycle-persistent object
            var styles = {};
            if (!this.instance || this.isSVG)
                return styles;
            if (!this.isVisible) {
                return { visibility: "hidden" };
            }
            else {
                styles.visibility = "";
            }
            var transformTemplate = (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.getProps().transformTemplate;
            if (this.needsReset) {
                this.needsReset = false;
                styles.opacity = "";
                styles.pointerEvents =
                    (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_17__.resolveMotionValue)(styleProp.pointerEvents) || "";
                styles.transform = transformTemplate
                    ? transformTemplate(this.latestValues, "")
                    : "none";
                return styles;
            }
            var lead = this.getLead();
            if (!this.projectionDelta || !this.layout || !lead.target) {
                var emptyStyles = {};
                if (this.options.layoutId) {
                    emptyStyles.opacity = (_b = this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1;
                    emptyStyles.pointerEvents =
                        (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_17__.resolveMotionValue)(styleProp.pointerEvents) || "";
                }
                if (this.hasProjected && !(0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_7__.hasTransform)(this.latestValues)) {
                    emptyStyles.transform = transformTemplate
                        ? transformTemplate({}, "")
                        : "none";
                    this.hasProjected = false;
                }
                return emptyStyles;
            }
            var valuesToRender = lead.animationValues || lead.latestValues;
            this.applyTransformsToTarget();
            styles.transform = (0,_styles_transform_mjs__WEBPACK_IMPORTED_MODULE_12__.buildProjectionTransform)(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
            if (transformTemplate) {
                styles.transform = transformTemplate(valuesToRender, styles.transform);
            }
            var _g = this.projectionDelta, x = _g.x, y = _g.y;
            styles.transformOrigin = "".concat(x.origin * 100, "% ").concat(y.origin * 100, "% 0");
            if (lead.animationValues) {
                /**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */
                styles.opacity =
                    lead === this
                        ? (_d = (_c = valuesToRender.opacity) !== null && _c !== void 0 ? _c : this.latestValues.opacity) !== null && _d !== void 0 ? _d : 1
                        : this.preserveOpacity
                            ? this.latestValues.opacity
                            : valuesToRender.opacityExit;
            }
            else {
                /**
                 * Or we're not animating at all, set the lead component to its actual
                 * opacity and other components to hidden.
                 */
                styles.opacity =
                    lead === this
                        ? (_e = valuesToRender.opacity) !== null && _e !== void 0 ? _e : ""
                        : (_f = valuesToRender.opacityExit) !== null && _f !== void 0 ? _f : 0;
            }
            /**
             * Apply scale correction
             */
            for (var key in _styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_18__.scaleCorrectors) {
                if (valuesToRender[key] === undefined)
                    continue;
                var _h = _styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_18__.scaleCorrectors[key], correct = _h.correct, applyTo = _h.applyTo;
                var corrected = correct(valuesToRender[key], lead);
                if (applyTo) {
                    var num = applyTo.length;
                    for (var i = 0; i < num; i++) {
                        styles[applyTo[i]] = corrected;
                    }
                }
                else {
                    styles[key] = corrected;
                }
            }
            /**
             * Disable pointer events on follow components. This is to ensure
             * that if a follow component covers a lead component it doesn't block
             * pointer events on the lead.
             */
            if (this.options.layoutId) {
                styles.pointerEvents =
                    lead === this
                        ? (0,_value_utils_resolve_motion_value_mjs__WEBPACK_IMPORTED_MODULE_17__.resolveMotionValue)(styleProp.pointerEvents) || ""
                        : "none";
            }
            return styles;
        };
        ProjectionNode.prototype.clearSnapshot = function () {
            this.resumeFrom = this.snapshot = undefined;
        };
        // Only run on root
        ProjectionNode.prototype.resetTree = function () {
            this.root.nodes.forEach(function (node) { var _a; return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop(); });
            this.root.nodes.forEach(clearMeasurements);
            this.root.sharedNodes.clear();
        };
        return ProjectionNode;
    }());
}
function updateLayout(node) {
    node.updateLayout();
}
function notifyLayoutUpdate(node) {
    var _a, _b, _c, _d;
    var snapshot = (_b = (_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) !== null && _b !== void 0 ? _b : node.snapshot;
    if (node.isLead() &&
        node.layout &&
        snapshot &&
        node.hasListeners("didUpdate")) {
        var _e = node.layout, layout_1 = _e.actual, measuredLayout = _e.measured;
        // TODO Maybe we want to also resize the layout snapshot so we don't trigger
        // animations for instance if layout="size" and an element has only changed position
        if (node.options.animationType === "size") {
            (0,_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_19__.eachAxis)(function (axis) {
                var axisSnapshot = snapshot.isShared
                    ? snapshot.measured[axis]
                    : snapshot.layout[axis];
                var length = (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcLength)(axisSnapshot);
                axisSnapshot.min = layout_1[axis].min;
                axisSnapshot.max = axisSnapshot.min + length;
            });
        }
        else if (node.options.animationType === "position") {
            (0,_utils_each_axis_mjs__WEBPACK_IMPORTED_MODULE_19__.eachAxis)(function (axis) {
                var axisSnapshot = snapshot.isShared
                    ? snapshot.measured[axis]
                    : snapshot.layout[axis];
                var length = (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcLength)(layout_1[axis]);
                axisSnapshot.max = axisSnapshot.min + length;
            });
        }
        var layoutDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createDelta)();
        (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcBoxDelta)(layoutDelta, layout_1, snapshot.layout);
        var visualDelta = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createDelta)();
        if (snapshot.isShared) {
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcBoxDelta)(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measured);
        }
        else {
            (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcBoxDelta)(visualDelta, layout_1, snapshot.layout);
        }
        var hasLayoutChanged = !(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.isDeltaZero)(layoutDelta);
        var hasRelativeTargetChanged = false;
        if (!node.resumeFrom) {
            node.relativeParent = node.getClosestProjectingParent();
            /**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */
            if (node.relativeParent && !node.relativeParent.resumeFrom) {
                var _f = node.relativeParent, parentSnapshot = _f.snapshot, parentLayout = _f.layout;
                if (parentSnapshot && parentLayout) {
                    var relativeSnapshot = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcRelativePosition)(relativeSnapshot, snapshot.layout, parentSnapshot.layout);
                    var relativeLayout = (0,_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_6__.createBox)();
                    (0,_geometry_delta_calc_mjs__WEBPACK_IMPORTED_MODULE_11__.calcRelativePosition)(relativeLayout, layout_1, parentLayout.actual);
                    if (!(0,_geometry_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.boxEquals)(relativeSnapshot, relativeLayout)) {
                        hasRelativeTargetChanged = true;
                    }
                }
            }
        }
        node.notifyListeners("didUpdate", {
            layout: layout_1,
            snapshot: snapshot,
            delta: visualDelta,
            layoutDelta: layoutDelta,
            hasLayoutChanged: hasLayoutChanged,
            hasRelativeTargetChanged: hasRelativeTargetChanged,
        });
    }
    else if (node.isLead()) {
        (_d = (_c = node.options).onExitComplete) === null || _d === void 0 ? void 0 : _d.call(_c);
    }
    /**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */
    node.options.transition = undefined;
}
function clearSnapshot(node) {
    node.clearSnapshot();
}
function clearMeasurements(node) {
    node.clearMeasurements();
}
function resetTransformStyle(node) {
    var visualElement = node.options.visualElement;
    if (visualElement === null || visualElement === void 0 ? void 0 : visualElement.getProps().onBeforeLayoutMeasure) {
        visualElement.notifyBeforeLayoutMeasure();
    }
    node.resetTransform();
}
function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = undefined;
}
function resolveTargetDelta(node) {
    node.resolveTargetDelta();
}
function calcProjection(node) {
    node.calcProjection();
}
function resetRotation(node) {
    node.resetRotation();
}
function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
    output.translate = (0,popmotion__WEBPACK_IMPORTED_MODULE_20__.mix)(delta.translate, 0, p);
    output.scale = (0,popmotion__WEBPACK_IMPORTED_MODULE_20__.mix)(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
    output.min = (0,popmotion__WEBPACK_IMPORTED_MODULE_20__.mix)(from.min, to.min, p);
    output.max = (0,popmotion__WEBPACK_IMPORTED_MODULE_20__.mix)(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
    return (node.animationValues && node.animationValues.opacityExit !== undefined);
}
var defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
};
function mountNodeEarly(node, id) {
    /**
     * Rather than searching the DOM from document we can search the
     * path for the deepest mounted ancestor and search from there
     */
    var searchNode = node.root;
    for (var i = node.path.length - 1; i >= 0; i--) {
        if (Boolean(node.path[i].instance)) {
            searchNode = node.path[i];
            break;
        }
    }
    var searchElement = searchNode && searchNode !== node.root ? searchNode.instance : document;
    var element = searchElement.querySelector("[data-projection-id=\"".concat(id, "\"]"));
    if (element)
        node.mount(element, true);
}
function roundAxis(axis) {
    axis.min = Math.round(axis.min);
    axis.max = Math.round(axis.max);
}
function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/node/id.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/node/id.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProjectionId": () => (/* binding */ useProjectionId)
/* harmony export */ });
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");
/* harmony import */ var _create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-projection-node.mjs */ "./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs");



var id = 1;
function useProjectionId() {
    return (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_0__.useConstant)(function () {
        if (_create_projection_node_mjs__WEBPACK_IMPORTED_MODULE_1__.globalProjectionState.hasEverUpdated) {
            return id++;
        }
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/shared/stack.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/shared/stack.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeStack": () => (/* binding */ NodeStack)
/* harmony export */ });
/* harmony import */ var _utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/array.mjs */ "./node_modules/framer-motion/dist/es/utils/array.mjs");


var NodeStack = /** @class */ (function () {
    function NodeStack() {
        this.members = [];
    }
    NodeStack.prototype.add = function (node) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.members, node);
        node.scheduleRender();
    };
    NodeStack.prototype.remove = function (node) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(this.members, node);
        if (node === this.prevLead) {
            this.prevLead = undefined;
        }
        if (node === this.lead) {
            var prevLead = this.members[this.members.length - 1];
            if (prevLead) {
                this.promote(prevLead);
            }
        }
    };
    NodeStack.prototype.relegate = function (node) {
        var indexOfNode = this.members.findIndex(function (member) { return node === member; });
        if (indexOfNode === 0)
            return false;
        /**
         * Find the next projection node that is present
         */
        var prevLead;
        for (var i = indexOfNode; i >= 0; i--) {
            var member = this.members[i];
            if (member.isPresent !== false) {
                prevLead = member;
                break;
            }
        }
        if (prevLead) {
            this.promote(prevLead);
            return true;
        }
        else {
            return false;
        }
    };
    NodeStack.prototype.promote = function (node, preserveFollowOpacity) {
        var _a;
        var prevLead = this.lead;
        if (node === prevLead)
            return;
        this.prevLead = prevLead;
        this.lead = node;
        node.show();
        if (prevLead) {
            prevLead.instance && prevLead.scheduleRender();
            node.scheduleRender();
            node.resumeFrom = prevLead;
            if (preserveFollowOpacity) {
                node.resumeFrom.preserveOpacity = true;
            }
            if (prevLead.snapshot) {
                node.snapshot = prevLead.snapshot;
                node.snapshot.latestValues =
                    prevLead.animationValues || prevLead.latestValues;
                node.snapshot.isShared = true;
            }
            if ((_a = node.root) === null || _a === void 0 ? void 0 : _a.isUpdating) {
                node.isLayoutDirty = true;
            }
            var crossfade = node.options.crossfade;
            if (crossfade === false) {
                prevLead.hide();
            }
            /**
             * TODO:
             *   - Test border radius when previous node was deleted
             *   - boxShadow mixing
             *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
             *   - Shared between element A in transformed container and element B (transform stays the same or changes)
             *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
             * ---
             *   - Crossfade opacity of root nodes
             *   - layoutId changes after animation
             *   - layoutId changes mid animation
             */
        }
    };
    NodeStack.prototype.exitAnimationComplete = function () {
        this.members.forEach(function (node) {
            var _a, _b, _c, _d, _e;
            (_b = (_a = node.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_e = (_c = node.resumingFrom) === null || _c === void 0 ? void 0 : (_d = _c.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d);
        });
    };
    NodeStack.prototype.scheduleRender = function () {
        this.members.forEach(function (node) {
            node.instance && node.scheduleRender(false);
        });
    };
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */
    NodeStack.prototype.removeLeadSnapshot = function () {
        if (this.lead && this.lead.snapshot) {
            this.lead.snapshot = undefined;
        }
    };
    return NodeStack;
}());




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "correctBorderRadius": () => (/* binding */ correctBorderRadius),
/* harmony export */   "pixelsToPercent": () => (/* binding */ pixelsToPercent)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");


function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min)
        return 0;
    return (pixels / (axis.max - axis.min)) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
var correctBorderRadius = {
    correct: function (latest, node) {
        if (!node.target)
            return latest;
        /**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */
        if (typeof latest === "string") {
            if (style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.test(latest)) {
                latest = parseFloat(latest);
            }
            else {
                return latest;
            }
        }
        /**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */
        var x = pixelsToPercent(latest, node.target.x);
        var y = pixelsToPercent(latest, node.target.y);
        return "".concat(x, "% ").concat(y, "%");
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "correctBoxShadow": () => (/* binding */ correctBoxShadow)
/* harmony export */ });
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.mjs");
/* harmony import */ var _render_dom_utils_css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/dom/utils/css-variables-conversion.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs");




var varToken = "_$css";
var correctBoxShadow = {
    correct: function (latest, _a) {
        var treeScale = _a.treeScale, projectionDelta = _a.projectionDelta;
        var original = latest;
        /**
         * We need to first strip and store CSS variables from the string.
         */
        var containsCSSVariables = latest.includes("var(");
        var cssVariables = [];
        if (containsCSSVariables) {
            latest = latest.replace(_render_dom_utils_css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.cssVariableRegex, function (match) {
                cssVariables.push(match);
                return varToken;
            });
        }
        var shadow = style_value_types__WEBPACK_IMPORTED_MODULE_1__.complex.parse(latest);
        // TODO: Doesn't support multiple shadows
        if (shadow.length > 5)
            return original;
        var template = style_value_types__WEBPACK_IMPORTED_MODULE_1__.complex.createTransformer(latest);
        var offset = typeof shadow[0] !== "number" ? 1 : 0;
        // Calculate the overall context scale
        var xScale = projectionDelta.x.scale * treeScale.x;
        var yScale = projectionDelta.y.scale * treeScale.y;
        shadow[0 + offset] /= xScale;
        shadow[1 + offset] /= yScale;
        /**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */
        var averageScale = (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.mix)(xScale, yScale, 0.5);
        // Blur
        if (typeof shadow[2 + offset] === "number")
            shadow[2 + offset] /= averageScale;
        // Spread
        if (typeof shadow[3 + offset] === "number")
            shadow[3 + offset] /= averageScale;
        var output = template(shadow);
        if (containsCSSVariables) {
            var i_1 = 0;
            output = output.replace(varToken, function () {
                var cssVariable = cssVariables[i_1];
                i_1++;
                return cssVariable;
            });
        }
        return output;
    },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addScaleCorrector": () => (/* binding */ addScaleCorrector),
/* harmony export */   "scaleCorrectors": () => (/* binding */ scaleCorrectors)
/* harmony export */ });
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
    Object.assign(scaleCorrectors, correctors);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/styles/transform.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/styles/transform.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildProjectionTransform": () => (/* binding */ buildProjectionTransform),
/* harmony export */   "identityProjection": () => (/* binding */ identityProjection)
/* harmony export */ });
var identityProjection = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
function buildProjectionTransform(delta, treeScale, latestTransform) {
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    var xTranslate = delta.x.translate / treeScale.x;
    var yTranslate = delta.y.translate / treeScale.y;
    var transform = "translate3d(".concat(xTranslate, "px, ").concat(yTranslate, "px, 0) ");
    /**
     * Apply scale correction for the tree transform.
     * This will apply scale to the screen-orientated axes.
     */
    transform += "scale(".concat(1 / treeScale.x, ", ").concat(1 / treeScale.y, ") ");
    if (latestTransform) {
        var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
        if (rotate)
            transform += "rotate(".concat(rotate, "deg) ");
        if (rotateX)
            transform += "rotateX(".concat(rotateX, "deg) ");
        if (rotateY)
            transform += "rotateY(".concat(rotateY, "deg) ");
    }
    /**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */
    var elementScaleX = delta.x.scale * treeScale.x;
    var elementScaleY = delta.y.scale * treeScale.y;
    transform += "scale(".concat(elementScaleX, ", ").concat(elementScaleY, ")");
    return transform === identityProjection ? "none" : transform;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eachAxis": () => (/* binding */ eachAxis)
/* harmony export */ });
function eachAxis(callback) {
    return [callback("x"), callback("y")];
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasScale": () => (/* binding */ hasScale),
/* harmony export */   "hasTransform": () => (/* binding */ hasTransform)
/* harmony export */ });
function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale(_a) {
    var scale = _a.scale, scaleX = _a.scaleX, scaleY = _a.scaleY;
    return (!isIdentityScale(scale) ||
        !isIdentityScale(scaleX) ||
        !isIdentityScale(scaleY));
}
function hasTransform(values) {
    return (hasScale(values) ||
        hasTranslate(values.x) ||
        hasTranslate(values.y) ||
        values.z ||
        values.rotate ||
        values.rotateX ||
        values.rotateY);
}
function hasTranslate(value) {
    return value && value !== "0%";
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/projection/utils/measure.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/projection/utils/measure.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "measurePageBox": () => (/* binding */ measurePageBox),
/* harmony export */   "measureViewportBox": () => (/* binding */ measureViewportBox)
/* harmony export */ });
/* harmony import */ var _geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/conversion.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs");
/* harmony import */ var _geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/delta-apply.mjs */ "./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs");



function measureViewportBox(instance, transformPoint) {
    return (0,_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.convertBoundingBoxToBox)((0,_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.transformBoxPoints)(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    var viewportBox = measureViewportBox(element, transformPagePoint);
    var scroll = rootProjectionNode.scroll;
    if (scroll) {
        (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__.translateAxis)(viewportBox.x, scroll.x);
        (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__.translateAxis)(viewportBox.y, scroll.y);
    }
    return viewportBox;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomVisualElement": () => (/* binding */ createDomVisualElement)
/* harmony export */ });
/* harmony import */ var _html_visual_element_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/visual-element.mjs */ "./node_modules/framer-motion/dist/es/render/html/visual-element.mjs");
/* harmony import */ var _svg_visual_element_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/visual-element.mjs */ "./node_modules/framer-motion/dist/es/render/svg/visual-element.mjs");
/* harmony import */ var _utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/is-svg-component.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs");




var createDomVisualElement = function (Component, options) {
    return (0,_utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_0__.isSVGComponent)(Component)
        ? (0,_svg_visual_element_mjs__WEBPACK_IMPORTED_MODULE_1__.svgVisualElement)(options, { enableHardwareAcceleration: false })
        : (0,_html_visual_element_mjs__WEBPACK_IMPORTED_MODULE_2__.htmlVisualElement)(options, { enableHardwareAcceleration: true });
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMotionProxy": () => (/* binding */ createMotionProxy)
/* harmony export */ });
/* harmony import */ var _motion_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/index.mjs */ "./node_modules/framer-motion/dist/es/motion/index.mjs");


/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(createConfig) {
    function custom(Component, customMotionComponentConfig) {
        if (customMotionComponentConfig === void 0) { customMotionComponentConfig = {}; }
        return (0,_motion_index_mjs__WEBPACK_IMPORTED_MODULE_0__.createMotionComponent)(createConfig(Component, customMotionComponentConfig));
    }
    if (typeof Proxy === "undefined") {
        return custom;
    }
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */
    var componentCache = new Map();
    return new Proxy(custom, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */
        get: function (_target, key) {
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */
            if (!componentCache.has(key)) {
                componentCache.set(key, custom(key));
            }
            return componentCache.get(key);
        },
    });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/motion.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomMotionComponent": () => (/* binding */ createDomMotionComponent),
/* harmony export */   "motion": () => (/* binding */ motion)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _motion_index_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../motion/index.mjs */ "./node_modules/framer-motion/dist/es/motion/index.mjs");
/* harmony import */ var _motion_proxy_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./motion-proxy.mjs */ "./node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs");
/* harmony import */ var _utils_create_config_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/create-config.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs");
/* harmony import */ var _motion_features_gestures_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/features/gestures.mjs */ "./node_modules/framer-motion/dist/es/motion/features/gestures.mjs");
/* harmony import */ var _motion_features_animations_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../motion/features/animations.mjs */ "./node_modules/framer-motion/dist/es/motion/features/animations.mjs");
/* harmony import */ var _motion_features_drag_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../motion/features/drag.mjs */ "./node_modules/framer-motion/dist/es/motion/features/drag.mjs");
/* harmony import */ var _create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-visual-element.mjs */ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs");
/* harmony import */ var _motion_features_layout_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../motion/features/layout/index.mjs */ "./node_modules/framer-motion/dist/es/motion/features/layout/index.mjs");
/* harmony import */ var _projection_node_HTMLProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../projection/node/HTMLProjectionNode.mjs */ "./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs");











var featureBundle = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, _motion_features_animations_mjs__WEBPACK_IMPORTED_MODULE_1__.animations), _motion_features_gestures_mjs__WEBPACK_IMPORTED_MODULE_2__.gestureAnimations), _motion_features_drag_mjs__WEBPACK_IMPORTED_MODULE_3__.drag), _motion_features_layout_index_mjs__WEBPACK_IMPORTED_MODULE_4__.layoutFeatures);
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
var motion = /*@__PURE__*/ (0,_motion_proxy_mjs__WEBPACK_IMPORTED_MODULE_5__.createMotionProxy)(function (Component, config) {
    return (0,_utils_create_config_mjs__WEBPACK_IMPORTED_MODULE_6__.createDomMotionConfig)(Component, config, featureBundle, _create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_7__.createDomVisualElement, _projection_node_HTMLProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_8__.HTMLProjectionNode);
});
/**
 * Create a DOM `motion` component with the provided string. This is primarily intended
 * as a full alternative to `motion` for consumers who have to support environments that don't
 * support `Proxy`.
 *
 * ```javascript
 * import { createDomMotionComponent } from "framer-motion"
 *
 * const motion = {
 *   div: createDomMotionComponent('div')
 * }
 * ```
 *
 * @public
 */
function createDomMotionComponent(key) {
    return (0,_motion_index_mjs__WEBPACK_IMPORTED_MODULE_9__.createMotionComponent)((0,_utils_create_config_mjs__WEBPACK_IMPORTED_MODULE_6__.createDomMotionConfig)(key, { forwardMotionProps: false }, featureBundle, _create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_7__.createDomVisualElement, _projection_node_HTMLProjectionNode_mjs__WEBPACK_IMPORTED_MODULE_8__.HTMLProjectionNode));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/use-render.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/use-render.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUseRender": () => (/* binding */ createUseRender)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _html_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/use-props.mjs */ "./node_modules/framer-motion/dist/es/render/html/use-props.mjs");
/* harmony import */ var _utils_filter_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/filter-props.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs");
/* harmony import */ var _utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is-svg-component.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs");
/* harmony import */ var _svg_use_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/use-props.mjs */ "./node_modules/framer-motion/dist/es/render/svg/use-props.mjs");







function createUseRender(forwardMotionProps) {
    if (forwardMotionProps === void 0) { forwardMotionProps = false; }
    var useRender = function (Component, props, projectionId, ref, _a, isStatic) {
        var latestValues = _a.latestValues;
        var useVisualProps = (0,_utils_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_1__.isSVGComponent)(Component)
            ? _svg_use_props_mjs__WEBPACK_IMPORTED_MODULE_2__.useSVGProps
            : _html_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__.useHTMLProps;
        var visualProps = useVisualProps(props, latestValues, isStatic);
        var filteredProps = (0,_utils_filter_props_mjs__WEBPACK_IMPORTED_MODULE_4__.filterProps)(props, typeof Component === "string", forwardMotionProps);
        var elementProps = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, filteredProps), visualProps), { ref: ref });
        if (projectionId) {
            elementProps["data-projection-id"] = projectionId;
        }
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, elementProps);
    };
    return useRender;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camelToDash": () => (/* binding */ camelToDash)
/* harmony export */ });
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
/**
 * Convert camelCase to dash-case properties.
 */
var camelToDash = function (str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomMotionConfig": () => (/* binding */ createDomMotionConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-svg-component.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs");
/* harmony import */ var _use_render_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../use-render.mjs */ "./node_modules/framer-motion/dist/es/render/dom/use-render.mjs");
/* harmony import */ var _svg_config_motion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/config-motion.mjs */ "./node_modules/framer-motion/dist/es/render/svg/config-motion.mjs");
/* harmony import */ var _html_config_motion_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/config-motion.mjs */ "./node_modules/framer-motion/dist/es/render/html/config-motion.mjs");






function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement, projectionNodeConstructor) {
    var _b = _a.forwardMotionProps, forwardMotionProps = _b === void 0 ? false : _b;
    var baseConfig = (0,_is_svg_component_mjs__WEBPACK_IMPORTED_MODULE_0__.isSVGComponent)(Component)
        ? _svg_config_motion_mjs__WEBPACK_IMPORTED_MODULE_1__.svgMotionConfig
        : _html_config_motion_mjs__WEBPACK_IMPORTED_MODULE_2__.htmlMotionConfig;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, baseConfig), { preloadedFeatures: preloadedFeatures, useRender: (0,_use_render_mjs__WEBPACK_IMPORTED_MODULE_4__.createUseRender)(forwardMotionProps), createVisualElement: createVisualElement, projectionNodeConstructor: projectionNodeConstructor, Component: Component });
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssVariableRegex": () => (/* binding */ cssVariableRegex),
/* harmony export */   "parseCSSVariable": () => (/* binding */ parseCSSVariable),
/* harmony export */   "resolveCSSVariables": () => (/* binding */ resolveCSSVariables)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");



function isCSSVariable(value) {
    return typeof value === "string" && value.startsWith("var(--");
}
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
    var match = cssVariableRegex.exec(current);
    if (!match)
        return [,];
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(match, 3), token = _a[1], fallback = _a[2];
    return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth) {
    if (depth === void 0) { depth = 1; }
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(depth <= maxDepth, "Max CSS variable fallback depth detected in property \"".concat(current, "\". This may indicate a circular fallback dependency."));
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    var resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        return resolved.trim();
    }
    else if (isCSSVariable(fallback)) {
        // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
        return getVariableValue(fallback, element, depth + 1);
    }
    else {
        return fallback;
    }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */
function resolveCSSVariables(visualElement, _a, transitionEnd) {
    var _b;
    var target = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, []);
    var element = visualElement.getInstance();
    if (!(element instanceof Element))
        return { target: target, transitionEnd: transitionEnd };
    // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
    // only if they change but I think this reads clearer and this isn't a performance-critical path.
    if (transitionEnd) {
        transitionEnd = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, transitionEnd);
    }
    // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
    visualElement.forEachValue(function (value) {
        var current = value.get();
        if (!isCSSVariable(current))
            return;
        var resolved = getVariableValue(current, element);
        if (resolved)
            value.set(resolved);
    });
    // Cycle through every target property and resolve CSS variables. Currently
    // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
    for (var key in target) {
        var current = target[key];
        if (!isCSSVariable(current))
            continue;
        var resolved = getVariableValue(current, element);
        if (!resolved)
            continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd)
            (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : (transitionEnd[key] = current);
    }
    return { target: target, transitionEnd: transitionEnd };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterProps": () => (/* binding */ filterProps),
/* harmony export */   "loadExternalIsValidProp": () => (/* binding */ loadExternalIsValidProp)
/* harmony export */ });
/* harmony import */ var _motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/utils/valid-prop.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs");


var shouldForward = function (key) { return !(0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key); };
function loadExternalIsValidProp(isValidProp) {
    if (!isValidProp)
        return;
    // Explicitly filter our events
    shouldForward = function (key) {
        return key.startsWith("on") ? !(0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key) : isValidProp(key);
    };
}
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    /**
     * We attempt to import this package but require won't be defined in esm environments, in that case
     * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
     * in favour of explicit injection.
     */
    loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    var filteredProps = {};
    for (var key in props) {
        if (shouldForward(key) ||
            (forwardMotionProps === true && (0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key)) ||
            (!isDom && !(0,_motion_utils_valid_prop_mjs__WEBPACK_IMPORTED_MODULE_0__.isValidMotionProp)(key)) ||
            // If trying to use native HTML drag events, forward drag listeners
            (props["draggable"] && key.startsWith("onDrag"))) {
            filteredProps[key] = props[key];
        }
    }
    return filteredProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCSSVariable": () => (/* binding */ isCSSVariable)
/* harmony export */ });
/**
 * Returns true if the provided key is a CSS variable
 */
function isCSSVariable(key) {
    return key.startsWith("--");
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSVGComponent": () => (/* binding */ isSVGComponent)
/* harmony export */ });
/* harmony import */ var _svg_lowercase_elements_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../svg/lowercase-elements.mjs */ "./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs");


function isSVGComponent(Component) {
    if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        Component.includes("-")) {
        return false;
    }
    else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    _svg_lowercase_elements_mjs__WEBPACK_IMPORTED_MODULE_0__.lowercaseSVGElements.indexOf(Component) > -1 ||
        /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/.test(Component)) {
        return true;
    }
    return false;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseDomVariant": () => (/* binding */ parseDomVariant)
/* harmony export */ });
/* harmony import */ var _css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-variables-conversion.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs");
/* harmony import */ var _unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-conversion.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs");



/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
var parseDomVariant = function (visualElement, target, origin, transitionEnd) {
    var resolved = (0,_css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveCSSVariables)(visualElement, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return (0,_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.unitConversion)(visualElement, target, origin, transitionEnd);
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoundingBoxDimension": () => (/* binding */ BoundingBoxDimension),
/* harmony export */   "positionalValues": () => (/* binding */ positionalValues),
/* harmony export */   "unitConversion": () => (/* binding */ unitConversion)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");
/* harmony import */ var _animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../animation/utils/is-keyframes-target.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../value-types/dimensions.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs");







var positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
]);
var isPositionalKey = function (key) { return positionalKeys.has(key); };
var hasPositionalKey = function (target) {
    return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function (value, to) {
    // Looks odd but setting it twice doesn't render, it'll just
    // set both prev and current to the latest value
    value.set(to, false);
    value.set(to);
};
var isNumOrPxType = function (v) {
    return v === style_value_types__WEBPACK_IMPORTED_MODULE_1__.number || v === style_value_types__WEBPACK_IMPORTED_MODULE_2__.px;
};
var BoundingBoxDimension;
(function (BoundingBoxDimension) {
    BoundingBoxDimension["width"] = "width";
    BoundingBoxDimension["height"] = "height";
    BoundingBoxDimension["left"] = "left";
    BoundingBoxDimension["right"] = "right";
    BoundingBoxDimension["top"] = "top";
    BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function (matrix, pos) {
    return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function (pos2, pos3) {
    return function (_bbox, _a) {
        var transform = _a.transform;
        if (transform === "none" || !transform)
            return 0;
        var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
        if (matrix3d) {
            return getPosFromMatrix(matrix3d[1], pos3);
        }
        else {
            var matrix = transform.match(/^matrix\((.+)\)$/);
            if (matrix) {
                return getPosFromMatrix(matrix[1], pos2);
            }
            else {
                return 0;
            }
        }
    };
};
var transformKeys = new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_3__.transformProps.filter(function (key) { return !transformKeys.has(key); });
function removeNonTranslationalTransform(visualElement) {
    var removedTransforms = [];
    nonTranslationalTransformKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    // Apply changes to element before measurement
    if (removedTransforms.length)
        visualElement.syncRender();
    return removedTransforms;
}
var positionalValues = {
    // Dimensions
    width: function (_a, _b) {
        var x = _a.x;
        var _c = _b.paddingLeft, paddingLeft = _c === void 0 ? "0" : _c, _d = _b.paddingRight, paddingRight = _d === void 0 ? "0" : _d;
        return x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight);
    },
    height: function (_a, _b) {
        var y = _a.y;
        var _c = _b.paddingTop, paddingTop = _c === void 0 ? "0" : _c, _d = _b.paddingBottom, paddingBottom = _d === void 0 ? "0" : _d;
        return y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom);
    },
    top: function (_bbox, _a) {
        var top = _a.top;
        return parseFloat(top);
    },
    left: function (_bbox, _a) {
        var left = _a.left;
        return parseFloat(left);
    },
    bottom: function (_a, _b) {
        var y = _a.y;
        var top = _b.top;
        return parseFloat(top) + (y.max - y.min);
    },
    right: function (_a, _b) {
        var x = _a.x;
        var left = _b.left;
        return parseFloat(left) + (x.max - x.min);
    },
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
var convertChangedValueTypes = function (target, visualElement, changedKeys) {
    var originBbox = visualElement.measureViewportBox();
    var element = visualElement.getInstance();
    var elementComputedStyle = getComputedStyle(element);
    var display = elementComputedStyle.display;
    var origin = {};
    // If the element is currently set to display: "none", make it visible before
    // measuring the target bounding box
    if (display === "none") {
        visualElement.setStaticValue("display", target.display || "block");
    }
    /**
     * Record origins before we render and update styles
     */
    changedKeys.forEach(function (key) {
        origin[key] = positionalValues[key](originBbox, elementComputedStyle);
    });
    // Apply the latest values (as set in checkAndConvertChangedValueTypes)
    visualElement.syncRender();
    var targetBbox = visualElement.measureViewportBox();
    changedKeys.forEach(function (key) {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        var value = visualElement.getValue(key);
        setAndResetVelocity(value, origin[key]);
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
};
var checkAndConvertChangedValueTypes = function (visualElement, target, origin, transitionEnd) {
    if (origin === void 0) { origin = {}; }
    if (transitionEnd === void 0) { transitionEnd = {}; }
    target = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, target);
    transitionEnd = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, transitionEnd);
    var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    // We want to remove any transform values that could affect the element's bounding box before
    // it's measured. We'll reapply these later.
    var removedTransformValues = [];
    var hasAttemptedToRemoveTransformValues = false;
    var changedValueTypeKeys = [];
    targetPositionalKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (!visualElement.hasValue(key))
            return;
        var from = origin[key];
        var fromType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(from);
        var to = target[key];
        var toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if ((0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_6__.isKeyframesTarget)(to)) {
            var numKeyframes = to.length;
            var fromIndex = to[0] === null ? 1 : 0;
            from = to[fromIndex];
            fromType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(from);
            for (var i = fromIndex; i < numKeyframes; i++) {
                if (!toType) {
                    toType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(to[i]);
                    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(toType === fromType ||
                        (isNumOrPxType(fromType) && isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                }
                else {
                    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)((0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(to[i]) === toType, "All keyframes must be of the same type");
                }
            }
        }
        else {
            toType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_5__.findDimensionValueType)(to);
        }
        if (fromType !== toType) {
            // If they're both just number or px, convert them both to numbers rather than
            // relying on resize/remeasure to convert (which is wasteful in this situation)
            if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                var current = value.get();
                if (typeof current === "string") {
                    value.set(parseFloat(current));
                }
                if (typeof to === "string") {
                    target[key] = parseFloat(to);
                }
                else if (Array.isArray(to) && toType === style_value_types__WEBPACK_IMPORTED_MODULE_2__.px) {
                    target[key] = to.map(parseFloat);
                }
            }
            else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) &&
                (toType === null || toType === void 0 ? void 0 : toType.transform) &&
                (from === 0 || to === 0)) {
                // If one or the other value is 0, it's safe to coerce it to the
                // type of the other without measurement
                if (from === 0) {
                    value.set(toType.transform(from));
                }
                else {
                    target[key] = fromType.transform(to);
                }
            }
            else {
                // If we're going to do value conversion via DOM measurements, we first
                // need to remove non-positional transform values that could affect the bbox measurements.
                if (!hasAttemptedToRemoveTransformValues) {
                    removedTransformValues =
                        removeNonTranslationalTransform(visualElement);
                    hasAttemptedToRemoveTransformValues = true;
                }
                changedValueTypeKeys.push(key);
                transitionEnd[key] =
                    transitionEnd[key] !== undefined
                        ? transitionEnd[key]
                        : target[key];
                setAndResetVelocity(value, to);
            }
        }
    });
    if (changedValueTypeKeys.length) {
        var scrollY_1 = changedValueTypeKeys.indexOf("height") >= 0
            ? window.pageYOffset
            : null;
        var convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
            removedTransformValues.forEach(function (_a) {
                var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)(_a, 2), key = _b[0], value = _b[1];
                visualElement.getValue(key).set(value);
            });
        }
        // Reapply original values
        visualElement.syncRender();
        // Restore scroll position
        if (scrollY_1 !== null)
            window.scrollTo({ top: scrollY_1 });
        return { target: convertedTarget, transitionEnd: transitionEnd };
    }
    else {
        return { target: target, transitionEnd: transitionEnd };
    }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */
function unitConversion(visualElement, target, origin, transitionEnd) {
    return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
        : { target: target, transitionEnd: transitionEnd };
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAnimatableNone": () => (/* binding */ getAnimatableNone)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/filter.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.mjs");
/* harmony import */ var _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs");



function getAnimatableNone(key, value) {
    var _a;
    var defaultValueType = (0,_defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultValueType)(key);
    if (defaultValueType !== style_value_types__WEBPACK_IMPORTED_MODULE_1__.filter)
        defaultValueType = style_value_types__WEBPACK_IMPORTED_MODULE_2__.complex;
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultValueTypes": () => (/* binding */ defaultValueTypes),
/* harmony export */   "getDefaultValueType": () => (/* binding */ getDefaultValueType)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/filter.mjs");
/* harmony import */ var _number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs");




/**
 * A map of default value types for common values
 */
var defaultValueTypes = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, _number_mjs__WEBPACK_IMPORTED_MODULE_1__.numberValueTypes), { 
    // Color props
    color: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, backgroundColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, outlineColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, fill: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, stroke: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, 
    // Border props
    borderColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderTopColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderRightColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderBottomColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, borderLeftColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, filter: style_value_types__WEBPACK_IMPORTED_MODULE_3__.filter, WebkitFilter: style_value_types__WEBPACK_IMPORTED_MODULE_3__.filter });
/**
 * Gets the default ValueType for the provided value key
 */
var getDefaultValueType = function (key) { return defaultValueTypes[key]; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dimensionValueTypes": () => (/* binding */ dimensionValueTypes),
/* harmony export */   "findDimensionValueType": () => (/* binding */ findDimensionValueType)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");
/* harmony import */ var _test_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs");
/* harmony import */ var _type_auto_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-auto.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs");




/**
 * A list of value types commonly used for dimensions
 */
var dimensionValueTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_0__.number, style_value_types__WEBPACK_IMPORTED_MODULE_1__.px, style_value_types__WEBPACK_IMPORTED_MODULE_1__.percent, style_value_types__WEBPACK_IMPORTED_MODULE_1__.degrees, style_value_types__WEBPACK_IMPORTED_MODULE_1__.vw, style_value_types__WEBPACK_IMPORTED_MODULE_1__.vh, _type_auto_mjs__WEBPACK_IMPORTED_MODULE_2__.auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
var findDimensionValueType = function (v) {
    return dimensionValueTypes.find((0,_test_mjs__WEBPACK_IMPORTED_MODULE_3__.testValueType)(v));
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findValueType": () => (/* binding */ findValueType)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.mjs");
/* harmony import */ var _dimensions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dimensions.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs");
/* harmony import */ var _test_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs");





/**
 * A list of all ValueTypes
 */
var valueTypes = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(_dimensions_mjs__WEBPACK_IMPORTED_MODULE_1__.dimensionValueTypes), false), [style_value_types__WEBPACK_IMPORTED_MODULE_2__.color, style_value_types__WEBPACK_IMPORTED_MODULE_3__.complex], false);
/**
 * Tests a value against the list of ValueTypes
 */
var findValueType = function (v) { return valueTypes.find((0,_test_mjs__WEBPACK_IMPORTED_MODULE_4__.testValueType)(v)); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getValueAsType": () => (/* binding */ getValueAsType)
/* harmony export */ });
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
var getValueAsType = function (value, type) {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numberValueTypes": () => (/* binding */ numberValueTypes)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.mjs");
/* harmony import */ var _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-int.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs");



var numberValueTypes = {
    // Border props
    borderWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRightWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderLeftWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    radius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Positioning props
    width: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    maxWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    height: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    maxHeight: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    size: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    top: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    right: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    bottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    left: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Spacing props
    padding: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingTop: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingRight: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingBottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingLeft: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    margin: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginTop: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginRight: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginBottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    marginLeft: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Transform props
    rotate: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleZ: style_value_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    skew: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.degrees,
    distance: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    translateX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    translateY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    translateZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    x: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    y: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    z: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    perspective: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    transformPerspective: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__.alpha,
    originX: style_value_types__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originY: style_value_types__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__.px,
    // Misc
    zIndex: _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__.int,
    // SVG
    fillOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__.alpha,
    strokeOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__.alpha,
    numOctaves: _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__.int,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testValueType": () => (/* binding */ testValueType)
/* harmony export */ });
/**
 * Tests a provided value against a ValueType
 */
var testValueType = function (v) { return function (type) { return type.test(v); }; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auto": () => (/* binding */ auto)
/* harmony export */ });
/**
 * ValueType for "auto"
 */
var auto = {
    test: function (v) { return v === "auto"; },
    parse: function (v) { return v; },
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "int": () => (/* binding */ int)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/index.mjs");



var int = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, style_value_types__WEBPACK_IMPORTED_MODULE_1__.number), { transform: Math.round });




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/config-motion.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/config-motion.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlMotionConfig": () => (/* binding */ htmlMotionConfig)
/* harmony export */ });
/* harmony import */ var _motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs");




var htmlMotionConfig = {
    useVisualState: (0,_motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__.makeUseVisualState)({
        scrapeMotionValuesFromProps: _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__.scrapeMotionValuesFromProps,
        createRenderState: _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__.createHtmlRenderState,
    }),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/use-props.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/use-props.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyRawValuesOnly": () => (/* binding */ copyRawValuesOnly),
/* harmony export */   "useHTMLProps": () => (/* binding */ useHTMLProps),
/* harmony export */   "useStyle": () => (/* binding */ useStyle)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/utils/is-forced-motion-value.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-styles.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs");







function copyRawValuesOnly(target, source, props) {
    for (var key in source) {
        if (!(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(source[key]) && !(0,_motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__.isForcedMotionValue)(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues(_a, visualState, isStatic) {
    var transformTemplate = _a.transformTemplate;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        var state = (0,_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_3__.createHtmlRenderState)();
        (0,_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_4__.buildHTMLStyles)(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
        var vars = state.vars, style = state.style;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, vars), style);
    }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
    var styleProp = props.style || {};
    var style = {};
    /**
     * Copy non-Motion Values straight into style
     */
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
    if (props.transformValues) {
        style = props.transformValues(style);
    }
    return style;
}
function useHTMLProps(props, visualState, isStatic) {
    // The `any` isn't ideal but it is the type of createElement props argument
    var htmlProps = {};
    var style = useStyle(props, visualState, isStatic);
    if (Boolean(props.drag) && props.dragListener !== false) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect =
            style.WebkitUserSelect =
                style.WebkitTouchCallout =
                    "none";
        // Disable scrolling on the draggable direction
        style.touchAction =
            props.drag === true
                ? "none"
                : "pan-".concat(props.drag === "x" ? "y" : "x");
    }
    htmlProps.style = style;
    return htmlProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildHTMLStyles": () => (/* binding */ buildHTMLStyles)
/* harmony export */ });
/* harmony import */ var _build_transform_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./build-transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs");
/* harmony import */ var _dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/utils/is-css-variable.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _transform_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/value-types/get-as-type.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs");
/* harmony import */ var _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/value-types/number.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs");






function buildHTMLStyles(state, latestValues, options, transformTemplate) {
    var _a;
    var style = state.style, vars = state.vars, transform = state.transform, transformKeys = state.transformKeys, transformOrigin = state.transformOrigin;
    // Empty the transformKeys array. As we're throwing out refs to its items
    // this might not be as cheap as suspected. Maybe using the array as a buffer
    // with a manual incrementation would be better.
    transformKeys.length = 0;
    // Track whether we encounter any transform or transformOrigin values.
    var hasTransform = false;
    var hasTransformOrigin = false;
    // Does the calculated transform essentially equal "none"?
    var transformIsNone = true;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */
    for (var key in latestValues) {
        var value = latestValues[key];
        /**
         * If this is a CSS variable we don't do any further processing.
         */
        if ((0,_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_0__.isCSSVariable)(key)) {
            vars[key] = value;
            continue;
        }
        // Convert the value to its default value type, ie 0 -> "0px"
        var valueType = _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_1__.numberValueTypes[key];
        var valueAsType = (0,_dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_2__.getValueAsType)(value, valueType);
        if ((0,_transform_mjs__WEBPACK_IMPORTED_MODULE_3__.isTransformProp)(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            // If we already know we have a non-default transform, early return
            if (!transformIsNone)
                continue;
            // Otherwise check to see if this is a default transform
            if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
                transformIsNone = false;
        }
        else if ((0,_transform_mjs__WEBPACK_IMPORTED_MODULE_3__.isTransformOriginProp)(key)) {
            transformOrigin[key] = valueAsType;
            // If this is a transform origin, flag and enable further transform-origin processing
            hasTransformOrigin = true;
        }
        else {
            style[key] = valueAsType;
        }
    }
    if (hasTransform) {
        style.transform = (0,_build_transform_mjs__WEBPACK_IMPORTED_MODULE_4__.buildTransform)(state, options, transformIsNone, transformTemplate);
    }
    else if (transformTemplate) {
        style.transform = transformTemplate({}, "");
    }
    else if (!latestValues.transform && style.transform) {
        style.transform = "none";
    }
    if (hasTransformOrigin) {
        style.transformOrigin = (0,_build_transform_mjs__WEBPACK_IMPORTED_MODULE_4__.buildTransformOrigin)(transformOrigin);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTransform": () => (/* binding */ buildTransform),
/* harmony export */   "buildTransformOrigin": () => (/* binding */ buildTransformOrigin)
/* harmony export */ });
/* harmony import */ var _transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");


var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
    var transform = _a.transform, transformKeys = _a.transformKeys;
    var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
    // The transform string we're going to build into.
    var transformString = "";
    // Transform keys into their default order - this will determine the output order.
    transformKeys.sort(_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.sortTransformProps);
    // Track whether the defined transform has a defined z so we don't add a
    // second to enable hardware acceleration
    var transformHasZ = false;
    // Loop over each transform and build them into transformString
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        transformString += "".concat(translateAlias[key] || key, "(").concat(transform[key], ") ");
        if (key === "z")
            transformHasZ = true;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
        transformString += "translateZ(0)";
    }
    else {
        transformString = transformString.trim();
    }
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (allowTransformNone && transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}
/**
 * Build a transformOrigin style. Uses the same defaults as the browser for
 * undefined origins.
 */
function buildTransformOrigin(_a) {
    var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
    return "".concat(originX, " ").concat(originY, " ").concat(originZ);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHtmlRenderState": () => (/* binding */ createHtmlRenderState)
/* harmony export */ });
var createHtmlRenderState = function () { return ({
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {},
}); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/render.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/render.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHTML": () => (/* binding */ renderHTML)
/* harmony export */ });
function renderHTML(element, _a, styleProp, projection) {
    var style = _a.style, vars = _a.vars;
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    // Loop over any CSS variables and assign those.
    for (var key in vars) {
        element.style.setProperty(key, vars[key]);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrapeMotionValuesFromProps": () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../motion/utils/is-forced-motion-value.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");



function scrapeMotionValuesFromProps(props) {
    var style = props.style;
    var newValues = {};
    for (var key in style) {
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(style[key]) || (0,_motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isForcedMotionValue)(key, props)) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTransformOriginProp": () => (/* binding */ isTransformOriginProp),
/* harmony export */   "isTransformProp": () => (/* binding */ isTransformProp),
/* harmony export */   "sortTransformProps": () => (/* binding */ sortTransformProps),
/* harmony export */   "transformAxes": () => (/* binding */ transformAxes),
/* harmony export */   "transformProps": () => (/* binding */ transformProps)
/* harmony export */ });
/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
var transformAxes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
var order = ["translate", "scale", "rotate", "skew"];
/**
 * Generate a list of every possible transform key.
 */
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function (operationKey) {
    return transformAxes.forEach(function (axesKey) {
        return transformProps.push(operationKey + axesKey);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
function sortTransformProps(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
}
/**
 * A quick lookup for transform props.
 */
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
    return transformPropSet.has(key);
}
/**
 * A quick lookup for transform origin props
 */
var transformOriginProps = new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/visual-element.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/visual-element.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComputedStyle": () => (/* binding */ getComputedStyle),
/* harmony export */   "htmlConfig": () => (/* binding */ htmlConfig),
/* harmony export */   "htmlVisualElement": () => (/* binding */ htmlVisualElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../index.mjs */ "./node_modules/framer-motion/dist/es/render/index.mjs");
/* harmony import */ var _utils_setters_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/setters.mjs */ "./node_modules/framer-motion/dist/es/render/utils/setters.mjs");
/* harmony import */ var _utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/build-styles.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/utils/is-css-variable.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _dom_utils_parse_dom_variant_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/utils/parse-dom-variant.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs");
/* harmony import */ var _utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/render.mjs");
/* harmony import */ var _dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/value-types/defaults.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs");
/* harmony import */ var _projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projection/utils/measure.mjs */ "./node_modules/framer-motion/dist/es/projection/utils/measure.mjs");












function getComputedStyle(element) {
    return window.getComputedStyle(element);
}
var htmlConfig = {
    treeType: "dom",
    readValueFromInstance: function (domElement, key) {
        if ((0,_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.isTransformProp)(key)) {
            var defaultType = (0,_dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        else {
            var computedStyle = getComputedStyle(domElement);
            return (((0,_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_2__.isCSSVariable)(key)
                ? computedStyle.getPropertyValue(key)
                : computedStyle[key]) || 0);
        }
    },
    sortNodePosition: function (a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    },
    getBaseTarget: function (props, key) {
        var _a;
        return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
    },
    measureViewportBox: function (element, _a) {
        var transformPagePoint = _a.transformPagePoint;
        return (0,_projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_3__.measureViewportBox)(element, transformPagePoint);
    },
    /**
     * Reset the transform on the current Element. This is called as part
     * of a batched process across the entire layout tree. To remove this write
     * cycle it'd be interesting to see if it's possible to "undo" all the current
     * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
     * works
     */
    resetTransform: function (element, domElement, props) {
        var transformTemplate = props.transformTemplate;
        domElement.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        // Ensure that whatever happens next, we restore our transform on the next frame
        element.scheduleRender();
    },
    restoreTransform: function (instance, mutableState) {
        instance.style.transform = mutableState.style.transform;
    },
    removeValueFromRenderState: function (key, _a) {
        var vars = _a.vars, style = _a.style;
        delete vars[key];
        delete style[key];
    },
    /**
     * Ensure that HTML and Framer-specific value types like `px`->`%` and `Color`
     * can be animated by Motion.
     */
    makeTargetAnimatable: function (element, _a, _b, isMounted) {
        var transformValues = _b.transformValues;
        if (isMounted === void 0) { isMounted = true; }
        var transition = _a.transition, transitionEnd = _a.transitionEnd, target = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_a, ["transition", "transitionEnd"]);
        var origin = (0,_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_5__.getOrigin)(target, transition || {}, element);
        /**
         * If Framer has provided a function to convert `Color` etc value types, convert them
         */
        if (transformValues) {
            if (transitionEnd)
                transitionEnd = transformValues(transitionEnd);
            if (target)
                target = transformValues(target);
            if (origin)
                origin = transformValues(origin);
        }
        if (isMounted) {
            (0,_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_5__.checkTargetForNewValues)(element, target, origin);
            var parsed = (0,_dom_utils_parse_dom_variant_mjs__WEBPACK_IMPORTED_MODULE_6__.parseDomVariant)(element, target, origin, transitionEnd);
            transitionEnd = parsed.transitionEnd;
            target = parsed.target;
        }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ transition: transition, transitionEnd: transitionEnd }, target);
    },
    scrapeMotionValuesFromProps: _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_7__.scrapeMotionValuesFromProps,
    build: function (element, renderState, latestValues, options, props) {
        if (element.isVisible !== undefined) {
            renderState.style.visibility = element.isVisible
                ? "visible"
                : "hidden";
        }
        (0,_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_8__.buildHTMLStyles)(renderState, latestValues, options, props.transformTemplate);
    },
    render: _utils_render_mjs__WEBPACK_IMPORTED_MODULE_9__.renderHTML,
};
var htmlVisualElement = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_10__.visualElement)(htmlConfig);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visualElement": () => (/* binding */ visualElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _utils_animation_state_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/animation-state.mjs */ "./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs");
/* harmony import */ var _utils_lifecycles_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/lifecycles.mjs */ "./node_modules/framer-motion/dist/es/render/utils/lifecycles.mjs");
/* harmony import */ var _utils_motion_values_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs");
/* harmony import */ var _utils_variants_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variants.mjs");









var visualElement = function (_a) {
    var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps;
    return function (_a, options) {
        var parent = _a.parent, props = _a.props, presenceId = _a.presenceId, blockInitialAnimation = _a.blockInitialAnimation, visualState = _a.visualState, shouldReduceMotion = _a.shouldReduceMotion;
        if (options === void 0) { options = {}; }
        var isMounted = false;
        var latestValues = visualState.latestValues, renderState = visualState.renderState;
        /**
         * The instance of the render-specific node that will be hydrated by the
         * exposed React ref. So for example, this visual element can host a
         * HTMLElement, plain object, or Three.js object. The functions provided
         * in VisualElementConfig allow us to interface with this instance.
         */
        var instance;
        /**
         * Manages the subscriptions for a visual element's lifecycle, for instance
         * onRender
         */
        var lifecycles = (0,_utils_lifecycles_mjs__WEBPACK_IMPORTED_MODULE_1__.createLifecycles)();
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */
        var values = new Map();
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */
        var valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */
        var prevMotionValues = {};
        /**
         * When values are removed from all animation props we need to search
         * for a fallback value to animate to. These values are tracked in baseTarget.
         */
        var baseTarget = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, latestValues);
        // Internal methods ========================
        /**
         * On mount, this will be hydrated with a callback to disconnect
         * this visual element from its parent on unmount.
         */
        var removeFromVariantTree;
        /**
         * Render the element with the latest styles outside of the React
         * render lifecycle
         */
        function render() {
            if (!instance || !isMounted)
                return;
            triggerBuild();
            renderInstance(instance, renderState, props.style, element.projection);
        }
        function triggerBuild() {
            build(element, renderState, latestValues, options, props);
        }
        function update() {
            lifecycles.notifyUpdate(latestValues);
        }
        /**
         *
         */
        function bindToMotionValue(key, value) {
            var removeOnChange = value.onChange(function (latestValue) {
                latestValues[key] = latestValue;
                props.onUpdate && framesync__WEBPACK_IMPORTED_MODULE_0__["default"].update(update, false, true);
            });
            var removeOnRenderRequest = value.onRenderRequest(element.scheduleRender);
            valueSubscriptions.set(key, function () {
                removeOnChange();
                removeOnRenderRequest();
            });
        }
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't neccessarily a breaking change,
         * more a reflection of the test.
         */
        var initialMotionValues = scrapeMotionValuesFromProps(props);
        for (var key in initialMotionValues) {
            var value = initialMotionValues[key];
            if (latestValues[key] !== undefined && (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_3__.isMotionValue)(value)) {
                value.set(latestValues[key], false);
            }
        }
        /**
         * Determine what role this visual element should take in the variant tree.
         */
        var isControllingVariants = (0,_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_4__.checkIfControllingVariants)(props);
        var isVariantNode = (0,_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_4__.checkIfVariantNode)(props);
        var element = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ treeType: treeType, 
            /**
             * This is a mirror of the internal instance prop, which keeps
             * VisualElement type-compatible with React's RefObject.
             */
            current: null, 
            /**
             * The depth of this visual element within the visual element tree.
             */
            depth: parent ? parent.depth + 1 : 0, parent: parent, children: new Set(), 
            /**
             *
             */
            presenceId: presenceId, shouldReduceMotion: shouldReduceMotion, 
            /**
             * If this component is part of the variant tree, it should track
             * any children that are also part of the tree. This is essentially
             * a shadow tree to simplify logic around how to stagger over children.
             */
            variantChildren: isVariantNode ? new Set() : undefined, 
            /**
             * Whether this instance is visible. This can be changed imperatively
             * by the projection tree, is analogous to CSS's visibility in that
             * hidden elements should take up layout, and needs enacting by the configured
             * render function.
             */
            isVisible: undefined, 
            /**
             * Normally, if a component is controlled by a parent's variants, it can
             * rely on that ancestor to trigger animations further down the tree.
             * However, if a component is created after its parent is mounted, the parent
             * won't trigger that mount animation so the child needs to.
             *
             * TODO: This might be better replaced with a method isParentMounted
             */
            manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()), 
            /**
             * This can be set by AnimatePresence to force components that mount
             * at the same time as it to mount as if they have initial={false} set.
             */
            blockInitialAnimation: blockInitialAnimation, 
            /**
             * Determine whether this component has mounted yet. This is mostly used
             * by variant children to determine whether they need to trigger their
             * own animations on mount.
             */
            isMounted: function () { return Boolean(instance); }, mount: function (newInstance) {
                isMounted = true;
                instance = element.current = newInstance;
                if (element.projection) {
                    element.projection.mount(newInstance);
                }
                if (isVariantNode && parent && !isControllingVariants) {
                    removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
                }
                values.forEach(function (value, key) { return bindToMotionValue(key, value); });
                parent === null || parent === void 0 ? void 0 : parent.children.add(element);
                element.setProps(props);
            }, 
            /**
             *
             */
            unmount: function () {
                var _a;
                (_a = element.projection) === null || _a === void 0 ? void 0 : _a.unmount();
                framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.update(update);
                framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.render(render);
                valueSubscriptions.forEach(function (remove) { return remove(); });
                removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
                parent === null || parent === void 0 ? void 0 : parent.children.delete(element);
                lifecycles.clearAllListeners();
                instance = undefined;
                isMounted = false;
            }, 
            /**
             * Add a child visual element to our set of children.
             */
            addVariantChild: function (child) {
                var _a;
                var closestVariantNode = element.getClosestVariantNode();
                if (closestVariantNode) {
                    (_a = closestVariantNode.variantChildren) === null || _a === void 0 ? void 0 : _a.add(child);
                    return function () {
                        return closestVariantNode.variantChildren.delete(child);
                    };
                }
            }, sortNodePosition: function (other) {
                /**
                 * If these nodes aren't even of the same type we can't compare their depth.
                 */
                if (!sortNodePosition || treeType !== other.treeType)
                    return 0;
                return sortNodePosition(element.getInstance(), other.getInstance());
            }, 
            /**
             * Returns the closest variant node in the tree starting from
             * this visual element.
             */
            getClosestVariantNode: function () {
                return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
            }, 
            /**
             * Expose the latest layoutId prop.
             */
            getLayoutId: function () { return props.layoutId; }, 
            /**
             * Returns the current instance.
             */
            getInstance: function () { return instance; }, 
            /**
             * Get/set the latest static values.
             */
            getStaticValue: function (key) { return latestValues[key]; }, setStaticValue: function (key, value) { return (latestValues[key] = value); }, 
            /**
             * Returns the latest motion value state. Currently only used to take
             * a snapshot of the visual element - perhaps this can return the whole
             * visual state
             */
            getLatestValues: function () { return latestValues; }, 
            /**
             * Set the visiblity of the visual element. If it's changed, schedule
             * a render to reflect these changes.
             */
            setVisibility: function (visibility) {
                if (element.isVisible === visibility)
                    return;
                element.isVisible = visibility;
                element.scheduleRender();
            }, 
            /**
             * Make a target animatable by Popmotion. For instance, if we're
             * trying to animate width from 100px to 100vw we need to measure 100vw
             * in pixels to determine what we really need to animate to. This is also
             * pluggable to support Framer's custom value types like Color,
             * and CSS variables.
             */
            makeTargetAnimatable: function (target, canMutate) {
                if (canMutate === void 0) { canMutate = true; }
                return makeTargetAnimatable(element, target, props, canMutate);
            }, 
            /**
             * Measure the current viewport box with or without transforms.
             * Only measures axis-aligned boxes, rotate and skew must be manually
             * removed with a re-render to work.
             */
            measureViewportBox: function () {
                return measureViewportBox(instance, props);
            }, 
            // Motion values ========================
            /**
             * Add a motion value and bind it to this visual element.
             */
            addValue: function (key, value) {
                // Remove existing value if it exists
                if (element.hasValue(key))
                    element.removeValue(key);
                values.set(key, value);
                latestValues[key] = value.get();
                bindToMotionValue(key, value);
            }, 
            /**
             * Remove a motion value and unbind any active subscriptions.
             */
            removeValue: function (key) {
                var _a;
                values.delete(key);
                (_a = valueSubscriptions.get(key)) === null || _a === void 0 ? void 0 : _a();
                valueSubscriptions.delete(key);
                delete latestValues[key];
                removeValueFromRenderState(key, renderState);
            }, 
            /**
             * Check whether we have a motion value for this key
             */
            hasValue: function (key) { return values.has(key); }, 
            /**
             * Get a motion value for this key. If called with a default
             * value, we'll create one if none exists.
             */
            getValue: function (key, defaultValue) {
                var value = values.get(key);
                if (value === undefined && defaultValue !== undefined) {
                    value = (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_5__.motionValue)(defaultValue);
                    element.addValue(key, value);
                }
                return value;
            }, 
            /**
             * Iterate over our motion values.
             */
            forEachValue: function (callback) { return values.forEach(callback); }, 
            /**
             * If we're trying to animate to a previously unencountered value,
             * we need to check for it in our state and as a last resort read it
             * directly from the instance (which might have performance implications).
             */
            readValue: function (key) {
                var _a;
                return (_a = latestValues[key]) !== null && _a !== void 0 ? _a : readValueFromInstance(instance, key, options);
            }, 
            /**
             * Set the base target to later animate back to. This is currently
             * only hydrated on creation and when we first read a value.
             */
            setBaseTarget: function (key, value) {
                baseTarget[key] = value;
            }, 
            /**
             * Find the base target for a value thats been removed from all animation
             * props.
             */
            getBaseTarget: function (key) {
                if (getBaseTarget) {
                    var target = getBaseTarget(props, key);
                    if (target !== undefined && !(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_3__.isMotionValue)(target))
                        return target;
                }
                return baseTarget[key];
            } }, lifecycles), { 
            /**
             * Build the renderer state based on the latest visual state.
             */
            build: function () {
                triggerBuild();
                return renderState;
            }, 
            /**
             * Schedule a render on the next animation frame.
             */
            scheduleRender: function () {
                framesync__WEBPACK_IMPORTED_MODULE_0__["default"].render(render, false, true);
            }, 
            /**
             * Synchronously fire render. It's prefered that we batch renders but
             * in many circumstances, like layout measurement, we need to run this
             * synchronously. However in those instances other measures should be taken
             * to batch reads/writes.
             */
            syncRender: render, 
            /**
             * Update the provided props. Ensure any newly-added motion values are
             * added to our map, old ones removed, and listeners updated.
             */
            setProps: function (newProps) {
                if (newProps.transformTemplate || props.transformTemplate) {
                    element.scheduleRender();
                }
                props = newProps;
                lifecycles.updatePropListeners(newProps);
                prevMotionValues = (0,_utils_motion_values_mjs__WEBPACK_IMPORTED_MODULE_6__.updateMotionValuesFromProps)(element, scrapeMotionValuesFromProps(props), prevMotionValues);
            }, getProps: function () { return props; }, 
            // Variants ==============================
            /**
             * Returns the variant definition with a given name.
             */
            getVariant: function (name) { var _a; return (_a = props.variants) === null || _a === void 0 ? void 0 : _a[name]; }, 
            /**
             * Returns the defined default transition on this component.
             */
            getDefaultTransition: function () { return props.transition; }, getTransformPagePoint: function () {
                return props.transformPagePoint;
            }, 
            /**
             * Used by child variant nodes to get the closest ancestor variant props.
             */
            getVariantContext: function (startAtParent) {
                if (startAtParent === void 0) { startAtParent = false; }
                if (startAtParent)
                    return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
                if (!isControllingVariants) {
                    var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
                    if (props.initial !== undefined) {
                        context_1.initial = props.initial;
                    }
                    return context_1;
                }
                var context = {};
                for (var i = 0; i < numVariantProps; i++) {
                    var name_1 = variantProps[i];
                    var prop = props[name_1];
                    if ((0,_utils_variants_mjs__WEBPACK_IMPORTED_MODULE_4__.isVariantLabel)(prop) || prop === false) {
                        context[name_1] = prop;
                    }
                }
                return context;
            } });
        return element;
    };
};
var variantProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)(["initial"], (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(_utils_animation_state_mjs__WEBPACK_IMPORTED_MODULE_7__.variantPriorityOrder), false);
var numVariantProps = variantProps.length;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/config-motion.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/config-motion.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgMotionConfig": () => (/* binding */ svgMotionConfig)
/* harmony export */ });
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs");
/* harmony import */ var _motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.mjs */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs");
/* harmony import */ var _utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/build-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs");






var svgMotionConfig = {
    useVisualState: (0,_motion_utils_use_visual_state_mjs__WEBPACK_IMPORTED_MODULE_0__.makeUseVisualState)({
        scrapeMotionValuesFromProps: _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_1__.scrapeMotionValuesFromProps,
        createRenderState: _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_2__.createSvgRenderState,
        onMount: function (props, instance, _a) {
            var renderState = _a.renderState, latestValues = _a.latestValues;
            try {
                renderState.dimensions =
                    typeof instance.getBBox ===
                        "function"
                        ? instance.getBBox()
                        : instance.getBoundingClientRect();
            }
            catch (e) {
                // Most likely trying to measure an unrendered element under Firefox
                renderState.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                };
            }
            (0,_utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_3__.buildSVGAttrs)(renderState, latestValues, { enableHardwareAcceleration: false }, props.transformTemplate);
            (0,_utils_render_mjs__WEBPACK_IMPORTED_MODULE_4__.renderSVG)(instance, renderState);
        },
    }),
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lowercaseSVGElements": () => (/* binding */ lowercaseSVGElements)
/* harmony export */ });
/**
 * We keep these listed seperately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
var lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "tspan",
    "use",
    "view",
];




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/use-props.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/use-props.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSVGProps": () => (/* binding */ useSVGProps)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _html_use_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html/use-props.mjs */ "./node_modules/framer-motion/dist/es/render/html/use-props.mjs");
/* harmony import */ var _utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/build-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs");
/* harmony import */ var _utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs");






function useSVGProps(props, visualState) {
    var visualProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        var state = (0,_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_1__.createSvgRenderState)();
        (0,_utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_2__.buildSVGAttrs)(state, visualState, { enableHardwareAcceleration: false }, props.transformTemplate);
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state.attrs), { style: (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state.style) });
    }, [visualState]);
    if (props.style) {
        var rawStyles = {};
        (0,_html_use_props_mjs__WEBPACK_IMPORTED_MODULE_4__.copyRawValuesOnly)(rawStyles, props.style, props);
        visualProps.style = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, rawStyles), visualProps.style);
    }
    return visualProps;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSVGAttrs": () => (/* binding */ buildSVGAttrs)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _html_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/build-styles.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _transform_origin_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transform-origin.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs");
/* harmony import */ var _path_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./path.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs");





/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, _a, options, transformTemplate) {
    var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, 
    // This is object creation, which we try to avoid per-frame.
    latest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    (0,_html_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_1__.buildHTMLStyles)(state, latest, options, transformTemplate);
    state.attrs = state.style;
    state.style = {};
    var attrs = state.attrs, style = state.style, dimensions = state.dimensions;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        if (dimensions)
            style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions &&
        (originX !== undefined || originY !== undefined || style.transform)) {
        style.transformOrigin = (0,_transform_origin_mjs__WEBPACK_IMPORTED_MODULE_2__.calcSVGTransformOrigin)(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Treat x/y not as shortcuts but as actual attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) {
        (0,_path_mjs__WEBPACK_IMPORTED_MODULE_3__.buildSVGPath)(attrs, pathLength, pathSpacing, pathOffset, false);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camelCaseAttributes": () => (/* binding */ camelCaseAttributes)
/* harmony export */ });
/**
 * A set of attribute names that are always read/written as camel case.
 */
var camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
]);




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSvgRenderState": () => (/* binding */ createSvgRenderState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _html_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/create-render-state.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs");



var createSvgRenderState = function () { return ((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, (0,_html_utils_create_render_state_mjs__WEBPACK_IMPORTED_MODULE_1__.createHtmlRenderState)()), { attrs: {} })); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSVGPath": () => (/* binding */ buildSVGPath)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");


var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, length, spacing, offset, useDashCase) {
    if (spacing === void 0) { spacing = 1; }
    if (offset === void 0) { offset = 0; }
    if (useDashCase === void 0) { useDashCase = true; }
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    var keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.transform(-offset);
    // Build the dash array
    var pathLength = style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.transform(length);
    var pathSpacing = style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.transform(spacing);
    attrs[keys.array] = "".concat(pathLength, " ").concat(pathSpacing);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderSVG": () => (/* binding */ renderSVG)
/* harmony export */ });
/* harmony import */ var _dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/utils/camel-to-dash.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");
/* harmony import */ var _html_utils_render_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/render.mjs");
/* harmony import */ var _camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camel-case-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs");




function renderSVG(element, renderState, _styleProp, projection) {
    (0,_html_utils_render_mjs__WEBPACK_IMPORTED_MODULE_0__.renderHTML)(element, renderState, undefined, projection);
    for (var key in renderState.attrs) {
        element.setAttribute(!_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_1__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_2__.camelToDash)(key) : key, renderState.attrs[key]);
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrapeMotionValuesFromProps": () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _html_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");



function scrapeMotionValuesFromProps(props) {
    var newValues = (0,_html_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_0__.scrapeMotionValuesFromProps)(props);
    for (var key in props) {
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(props[key])) {
            var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcSVGTransformOrigin": () => (/* binding */ calcSVGTransformOrigin)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");


function calcOrigin(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : style_value_types__WEBPACK_IMPORTED_MODULE_0__.px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return "".concat(pxOriginX, " ").concat(pxOriginY);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/visual-element.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/visual-element.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgVisualElement": () => (/* binding */ svgVisualElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.mjs */ "./node_modules/framer-motion/dist/es/render/index.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs");
/* harmony import */ var _html_visual_element_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/visual-element.mjs */ "./node_modules/framer-motion/dist/es/render/html/visual-element.mjs");
/* harmony import */ var _utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/build-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs");
/* harmony import */ var _dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/utils/camel-to-dash.mjs */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");
/* harmony import */ var _utils_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/camel-case-attrs.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs");
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs");
/* harmony import */ var _dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/value-types/defaults.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs");











var svgVisualElement = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_0__.visualElement)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _html_visual_element_mjs__WEBPACK_IMPORTED_MODULE_2__.htmlConfig), { getBaseTarget: function (props, key) {
        return props[key];
    }, readValueFromInstance: function (domElement, key) {
        var _a;
        if ((0,_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_3__.isTransformProp)(key)) {
            return ((_a = (0,_dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_4__.getDefaultValueType)(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
        }
        key = !_utils_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_5__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_6__.camelToDash)(key) : key;
        return domElement.getAttribute(key);
    }, scrapeMotionValuesFromProps: _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_7__.scrapeMotionValuesFromProps, build: function (_element, renderState, latestValues, options, props) {
        (0,_utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_8__.buildSVGAttrs)(renderState, latestValues, options, props.transformTemplate);
    }, render: _utils_render_mjs__WEBPACK_IMPORTED_MODULE_9__.renderSVG }));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkVariantsDidChange": () => (/* binding */ checkVariantsDidChange),
/* harmony export */   "createAnimationState": () => (/* binding */ createAnimationState),
/* harmony export */   "variantPriorityOrder": () => (/* binding */ variantPriorityOrder)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animation/utils/is-keyframes-target.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs");
/* harmony import */ var _utils_shallow_compare_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/shallow-compare.mjs */ "./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs");
/* harmony import */ var _animation_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation.mjs */ "./node_modules/framer-motion/dist/es/render/utils/animation.mjs");
/* harmony import */ var _types_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.mjs */ "./node_modules/framer-motion/dist/es/render/utils/types.mjs");
/* harmony import */ var _variants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variants.mjs");








var variantPriorityOrder = [
    _types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Animate,
    _types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.InView,
    _types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus,
    _types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Hover,
    _types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Tap,
    _types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Drag,
    _types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Exit,
];
var reversePriorityOrder = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(variantPriorityOrder), false).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
    return function (animations) {
        return Promise.all(animations.map(function (_a) {
            var animation = _a.animation, options = _a.options;
            return (0,_animation_mjs__WEBPACK_IMPORTED_MODULE_2__.animateVisualElement)(visualElement, animation, options);
        }));
    };
}
function createAnimationState(visualElement) {
    var animate = animateList(visualElement);
    var state = createState();
    var allAnimatedKeys = {};
    var isInitialRender = true;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */
    var buildResolvedTypeValues = function (acc, definition) {
        var resolved = (0,_variants_mjs__WEBPACK_IMPORTED_MODULE_3__.resolveVariant)(visualElement, definition);
        if (resolved) {
            resolved.transition; var transitionEnd = resolved.transitionEnd, target = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(resolved, ["transition", "transitionEnd"]);
            acc = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, acc), target), transitionEnd);
        }
        return acc;
    };
    function isAnimated(key) {
        return allAnimatedKeys[key] !== undefined;
    }
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */
    function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */
    function animateChanges(options, changedActiveType) {
        var _a;
        var props = visualElement.getProps();
        var context = visualElement.getVariantContext(true) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */
        var animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */
        var removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */
        var encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */
        var removedVariantIndex = Infinity;
        var _loop_1 = function (i) {
            var type = reversePriorityOrder[i];
            var typeState = state[type];
            var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
            var propIsVariant = (0,_variants_mjs__WEBPACK_IMPORTED_MODULE_3__.isVariantLabel)(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */
            var activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false)
                removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */
            var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
            /**
             *
             */
            if (isInherited &&
                isInitialRender &&
                visualElement.manuallyAnimateOnMount) {
                isInherited = false;
            }
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */
            typeState.protectedKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, encounteredKeys);
            // Check if we can skip analysing this prop early
            if (
            // If it isn't active and hasn't *just* been set as inactive
            (!typeState.isActive && activeDelta === null) ||
                // If we didn't and don't have any defined prop for this animation type
                (!prop && !typeState.prevProp) ||
                // Or if the prop doesn't define an animation
                (0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_4__.isAnimationControls)(prop) ||
                typeof prop === "boolean") {
                return "continue";
            }
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */
            var variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
            var shouldAnimateType = variantDidChange ||
                // If we're making this variant active, we want to always make it active
                (type === changedActiveType &&
                    typeState.isActive &&
                    !isInherited &&
                    propIsVariant) ||
                // If we removed a higher-priority variant (i is in reverse order)
                (i > removedVariantIndex && propIsVariant);
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */
            var definitionList = Array.isArray(prop) ? prop : [prop];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */
            var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
            if (activeDelta === false)
                resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */
            var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
            var allKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, prevResolvedValues), resolvedValues);
            var markToAnimate = function (key) {
                shouldAnimateType = true;
                removedKeys.delete(key);
                typeState.needsAnimating[key] = true;
            };
            for (var key in allKeys) {
                var next = resolvedValues[key];
                var prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key))
                    continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */
                if (next !== prev) {
                    /**
                     * If both values are keyframes, we need to shallow compare them to
                     * detect whether any value has changed. If it has, we animate it.
                     */
                    if ((0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_5__.isKeyframesTarget)(next) && (0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_5__.isKeyframesTarget)(prev)) {
                        if (!(0,_utils_shallow_compare_mjs__WEBPACK_IMPORTED_MODULE_6__.shallowCompare)(next, prev) || variantDidChange) {
                            markToAnimate(key);
                        }
                        else {
                            /**
                             * If it hasn't changed, we want to ensure it doesn't animate by
                             * adding it to the list of protected keys.
                             */
                            typeState.protectedKeys[key] = true;
                        }
                    }
                    else if (next !== undefined) {
                        // If next is defined and doesn't equal prev, it needs animating
                        markToAnimate(key);
                    }
                    else {
                        // If it's undefined, it's been removed.
                        removedKeys.add(key);
                    }
                }
                else if (next !== undefined && removedKeys.has(key)) {
                    /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */
                    markToAnimate(key);
                }
                else {
                    /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */
                    typeState.protectedKeys[key] = true;
                }
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */
            typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            /**
             *
             */
            if (typeState.isActive) {
                encounteredKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, encounteredKeys), resolvedValues);
            }
            if (isInitialRender && visualElement.blockInitialAnimation) {
                shouldAnimateType = false;
            }
            /**
             * If this is an inherited prop we want to hard-block animations
             * TODO: Test as this should probably still handle animations triggered
             * by removed values?
             */
            if (shouldAnimateType && !isInherited) {
                animations.push.apply(animations, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(definitionList.map(function (animation) { return ({
                    animation: animation,
                    options: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ type: type }, options),
                }); })), false));
            }
        };
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */
        for (var i = 0; i < numAnimationTypes; i++) {
            _loop_1(i);
        }
        allAnimatedKeys = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, encounteredKeys);
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */
        if (removedKeys.size) {
            var fallbackAnimation_1 = {};
            removedKeys.forEach(function (key) {
                var fallbackTarget = visualElement.getBaseTarget(key);
                if (fallbackTarget !== undefined) {
                    fallbackAnimation_1[key] = fallbackTarget;
                }
            });
            animations.push({ animation: fallbackAnimation_1 });
        }
        var shouldAnimate = Boolean(animations.length);
        if (isInitialRender &&
            props.initial === false &&
            !visualElement.manuallyAnimateOnMount) {
            shouldAnimate = false;
        }
        isInitialRender = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */
    function setActive(type, isActive, options) {
        var _a;
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive)
            return Promise.resolve();
        // Propagate active change to children
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) { var _a; return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive); });
        state[type].isActive = isActive;
        var animations = animateChanges(options, type);
        for (var key in state) {
            state[key].protectedKeys = {};
        }
        return animations;
    }
    return {
        isAnimated: isAnimated,
        animateChanges: animateChanges,
        setActive: setActive,
        setAnimateFunction: setAnimateFunction,
        getState: function () { return state; },
    };
}
function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
        return next !== prev;
    }
    else if ((0,_variants_mjs__WEBPACK_IMPORTED_MODULE_3__.isVariantLabels)(next)) {
        return !(0,_utils_shallow_compare_mjs__WEBPACK_IMPORTED_MODULE_6__.shallowCompare)(next, prev);
    }
    return false;
}
function createTypeState(isActive) {
    if (isActive === void 0) { isActive = false; }
    return {
        isActive: isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function createState() {
    var _a;
    return _a = {},
        _a[_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Animate] = createTypeState(true),
        _a[_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.InView] = createTypeState(),
        _a[_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Hover] = createTypeState(),
        _a[_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Tap] = createTypeState(),
        _a[_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Drag] = createTypeState(),
        _a[_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Focus] = createTypeState(),
        _a[_types_mjs__WEBPACK_IMPORTED_MODULE_0__.AnimationType.Exit] = createTypeState(),
        _a;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/animation.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/animation.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animateVisualElement": () => (/* binding */ animateVisualElement),
/* harmony export */   "sortByTreeOrder": () => (/* binding */ sortByTreeOrder),
/* harmony export */   "stopAnimation": () => (/* binding */ stopAnimation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animation_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animation/utils/transitions.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs");
/* harmony import */ var _setters_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setters.mjs */ "./node_modules/framer-motion/dist/es/render/utils/setters.mjs");
/* harmony import */ var _variants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variants.mjs");
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/utils/transform.mjs */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs");






function animateVisualElement(visualElement, definition, options) {
    if (options === void 0) { options = {}; }
    visualElement.notifyAnimationStart(definition);
    var animation;
    if (Array.isArray(definition)) {
        var animations = definition.map(function (variant) {
            return animateVariant(visualElement, variant, options);
        });
        animation = Promise.all(animations);
    }
    else if (typeof definition === "string") {
        animation = animateVariant(visualElement, definition, options);
    }
    else {
        var resolvedDefinition = typeof definition === "function"
            ? (0,_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveVariant)(visualElement, definition, options.custom)
            : definition;
        animation = animateTarget(visualElement, resolvedDefinition, options);
    }
    return animation.then(function () {
        return visualElement.notifyAnimationComplete(definition);
    });
}
function animateVariant(visualElement, variant, options) {
    var _a;
    if (options === void 0) { options = {}; }
    var resolved = (0,_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveVariant)(visualElement, variant, options.custom);
    var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement.getDefaultTransition() || {} : _b;
    if (options.transitionOverride) {
        transition = options.transitionOverride;
    }
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    var getAnimation = resolved
        ? function () { return animateTarget(visualElement, resolved, options); }
        : function () { return Promise.resolve(); };
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    var getChildAnimations = ((_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.size)
        ? function (forwardDelay) {
            if (forwardDelay === void 0) { forwardDelay = 0; }
            var _a = transition.delayChildren, delayChildren = _a === void 0 ? 0 : _a, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
            return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
        }
        : function () { return Promise.resolve(); };
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */
    var when = transition.when;
    if (when) {
        var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(when === "beforeChildren"
            ? [getAnimation, getChildAnimations]
            : [getChildAnimations, getAnimation], 2), first = _c[0], last = _c[1];
        return first().then(last);
    }
    else {
        return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
}
/**
 * @internal
 */
function animateTarget(visualElement, definition, _a) {
    var _b;
    var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
    var _e = visualElement.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_e, ["transition", "transitionEnd"]);
    if (transitionOverride)
        transition = transitionOverride;
    var animations = [];
    var animationTypeState = type && ((_b = visualElement.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
    for (var key in target) {
        var value = visualElement.getValue(key);
        var valueTarget = target[key];
        if (!value ||
            valueTarget === undefined ||
            (animationTypeState &&
                shouldBlockAnimation(animationTypeState, key))) {
            continue;
        }
        var valueTransition = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delay: delay }, transition);
        /**
         * Make animation instant if this is a transform prop and we should reduce motion.
         */
        if (visualElement.shouldReduceMotion && (0,_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__.isTransformProp)(key)) {
            valueTransition = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, valueTransition), { type: false, delay: 0 });
        }
        var animation = (0,_animation_utils_transitions_mjs__WEBPACK_IMPORTED_MODULE_3__.startAnimation)(key, value, valueTarget, valueTransition);
        animations.push(animation);
    }
    return Promise.all(animations).then(function () {
        transitionEnd && (0,_setters_mjs__WEBPACK_IMPORTED_MODULE_4__.setTarget)(visualElement, transitionEnd);
    });
}
function animateChildren(visualElement, variant, delayChildren, staggerChildren, staggerDirection, options) {
    if (delayChildren === void 0) { delayChildren = 0; }
    if (staggerChildren === void 0) { staggerChildren = 0; }
    if (staggerDirection === void 0) { staggerDirection = 1; }
    var animations = [];
    var maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    var generateStaggerDuration = staggerDirection === 1
        ? function (i) {
            if (i === void 0) { i = 0; }
            return i * staggerChildren;
        }
        : function (i) {
            if (i === void 0) { i = 0; }
            return maxStaggerDuration - i * staggerChildren;
        };
    Array.from(visualElement.variantChildren)
        .sort(sortByTreeOrder)
        .forEach(function (child, i) {
        animations.push(animateVariant(child, variant, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), { delay: delayChildren + generateStaggerDuration(i) })).then(function () { return child.notifyAnimationComplete(variant); }));
    });
    return Promise.all(animations);
}
function stopAnimation(visualElement) {
    visualElement.forEachValue(function (value) { return value.stop(); });
}
function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
}
/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation(_a, key) {
    var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
    var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareByDepth": () => (/* binding */ compareByDepth)
/* harmony export */ });
var compareByDepth = function (a, b) {
    return a.depth - b.depth;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlatTree": () => (/* binding */ FlatTree)
/* harmony export */ });
/* harmony import */ var _utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/array.mjs */ "./node_modules/framer-motion/dist/es/utils/array.mjs");
/* harmony import */ var _compare_by_depth_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare-by-depth.mjs */ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs");



var FlatTree = /** @class */ (function () {
    function FlatTree() {
        this.children = [];
        this.isDirty = false;
    }
    FlatTree.prototype.add = function (child) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.children, child);
        this.isDirty = true;
    };
    FlatTree.prototype.remove = function (child) {
        (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(this.children, child);
        this.isDirty = true;
    };
    FlatTree.prototype.forEach = function (callback) {
        this.isDirty && this.children.sort(_compare_by_depth_mjs__WEBPACK_IMPORTED_MODULE_1__.compareByDepth);
        this.isDirty = false;
        this.children.forEach(callback);
    };
    return FlatTree;
}());




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/lifecycles.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/lifecycles.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLifecycles": () => (/* binding */ createLifecycles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/subscription-manager.mjs */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs");



var names = [
    "LayoutMeasure",
    "BeforeLayoutMeasure",
    "LayoutUpdate",
    "ViewportBoxUpdate",
    "Update",
    "Render",
    "AnimationComplete",
    "LayoutAnimationComplete",
    "AnimationStart",
    "LayoutAnimationStart",
    "SetAxisTarget",
    "Unmount",
];
function createLifecycles() {
    var managers = names.map(function () { return new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_0__.SubscriptionManager(); });
    var propSubscriptions = {};
    var lifecycles = {
        clearAllListeners: function () { return managers.forEach(function (manager) { return manager.clear(); }); },
        updatePropListeners: function (props) {
            names.forEach(function (name) {
                var _a;
                var on = "on" + name;
                var propListener = props[on];
                // Unsubscribe existing subscription
                (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
                // Add new subscription
                if (propListener) {
                    propSubscriptions[name] = lifecycles[on](propListener);
                }
            });
        },
    };
    managers.forEach(function (manager, i) {
        lifecycles["on" + names[i]] = function (handler) { return manager.add(handler); };
        lifecycles["notify" + names[i]] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return manager.notify.apply(manager, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(args), false));
        };
    });
    return lifecycles;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateMotionValuesFromProps": () => (/* binding */ updateMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/warn-once.mjs */ "./node_modules/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");




function updateMotionValuesFromProps(element, next, prev) {
    var _a;
    for (var key in next) {
        var nextValue = next[key];
        var prevValue = prev[key];
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */
            element.addValue(key, nextValue);
            /**
             * Check the version of the incoming motion value with this version
             * and warn against mismatches.
             */
            if (true) {
                (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__.warnOnce)(nextValue.version === "6.3.16", "Attempting to mix Framer Motion versions ".concat(nextValue.version, " with 6.3.16 may not work as expected."));
            }
        }
        else if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(prevValue)) {
            /**
             * If we're swapping to a new motion value, create a new motion value
             * from that
             */
            element.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(nextValue));
        }
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */
            if (element.hasValue(key)) {
                var existingValue = element.getValue(key);
                // TODO: Only update values that aren't being animated or even looked at
                !existingValue.hasAnimated && existingValue.set(nextValue);
            }
            else {
                element.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
            }
        }
    }
    // Handle removed values
    for (var key in prev) {
        if (next[key] === undefined)
            element.removeValue(key);
    }
    return next;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/setters.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/setters.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTargetForNewValues": () => (/* binding */ checkTargetForNewValues),
/* harmony export */   "getOrigin": () => (/* binding */ getOrigin),
/* harmony export */   "getOriginFromTransition": () => (/* binding */ getOriginFromTransition),
/* harmony export */   "setTarget": () => (/* binding */ setTarget),
/* harmony export */   "setValues": () => (/* binding */ setValues)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.mjs");
/* harmony import */ var _utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/is-numerical-string.mjs */ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs");
/* harmony import */ var _utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/is-zero-value-string.mjs */ "./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs");
/* harmony import */ var _utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/resolve-value.mjs */ "./node_modules/framer-motion/dist/es/utils/resolve-value.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom/value-types/animatable-none.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs");
/* harmony import */ var _dom_value_types_find_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/value-types/find.mjs */ "./node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs");
/* harmony import */ var _variants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variants.mjs */ "./node_modules/framer-motion/dist/es/render/utils/variants.mjs");










/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_0__.motionValue)(value));
    }
}
function setTarget(visualElement, definition) {
    var resolved = (0,_variants_mjs__WEBPACK_IMPORTED_MODULE_1__.resolveVariant)(visualElement, definition);
    var _a = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b; _a.transition; var target = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["transitionEnd", "transition"]);
    target = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, target), transitionEnd);
    for (var key in target) {
        var value = (0,_utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_3__.resolveFinalValueInKeyframes)(target[key]);
        setMotionValue(visualElement, key, value);
    }
}
function setVariants(visualElement, variantLabels) {
    var reversedLabels = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(variantLabels), false).reverse();
    reversedLabels.forEach(function (key) {
        var _a;
        var variant = visualElement.getVariant(key);
        variant && setTarget(visualElement, variant);
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
            setVariants(child, variantLabels);
        });
    });
}
function setValues(visualElement, definition) {
    if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
    }
    else if (typeof definition === "string") {
        return setVariants(visualElement, [definition]);
    }
    else {
        setTarget(visualElement, definition);
    }
}
function checkTargetForNewValues(visualElement, target, origin) {
    var _a, _b, _c;
    var _d;
    var newValueKeys = Object.keys(target).filter(function (key) { return !visualElement.hasValue(key); });
    var numNewValues = newValueKeys.length;
    if (!numNewValues)
        return;
    for (var i = 0; i < numNewValues; i++) {
        var key = newValueKeys[i];
        var targetValue = target[key];
        var value = null;
        /**
         * If the target is a series of keyframes, we can use the first value
         * in the array. If this first value is null, we'll still need to read from the DOM.
         */
        if (Array.isArray(targetValue)) {
            value = targetValue[0];
        }
        /**
         * If the target isn't keyframes, or the first keyframe was null, we need to
         * first check if an origin value was explicitly defined in the transition as "from",
         * if not read the value from the DOM. As an absolute fallback, take the defined target value.
         */
        if (value === null) {
            value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
        }
        /**
         * If value is still undefined or null, ignore it. Preferably this would throw,
         * but this was causing issues in Framer.
         */
        if (value === undefined || value === null)
            continue;
        if (typeof value === "string" &&
            ((0,_utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_4__.isNumericalString)(value) || (0,_utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_5__.isZeroValueString)(value))) {
            // If this is a number read as a string, ie "0" or "200", convert it to a number
            value = parseFloat(value);
        }
        else if (!(0,_dom_value_types_find_mjs__WEBPACK_IMPORTED_MODULE_6__.findValueType)(value) && style_value_types__WEBPACK_IMPORTED_MODULE_7__.complex.test(targetValue)) {
            value = (0,_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_8__.getAnimatableNone)(key, targetValue);
        }
        visualElement.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_0__.motionValue)(value));
        (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : (_d[key] = value);
        visualElement.setBaseTarget(key, value);
    }
}
function getOriginFromTransition(key, transition) {
    if (!transition)
        return;
    var valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
    var _a, _b;
    var origin = {};
    for (var key in target) {
        origin[key] =
            (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
    }
    return origin;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/types.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/types.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationType": () => (/* binding */ AnimationType)
/* harmony export */ });
var AnimationType;
(function (AnimationType) {
    AnimationType["Animate"] = "animate";
    AnimationType["Hover"] = "whileHover";
    AnimationType["Tap"] = "whileTap";
    AnimationType["Drag"] = "whileDrag";
    AnimationType["Focus"] = "whileFocus";
    AnimationType["InView"] = "whileInView";
    AnimationType["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/variants.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/variants.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIfControllingVariants": () => (/* binding */ checkIfControllingVariants),
/* harmony export */   "checkIfVariantNode": () => (/* binding */ checkIfVariantNode),
/* harmony export */   "isVariantLabel": () => (/* binding */ isVariantLabel),
/* harmony export */   "isVariantLabels": () => (/* binding */ isVariantLabels),
/* harmony export */   "resolveVariant": () => (/* binding */ resolveVariant),
/* harmony export */   "resolveVariantFromProps": () => (/* binding */ resolveVariantFromProps)
/* harmony export */ });
/**
 * Decides if the supplied variable is an array of variant labels
 */
function isVariantLabels(v) {
    return Array.isArray(v);
}
/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || isVariantLabels(v);
}
/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
function getCurrent(visualElement) {
    var current = {};
    visualElement.forEachValue(function (value, key) { return (current[key] = value.get()); });
    return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
function getVelocity(visualElement) {
    var velocity = {};
    visualElement.forEachValue(function (value, key) { return (velocity[key] = value.getVelocity()); });
    return velocity;
}
function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
    var _a;
    if (currentValues === void 0) { currentValues = {}; }
    if (currentVelocity === void 0) { currentVelocity = {}; }
    /**
     * If the variant definition is a function, resolve.
     */
    if (typeof definition === "function") {
        definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */
    if (typeof definition === "string") {
        definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
    }
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */
    if (typeof definition === "function") {
        definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
    }
    return definition;
}
function resolveVariant(visualElement, definition, custom) {
    var props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}
function checkIfControllingVariants(props) {
    var _a;
    return (typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" ||
        isVariantLabel(props.initial) ||
        isVariantLabel(props.animate) ||
        isVariantLabel(props.whileHover) ||
        isVariantLabel(props.whileDrag) ||
        isVariantLabel(props.whileTap) ||
        isVariantLabel(props.whileFocus) ||
        isVariantLabel(props.exit));
}
function checkIfVariantNode(props) {
    return Boolean(checkIfControllingVariants(props) || props.variants);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/array.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/array.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUniqueItem": () => (/* binding */ addUniqueItem),
/* harmony export */   "moveItem": () => (/* binding */ moveItem),
/* harmony export */   "removeItem": () => (/* binding */ removeItem)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


function addUniqueItem(arr, item) {
    arr.indexOf(item) === -1 && arr.push(item);
}
function removeItem(arr, item) {
    var index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
}
// Adapted from array-move
function moveItem(_a, fromIndex, toIndex) {
    var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(_a), arr = _b.slice(0);
    var startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        var endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(arr.splice(fromIndex, 1), 1), item = _c[0];
        arr.splice(endIndex, 0, item);
    }
    return arr;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-browser.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser)
/* harmony export */ });
var isBrowser = typeof document !== "undefined";




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumericalString": () => (/* binding */ isNumericalString)
/* harmony export */ });
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
var isNumericalString = function (v) { return /^\-?\d*\.?\d+$/.test(v); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isRefObject": () => (/* binding */ isRefObject)
/* harmony export */ });
function isRefObject(ref) {
    return (typeof ref === "object" &&
        Object.prototype.hasOwnProperty.call(ref, "current"));
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isZeroValueString": () => (/* binding */ isZeroValueString)
/* harmony export */ });
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
var isZeroValueString = function (v) { return /^0[^.\s]+$/.test(v); };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/process.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/process.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "env": () => (/* binding */ env)
/* harmony export */ });
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
/**
 * Browser-safe usage of process
 */
var defaultEnvironment = "production";
var env = typeof process === "undefined" || process.env === undefined
    ? defaultEnvironment
    : "development" || 0;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/resolve-value.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/resolve-value.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCustomValue": () => (/* binding */ isCustomValue),
/* harmony export */   "resolveFinalValueInKeyframes": () => (/* binding */ resolveFinalValueInKeyframes)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/utils/is-keyframes-target.mjs */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs");


var isCustomValue = function (v) {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function (v) {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return (0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__.isKeyframesTarget)(v) ? v[v.length - 1] || 0 : v;
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shallowCompare": () => (/* binding */ shallowCompare)
/* harmony export */ });
function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
        return false;
    var prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (var i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionManager": () => (/* binding */ SubscriptionManager)
/* harmony export */ });
/* harmony import */ var _array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.mjs */ "./node_modules/framer-motion/dist/es/utils/array.mjs");


var SubscriptionManager = /** @class */ (function () {
    function SubscriptionManager() {
        this.subscriptions = [];
    }
    SubscriptionManager.prototype.add = function (handler) {
        var _this = this;
        (0,_array_mjs__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.subscriptions, handler);
        return function () { return (0,_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(_this.subscriptions, handler); };
    };
    SubscriptionManager.prototype.notify = function (a, b, c) {
        var numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
            return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */
            this.subscriptions[0](a, b, c);
        }
        else {
            for (var i = 0; i < numSubscriptions; i++) {
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */
                var handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    };
    SubscriptionManager.prototype.getSize = function () {
        return this.subscriptions.length;
    };
    SubscriptionManager.prototype.clear = function () {
        this.subscriptions.length = 0;
    };
    return SubscriptionManager;
}());




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/time-conversion.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/time-conversion.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "secondsToMilliseconds": () => (/* binding */ secondsToMilliseconds)
/* harmony export */ });
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
var secondsToMilliseconds = function (seconds) { return seconds * 1000; };




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-constant.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useConstant": () => (/* binding */ useConstant)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-force-update.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-force-update.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useForceUpdate": () => (/* binding */ useForceUpdate)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-is-mounted.mjs */ "./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs");





function useForceUpdate() {
    var isMounted = (0,_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_2__.useIsMounted)();
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), forcedRenderCount = _a[0], setForcedRenderCount = _a[1];
    var forceRender = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
        isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
    }, [forcedRenderCount]);
    /**
     * Defer this to the end of the next animation frame in case there are multiple
     * synchronous calls.
     */
    var deferredForceRender = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () { return framesync__WEBPACK_IMPORTED_MODULE_0__["default"].postRender(forceRender); }, [forceRender]);
    return [deferredForceRender, forcedRenderCount];
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-id.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-id.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useId": () => (/* binding */ useId)
/* harmony export */ });
/* harmony import */ var _use_constant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-constant.mjs */ "./node_modules/framer-motion/dist/es/utils/use-constant.mjs");


var counter = 0;
var incrementId = function () { return counter++; };
var useId = function () { return (0,_use_constant_mjs__WEBPACK_IMPORTED_MODULE_0__.useConstant)(incrementId); };
/**
 * Ideally we'd use the following code to support React 18 optionally.
 * But this fairly fails in Webpack (otherwise treeshaking wouldn't work at all).
 * Need to come up with a different way of figuring this out.
 */
// export const useId = (React as any).useId
//     ? (React as any).useId
//     : () => useConstant(incrementId)




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instantAnimationState": () => (/* binding */ instantAnimationState)
/* harmony export */ });
var instantAnimationState = {
    current: false,
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsMounted": () => (/* binding */ useIsMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-isomorphic-effect.mjs */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");



function useIsMounted() {
    var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicLayoutEffect)(function () {
        isMounted.current = true;
        return function () {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsomorphicLayoutEffect": () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-browser.mjs */ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs");



var useIsomorphicLayoutEffect = _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__.isBrowser ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useReducedMotion": () => (/* binding */ useReducedMotion),
/* harmony export */   "useReducedMotionConfig": () => (/* binding */ useReducedMotionConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/MotionConfigContext.mjs */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");
/* harmony import */ var _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-browser.mjs */ "./node_modules/framer-motion/dist/es/utils/is-browser.mjs");





// Does this device prefer reduced motion? Returns `null` server-side.
var prefersReducedMotion = { current: null };
var hasDetected = false;
function initPrefersReducedMotion() {
    hasDetected = true;
    if (!_is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__.isBrowser)
        return;
    if (window.matchMedia) {
        var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
        var setReducedMotionPreferences = function () {
            return (prefersReducedMotion.current = motionMediaQuery_1.matches);
        };
        motionMediaQuery_1.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        prefersReducedMotion.current = false;
    }
}
/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```jsx
 * export function Sidebar({ isOpen }) {
 *   const shouldReduceMotion = useReducedMotion()
 *   const closedX = shouldReduceMotion ? 0 : "-100%"
 *
 *   return (
 *     <motion.div animate={{
 *       opacity: isOpen ? 1 : 0,
 *       x: isOpen ? 0 : closedX
 *     }} />
 *   )
 * }
 * ```
 *
 * @return boolean
 *
 * @public
 */
function useReducedMotion() {
    /**
     * Lazy initialisation of prefersReducedMotion
     */
    !hasDetected && initPrefersReducedMotion();
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(prefersReducedMotion.current), 1), shouldReduceMotion = _a[0];
    /**
     * TODO See if people miss automatically updating shouldReduceMotion setting
     */
    return shouldReduceMotion;
}
function useReducedMotionConfig() {
    var reducedMotionPreference = useReducedMotion();
    var reducedMotion = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__.MotionConfigContext).reducedMotion;
    if (reducedMotion === "never") {
        return false;
    }
    else if (reducedMotion === "always") {
        return true;
    }
    else {
        return reducedMotionPreference;
    }
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUnmountEffect": () => (/* binding */ useUnmountEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function useUnmountEffect(callback) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return function () { return callback(); }; }, []);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/warn-once.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/warn-once.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warnOnce": () => (/* binding */ warnOnce)
/* harmony export */ });
var warned = new Set();
function warnOnce(condition, message, element) {
    if (condition || warned.has(message))
        return;
    console.warn(message);
    if (element)
        console.warn(element);
    warned.add(message);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionValue": () => (/* binding */ MotionValue),
/* harmony export */   "motionValue": () => (/* binding */ motionValue)
/* harmony export */ });
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.mjs");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/utils/velocity-per-second.mjs");
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/subscription-manager.mjs */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs");




var isFloat = function (value) {
    return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
var MotionValue = /** @class */ (function () {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    function MotionValue(init) {
        var _this = this;
        /**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */
        this.version = "6.3.16";
        /**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */
        this.timeDelta = 0;
        /**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */
        this.lastUpdated = 0;
        /**
         * Functions to notify when the `MotionValue` updates.
         *
         * @internal
         */
        this.updateSubscribers = new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_1__.SubscriptionManager();
        /**
         * Functions to notify when the velocity updates.
         *
         * @internal
         */
        this.velocityUpdateSubscribers = new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_1__.SubscriptionManager();
        /**
         * Functions to notify when the `MotionValue` updates and `render` is set to `true`.
         *
         * @internal
         */
        this.renderSubscribers = new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_1__.SubscriptionManager();
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = false;
        this.updateAndNotify = function (v, render) {
            if (render === void 0) { render = true; }
            _this.prev = _this.current;
            _this.current = v;
            // Update timestamp
            var _a = (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)(), delta = _a.delta, timestamp = _a.timestamp;
            if (_this.lastUpdated !== timestamp) {
                _this.timeDelta = delta;
                _this.lastUpdated = timestamp;
                framesync__WEBPACK_IMPORTED_MODULE_0__["default"].postRender(_this.scheduleVelocityCheck);
            }
            // Update update subscribers
            if (_this.prev !== _this.current) {
                _this.updateSubscribers.notify(_this.current);
            }
            // Update velocity subscribers
            if (_this.velocityUpdateSubscribers.getSize()) {
                _this.velocityUpdateSubscribers.notify(_this.getVelocity());
            }
            // Update render subscribers
            if (render) {
                _this.renderSubscribers.notify(_this.current);
            }
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = function () { return framesync__WEBPACK_IMPORTED_MODULE_0__["default"].postRender(_this.velocityCheck); };
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = function (_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) {
                _this.prev = _this.current;
                _this.velocityUpdateSubscribers.notify(_this.getVelocity());
            }
        };
        this.hasAnimated = false;
        this.prev = this.current = init;
        this.canTrackVelocity = isFloat(this.current);
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @privateRemarks
     *
     * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
     *
     * ```jsx
     * useOnChange(x, () => {})
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @public
     */
    MotionValue.prototype.onChange = function (subscription) {
        return this.updateSubscribers.add(subscription);
    };
    MotionValue.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
    };
    /**
     * Adds a function that will be notified when the `MotionValue` requests a render.
     *
     * @param subscriber - A function that's provided the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @internal
     */
    MotionValue.prototype.onRenderRequest = function (subscription) {
        // Render immediately
        subscription(this.get());
        return this.renderSubscribers.add(subscription);
    };
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    MotionValue.prototype.attach = function (passiveEffect) {
        this.passiveEffect = passiveEffect;
    };
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    MotionValue.prototype.set = function (v, render) {
        if (render === void 0) { render = true; }
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    };
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    MotionValue.prototype.get = function () {
        return this.current;
    };
    /**
     * @public
     */
    MotionValue.prototype.getPrevious = function () {
        return this.prev;
    };
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    MotionValue.prototype.getVelocity = function () {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
            ? // These casts could be avoided if parseFloat would be typed better
                (0,popmotion__WEBPACK_IMPORTED_MODULE_2__.velocityPerSecond)(parseFloat(this.current) -
                    parseFloat(this.prev), this.timeDelta)
            : 0;
    };
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    MotionValue.prototype.start = function (animation) {
        var _this = this;
        this.stop();
        return new Promise(function (resolve) {
            _this.hasAnimated = true;
            _this.stopAnimation = animation(resolve);
        }).then(function () { return _this.clearAnimation(); });
    };
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    MotionValue.prototype.stop = function () {
        if (this.stopAnimation)
            this.stopAnimation();
        this.clearAnimation();
    };
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    MotionValue.prototype.isAnimating = function () {
        return !!this.stopAnimation;
    };
    MotionValue.prototype.clearAnimation = function () {
        this.stopAnimation = null;
    };
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    MotionValue.prototype.destroy = function () {
        this.updateSubscribers.clear();
        this.renderSubscribers.clear();
        this.stop();
    };
    return MotionValue;
}());
function motionValue(init) {
    return new MotionValue(init);
}




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMotionValue": () => (/* binding */ isMotionValue)
/* harmony export */ });
var isMotionValue = function (value) {
    return Boolean(value !== null && typeof value === "object" && value.getVelocity);
};




/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveMotionValue": () => (/* binding */ resolveMotionValue)
/* harmony export */ });
/* harmony import */ var _utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/resolve-value.mjs */ "./node_modules/framer-motion/dist/es/utils/resolve-value.mjs");
/* harmony import */ var _is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-motion-value.mjs */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");



/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */
function resolveMotionValue(value) {
    var unwrappedValue = (0,_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(value) ? value.get() : value;
    return (0,_utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isCustomValue)(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}




/***/ }),

/***/ "./node_modules/framesync/dist/es/create-render-step.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/framesync/dist/es/create-render-step.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRenderStep": () => (/* binding */ createRenderStep)
/* harmony export */ });
function createRenderStep(runNextFrame) {
    let toRun = [];
    let toRunNextFrame = [];
    let numToRun = 0;
    let isProcessing = false;
    let flushNextFrame = false;
    const toKeepAlive = new WeakSet();
    const step = {
        schedule: (callback, keepAlive = false, immediate = false) => {
            const addToCurrentFrame = immediate && isProcessing;
            const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            if (buffer.indexOf(callback) === -1) {
                buffer.push(callback);
                if (addToCurrentFrame && isProcessing)
                    numToRun = toRun.length;
            }
            return callback;
        },
        cancel: (callback) => {
            const index = toRunNextFrame.indexOf(callback);
            if (index !== -1)
                toRunNextFrame.splice(index, 1);
            toKeepAlive.delete(callback);
        },
        process: (frameData) => {
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
            toRunNextFrame.length = 0;
            numToRun = toRun.length;
            if (numToRun) {
                for (let i = 0; i < numToRun; i++) {
                    const callback = toRun[i];
                    callback(frameData);
                    if (toKeepAlive.has(callback)) {
                        step.schedule(callback);
                        runNextFrame();
                    }
                }
            }
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        },
    };
    return step;
}




/***/ }),

/***/ "./node_modules/framesync/dist/es/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/framesync/dist/es/index.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancelSync": () => (/* binding */ cancelSync),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "flushSync": () => (/* binding */ flushSync),
/* harmony export */   "getFrameData": () => (/* binding */ getFrameData)
/* harmony export */ });
/* harmony import */ var _on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-next-frame.mjs */ "./node_modules/framesync/dist/es/on-next-frame.mjs");
/* harmony import */ var _create_render_step_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-render-step.mjs */ "./node_modules/framesync/dist/es/create-render-step.mjs");



const maxElapsed = 40;
let useDefaultElapsed = true;
let runNextFrame = false;
let isProcessing = false;
const frame = {
    delta: 0,
    timestamp: 0,
};
const stepsOrder = [
    "read",
    "update",
    "preRender",
    "render",
    "postRender",
];
const steps = stepsOrder.reduce((acc, key) => {
    acc[key] = (0,_create_render_step_mjs__WEBPACK_IMPORTED_MODULE_1__.createRenderStep)(() => (runNextFrame = true));
    return acc;
}, {});
const sync = stepsOrder.reduce((acc, key) => {
    const step = steps[key];
    acc[key] = (process, keepAlive = false, immediate = false) => {
        if (!runNextFrame)
            startLoop();
        return step.schedule(process, keepAlive, immediate);
    };
    return acc;
}, {});
const cancelSync = stepsOrder.reduce((acc, key) => {
    acc[key] = steps[key].cancel;
    return acc;
}, {});
const flushSync = stepsOrder.reduce((acc, key) => {
    acc[key] = () => steps[key].process(frame);
    return acc;
}, {});
const processStep = (stepId) => steps[stepId].process(frame);
const processFrame = (timestamp) => {
    runNextFrame = false;
    frame.delta = useDefaultElapsed
        ? _on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.defaultTimestep
        : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (runNextFrame) {
        useDefaultElapsed = false;
        (0,_on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.onNextFrame)(processFrame);
    }
};
const startLoop = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing)
        (0,_on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.onNextFrame)(processFrame);
};
const getFrameData = () => frame;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sync);



/***/ }),

/***/ "./node_modules/framesync/dist/es/on-next-frame.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/framesync/dist/es/on-next-frame.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultTimestep": () => (/* binding */ defaultTimestep),
/* harmony export */   "onNextFrame": () => (/* binding */ onNextFrame)
/* harmony export */ });
const defaultTimestep = (1 / 60) * 1000;
const getCurrentTime = typeof performance !== "undefined"
    ? () => performance.now()
    : () => Date.now();
const onNextFrame = typeof window !== "undefined"
    ? (callback) => window.requestAnimationFrame(callback)
    : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/generators/decay.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/generators/decay.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decay": () => (/* binding */ decay)
/* harmony export */ });
function decay({ velocity = 0, from = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget, }) {
    const state = { done: false, value: from };
    let amplitude = power * velocity;
    const ideal = from + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    if (target !== ideal)
        amplitude = target - from;
    return {
        next: (t) => {
            const delta = -amplitude * Math.exp(-t / timeConstant);
            state.done = !(delta > restDelta || delta < -restDelta);
            state.value = state.done ? target : target + delta;
            return state;
        },
        flipTarget: () => { },
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/generators/keyframes.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/generators/keyframes.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertOffsetToTimes": () => (/* binding */ convertOffsetToTimes),
/* harmony export */   "defaultEasing": () => (/* binding */ defaultEasing),
/* harmony export */   "defaultOffset": () => (/* binding */ defaultOffset),
/* harmony export */   "keyframes": () => (/* binding */ keyframes)
/* harmony export */ });
/* harmony import */ var _utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/interpolate.mjs */ "./node_modules/popmotion/dist/es/utils/interpolate.mjs");
/* harmony import */ var _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../easing/index.mjs */ "./node_modules/popmotion/dist/es/easing/index.mjs");



function defaultEasing(values, easing) {
    return values.map(() => easing || _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__.easeInOut).splice(0, values.length - 1);
}
function defaultOffset(values) {
    const numValues = values.length;
    return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
}
function keyframes({ from = 0, to = 1, ease, offset, duration = 300, }) {
    const state = { done: false, value: from };
    const values = Array.isArray(to) ? to : [from, to];
    const times = convertOffsetToTimes(offset && offset.length === values.length
        ? offset
        : defaultOffset(values), duration);
    function createInterpolator() {
        return (0,_utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_1__.interpolate)(times, values, {
            ease: Array.isArray(ease) ? ease : defaultEasing(values, ease),
        });
    }
    let interpolator = createInterpolator();
    return {
        next: (t) => {
            state.value = interpolator(t);
            state.done = t >= duration;
            return state;
        },
        flipTarget: () => {
            values.reverse();
            interpolator = createInterpolator();
        },
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/generators/spring.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/generators/spring.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "spring": () => (/* binding */ spring)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_find_spring_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/find-spring.mjs */ "./node_modules/popmotion/dist/es/animations/utils/find-spring.mjs");



const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = Object.assign({ velocity: 0.0, stiffness: 100, damping: 10, mass: 1.0, isResolvedFromDuration: false }, options);
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        const derived = (0,_utils_find_spring_mjs__WEBPACK_IMPORTED_MODULE_0__.findSpring)(options);
        springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), { velocity: 0.0, mass: 1.0 });
        springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
}
function spring(_a) {
    var { from = 0.0, to = 1.0, restSpeed = 2, restDelta } = _a, options = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["from", "to", "restSpeed", "restDelta"]);
    const state = { done: false, value: from };
    let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration, } = getSpringOptions(options);
    let resolveSpring = zero;
    let resolveVelocity = zero;
    function createSpring() {
        const initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        const initialDelta = to - from;
        const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
        const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
        if (restDelta === undefined) {
            restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
        }
        if (dampingRatio < 1) {
            const angularFreq = (0,_utils_find_spring_mjs__WEBPACK_IMPORTED_MODULE_0__.calcAngularFreq)(undampedAngularFreq, dampingRatio);
            resolveSpring = (t) => {
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return (to -
                    envelope *
                        (((initialVelocity +
                            dampingRatio * undampedAngularFreq * initialDelta) /
                            angularFreq) *
                            Math.sin(angularFreq * t) +
                            initialDelta * Math.cos(angularFreq * t)));
            };
            resolveVelocity = (t) => {
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return (dampingRatio *
                    undampedAngularFreq *
                    envelope *
                    ((Math.sin(angularFreq * t) *
                        (initialVelocity +
                            dampingRatio *
                                undampedAngularFreq *
                                initialDelta)) /
                        angularFreq +
                        initialDelta * Math.cos(angularFreq * t)) -
                    envelope *
                        (Math.cos(angularFreq * t) *
                            (initialVelocity +
                                dampingRatio *
                                    undampedAngularFreq *
                                    initialDelta) -
                            angularFreq *
                                initialDelta *
                                Math.sin(angularFreq * t)));
            };
        }
        else if (dampingRatio === 1) {
            resolveSpring = (t) => to -
                Math.exp(-undampedAngularFreq * t) *
                    (initialDelta +
                        (initialVelocity + undampedAngularFreq * initialDelta) *
                            t);
        }
        else {
            const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
            resolveSpring = (t) => {
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                const freqForT = Math.min(dampedAngularFreq * t, 300);
                return (to -
                    (envelope *
                        ((initialVelocity +
                            dampingRatio * undampedAngularFreq * initialDelta) *
                            Math.sinh(freqForT) +
                            dampedAngularFreq *
                                initialDelta *
                                Math.cosh(freqForT))) /
                        dampedAngularFreq);
            };
        }
    }
    createSpring();
    return {
        next: (t) => {
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                const currentVelocity = resolveVelocity(t) * 1000;
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold;
            }
            else {
                state.done = t >= duration;
            }
            state.value = state.done ? to : current;
            return state;
        },
        flipTarget: () => {
            velocity = -velocity;
            [from, to] = [to, from];
            createSpring();
        },
    };
}
spring.needsInterpolation = (a, b) => typeof a === "string" || typeof b === "string";
const zero = (_t) => 0;




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animate": () => (/* binding */ animate)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_detect_animation_from_options_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/detect-animation-from-options.mjs */ "./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.mjs");
/* harmony import */ var _utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/interpolate.mjs */ "./node_modules/popmotion/dist/es/utils/interpolate.mjs");
/* harmony import */ var _utils_elapsed_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/elapsed.mjs */ "./node_modules/popmotion/dist/es/animations/utils/elapsed.mjs");






const framesync = (update) => {
    const passTimestamp = ({ delta }) => update(delta);
    return {
        start: () => framesync__WEBPACK_IMPORTED_MODULE_0__["default"].update(passTimestamp, true),
        stop: () => framesync__WEBPACK_IMPORTED_MODULE_0__.cancelSync.update(passTimestamp),
    };
};
function animate(_a) {
    var _b, _c;
    var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let { to } = options;
    let driverControls;
    let repeatCount = 0;
    let computedDuration = options.duration;
    let latest;
    let isComplete = false;
    let isForwardPlayback = true;
    let interpolateFromNumber;
    const animator = (0,_utils_detect_animation_from_options_mjs__WEBPACK_IMPORTED_MODULE_2__.detectAnimationFromOptions)(options);
    if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
        interpolateFromNumber = (0,_utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_3__.interpolate)([0, 100], [from, to], {
            clamp: false,
        });
        from = 0;
        to = 100;
    }
    const animation = animator(Object.assign(Object.assign({}, options), { from, to }));
    function repeat() {
        repeatCount++;
        if (repeatType === "reverse") {
            isForwardPlayback = repeatCount % 2 === 0;
            elapsed = (0,_utils_elapsed_mjs__WEBPACK_IMPORTED_MODULE_4__.reverseElapsed)(elapsed, computedDuration, repeatDelay, isForwardPlayback);
        }
        else {
            elapsed = (0,_utils_elapsed_mjs__WEBPACK_IMPORTED_MODULE_4__.loopElapsed)(elapsed, computedDuration, repeatDelay);
            if (repeatType === "mirror")
                animation.flipTarget();
        }
        isComplete = false;
        onRepeat && onRepeat();
    }
    function complete() {
        driverControls.stop();
        onComplete && onComplete();
    }
    function update(delta) {
        if (!isForwardPlayback)
            delta = -delta;
        elapsed += delta;
        if (!isComplete) {
            const state = animation.next(Math.max(0, elapsed));
            latest = state.value;
            if (interpolateFromNumber)
                latest = interpolateFromNumber(latest);
            isComplete = isForwardPlayback ? state.done : elapsed <= 0;
        }
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
        if (isComplete) {
            if (repeatCount === 0)
                computedDuration !== null && computedDuration !== void 0 ? computedDuration : (computedDuration = elapsed);
            if (repeatCount < repeatMax) {
                (0,_utils_elapsed_mjs__WEBPACK_IMPORTED_MODULE_4__.hasRepeatDelayElapsed)(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
            }
            else {
                complete();
            }
        }
    }
    function play() {
        onPlay === null || onPlay === void 0 ? void 0 : onPlay();
        driverControls = driver(update);
        driverControls.start();
    }
    autoplay && play();
    return {
        stop: () => {
            onStop === null || onStop === void 0 ? void 0 : onStop();
            driverControls.stop();
        },
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/inertia.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/inertia.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inertia": () => (/* binding */ inertia)
/* harmony export */ });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/popmotion/dist/es/animations/index.mjs");
/* harmony import */ var _utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/velocity-per-second.mjs */ "./node_modules/popmotion/dist/es/utils/velocity-per-second.mjs");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.mjs");




function inertia({ from = 0, velocity = 0, min, max, power = 0.8, timeConstant = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop, }) {
    let currentAnimation;
    function isOutOfBounds(v) {
        return (min !== undefined && v < min) || (max !== undefined && v > max);
    }
    function boundaryNearest(v) {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    }
    function startAnimation(options) {
        currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
        currentAnimation = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.animate)(Object.assign(Object.assign({}, options), { driver, onUpdate: (v) => {
                var _a;
                onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
                (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
            }, onComplete,
            onStop }));
    }
    function startSpring(options) {
        startAnimation(Object.assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta }, options));
    }
    if (isOutOfBounds(from)) {
        startSpring({ from, velocity, to: boundaryNearest(from) });
    }
    else {
        let target = power * velocity + from;
        if (typeof modifyTarget !== "undefined")
            target = modifyTarget(target);
        const boundary = boundaryNearest(target);
        const heading = boundary === min ? -1 : 1;
        let prev;
        let current;
        const checkBoundary = (v) => {
            prev = current;
            current = v;
            velocity = (0,_utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_2__.velocityPerSecond)(v - prev, (0,framesync__WEBPACK_IMPORTED_MODULE_0__.getFrameData)().delta);
            if ((heading === 1 && v > boundary) ||
                (heading === -1 && v < boundary)) {
                startSpring({ from: v, to: boundary, velocity });
            }
        };
        startAnimation({
            type: "decay",
            from,
            velocity,
            timeConstant,
            power,
            restDelta,
            modifyTarget,
            onUpdate: isOutOfBounds(target) ? checkBoundary : undefined,
        });
    }
    return {
        stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop(),
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detectAnimationFromOptions": () => (/* binding */ detectAnimationFromOptions)
/* harmony export */ });
/* harmony import */ var _generators_spring_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generators/spring.mjs */ "./node_modules/popmotion/dist/es/animations/generators/spring.mjs");
/* harmony import */ var _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/keyframes.mjs */ "./node_modules/popmotion/dist/es/animations/generators/keyframes.mjs");
/* harmony import */ var _generators_decay_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generators/decay.mjs */ "./node_modules/popmotion/dist/es/animations/generators/decay.mjs");




const types = { keyframes: _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_0__.keyframes, spring: _generators_spring_mjs__WEBPACK_IMPORTED_MODULE_1__.spring, decay: _generators_decay_mjs__WEBPACK_IMPORTED_MODULE_2__.decay };
function detectAnimationFromOptions(config) {
    if (Array.isArray(config.to)) {
        return _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_0__.keyframes;
    }
    else if (types[config.type]) {
        return types[config.type];
    }
    const keys = new Set(Object.keys(config));
    if (keys.has("ease") ||
        (keys.has("duration") && !keys.has("dampingRatio"))) {
        return _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_0__.keyframes;
    }
    else if (keys.has("dampingRatio") ||
        keys.has("stiffness") ||
        keys.has("mass") ||
        keys.has("damping") ||
        keys.has("restSpeed") ||
        keys.has("restDelta")) {
        return _generators_spring_mjs__WEBPACK_IMPORTED_MODULE_1__.spring;
    }
    return _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_0__.keyframes;
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/utils/elapsed.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/utils/elapsed.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasRepeatDelayElapsed": () => (/* binding */ hasRepeatDelayElapsed),
/* harmony export */   "loopElapsed": () => (/* binding */ loopElapsed),
/* harmony export */   "reverseElapsed": () => (/* binding */ reverseElapsed)
/* harmony export */ });
function loopElapsed(elapsed, duration, delay = 0) {
    return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
    return isForwardPlayback
        ? loopElapsed(duration + -elapsed, duration, delay)
        : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
    return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/utils/find-spring.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/utils/find-spring.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcAngularFreq": () => (/* binding */ calcAngularFreq),
/* harmony export */   "findSpring": () => (/* binding */ findSpring),
/* harmony export */   "maxDamping": () => (/* binding */ maxDamping),
/* harmony export */   "maxDuration": () => (/* binding */ maxDuration),
/* harmony export */   "minDamping": () => (/* binding */ minDamping),
/* harmony export */   "minDuration": () => (/* binding */ minDuration)
/* harmony export */ });
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/clamp.mjs */ "./node_modules/popmotion/dist/es/utils/clamp.mjs");



const safeMin = 0.001;
const minDuration = 0.01;
const maxDuration = 10.0;
const minDamping = 0.05;
const maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1, }) {
    let envelope;
    let derivative;
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.warning)(duration <= maxDuration * 1000, "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    dampingRatio = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_1__.clamp)(minDamping, maxDamping, dampingRatio);
    duration = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_1__.clamp)(minDuration, maxDuration, duration / 1000);
    if (dampingRatio < 1) {
        envelope = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - (a / b) * c;
        };
        derivative = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return (factor * ((d - e) * f)) / g;
        };
    }
    else {
        envelope = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = duration * 1000;
    if (isNaN(undampedFreq)) {
        return {
            stiffness: 100,
            damping: 10,
            duration,
        };
    }
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration,
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/cubic-bezier.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/cubic-bezier.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cubicBezier": () => (/* binding */ cubicBezier)
/* harmony export */ });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/popmotion/dist/es/easing/index.mjs");


const a = (a1, a2) => 1.0 - 3.0 * a2 + 3.0 * a1;
const b = (a1, a2) => 3.0 * a2 - 6.0 * a1;
const c = (a1) => 3.0 * a1;
const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
const getSlope = (t, a1, a2) => 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        }
        else {
            aA = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
const newtonIterations = 8;
const newtonMinSlope = 0.001;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (let i = 0; i < newtonIterations; ++i) {
        const currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
            return aGuessT;
        }
        const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
const kSplineTableSize = 11;
const kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2)
        return _index_mjs__WEBPACK_IMPORTED_MODULE_0__.linear;
    const sampleValues = new Float32Array(kSplineTableSize);
    for (let i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
        let intervalStart = 0.0;
        let currentSample = 1;
        const lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        const dist = (aX - sampleValues[currentSample]) /
            (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        const guessForT = intervalStart + dist * kSampleStepSize;
        const initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= newtonMinSlope) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        }
        else if (initialSlope === 0.0) {
            return guessForT;
        }
        else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
    }
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/index.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/index.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anticipate": () => (/* binding */ anticipate),
/* harmony export */   "backIn": () => (/* binding */ backIn),
/* harmony export */   "backInOut": () => (/* binding */ backInOut),
/* harmony export */   "backOut": () => (/* binding */ backOut),
/* harmony export */   "bounceIn": () => (/* binding */ bounceIn),
/* harmony export */   "bounceInOut": () => (/* binding */ bounceInOut),
/* harmony export */   "bounceOut": () => (/* binding */ bounceOut),
/* harmony export */   "circIn": () => (/* binding */ circIn),
/* harmony export */   "circInOut": () => (/* binding */ circInOut),
/* harmony export */   "circOut": () => (/* binding */ circOut),
/* harmony export */   "easeIn": () => (/* binding */ easeIn),
/* harmony export */   "easeInOut": () => (/* binding */ easeInOut),
/* harmony export */   "easeOut": () => (/* binding */ easeOut),
/* harmony export */   "linear": () => (/* binding */ linear)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/popmotion/dist/es/easing/utils.mjs");


const DEFAULT_OVERSHOOT_STRENGTH = 1.525;
const BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
const BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
const BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
const linear = p => p;
const easeIn = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.createExpoIn)(2);
const easeOut = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(easeIn);
const easeInOut = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.mirrorEasing)(easeIn);
const circIn = p => 1 - Math.sin(Math.acos(p));
const circOut = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(circIn);
const circInOut = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.mirrorEasing)(circOut);
const backIn = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.createBackIn)(DEFAULT_OVERSHOOT_STRENGTH);
const backOut = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(backIn);
const backInOut = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.mirrorEasing)(backIn);
const anticipate = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.createAnticipate)(DEFAULT_OVERSHOOT_STRENGTH);
const ca = 4356.0 / 361.0;
const cb = 35442.0 / 1805.0;
const cc = 16061.0 / 1805.0;
const bounceOut = (p) => {
    if (p === 1 || p === 0)
        return p;
    const p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD
        ? 7.5625 * p2
        : p < BOUNCE_SECOND_THRESHOLD
            ? 9.075 * p2 - 9.9 * p + 3.4
            : p < BOUNCE_THIRD_THRESHOLD
                ? ca * p2 - cb * p + cc
                : 10.8 * p * p - 20.52 * p + 10.72;
};
const bounceIn = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(bounceOut);
const bounceInOut = (p) => p < 0.5
    ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0))
    : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;




/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/utils.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/utils.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAnticipate": () => (/* binding */ createAnticipate),
/* harmony export */   "createBackIn": () => (/* binding */ createBackIn),
/* harmony export */   "createExpoIn": () => (/* binding */ createExpoIn),
/* harmony export */   "mirrorEasing": () => (/* binding */ mirrorEasing),
/* harmony export */   "reverseEasing": () => (/* binding */ reverseEasing)
/* harmony export */ });
const reverseEasing = easing => p => 1 - easing(1 - p);
const mirrorEasing = easing => p => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
const createExpoIn = (power) => p => Math.pow(p, power);
const createBackIn = (power) => p => p * p * ((power + 1) * p - power);
const createAnticipate = (power) => {
    const backEasing = createBackIn(power);
    return p => (p *= 2) < 1
        ? 0.5 * backEasing(p)
        : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/clamp.mjs":
/*!********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/clamp.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ clamp)
/* harmony export */ });
const clamp = (min, max, v) => Math.min(Math.max(v, min), max);




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/distance.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/distance.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distance": () => (/* binding */ distance)
/* harmony export */ });
/* harmony import */ var _is_point_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-point.mjs */ "./node_modules/popmotion/dist/es/utils/is-point.mjs");
/* harmony import */ var _is_point_3d_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-point-3d.mjs */ "./node_modules/popmotion/dist/es/utils/is-point-3d.mjs");
/* harmony import */ var _inc_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inc.mjs */ "./node_modules/popmotion/dist/es/utils/inc.mjs");




const distance1D = (a, b) => Math.abs(a - b);
function distance(a, b) {
    if ((0,_inc_mjs__WEBPACK_IMPORTED_MODULE_0__.isNum)(a) && (0,_inc_mjs__WEBPACK_IMPORTED_MODULE_0__.isNum)(b)) {
        return distance1D(a, b);
    }
    else if ((0,_is_point_mjs__WEBPACK_IMPORTED_MODULE_1__.isPoint)(a) && (0,_is_point_mjs__WEBPACK_IMPORTED_MODULE_1__.isPoint)(b)) {
        const xDelta = distance1D(a.x, b.x);
        const yDelta = distance1D(a.y, b.y);
        const zDelta = (0,_is_point_3d_mjs__WEBPACK_IMPORTED_MODULE_2__.isPoint3D)(a) && (0,_is_point_3d_mjs__WEBPACK_IMPORTED_MODULE_2__.isPoint3D)(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hslaToRgba": () => (/* binding */ hslaToRgba)
/* harmony export */ });
function hueToRgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
        red = green = blue = lightness;
    }
    else {
        const q = lightness < 0.5
            ? lightness * (1 + saturation)
            : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha,
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/inc.mjs":
/*!******************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/inc.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNum": () => (/* binding */ isNum),
/* harmony export */   "zeroPoint": () => (/* binding */ zeroPoint)
/* harmony export */ });
const zeroPoint = {
    x: 0,
    y: 0,
    z: 0
};
const isNum = (v) => typeof v === 'number';




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/interpolate.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/interpolate.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interpolate": () => (/* binding */ interpolate)
/* harmony export */ });
/* harmony import */ var _progress_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress.mjs */ "./node_modules/popmotion/dist/es/utils/progress.mjs");
/* harmony import */ var _mix_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mix.mjs */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var _mix_color_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mix-color.mjs */ "./node_modules/popmotion/dist/es/utils/mix-color.mjs");
/* harmony import */ var _mix_complex_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mix-complex.mjs */ "./node_modules/popmotion/dist/es/utils/mix-complex.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.mjs");
/* harmony import */ var _clamp_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clamp.mjs */ "./node_modules/popmotion/dist/es/utils/clamp.mjs");
/* harmony import */ var _pipe_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe.mjs */ "./node_modules/popmotion/dist/es/utils/pipe.mjs");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");









const mixNumber = (from, to) => (p) => (0,_mix_mjs__WEBPACK_IMPORTED_MODULE_1__.mix)(from, to, p);
function detectMixerFactory(v) {
    if (typeof v === 'number') {
        return mixNumber;
    }
    else if (typeof v === 'string') {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_2__.color.test(v)) {
            return _mix_color_mjs__WEBPACK_IMPORTED_MODULE_3__.mixColor;
        }
        else {
            return _mix_complex_mjs__WEBPACK_IMPORTED_MODULE_4__.mixComplex;
        }
    }
    else if (Array.isArray(v)) {
        return _mix_complex_mjs__WEBPACK_IMPORTED_MODULE_4__.mixArray;
    }
    else if (typeof v === 'object') {
        return _mix_complex_mjs__WEBPACK_IMPORTED_MODULE_4__.mixObject;
    }
}
function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || detectMixerFactory(output[0]);
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = (0,_pipe_mjs__WEBPACK_IMPORTED_MODULE_5__.pipe)(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
function fastInterpolate([from, to], [mixer]) {
    return (v) => mixer((0,_progress_mjs__WEBPACK_IMPORTED_MODULE_6__.progress)(from, to, v));
}
function slowInterpolate(input, mixers) {
    const inputLength = input.length;
    const lastInputIndex = inputLength - 1;
    return (v) => {
        let mixerIndex = 0;
        let foundMixerIndex = false;
        if (v <= input[0]) {
            foundMixerIndex = true;
        }
        else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            let i = 1;
            for (; i < inputLength; i++) {
                if (input[i] > v || i === lastInputIndex) {
                    break;
                }
            }
            mixerIndex = i - 1;
        }
        const progressInRange = (0,_progress_mjs__WEBPACK_IMPORTED_MODULE_6__.progress)(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(inputLength === output.length, 'Both input and output ranges must be the same length');
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
    if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const interpolator = inputLength === 2
        ? fastInterpolate(input, mixers)
        : slowInterpolate(input, mixers);
    return isClamp
        ? (v) => interpolator((0,_clamp_mjs__WEBPACK_IMPORTED_MODULE_7__.clamp)(input[0], input[inputLength - 1], v))
        : interpolator;
}




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/is-point-3d.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/is-point-3d.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPoint3D": () => (/* binding */ isPoint3D)
/* harmony export */ });
/* harmony import */ var _is_point_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-point.mjs */ "./node_modules/popmotion/dist/es/utils/is-point.mjs");


const isPoint3D = (point) => (0,_is_point_mjs__WEBPACK_IMPORTED_MODULE_0__.isPoint)(point) && point.hasOwnProperty('z');




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/is-point.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/is-point.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPoint": () => (/* binding */ isPoint)
/* harmony export */ });
const isPoint = (point) => point.hasOwnProperty('x') && point.hasOwnProperty('y');




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/mix-color.mjs":
/*!************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/mix-color.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mixColor": () => (/* binding */ mixColor),
/* harmony export */   "mixLinearColor": () => (/* binding */ mixLinearColor)
/* harmony export */ });
/* harmony import */ var _mix_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mix.mjs */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/hex.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/rgba.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/hsla.mjs");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _hsla_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hsla-to-rgba.mjs */ "./node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs");





const mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    const toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
const colorTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_1__.hex, style_value_types__WEBPACK_IMPORTED_MODULE_2__.rgba, style_value_types__WEBPACK_IMPORTED_MODULE_3__.hsla];
const getColorType = (v) => colorTypes.find((type) => type.test(v));
const notAnimatable = (color) => `'${color}' is not an animatable color. Use the equivalent color code instead.`;
const mixColor = (from, to) => {
    let fromColorType = getColorType(from);
    let toColorType = getColorType(to);
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!fromColorType, notAnimatable(from));
    (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!toColorType, notAnimatable(to));
    let fromColor = fromColorType.parse(from);
    let toColor = toColorType.parse(to);
    if (fromColorType === style_value_types__WEBPACK_IMPORTED_MODULE_3__.hsla) {
        fromColor = (0,_hsla_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_4__.hslaToRgba)(fromColor);
        fromColorType = style_value_types__WEBPACK_IMPORTED_MODULE_2__.rgba;
    }
    if (toColorType === style_value_types__WEBPACK_IMPORTED_MODULE_3__.hsla) {
        toColor = (0,_hsla_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_4__.hslaToRgba)(toColor);
        toColorType = style_value_types__WEBPACK_IMPORTED_MODULE_2__.rgba;
    }
    const blended = Object.assign({}, fromColor);
    return (v) => {
        for (const key in blended) {
            if (key !== "alpha") {
                blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = (0,_mix_mjs__WEBPACK_IMPORTED_MODULE_5__.mix)(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/mix-complex.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/mix-complex.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mixArray": () => (/* binding */ mixArray),
/* harmony export */   "mixComplex": () => (/* binding */ mixComplex),
/* harmony export */   "mixObject": () => (/* binding */ mixObject)
/* harmony export */ });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/color/index.mjs");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/complex/index.mjs");
/* harmony import */ var _mix_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mix.mjs */ "./node_modules/popmotion/dist/es/utils/mix.mjs");
/* harmony import */ var _mix_color_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mix-color.mjs */ "./node_modules/popmotion/dist/es/utils/mix-color.mjs");
/* harmony import */ var _inc_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inc.mjs */ "./node_modules/popmotion/dist/es/utils/inc.mjs");
/* harmony import */ var _pipe_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe.mjs */ "./node_modules/popmotion/dist/es/utils/pipe.mjs");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");







function getMixer(origin, target) {
    if ((0,_inc_mjs__WEBPACK_IMPORTED_MODULE_1__.isNum)(origin)) {
        return (v) => (0,_mix_mjs__WEBPACK_IMPORTED_MODULE_2__.mix)(origin, target, v);
    }
    else if (style_value_types__WEBPACK_IMPORTED_MODULE_3__.color.test(origin)) {
        return (0,_mix_color_mjs__WEBPACK_IMPORTED_MODULE_4__.mixColor)(origin, target);
    }
    else {
        return mixComplex(origin, target);
    }
}
const mixArray = (from, to) => {
    const output = [...from];
    const numValues = output.length;
    const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
    return (v) => {
        for (let i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
const mixObject = (origin, target) => {
    const output = Object.assign(Object.assign({}, origin), target);
    const blendValue = {};
    for (const key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return (v) => {
        for (const key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
function analyse(value) {
    const parsed = style_value_types__WEBPACK_IMPORTED_MODULE_5__.complex.parse(value);
    const numValues = parsed.length;
    let numNumbers = 0;
    let numRGB = 0;
    let numHSL = 0;
    for (let i = 0; i < numValues; i++) {
        if (numNumbers || typeof parsed[i] === "number") {
            numNumbers++;
        }
        else {
            if (parsed[i].hue !== undefined) {
                numHSL++;
            }
            else {
                numRGB++;
            }
        }
    }
    return { parsed, numNumbers, numRGB, numHSL };
}
const mixComplex = (origin, target) => {
    const template = style_value_types__WEBPACK_IMPORTED_MODULE_5__.complex.createTransformer(target);
    const originStats = analyse(origin);
    const targetStats = analyse(target);
    const canInterpolate = originStats.numHSL === targetStats.numHSL &&
        originStats.numRGB === targetStats.numRGB &&
        originStats.numNumbers >= targetStats.numNumbers;
    if (canInterpolate) {
        return (0,_pipe_mjs__WEBPACK_IMPORTED_MODULE_6__.pipe)(mixArray(originStats.parsed, targetStats.parsed), template);
    }
    else {
        (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.warning)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
        return (p) => `${p > 0 ? target : origin}`;
    }
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/mix.mjs":
/*!******************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/mix.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mix": () => (/* binding */ mix)
/* harmony export */ });
const mix = (from, to, progress) => -progress * from + progress * to + from;




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/pipe.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/pipe.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pipe": () => (/* binding */ pipe)
/* harmony export */ });
const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/progress.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/progress.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "progress": () => (/* binding */ progress)
/* harmony export */ });
const progress = (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};




/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/velocity-per-second.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/velocity-per-second.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "velocityPerSecond": () => (/* binding */ velocityPerSecond)
/* harmony export */ });
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/hex.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/hex.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hex": () => (/* binding */ hex)
/* harmony export */ });
/* harmony import */ var _rgba_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgba.mjs */ "./node_modules/style-value-types/dist/es/color/rgba.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/style-value-types/dist/es/color/utils.mjs");



function parseHex(v) {
    let r = '';
    let g = '';
    let b = '';
    let a = '';
    if (v.length > 5) {
        r = v.substr(1, 2);
        g = v.substr(3, 2);
        b = v.substr(5, 2);
        a = v.substr(7, 2);
    }
    else {
        r = v.substr(1, 1);
        g = v.substr(2, 1);
        b = v.substr(3, 1);
        a = v.substr(4, 1);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
    };
}
const hex = {
    test: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isColorString)('#'),
    parse: parseHex,
    transform: _rgba_mjs__WEBPACK_IMPORTED_MODULE_1__.rgba.transform,
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/hsla.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/hsla.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hsla": () => (/* binding */ hsla)
/* harmony export */ });
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../numbers/index.mjs */ "./node_modules/style-value-types/dist/es/numbers/index.mjs");
/* harmony import */ var _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/units.mjs */ "./node_modules/style-value-types/dist/es/numbers/units.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/style-value-types/dist/es/color/utils.mjs");





const hsla = {
    test: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isColorString)('hsl', 'hue'),
    parse: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.splitColor)('hue', 'saturation', 'lightness'),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
        return ('hsla(' +
            Math.round(hue) +
            ', ' +
            _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(saturation)) +
            ', ' +
            _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(lightness)) +
            ', ' +
            (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_3__.alpha.transform(alpha$1)) +
            ')');
    },
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/index.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/index.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "color": () => (/* binding */ color)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");
/* harmony import */ var _hex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hex.mjs */ "./node_modules/style-value-types/dist/es/color/hex.mjs");
/* harmony import */ var _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hsla.mjs */ "./node_modules/style-value-types/dist/es/color/hsla.mjs");
/* harmony import */ var _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rgba.mjs */ "./node_modules/style-value-types/dist/es/color/rgba.mjs");





const color = {
    test: (v) => _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v) || _hex_mjs__WEBPACK_IMPORTED_MODULE_1__.hex.test(v) || _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v),
    parse: (v) => {
        if (_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v)) {
            return _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.parse(v);
        }
        else if (_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v)) {
            return _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.parse(v);
        }
        else {
            return _hex_mjs__WEBPACK_IMPORTED_MODULE_1__.hex.parse(v);
        }
    },
    transform: (v) => {
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.isString)(v)
            ? v
            : v.hasOwnProperty('red')
                ? _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.transform(v)
                : _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.transform(v);
    },
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/rgba.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/rgba.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rgbUnit": () => (/* binding */ rgbUnit),
/* harmony export */   "rgba": () => (/* binding */ rgba)
/* harmony export */ });
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/index.mjs */ "./node_modules/style-value-types/dist/es/numbers/index.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/style-value-types/dist/es/color/utils.mjs");




const clampRgbUnit = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 255);
const rgbUnit = Object.assign(Object.assign({}, _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.number), { transform: (v) => Math.round(clampRgbUnit(v)) });
const rgba = {
    test: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.isColorString)('rgb', 'red'),
    parse: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.splitColor)('red', 'green', 'blue'),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => 'rgba(' +
        rgbUnit.transform(red) +
        ', ' +
        rgbUnit.transform(green) +
        ', ' +
        rgbUnit.transform(blue) +
        ', ' +
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.sanitize)(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.alpha.transform(alpha$1)) +
        ')',
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/utils.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/utils.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isColorString": () => (/* binding */ isColorString),
/* harmony export */   "splitColor": () => (/* binding */ splitColor)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");


const isColorString = (type, testProp) => (v) => {
    return Boolean(((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && _utils_mjs__WEBPACK_IMPORTED_MODULE_0__.singleColorRegex.test(v) && v.startsWith(type)) ||
        (testProp && Object.prototype.hasOwnProperty.call(v, testProp)));
};
const splitColor = (aName, bName, cName) => (v) => {
    if (!(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isString)(v))
        return v;
    const [a, b, c, alpha] = v.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex);
    return {
        [aName]: parseFloat(a),
        [bName]: parseFloat(b),
        [cName]: parseFloat(c),
        alpha: alpha !== undefined ? parseFloat(alpha) : 1,
    };
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/complex/filter.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/complex/filter.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filter": () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/style-value-types/dist/es/complex/index.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");



const maxDefaults = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function applyDefaultFilter(v) {
    let [name, value] = v.slice(0, -1).split('(');
    if (name === 'drop-shadow')
        return v;
    const [number] = value.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex) || [];
    if (!number)
        return v;
    const unit = value.replace(number, '');
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value)
        defaultValue *= 100;
    return name + '(' + defaultValue + unit + ')';
}
const functionRegex = /([a-z-]*)\(.*?\)/g;
const filter = Object.assign(Object.assign({}, _index_mjs__WEBPACK_IMPORTED_MODULE_1__.complex), { getAnimatableNone: (v) => {
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(' ') : v;
    } });




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/complex/index.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/complex/index.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "complex": () => (/* binding */ complex)
/* harmony export */ });
/* harmony import */ var _color_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color/index.mjs */ "./node_modules/style-value-types/dist/es/color/index.mjs");
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../numbers/index.mjs */ "./node_modules/style-value-types/dist/es/numbers/index.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");




const colorToken = '${c}';
const numberToken = '${n}';
function test(v) {
    var _a, _b, _c, _d;
    return (isNaN(v) &&
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isString)(v) &&
        ((_b = (_a = v.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0);
}
function analyse(v) {
    if (typeof v === 'number')
        v = `${v}`;
    const values = [];
    let numColors = 0;
    const colors = v.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.colorRegex);
    if (colors) {
        numColors = colors.length;
        v = v.replace(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.colorRegex, colorToken);
        values.push(...colors.map(_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color.parse));
    }
    const numbers = v.match(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex);
    if (numbers) {
        v = v.replace(_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex, numberToken);
        values.push(...numbers.map(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_2__.number.parse));
    }
    return { values, numColors, tokenised: v };
}
function parse(v) {
    return analyse(v).values;
}
function createTransformer(v) {
    const { values, numColors, tokenised } = analyse(v);
    const numValues = values.length;
    return (v) => {
        let output = tokenised;
        for (let i = 0; i < numValues; i++) {
            output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? _color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color.transform(v[i]) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.sanitize)(v[i]));
        }
        return output;
    };
}
const convertNumbersToZero = (v) => typeof v === 'number' ? 0 : v;
function getAnimatableNone(v) {
    const parsed = parse(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = { test, parse, createTransformer, getAnimatableNone };




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/numbers/index.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/numbers/index.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "number": () => (/* binding */ number),
/* harmony export */   "scale": () => (/* binding */ scale)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");


const number = {
    test: (v) => typeof v === 'number',
    parse: parseFloat,
    transform: (v) => v,
};
const alpha = Object.assign(Object.assign({}, number), { transform: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 1) });
const scale = Object.assign(Object.assign({}, number), { default: 1 });




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/numbers/units.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/numbers/units.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "degrees": () => (/* binding */ degrees),
/* harmony export */   "percent": () => (/* binding */ percent),
/* harmony export */   "progressPercentage": () => (/* binding */ progressPercentage),
/* harmony export */   "px": () => (/* binding */ px),
/* harmony export */   "vh": () => (/* binding */ vh),
/* harmony export */   "vw": () => (/* binding */ vw)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/style-value-types/dist/es/utils.mjs");


const createUnitType = (unit) => ({
    test: (v) => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && v.endsWith(unit) && v.split(' ').length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`,
});
const degrees = createUnitType('deg');
const percent = createUnitType('%');
const px = createUnitType('px');
const vh = createUnitType('vh');
const vw = createUnitType('vw');
const progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v) => percent.parse(v) / 100, transform: (v) => percent.transform(v * 100) });




/***/ }),

/***/ "./node_modules/style-value-types/dist/es/utils.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/utils.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "colorRegex": () => (/* binding */ colorRegex),
/* harmony export */   "floatRegex": () => (/* binding */ floatRegex),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "sanitize": () => (/* binding */ sanitize),
/* harmony export */   "singleColorRegex": () => (/* binding */ singleColorRegex)
/* harmony export */ });
const clamp = (min, max) => (v) => Math.max(Math.min(v, max), min);
const sanitize = (v) => (v % 1 ? Number(v.toFixed(5)) : v);
const floatRegex = /(-)?([\d]*\.?[\d])+/g;
const colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
const singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function isString(v) {
    return typeof v === 'string';
}




/***/ })

}]);