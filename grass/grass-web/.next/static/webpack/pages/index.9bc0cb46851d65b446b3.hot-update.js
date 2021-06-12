webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.ts\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/alan/Desktop/Projects/SeniorProject/grass/grass-web/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useProductsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useProductsQuery\"])({\n    variables: {\n      limit: 10\n    }\n  }),\n      _useProductsQuery2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useProductsQuery, 1),\n      data = _useProductsQuery2[0].data;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"Layout\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Head, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      align: \"center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n        boxSize: \"100px\",\n        objectFit: \"scale-down\",\n        src: \"https://i.imgur.com/kUq0bZ8.png\",\n        width: \"200px\",\n        align: \"left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        ml: \"auto\",\n        color: \"green\",\n        children: \"3705 El Camino Real\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"SimpleGrid\"], {\n      bg: \"gray.50\",\n      minChildWidth: \"120px\",\n      spacing: \"40px\",\n      p: \"10\",\n      textAlign: \"center\",\n      rounded: \"lg\",\n      color: \"gray.400\",\n      children: !data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Spinner\"], {\n        size: \"xs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, _this) : data.products.map(function (p) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          mb: 4,\n          p: 4,\n          bg: \"white\",\n          shadow: \"base\",\n          borderWidth: \"1px\",\n          alignSelf: {\n            base: \"center\",\n            lg: \"flex-start\"\n          },\n          borderColor: \"#97CF6E\",\n          borderRadius: \"xl\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n              h: \"250px\",\n              templateRows: \"repeat(3, 1fr)\",\n              templateColumns: \"repeat(4, 1fr)\",\n              gap: 2,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                  fontWeight: \"semibold\",\n                  children: p.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 21\n                }, _this), \"$\", p.priceFormat]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n                    fill: \"green\",\n                    boxSize: \"150px\",\n                    objectFit: \"scale-down\",\n                    src: p.image,\n                    fallbackSrc: p.image,\n                    alt: p.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 90,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 89,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 3,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                  colorScheme: \"green\",\n                  isFullWidth: true,\n                  children: \"+\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 101,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 1,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n                  \"aria-label\": \"Favorite Item\",\n                  colorScheme: \"yellow\",\n                  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__[\"BsStar\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 109,\n                    columnNumber: 29\n                  }, _this),\n                  children: \"Favorite\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 106,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 105,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"Cm/zU+sPpYMKmQtyal0ovsAxmeQ=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useProductsQuery\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_5__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_4__[\"createUrqlClient\"], {\n  ssr: true\n})(Index));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwidXNlUHJvZHVjdHNRdWVyeSIsInZhcmlhYmxlcyIsImxpbWl0IiwiZGF0YSIsInByb2R1Y3RzIiwibWFwIiwicCIsImJhc2UiLCJsZyIsIm5hbWUiLCJwcmljZUZvcm1hdCIsImltYWdlIiwid2l0aFVycWxDbGllbnQiLCJjcmVhdGVVcnFsQ2xpZW50Iiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFrQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSwwQkFDQ0MsMkVBQWdCLENBQUM7QUFDbENDLGFBQVMsRUFBRTtBQUNUQyxXQUFLLEVBQUU7QUFERTtBQUR1QixHQUFELENBRGpCO0FBQUE7QUFBQSxNQUNUQyxJQURTLHlCQUNUQSxJQURTOztBQU1sQixzQkFDRSxxRUFBQyx5REFBRDtBQUFBLDRCQUNFLHFFQUFDLElBQUQ7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQyx1RUFEUDtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFRRSxxRUFBQyxxREFBRDtBQUFNLFdBQUssRUFBQyxRQUFaO0FBQUEsOEJBQ0UscUVBQUMsc0RBQUQ7QUFDRSxlQUFPLEVBQUMsT0FEVjtBQUVFLGlCQUFTLEVBQUMsWUFGWjtBQUdFLFdBQUcsRUFBQyxpQ0FITjtBQUlFLGFBQUssRUFBQyxPQUpSO0FBS0UsYUFBSyxFQUFDO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBUUUscUVBQUMscURBQUQ7QUFBTSxVQUFFLEVBQUMsTUFBVDtBQUFnQixhQUFLLEVBQUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7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Q0FBQ0Msd0VBQUQsRUFBbUI7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBbkIsQ0FBZCxDQUFnRGYsS0FBaEQsQ0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIFNpbXBsZUdyaWQsXG4gIERpdmlkZXIsXG4gIEJ1dHRvbixcbiAgR3JpZCxcbiAgR3JpZEl0ZW0sXG4gIEZsZXgsXG4gIFNwaW5uZXIsXG4gIEltYWdlLFxuICBDZW50ZXIsXG4gIFRleHQsXG4gIEljb24sXG4gIEljb25CdXR0b24sXG4gIEhlYWRpbmcsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICBleHRlbmRUaGVtZSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IHsgY3JlYXRlVXJxbENsaWVudCB9IGZyb20gXCIuLi91dGlscy9jcmVhdGVVcnFsQ2xpZW50XCI7XG5pbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gXCJuZXh0LXVycWxcIjtcbmltcG9ydCB7IHVzZVByb2R1Y3RzUXVlcnkgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcbmltcG9ydCB7IEJzU3RhciB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgUmlNb25leURvbGxhckJveEZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW3sgZGF0YSB9XSA9IHVzZVByb2R1Y3RzUXVlcnkoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgbGltaXQ6IDEwLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQ6d2dodEA3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgYm94U2l6ZT1cIjEwMHB4XCJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJzY2FsZS1kb3duXCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL2tVcTBiWjgucG5nXCJcbiAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcbiAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAvPlxuICAgICAgICA8VGV4dCBtbD1cImF1dG9cIiBjb2xvcj1cImdyZWVuXCI+XG4gICAgICAgICAgMzcwNSBFbCBDYW1pbm8gUmVhbFxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0ZsZXg+XG4gICAgICA8U2ltcGxlR3JpZFxuICAgICAgICBiZz1cImdyYXkuNTBcIlxuICAgICAgICBtaW5DaGlsZFdpZHRoPVwiMTIwcHhcIlxuICAgICAgICBzcGFjaW5nPVwiNDBweFwiXG4gICAgICAgIHA9XCIxMFwiXG4gICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgIHJvdW5kZWQ9XCJsZ1wiXG4gICAgICAgIGNvbG9yPVwiZ3JheS40MDBcIlxuICAgICAgPlxuICAgICAgICB7IWRhdGEgPyAoXG4gICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInhzXCIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBkYXRhLnByb2R1Y3RzLm1hcCgocCkgPT4gKFxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBtYj17NH1cbiAgICAgICAgICAgICAgcD17NH1cbiAgICAgICAgICAgICAgYmc9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIHNoYWRvdz1cImJhc2VcIlxuICAgICAgICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXG4gICAgICAgICAgICAgIGFsaWduU2VsZj17eyBiYXNlOiBcImNlbnRlclwiLCBsZzogXCJmbGV4LXN0YXJ0XCIgfX1cbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCIjOTdDRjZFXCJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXtcInhsXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDZW50ZXI+XG4gICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgIGg9XCIyNTBweFwiXG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVJvd3M9XCJyZXBlYXQoMywgMWZyKVwiXG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoNCwgMWZyKVwiXG4gICAgICAgICAgICAgICAgICBnYXA9ezJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezR9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwic2VtaWJvbGRcIj57cC5uYW1lfTwvVGV4dD4ke3AucHJpY2VGb3JtYXR9XG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezR9PlxuICAgICAgICAgICAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNpemU9XCIxNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJzY2FsZS1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrU3JjPXtwLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezN9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiZ3JlZW5cIiBpc0Z1bGxXaWR0aD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkZhdm9yaXRlIEl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwieWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8QnNTdGFyIC8+fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgRmF2b3JpdGVcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSlcbiAgICAgICAgKX1cbiAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhVcnFsQ2xpZW50KGNyZWF0ZVVycWxDbGllbnQsIHsgc3NyOiB0cnVlIH0pKEluZGV4KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})