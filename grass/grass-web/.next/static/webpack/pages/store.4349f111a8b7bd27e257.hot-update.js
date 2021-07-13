webpackHotUpdate_N_E("pages/store",{

/***/ "./src/utils/createUrqlClient.ts":
/*!***************************************!*\
  !*** ./src/utils/createUrqlClient.ts ***!
  \***************************************/
/*! exports provided: cursorPagination, createUrqlClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cursorPagination\", function() { return cursorPagination; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUrqlClient\", function() { return createUrqlClient; });\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.ts\");\n/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wonka */ \"./node_modules/wonka/dist/wonka.mjs\");\n/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./betterUpdateQuery */ \"./src/utils/betterUpdateQuery.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar errorExchange = function errorExchange(_ref) {\n  var forward = _ref.forward;\n  return function (ops$) {\n    return Object(wonka__WEBPACK_IMPORTED_MODULE_4__[\"pipe\"])(forward(ops$), Object(wonka__WEBPACK_IMPORTED_MODULE_4__[\"tap\"])(function (_ref2) {\n      var error = _ref2.error;\n\n      if (error !== null && error !== void 0 && error.message.includes(\"not auth\")) {\n        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.replace(\"/login\");\n      }\n    }));\n  };\n};\n\nvar cursorPagination = function cursorPagination() {\n  return function (_parent, fieldArgs, cache, info) {\n    var entityKey = info.parentKey,\n        fieldName = info.fieldName;\n    var allFields = cache.inspectFields(entityKey);\n    var fieldInfos = allFields.filter(function (info) {\n      return info.fieldName === fieldName;\n    });\n    var size = fieldInfos.length;\n\n    if (size === 0) {\n      return undefined;\n    }\n\n    var fieldKey = \"\".concat(fieldName, \"(\").concat(Object(urql__WEBPACK_IMPORTED_MODULE_1__[\"stringifyVariables\"])(fieldArgs), \")\");\n    var isItInCache = cache.resolve(cache.resolve(entityKey, fieldKey), \"products\");\n    info.partial = !isItInCache;\n    var hasMore = true;\n    var results = [];\n    fieldInfos.forEach(function (fi) {\n      var key = cache.resolve(entityKey, fi.fieldKey);\n      var data = cache.resolve(entityKey, fi.fieldKey);\n\n      var _hasMore = cache.resolve(entityKey, \"hasMore\");\n\n      if (!_hasMore) {\n        hasMore = _hasMore;\n      }\n\n      results.push.apply(results, Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data));\n      console.log(data);\n    });\n    return {\n      __typename: \"PaginatedProducts\",\n      hasMore: hasMore,\n      products: results\n    }; //   const visited = new Set();\n    //   let result: NullArray<string> = [];\n    //   let prevOffset: number | null = null;\n    //   for (let i = 0; i < size; i++) {\n    //     const { fieldKey, arguments: args } = fieldInfos[i];\n    //     if (args === null || !compareArgs(fieldArgs, args)) {\n    //       continue;\n    //     }\n    //     const links = cache.resolve(entityKey, fieldKey) as string[];\n    //     const currentOffset = args[cursorArgument];\n    //     if (\n    //       links === null ||\n    //       links.length === 0 ||\n    //       typeof currentOffset !== \"number\"\n    //     ) {\n    //       continue;\n    //     }\n    //     const tempResult: NullArray<string> = [];\n    //     for (let j = 0; j < links.length; j++) {\n    //       const link = links[j];\n    //       if (visited.has(link)) continue;\n    //       tempResult.push(link);\n    //       visited.add(link);\n    //     }\n    //     if (\n    //       (!prevOffset || currentOffset > prevOffset) ===\n    //       (mergeMode === \"after\")\n    //     ) {\n    //       result = [...result, ...tempResult];\n    //     } else {\n    //       result = [...tempResult, ...result];\n    //     }\n    //     prevOffset = currentOffset;\n    //   }\n    //   const hasCurrentPage = cache.resolve(entityKey, fieldName, fieldArgs);\n    //   if (hasCurrentPage) {\n    //     return result;\n    //   } else if (!(info as any).store.schema) {\n    //     return undefined;\n    //   } else {\n    //     info.partial = true;\n    //     return result;\n    //   }\n  };\n};\nvar createUrqlClient = function createUrqlClient(ssrExchange) {\n  return {\n    url: \"http://localhost:4000/graphql\",\n    fetchOptions: {\n      credentials: \"include\"\n    },\n    exchanges: [urql__WEBPACK_IMPORTED_MODULE_1__[\"dedupExchange\"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_2__[\"cacheExchange\"])({\n      resolvers: {\n        Query: {\n          products: cursorPagination()\n        }\n      },\n      updates: {\n        Mutation: {\n          logout: function logout(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_5__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__[\"MeDocument\"]\n            }, _result, function () {\n              return {\n                me: null\n              };\n            });\n          },\n          login: function login(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_5__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__[\"MeDocument\"]\n            }, _result, function (result, query) {\n              if (result.login.errors) {\n                return query;\n              } else {\n                return {\n                  me: result.login.user\n                };\n              }\n            });\n          },\n          register: function register(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_5__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__[\"MeDocument\"]\n            }, _result, function (result, query) {\n              if (result.register.errors) {\n                return query;\n              } else {\n                return {\n                  me: result.register.user\n                };\n              }\n            });\n          }\n        }\n      }\n    }), errorExchange, ssrExchange, urql__WEBPACK_IMPORTED_MODULE_1__[\"fetchExchange\"]]\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHM/ZjRiNiJdLCJuYW1lcyI6WyJlcnJvckV4Y2hhbmdlIiwiZm9yd2FyZCIsIm9wcyQiLCJwaXBlIiwidGFwIiwiZXJyb3IiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJSb3V0ZXIiLCJyZXBsYWNlIiwiY3Vyc29yUGFnaW5hdGlvbiIsIl9wYXJlbnQiLCJmaWVsZEFyZ3MiLCJjYWNoZSIsImluZm8iLCJlbnRpdHlLZXkiLCJwYXJlbnRLZXkiLCJmaWVsZE5hbWUiLCJhbGxGaWVsZHMiLCJpbnNwZWN0RmllbGRzIiwiZmllbGRJbmZvcyIsImZpbHRlciIsInNpemUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJmaWVsZEtleSIsInN0cmluZ2lmeVZhcmlhYmxlcyIsImlzSXRJbkNhY2hlIiwicmVzb2x2ZSIsInBhcnRpYWwiLCJoYXNNb3JlIiwicmVzdWx0cyIsImZvckVhY2giLCJmaSIsImtleSIsImRhdGEiLCJfaGFzTW9yZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiX190eXBlbmFtZSIsInByb2R1Y3RzIiwiY3JlYXRlVXJxbENsaWVudCIsInNzckV4Y2hhbmdlIiwidXJsIiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJleGNoYW5nZXMiLCJkZWR1cEV4Y2hhbmdlIiwiY2FjaGVFeGNoYW5nZSIsInJlc29sdmVycyIsIlF1ZXJ5IiwidXBkYXRlcyIsIk11dGF0aW9uIiwibG9nb3V0IiwiX3Jlc3VsdCIsImFyZ3MiLCJiZXR0ZXJVcGRhdGVRdWVyeSIsInF1ZXJ5IiwiTWVEb2N1bWVudCIsIm1lIiwibG9naW4iLCJyZXN1bHQiLCJlcnJvcnMiLCJ1c2VyIiwicmVnaXN0ZXIiLCJmZXRjaEV4Y2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEI7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QWhCLEVBQXVCQyxJQUF2QixFQUFnQztBQUN4QzJDLHdGQUFpQixDQUNmNUMsS0FEZSxFQUVmO0FBQUU2QyxtQkFBSyxFQUFFQyw2REFBVUE7QUFBbkIsYUFGZSxFQUdmSixPQUhlLEVBSWYsVUFBQ08sTUFBRCxFQUFTSixLQUFULEVBQW1CO0FBQ2pCLGtCQUFJSSxNQUFNLENBQUNHLFFBQVAsQ0FBZ0JGLE1BQXBCLEVBQTRCO0FBQzFCLHVCQUFPTCxLQUFQO0FBQ0QsZUFGRCxNQUVPO0FBQ0wsdUJBQU87QUFDTEUsb0JBQUUsRUFBRUUsTUFBTSxDQUFDRyxRQUFQLENBQWdCRDtBQURmLGlCQUFQO0FBR0Q7QUFDRixhQVpjLENBQWpCO0FBY0Q7QUF6Q087QUFESDtBQU5HLEtBQUQsQ0FGSixFQXNEVGhFLGFBdERTLEVBdURUMkMsV0F2RFMsRUF3RFR1QixrREF4RFM7QUFMMEMsR0FBdkI7QUFBQSxDQUF6QiIsImZpbGUiOiIuL3NyYy91dGlscy9jcmVhdGVVcnFsQ2xpZW50LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZGVkdXBFeGNoYW5nZSxcbiAgRXhjaGFuZ2UsXG4gIGZldGNoRXhjaGFuZ2UsXG4gIHN0cmluZ2lmeVZhcmlhYmxlcyxcbn0gZnJvbSBcInVycWxcIjtcbmltcG9ydCB7IGNhY2hlRXhjaGFuZ2UsIFJlc29sdmVyIH0gZnJvbSBcIkB1cnFsL2V4Y2hhbmdlLWdyYXBoY2FjaGVcIjtcbmltcG9ydCB7XG4gIExvZ291dE11dGF0aW9uLFxuICBNZVF1ZXJ5LFxuICBNZURvY3VtZW50LFxuICBMb2dpbk11dGF0aW9uLFxuICBSZWdpc3Rlck11dGF0aW9uLFxufSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcbmltcG9ydCB7IHBpcGUsIHRhcCB9IGZyb20gXCJ3b25rYVwiO1xuaW1wb3J0IHsgYmV0dGVyVXBkYXRlUXVlcnkgfSBmcm9tIFwiLi9iZXR0ZXJVcGRhdGVRdWVyeVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgZXJyb3JFeGNoYW5nZTogRXhjaGFuZ2UgPSAoeyBmb3J3YXJkIH0pID0+IChvcHMkKSA9PiB7XG4gIHJldHVybiBwaXBlKFxuICAgIGZvcndhcmQob3BzJCksXG4gICAgdGFwKCh7IGVycm9yIH0pID0+IHtcbiAgICAgIGlmIChlcnJvcj8ubWVzc2FnZS5pbmNsdWRlcyhcIm5vdCBhdXRoXCIpKSB7XG4gICAgICAgIFJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY3Vyc29yUGFnaW5hdGlvbiA9ICgpOiBSZXNvbHZlciA9PiB7XG4gIHJldHVybiAoX3BhcmVudCwgZmllbGRBcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgIGNvbnN0IHsgcGFyZW50S2V5OiBlbnRpdHlLZXksIGZpZWxkTmFtZSB9ID0gaW5mbztcblxuICAgIGNvbnN0IGFsbEZpZWxkcyA9IGNhY2hlLmluc3BlY3RGaWVsZHMoZW50aXR5S2V5KTtcbiAgICBjb25zdCBmaWVsZEluZm9zID0gYWxsRmllbGRzLmZpbHRlcigoaW5mbykgPT4gaW5mby5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSk7XG4gICAgY29uc3Qgc2l6ZSA9IGZpZWxkSW5mb3MubGVuZ3RoO1xuICAgIGlmIChzaXplID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkS2V5ID0gYCR7ZmllbGROYW1lfSgke3N0cmluZ2lmeVZhcmlhYmxlcyhmaWVsZEFyZ3MpfSlgO1xuICAgIGNvbnN0IGlzSXRJbkNhY2hlID0gY2FjaGUucmVzb2x2ZShcbiAgICAgIGNhY2hlLnJlc29sdmUoZW50aXR5S2V5LCBmaWVsZEtleSkgYXMgc3RyaW5nLFxuICAgICAgXCJwcm9kdWN0c1wiXG4gICAgKTtcbiAgICBpbmZvLnBhcnRpYWwgPSAhaXNJdEluQ2FjaGU7XG4gICAgbGV0IGhhc01vcmUgPSB0cnVlO1xuICAgIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG4gICAgZmllbGRJbmZvcy5mb3JFYWNoKChmaSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gY2FjaGUucmVzb2x2ZShlbnRpdHlLZXksIGZpLmZpZWxkS2V5KSBhcyBzdHJpbmc7XG4gICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVzb2x2ZShlbnRpdHlLZXksIGZpLmZpZWxkS2V5KSBhcyBzdHJpbmdbXTtcbiAgICAgIGNvbnN0IF9oYXNNb3JlID0gY2FjaGUucmVzb2x2ZShlbnRpdHlLZXksIFwiaGFzTW9yZVwiKTtcbiAgICAgIGlmICghX2hhc01vcmUpIHtcbiAgICAgICAgaGFzTW9yZSA9IF9oYXNNb3JlIGFzIGJvb2xlYW47XG4gICAgICB9XG4gICAgICByZXN1bHRzLnB1c2goLi4uZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBfX3R5cGVuYW1lOiBcIlBhZ2luYXRlZFByb2R1Y3RzXCIsXG4gICAgICBoYXNNb3JlLFxuICAgICAgcHJvZHVjdHM6IHJlc3VsdHMsXG4gICAgfTtcblxuICAgIC8vICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgICAvLyAgIGxldCByZXN1bHQ6IE51bGxBcnJheTxzdHJpbmc+ID0gW107XG4gICAgLy8gICBsZXQgcHJldk9mZnNldDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgLy8gICAgIGNvbnN0IHsgZmllbGRLZXksIGFyZ3VtZW50czogYXJncyB9ID0gZmllbGRJbmZvc1tpXTtcbiAgICAvLyAgICAgaWYgKGFyZ3MgPT09IG51bGwgfHwgIWNvbXBhcmVBcmdzKGZpZWxkQXJncywgYXJncykpIHtcbiAgICAvLyAgICAgICBjb250aW51ZTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGNvbnN0IGxpbmtzID0gY2FjaGUucmVzb2x2ZShlbnRpdHlLZXksIGZpZWxkS2V5KSBhcyBzdHJpbmdbXTtcbiAgICAvLyAgICAgY29uc3QgY3VycmVudE9mZnNldCA9IGFyZ3NbY3Vyc29yQXJndW1lbnRdO1xuXG4gICAgLy8gICAgIGlmIChcbiAgICAvLyAgICAgICBsaW5rcyA9PT0gbnVsbCB8fFxuICAgIC8vICAgICAgIGxpbmtzLmxlbmd0aCA9PT0gMCB8fFxuICAgIC8vICAgICAgIHR5cGVvZiBjdXJyZW50T2Zmc2V0ICE9PSBcIm51bWJlclwiXG4gICAgLy8gICAgICkge1xuICAgIC8vICAgICAgIGNvbnRpbnVlO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgY29uc3QgdGVtcFJlc3VsdDogTnVsbEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAgIC8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpbmtzLmxlbmd0aDsgaisrKSB7XG4gICAgLy8gICAgICAgY29uc3QgbGluayA9IGxpbmtzW2pdO1xuICAgIC8vICAgICAgIGlmICh2aXNpdGVkLmhhcyhsaW5rKSkgY29udGludWU7XG4gICAgLy8gICAgICAgdGVtcFJlc3VsdC5wdXNoKGxpbmspO1xuICAgIC8vICAgICAgIHZpc2l0ZWQuYWRkKGxpbmspO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgaWYgKFxuICAgIC8vICAgICAgICghcHJldk9mZnNldCB8fCBjdXJyZW50T2Zmc2V0ID4gcHJldk9mZnNldCkgPT09XG4gICAgLy8gICAgICAgKG1lcmdlTW9kZSA9PT0gXCJhZnRlclwiKVxuICAgIC8vICAgICApIHtcbiAgICAvLyAgICAgICByZXN1bHQgPSBbLi4ucmVzdWx0LCAuLi50ZW1wUmVzdWx0XTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICByZXN1bHQgPSBbLi4udGVtcFJlc3VsdCwgLi4ucmVzdWx0XTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIHByZXZPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xuICAgIC8vICAgfVxuXG4gICAgLy8gICBjb25zdCBoYXNDdXJyZW50UGFnZSA9IGNhY2hlLnJlc29sdmUoZW50aXR5S2V5LCBmaWVsZE5hbWUsIGZpZWxkQXJncyk7XG4gICAgLy8gICBpZiAoaGFzQ3VycmVudFBhZ2UpIHtcbiAgICAvLyAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAvLyAgIH0gZWxzZSBpZiAoIShpbmZvIGFzIGFueSkuc3RvcmUuc2NoZW1hKSB7XG4gICAgLy8gICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICBpbmZvLnBhcnRpYWwgPSB0cnVlO1xuICAgIC8vICAgICByZXR1cm4gcmVzdWx0O1xuICAgIC8vICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVycWxDbGllbnQgPSAoc3NyRXhjaGFuZ2U6IGFueSkgPT4gKHtcbiAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXG4gIGZldGNoT3B0aW9uczoge1xuICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiBhcyBjb25zdCxcbiAgfSxcbiAgZXhjaGFuZ2VzOiBbXG4gICAgZGVkdXBFeGNoYW5nZSxcbiAgICBjYWNoZUV4Y2hhbmdlKHtcbiAgICAgIHJlc29sdmVyczoge1xuICAgICAgICBRdWVyeToge1xuICAgICAgICAgIHByb2R1Y3RzOiBjdXJzb3JQYWdpbmF0aW9uKCksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdXBkYXRlczoge1xuICAgICAgICBNdXRhdGlvbjoge1xuICAgICAgICAgIGxvZ291dDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dvdXRNdXRhdGlvbiwgTWVRdWVyeT4oXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXG4gICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgICgpID0+ICh7IG1lOiBudWxsIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbG9naW46IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9naW5NdXRhdGlvbiwgTWVRdWVyeT4oXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXG4gICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sb2dpbi5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5sb2dpbi51c2VyLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHJlZ2lzdGVyOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PFJlZ2lzdGVyTXV0YXRpb24sIE1lUXVlcnk+KFxuICAgICAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxuICAgICAgICAgICAgICBfcmVzdWx0LFxuICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVnaXN0ZXIuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQucmVnaXN0ZXIudXNlcixcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGVycm9yRXhjaGFuZ2UsXG4gICAgc3NyRXhjaGFuZ2UsXG4gICAgZmV0Y2hFeGNoYW5nZSxcbiAgXSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/createUrqlClient.ts\n");

/***/ })

})