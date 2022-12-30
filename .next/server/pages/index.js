/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"index_main__3wZvj\",\n\t\"icon\": \"index_icon__CgRrC\",\n\t\"result\": \"index_result__66e57\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzP2Q4NTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcImluZGV4X21haW5fXzN3WnZqXCIsXG5cdFwiaWNvblwiOiBcImluZGV4X2ljb25fX0NnUnJDXCIsXG5cdFwicmVzdWx0XCI6IFwiaW5kZXhfcmVzdWx0X182NmU1N1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    const { 0: playlistInput , 1: setPlaylistInput  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: result , 1: setResult  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    async function onSubmit(event) {\n        event.preventDefault();\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                playlist: playlistInput\n            })\n        });\n        const data = await response.json();\n        setResult(data.result);\n        setPlaylistInput(\"\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"OpenAI Quickstart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/scottonprice/spotgpt/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/dog.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/scottonprice/spotgpt/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/scottonprice/spotgpt/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/dog.png\",\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon)\n                    }, void 0, false, {\n                        fileName: \"/Users/scottonprice/spotgpt/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Create a Spotify Playlist\"\n                    }, void 0, false, {\n                        fileName: \"/Users/scottonprice/spotgpt/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"playlist\",\n                                placeholder: \"Enter a playlist\",\n                                value: playlistInput,\n                                onChange: (e)=>setPlaylistInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/scottonprice/spotgpt/pages/index.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate playlist\"\n                            }, void 0, false, {\n                                fileName: \"/Users/scottonprice/spotgpt/pages/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/scottonprice/spotgpt/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().result),\n                        children: result\n                    }, void 0, false, {\n                        fileName: \"/Users/scottonprice/spotgpt/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/scottonprice/spotgpt/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/scottonprice/spotgpt/pages/index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNJO0FBQ087QUFFekIsU0FBU0csSUFBSSxHQUFHO0lBQzdCLE1BQU0sS0FBQ0MsYUFBYSxNQUFFQyxnQkFBZ0IsTUFBSUosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEQsTUFBTSxLQUFDSyxNQUFNLE1BQUVDLFNBQVMsTUFBSU4sK0NBQVEsRUFBRTtJQUV0QyxlQUFlTyxRQUFRLENBQUNDLEtBQUssRUFBRTtRQUM3QkEsS0FBSyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGVBQWUsRUFBRTtZQUM1Q0MsTUFBTSxFQUFFLE1BQU07WUFDZEMsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFBRUMsUUFBUSxFQUFFZCxhQUFhO2FBQUUsQ0FBQztTQUNsRCxDQUFDO1FBQ0YsTUFBTWUsSUFBSSxHQUFHLE1BQU1SLFFBQVEsQ0FBQ1MsSUFBSSxFQUFFO1FBRWxDYixTQUFTLENBQUNZLElBQUksQ0FBQ2IsTUFBTSxDQUFDLENBQUM7UUFDdkJELGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxxQkFDRSw4REFBQ2dCLEtBQUc7OzBCQUNGLDhEQUFDckIsa0RBQUk7O2tDQUNILDhEQUFDc0IsT0FBSztrQ0FBQyxtQkFBaUI7Ozs7OzRCQUFRO2tDQUNoQyw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxVQUFVOzs7Ozs0QkFBRzs7Ozs7O29CQUM5QjswQkFFUCw4REFBQ0MsTUFBSTtnQkFBQ0MsU0FBUyxFQUFFekIsK0RBQVc7O2tDQUMxQiw4REFBQzBCLEtBQUc7d0JBQUNDLEdBQUcsRUFBQyxVQUFVO3dCQUFDRixTQUFTLEVBQUV6QiwrREFBVzs7Ozs7NEJBQUk7a0NBQzlDLDhEQUFDNkIsSUFBRTtrQ0FBQywyQkFBeUI7Ozs7OzRCQUFLO2tDQUNsQyw4REFBQ0MsTUFBSTt3QkFBQ3hCLFFBQVEsRUFBRUEsUUFBUTs7MENBQ3RCLDhEQUFDeUIsT0FBSztnQ0FDSkMsSUFBSSxFQUFDLE1BQU07Z0NBQ1hDLElBQUksRUFBQyxVQUFVO2dDQUNmQyxXQUFXLEVBQUMsa0JBQWtCO2dDQUM5QkMsS0FBSyxFQUFFakMsYUFBYTtnQ0FDcEJrQyxRQUFRLEVBQUUsQ0FBQ0MsQ0FBQyxHQUFLbEMsZ0JBQWdCLENBQUNrQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDOzs7OztvQ0FDakQ7MENBQ0YsOERBQUNKLE9BQUs7Z0NBQUNDLElBQUksRUFBQyxRQUFRO2dDQUFDRyxLQUFLLEVBQUMsbUJBQW1COzs7OztvQ0FBRzs7Ozs7OzRCQUM1QztrQ0FDUCw4REFBQ2hCLEtBQUc7d0JBQUNNLFNBQVMsRUFBRXpCLGlFQUFhO2tDQUFHSSxNQUFNOzs7Ozs0QkFBTzs7Ozs7O29CQUN4Qzs7Ozs7O1lBQ0gsQ0FDTjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwbGF5bGlzdElucHV0LCBzZXRQbGF5bGlzdElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2VuZXJhdGVcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwbGF5bGlzdDogcGxheWxpc3RJbnB1dCB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIHNldFJlc3VsdChkYXRhLnJlc3VsdCk7XG4gICAgc2V0UGxheWxpc3RJbnB1dChcIlwiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T3BlbkFJIFF1aWNrc3RhcnQ8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9kb2cucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2RvZy5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgICA8aDM+Q3JlYXRlIGEgU3BvdGlmeSBQbGF5bGlzdDwvaDM+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwicGxheWxpc3RcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIHBsYXlsaXN0XCJcbiAgICAgICAgICAgIHZhbHVlPXtwbGF5bGlzdElucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQbGF5bGlzdElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSBwbGF5bGlzdFwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PntyZXN1bHR9PC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsInBsYXlsaXN0SW5wdXQiLCJzZXRQbGF5bGlzdElucHV0IiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBsYXlsaXN0IiwiZGF0YSIsImpzb24iLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImljb24iLCJoMyIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();