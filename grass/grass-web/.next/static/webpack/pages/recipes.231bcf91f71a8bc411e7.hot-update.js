webpackHotUpdate_N_E("pages/recipes",{

/***/ "./src/pages/recipes.tsx":
/*!*******************************!*\
  !*** ./src/pages/recipes.tsx ***!
  \*******************************/
/*! exports provided: Recipes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Recipes\", function() { return Recipes; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.ts\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n\n\n\nvar _jsxFileName = \"/Users/alan/Desktop/Projects/SeniorProject/grass/grass-web/src/pages/recipes.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Recipes = function Recipes() {\n  _s();\n\n  var _useProductsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_7__[\"useProductsQuery\"])({\n    variables: {\n      limit: 10\n    }\n  }),\n      _useProductsQuery2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useProductsQuery, 1),\n      _useProductsQuery2$ = _useProductsQuery2[0],\n      data = _useProductsQuery2$.data,\n      fetching = _useProductsQuery2$.fetching;\n\n  if (!fetching && !data) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Query failed.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"Layout\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      mr: \"left\",\n      p: \"10\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"VStack\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n          children: \"Favorites\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"SimpleGrid\"], {\n      minChildWidth: \"240px\",\n      spacing: \"40px\",\n      p: \"10\",\n      textAlign: \"center\",\n      rounded: \"lg\",\n      children: fetching && !data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Spinner\"], {\n        size: \"xs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, _this) : data.products.map(function (p) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          mb: 4,\n          p: 4,\n          bg: \"white\",\n          alignSelf: {\n            base: \"center\",\n            lg: \"flex-start\"\n          },\n          borderRadius: 8,\n          boxShadow: \"md\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n              h: \"250px\",\n              templateRows: \"repeat(4, 1fr)\",\n              templateColumns: \"repeat(1, 1fr)\",\n              gap: 2,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"VStack\"], {\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                      fontSize: \"sm\",\n                      children: p.name\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 77,\n                      columnNumber: 25\n                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n                      boxSize: \"150px\",\n                      boxShadow: \"xl\",\n                      borderRadius: \"20%\",\n                      objectFit: \"cover\",\n                      src: p.image,\n                      fallbackSrc: p.image,\n                      alt: p.name\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 79,\n                      columnNumber: 25\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 76,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n                  ml: \"auto\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 93,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 2,\n                mt: \"auto\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"HStack\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                    as: \"span\",\n                    color: \"green.400\",\n                    fontSize: \"xs\",\n                    fontWeight: \"semibold\",\n                    children: [\"$\", \"\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                      ml: 0.5,\n                      as: \"span\",\n                      color: \"black\",\n                      fontSize: \"lg\",\n                      fontWeight: \"bold\",\n                      children: p.priceFormat\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 104,\n                      columnNumber: 25\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 97,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 2,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n                  \"aria-label\": \"Add to cart\",\n                  colorScheme: \"green\",\n                  bg: \"green.300\",\n                  color: \"white\",\n                  isFullWidth: true,\n                  rounded: \"full\",\n                  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaShoppingCart\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 124,\n                    columnNumber: 29\n                  }, _this),\n                  boxShadow: \"md\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 117,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 116,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        my: 8,\n        isLoading: fetching,\n        colorScheme: \"green\",\n        color: \"white\",\n        bg: \"linear-gradient(130deg, hsl(152, 58%, 53%), #00b698)\",\n        px: 6,\n        _hover: {\n          bg: \"linear-gradient(130deg, hsl(152, 58%, 53%), #00b698)\"\n        },\n        shadow: \"0 25px 25px -20px hsla(152, 58%, 53%, 0.66) !important\",\n        rounded: \"full\",\n        boxShadow: \"md\",\n        children: \"Load More\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 9\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Recipes, \"jy4iwWCWo8myR50DLXKE0D6BuHQ=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_7__[\"useProductsQuery\"]];\n});\n\n_c = Recipes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_4__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_8__[\"createUrqlClient\"])(Recipes));\n\nvar _c;\n\n$RefreshReg$(_c, \"Recipes\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlY2lwZXMudHN4PzM4MTYiXSwibmFtZXMiOlsiUmVjaXBlcyIsInVzZVByb2R1Y3RzUXVlcnkiLCJ2YXJpYWJsZXMiLCJsaW1pdCIsImRhdGEiLCJmZXRjaGluZyIsInByb2R1Y3RzIiwibWFwIiwicCIsImJhc2UiLCJsZyIsIm5hbWUiLCJpbWFnZSIsInByaWNlRm9ybWF0IiwiYmciLCJ3aXRoVXJxbENsaWVudCIsImNyZWF0ZVVycWxDbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR08sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLDBCQUNFQywyRUFBZ0IsQ0FBQztBQUM1Q0MsYUFBUyxFQUFFO0FBQ1RDLFdBQUssRUFBRTtBQURFO0FBRGlDLEdBQUQsQ0FEbEI7QUFBQTtBQUFBO0FBQUEsTUFDbEJDLElBRGtCLHVCQUNsQkEsSUFEa0I7QUFBQSxNQUNaQyxRQURZLHVCQUNaQSxRQURZOztBQU8zQixNQUFJLENBQUNBLFFBQUQsSUFBYSxDQUFDRCxJQUFsQixFQUF3QjtBQUN0Qix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMseURBQUQ7QUFBQSw0QkFDRSxxRUFBQyxxREFBRDtBQUFNLFFBQUUsRUFBQyxNQUFUO0FBQWdCLE9BQUMsRUFBQyxJQUFsQjtBQUFBLDZCQUNFLHFFQUFDLHVEQUFEO0FBQUEsK0JBQ0UscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUUscUVBQUMsMkRBQUQ7QUFDRSxtQkFBYSxFQUFDLE9BRGhCO0FBRUUsYUFBTyxFQUFDLE1BRlY7QUFHRSxPQUFDLEVBQUMsSUFISjtBQUlFLGVBQVMsRUFBQyxRQUpaO0FBS0UsYUFBTyxFQUFDLElBTFY7QUFBQSxnQkFPR0MsUUFBUSxJQUFJLENBQUNELElBQWIsZ0JBQ0MscUVBQUMsd0RBQUQ7QUFBUyxZQUFJLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsR0FHQ0EsSUFBSSxDQUFFRSxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsQ0FBRDtBQUFBLDRCQUNqQixxRUFBQyxvREFBRDtBQUNFLFlBQUUsRUFBRSxDQUROO0FBRUUsV0FBQyxFQUFFLENBRkw7QUFHRSxZQUFFLEVBQUMsT0FITDtBQUlFLG1CQUFTLEVBQUU7QUFBRUMsZ0JBQUksRUFBRSxRQUFSO0FBQWtCQyxjQUFFLEVBQUU7QUFBdEIsV0FKYjtBQUtFLHNCQUFZLEVBQUUsQ0FMaEI7QUFNRSxtQkFBUyxFQUFDLElBTlo7QUFBQSxpQ0FRRSxxRUFBQyx1REFBRDtBQUFBLG1DQUNFLHFFQUFDLHFEQUFEO0FBQ0UsZUFBQyxFQUFDLE9BREo7QUFFRSwwQkFBWSxFQUFDLGdCQUZmO0FBR0UsNkJBQWUsRUFBQyxnQkFIbEI7QUFJRSxpQkFBRyxFQUFFLENBSlA7QUFBQSxzQ0FNRSxxRUFBQyx5REFBRDtBQUFVLHVCQUFPLEVBQUUsQ0FBbkI7QUFBQSx1Q0FDRSxxRUFBQyx1REFBRDtBQUFBLHlDQUNFLHFFQUFDLHVEQUFEO0FBQUEsNENBQ0UscUVBQUMscURBQUQ7QUFBTSw4QkFBUSxFQUFDLElBQWY7QUFBQSxnQ0FBcUJGLENBQUMsQ0FBQ0c7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUdFLHFFQUFDLHNEQUFEO0FBQ0UsNkJBQU8sRUFBQyxPQURWO0FBRUUsK0JBQVMsRUFBQyxJQUZaO0FBR0Usa0NBQVksRUFBQyxLQUhmO0FBSUUsK0JBQVMsRUFBQyxPQUpaO0FBS0UseUJBQUcsRUFBRUgsQ0FBQyxDQUFDSSxLQUxUO0FBTUUsaUNBQVcsRUFBRUosQ0FBQyxDQUFDSSxLQU5qQjtBQU9FLHlCQUFHLEVBQUVKLENBQUMsQ0FBQ0c7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GLGVBd0JFLHFFQUFDLHlEQUFEO0FBQVUsdUJBQU8sRUFBRSxDQUFuQjtBQUFBLHVDQUNFLHFFQUFDLHVEQUFEO0FBQVEsb0JBQUUsRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhCRixlQTJCRSxxRUFBQyx5REFBRDtBQUFVLHVCQUFPLEVBQUUsQ0FBbkI7QUFBc0Isa0JBQUUsRUFBQyxNQUF6QjtBQUFBLHVDQUNFLHFFQUFDLHVEQUFEO0FBQUEseUNBQ0UscUVBQUMscURBQUQ7QUFDRSxzQkFBRSxFQUFFLE1BRE47QUFFRSx5QkFBSyxFQUFDLFdBRlI7QUFHRSw0QkFBUSxFQUFDLElBSFg7QUFJRSw4QkFBVSxFQUFDLFVBSmI7QUFBQSxvQ0FNSSxFQU5KLGVBT0UscUVBQUMscURBQUQ7QUFDRSx3QkFBRSxFQUFFLEdBRE47QUFFRSx3QkFBRSxFQUFFLE1BRk47QUFHRSwyQkFBSyxFQUFDLE9BSFI7QUFJRSw4QkFBUSxFQUFDLElBSlg7QUFLRSxnQ0FBVSxFQUFDLE1BTGI7QUFBQSxnQ0FPR0gsQ0FBQyxDQUFDSztBQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBM0JGLGVBZ0RFLHFFQUFDLHlEQUFEO0FBQVUsdUJBQU8sRUFBRSxDQUFuQjtBQUFBLHVDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsZ0NBQVcsYUFEYjtBQUVFLDZCQUFXLEVBQUMsT0FGZDtBQUdFLG9CQUFFLEVBQUMsV0FITDtBQUlFLHVCQUFLLEVBQUMsT0FKUjtBQUtFLDZCQUFXLEVBQUUsSUFMZjtBQU1FLHlCQUFPLEVBQUMsTUFOVjtBQU9FLHNCQUFJLGVBQUUscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQUjtBQVFFLDJCQUFTLEVBQUM7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGlCO0FBQUEsT0FBbkI7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsRUE2RkdULElBQUksZ0JBQ0gscUVBQUMsdURBQUQ7QUFBQSw2QkFDRSxxRUFBQyx1REFBRDtBQUNFLFVBQUUsRUFBRSxDQUROO0FBRUUsaUJBQVMsRUFBRUMsUUFGYjtBQUdFLG1CQUFXLEVBQUUsT0FIZjtBQUlFLGFBQUssRUFBQyxPQUpSO0FBS0UsVUFBRSxFQUFDLHNEQUxMO0FBTUUsVUFBRSxFQUFFLENBTk47QUFPRSxjQUFNLEVBQUU7QUFDTlMsWUFBRSxFQUFFO0FBREUsU0FQVjtBQVVFLGNBQU0sRUFBQyx3REFWVDtBQVdFLGVBQU8sRUFBQyxNQVhWO0FBWUUsaUJBQVMsRUFBQyxJQVpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURHLEdBbUJELElBaEhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0hELENBL0hNOztHQUFNZCxPO1VBQ2tCQyxtRTs7O0tBRGxCRCxPO0FBaUlFZSwrSEFBYyxDQUFDQyx3RUFBRCxDQUFkLENBQWlDaEIsT0FBakMsQ0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9yZWNpcGVzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgU2ltcGxlR3JpZCxcbiAgRGl2aWRlcixcbiAgQnV0dG9uLFxuICBHcmlkLFxuICBHcmlkSXRlbSxcbiAgRmxleCxcbiAgU3Bpbm5lcixcbiAgSW1hZ2UsXG4gIENlbnRlcixcbiAgVGV4dCxcbiAgSWNvbixcbiAgSWNvbkJ1dHRvbixcbiAgSGVhZGluZyxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIGV4dGVuZFRoZW1lLFxuICBIU3RhY2ssXG4gIFZTdGFjayxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEZhU2hvcHBpbmdDYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gXCJuZXh0LXVycWxcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnNTdGFyLCBCc1N0YXJGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IHVzZU1lUXVlcnksIHVzZVByb2R1Y3RzUXVlcnkgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcbmltcG9ydCB7IGNyZWF0ZVVycWxDbGllbnQgfSBmcm9tIFwiLi4vdXRpbHMvY3JlYXRlVXJxbENsaWVudFwiO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tIFwiLi4vdXRpbHMvaXNTZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IFJlY2lwZXMgPSAoKSA9PiB7XG4gIGNvbnN0IFt7IGRhdGEsIGZldGNoaW5nIH1dID0gdXNlUHJvZHVjdHNRdWVyeSh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBsaW1pdDogMTAsXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKCFmZXRjaGluZyAmJiAhZGF0YSkge1xuICAgIHJldHVybiA8ZGl2PlF1ZXJ5IGZhaWxlZC48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8RmxleCBtcj1cImxlZnRcIiBwPVwiMTBcIj5cbiAgICAgICAgPFZTdGFjaz5cbiAgICAgICAgICA8SGVhZGluZz5GYXZvcml0ZXM8L0hlYWRpbmc+XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9GbGV4PlxuICAgICAgPFNpbXBsZUdyaWRcbiAgICAgICAgbWluQ2hpbGRXaWR0aD1cIjI0MHB4XCJcbiAgICAgICAgc3BhY2luZz1cIjQwcHhcIlxuICAgICAgICBwPVwiMTBcIlxuICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICByb3VuZGVkPVwibGdcIlxuICAgICAgPlxuICAgICAgICB7ZmV0Y2hpbmcgJiYgIWRhdGEgPyAoXG4gICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInhzXCIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBkYXRhIS5wcm9kdWN0cy5tYXAoKHApID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgbWI9ezR9XG4gICAgICAgICAgICAgIHA9ezR9XG4gICAgICAgICAgICAgIGJnPVwid2hpdGVcIlxuICAgICAgICAgICAgICBhbGlnblNlbGY9e3sgYmFzZTogXCJjZW50ZXJcIiwgbGc6IFwiZmxleC1zdGFydFwiIH19XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17OH1cbiAgICAgICAgICAgICAgYm94U2hhZG93PVwibWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICBoPVwiMjUwcHhcIlxuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVSb3dzPVwicmVwZWF0KDQsIDFmcilcIlxuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDEsIDFmcilcIlxuICAgICAgICAgICAgICAgICAgZ2FwPXsyfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8VlN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiPntwLm5hbWV9PC9UZXh0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2l6ZT1cIjE1MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93PVwieGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIyMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2tTcmM9e3AuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17NH0+XG4gICAgICAgICAgICAgICAgICAgIDxDZW50ZXIgbWw9XCJhdXRvXCI+PC9DZW50ZXI+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezJ9IG10PVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8SFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBhcz17XCJzcGFuXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyZWVuLjQwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWw9ezAuNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e1wic3BhblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3AucHJpY2VGb3JtYXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFkZCB0byBjYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICBiZz1cImdyZWVuLjMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgaXNGdWxsV2lkdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgcm91bmRlZD1cImZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIGljb249ezxGYVNob3BwaW5nQ2FydCAvPn1cbiAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKVxuICAgICAgICApfVxuICAgICAgPC9TaW1wbGVHcmlkPlxuXG4gICAgICB7ZGF0YSA/IChcbiAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBteT17OH1cbiAgICAgICAgICAgIGlzTG9hZGluZz17ZmV0Y2hpbmd9XG4gICAgICAgICAgICBjb2xvclNjaGVtZT17XCJncmVlblwifVxuICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICBiZz1cImxpbmVhci1ncmFkaWVudCgxMzBkZWcsIGhzbCgxNTIsIDU4JSwgNTMlKSwgIzAwYjY5OClcIlxuICAgICAgICAgICAgcHg9ezZ9XG4gICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgYmc6IFwibGluZWFyLWdyYWRpZW50KDEzMGRlZywgaHNsKDE1MiwgNTglLCA1MyUpLCAjMDBiNjk4KVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNoYWRvdz1cIjAgMjVweCAyNXB4IC0yMHB4IGhzbGEoMTUyLCA1OCUsIDUzJSwgMC42NikgIWltcG9ydGFudFwiXG4gICAgICAgICAgICByb3VuZGVkPVwiZnVsbFwiXG4gICAgICAgICAgICBib3hTaGFkb3c9XCJtZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9hZCBNb3JlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2VudGVyPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjcmVhdGVVcnFsQ2xpZW50KShSZWNpcGVzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/recipes.tsx\n");

/***/ })

})