webpackHotUpdate_N_E("pages/store",{

/***/ "./src/pages/store.tsx":
/*!*****************************!*\
  !*** ./src/pages/store.tsx ***!
  \*****************************/
/*! exports provided: Store, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.ts\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n\n\n\nvar _jsxFileName = \"/Users/alan/Desktop/Projects/SeniorProject/grass/grass-web/src/pages/store.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Store = function Store() {\n  _s();\n\n  var _useProductsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useProductsQuery\"])({\n    variables: {\n      limit: 10\n    }\n  }),\n      _useProductsQuery2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useProductsQuery, 1),\n      data = _useProductsQuery2[0].data;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      align: \"center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n        boxSize: \"100px\",\n        objectFit: \"scale-down\",\n        src: \"https://logos-download.com/wp-content/uploads/2016/02/Walmart_logo_transparent_png.png\",\n        width: \"200px\",\n        align: \"left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        ml: \"auto\",\n        children: \"3705 El Camino Real\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"SimpleGrid\"], {\n      bg: \"gray.50\",\n      minChildWidth: \"120px\",\n      spacing: \"40px\",\n      p: \"10\",\n      textAlign: \"center\",\n      rounded: \"lg\",\n      color: \"gray.400\",\n      children: !data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Spinner\"], {\n        size: \"xs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, _this) : data.products.map(function (p) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          mb: 4,\n          p: 4,\n          bg: \"white\",\n          alignSelf: {\n            base: \"center\",\n            lg: \"flex-start\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n              h: \"250px\",\n              templateRows: \"repeat(3, 1fr)\",\n              templateColumns: \"repeat(4, 1fr)\",\n              gap: 2,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n                    fill: \"green\",\n                    boxSize: \"150px\",\n                    objectFit: \"scale-down\",\n                    src: p.image,\n                    fallbackSrc: p.image,\n                    alt: p.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 72,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                  color: \"black\",\n                  fontWeight: \"semibold\",\n                  children: p.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 83,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                  color: \"green.400\",\n                  fontWeight: \"bold\",\n                  children: [\"$\", p.priceFormat]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 3,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                  colorScheme: \"green\",\n                  bg: \"green.300\",\n                  color: \"white\",\n                  isFullWidth: true,\n                  children: \"+\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 92,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 1,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n                  \"aria-label\": \"Favorite Item\",\n                  colorScheme: \"yellow\",\n                  bg: \"yellow.300\",\n                  color: \"white\",\n                  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BsStarFill, {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 107,\n                    columnNumber: 29\n                  }, _this),\n                  children: \"Favorite\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 102,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 101,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Store, \"Cm/zU+sPpYMKmQtyal0ovsAxmeQ=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useProductsQuery\"]];\n});\n\n_c = Store;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_3__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_7__[\"createUrqlClient\"])(Store));\n\nvar _c;\n\n$RefreshReg$(_c, \"Store\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3N0b3JlLnRzeD8yODE2Il0sIm5hbWVzIjpbIlN0b3JlIiwidXNlUHJvZHVjdHNRdWVyeSIsInZhcmlhYmxlcyIsImxpbWl0IiwiZGF0YSIsInByb2R1Y3RzIiwibWFwIiwicCIsImJhc2UiLCJsZyIsImltYWdlIiwibmFtZSIsInByaWNlRm9ybWF0Iiwid2l0aFVycWxDbGllbnQiLCJjcmVhdGVVcnFsQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFrQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSwwQkFDTkMsMkVBQWdCLENBQUM7QUFDbENDLGFBQVMsRUFBRTtBQUNUQyxXQUFLLEVBQUU7QUFERTtBQUR1QixHQUFELENBRFY7QUFBQTtBQUFBLE1BQ2hCQyxJQURnQix5QkFDaEJBLElBRGdCOztBQU16QixzQkFDRSxxRUFBQyx5REFBRDtBQUFBLDRCQUNFLHFFQUFDLHFEQUFEO0FBQU0sV0FBSyxFQUFDLFFBQVo7QUFBQSw4QkFDRSxxRUFBQyxzREFBRDtBQUNFLGVBQU8sRUFBQyxPQURWO0FBRUUsaUJBQVMsRUFBQyxZQUZaO0FBR0UsV0FBRyxFQUFDLHdGQUhOO0FBSUUsYUFBSyxFQUFDLE9BSlI7QUFLRSxhQUFLLEVBQUM7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRSxxRUFBQyxxREFBRDtBQUFNLFVBQUUsRUFBQyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFXRSxxRUFBQywyREFBRDtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsbUJBQWEsRUFBQyxPQUZoQjtBQUdFLGFBQU8sRUFBQyxNQUhWO0FBSUUsT0FBQyxFQUFDLElBSko7QUFLRSxlQUFTLEVBQUMsUUFMWjtBQU1FLGFBQU8s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aWxlIjoiLi9zcmMvcGFnZXMvc3RvcmUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBTaW1wbGVHcmlkLFxuICBEaXZpZGVyLFxuICBCdXR0b24sXG4gIEdyaWQsXG4gIEdyaWRJdGVtLFxuICBGbGV4LFxuICBTcGlubmVyLFxuICBJbWFnZSxcbiAgQ2VudGVyLFxuICBUZXh0LFxuICBJY29uLFxuICBJY29uQnV0dG9uLFxuICBIZWFkaW5nLFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgZXh0ZW5kVGhlbWUsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gXCJuZXh0LXVycWxcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnNTdGFyIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IHVzZVByb2R1Y3RzUXVlcnkgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcbmltcG9ydCB7IGNyZWF0ZVVycWxDbGllbnQgfSBmcm9tIFwiLi4vdXRpbHMvY3JlYXRlVXJxbENsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgU3RvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IFt7IGRhdGEgfV0gPSB1c2VQcm9kdWN0c1F1ZXJ5KHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGxpbWl0OiAxMCxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgYm94U2l6ZT1cIjEwMHB4XCJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJzY2FsZS1kb3duXCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2xvZ29zLWRvd25sb2FkLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wMi9XYWxtYXJ0X2xvZ29fdHJhbnNwYXJlbnRfcG5nLnBuZ1wiXG4gICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQgbWw9XCJhdXRvXCI+MzcwNSBFbCBDYW1pbm8gUmVhbDwvVGV4dD5cbiAgICAgIDwvRmxleD5cbiAgICAgIDxTaW1wbGVHcmlkXG4gICAgICAgIGJnPVwiZ3JheS41MFwiXG4gICAgICAgIG1pbkNoaWxkV2lkdGg9XCIxMjBweFwiXG4gICAgICAgIHNwYWNpbmc9XCI0MHB4XCJcbiAgICAgICAgcD1cIjEwXCJcbiAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgcm91bmRlZD1cImxnXCJcbiAgICAgICAgY29sb3I9XCJncmF5LjQwMFwiXG4gICAgICA+XG4gICAgICAgIHshZGF0YSA/IChcbiAgICAgICAgICA8U3Bpbm5lciBzaXplPVwieHNcIiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGRhdGEucHJvZHVjdHMubWFwKChwKSA9PiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIG1iPXs0fVxuICAgICAgICAgICAgICBwPXs0fVxuICAgICAgICAgICAgICBiZz1cIndoaXRlXCJcbiAgICAgICAgICAgICAgYWxpZ25TZWxmPXt7IGJhc2U6IFwiY2VudGVyXCIsIGxnOiBcImZsZXgtc3RhcnRcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICBoPVwiMjUwcHhcIlxuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVSb3dzPVwicmVwZWF0KDMsIDFmcilcIlxuICAgICAgICAgICAgICAgICAgdGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDQsIDFmcilcIlxuICAgICAgICAgICAgICAgICAgZ2FwPXsyfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaXplPVwiMTUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwic2NhbGUtZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3AuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxsYmFja1NyYz17cC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJibGFja1wiIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJncmVlbi40MDBcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICR7cC5wcmljZUZvcm1hdH1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezN9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgYmc9XCJncmVlbi4zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGlzRnVsbFdpZHRoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkZhdm9yaXRlIEl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwieWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICBiZz1cInllbGxvdy4zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGljb249ezxCc1N0YXJGaWxsIC8+fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgRmF2b3JpdGVcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSlcbiAgICAgICAgKX1cbiAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhVcnFsQ2xpZW50KGNyZWF0ZVVycWxDbGllbnQpKFN0b3JlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/store.tsx\n");

/***/ })

})