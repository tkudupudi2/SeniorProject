webpackHotUpdate_N_E("pages/store",{

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBar\", function() { return NavBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.ts\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _utils_isServer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/isServer */ \"./src/utils/isServer.ts\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/alan/Desktop/Projects/SeniorProject/grass/grass-web/src/components/NavBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar NavBar = function NavBar(_ref) {\n  _s();\n\n  Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref);\n\n  var _useLogoutMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useLogoutMutation\"])(),\n      _useLogoutMutation2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLogoutMutation, 2),\n      logoutFetching = _useLogoutMutation2[0].fetching,\n      logout = _useLogoutMutation2[1];\n\n  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useMeQuery\"])({\n    pause: Object(_utils_isServer__WEBPACK_IMPORTED_MODULE_9__[\"isServer\"])()\n  }),\n      _useMeQuery2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useMeQuery, 1),\n      _useMeQuery2$ = _useMeQuery2[0],\n      data = _useMeQuery2$.data,\n      fetching = _useMeQuery2$.fetching;\n\n  var body = null;\n\n  if (fetching) {} else if (!(data !== null && data !== void 0 && data.me)) {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/login\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n          mr: 2,\n          color: \"white\",\n          fontSize: \"m\",\n          children: \"login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/register\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n          color: \"white\",\n          fontSize: \"m\",\n          children: \"register\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true);\n  } else {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        mr: 6,\n        color: \"white\",\n        fontSize: \"sm\",\n        fontWeight: \"semibold\",\n        children: data.me.username\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Spacer\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"], {\n        variant: \"outline\",\n        \"aria-label\": \"logout\",\n        onClick: function onClick() {\n          logout();\n        },\n        color: \"white\",\n        size: \"xs\",\n        as: react_icons_ri__WEBPACK_IMPORTED_MODULE_7__[\"RiLogoutBoxRLine\"],\n        mt: 0.5\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n      zIndex: 1,\n      position: \"sticky\",\n      top: 0,\n      w: \"100%\",\n      p: 4,\n      ml: \"auto\",\n      boxShadow: \"0 3px 6px -6px black\",\n      bg: \"green.400\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n        ml: 2,\n        color: \"white\",\n        as: \"h1\",\n        size: \"lg\",\n        letterSpacing: \"-.1rem\",\n        children: \"Grass\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        as: \"span\",\n        whiteSpace: \"nowrap\",\n        color: \"white\",\n        fontSize: \"xs\",\n        mt: 2,\n        ml: 2,\n        children: \"The Grocery Assistant\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"InputGroup\"], {\n        ml: 4,\n        mr: 4,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"InputLeftElement\"], {\n          pointerEvents: \"none\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__[\"BsSearch\"], {\n            color: \"white\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 130,\n            columnNumber: 23\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          placeholder: \"\",\n          size: \"md\",\n          fontColor: \"white\",\n          boxShadow: \"md\",\n          type: \"unstyled\",\n          color: \"white\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        ml: \"auto\",\n        children: body\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n      zIndex: 1,\n      top: 0,\n      w: \"100%\",\n      p: 4,\n      ml: \"auto\",\n      mb: 4,\n      bg: \"green.400\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n        mr: \"auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/login\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n            mr: 2,\n            color: \"white\",\n            fontSize: \"xs\",\n            children: \"\\uD83E\\uDD58 store\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 154,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 153,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/register\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n            color: \"white\",\n            fontSize: \"xs\",\n            children: \"\\uD83E\\uDD51favorites\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 159,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 158,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(NavBar, \"bu7Mo57UkJD6Z7YYu+ueXRjOJFY=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useLogoutMutation\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useMeQuery\"]];\n});\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeD8wZTMyIl0sIm5hbWVzIjpbIk5hdkJhciIsInVzZUxvZ291dE11dGF0aW9uIiwibG9nb3V0RmV0Y2hpbmciLCJmZXRjaGluZyIsImxvZ291dCIsInVzZU1lUXVlcnkiLCJwYXVzZSIsImlzU2VydmVyIiwiZGF0YSIsImJvZHkiLCJtZSIsInVzZXJuYW1lIiwiUmlMb2dvdXRCb3hSTGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvQkE7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQVFBO0FBSU8sSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBUTtBQUFBOztBQUFBOztBQUFBLDJCQUNKQyw0RUFBaUIsRUFEYjtBQUFBO0FBQUEsTUFDaENDLGNBRGdDLDBCQUMxQ0MsUUFEMEM7QUFBQSxNQUNkQyxNQURjOztBQUFBLG9CQUV0QkMscUVBQVUsQ0FBQztBQUN0Q0MsU0FBSyxFQUFFQyxnRUFBUTtBQUR1QixHQUFELENBRlk7QUFBQTtBQUFBO0FBQUEsTUFFMUNDLElBRjBDLGlCQUUxQ0EsSUFGMEM7QUFBQSxNQUVwQ0wsUUFGb0MsaUJBRXBDQSxRQUZvQzs7QUFNbkQsTUFBSU0sSUFBSSxHQUFHLElBQVg7O0FBQ0EsTUFBSU4sUUFBSixFQUFjLENBQ2IsQ0FERCxNQUNPLElBQUksRUFBQ0ssSUFBRCxhQUFDQSxJQUFELGVBQUNBLElBQUksQ0FBRUUsRUFBUCxDQUFKLEVBQWU7QUFDcEJELFFBQUksZ0JBQ0Y7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFVLFlBQUksRUFBQyxRQUFmO0FBQUEsK0JBQ0UscUVBQUMscURBQUQ7QUFBTSxZQUFFLEVBQUUsQ0FBVjtBQUFhLGVBQUssRUFBQyxPQUFuQjtBQUEyQixrQkFBUSxFQUFDLEdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxl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QUhKO0FBSUUsT0FBQyxFQUFFLENBSkw7QUFLRSxRQUFFLEVBQUUsTUFMTjtBQU1FLFFBQUUsRUFBRSxDQU5OO0FBT0UsUUFBRSxFQUFDLFdBUEw7QUFBQSw2QkFTRSxxRUFBQyxxREFBRDtBQUFNLFVBQUUsRUFBQyxNQUFUO0FBQUEsZ0NBQ0UscUVBQUMsZ0RBQUQ7QUFBVSxjQUFJLEVBQUMsUUFBZjtBQUFBLGlDQUNFLHFFQUFDLHFEQUFEO0FBQU0sY0FBRSxFQUFFLENBQVY7QUFBYSxpQkFBSyxFQUFDLE9BQW5CO0FBQTJCLG9CQUFRLEVBQUMsSUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUUscUVBQUMsZ0RBQUQ7QUFBVSxjQUFJLEVBQUMsV0FBZjtBQUFBLGlDQUNFLHFFQUFDLHFEQUFEO0FBQU0saUJBQUssRUFBQyxPQUFaO0FBQW9CLG9CQUFRLEVBQUMsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5Q0Y7QUFBQSxrQkFERjtBQXVFRCxDQXBITTs7R0FBTVQsTTtVQUNvQ0Msb0UsRUFDbEJJLDZEOzs7S0FGbEJMLE0iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVGV4dCxcbiAgQm94LFxuICBGbGV4LFxuICBMaW5rLFxuICBCdXR0b24sXG4gIEljb24sXG4gIEljb25CdXR0b24sXG4gIFNwYWNlcixcbiAgQ2VudGVyLFxuICBNZW51LFxuICBNZW51QnV0dG9uLFxuICBNZW51TGlzdCxcbiAgTWVudUl0ZW0sXG4gIE1lbnVEaXZpZGVyLFxuICBIZWFkaW5nLFxuICBJbnB1dCxcbiAgSW5wdXRHcm91cCxcbiAgSW5wdXRMZWZ0RWxlbWVudCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7XG4gIHVzZUxvZ2luTXV0YXRpb24sXG4gIHVzZUxvZ291dE11dGF0aW9uLFxuICB1c2VNZVF1ZXJ5LFxufSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcbmltcG9ydCB7XG4gIEFkZEljb24sXG4gIENoZXZyb25Eb3duSWNvbixcbiAgRWRpdEljb24sXG4gIEV4dGVybmFsTGlua0ljb24sXG4gIEhhbWJ1cmdlckljb24sXG4gIFBob25lSWNvbixcbiAgUmVwZWF0SWNvbixcbiAgU2V0dGluZ3NJY29uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuaW1wb3J0IHsgUmlMb2dvdXRCb3hSTGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xuaW1wb3J0IHtcbiAgQnNGaWxsSG91c2VEb29yRmlsbCxcbiAgQnNQdXp6bGVGaWxsLFxuICBCc1N0YXJGaWxsLFxuICBCc1Rvb2xzLFxuICBCc0xpc3RVbCxcbiAgQnNTZWFyY2gsXG59IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tIFwiLi4vdXRpbHMvaXNTZXJ2ZXJcIjtcblxuaW50ZXJmYWNlIE5hdkJhclByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBOYXZCYXI6IFJlYWN0LkZDPE5hdkJhclByb3BzPiA9ICh7fSkgPT4ge1xuICBjb25zdCBbeyBmZXRjaGluZzogbG9nb3V0RmV0Y2hpbmcgfSwgbG9nb3V0XSA9IHVzZUxvZ291dE11dGF0aW9uKCk7XG4gIGNvbnN0IFt7IGRhdGEsIGZldGNoaW5nIH1dID0gdXNlTWVRdWVyeSh7XG4gICAgcGF1c2U6IGlzU2VydmVyKCksXG4gIH0pO1xuXG4gIGxldCBib2R5ID0gbnVsbDtcbiAgaWYgKGZldGNoaW5nKSB7XG4gIH0gZWxzZSBpZiAoIWRhdGE/Lm1lKSB7XG4gICAgYm9keSA9IChcbiAgICAgIDw+XG4gICAgICAgIDxOZXh0TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgPExpbmsgbXI9ezJ9IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIm1cIj5cbiAgICAgICAgICAgIGxvZ2luXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgIDxMaW5rIGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIm1cIj5cbiAgICAgICAgICAgIHJlZ2lzdGVyXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBib2R5ID0gKFxuICAgICAgPENlbnRlcj5cbiAgICAgICAgPEJveCBtcj17Nn0gY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwic21cIiBmb250V2VpZ2h0PVwic2VtaWJvbGRcIj5cbiAgICAgICAgICB7ZGF0YS5tZS51c2VybmFtZX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImxvZ291dFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgbG9nb3V0KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgIGFzPXtSaUxvZ291dEJveFJMaW5lfVxuICAgICAgICAgIG10PXswLjV9XG4gICAgICAgIC8+XG4gICAgICA8L0NlbnRlcj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENlbnRlclxuICAgICAgICB6SW5kZXg9ezF9XG4gICAgICAgIHBvc2l0aW9uPVwic3RpY2t5XCJcbiAgICAgICAgdG9wPXswfVxuICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgIHA9ezR9XG4gICAgICAgIG1sPXtcImF1dG9cIn1cbiAgICAgICAgYm94U2hhZG93PVwiMCAzcHggNnB4IC02cHggYmxhY2tcIlxuICAgICAgICBiZz1cImdyZWVuLjQwMFwiXG4gICAgICA+XG4gICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgbWw9ezJ9XG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgYXM9XCJoMVwiXG4gICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICBsZXR0ZXJTcGFjaW5nPXtcIi0uMXJlbVwifVxuICAgICAgICA+XG4gICAgICAgICAgR3Jhc3NcbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgICAgd2hpdGVTcGFjZT1cIm5vd3JhcFwiXG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgZm9udFNpemU9XCJ4c1wiXG4gICAgICAgICAgbXQ9ezJ9XG4gICAgICAgICAgbWw9ezJ9XG4gICAgICAgID5cbiAgICAgICAgICBUaGUgR3JvY2VyeSBBc3Npc3RhbnRcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8SW5wdXRHcm91cCBtbD17NH0gbXI9ezR9PlxuICAgICAgICAgIDxJbnB1dExlZnRFbGVtZW50XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzPVwibm9uZVwiXG4gICAgICAgICAgICBjaGlsZHJlbj17PEJzU2VhcmNoIGNvbG9yPVwid2hpdGVcIiAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgIGZvbnRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIGJveFNoYWRvdz1cIm1kXCJcbiAgICAgICAgICAgIHR5cGU9XCJ1bnN0eWxlZFwiXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgIDxCb3ggbWw9XCJhdXRvXCI+e2JvZHl9PC9Cb3g+XG4gICAgICA8L0NlbnRlcj5cbiAgICAgIDxDZW50ZXJcbiAgICAgICAgekluZGV4PXsxfVxuICAgICAgICB0b3A9ezB9XG4gICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgcD17NH1cbiAgICAgICAgbWw9e1wiYXV0b1wifVxuICAgICAgICBtYj17NH1cbiAgICAgICAgYmc9XCJncmVlbi40MDBcIlxuICAgICAgPlxuICAgICAgICA8RmxleCBtcj1cImF1dG9cIj5cbiAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgPExpbmsgbXI9ezJ9IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cInhzXCI+XG4gICAgICAgICAgICAgIPCfpZggc3RvcmVcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICA8TGluayBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICDwn6WRZmF2b3JpdGVzXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9DZW50ZXI+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NavBar.tsx\n");

/***/ })

})