webpackHotUpdate_N_E("pages/store",{

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBar\", function() { return NavBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.ts\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _utils_isServer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/isServer */ \"./src/utils/isServer.ts\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/alan/Desktop/Projects/SeniorProject/grass/grass-web/src/components/NavBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar NavBar = function NavBar(_ref) {\n  _s();\n\n  Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref);\n\n  var _useLogoutMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useLogoutMutation\"])(),\n      _useLogoutMutation2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLogoutMutation, 2),\n      logoutFetching = _useLogoutMutation2[0].fetching,\n      logout = _useLogoutMutation2[1];\n\n  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useMeQuery\"])({\n    pause: Object(_utils_isServer__WEBPACK_IMPORTED_MODULE_10__[\"isServer\"])()\n  }),\n      _useMeQuery2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useMeQuery, 1),\n      _useMeQuery2$ = _useMeQuery2[0],\n      data = _useMeQuery2$.data,\n      fetching = _useMeQuery2$.fetching;\n\n  var body = null;\n\n  if (fetching) {} else if (!(data !== null && data !== void 0 && data.me)) {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/login\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n          mr: 2,\n          color: \"white\",\n          fontSize: \"m\",\n          children: \"login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/register\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n          color: \"white\",\n          fontSize: \"m\",\n          children: \"register\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true);\n  } else {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        mr: 6,\n        color: \"white\",\n        fontSize: \"sm\",\n        fontWeight: \"semibold\",\n        children: data.me.username\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Spacer\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"], {\n        variant: \"outline\",\n        \"aria-label\": \"logout\",\n        onClick: function onClick() {\n          logout();\n        },\n        color: \"white\",\n        size: \"xs\",\n        as: react_icons_ri__WEBPACK_IMPORTED_MODULE_8__[\"RiLogoutBoxRLine\"],\n        mt: 0.5\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n      zIndex: 1,\n      position: \"sticky\",\n      top: 0,\n      w: \"100%\",\n      p: 4,\n      ml: \"auto\",\n      boxShadow: \"0 3px 6px -6px black\",\n      bg: \"green.400\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuButton\"], {\n          as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"],\n          \"aria-label\": \"Options\",\n          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__[\"HamburgerIcon\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 19\n          }, _this),\n          variant: \"outline\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuList\"], {\n          bg: \"white\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuItem\"], {\n            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__[\"BsFillHouseDoorFill\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 29\n            }, _this),\n            children: \"Home\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuItem\"], {\n            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__[\"BsPuzzleFill\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 29\n            }, _this),\n            children: \"Explore\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuItem\"], {\n            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__[\"BsStarFill\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 29\n            }, _this),\n            children: \"Favorites\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuItem\"], {\n            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__[\"EditIcon\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 29\n            }, _this),\n            children: \"Orders\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuItem\"], {\n            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__[\"BsTools\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 29\n            }, _this),\n            children: \"Settings\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n        ml: 2,\n        color: \"white\",\n        as: \"h1\",\n        size: \"lg\",\n        letterSpacing: \"-.1rem\",\n        children: \"Grass\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        as: \"span\",\n        whiteSpace: \"nowrap\",\n        color: \"white\",\n        fontSize: \"xs\",\n        mt: 2,\n        ml: 2,\n        children: \"The Grocery Assistant\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"InputGroup\"], {\n        ml: 4,\n        mr: 4,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"InputLeftElement\"], {\n          pointerEvents: \"none\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__[\"BsSearch\"], {\n            color: \"white\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 145,\n            columnNumber: 23\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          placeholder: \"\",\n          size: \"md\",\n          fontColor: \"white\",\n          boxShadow: \"md\",\n          type: \"unstyled\",\n          color: \"white\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 147,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        ml: \"auto\",\n        children: body\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 156,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n      zIndex: 1,\n      top: 0,\n      w: \"100%\",\n      p: 4,\n      ml: \"auto\",\n      mb: 4,\n      bg: \"green.400\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(NavBar, \"bu7Mo57UkJD6Z7YYu+ueXRjOJFY=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useLogoutMutation\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useMeQuery\"]];\n});\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeD8wZTMyIl0sIm5hbWVzIjpbIk5hdkJhciIsInVzZUxvZ291dE11dGF0aW9uIiwibG9nb3V0RmV0Y2hpbmciLCJmZXRjaGluZyIsImxvZ291dCIsInVzZU1lUXVlcnkiLCJwYXVzZSIsImlzU2VydmVyIiwiZGF0YSIsImJvZHkiLCJtZSIsInVzZXJuYW1lIiwiUmlMb2dvdXRCb3hSTGluZSIsIkljb25CdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW9CQTtBQUNBO0FBQ0E7QUFLQTtBQVVBO0FBQ0E7QUFRQTtBQUlPLElBQU1BLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLE9BQVE7QUFBQTs7QUFBQTs7QUFBQSwyQkFDSkMsNEVBQWlCLEVBRGI7QUFBQTtBQUFBLE1BQ2hDQyxjQURnQywwQkFDMUNDLFFBRDBDO0FBQUEsTUFDZEMsTUFEYzs7QUFBQSxvQkFFdEJDLHFFQUFVLENBQUM7QUFDdENDLFNBQUssRUFBRUMsaUVBQVE7QUFEdUIsR0FBRCxDQUZZO0FBQUE7QUFBQTtBQUFBLE1BRTFDQyxJQUYwQyxpQkFFMUNBLElBRjBDO0FBQUEsTUFFcENMLFFBRm9DLGlCQUVwQ0EsUUFGb0M7O0FBTW5ELE1BQUlNLElBQUksR0FBRyxJQUFYOztBQUNBLE1BQUlOLFFBQUosRUFBYyxDQUNiLENBREQsTUFDTyxJQUFJLEVBQUNLLElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVFLEVBQVAsQ0FBSixFQUFlO0FBQ3BCRCxRQUFJLGdCQUNGO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBVSxZQUFJLEVBQUMsUUFBZjtBQUFBLCtCQUNFLHFFQUFDLHFEQUFEO0FBQU0sWUFBRSxFQUFFLENBQVY7QUFBYSxlQUFLLEVBQUMsT0FBbkI7QUFBMkIsa0JBQVEsRUFBQyxHQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FB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RSxDQU5OO0FBT0UsUUFBRSxFQUFDO0FBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdERjtBQUFBLGtCQURGO0FBeUVELENBdEhNOztHQUFNVCxNO1VBQ29DQyxvRSxFQUNsQkksNkQ7OztLQUZsQkwsTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL05hdkJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBUZXh0LFxuICBCb3gsXG4gIEZsZXgsXG4gIExpbmssXG4gIEJ1dHRvbixcbiAgSWNvbixcbiAgSWNvbkJ1dHRvbixcbiAgU3BhY2VyLFxuICBDZW50ZXIsXG4gIE1lbnUsXG4gIE1lbnVCdXR0b24sXG4gIE1lbnVMaXN0LFxuICBNZW51SXRlbSxcbiAgTWVudURpdmlkZXIsXG4gIEhlYWRpbmcsXG4gIElucHV0LFxuICBJbnB1dEdyb3VwLFxuICBJbnB1dExlZnRFbGVtZW50LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgdXNlTG9naW5NdXRhdGlvbixcbiAgdXNlTG9nb3V0TXV0YXRpb24sXG4gIHVzZU1lUXVlcnksXG59IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IHtcbiAgQWRkSWNvbixcbiAgQ2hldnJvbkRvd25JY29uLFxuICBFZGl0SWNvbixcbiAgRXh0ZXJuYWxMaW5rSWNvbixcbiAgSGFtYnVyZ2VySWNvbixcbiAgUGhvbmVJY29uLFxuICBSZXBlYXRJY29uLFxuICBTZXR0aW5nc0ljb24sXG59IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5pbXBvcnQgeyBSaUxvZ291dEJveFJMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XG5pbXBvcnQge1xuICBCc0ZpbGxIb3VzZURvb3JGaWxsLFxuICBCc1B1enpsZUZpbGwsXG4gIEJzU3RhckZpbGwsXG4gIEJzVG9vbHMsXG4gIEJzTGlzdFVsLFxuICBCc1NlYXJjaCxcbn0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gXCIuLi91dGlscy9pc1NlcnZlclwiO1xuXG5pbnRlcmZhY2UgTmF2QmFyUHJvcHMge31cblxuZXhwb3J0IGNvbnN0IE5hdkJhcjogUmVhY3QuRkM8TmF2QmFyUHJvcHM+ID0gKHt9KSA9PiB7XG4gIGNvbnN0IFt7IGZldGNoaW5nOiBsb2dvdXRGZXRjaGluZyB9LCBsb2dvdXRdID0gdXNlTG9nb3V0TXV0YXRpb24oKTtcbiAgY29uc3QgW3sgZGF0YSwgZmV0Y2hpbmcgfV0gPSB1c2VNZVF1ZXJ5KHtcbiAgICBwYXVzZTogaXNTZXJ2ZXIoKSxcbiAgfSk7XG5cbiAgbGV0IGJvZHkgPSBudWxsO1xuICBpZiAoZmV0Y2hpbmcpIHtcbiAgfSBlbHNlIGlmICghZGF0YT8ubWUpIHtcbiAgICBib2R5ID0gKFxuICAgICAgPD5cbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICA8TGluayBtcj17Mn0gY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwibVwiPlxuICAgICAgICAgICAgbG9naW5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgIDxOZXh0TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgPExpbmsgY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwibVwiPlxuICAgICAgICAgICAgcmVnaXN0ZXJcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmV4dExpbms+XG4gICAgICA8Lz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGJvZHkgPSAoXG4gICAgICA8Q2VudGVyPlxuICAgICAgICA8Qm94IG1yPXs2fSBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCJzbVwiIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiPlxuICAgICAgICAgIHtkYXRhLm1lLnVzZXJuYW1lfVxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwibG9nb3V0XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBsb2dvdXQoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgYXM9e1JpTG9nb3V0Qm94UkxpbmV9XG4gICAgICAgICAgbXQ9ezAuNX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ2VudGVyPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2VudGVyXG4gICAgICAgIHpJbmRleD17MX1cbiAgICAgICAgcG9zaXRpb249XCJzdGlja3lcIlxuICAgICAgICB0b3A9ezB9XG4gICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgcD17NH1cbiAgICAgICAgbWw9e1wiYXV0b1wifVxuICAgICAgICBib3hTaGFkb3c9XCIwIDNweCA2cHggLTZweCBibGFja1wiXG4gICAgICAgIGJnPVwiZ3JlZW4uNDAwXCJcbiAgICAgID5cbiAgICAgICAgPE1lbnU+XG4gICAgICAgICAgPE1lbnVCdXR0b25cbiAgICAgICAgICAgIGFzPXtJY29uQnV0dG9ufVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk9wdGlvbnNcIlxuICAgICAgICAgICAgaWNvbj17PEhhbWJ1cmdlckljb24gLz59XG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWVudUxpc3QgYmc9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgPE1lbnVJdGVtIGljb249ezxCc0ZpbGxIb3VzZURvb3JGaWxsIC8+fT5Ib21lPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDxNZW51SXRlbSBpY29uPXs8QnNQdXp6bGVGaWxsIC8+fT5FeHBsb3JlPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDxNZW51SXRlbSBpY29uPXs8QnNTdGFyRmlsbCAvPn0+RmF2b3JpdGVzPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDxNZW51SXRlbSBpY29uPXs8RWRpdEljb24gLz59Pk9yZGVyczwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8TWVudUl0ZW0gaWNvbj17PEJzVG9vbHMgLz59PlNldHRpbmdzPC9NZW51SXRlbT5cbiAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICA8L01lbnU+XG4gICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgbWw9ezJ9XG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgYXM9XCJoMVwiXG4gICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICBsZXR0ZXJTcGFjaW5nPXtcIi0uMXJlbVwifVxuICAgICAgICA+XG4gICAgICAgICAgR3Jhc3NcbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgICAgd2hpdGVTcGFjZT1cIm5vd3JhcFwiXG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgZm9udFNpemU9XCJ4c1wiXG4gICAgICAgICAgbXQ9ezJ9XG4gICAgICAgICAgbWw9ezJ9XG4gICAgICAgID5cbiAgICAgICAgICBUaGUgR3JvY2VyeSBBc3Npc3RhbnRcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8SW5wdXRHcm91cCBtbD17NH0gbXI9ezR9PlxuICAgICAgICAgIDxJbnB1dExlZnRFbGVtZW50XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzPVwibm9uZVwiXG4gICAgICAgICAgICBjaGlsZHJlbj17PEJzU2VhcmNoIGNvbG9yPVwid2hpdGVcIiAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgIGZvbnRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIGJveFNoYWRvdz1cIm1kXCJcbiAgICAgICAgICAgIHR5cGU9XCJ1bnN0eWxlZFwiXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgIDxCb3ggbWw9XCJhdXRvXCI+e2JvZHl9PC9Cb3g+XG4gICAgICA8L0NlbnRlcj5cbiAgICAgIDxDZW50ZXJcbiAgICAgICAgekluZGV4PXsxfVxuICAgICAgICB0b3A9ezB9XG4gICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgcD17NH1cbiAgICAgICAgbWw9e1wiYXV0b1wifVxuICAgICAgICBtYj17NH1cbiAgICAgICAgYmc9XCJncmVlbi40MDBcIlxuICAgICAgPjwvQ2VudGVyPlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar.tsx\n");

/***/ })

})