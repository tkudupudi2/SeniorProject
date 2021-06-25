webpackHotUpdate_N_E("pages/favorites",{

/***/ "./src/pages/favorites.tsx":
/*!*********************************!*\
  !*** ./src/pages/favorites.tsx ***!
  \*********************************/
/*! exports provided: Favorites, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Favorites\", function() { return Favorites; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.ts\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n\n\n\nvar _jsxFileName = \"/Users/alan/Desktop/Projects/SeniorProject/grass/grass-web/src/pages/favorites.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Favorites = function Favorites() {\n  _s();\n\n  var _useProductsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_7__[\"useProductsQuery\"])({\n    variables: {\n      limit: 10\n    }\n  }),\n      _useProductsQuery2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useProductsQuery, 1),\n      _useProductsQuery2$ = _useProductsQuery2[0],\n      data = _useProductsQuery2$.data,\n      fetching = _useProductsQuery2$.fetching;\n\n  if (!fetching && !data) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Query failed.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"Layout\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      mr: \"left\",\n      p: \"10\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"VStack\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n          children: \"Favorites\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"SimpleGrid\"], {\n      minChildWidth: \"240px\",\n      spacing: \"40px\",\n      p: \"10\",\n      textAlign: \"center\",\n      rounded: \"lg\",\n      children: fetching && !data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Spinner\"], {\n        size: \"xs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, _this) : data.products.map(function (p) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          mb: 4,\n          p: 4,\n          bg: \"white\",\n          alignSelf: {\n            base: \"center\",\n            lg: \"flex-start\"\n          },\n          borderRadius: 8,\n          boxShadow: \"md\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n              h: \"250px\",\n              templateRows: \"repeat(4, 1fr)\",\n              templateColumns: \"repeat(4, 1fr)\",\n              gap: 2,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"VStack\"], {\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                      fontSize: \"sm\",\n                      children: p.name\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 77,\n                      columnNumber: 25\n                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n                      boxSize: \"150px\",\n                      boxShadow: \"xl\",\n                      borderRadius: \"20%\",\n                      objectFit: \"cover\",\n                      src: p.image,\n                      fallbackSrc: p.image,\n                      alt: p.name\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 79,\n                      columnNumber: 25\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 76,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n                  ml: \"auto\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 93,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 2,\n                mt: \"auto\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"HStack\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                    as: \"span\",\n                    color: \"green.400\",\n                    fontSize: \"xs\",\n                    fontWeight: \"semibold\",\n                    children: [\"$\", \"\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                      ml: 0.5,\n                      as: \"span\",\n                      color: \"black\",\n                      fontSize: \"lg\",\n                      fontWeight: \"bold\",\n                      children: p.priceFormat\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 104,\n                      columnNumber: 25\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 97,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 2,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n                  \"aria-label\": \"Add to cart\",\n                  colorScheme: \"green\",\n                  bg: \"green.300\",\n                  color: \"white\",\n                  isFullWidth: true,\n                  rounded: \"full\",\n                  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaShoppingCart\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 124,\n                    columnNumber: 29\n                  }, _this),\n                  boxShadow: \"md\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 117,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 116,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        my: 8,\n        isLoading: fetching,\n        colorScheme: \"green\",\n        color: \"white\",\n        bg: \"linear-gradient(130deg, hsl(152, 58%, 53%), #00b698)\",\n        px: 6,\n        _hover: {\n          bg: \"linear-gradient(130deg, hsl(152, 58%, 53%), #00b698)\"\n        },\n        shadow: \"0 25px 25px -20px hsla(152, 58%, 53%, 0.66) !important\",\n        rounded: \"full\",\n        boxShadow: \"md\",\n        children: \"Load More\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 9\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Favorites, \"jy4iwWCWo8myR50DLXKE0D6BuHQ=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_7__[\"useProductsQuery\"]];\n});\n\n_c = Favorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_4__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_8__[\"createUrqlClient\"])(Favorites));\n\nvar _c;\n\n$RefreshReg$(_c, \"Favorites\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zhdm9yaXRlcy50c3g/NzlkYyJdLCJuYW1lcyI6WyJGYXZvcml0ZXMiLCJ1c2VQcm9kdWN0c1F1ZXJ5IiwidmFyaWFibGVzIiwibGltaXQiLCJkYXRhIiwiZmV0Y2hpbmciLCJwcm9kdWN0cyIsIm1hcCIsInAiLCJiYXNlIiwibGciLCJuYW1lIiwiaW1hZ2UiLCJwcmljZUZvcm1hdCIsImJnIiwid2l0aFVycWxDbGllbnQiLCJjcmVhdGVVcnFsQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBb0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSwwQkFDQUMsMkVBQWdCLENBQUM7QUFDNUNDLGFBQVMsRUFBRTtBQUNUQyxXQUFLLEVBQUU7QUFERTtBQURpQyxHQUFELENBRGhCO0FBQUE7QUFBQTtBQUFBLE1BQ3BCQyxJQURvQix1QkFDcEJBLElBRG9CO0FBQUEsTUFDZEMsUUFEYyx1QkFDZEEsUUFEYzs7QUFPN0IsTUFBSSxDQUFDQSxRQUFELElBQWEsQ0FBQ0QsSUFBbEIsRUFBd0I7QUFDdEIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELHNCQUNFLHFFQUFDLHlEQUFEO0FBQUEsNEJBQ0UscUVBQUMscURBQUQ7QUFBTSxRQUFFLEVBQUMsTUFBVDtBQUFnQixPQUFDLEVBQUMsSUFBbEI7QUFBQSw2QkFDRSxxRUFBQyx1REFBRDtBQUFBLCtCQUNFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FLHFFQUFDLDJEQUFEO0FBQ0UsbUJBQWEsRUFBQyxPQURoQjtBQUVFLGFBQU8sRUFBQyxNQUZWO0FBR0UsT0FB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QUFDLE1BTlY7QUFPRSxzQkFBSSxlQUFFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUFI7QUFRRSwyQkFBUyxFQUFDO0FBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQjtBQUFBLE9BQW5CO0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLEVBNkZHVCxJQUFJLGdCQUNILHFFQUFDLHVEQUFEO0FBQUEsNkJBQ0UscUVBQUMsdURBQUQ7QUFDRSxVQUFFLEVBQUUsQ0FETjtBQUVFLGlCQUFTLEVBQUVDLFFBRmI7QUFHRSxtQkFBVyxFQUFFLE9BSGY7QUFJRSxhQUFLLEVBQUMsT0FKUjtBQUtFLFVBQUUsRUFBQyxzREFMTDtBQU1FLFVBQUUsRUFBRSxDQU5OO0FBT0UsY0FBTSxFQUFFO0FBQ05TLFlBQUUsRUFBRTtBQURFLFNBUFY7QUFVRSxjQUFNLEVBQUMsd0RBVlQ7QUFXRSxlQUFPLEVBQUMsTUFYVjtBQVlFLGlCQUFTLEVBQUMsSUFaWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxHQW1CRCxJQWhITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9IRCxDQS9ITTs7R0FBTWQsUztVQUNrQkMsbUU7OztLQURsQkQsUztBQWlJRWUsK0hBQWMsQ0FBQ0Msd0VBQUQsQ0FBZCxDQUFpQ2hCLFNBQWpDLENBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmF2b3JpdGVzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgU2ltcGxlR3JpZCxcbiAgRGl2aWRlcixcbiAgQnV0dG9uLFxuICBHcmlkLFxuICBHcmlkSXRlbSxcbiAgRmxleCxcbiAgU3Bpbm5lcixcbiAgSW1hZ2UsXG4gIENlbnRlcixcbiAgVGV4dCxcbiAgSWNvbixcbiAgSWNvbkJ1dHRvbixcbiAgSGVhZGluZyxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIGV4dGVuZFRoZW1lLFxuICBIU3RhY2ssXG4gIFZTdGFjayxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEZhU2hvcHBpbmdDYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gXCJuZXh0LXVycWxcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnNTdGFyLCBCc1N0YXJGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IHVzZU1lUXVlcnksIHVzZVByb2R1Y3RzUXVlcnkgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcbmltcG9ydCB7IGNyZWF0ZVVycWxDbGllbnQgfSBmcm9tIFwiLi4vdXRpbHMvY3JlYXRlVXJxbENsaWVudFwiO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tIFwiLi4vdXRpbHMvaXNTZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IEZhdm9yaXRlcyA9ICgpID0+IHtcbiAgY29uc3QgW3sgZGF0YSwgZmV0Y2hpbmcgfV0gPSB1c2VQcm9kdWN0c1F1ZXJ5KHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGxpbWl0OiAxMCxcbiAgICB9LFxuICB9KTtcblxuICBpZiAoIWZldGNoaW5nICYmICFkYXRhKSB7XG4gICAgcmV0dXJuIDxkaXY+UXVlcnkgZmFpbGVkLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxGbGV4IG1yPVwibGVmdFwiIHA9XCIxMFwiPlxuICAgICAgICA8VlN0YWNrPlxuICAgICAgICAgIDxIZWFkaW5nPkZhdm9yaXRlczwvSGVhZGluZz5cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICA8L0ZsZXg+XG4gICAgICA8U2ltcGxlR3JpZFxuICAgICAgICBtaW5DaGlsZFdpZHRoPVwiMjQwcHhcIlxuICAgICAgICBzcGFjaW5nPVwiNDBweFwiXG4gICAgICAgIHA9XCIxMFwiXG4gICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgIHJvdW5kZWQ9XCJsZ1wiXG4gICAgICA+XG4gICAgICAgIHtmZXRjaGluZyAmJiAhZGF0YSA/IChcbiAgICAgICAgICA8U3Bpbm5lciBzaXplPVwieHNcIiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGRhdGEhLnByb2R1Y3RzLm1hcCgocCkgPT4gKFxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBtYj17NH1cbiAgICAgICAgICAgICAgcD17NH1cbiAgICAgICAgICAgICAgYmc9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGFsaWduU2VsZj17eyBiYXNlOiBcImNlbnRlclwiLCBsZzogXCJmbGV4LXN0YXJ0XCIgfX1cbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs4fVxuICAgICAgICAgICAgICBib3hTaGFkb3c9XCJtZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDZW50ZXI+XG4gICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgIGg9XCIyNTBweFwiXG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVJvd3M9XCJyZXBlYXQoNCwgMWZyKVwiXG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoNCwgMWZyKVwiXG4gICAgICAgICAgICAgICAgICBnYXA9ezJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezR9PlxuICAgICAgICAgICAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxWU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCI+e3AubmFtZX08L1RleHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaXplPVwiMTUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c9XCJ4bFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjIwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxsYmFja1NyYz17cC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgPENlbnRlciBtbD1cImF1dG9cIj48L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17Mn0gbXQ9XCJhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtcInNwYW5cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW4uNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwieHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cInNlbWlib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAke1wiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtbD17MC41fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17XCJzcGFuXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cC5wcmljZUZvcm1hdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQWRkIHRvIGNhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgIGJnPVwiZ3JlZW4uMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBpc0Z1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkPVwiZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEZhU2hvcHBpbmdDYXJ0IC8+fVxuICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdz1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpXG4gICAgICAgICl9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG5cbiAgICAgIHtkYXRhID8gKFxuICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG15PXs4fVxuICAgICAgICAgICAgaXNMb2FkaW5nPXtmZXRjaGluZ31cbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPXtcImdyZWVuXCJ9XG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIGJnPVwibGluZWFyLWdyYWRpZW50KDEzMGRlZywgaHNsKDE1MiwgNTglLCA1MyUpLCAjMDBiNjk4KVwiXG4gICAgICAgICAgICBweD17Nn1cbiAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICBiZzogXCJsaW5lYXItZ3JhZGllbnQoMTMwZGVnLCBoc2woMTUyLCA1OCUsIDUzJSksICMwMGI2OTgpXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2hhZG93PVwiMCAyNXB4IDI1cHggLTIwcHggaHNsYSgxNTIsIDU4JSwgNTMlLCAwLjY2KSAhaW1wb3J0YW50XCJcbiAgICAgICAgICAgIHJvdW5kZWQ9XCJmdWxsXCJcbiAgICAgICAgICAgIGJveFNoYWRvdz1cIm1kXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb2FkIE1vcmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DZW50ZXI+XG4gICAgICApIDogbnVsbH1cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhVcnFsQ2xpZW50KGNyZWF0ZVVycWxDbGllbnQpKEZhdm9yaXRlcyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/favorites.tsx\n");

/***/ })

})