webpackHotUpdate_N_E("pages/store",{

/***/ "./src/utils/createUrqlClient.ts":
/*!***************************************!*\
  !*** ./src/utils/createUrqlClient.ts ***!
  \***************************************/
/*! exports provided: cursorPagination, createUrqlClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cursorPagination\", function() { return cursorPagination; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUrqlClient\", function() { return createUrqlClient; });\n/* harmony import */ var _Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.ts\");\n/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wonka */ \"./node_modules/wonka/dist/wonka.mjs\");\n/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./betterUpdateQuery */ \"./src/utils/betterUpdateQuery.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar errorExchange = function errorExchange(_ref) {\n  var forward = _ref.forward;\n  return function (ops$) {\n    return Object(wonka__WEBPACK_IMPORTED_MODULE_4__[\"pipe\"])(forward(ops$), Object(wonka__WEBPACK_IMPORTED_MODULE_4__[\"tap\"])(function (_ref2) {\n      var error = _ref2.error;\n\n      if (error !== null && error !== void 0 && error.message.includes(\"not auth\")) {\n        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.replace(\"/login\");\n      }\n    }));\n  };\n};\n\nvar cursorPagination = function cursorPagination() {\n  return function (_parent, fieldArgs, cache, info) {\n    var entityKey = info.parentKey,\n        fieldName = info.fieldName;\n    var allFields = cache.inspectFields(entityKey);\n    var fieldInfos = allFields.filter(function (info) {\n      return info.fieldName === fieldName;\n    });\n    var size = fieldInfos.length;\n\n    if (size === 0) {\n      return undefined;\n    }\n\n    var isItInCache = cache.resolve(entityKey, \"\".concat(fieldName, \"(\").concat(Object(urql__WEBPACK_IMPORTED_MODULE_1__[\"stringifyVariables\"])(fieldArgs), \")\"));\n    info.partial = !isItInCache;\n    var hasMore = true;\n    var results = [];\n    fieldInfos.forEach(function (fi) {\n      var data = cache.resolve(entityKey, fi.fieldKey);\n\n      var _hasMore = cache.resolve(entityKey, \"hasMore\");\n\n      if (!_hasMore) {\n        hasMore = _hasMore;\n      }\n\n      results.push.apply(results, Object(_Users_alan_Desktop_Projects_SeniorProject_grass_grass_web_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data));\n      console.log(data);\n    });\n    return {\n      __typename: \"PaginatedProducts\",\n      hasMore: hasMore,\n      products: results\n    }; //   const visited = new Set();\n    //   let result: NullArray<string> = [];\n    //   let prevOffset: number | null = null;\n    //   for (let i = 0; i < size; i++) {\n    //     const { fieldKey, arguments: args } = fieldInfos[i];\n    //     if (args === null || !compareArgs(fieldArgs, args)) {\n    //       continue;\n    //     }\n    //     const links = cache.resolve(entityKey, fieldKey) as string[];\n    //     const currentOffset = args[cursorArgument];\n    //     if (\n    //       links === null ||\n    //       links.length === 0 ||\n    //       typeof currentOffset !== \"number\"\n    //     ) {\n    //       continue;\n    //     }\n    //     const tempResult: NullArray<string> = [];\n    //     for (let j = 0; j < links.length; j++) {\n    //       const link = links[j];\n    //       if (visited.has(link)) continue;\n    //       tempResult.push(link);\n    //       visited.add(link);\n    //     }\n    //     if (\n    //       (!prevOffset || currentOffset > prevOffset) ===\n    //       (mergeMode === \"after\")\n    //     ) {\n    //       result = [...result, ...tempResult];\n    //     } else {\n    //       result = [...tempResult, ...result];\n    //     }\n    //     prevOffset = currentOffset;\n    //   }\n    //   const hasCurrentPage = cache.resolve(entityKey, fieldName, fieldArgs);\n    //   if (hasCurrentPage) {\n    //     return result;\n    //   } else if (!(info as any).store.schema) {\n    //     return undefined;\n    //   } else {\n    //     info.partial = true;\n    //     return result;\n    //   }\n  };\n};\nvar createUrqlClient = function createUrqlClient(ssrExchange) {\n  return {\n    url: \"http://localhost:4000/graphql\",\n    fetchOptions: {\n      credentials: \"include\"\n    },\n    exchanges: [urql__WEBPACK_IMPORTED_MODULE_1__[\"dedupExchange\"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_2__[\"cacheExchange\"])({\n      resolvers: {\n        Query: {\n          products: cursorPagination()\n        }\n      },\n      updates: {\n        Mutation: {\n          logout: function logout(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_5__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__[\"MeDocument\"]\n            }, _result, function () {\n              return {\n                me: null\n              };\n            });\n          },\n          login: function login(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_5__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__[\"MeDocument\"]\n            }, _result, function (result, query) {\n              if (result.login.errors) {\n                return query;\n              } else {\n                return {\n                  me: result.login.user\n                };\n              }\n            });\n          },\n          register: function register(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_5__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__[\"MeDocument\"]\n            }, _result, function (result, query) {\n              if (result.register.errors) {\n                return query;\n              } else {\n                return {\n                  me: result.register.user\n                };\n              }\n            });\n          }\n        }\n      }\n    }), errorExchange, ssrExchange, urql__WEBPACK_IMPORTED_MODULE_1__[\"fetchExchange\"]]\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHM/ZjRiNiJdLCJuYW1lcyI6WyJlcnJvckV4Y2hhbmdlIiwiZm9yd2FyZCIsIm9wcyQiLCJwaXBlIiwidGFwIiwiZXJyb3IiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJSb3V0ZXIiLCJyZXBsYWNlIiwiY3Vyc29yUGFnaW5hdGlvbiIsIl9wYXJlbnQiLCJmaWVsZEFyZ3MiLCJjYWNoZSIsImluZm8iLCJlbnRpdHlLZXkiLCJwYXJlbnRLZXkiLCJmaWVsZE5hbWUiLCJhbGxGaWVsZHMiLCJpbnNwZWN0RmllbGRzIiwiZmllbGRJbmZvcyIsImZpbHRlciIsInNpemUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJpc0l0SW5DYWNoZSIsInJlc29sdmUiLCJzdHJpbmdpZnlWYXJpYWJsZXMiLCJwYXJ0aWFsIiwiaGFzTW9yZSIsInJlc3VsdHMiLCJmb3JFYWNoIiwiZmkiLCJkYXRhIiwiZmllbGRLZXkiLCJfaGFzTW9yZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiX190eXBlbmFtZSIsInByb2R1Y3RzIiwiY3JlYXRlVXJxbENsaWVudCIsInNzckV4Y2hhbmdlIiwidXJsIiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJleGNoYW5nZXMiLCJkZWR1cEV4Y2hhbmdlIiwiY2FjaGVFeGNoYW5nZSIsInJlc29sdmVycyIsIlF1ZXJ5IiwidXBkYXRlcyIsIk11dGF0aW9uIiwibG9nb3V0IiwiX3Jlc3VsdCIsImFyZ3MiLCJiZXR0ZXJVcGRhdGVRdWVyeSIsInF1ZXJ5IiwiTWVEb2N1bWVudCIsIm1lIiwibG9naW4iLCJyZXN1bHQiLCJlcnJvcnMiLCJ1c2VyIiwicmVnaXN0ZXIiLCJmZXRjaEV4Y2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEI7QUFBQSxN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UUFBUCxDQUFnQkYsTUFBcEIsRUFBNEI7QUFDMUIsdUJBQU9MLEtBQVA7QUFDRCxlQUZELE1BRU87QUFDTCx1QkFBTztBQUNMRSxvQkFBRSxFQUFFRSxNQUFNLENBQUNHLFFBQVAsQ0FBZ0JEO0FBRGYsaUJBQVA7QUFHRDtBQUNGLGFBWmMsQ0FBakI7QUFjRDtBQXpDTztBQURIO0FBTkcsS0FBRCxDQUZKLEVBc0RUL0QsYUF0RFMsRUF1RFQwQyxXQXZEUyxFQXdEVHVCLGtEQXhEUztBQUwwQyxHQUF2QjtBQUFBLENBQXpCIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBkZWR1cEV4Y2hhbmdlLFxuICBFeGNoYW5nZSxcbiAgZmV0Y2hFeGNoYW5nZSxcbiAgc3RyaW5naWZ5VmFyaWFibGVzLFxufSBmcm9tIFwidXJxbFwiO1xuaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSwgUmVzb2x2ZXIgfSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xuaW1wb3J0IHtcbiAgTG9nb3V0TXV0YXRpb24sXG4gIE1lUXVlcnksXG4gIE1lRG9jdW1lbnQsXG4gIExvZ2luTXV0YXRpb24sXG4gIFJlZ2lzdGVyTXV0YXRpb24sXG59IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgcGlwZSwgdGFwIH0gZnJvbSBcIndvbmthXCI7XG5pbXBvcnQgeyBiZXR0ZXJVcGRhdGVRdWVyeSB9IGZyb20gXCIuL2JldHRlclVwZGF0ZVF1ZXJ5XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBlcnJvckV4Y2hhbmdlOiBFeGNoYW5nZSA9ICh7IGZvcndhcmQgfSkgPT4gKG9wcyQpID0+IHtcbiAgcmV0dXJuIHBpcGUoXG4gICAgZm9yd2FyZChvcHMkKSxcbiAgICB0YXAoKHsgZXJyb3IgfSkgPT4ge1xuICAgICAgaWYgKGVycm9yPy5tZXNzYWdlLmluY2x1ZGVzKFwibm90IGF1dGhcIikpIHtcbiAgICAgICAgUm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIik7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjdXJzb3JQYWdpbmF0aW9uID0gKCk6IFJlc29sdmVyID0+IHtcbiAgcmV0dXJuIChfcGFyZW50LCBmaWVsZEFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgY29uc3QgeyBwYXJlbnRLZXk6IGVudGl0eUtleSwgZmllbGROYW1lIH0gPSBpbmZvO1xuXG4gICAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcyhlbnRpdHlLZXkpO1xuICAgIGNvbnN0IGZpZWxkSW5mb3MgPSBhbGxGaWVsZHMuZmlsdGVyKChpbmZvKSA9PiBpbmZvLmZpZWxkTmFtZSA9PT0gZmllbGROYW1lKTtcbiAgICBjb25zdCBzaXplID0gZmllbGRJbmZvcy5sZW5ndGg7XG4gICAgaWYgKHNpemUgPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgaXNJdEluQ2FjaGUgPSBjYWNoZS5yZXNvbHZlKFxuICAgICAgZW50aXR5S2V5LFxuICAgICAgYCR7ZmllbGROYW1lfSgke3N0cmluZ2lmeVZhcmlhYmxlcyhmaWVsZEFyZ3MpfSlgXG4gICAgKTtcbiAgICBpbmZvLnBhcnRpYWwgPSAhaXNJdEluQ2FjaGU7XG4gICAgbGV0IGhhc01vcmUgPSB0cnVlO1xuICAgIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG4gICAgZmllbGRJbmZvcy5mb3JFYWNoKChmaSkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlc29sdmUoZW50aXR5S2V5LCBmaS5maWVsZEtleSkgYXMgc3RyaW5nW107XG4gICAgICBjb25zdCBfaGFzTW9yZSA9IGNhY2hlLnJlc29sdmUoZW50aXR5S2V5LCBcImhhc01vcmVcIik7XG4gICAgICBpZiAoIV9oYXNNb3JlKSB7XG4gICAgICAgIGhhc01vcmUgPSBfaGFzTW9yZSBhcyBib29sZWFuO1xuICAgICAgfVxuICAgICAgcmVzdWx0cy5wdXNoKC4uLmRhdGEpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgX190eXBlbmFtZTogXCJQYWdpbmF0ZWRQcm9kdWN0c1wiLFxuICAgICAgaGFzTW9yZSxcbiAgICAgIHByb2R1Y3RzOiByZXN1bHRzLFxuICAgIH07XG5cbiAgICAvLyAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gICAgLy8gICBsZXQgcmVzdWx0OiBOdWxsQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIC8vICAgbGV0IHByZXZPZmZzZXQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gICAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgIC8vICAgICBjb25zdCB7IGZpZWxkS2V5LCBhcmd1bWVudHM6IGFyZ3MgfSA9IGZpZWxkSW5mb3NbaV07XG4gICAgLy8gICAgIGlmIChhcmdzID09PSBudWxsIHx8ICFjb21wYXJlQXJncyhmaWVsZEFyZ3MsIGFyZ3MpKSB7XG4gICAgLy8gICAgICAgY29udGludWU7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBjb25zdCBsaW5rcyA9IGNhY2hlLnJlc29sdmUoZW50aXR5S2V5LCBmaWVsZEtleSkgYXMgc3RyaW5nW107XG4gICAgLy8gICAgIGNvbnN0IGN1cnJlbnRPZmZzZXQgPSBhcmdzW2N1cnNvckFyZ3VtZW50XTtcblxuICAgIC8vICAgICBpZiAoXG4gICAgLy8gICAgICAgbGlua3MgPT09IG51bGwgfHxcbiAgICAvLyAgICAgICBsaW5rcy5sZW5ndGggPT09IDAgfHxcbiAgICAvLyAgICAgICB0eXBlb2YgY3VycmVudE9mZnNldCAhPT0gXCJudW1iZXJcIlxuICAgIC8vICAgICApIHtcbiAgICAvLyAgICAgICBjb250aW51ZTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGNvbnN0IHRlbXBSZXN1bHQ6IE51bGxBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5rcy5sZW5ndGg7IGorKykge1xuICAgIC8vICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tqXTtcbiAgICAvLyAgICAgICBpZiAodmlzaXRlZC5oYXMobGluaykpIGNvbnRpbnVlO1xuICAgIC8vICAgICAgIHRlbXBSZXN1bHQucHVzaChsaW5rKTtcbiAgICAvLyAgICAgICB2aXNpdGVkLmFkZChsaW5rKTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGlmIChcbiAgICAvLyAgICAgICAoIXByZXZPZmZzZXQgfHwgY3VycmVudE9mZnNldCA+IHByZXZPZmZzZXQpID09PVxuICAgIC8vICAgICAgIChtZXJnZU1vZGUgPT09IFwiYWZ0ZXJcIilcbiAgICAvLyAgICAgKSB7XG4gICAgLy8gICAgICAgcmVzdWx0ID0gWy4uLnJlc3VsdCwgLi4udGVtcFJlc3VsdF07XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgcmVzdWx0ID0gWy4uLnRlbXBSZXN1bHQsIC4uLnJlc3VsdF07XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBwcmV2T2Zmc2V0ID0gY3VycmVudE9mZnNldDtcbiAgICAvLyAgIH1cblxuICAgIC8vICAgY29uc3QgaGFzQ3VycmVudFBhZ2UgPSBjYWNoZS5yZXNvbHZlKGVudGl0eUtleSwgZmllbGROYW1lLCBmaWVsZEFyZ3MpO1xuICAgIC8vICAgaWYgKGhhc0N1cnJlbnRQYWdlKSB7XG4gICAgLy8gICAgIHJldHVybiByZXN1bHQ7XG4gICAgLy8gICB9IGVsc2UgaWYgKCEoaW5mbyBhcyBhbnkpLnN0b3JlLnNjaGVtYSkge1xuICAgIC8vICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgaW5mby5wYXJ0aWFsID0gdHJ1ZTtcbiAgICAvLyAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAvLyAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVcnFsQ2xpZW50ID0gKHNzckV4Y2hhbmdlOiBhbnkpID0+ICh7XG4gIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiLFxuICBmZXRjaE9wdGlvbnM6IHtcbiAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgYXMgY29uc3QsXG4gIH0sXG4gIGV4Y2hhbmdlczogW1xuICAgIGRlZHVwRXhjaGFuZ2UsXG4gICAgY2FjaGVFeGNoYW5nZSh7XG4gICAgICByZXNvbHZlcnM6IHtcbiAgICAgICAgUXVlcnk6IHtcbiAgICAgICAgICBwcm9kdWN0czogY3Vyc29yUGFnaW5hdGlvbigpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHVwZGF0ZXM6IHtcbiAgICAgICAgTXV0YXRpb246IHtcbiAgICAgICAgICBsb2dvdXQ6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9nb3V0TXV0YXRpb24sIE1lUXVlcnk+KFxuICAgICAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxuICAgICAgICAgICAgICBfcmVzdWx0LFxuICAgICAgICAgICAgICAoKSA9PiAoeyBtZTogbnVsbCB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxvZ2luOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PExvZ2luTXV0YXRpb24sIE1lUXVlcnk+KFxuICAgICAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxuICAgICAgICAgICAgICBfcmVzdWx0LFxuICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubG9naW4uZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQubG9naW4udXNlcixcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICByZWdpc3RlcjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxSZWdpc3Rlck11dGF0aW9uLCBNZVF1ZXJ5PihcbiAgICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcbiAgICAgICAgICAgICAgX3Jlc3VsdCxcbiAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlZ2lzdGVyLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LnJlZ2lzdGVyLnVzZXIsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBlcnJvckV4Y2hhbmdlLFxuICAgIHNzckV4Y2hhbmdlLFxuICAgIGZldGNoRXhjaGFuZ2UsXG4gIF0sXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/createUrqlClient.ts\n");

/***/ })

})