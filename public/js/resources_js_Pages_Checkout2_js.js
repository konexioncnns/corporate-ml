(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Checkout2_js"],{

/***/ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! react */ "./node_modules/react/index.js")) :
	0;
}(this, (function (exports, React) { 'use strict';

	React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	function emptyFunction() {}

	function emptyFunctionWithReset() {}

	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	var factoryWithThrowingShims = function () {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }

	    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	    err.name = 'Invariant Violation';
	    throw err;
	  }
	  shim.isRequired = shim;

	  function getShim() {
	    return shim;
	  }
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,
	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };
	  ReactPropTypes.PropTypes = ReactPropTypes;
	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);

	    if (enumerableOnly) {
	      symbols = symbols.filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	      });
	    }

	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}

	function _typeof(obj) {
	  "@babel/helpers - typeof";

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

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

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

	var usePrevious = function usePrevious(value) {
	  var ref = React.useRef(value);
	  React.useEffect(function () {
	    ref.current = value;
	  }, [value]);
	  return ref.current;
	};

	var isUnknownObject = function isUnknownObject(raw) {
	  return raw !== null && _typeof(raw) === 'object';
	};
	var isPromise = function isPromise(raw) {
	  return isUnknownObject(raw) && typeof raw.then === 'function';
	}; // We are using types to enforce the `stripe` prop in this lib,
	// but in an untyped integration `stripe` could be anything, so we need
	// to do some sanity validation to prevent type errors.

	var isStripe = function isStripe(raw) {
	  return isUnknownObject(raw) && typeof raw.elements === 'function' && typeof raw.createToken === 'function' && typeof raw.createPaymentMethod === 'function' && typeof raw.confirmCardPayment === 'function';
	};

	var PLAIN_OBJECT_STR = '[object Object]';
	var isEqual = function isEqual(left, right) {
	  if (!isUnknownObject(left) || !isUnknownObject(right)) {
	    return left === right;
	  }

	  var leftArray = Array.isArray(left);
	  var rightArray = Array.isArray(right);
	  if (leftArray !== rightArray) return false;
	  var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
	  var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
	  if (leftPlainObject !== rightPlainObject) return false; // not sure what sort of special object this is (regexp is one option), so
	  // fallback to reference check.

	  if (!leftPlainObject && !leftArray) return left === right;
	  var leftKeys = Object.keys(left);
	  var rightKeys = Object.keys(right);
	  if (leftKeys.length !== rightKeys.length) return false;
	  var keySet = {};

	  for (var i = 0; i < leftKeys.length; i += 1) {
	    keySet[leftKeys[i]] = true;
	  }

	  for (var _i = 0; _i < rightKeys.length; _i += 1) {
	    keySet[rightKeys[_i]] = true;
	  }

	  var allKeys = Object.keys(keySet);

	  if (allKeys.length !== leftKeys.length) {
	    return false;
	  }

	  var l = left;
	  var r = right;

	  var pred = function pred(key) {
	    return isEqual(l[key], r[key]);
	  };

	  return allKeys.every(pred);
	};

	var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates(options, prevOptions, immutableKeys) {
	  if (!isUnknownObject(options)) {
	    return null;
	  }

	  return Object.keys(options).reduce(function (newOptions, key) {
	    var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);

	    if (immutableKeys.includes(key)) {
	      if (isUpdated) {
	        console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
	      }

	      return newOptions;
	    }

	    if (!isUpdated) {
	      return newOptions;
	    }

	    return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
	  }, null);
	};

	var INVALID_STRIPE_ERROR = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.'; // We are using types to enforce the `stripe` prop in this lib, but in a real
	// integration `stripe` could be anything, so we need to do some sanity
	// validation to prevent type errors.

	var validateStripe = function validateStripe(maybeStripe) {
	  if (maybeStripe === null || isStripe(maybeStripe)) {
	    return maybeStripe;
	  }

	  throw new Error(INVALID_STRIPE_ERROR);
	};

	var parseStripeProp = function parseStripeProp(raw) {
	  if (isPromise(raw)) {
	    return {
	      tag: 'async',
	      stripePromise: Promise.resolve(raw).then(validateStripe)
	    };
	  }

	  var stripe = validateStripe(raw);

	  if (stripe === null) {
	    return {
	      tag: 'empty'
	    };
	  }

	  return {
	    tag: 'sync',
	    stripe: stripe
	  };
	};

	var ElementsContext = /*#__PURE__*/React.createContext(null);
	ElementsContext.displayName = 'ElementsContext';
	var parseElementsContext = function parseElementsContext(ctx, useCase) {
	  if (!ctx) {
	    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
	  }

	  return ctx;
	};
	/**
	 * The `Elements` provider allows you to use [Element components](https://stripe.com/docs/stripe-js/react#element-components) and access the [Stripe object](https://stripe.com/docs/js/initializing) in any nested component.
	 * Render an `Elements` provider at the root of your React app so that it is available everywhere you need it.
	 *
	 * To use the `Elements` provider, call `loadStripe` from `@stripe/stripe-js` with your publishable key.
	 * The `loadStripe` function will asynchronously load the Stripe.js script and initialize a `Stripe` object.
	 * Pass the returned `Promise` to `Elements`.
	 *
	 * @docs https://stripe.com/docs/stripe-js/react#elements-provider
	 */

	var Elements = function Elements(_ref) {
	  var rawStripeProp = _ref.stripe,
	      options = _ref.options,
	      children = _ref.children;
	  var parsed = React.useMemo(function () {
	    return parseStripeProp(rawStripeProp);
	  }, [rawStripeProp]); // For a sync stripe instance, initialize into context

	  var _React$useState = React.useState(function () {
	    return {
	      stripe: parsed.tag === 'sync' ? parsed.stripe : null,
	      elements: parsed.tag === 'sync' ? parsed.stripe.elements(options) : null
	    };
	  }),
	      _React$useState2 = _slicedToArray(_React$useState, 2),
	      ctx = _React$useState2[0],
	      setContext = _React$useState2[1];

	  React.useEffect(function () {
	    var isMounted = true;

	    var safeSetContext = function safeSetContext(stripe) {
	      setContext(function (ctx) {
	        // no-op if we already have a stripe instance (https://github.com/stripe/react-stripe-js/issues/296)
	        if (ctx.stripe) return ctx;
	        return {
	          stripe: stripe,
	          elements: stripe.elements(options)
	        };
	      });
	    }; // For an async stripePromise, store it in context once resolved


	    if (parsed.tag === 'async' && !ctx.stripe) {
	      parsed.stripePromise.then(function (stripe) {
	        if (stripe && isMounted) {
	          // Only update Elements context if the component is still mounted
	          // and stripe is not null. We allow stripe to be null to make
	          // handling SSR easier.
	          safeSetContext(stripe);
	        }
	      });
	    } else if (parsed.tag === 'sync' && !ctx.stripe) {
	      // Or, handle a sync stripe instance going from null -> populated
	      safeSetContext(parsed.stripe);
	    }

	    return function () {
	      isMounted = false;
	    };
	  }, [parsed, ctx, options]); // Warn on changes to stripe prop

	  var prevStripe = usePrevious(rawStripeProp);
	  React.useEffect(function () {
	    if (prevStripe !== null && prevStripe !== rawStripeProp) {
	      console.warn('Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.');
	    }
	  }, [prevStripe, rawStripeProp]); // Apply updates to elements when options prop has relevant changes

	  var prevOptions = usePrevious(options);
	  React.useEffect(function () {
	    if (!ctx.elements) {
	      return;
	    }

	    var updates = extractAllowedOptionsUpdates(options, prevOptions, ['clientSecret', 'fonts']);

	    if (updates) {
	      ctx.elements.update(updates);
	    }
	  }, [options, prevOptions, ctx.elements]); // Attach react-stripe-js version to stripe.js instance

	  React.useEffect(function () {
	    var anyStripe = ctx.stripe;

	    if (!anyStripe || !anyStripe._registerWrapper || !anyStripe.registerAppInfo) {
	      return;
	    }

	    anyStripe._registerWrapper({
	      name: 'react-stripe-js',
	      version: "1.8.1"
	    });

	    anyStripe.registerAppInfo({
	      name: 'react-stripe-js',
	      version: "1.8.1",
	      url: 'https://stripe.com/docs/stripe-js/react'
	    });
	  }, [ctx.stripe]);
	  return /*#__PURE__*/React.createElement(ElementsContext.Provider, {
	    value: ctx
	  }, children);
	};
	Elements.propTypes = {
	  stripe: propTypes.any,
	  options: propTypes.object
	};
	var useElementsContextWithUseCase = function useElementsContextWithUseCase(useCaseMessage) {
	  var ctx = React.useContext(ElementsContext);
	  return parseElementsContext(ctx, useCaseMessage);
	};
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#useelements-hook
	 */

	var useElements = function useElements() {
	  var _useElementsContextWi = useElementsContextWithUseCase('calls useElements()'),
	      elements = _useElementsContextWi.elements;

	  return elements;
	};
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#usestripe-hook
	 */

	var useStripe = function useStripe() {
	  var _useElementsContextWi2 = useElementsContextWithUseCase('calls useStripe()'),
	      stripe = _useElementsContextWi2.stripe;

	  return stripe;
	};
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#elements-consumer
	 */

	var ElementsConsumer = function ElementsConsumer(_ref2) {
	  var children = _ref2.children;
	  var ctx = useElementsContextWithUseCase('mounts <ElementsConsumer>'); // Assert to satisfy the busted React.FC return type (it should be ReactNode)

	  return children(ctx);
	};
	ElementsConsumer.propTypes = {
	  children: propTypes.func.isRequired
	};

	var useCallbackReference = function useCallbackReference(cb) {
	  var ref = React.useRef(cb);
	  React.useEffect(function () {
	    ref.current = cb;
	  }, [cb]);
	  return function () {
	    if (ref.current) {
	      ref.current.apply(ref, arguments);
	    }
	  };
	};

	var noop = function noop() {};

	var capitalized = function capitalized(str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};

	var createElementComponent = function createElementComponent(type, isServer) {
	  var displayName = "".concat(capitalized(type), "Element");

	  var ClientElement = function ClientElement(_ref) {
	    var id = _ref.id,
	        className = _ref.className,
	        _ref$options = _ref.options,
	        options = _ref$options === void 0 ? {} : _ref$options,
	        _ref$onBlur = _ref.onBlur,
	        onBlur = _ref$onBlur === void 0 ? noop : _ref$onBlur,
	        _ref$onFocus = _ref.onFocus,
	        onFocus = _ref$onFocus === void 0 ? noop : _ref$onFocus,
	        _ref$onReady = _ref.onReady,
	        onReady = _ref$onReady === void 0 ? noop : _ref$onReady,
	        _ref$onChange = _ref.onChange,
	        onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
	        _ref$onEscape = _ref.onEscape,
	        onEscape = _ref$onEscape === void 0 ? noop : _ref$onEscape,
	        _ref$onClick = _ref.onClick,
	        onClick = _ref$onClick === void 0 ? noop : _ref$onClick;

	    var _useElementsContextWi = useElementsContextWithUseCase("mounts <".concat(displayName, ">")),
	        elements = _useElementsContextWi.elements;

	    var elementRef = React.useRef(null);
	    var domNode = React.useRef(null);
	    var callOnReady = useCallbackReference(onReady);
	    var callOnBlur = useCallbackReference(onBlur);
	    var callOnFocus = useCallbackReference(onFocus);
	    var callOnClick = useCallbackReference(onClick);
	    var callOnChange = useCallbackReference(onChange);
	    var callOnEscape = useCallbackReference(onEscape);
	    React.useLayoutEffect(function () {
	      if (elementRef.current == null && elements && domNode.current != null) {
	        var element = elements.create(type, options);
	        elementRef.current = element;
	        element.mount(domNode.current);
	        element.on('ready', function () {
	          return callOnReady(element);
	        });
	        element.on('change', callOnChange);
	        element.on('blur', callOnBlur);
	        element.on('focus', callOnFocus);
	        element.on('escape', callOnEscape); // Users can pass an onClick prop on any Element component
	        // just as they could listen for the `click` event on any Element,
	        // but only the PaymentRequestButton will actually trigger the event.

	        element.on('click', callOnClick);
	      }
	    });
	    var prevOptions = usePrevious(options);
	    React.useEffect(function () {
	      if (!elementRef.current) {
	        return;
	      }

	      var updates = extractAllowedOptionsUpdates(options, prevOptions, ['paymentRequest']);

	      if (updates) {
	        elementRef.current.update(updates);
	      }
	    }, [options, prevOptions]);
	    React.useLayoutEffect(function () {
	      return function () {
	        if (elementRef.current) {
	          elementRef.current.destroy();
	          elementRef.current = null;
	        }
	      };
	    }, []);
	    return /*#__PURE__*/React.createElement("div", {
	      id: id,
	      className: className,
	      ref: domNode
	    });
	  }; // Only render the Element wrapper in a server environment.


	  var ServerElement = function ServerElement(props) {
	    // Validate that we are in the right context by calling useElementsContextWithUseCase.
	    useElementsContextWithUseCase("mounts <".concat(displayName, ">"));
	    var id = props.id,
	        className = props.className;
	    return /*#__PURE__*/React.createElement("div", {
	      id: id,
	      className: className
	    });
	  };

	  var Element = isServer ? ServerElement : ClientElement;
	  Element.propTypes = {
	    id: propTypes.string,
	    className: propTypes.string,
	    onChange: propTypes.func,
	    onBlur: propTypes.func,
	    onFocus: propTypes.func,
	    onReady: propTypes.func,
	    onClick: propTypes.func,
	    options: propTypes.object
	  };
	  Element.displayName = displayName;
	  Element.__elementType = type;
	  return Element;
	};

	var isServer = typeof window === 'undefined';
	/**
	 * Requires beta access:
	 * Contact [Stripe support](https://support.stripe.com/) for more information.
	 *
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var AuBankAccountElement = createElementComponent('auBankAccount', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var CardElement = createElementComponent('card', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var CardNumberElement = createElementComponent('cardNumber', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var CardExpiryElement = createElementComponent('cardExpiry', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var CardCvcElement = createElementComponent('cardCvc', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var FpxBankElement = createElementComponent('fpxBank', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var IbanElement = createElementComponent('iban', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var IdealBankElement = createElementComponent('idealBank', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var P24BankElement = createElementComponent('p24Bank', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var EpsBankElement = createElementComponent('epsBank', isServer);
	var PaymentElement = createElementComponent('payment', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var PaymentRequestButtonElement = createElementComponent('paymentRequestButton', isServer);
	/**
	 * Requires beta access:
	 * Contact [Stripe support](https://support.stripe.com/) for more information.
	 *
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var LinkAuthenticationElement = createElementComponent('linkAuthentication', isServer);
	/**
	 * Requires beta access:
	 * Contact [Stripe support](https://support.stripe.com/) for more information.
	 *
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var ShippingAddressElement = createElementComponent('shippingAddress', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var AffirmMessageElement = createElementComponent('affirmMessage', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var AfterpayClearpayMessageElement = createElementComponent('afterpayClearpayMessage', isServer);

	exports.AffirmMessageElement = AffirmMessageElement;
	exports.AfterpayClearpayMessageElement = AfterpayClearpayMessageElement;
	exports.AuBankAccountElement = AuBankAccountElement;
	exports.CardCvcElement = CardCvcElement;
	exports.CardElement = CardElement;
	exports.CardExpiryElement = CardExpiryElement;
	exports.CardNumberElement = CardNumberElement;
	exports.Elements = Elements;
	exports.ElementsConsumer = ElementsConsumer;
	exports.EpsBankElement = EpsBankElement;
	exports.FpxBankElement = FpxBankElement;
	exports.IbanElement = IbanElement;
	exports.IdealBankElement = IdealBankElement;
	exports.LinkAuthenticationElement = LinkAuthenticationElement;
	exports.P24BankElement = P24BankElement;
	exports.PaymentElement = PaymentElement;
	exports.PaymentRequestButtonElement = PaymentRequestButtonElement;
	exports.ShippingAddressElement = ShippingAddressElement;
	exports.useElements = useElements;
	exports.useStripe = useStripe;

	Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./resources/js/Pages/Checkout2.js":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Checkout2.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Example)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/









var products = [{
  id: 1,
  title: "Basic Tee",
  href: "#",
  price: "$32.00",
  color: "Black",
  size: "Large",
  imageSrc: "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg",
  imageAlt: "Front of men's Basic Tee in black."
} // More products...
];
var deliveryMethods = [{
  id: 1,
  title: "Standard",
  turnaround: "4–10 business days",
  price: "$5.00"
}, {
  id: 2,
  title: "Express",
  turnaround: "2–5 business days",
  price: "$16.00"
}];
var paymentMethods = [{
  id: "credi;t-card",
  title: "Credit card"
}, {
  id: "paypal",
  title: "PayPal"
}, {
  id: "etransfer",
  title: "eTransfer"
}];

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(" ");
}

function Example() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.cart;
  }),
      cartTotalAmont = _useSelector.cartTotalAmont;

  var cart = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.cart;
  });

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    firstname: '',
    lasttname: '',
    email: '',
    card_number: '',
    exp_month: '',
    exp_year: '',
    cvc: '',
    city: '',
    country: '',
    region: '',
    postal_code: ''
  }),
      data = _useForm.data,
      post = _useForm.post,
      setData = _useForm.setData;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(deliveryMethods[0]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedDeliveryMethod = _useState2[0],
      setSelectedDeliveryMethod = _useState2[1];
  /*Stripe variable
  const stripe =useStripe();
  const element= useElements()*/


  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    post(route("placeorder", {
      amount: cartTotalAmont,
      cart: cart
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "bg-gray-50",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
        className: "sr-only",
        children: "Checkout"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
        className: "lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16",
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
              className: "text-lg font-medium text-gray-900",
              children: "Contact information"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "mt-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
                textAlign: "left",
                fontSize: 15,
                fontFamily: "Inter",
                children: "Email address"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "mt-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                  type: "email",
                  id: "email-address",
                  name: "email",
                  value: data.email,
                  onChange: function onChange(e) {
                    return setData("email", e.target.value);
                  },
                  autoComplete: "email",
                  className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "mt-10 border-t border-gray-200 pt-10",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
              className: "text-lg font-medium text-gray-900",
              children: "Shipping information"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  textAlign: "left",
                  fontSize: 15,
                  fontFamily: "Inter",
                  children: "Firsname"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "mt-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "text",
                    id: "firstname",
                    name: "firstname",
                    value: data.firstname,
                    onChange: function onChange(e) {
                      return setData("firstname", e.target.value);
                    },
                    autoComplete: "given-name",
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  textAlign: "left",
                  fontSize: 15,
                  fontFamily: "Inter",
                  children: "Last name"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "mt-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "text",
                    id: "last-name",
                    name: "lastname",
                    value: data.lastname,
                    onChange: function onChange(e) {
                      return setData("lastname", e.target.value);
                    },
                    autoComplete: "family-name",
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  textAlign: "left",
                  fontSize: 15,
                  fontFamily: "Inter",
                  children: "City  "
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "mt-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "text",
                    name: "city",
                    value: data.city,
                    onChange: function onChange(e) {
                      return setData("city", e.target.value);
                    },
                    id: "city",
                    autoComplete: "address-level2",
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  textAlign: "left",
                  fontSize: 15,
                  fontFamily: "Inter",
                  children: "Country "
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "mt-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
                    id: "country",
                    name: "country",
                    autoComplete: "country-name",
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "United States",
                      children: "United States"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "Canada",
                      children: "Canada"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "Mexico",
                      children: "Mexico"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "Mali",
                      children: "Mali"
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  textAlign: "left",
                  fontSize: 15,
                  fontFamily: "Inter",
                  children: "State / Province "
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "mt-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "text",
                    name: "region",
                    value: data.region,
                    onChange: function onChange(e) {
                      return setData("region", e.target.value);
                    },
                    id: "region",
                    autoComplete: "address-level1",
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  textAlign: "left",
                  fontSize: 15,
                  fontFamily: "Inter",
                  children: "Postal code"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "mt-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "text",
                    name: "postal_code",
                    value: data.postal_code,
                    onChange: function onChange(e) {
                      return setData("postal_code", e.target.value);
                    },
                    id: "postal-code",
                    autoComplete: "postal-code",
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "sm:col-span-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  textAlign: "left",
                  fontSize: 15,
                  fontFamily: "Inter",
                  children: "Phone"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "mt-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "text",
                    name: "phone",
                    value: data.phone,
                    onChange: function onChange(e) {
                      return setData("phone", e.target.value);
                    },
                    id: "phone",
                    autoComplete: "tel",
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  })
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "mt-10 border-t border-gray-200 pt-10",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
              textAlign: "center",
              fontSize: 15,
              fontFamily: "Inter",
              children: "Methode de payement"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("fieldset", {
              className: "mt-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("legend", {
                className: "sr-only",
                children: "Payment type"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10",
                children: paymentMethods.map(function (paymentMethod, paymentMethodIdx) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "flex items-center",
                    children: [paymentMethodIdx === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                      id: paymentMethod.id,
                      name: "payment-type",
                      type: "radio",
                      defaultChecked: true,
                      className: "focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                      id: paymentMethod.id,
                      name: "payment-type",
                      type: "radio",
                      className: "focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                      htmlFor: paymentMethod.id,
                      className: "ml-3 block text-sm font-medium text-gray-700",
                      children: paymentMethod.title
                    })]
                  }, paymentMethod.id);
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "mt-6 grid grid-cols-4 gap-y-6 gap-x-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "col-span-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  textAlign: "left",
                  fontSize: 15,
                  fontFamily: "Inter",
                  children: "Card number"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "mt-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "text",
                    id: "card-number",
                    name: "card-number",
                    value: data.card_number,
                    onChange: function onChange(e) {
                      return setData("card_number", e.target.value);
                    },
                    autoComplete: "cc-number",
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "col-span-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  textAlign: "left",
                  fontSize: 15,
                  fontFamily: "Inter",
                  children: "Name on card"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "mt-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "text",
                    id: "name-on-card",
                    name: "name-on-card",
                    value: data.name_on_card,
                    onChange: function onChange(e) {
                      return setData("name_on_card", e.target.value);
                    },
                    autoComplete: "cc-name",
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  textAlign: "left",
                  fontSize: 15,
                  fontFamily: "Inter",
                  children: "Mois expiration"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "mt-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "number",
                    name: "exp_month",
                    min: "01",
                    max: "12",
                    placeholder: "12",
                    value: data.exp_month,
                    onChange: function onChange(e) {
                      return setData("exp_month", e.target.value);
                    },
                    id: "expiration-date",
                    autoComplete: "cc-exp",
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                  htmlFor: "cvc",
                  className: "block text-sm font-medium text-gray-700",
                  children: "Ann\xE9e expiration"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "mt-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "number",
                    name: "exp_year",
                    placeholder: "2025",
                    value: data.exp_year,
                    onChange: function onChange(e) {
                      return setData("exp_year", e.target.value);
                    },
                    id: "cvc",
                    autoComplete: "csc",
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                  htmlFor: "cvc",
                  className: "block text-sm font-medium text-gray-700",
                  children: "CVC"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "mt-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "text",
                    name: "cvc",
                    placeholder: "123",
                    value: data.cvc,
                    onChange: function onChange(e) {
                      return setData("cvc", e.target.value);
                    },
                    id: "cvc",
                    autoComplete: "csc",
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  })
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "mt-10 lg:mt-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-lg font-medium text-gray-900",
            children: "Order summary"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "mt-4 bg-white border border-gray-200 rounded-lg shadow-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "sr-only",
              children: "Items in your cart"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("dl", {
              className: "border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dt", {
                  className: "text-sm",
                  children: "Subtotal"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("dd", {
                  className: "text-sm font-medium text-gray-900",
                  children: [cartTotalAmont, " FCFA"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dt", {
                  className: "text-sm",
                  children: "Shipping"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dd", {
                  className: "text-sm font-medium text-gray-900",
                  children: "0 FCFA"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dt", {
                  className: "text-sm",
                  children: "Taxes"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dd", {
                  className: "text-sm font-medium text-gray-900",
                  children: "0 FCFA"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex items-center justify-between border-t border-gray-200 pt-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dt", {
                  className: "text-base font-medium",
                  children: "Total"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("dd", {
                  className: "text-base font-medium text-gray-900",
                  children: [cartTotalAmont, " FCFA"]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "border-t border-gray-200 py-6 px-4 sm:px-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                type: "submit",
                onClick: handleSubmit,
                className: "w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500",
                children: "Confirm order"
              })
            })]
          })]
        })]
      })]
    })
  });
}

/***/ })

}]);