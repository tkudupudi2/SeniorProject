webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBar\", function() { return NavBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.ts\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _utils_isServer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/isServer */ \"./src/utils/isServer.ts\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/alan/Desktop/Projects/SeniorProject/grass/grass-web/src/components/NavBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar NavBar = function NavBar(_ref) {\n  _s();\n\n  Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref);\n\n  var _useLogoutMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useLogoutMutation\"])(),\n      _useLogoutMutation2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLogoutMutation, 2),\n      logoutFetching = _useLogoutMutation2[0].fetching,\n      logout = _useLogoutMutation2[1];\n\n  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useMeQuery\"])({\n    pause: Object(_utils_isServer__WEBPACK_IMPORTED_MODULE_10__[\"isServer\"])()\n  }),\n      _useMeQuery2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useMeQuery, 1),\n      _useMeQuery2$ = _useMeQuery2[0],\n      data = _useMeQuery2$.data,\n      fetching = _useMeQuery2$.fetching;\n\n  var body = null;\n\n  if (fetching) {} else if (!(data !== null && data !== void 0 && data.me)) {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/login\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n          mr: 2,\n          color: \"white\",\n          fontSize: \"m\",\n          children: \"login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/register\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n          color: \"white\",\n          fontSize: \"m\",\n          children: \"register\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true);\n  } else {\n    var _data$me;\n\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        mr: 6,\n        color: \"white\",\n        fontSize: \"sm\",\n        fontWeight: \"semibold\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuButton\"], {\n            as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"],\n            rounded: \"full\",\n            variant: \"link\",\n            cursor: \"pointer\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Avatar\"], {\n              size: \"sm\",\n              name: (_data$me = data.me) === null || _data$me === void 0 ? void 0 : _data$me.username,\n              src: \"https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuList\"], {\n            bg: \"linear-gradient(130deg, hsl(152, 58%, 53%), #00b698)\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuItem\"], {\n              children: \"Link 1\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuItem\"], {\n              children: \"Link 2\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuDivider\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuItem\"], {\n              children: \"Link 3\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"], {\n        variant: \"outline\",\n        \"aria-label\": \"logout\",\n        color: \"white\",\n        size: \"xs\",\n        as: react_icons_ai__WEBPACK_IMPORTED_MODULE_8__[\"AiOutlineShoppingCart\"],\n        mt: 0.5,\n        mr: 6\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"], {\n        variant: \"outline\",\n        \"aria-label\": \"logout\",\n        onClick: function onClick() {\n          logout();\n        },\n        color: \"white\",\n        size: \"xs\",\n        as: react_icons_ri__WEBPACK_IMPORTED_MODULE_7__[\"RiLogoutBoxRLine\"],\n        mt: 0.5,\n        mr: 6\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n      zIndex: 1,\n      position: \"sticky\",\n      top: 0,\n      w: \"100%\",\n      p: 4,\n      ml: \"auto\",\n      boxShadow: \"0 3px 6px -6px black\",\n      bg: \"linear-gradient(130deg, hsl(152, 58%, 53%), #00b698)\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n        ml: 2,\n        color: \"white\",\n        as: \"h1\",\n        size: \"lg\",\n        letterSpacing: \"-.1rem\",\n        children: \"Grass\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        as: \"span\",\n        whiteSpace: \"nowrap\",\n        color: \"white\",\n        fontSize: \"xs\",\n        mt: 2,\n        ml: 2,\n        children: \"The Grocery Assistant\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"InputGroup\"], {\n        ml: 4,\n        mr: 4,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"InputLeftElement\"], {\n          pointerEvents: \"none\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__[\"BsSearch\"], {\n            color: \"white\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 160,\n            columnNumber: 23\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 158,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          placeholder: \"\",\n          size: \"md\",\n          fontColor: \"white\",\n          boxShadow: \"md\",\n          type: \"unstyled\",\n          color: \"white\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 162,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 157,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        ml: \"auto\",\n        children: body\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 171,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n      zIndex: 1,\n      top: 0,\n      w: \"100%\",\n      p: 4,\n      ml: \"auto\",\n      mb: 4,\n      bg: \"linear-gradient(130deg, hsl(152, 58%, 44%), #00b698)\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n        mr: \"auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n            mr: 4,\n            color: \"white\",\n            fontSize: \"xs\",\n            children: \"home\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 184,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 183,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/store\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n            mr: 4,\n            color: \"white\",\n            fontSize: \"xs\",\n            children: \"grocery\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 189,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 188,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/favorites\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n            mr: 4,\n            color: \"white\",\n            fontSize: \"xs\",\n            children: \"favorites\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 194,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 193,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/pantry\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n            mr: 4,\n            color: \"white\",\n            fontSize: \"xs\",\n            children: \"pantry\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 199,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 198,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/recipes\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n            mr: 4,\n            color: \"white\",\n            fontSize: \"xs\",\n            children: \"recipes\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 204,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 203,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 182,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 173,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(NavBar, \"bu7Mo57UkJD6Z7YYu+ueXRjOJFY=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useLogoutMutation\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useMeQuery\"]];\n});\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeD8wZTMyIl0sIm5hbWVzIjpbIk5hdkJhciIsInVzZUxvZ291dE11dGF0aW9uIiwibG9nb3V0RmV0Y2hpbmciLCJmZXRjaGluZyIsImxvZ291dCIsInVzZU1lUXVlcnkiLCJwYXVzZSIsImlzU2VydmVyIiwiZGF0YSIsImJvZHkiLCJtZSIsIkJ1dHRvbiIsInVzZXJuYW1lIiwiQWlPdXRsaW5lU2hvcHBpbmdDYXJ0IiwiUmlMb2dvdXRCb3hSTGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBcUJBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQVFBO0FBSU8sSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBUTtBQUFBOztBQUFBOztBQUFBLDJCQUNKQyw0RUFBaUIsRUFEYjtBQUFBO0FBQUEsTUFDaENDLGNBRGdDLDBCQUMxQ0MsUUFEMEM7QUFBQSxNQUNkQyxNQURjOztBQUFBLG9CQUV0QkMscUVBQVUsQ0FBQztBQUN0Q0MsU0FBSyxFQUFFQyxpRUFBUTtBQUR1QixHQUFELENBRlk7QUFBQTtBQUFBO0FBQUEsTUFFMUNDLElBRjBDLGlCQUUxQ0EsSUFGMEM7QUFBQSxNQUVwQ0wsUUFGb0MsaUJBRXBDQSxRQUZvQzs7QUFNbkQsTUFBSU0sSUFBSSxHQUFHLElBQVg7O0FBQ0EsTUFBSU4sUUFBSixFQUFjLENBQ2IsQ0FERCxNQUNPLElBQUksRUFBQ0ssSUFBRCxhQUFDQSxJQUFELGVBQUNBLElBQUksQ0FBRUUsRUFBUCxDQUFKLEVBQWU7QUFDcEJELFFBQUksZ0JBQ0Y7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFVLFlBQUksRUFBQyxRQUFmO0FBQUEsK0JBQ0UscUVBQUMscURBQUQ7QUFBTSxZQUFFLEVBQUUsQ0FBVjtBQUFhLGVBQUssRUFBQyxPQUFuQjtBQUEyQixrQkFBUSxFQUFDLEdBQXBDO0FBQUE7QUFBQTtBQUFBO0FB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QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlDRjtBQUFBLGtCQURGO0FBc0ZELENBL0pNOztHQUFNVCxNO1VBQ29DQyxvRSxFQUNsQkksNkQ7OztLQUZsQkwsTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL05hdkJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBUZXh0LFxuICBCb3gsXG4gIEZsZXgsXG4gIExpbmssXG4gIEJ1dHRvbixcbiAgSWNvbixcbiAgSWNvbkJ1dHRvbixcbiAgU3BhY2VyLFxuICBDZW50ZXIsXG4gIE1lbnUsXG4gIE1lbnVCdXR0b24sXG4gIE1lbnVMaXN0LFxuICBNZW51SXRlbSxcbiAgTWVudURpdmlkZXIsXG4gIEhlYWRpbmcsXG4gIElucHV0LFxuICBJbnB1dEdyb3VwLFxuICBJbnB1dExlZnRFbGVtZW50LFxuICBBdmF0YXIsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQge1xuICB1c2VMb2dpbk11dGF0aW9uLFxuICB1c2VMb2dvdXRNdXRhdGlvbixcbiAgdXNlTWVRdWVyeSxcbn0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQge1xuICBBZGRJY29uLFxuICBDaGV2cm9uRG93bkljb24sXG4gIEVkaXRJY29uLFxuICBFeHRlcm5hbExpbmtJY29uLFxuICBIYW1idXJnZXJJY29uLFxuICBQaG9uZUljb24sXG4gIFJlcGVhdEljb24sXG4gIFNldHRpbmdzSWNvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcbmltcG9ydCB7IFJpTG9nb3V0Qm94UkxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcbmltcG9ydCB7IEFpT3V0bGluZVNob3BwaW5nQ2FydCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHtcbiAgQnNGaWxsSG91c2VEb29yRmlsbCxcbiAgQnNQdXp6bGVGaWxsLFxuICBCc1N0YXJGaWxsLFxuICBCc1Rvb2xzLFxuICBCc0xpc3RVbCxcbiAgQnNTZWFyY2gsXG59IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tIFwiLi4vdXRpbHMvaXNTZXJ2ZXJcIjtcblxuaW50ZXJmYWNlIE5hdkJhclByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBOYXZCYXI6IFJlYWN0LkZDPE5hdkJhclByb3BzPiA9ICh7fSkgPT4ge1xuICBjb25zdCBbeyBmZXRjaGluZzogbG9nb3V0RmV0Y2hpbmcgfSwgbG9nb3V0XSA9IHVzZUxvZ291dE11dGF0aW9uKCk7XG4gIGNvbnN0IFt7IGRhdGEsIGZldGNoaW5nIH1dID0gdXNlTWVRdWVyeSh7XG4gICAgcGF1c2U6IGlzU2VydmVyKCksXG4gIH0pO1xuXG4gIGxldCBib2R5ID0gbnVsbDtcbiAgaWYgKGZldGNoaW5nKSB7XG4gIH0gZWxzZSBpZiAoIWRhdGE/Lm1lKSB7XG4gICAgYm9keSA9IChcbiAgICAgIDw+XG4gICAgICAgIDxOZXh0TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgPExpbmsgbXI9ezJ9IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIm1cIj5cbiAgICAgICAgICAgIGxvZ2luXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgIDxMaW5rIGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIm1cIj5cbiAgICAgICAgICAgIHJlZ2lzdGVyXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBib2R5ID0gKFxuICAgICAgPENlbnRlcj5cbiAgICAgICAgPEJveCBtcj17Nn0gY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwic21cIiBmb250V2VpZ2h0PVwic2VtaWJvbGRcIj5cbiAgICAgICAgICA8TWVudT5cbiAgICAgICAgICAgIDxNZW51QnV0dG9uXG4gICAgICAgICAgICAgIGFzPXtCdXR0b259XG4gICAgICAgICAgICAgIHJvdW5kZWQ9e1wiZnVsbFwifVxuICAgICAgICAgICAgICB2YXJpYW50PXtcImxpbmtcIn1cbiAgICAgICAgICAgICAgY3Vyc29yPXtcInBvaW50ZXJcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgIHNpemU9e1wic21cIn1cbiAgICAgICAgICAgICAgICBuYW1lPXtkYXRhLm1lPy51c2VybmFtZX1cbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5MzY2NjQzODgxNy04NjZhOTEzNTNjYTk/aXhsaWI9cmItMC4zLjUmcT04MCZmbT1qcGcmY3JvcD1mYWNlcyZmaXQ9Y3JvcCZoPTIwMCZ3PTIwMCZzPWI2MTZiMmM1YjM3M2E4MGZmYzk2MzZiYTI0ZjdhNGE5XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTWVudUJ1dHRvbj5cbiAgICAgICAgICAgIDxNZW51TGlzdCBiZz1cImxpbmVhci1ncmFkaWVudCgxMzBkZWcsIGhzbCgxNTIsIDU4JSwgNTMlKSwgIzAwYjY5OClcIj5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtPkxpbmsgMTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51SXRlbT5MaW5rIDI8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8TWVudURpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtPkxpbmsgMzwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJsb2dvdXRcIlxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgYXM9e0FpT3V0bGluZVNob3BwaW5nQ2FydH1cbiAgICAgICAgICBtdD17MC41fVxuICAgICAgICAgIG1yPXs2fVxuICAgICAgICAvPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwibG9nb3V0XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBsb2dvdXQoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgYXM9e1JpTG9nb3V0Qm94UkxpbmV9XG4gICAgICAgICAgbXQ9ezAuNX1cbiAgICAgICAgICBtcj17Nn1cbiAgICAgICAgLz5cbiAgICAgIDwvQ2VudGVyPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2VudGVyXG4gICAgICAgIHpJbmRleD17MX1cbiAgICAgICAgcG9zaXRpb249XCJzdGlja3lcIlxuICAgICAgICB0b3A9ezB9XG4gICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgcD17NH1cbiAgICAgICAgbWw9e1wiYXV0b1wifVxuICAgICAgICBib3hTaGFkb3c9XCIwIDNweCA2cHggLTZweCBibGFja1wiXG4gICAgICAgIGJnPVwibGluZWFyLWdyYWRpZW50KDEzMGRlZywgaHNsKDE1MiwgNTglLCA1MyUpLCAjMDBiNjk4KVwiXG4gICAgICA+XG4gICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgbWw9ezJ9XG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgYXM9XCJoMVwiXG4gICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICBsZXR0ZXJTcGFjaW5nPXtcIi0uMXJlbVwifVxuICAgICAgICA+XG4gICAgICAgICAgR3Jhc3NcbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgICAgd2hpdGVTcGFjZT1cIm5vd3JhcFwiXG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgZm9udFNpemU9XCJ4c1wiXG4gICAgICAgICAgbXQ9ezJ9XG4gICAgICAgICAgbWw9ezJ9XG4gICAgICAgID5cbiAgICAgICAgICBUaGUgR3JvY2VyeSBBc3Npc3RhbnRcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8SW5wdXRHcm91cCBtbD17NH0gbXI9ezR9PlxuICAgICAgICAgIDxJbnB1dExlZnRFbGVtZW50XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzPVwibm9uZVwiXG4gICAgICAgICAgICBjaGlsZHJlbj17PEJzU2VhcmNoIGNvbG9yPVwid2hpdGVcIiAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgIGZvbnRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIGJveFNoYWRvdz1cIm1kXCJcbiAgICAgICAgICAgIHR5cGU9XCJ1bnN0eWxlZFwiXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgIDxCb3ggbWw9XCJhdXRvXCI+e2JvZHl9PC9Cb3g+XG4gICAgICA8L0NlbnRlcj5cbiAgICAgIDxDZW50ZXJcbiAgICAgICAgekluZGV4PXsxfVxuICAgICAgICB0b3A9ezB9XG4gICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgcD17NH1cbiAgICAgICAgbWw9e1wiYXV0b1wifVxuICAgICAgICBtYj17NH1cbiAgICAgICAgYmc9XCJsaW5lYXItZ3JhZGllbnQoMTMwZGVnLCBoc2woMTUyLCA1OCUsIDQ0JSksICMwMGI2OTgpXCJcbiAgICAgID5cbiAgICAgICAgPEZsZXggbXI9XCJhdXRvXCI+XG4gICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8TGluayBtcj17NH0gY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgaG9tZVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvc3RvcmVcIj5cbiAgICAgICAgICAgIDxMaW5rIG1yPXs0fSBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICBncm9jZXJ5XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9mYXZvcml0ZXNcIj5cbiAgICAgICAgICAgIDxMaW5rIG1yPXs0fSBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCJ4c1wiPlxuICAgICAgICAgICAgICBmYXZvcml0ZXNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL3BhbnRyeVwiPlxuICAgICAgICAgICAgPExpbmsgbXI9ezR9IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cInhzXCI+XG4gICAgICAgICAgICAgIHBhbnRyeVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcmVjaXBlc1wiPlxuICAgICAgICAgICAgPExpbmsgbXI9ezR9IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cInhzXCI+XG4gICAgICAgICAgICAgIHJlY2lwZXNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0NlbnRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.tsx\n");

/***/ })

})