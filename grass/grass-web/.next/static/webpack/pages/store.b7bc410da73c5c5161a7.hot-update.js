webpackHotUpdate_N_E("pages/store",{

/***/ "./src/pages/store.tsx":
/*!*****************************!*\
  !*** ./src/pages/store.tsx ***!
  \*****************************/
/*! exports provided: Store, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.ts\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n\n\n\nvar _jsxFileName = \"/Users/alan/Desktop/Projects/SeniorProject/grass/grass-web/src/pages/store.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Store = function Store() {\n  _s();\n\n  var _useProductsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_7__[\"useProductsQuery\"])({\n    variables: {\n      limit: 10\n    }\n  }),\n      _useProductsQuery2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useProductsQuery, 1),\n      data = _useProductsQuery2[0].data;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"Layout\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      align: \"center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n        boxSize: \"100px\",\n        objectFit: \"scale-down\",\n        src: \"https://logos-download.com/wp-content/uploads/2016/02/Walmart_logo_transparent_png.png\",\n        width: \"200px\",\n        align: \"left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        ml: \"auto\",\n        children: \"3705 El Camino Real\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"SimpleGrid\"], {\n      bg: \"gray.50\",\n      minChildWidth: \"120px\",\n      spacing: \"40px\",\n      p: \"10\",\n      textAlign: \"center\",\n      rounded: \"lg\",\n      color: \"gray.400\",\n      children: !data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Spinner\"], {\n        size: \"xs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }, _this) : data.products.map(function (p) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          mb: 4,\n          p: 4,\n          bg: \"white\",\n          alignSelf: {\n            base: \"center\",\n            lg: \"flex-start\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n              h: \"250px\",\n              templateRows: \"repeat(3, 1fr)\",\n              templateColumns: \"repeat(4, 1fr)\",\n              gap: 2,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n                    fill: \"green\",\n                    boxSize: \"150px\",\n                    objectFit: \"scale-down\",\n                    src: p.image,\n                    fallbackSrc: p.image,\n                    alt: p.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 73,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 72,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                  color: \"black\",\n                  fontWeight: \"semibold\",\n                  children: p.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 84,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                  color: \"green.400\",\n                  fontWeight: \"bold\",\n                  children: [\"$\", p.priceFormat]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 87,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 3,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                  colorScheme: \"green\",\n                  bg: \"green.300\",\n                  color: \"white\",\n                  isFullWidth: true,\n                  children: \"+\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 93,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 1,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n                  \"aria-label\": \"Favorite Item\",\n                  colorScheme: \"yellow\",\n                  bg: \"yellow.300\",\n                  color: \"white\",\n                  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__[\"BsStarFill\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 108,\n                    columnNumber: 29\n                  }, _this),\n                  children: \"Favorite\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 103,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 102,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Store, \"Cm/zU+sPpYMKmQtyal0ovsAxmeQ=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_7__[\"useProductsQuery\"]];\n});\n\n_c = Store;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_3__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_8__[\"createUrqlClient\"])(Store));\n\nvar _c;\n\n$RefreshReg$(_c, \"Store\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3N0b3JlLnRzeD8yODE2Il0sIm5hbWVzIjpbIlN0b3JlIiwidXNlUHJvZHVjdHNRdWVyeSIsInZhcmlhYmxlcyIsImxpbWl0IiwiZGF0YSIsInByb2R1Y3RzIiwibWFwIiwicCIsImJhc2UiLCJsZyIsImltYWdlIiwibmFtZSIsInByaWNlRm9ybWF0Iiwid2l0aFVycWxDbGllbnQiLCJjcmVhdGVVcnFsQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSwwQkFDTkMsMkVBQWdCLENBQUM7QUFDbENDLGFBQVMsRUFBRTtBQUNUQyxXQUFLLEVBQUU7QUFERTtBQUR1QixHQUFELENBRFY7QUFBQTtBQUFBLE1BQ2hCQyxJQURnQix5QkFDaEJBLElBRGdCOztBQU16QixzQkFDRSxxRUFBQyx5REFBRDtBQUFBLDRCQUNFLHFFQUFDLHFEQUFEO0FBQU0sV0FBSyxFQUFDLFFBQVo7QUFBQSw4QkFDRSxxRUFBQyxzREFBRDtBQUNFLGVBQU8sRUFBQyxPQURWO0FBRUUsaUJBQVMsRUFBQyxZQUZaO0FBR0UsV0FBRyxFQUFDLHdGQUhOO0FBSUUsYUFBSyxFQUFDLE9BSlI7QUFLRSxhQUFLLEVBQUM7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRSxxRUFBQyxxREFBRDtBQUFNLFVBQUUsRUFBQyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFXRSxxRUFBQywyREFBRDtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsbUJBQWEsRUFBQyxPQUZoQjtBQUdFLGFBQU8sRUFBQyxNQUhWO0FBSUUsT0FBQyxFQUFDLElBSko7QUFLRSxlQUFTLEVBQUMsUUFMWjtBQU1F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QUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3N0b3JlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgU2ltcGxlR3JpZCxcbiAgRGl2aWRlcixcbiAgQnV0dG9uLFxuICBHcmlkLFxuICBHcmlkSXRlbSxcbiAgRmxleCxcbiAgU3Bpbm5lcixcbiAgSW1hZ2UsXG4gIENlbnRlcixcbiAgVGV4dCxcbiAgSWNvbixcbiAgSWNvbkJ1dHRvbixcbiAgSGVhZGluZyxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIGV4dGVuZFRoZW1lLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRmFTaG9wcGluZ0NhcnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSBcIm5leHQtdXJxbFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCc1N0YXIsIEJzU3RhckZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgdXNlUHJvZHVjdHNRdWVyeSB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgY3JlYXRlVXJxbENsaWVudCB9IGZyb20gXCIuLi91dGlscy9jcmVhdGVVcnFsQ2xpZW50XCI7XG5cbmV4cG9ydCBjb25zdCBTdG9yZSA9ICgpID0+IHtcbiAgY29uc3QgW3sgZGF0YSB9XSA9IHVzZVByb2R1Y3RzUXVlcnkoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgbGltaXQ6IDEwLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBib3hTaXplPVwiMTAwcHhcIlxuICAgICAgICAgIG9iamVjdEZpdD1cInNjYWxlLWRvd25cIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbG9nb3MtZG93bmxvYWQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAyL1dhbG1hcnRfbG9nb190cmFuc3BhcmVudF9wbmcucG5nXCJcbiAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcbiAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAvPlxuICAgICAgICA8VGV4dCBtbD1cImF1dG9cIj4zNzA1IEVsIENhbWlubyBSZWFsPC9UZXh0PlxuICAgICAgPC9GbGV4PlxuICAgICAgPFNpbXBsZUdyaWRcbiAgICAgICAgYmc9XCJncmF5LjUwXCJcbiAgICAgICAgbWluQ2hpbGRXaWR0aD1cIjEyMHB4XCJcbiAgICAgICAgc3BhY2luZz1cIjQwcHhcIlxuICAgICAgICBwPVwiMTBcIlxuICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICByb3VuZGVkPVwibGdcIlxuICAgICAgICBjb2xvcj1cImdyYXkuNDAwXCJcbiAgICAgID5cbiAgICAgICAgeyFkYXRhID8gKFxuICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJ4c1wiIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgZGF0YS5wcm9kdWN0cy5tYXAoKHApID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgbWI9ezR9XG4gICAgICAgICAgICAgIHA9ezR9XG4gICAgICAgICAgICAgIGJnPVwid2hpdGVcIlxuICAgICAgICAgICAgICBhbGlnblNlbGY9e3sgYmFzZTogXCJjZW50ZXJcIiwgbGc6IFwiZmxleC1zdGFydFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDZW50ZXI+XG4gICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgIGg9XCIyNTBweFwiXG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVJvd3M9XCJyZXBlYXQoMywgMWZyKVwiXG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoNCwgMWZyKVwiXG4gICAgICAgICAgICAgICAgICBnYXA9ezJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezR9PlxuICAgICAgICAgICAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNpemU9XCIxNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJzY2FsZS1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrU3JjPXtwLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezR9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImJsYWNrXCIgZm9udFdlaWdodD1cInNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3AubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImdyZWVuLjQwMFwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgJHtwLnByaWNlRm9ybWF0fVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17M30+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICBiZz1cImdyZWVuLjMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgaXNGdWxsV2lkdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRmF2b3JpdGUgSXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJ5ZWxsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgIGJnPVwieWVsbG93LjMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEJzU3RhckZpbGwgLz59XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBGYXZvcml0ZVxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKVxuICAgICAgICApfVxuICAgICAgPC9TaW1wbGVHcmlkPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCkoU3RvcmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/store.tsx\n");

/***/ })

})