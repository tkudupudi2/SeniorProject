webpackHotUpdate_N_E("pages/store",{

/***/ "./src/pages/store.tsx":
/*!*****************************!*\
  !*** ./src/pages/store.tsx ***!
  \*****************************/
/*! exports provided: Store, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.ts\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n\n\n\nvar _jsxFileName = \"/Users/alan/Desktop/Projects/SeniorProject/grass/grass-web/src/pages/store.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Store = function Store() {\n  _s();\n\n  var _useProductsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_7__[\"useProductsQuery\"])({\n    variables: {\n      limit: 10\n    }\n  }),\n      _useProductsQuery2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useProductsQuery, 1),\n      data = _useProductsQuery2[0].data;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"Layout\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      align: \"center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n        boxSize: \"100px\",\n        objectFit: \"scale-down\",\n        src: \"https://logos-download.com/wp-content/uploads/2016/02/Walmart_logo_transparent_png.png\",\n        width: \"200px\",\n        align: \"left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        ml: \"auto\",\n        children: \"3705 El Camino Real\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"SimpleGrid\"], {\n      minChildWidth: \"120px\",\n      spacing: \"40px\",\n      p: \"10\",\n      textAlign: \"center\",\n      rounded: \"lg\",\n      children: !data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Spinner\"], {\n        size: \"xs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, _this) : data.products.map(function (p) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          mb: 4,\n          p: 4,\n          bg: \"white\",\n          alignSelf: {\n            base: \"center\",\n            lg: \"flex-start\"\n          },\n          borderRadius: 8,\n          boxShadow: \"md\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n              h: \"250px\",\n              templateRows: \"repeat(3, 1fr)\",\n              templateColumns: \"repeat(4, 1fr)\",\n              gap: 2,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n                    boxSize: \"150px\",\n                    objectFit: \"scale-down\",\n                    src: p.image,\n                    fallbackSrc: p.image,\n                    alt: p.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 74,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"HStack\"], {\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                      children: p.name\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 86,\n                      columnNumber: 25\n                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                      color: \"green.400\",\n                      fontSize: \"xs\",\n                      children: \"$\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 87,\n                      columnNumber: 25\n                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                      fontSize: \"lg\",\n                      fontWeight: \"bold\",\n                      children: p.priceFormat\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 90,\n                      columnNumber: 25\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 85,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 84,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n                  \"aria-label\": \"Add to cart\",\n                  colorScheme: \"green\",\n                  bg: \"green.300\",\n                  color: \"white\",\n                  isFullWidth: true,\n                  rounded: \"full\",\n                  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaShoppingCart\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 105,\n                    columnNumber: 29\n                  }, _this),\n                  boxShadow: \"md\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 98,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 97,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Store, \"Cm/zU+sPpYMKmQtyal0ovsAxmeQ=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_7__[\"useProductsQuery\"]];\n});\n\n_c = Store;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_4__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_8__[\"createUrqlClient\"])(Store));\n\nvar _c;\n\n$RefreshReg$(_c, \"Store\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3N0b3JlLnRzeD8yODE2Il0sIm5hbWVzIjpbIlN0b3JlIiwidXNlUHJvZHVjdHNRdWVyeSIsInZhcmlhYmxlcyIsImxpbWl0IiwiZGF0YSIsInByb2R1Y3RzIiwibWFwIiwicCIsImJhc2UiLCJsZyIsImltYWdlIiwibmFtZSIsInByaWNlRm9ybWF0Iiwid2l0aFVycWxDbGllbnQiLCJjcmVhdGVVcnFsQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSwwQkFDTkMsMkVBQWdCLENBQUM7QUFDbENDLGFBQVMsRUFBRTtBQUNUQyxXQUFLLEVBQUU7QUFERTtBQUR1QixHQUFELENBRFY7QUFBQTtBQUFBLE1BQ2hCQyxJQURnQix5QkFDaEJBLElBRGdCOztBQU16QixzQkFDRSxxRUFBQyx5REFBRDtBQUFBLDRCQUNFLHFFQUFDLHFEQUFEO0FBQU0sV0FBSyxFQUFDLFFBQVo7QUFBQSw4QkFDRSxxRUFBQyxzREFBRDtBQUNFLGVBQU8sRUFBQyxPQURWO0FBRUUsaUJBQVMsRUFBQyxZQUZaO0FBR0UsV0FBRyxFQUFDLHdGQUhOO0FBSUUsYUFBSyxFQUFDLE9BSlI7QUFLRSxhQUFLLEVBQUM7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRSxxRUFBQyxxREFBRDtBQUFNLFVBQUUsRUFBQyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFXRSxxRUFBQywyREFBRDtBQUNFLG1CQUFhLEVBQUMsT0FEaEI7QUFFRSxhQUFPLEVBQUMsTUFGVjtBQUdFLE9BQUMsRUFBQyxJQUhKO0FBSUUsZUFBUyxFQUFDLFFBSlo7QUFLRSxhQUFPLEVBQUMsSUFMVjtBQUFB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LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgU2ltcGxlR3JpZCxcbiAgRGl2aWRlcixcbiAgQnV0dG9uLFxuICBHcmlkLFxuICBHcmlkSXRlbSxcbiAgRmxleCxcbiAgU3Bpbm5lcixcbiAgSW1hZ2UsXG4gIENlbnRlcixcbiAgVGV4dCxcbiAgSWNvbixcbiAgSWNvbkJ1dHRvbixcbiAgSGVhZGluZyxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIGV4dGVuZFRoZW1lLFxuICBIU3RhY2ssXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBGYVNob3BwaW5nQ2FydCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tIFwibmV4dC11cnFsXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJzU3RhciwgQnNTdGFyRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VQcm9kdWN0c1F1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyBjcmVhdGVVcnFsQ2xpZW50IH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZVVycWxDbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IFN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBbeyBkYXRhIH1dID0gdXNlUHJvZHVjdHNRdWVyeSh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBsaW1pdDogMTAsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGJveFNpemU9XCIxMDBweFwiXG4gICAgICAgICAgb2JqZWN0Rml0PVwic2NhbGUtZG93blwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9sb2dvcy1kb3dubG9hZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDIvV2FsbWFydF9sb2dvX3RyYW5zcGFyZW50X3BuZy5wbmdcIlxuICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0IG1sPVwiYXV0b1wiPjM3MDUgRWwgQ2FtaW5vIFJlYWw8L1RleHQ+XG4gICAgICA8L0ZsZXg+XG4gICAgICA8U2ltcGxlR3JpZFxuICAgICAgICBtaW5DaGlsZFdpZHRoPVwiMTIwcHhcIlxuICAgICAgICBzcGFjaW5nPVwiNDBweFwiXG4gICAgICAgIHA9XCIxMFwiXG4gICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgIHJvdW5kZWQ9XCJsZ1wiXG4gICAgICA+XG4gICAgICAgIHshZGF0YSA/IChcbiAgICAgICAgICA8U3Bpbm5lciBzaXplPVwieHNcIiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGRhdGEucHJvZHVjdHMubWFwKChwKSA9PiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIG1iPXs0fVxuICAgICAgICAgICAgICBwPXs0fVxuICAgICAgICAgICAgICBiZz1cIndoaXRlXCJcbiAgICAgICAgICAgICAgYWxpZ25TZWxmPXt7IGJhc2U6IFwiY2VudGVyXCIsIGxnOiBcImZsZXgtc3RhcnRcIiB9fVxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9ezh9XG4gICAgICAgICAgICAgIGJveFNoYWRvdz1cIm1kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgaD1cIjI1MHB4XCJcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlUm93cz1cInJlcGVhdCgzLCAxZnIpXCJcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCg0LCAxZnIpXCJcbiAgICAgICAgICAgICAgICAgIGdhcD17Mn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17NH0+XG4gICAgICAgICAgICAgICAgICAgIDxDZW50ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaXplPVwiMTUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwic2NhbGUtZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3AuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxsYmFja1NyYz17cC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8SFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e3AubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImdyZWVuLjQwMFwiIGZvbnRTaXplPVwieHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwLnByaWNlRm9ybWF0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQWRkIHRvIGNhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgIGJnPVwiZ3JlZW4uMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBpc0Z1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkPVwiZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEZhU2hvcHBpbmdDYXJ0IC8+fVxuICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdz1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpXG4gICAgICAgICl9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjcmVhdGVVcnFsQ2xpZW50KShTdG9yZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/store.tsx\n");

/***/ })

})