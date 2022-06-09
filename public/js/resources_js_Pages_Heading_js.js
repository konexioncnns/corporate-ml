"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Heading_js"],{

/***/ "./node_modules/@mui/material/Grid/Grid.js":
/*!*************************************************!*\
  !*** ./node_modules/@mui/material/Grid/Grid.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "generateColumnGap": () => (/* binding */ generateColumnGap),
/* harmony export */   "generateDirection": () => (/* binding */ generateDirection),
/* harmony export */   "generateGrid": () => (/* binding */ generateGrid),
/* harmony export */   "generateRowGap": () => (/* binding */ generateRowGap),
/* harmony export */   "resolveSpacingClasses": () => (/* binding */ resolveSpacingClasses)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/breakpoints.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/composeClasses/composeClasses.js");
/* harmony import */ var _utils_requirePropFactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/requirePropFactory */ "./node_modules/@mui/material/utils/requirePropFactory.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _GridContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GridContext */ "./node_modules/@mui/material/Grid/GridContext.js");
/* harmony import */ var _gridClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gridClasses */ "./node_modules/@mui/material/Grid/gridClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "lg", "md", "rowSpacing", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"];
// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/












function getOffset(val) {
  const parse = parseFloat(val);
  return `${parse}${String(val).replace(String(parse), '') || 'px'}`;
}

function generateGrid({
  theme,
  ownerState
}) {
  let size;
  return theme.breakpoints.keys.reduce((globalStyles, breakpoint) => {
    // Use side effect over immutability for better performance.
    let styles = {};

    if (ownerState[breakpoint]) {
      size = ownerState[breakpoint];
    }

    if (!size) {
      return globalStyles;
    }

    if (size === true) {
      // For the auto layouting
      styles = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
    } else if (size === 'auto') {
      styles = {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto'
      };
    } else {
      const columnsBreakpointValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.resolveBreakpointValues)({
        values: ownerState.columns,
        breakpoints: theme.breakpoints.values
      });
      const columnValue = typeof columnsBreakpointValues === 'object' ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;

      if (columnValue === undefined || columnValue === null) {
        return globalStyles;
      } // Keep 7 significant numbers.


      const width = `${Math.round(size / columnValue * 10e7) / 10e5}%`;
      let more = {};

      if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
        const themeSpacing = theme.spacing(ownerState.columnSpacing);

        if (themeSpacing !== '0px') {
          const fullWidth = `calc(${width} + ${getOffset(themeSpacing)})`;
          more = {
            flexBasis: fullWidth,
            maxWidth: fullWidth
          };
        }
      } // Close to the bootstrap implementation:
      // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41


      styles = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width
      }, more);
    } // No need for a media query for the first size.


    if (theme.breakpoints.values[breakpoint] === 0) {
      Object.assign(globalStyles, styles);
    } else {
      globalStyles[theme.breakpoints.up(breakpoint)] = styles;
    }

    return globalStyles;
  }, {});
}
function generateDirection({
  theme,
  ownerState
}) {
  const directionValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.resolveBreakpointValues)({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  });
  return (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.handleBreakpoints)({
    theme
  }, directionValues, propValue => {
    const output = {
      flexDirection: propValue
    };

    if (propValue.indexOf('column') === 0) {
      output[`& > .${_gridClasses__WEBPACK_IMPORTED_MODULE_6__["default"].item}`] = {
        maxWidth: 'none'
      };
    }

    return output;
  });
}
function generateRowGap({
  theme,
  ownerState
}) {
  const {
    container,
    rowSpacing
  } = ownerState;
  let styles = {};

  if (container && rowSpacing !== 0) {
    const rowSpacingValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.resolveBreakpointValues)({
      values: rowSpacing,
      breakpoints: theme.breakpoints.values
    });
    styles = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.handleBreakpoints)({
      theme
    }, rowSpacingValues, propValue => {
      const themeSpacing = theme.spacing(propValue);

      if (themeSpacing !== '0px') {
        return {
          marginTop: `-${getOffset(themeSpacing)}`,
          [`& > .${_gridClasses__WEBPACK_IMPORTED_MODULE_6__["default"].item}`]: {
            paddingTop: getOffset(themeSpacing)
          }
        };
      }

      return {};
    });
  }

  return styles;
}
function generateColumnGap({
  theme,
  ownerState
}) {
  const {
    container,
    columnSpacing
  } = ownerState;
  let styles = {};

  if (container && columnSpacing !== 0) {
    const columnSpacingValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.resolveBreakpointValues)({
      values: columnSpacing,
      breakpoints: theme.breakpoints.values
    });
    styles = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.handleBreakpoints)({
      theme
    }, columnSpacingValues, propValue => {
      const themeSpacing = theme.spacing(propValue);

      if (themeSpacing !== '0px') {
        return {
          width: `calc(100% + ${getOffset(themeSpacing)})`,
          marginLeft: `-${getOffset(themeSpacing)}`,
          [`& > .${_gridClasses__WEBPACK_IMPORTED_MODULE_6__["default"].item}`]: {
            paddingLeft: getOffset(themeSpacing)
          }
        };
      }

      return {};
    });
  }

  return styles;
}
function resolveSpacingClasses(spacing, container, styles = {}) {
  // in case of grid item or undefined/null or `spacing` <= 0
  if (!container || !spacing || spacing <= 0) {
    return [];
  } // in case of string/number `spacing`


  if (typeof spacing === 'string' && !Number.isNaN(Number(spacing)) || typeof spacing === 'number') {
    return [styles[`spacing-xs-${String(spacing)}`] || `spacing-xs-${String(spacing)}`];
  } // in case of object `spacing`


  const {
    xs,
    sm,
    md,
    lg,
    xl
  } = spacing;
  return [Number(xs) > 0 && (styles[`spacing-xs-${String(xs)}`] || `spacing-xs-${String(xs)}`), Number(sm) > 0 && (styles[`spacing-sm-${String(sm)}`] || `spacing-sm-${String(sm)}`), Number(md) > 0 && (styles[`spacing-md-${String(md)}`] || `spacing-md-${String(md)}`), Number(lg) > 0 && (styles[`spacing-lg-${String(lg)}`] || `spacing-lg-${String(lg)}`), Number(xl) > 0 && (styles[`spacing-xl-${String(xl)}`] || `spacing-xl-${String(xl)}`)];
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',

const GridRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiGrid',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      container,
      direction,
      item,
      lg,
      md,
      sm,
      spacing,
      wrap,
      xl,
      xs,
      zeroMinWidth
    } = props.ownerState;
    return [styles.root, container && styles.container, item && styles.item, zeroMinWidth && styles.zeroMinWidth, ...resolveSpacingClasses(spacing, container, styles), direction !== 'row' && styles[`direction-xs-${String(direction)}`], wrap !== 'wrap' && styles[`wrap-xs-${String(wrap)}`], xs !== false && styles[`grid-xs-${String(xs)}`], sm !== false && styles[`grid-sm-${String(sm)}`], md !== false && styles[`grid-md-${String(md)}`], lg !== false && styles[`grid-lg-${String(lg)}`], xl !== false && styles[`grid-xl-${String(xl)}`]];
  }
})(({
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  boxSizing: 'border-box'
}, ownerState.container && {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%'
}, ownerState.item && {
  margin: 0 // For instance, it's useful when used with a `figure` element.

}, ownerState.zeroMinWidth && {
  minWidth: 0
}, ownerState.wrap !== 'wrap' && {
  flexWrap: ownerState.wrap
}), generateDirection, generateRowGap, generateColumnGap, generateGrid);

const useUtilityClasses = ownerState => {
  const {
    classes,
    container,
    direction,
    item,
    lg,
    md,
    sm,
    spacing,
    wrap,
    xl,
    xs,
    zeroMinWidth
  } = ownerState;
  const slots = {
    root: ['root', container && 'container', item && 'item', zeroMinWidth && 'zeroMinWidth', ...resolveSpacingClasses(spacing, container), direction !== 'row' && `direction-xs-${String(direction)}`, wrap !== 'wrap' && `wrap-xs-${String(wrap)}`, xs !== false && `grid-xs-${String(xs)}`, sm !== false && `grid-sm-${String(sm)}`, md !== false && `grid-md-${String(md)}`, lg !== false && `grid-lg-${String(lg)}`, xl !== false && `grid-xl-${String(xl)}`]
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_8__["default"])(slots, _gridClasses__WEBPACK_IMPORTED_MODULE_6__.getGridUtilityClass, classes);
};

const Grid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Grid(inProps, ref) {
  const themeProps = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__["default"])({
    props: inProps,
    name: 'MuiGrid'
  });
  const props = (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__["default"])(themeProps);

  const {
    className,
    columns: columnsProp,
    columnSpacing: columnSpacingProp,
    component = 'div',
    container = false,
    direction = 'row',
    item = false,
    lg = false,
    md = false,
    rowSpacing: rowSpacingProp,
    sm = false,
    spacing = 0,
    wrap = 'wrap',
    xl = false,
    xs = false,
    zeroMinWidth = false
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const rowSpacing = rowSpacingProp || spacing;
  const columnSpacing = columnSpacingProp || spacing;
  const columnsContext = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_GridContext__WEBPACK_IMPORTED_MODULE_11__["default"]); // columns set with default breakpoint unit of 12

  const columns = container ? columnsProp || 12 : columnsContext;

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    columns,
    container,
    direction,
    item,
    lg,
    md,
    sm,
    rowSpacing,
    columnSpacing,
    wrap,
    xl,
    xs,
    zeroMinWidth
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_GridContext__WEBPACK_IMPORTED_MODULE_11__["default"].Provider, {
    value: columns,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GridRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      ownerState: ownerState,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
      as: component,
      ref: ref
    }, other))
  });
});
 true ? Grid.propTypes
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
   * The number of columns.
   * @default 12
   */
  columns: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_12___default().number)), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object)]),

  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)])), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)]),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().elementType),

  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['column-reverse', 'column', 'row-reverse', 'row']), prop_types__WEBPACK_IMPORTED_MODULE_12___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object)]),

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)]),

  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)]),

  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)])), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)]),

  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)]),

  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)])), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)]),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object)]),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['nowrap', 'wrap-reverse', 'wrap']),

  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)]),

  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)]),

  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)
} : 0;

if (true) {
  const requireProp = (0,_utils_requirePropFactory__WEBPACK_IMPORTED_MODULE_13__["default"])('Grid', Grid); // eslint-disable-next-line no-useless-concat

  Grid['propTypes' + ''] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Grid.propTypes, {
    direction: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item'),
    zeroMinWidth: requireProp('item')
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);

/***/ }),

/***/ "./node_modules/@mui/material/Grid/GridContext.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/material/Grid/GridContext.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * @ignore - internal component.
 */

const GridContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();

if (true) {
  GridContext.displayName = 'GridContext';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridContext);

/***/ }),

/***/ "./node_modules/@mui/material/Grid/gridClasses.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/material/Grid/gridClasses.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getGridUtilityClass": () => (/* binding */ getGridUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/private-classnames/generateUtilityClasses/generateUtilityClasses.js");

function getGridUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiGrid', slot);
}
const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const DIRECTIONS = ['column-reverse', 'column', 'row-reverse', 'row'];
const WRAPS = ['nowrap', 'wrap-reverse', 'wrap'];
const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const gridClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiGrid', ['root', 'container', 'item', 'zeroMinWidth', // spacings
...SPACINGS.map(spacing => `spacing-xs-${spacing}`), // direction values
...DIRECTIONS.map(direction => `direction-xs-${direction}`), // wrap values
...WRAPS.map(wrap => `wrap-xs-${wrap}`), // grid sizes for all breakpoints
...GRID_SIZES.map(size => `grid-xs-${size}`), ...GRID_SIZES.map(size => `grid-sm-${size}`), ...GRID_SIZES.map(size => `grid-md-${size}`), ...GRID_SIZES.map(size => `grid-lg-${size}`), ...GRID_SIZES.map(size => `grid-xl-${size}`)]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gridClasses);

/***/ }),

/***/ "./node_modules/@mui/material/Stack/Stack.js":
/*!***************************************************!*\
  !*** ./node_modules/@mui/material/Stack/Stack.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "style": () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/breakpoints.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/spacing.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/deepmerge.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["component", "direction", "spacing", "divider", "children"];






/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */



function joinChildren(children, separator) {
  const childrenArray = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);

    if (index < childrenArray.length - 1) {
      output.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }

    return output;
  }, []);
}

const getSideFromDirection = direction => {
  return {
    row: 'Left',
    'row-reverse': 'Right',
    column: 'Top',
    'column-reverse': 'Bottom'
  }[direction];
};

const style = ({
  ownerState,
  theme
}) => {
  let styles = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    display: 'flex'
  }, (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.handleBreakpoints)({
    theme
  }, (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.resolveBreakpointValues)({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  }), propValue => ({
    flexDirection: propValue
  })));

  if (ownerState.spacing) {
    const transformer = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.createUnarySpacing)(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (ownerState.spacing[breakpoint] != null || ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }

      return acc;
    }, {});
    const directionValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.resolveBreakpointValues)({
      values: ownerState.direction,
      base
    });
    const spacingValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.resolveBreakpointValues)({
      values: ownerState.spacing,
      base
    });

    const styleFromPropValue = (propValue, breakpoint) => {
      return {
        '& > :not(style) + :not(style)': {
          margin: 0,
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.getValue)(transformer, propValue)
        }
      };
    };

    styles = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.handleBreakpoints)({
      theme
    }, spacingValues, styleFromPropValue));
  }

  return styles;
};
const StackRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiStack',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root];
  }
})(style);
const Stack = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Stack(inProps, ref) {
  const themeProps = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__["default"])({
    props: inProps,
    name: 'MuiStack'
  });
  const props = (0,_mui_system__WEBPACK_IMPORTED_MODULE_9__["default"])(themeProps);

  const {
    component = 'div',
    direction = 'column',
    spacing = 0,
    divider,
    children
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = {
    direction,
    spacing
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StackRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    as: component,
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: divider ? joinChildren(children, divider) : children
  }));
});
 true ? Stack.propTypes
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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().elementType),

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(['column-reverse', 'column', 'row-reverse', 'row']), prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)]),

  /**
   * Add an element between each child.
   */
  divider: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)]),

  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);

/***/ }),

/***/ "./resources/js/Pages/Heading.js":
/*!***************************************!*\
  !*** ./resources/js/Pages/Heading.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_typical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-typical */ "./node_modules/react-typical/dist/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var bgImage = "../assets/images/img4.jpg";




var Heading = function Heading() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    height: "90vh",
    sx: {
      backgroundImage: 'url("https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80")',
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      py: {
        xs: 3,
        md: 12
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
          container: true,
          alignItems: "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
            item: true,
            xs: 12,
            lg: 5,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
              variant: "h2",
              color: "white",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
                variant: "h2",
                color: "white",
                children: "Nous fournissons des servive:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_typical__WEBPACK_IMPORTED_MODULE_1__["default"], {
                steps: ["1SIMPLE1", 1000, "1SIMPLE1 Toujours plus loin!", 2800],
                loop: Infinity,
                wrapper: "p"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
            item: true,
            xs: 12,
            lg: 6,
            sx: {
              ml: {
                xs: -2,
                lg: "auto"
              },
              mt: {
                xs: 6,
                lg: 0
              }
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {})
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);

/***/ }),

/***/ "./node_modules/react-typical/dist/index.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-typical/dist/index.es.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


async function type(node, ...args) {
    for (const arg of args) {
        switch (typeof arg) {
            case 'string':
                await edit(node, arg);
                break;
            case 'number':
                await wait(arg);
                break;
            case 'function':
                await arg(node, ...args);
                break;
            default:
                await arg;
        }
    }
}

async function edit(node, text) {
    const overlap = getOverlap(node.textContent, text);
    await perform(node, [...deleter(node.textContent, overlap), ...writer(text, overlap)]);
}

async function wait(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
}

async function perform(node, edits, speed = 60) {
    for (const op of editor(edits)) {
        op(node);
        await wait(speed + speed * (Math.random() - 0.5));
    }
}

function* editor(edits) {
    for (const edit of edits) {
        yield (node) => requestAnimationFrame(() => node.textContent = edit);
    }
}

function* writer([...text], startIndex = 0, endIndex = text.length) {
    while (startIndex < endIndex) {
        yield text.slice(0, ++startIndex).join('');
    }
}

function* deleter([...text], startIndex = 0, endIndex = text.length) {
    while (endIndex > startIndex) {
        yield text.slice(0, --endIndex).join('');
    }
}

function getOverlap(start, [...end]) {
    return [...start, NaN].findIndex((char, i) => end[i] !== char);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".styles_typicalWrapper__1_Uvh::after {\n  content: \"|\";\n  animation: styles_blink__2CKyC 1s infinite step-start;\n}\n\n@keyframes styles_blink__2CKyC {\n  50% { opacity: 0; }\n}";
var styles = { "typicalWrapper": "styles_typicalWrapper__1_Uvh", "blink": "styles_blink__2CKyC" };
styleInject(css);

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var Typical = function Typical(_ref) {
  var steps = _ref.steps,
      loop = _ref.loop,
      className = _ref.className,
      _ref$wrapper = _ref.wrapper,
      wrapper = _ref$wrapper === undefined ? "p" : _ref$wrapper;

  var typicalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var Component = wrapper;
  var classNames = [styles.typicalWrapper];

  if (className) {
    classNames.unshift(className);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (loop === Infinity) {
      type.apply(undefined, [typicalRef.current].concat(toConsumableArray(steps), [type]));
    } else if (typeof loop === "number") {
      type.apply(undefined, [typicalRef.current].concat(toConsumableArray(Array(loop).fill(steps).flat())));
    } else {
      type.apply(undefined, [typicalRef.current].concat(toConsumableArray(steps)));
    }
  });

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, { ref: typicalRef, className: classNames.join(' ') });
};

var index = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Typical);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
//# sourceMappingURL=index.es.js.map


/***/ })

}]);