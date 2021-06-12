webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.ts\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/alan/Desktop/Projects/SeniorProject/grass/grass-web/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useProductsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useProductsQuery\"])({\n    variables: {\n      limit: 10\n    }\n  }),\n      _useProductsQuery2 = Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useProductsQuery, 1),\n      data = _useProductsQuery2[0].data;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"Layout\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n        boxSize: \"100px\",\n        objectFit: \"scale-down\",\n        src: \"https://i.imgur.com/kUq0bZ8.png\",\n        bg: \"gray.50\",\n        width: \"800px\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"SimpleGrid\"], {\n      bg: \"gray.50\",\n      minChildWidth: \"120px\",\n      spacing: \"40px\",\n      p: \"10\",\n      textAlign: \"center\",\n      rounded: \"lg\",\n      color: \"gray.400\",\n      children: !data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Spinner\"], {\n        size: \"xs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, _this) : data.products.map(function (p) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          mb: 4,\n          p: 4,\n          bg: \"white\",\n          shadow: \"base\",\n          borderWidth: \"1px\",\n          alignSelf: {\n            base: \"center\",\n            lg: \"flex-start\"\n          },\n          borderColor: \"#97CF6E\",\n          borderRadius: \"xl\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n              h: \"250px\",\n              templateRows: \"repeat(3, 1fr)\",\n              templateColumns: \"repeat(4, 1fr)\",\n              gap: 2,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                  fontWeight: \"semibold\",\n                  children: p.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 21\n                }, _this), \"$\", p.price]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n                    fill: \"green\",\n                    boxSize: \"150px\",\n                    objectFit: \"scale-down\",\n                    src: p.image,\n                    fallbackSrc: p.image,\n                    alt: p.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 79,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 3,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                  colorScheme: \"green\",\n                  isFullWidth: true,\n                  children: \"+\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 90,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                colSpan: 1,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n                  \"aria-label\": \"Favorite Item\",\n                  colorScheme: \"yellow\",\n                  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__[\"BsStar\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 98,\n                    columnNumber: 29\n                  }, _this),\n                  children: \"Favorite\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 95,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"Cm/zU+sPpYMKmQtyal0ovsAxmeQ=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useProductsQuery\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_5__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_4__[\"createUrqlClient\"], {\n  ssr: true\n})(Index));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwidXNlUHJvZHVjdHNRdWVyeSIsInZhcmlhYmxlcyIsImxpbWl0IiwiZGF0YSIsInByb2R1Y3RzIiwibWFwIiwicCIsImJhc2UiLCJsZyIsIm5hbWUiLCJwcmljZSIsImltYWdlIiwid2l0aFVycWxDbGllbnQiLCJjcmVhdGVVcnFsQ2xpZW50Iiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSwwQkFDQ0MsMkVBQWdCLENBQUM7QUFDbENDLGFBQVMsRUFBRTtBQUNUQyxXQUFLLEVBQUU7QUFERTtBQUR1QixHQUFELENBRGpCO0FBQUE7QUFBQSxNQUNUQyxJQURTLHlCQUNUQSxJQURTOztBQU1sQixzQkFDRSxxRUFBQyx5REFBRDtBQUFBLDRCQUNFLHFFQUFDLHVEQUFEO0FBQUEsNkJBQ0UscUVBQUMsc0RBQUQ7QUFDRSxlQUFPLEVBQUMsT0FEVjtBQUVFLGlCQUFTLEVBQUMsWUFGWjtBQUdFLFdBQUcsRUFBQyxpQ0FITjtBQUlFLFVBQUUsRUFBQyxTQUpMO0FBS0UsYUFBSyxFQUFDO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVVFLHFFQUFDLDJEQUFEO0FBQ0UsUUFBRSxFQUFDLFNBREw7QUFFRSxtQkFBYSxFQUFDLE9BRmhCO0FBR0UsYUFBTyxFQUFDLE1BSFY7QUFJRSxPQUFDLEVBQUMsSUFKSjtBQUtFLGVBQVMsRUFBQyxRQUxaO0FBTUUsYUFBTyxFQUFDLElBTlY7QUFPRSxXQUFLLEVBQUMsVUFQUjtBQUFBLGdCQVNHLENBQUNBLElBQUQsZ0JBQ0MscUVBQUMsd0RBQUQ7QUFBUyxZQUFJLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsR0FHQ0EsSUFBSSxDQUFDQyxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsQ0FBRDtBQUFBLDRCQUNoQixxRUFBQyxvREFBRDtBQUNFLFlBQUUsRUFBRSxDQUROO0FBRUUsV0FBQyxFQUFFLENBRkw7QUFHRSxZQUFFLEVBQUMsT0FITDtBQUlFLGdCQUFNLEVBQUMsTUFKVDtBQUtFLHFCQUFXLEVBQUMsS0FMZDtBQU1FLG1CQUFTLEVBQUU7QUFBRUMsZ0JBQUksRUFBRSxRQUFSO0FBQWtCQyxjQUFFLEVBQUU7QUFBdEIsV0FOYjtBQU9FLHFCQUFXLEVBQUMsU0FQZDtBQVFFLHNCQUFZLEVBQUUsSUFSaEI7QUFBQSxpQ0FVRSxxRUFBQyx1REFBRDtBQUFBLG1DQUNFLHFFQUFDLHFEQUFEO0FBQ0UsZUFBQyxFQUFDLE9BREo7QUFFRSwwQkFBWSxFQUFDLGdCQUZmO0FBR0UsNkJBQWUsRUFBQyxnQkFIbEI7QUFJRSxpQkFBRyxFQUFFLENBSlA7QUFBQSxzQ0FNRSxxRUFBQyx5REFBRDtBQUFVLHVCQUFPLEVBQUUsQ0FBbkI7QUFBQSx3Q0FDRSxxRUFBQyxxREFBRDtBQUFNLDRCQUFVLEVBQUMsVUFBakI7QUFBQSw0QkFBNkJGLENBQUMsQ0FBQ0c7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixPQUMrQ0gsQ0FBQyxDQUFDSSxLQURqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkYsZUFTRSxxRUFBQyx5REFBRDtBQUFVLHVCQUFPLEVBQUUsQ0FBbkI7QUFBQSx1Q0FDRSxxRUFBQyx1REFBRDtBQUFBLHlDQUNFLHFFQUFDLHNEQUFEO0FBQ0Usd0JBQUksRUFBQyxPQURQO0FBRUUsMkJBQU8sRUFBQyxPQUZWO0FBR0UsNkJBQVMsRUFBQyxZQUhaO0FBSUUsdUJBQUcsRUFBRUosQ0FBQyxDQUFDSyxLQUpUO0FBS0UsK0JBQVcsRUFBRUwsQ0FBQyxDQUFDSyxLQUxqQjtBQU1FLHVCQUFHLEVBQUVMLENBQUMsQ0FBQ0c7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEYsZUFxQkUscUVBQUMseURBQUQ7QUFBVSx1QkFBTyxFQUFFLENBQW5CO0FBQUEsdUNBQ0UscUVBQUMsdURBQUQ7QUFBUSw2QkFBVyxFQUFDLE9BQXBCO0FBQTRCLDZCQUFXLEVBQUUsSUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXJCRixlQTBCRSxxRUFBQyx5REFBRDtBQUFVLHVCQUFPLEVBQUUsQ0FBbkI7QUFBQSx1Q0FDRSxxRUFBQywyREFBRDtBQUNFLGdDQUFXLGVBRGI7QUFFRSw2QkFBVyxFQUFDLFFBRmQ7QUFHRSxzQkFBSSxlQUFFLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZ0I7QUFBQSxPQUFsQjtBQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThFRCxDQXBGRDs7R0FBTVYsSztVQUNlQyxtRTs7O0tBRGZELEs7QUFzRlNhLCtIQUFjLENBQUNDLHdFQUFELEVBQW1CO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQW5CLENBQWQsQ0FBZ0RmLEtBQWhELENBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBTaW1wbGVHcmlkLFxuICBEaXZpZGVyLFxuICBCdXR0b24sXG4gIEdyaWQsXG4gIEdyaWRJdGVtLFxuICBGbGV4LFxuICBTcGlubmVyLFxuICBJbWFnZSxcbiAgQ2VudGVyLFxuICBUZXh0LFxuICBJY29uLFxuICBJY29uQnV0dG9uLFxuICBIZWFkaW5nLFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IHsgY3JlYXRlVXJxbENsaWVudCB9IGZyb20gXCIuLi91dGlscy9jcmVhdGVVcnFsQ2xpZW50XCI7XG5pbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gXCJuZXh0LXVycWxcIjtcbmltcG9ydCB7IHVzZVByb2R1Y3RzUXVlcnkgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcbmltcG9ydCB7IEJzU3RhciB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgUmlNb25leURvbGxhckJveEZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW3sgZGF0YSB9XSA9IHVzZVByb2R1Y3RzUXVlcnkoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgbGltaXQ6IDEwLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q2VudGVyPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBib3hTaXplPVwiMTAwcHhcIlxuICAgICAgICAgIG9iamVjdEZpdD1cInNjYWxlLWRvd25cIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20va1VxMGJaOC5wbmdcIlxuICAgICAgICAgIGJnPVwiZ3JheS41MFwiXG4gICAgICAgICAgd2lkdGg9XCI4MDBweFwiXG4gICAgICAgIC8+XG4gICAgICA8L0NlbnRlcj5cbiAgICAgIDxTaW1wbGVHcmlkXG4gICAgICAgIGJnPVwiZ3JheS41MFwiXG4gICAgICAgIG1pbkNoaWxkV2lkdGg9XCIxMjBweFwiXG4gICAgICAgIHNwYWNpbmc9XCI0MHB4XCJcbiAgICAgICAgcD1cIjEwXCJcbiAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgcm91bmRlZD1cImxnXCJcbiAgICAgICAgY29sb3I9XCJncmF5LjQwMFwiXG4gICAgICA+XG4gICAgICAgIHshZGF0YSA/IChcbiAgICAgICAgICA8U3Bpbm5lciBzaXplPVwieHNcIiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGRhdGEucHJvZHVjdHMubWFwKChwKSA9PiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIG1iPXs0fVxuICAgICAgICAgICAgICBwPXs0fVxuICAgICAgICAgICAgICBiZz1cIndoaXRlXCJcbiAgICAgICAgICAgICAgc2hhZG93PVwiYmFzZVwiXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoPVwiMXB4XCJcbiAgICAgICAgICAgICAgYWxpZ25TZWxmPXt7IGJhc2U6IFwiY2VudGVyXCIsIGxnOiBcImZsZXgtc3RhcnRcIiB9fVxuICAgICAgICAgICAgICBib3JkZXJDb2xvcj1cIiM5N0NGNkVcIlxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9e1wieGxcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgaD1cIjI1MHB4XCJcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlUm93cz1cInJlcGVhdCgzLCAxZnIpXCJcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCg0LCAxZnIpXCJcbiAgICAgICAgICAgICAgICAgIGdhcD17Mn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17NH0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiPntwLm5hbWV9PC9UZXh0PiR7cC5wcmljZX1cbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17NH0+XG4gICAgICAgICAgICAgICAgICAgIDxDZW50ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2l6ZT1cIjE1MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cInNjYWxlLWRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2tTcmM9e3AuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3AubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17M30+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJncmVlblwiIGlzRnVsbFdpZHRoPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRmF2b3JpdGUgSXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJ5ZWxsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgIGljb249ezxCc1N0YXIgLz59XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBGYXZvcml0ZVxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKVxuICAgICAgICApfVxuICAgICAgPC9TaW1wbGVHcmlkPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCwgeyBzc3I6IHRydWUgfSkoSW5kZXgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})