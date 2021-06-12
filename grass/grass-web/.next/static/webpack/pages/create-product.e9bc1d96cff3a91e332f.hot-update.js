webpackHotUpdate_N_E("pages/create-product",{

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBar\", function() { return NavBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.ts\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _utils_isServer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/isServer */ \"./src/utils/isServer.ts\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/alan/Desktop/Projects/SeniorProject/grass/grass-web/src/components/NavBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar NavBar = function NavBar(_ref) {\n  _s();\n\n  Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref);\n\n  var _useLogoutMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useLogoutMutation\"])(),\n      _useLogoutMutation2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLogoutMutation, 2),\n      logoutFetching = _useLogoutMutation2[0].fetching,\n      logout = _useLogoutMutation2[1];\n\n  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useMeQuery\"])({\n    pause: Object(_utils_isServer__WEBPACK_IMPORTED_MODULE_10__[\"isServer\"])()\n  }),\n      _useMeQuery2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useMeQuery, 1),\n      _useMeQuery2$ = _useMeQuery2[0],\n      data = _useMeQuery2$.data,\n      fetching = _useMeQuery2$.fetching;\n\n  var body = null;\n\n  if (fetching) {} else if (!(data !== null && data !== void 0 && data.me)) {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/login\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n          mr: 2,\n          color: \"white\",\n          fontSize: \"m\",\n          children: \"login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/register\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n          color: \"white\",\n          fontSize: \"m\",\n          children: \"register\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true);\n  } else {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        mr: 6,\n        color: \"white\",\n        fontSize: \"sm\",\n        fontWeight: \"semibold\",\n        children: [\"Welcome, \", data.me.username]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Spacer\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"], {\n        variant: \"outline\",\n        \"aria-label\": \"logout\",\n        onClick: function onClick() {\n          logout();\n        },\n        color: \"white\",\n        size: \"xs\",\n        as: react_icons_ri__WEBPACK_IMPORTED_MODULE_8__[\"RiLogoutBoxRLine\"],\n        mt: 0.5\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n    zIndex: 1,\n    position: \"sticky\",\n    top: 0,\n    w: \"100%\",\n    p: 4,\n    ml: \"auto\",\n    mb: 4,\n    boxShadow: \"base\",\n    bg: \"green.400\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuButton\"], {\n        as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"],\n        \"aria-label\": \"Options\",\n        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__[\"HamburgerIcon\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 17\n        }, _this),\n        variant: \"outline\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuList\"], {\n        bg: \"white\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuItem\"], {\n          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__[\"BsFillHouseDoorFill\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 27\n          }, _this),\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuItem\"], {\n          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__[\"BsPuzzleFill\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 27\n          }, _this),\n          children: \"Explore\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuItem\"], {\n          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__[\"BsStarFill\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 27\n          }, _this),\n          children: \"Favorites\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuItem\"], {\n          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__[\"EditIcon\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 27\n          }, _this),\n          children: \"Orders\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuItem\"], {\n          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__[\"BsTools\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 27\n          }, _this),\n          children: \"Settings\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n      ml: 2,\n      color: \"white\",\n      as: \"h1\",\n      size: \"lg\",\n      letterSpacing: \"-.1rem\",\n      children: \"Grass\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n      color: \"white\",\n      fontSize: \"xs\",\n      mt: 2,\n      ml: 2,\n      children: \"The Grocery Assistant\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      ml: \"auto\",\n      children: body\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NavBar, \"bu7Mo57UkJD6Z7YYu+ueXRjOJFY=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useLogoutMutation\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useMeQuery\"]];\n});\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeD8wZTMyIl0sIm5hbWVzIjpbIk5hdkJhciIsInVzZUxvZ291dE11dGF0aW9uIiwibG9nb3V0RmV0Y2hpbmciLCJmZXRjaGluZyIsImxvZ291dCIsInVzZU1lUXVlcnkiLCJwYXVzZSIsImlzU2VydmVyIiwiZGF0YSIsImJvZHkiLCJtZSIsInVzZXJuYW1lIiwiUmlMb2dvdXRCb3hSTGluZSIsIkljb25CdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlCQTtBQUNBO0FBQ0E7QUFLQTtBQVNBO0FBQ0E7QUFPQTtBQUlPLElBQU1BLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLE9BQVE7QUFBQTs7QUFBQTs7QUFBQSwyQkFDSkMsNEVBQWlCLEVBRGI7QUFBQTtBQUFBLE1BQ2hDQyxjQURnQywwQkFDMUNDLFFBRDBDO0FBQUEsTUFDZEMsTUFEYzs7QUFBQSxvQkFFdEJDLHFFQUFVLENBQUM7QUFDdENDLFNBQUssRUFBRUMsaUVBQVE7QUFEdUIsR0FBRCxDQUZZO0FBQUE7QUFBQTtBQUFBLE1BRTFDQyxJQUYwQyxpQkFFMUNBLElBRjBDO0FBQUEsTUFFcENMLFFBRm9DLGlCQUVwQ0EsUUFGb0M7O0FBTW5ELE1BQUlNLElBQUksR0FBRyxJQUFYOztBQUNBLE1BQUlOLFFBQUosRUFBYyxDQUNiLENBREQsTUFDTyxJQUFJLEVBQUNLLElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVFLEVBQVAsQ0FBSixFQUFlO0FBQ3BCRCxRQUFJLGdCQUNGO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBVSxZQUFJLEVBQUMsUUFBZjtBQUFBLCtCQUNFLHFFQUFDLHFEQUFEO0FBQU0sWUFBRSxFQUFFLENBQVY7QUFBYSxlQUFLLEVBQUMsT0FBbkI7QUFBMkIsa0JBQVEsRUFBQyxHQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FB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QyxJQUFqQztBQUFzQyxVQUFJLEVBQUMsSUFBM0M7QUFBZ0QsbUJBQWEsRUFBRSxRQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRixlQTZCRSxxRUFBQyxxREFBRDtBQUFNLFdBQUssRUFBQyxPQUFaO0FBQW9CLGNBQVEsRUFBQyxJQUE3QjtBQUFrQyxRQUFFLEVBQUUsQ0FBdEM7QUFBeUMsUUFBRSxFQUFFLENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JGLGVBZ0NFLHFFQUFDLG9EQUFEO0FBQUssUUFBRSxFQUFDLE1BQVI7QUFBQSxnQkFBZ0JKO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0FqRk07O0dBQU1ULE07VUFDb0NDLG9FLEVBQ2xCSSw2RDs7O0tBRmxCTCxNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFRleHQsXG4gIEJveCxcbiAgRmxleCxcbiAgTGluayxcbiAgQnV0dG9uLFxuICBJY29uLFxuICBJY29uQnV0dG9uLFxuICBTcGFjZXIsXG4gIENlbnRlcixcbiAgTWVudSxcbiAgTWVudUJ1dHRvbixcbiAgTWVudUxpc3QsXG4gIE1lbnVJdGVtLFxuICBNZW51RGl2aWRlcixcbiAgSGVhZGluZyxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7XG4gIHVzZUxvZ2luTXV0YXRpb24sXG4gIHVzZUxvZ291dE11dGF0aW9uLFxuICB1c2VNZVF1ZXJ5LFxufSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcbmltcG9ydCB7XG4gIEFkZEljb24sXG4gIENoZXZyb25Eb3duSWNvbixcbiAgRWRpdEljb24sXG4gIEV4dGVybmFsTGlua0ljb24sXG4gIEhhbWJ1cmdlckljb24sXG4gIFJlcGVhdEljb24sXG4gIFNldHRpbmdzSWNvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcbmltcG9ydCB7IFJpTG9nb3V0Qm94UkxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcbmltcG9ydCB7XG4gIEJzRmlsbEhvdXNlRG9vckZpbGwsXG4gIEJzUHV6emxlRmlsbCxcbiAgQnNTdGFyRmlsbCxcbiAgQnNUb29scyxcbiAgQnNMaXN0VWwsXG59IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tIFwiLi4vdXRpbHMvaXNTZXJ2ZXJcIjtcblxuaW50ZXJmYWNlIE5hdkJhclByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBOYXZCYXI6IFJlYWN0LkZDPE5hdkJhclByb3BzPiA9ICh7fSkgPT4ge1xuICBjb25zdCBbeyBmZXRjaGluZzogbG9nb3V0RmV0Y2hpbmcgfSwgbG9nb3V0XSA9IHVzZUxvZ291dE11dGF0aW9uKCk7XG4gIGNvbnN0IFt7IGRhdGEsIGZldGNoaW5nIH1dID0gdXNlTWVRdWVyeSh7XG4gICAgcGF1c2U6IGlzU2VydmVyKCksXG4gIH0pO1xuXG4gIGxldCBib2R5ID0gbnVsbDtcbiAgaWYgKGZldGNoaW5nKSB7XG4gIH0gZWxzZSBpZiAoIWRhdGE/Lm1lKSB7XG4gICAgYm9keSA9IChcbiAgICAgIDw+XG4gICAgICAgIDxOZXh0TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgPExpbmsgbXI9ezJ9IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIm1cIj5cbiAgICAgICAgICAgIGxvZ2luXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgIDxMaW5rIGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIm1cIj5cbiAgICAgICAgICAgIHJlZ2lzdGVyXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBib2R5ID0gKFxuICAgICAgPENlbnRlcj5cbiAgICAgICAgPEJveCBtcj17Nn0gY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwic21cIiBmb250V2VpZ2h0PVwic2VtaWJvbGRcIj5cbiAgICAgICAgICBXZWxjb21lLCB7ZGF0YS5tZS51c2VybmFtZX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImxvZ291dFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgbG9nb3V0KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgIGFzPXtSaUxvZ291dEJveFJMaW5lfVxuICAgICAgICAgIG10PXswLjV9XG4gICAgICAgIC8+XG4gICAgICA8L0NlbnRlcj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2VudGVyXG4gICAgICB6SW5kZXg9ezF9XG4gICAgICBwb3NpdGlvbj1cInN0aWNreVwiXG4gICAgICB0b3A9ezB9XG4gICAgICB3PVwiMTAwJVwiXG4gICAgICBwPXs0fVxuICAgICAgbWw9e1wiYXV0b1wifVxuICAgICAgbWI9ezR9XG4gICAgICBib3hTaGFkb3c9XCJiYXNlXCJcbiAgICAgIGJnPVwiZ3JlZW4uNDAwXCJcbiAgICA+XG4gICAgICA8TWVudT5cbiAgICAgICAgPE1lbnVCdXR0b25cbiAgICAgICAgICBhcz17SWNvbkJ1dHRvbn1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiT3B0aW9uc1wiXG4gICAgICAgICAgaWNvbj17PEhhbWJ1cmdlckljb24gLz59XG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAvPlxuICAgICAgICA8TWVudUxpc3QgYmc9XCJ3aGl0ZVwiPlxuICAgICAgICAgIDxNZW51SXRlbSBpY29uPXs8QnNGaWxsSG91c2VEb29yRmlsbCAvPn0+SG9tZTwvTWVudUl0ZW0+XG4gICAgICAgICAgPE1lbnVJdGVtIGljb249ezxCc1B1enpsZUZpbGwgLz59PkV4cGxvcmU8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSBpY29uPXs8QnNTdGFyRmlsbCAvPn0+RmF2b3JpdGVzPC9NZW51SXRlbT5cbiAgICAgICAgICA8TWVudUl0ZW0gaWNvbj17PEVkaXRJY29uIC8+fT5PcmRlcnM8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSBpY29uPXs8QnNUb29scyAvPn0+U2V0dGluZ3M8L01lbnVJdGVtPlxuICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgPC9NZW51PlxuICAgICAgPEhlYWRpbmcgbWw9ezJ9IGNvbG9yPVwid2hpdGVcIiBhcz1cImgxXCIgc2l6ZT1cImxnXCIgbGV0dGVyU3BhY2luZz17XCItLjFyZW1cIn0+XG4gICAgICAgIEdyYXNzXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCJ4c1wiIG10PXsyfSBtbD17Mn0+XG4gICAgICAgIFRoZSBHcm9jZXJ5IEFzc2lzdGFudFxuICAgICAgPC9UZXh0PlxuICAgICAgPEJveCBtbD1cImF1dG9cIj57Ym9keX08L0JveD5cbiAgICA8L0NlbnRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.tsx\n");

/***/ })

})