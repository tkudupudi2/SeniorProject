webpackHotUpdate_N_E("pages/store",{

/***/ "./src/pages/store.tsx":
/*!*****************************!*\
  !*** ./src/pages/store.tsx ***!
  \*****************************/
/*! exports provided: Store, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.ts\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n\n\n\nvar _jsxFileName = \"/Users/alan/Desktop/Projects/SeniorProject/grass/grass-web/src/pages/store.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Store = function Store() {\n  _s();\n\n  var _useProductsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_7__[\"useProductsQuery\"])({\n    variables: {\n      limit: 10\n    }\n  }),\n      _useProductsQuery2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useProductsQuery, 1),\n      data = _useProductsQuery2[0].data;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"Layout\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      align: \"center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n        boxSize: \"100px\",\n        objectFit: \"scale-down\",\n        src: \"https://i.imgur.com/WTQtGKL.png\",\n        width: \"200px\",\n        align: \"left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        color: \"green.200\",\n        ml: \"auto\",\n        children: \"3705 El Camino Real\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"SimpleGrid\"], {\n      minChildWidth: \"120px\",\n      spacing: \"40px\",\n      p: \"10\",\n      textAlign: \"center\",\n      rounded: \"lg\",\n      children: !data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Spinner\"], {\n        size: \"xs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, _this) : data.products.map(function (p) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          mb: 4,\n          p: 4,\n          bg: \"white\",\n          alignSelf: {\n            base: \"center\",\n            lg: \"flex-start\"\n          },\n          borderRadius: 8,\n          boxShadow: \"md\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n              h: \"250px\",\n              templateRows: \"repeat(4, 1fr)\",\n              templateColumns: \"repeat(4, 1fr)\",\n              gap: 2,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n                    boxSize: \"150px\",\n                    borderRadius: \"50%\",\n                    objectFit: \"cover\",\n                    src: p.image,\n                    fallbackSrc: p.image,\n                    alt: p.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 76,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"HStack\"], {\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                      color: \"green.400\",\n                      fontSize: \"xs\",\n                      fontWeight: \"semibold\",\n                      children: \"$\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 90,\n                      columnNumber: 25\n                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                      fontSize: \"lg\",\n                      fontWeight: \"bold\",\n                      children: p.priceFormat\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 97,\n                      columnNumber: 25\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 89,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n                  \"aria-label\": \"Add to cart\",\n                  colorScheme: \"green\",\n                  bg: \"green.300\",\n                  color: \"white\",\n                  isFullWidth: true,\n                  rounded: \"full\",\n                  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaShoppingCart\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 112,\n                    columnNumber: 29\n                  }, _this),\n                  boxShadow: \"md\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 105,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 104,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Store, \"Cm/zU+sPpYMKmQtyal0ovsAxmeQ=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_7__[\"useProductsQuery\"]];\n});\n\n_c = Store;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_4__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_8__[\"createUrqlClient\"])(Store));\n\nvar _c;\n\n$RefreshReg$(_c, \"Store\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3N0b3JlLnRzeD8yODE2Il0sIm5hbWVzIjpbIlN0b3JlIiwidXNlUHJvZHVjdHNRdWVyeSIsInZhcmlhYmxlcyIsImxpbWl0IiwiZGF0YSIsInByb2R1Y3RzIiwibWFwIiwicCIsImJhc2UiLCJsZyIsImltYWdlIiwibmFtZSIsInByaWNlRm9ybWF0Iiwid2l0aFVycWxDbGllbnQiLCJjcmVhdGVVcnFsQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSwwQkFDTkMsMkVBQWdCLENBQUM7QUFDbENDLGFBQVMsRUFBRTtBQUNUQyxXQUFLLEVBQUU7QUFERTtBQUR1QixHQUFELENBRFY7QUFBQTtBQUFBLE1BQ2hCQyxJQURnQix5QkFDaEJBLElBRGdCOztBQU16QixzQkFDRSxxRUFBQyx5REFBRDtBQUFBLDRCQUNFLHFFQUFDLHFEQUFEO0FBQU0sV0FBSyxFQUFDLFFBQVo7QUFBQSw4QkFDRSxxRUFBQyxzREFBRDtBQUNFLGVBQU8sRUFBQyxPQURWO0FBRUUsaUJBQVMsRUFBQyxZQUZaO0FBR0UsV0FBRyxFQUFDLGlDQUhOO0FBSUUsYUFBSyxFQUFDLE9BSlI7QUFLRSxhQUFLLEVBQUM7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRSxxRUFBQyxxREFBRDtBQUFNLGFBQUssRUFBQyxXQUFaO0FBQXdCLFVBQUUsRUFBQyxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBYUUscUVBQUMsMkRBQUQ7QUFDRSxtQkFBYSxFQUFDLE9BRGhCO0FBRUUsYUFBTyxFQUFDLE1BRlY7QUFHRSxPQUFDLEVBQUMsSUFISjtBQUlFLGVBQVMsRUFBQyxRQUpaO0FB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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgU2ltcGxlR3JpZCxcbiAgRGl2aWRlcixcbiAgQnV0dG9uLFxuICBHcmlkLFxuICBHcmlkSXRlbSxcbiAgRmxleCxcbiAgU3Bpbm5lcixcbiAgSW1hZ2UsXG4gIENlbnRlcixcbiAgVGV4dCxcbiAgSWNvbixcbiAgSWNvbkJ1dHRvbixcbiAgSGVhZGluZyxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIGV4dGVuZFRoZW1lLFxuICBIU3RhY2ssXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBGYVNob3BwaW5nQ2FydCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tIFwibmV4dC11cnFsXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJzU3RhciwgQnNTdGFyRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VQcm9kdWN0c1F1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyBjcmVhdGVVcnFsQ2xpZW50IH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZVVycWxDbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IFN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBbeyBkYXRhIH1dID0gdXNlUHJvZHVjdHNRdWVyeSh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBsaW1pdDogMTAsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGJveFNpemU9XCIxMDBweFwiXG4gICAgICAgICAgb2JqZWN0Rml0PVwic2NhbGUtZG93blwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9XVFF0R0tMLnBuZ1wiXG4gICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQgY29sb3I9XCJncmVlbi4yMDBcIiBtbD1cImF1dG9cIj5cbiAgICAgICAgICAzNzA1IEVsIENhbWlubyBSZWFsXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvRmxleD5cbiAgICAgIDxTaW1wbGVHcmlkXG4gICAgICAgIG1pbkNoaWxkV2lkdGg9XCIxMjBweFwiXG4gICAgICAgIHNwYWNpbmc9XCI0MHB4XCJcbiAgICAgICAgcD1cIjEwXCJcbiAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgcm91bmRlZD1cImxnXCJcbiAgICAgID5cbiAgICAgICAgeyFkYXRhID8gKFxuICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJ4c1wiIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgZGF0YS5wcm9kdWN0cy5tYXAoKHApID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgbWI9ezR9XG4gICAgICAgICAgICAgIHA9ezR9XG4gICAgICAgICAgICAgIGJnPVwid2hpdGVcIlxuICAgICAgICAgICAgICBhbGlnblNlbGY9e3sgYmFzZTogXCJjZW50ZXJcIiwgbGc6IFwiZmxleC1zdGFydFwiIH19XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17OH1cbiAgICAgICAgICAgICAgYm94U2hhZG93PVwibWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICBoPVwiMjUwcHhcIlxuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVSb3dzPVwicmVwZWF0KDQsIDFmcilcIlxuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDQsIDFmcilcIlxuICAgICAgICAgICAgICAgICAgZ2FwPXsyfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNpemU9XCIxNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1MCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2tTcmM9e3AuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3AubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8SFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmVlbi40MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cInNlbWlib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwLnByaWNlRm9ybWF0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQWRkIHRvIGNhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgIGJnPVwiZ3JlZW4uMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBpc0Z1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkPVwiZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEZhU2hvcHBpbmdDYXJ0IC8+fVxuICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdz1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpXG4gICAgICAgICl9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjcmVhdGVVcnFsQ2xpZW50KShTdG9yZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/store.tsx\n");

/***/ })

})