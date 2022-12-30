"use strict";
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
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const { Configuration , OpenAIApi  } = __webpack_require__(/*! openai */ \"openai\");\n    const configuration = new Configuration({\n        apiKey: process.env.OPENAI_API_KEY\n    });\n    const openai = new OpenAIApi(configuration);\n    const completion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: req.body.playlist + \". separate the song title from the artist name using a comma\",\n        max_tokens: 500\n    });\n    // console.log(completion.data.choices[0].text);\n    const trimmings = completion.data.choices[0].text.trim(/^[d.]+\\./).split(/[\\n,]+/);\n    //trimmings = completion.data.choices[0].text.trim(/^[d.]+\\./);\n    //trimmings = trimmings.replace('\"','');\n    res.status(200).json({\n        result: trimmings\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDLENBQUMseUVBQXlFO0FBQzFHQSwwQ0FBYSxFQUFFO0FBQ2YsNkJBQWUsMENBQWdCRSxHQUFHLEVBQUNDLEdBQUcsRUFBRTtJQUV4QyxNQUFNLEVBQUVDLGFBQWEsR0FBRUMsU0FBUyxHQUFFLEdBQUdDLG1CQUFPLENBQUMsc0JBQVEsQ0FBQztJQUN0RCxNQUFNQyxhQUFhLEdBQUcsSUFBSUgsYUFBYSxDQUFDO1FBQ3RDSSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjO0tBQ25DLENBQUM7SUFDRixNQUFNQyxNQUFNLEdBQUcsSUFBSVAsU0FBUyxDQUFDRSxhQUFhLENBQUM7SUFDM0MsTUFBTU0sVUFBVSxHQUFJLE1BQU1ELE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUM7UUFDaERDLEtBQUssRUFBRSxrQkFBa0I7UUFDekJDLE1BQU0sRUFBRWQsR0FBRyxDQUFDZSxJQUFJLENBQUNDLFFBQVEsR0FBRyw4REFBOEQ7UUFDMUZDLFVBQVUsRUFBRSxHQUFHO0tBQ2hCLENBQUM7SUFDRixnREFBZ0Q7SUFDaEQsTUFBTUMsU0FBUyxHQUFHUCxVQUFVLENBQUNRLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLElBQUksWUFBWSxDQUFDQyxLQUFLLFVBQVU7SUFDbEYsK0RBQStEO0lBQy9ELHdDQUF3QztJQUN4Q3RCLEdBQUcsQ0FBQ3VCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLE1BQU0sRUFBRVIsU0FBUztLQUFFLENBQUMsQ0FBQztBQUU1QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS5qcz82MjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW90ZG90bGEvZG90ZW52I2hvdy1kby1pLXVzZS1kb3RlbnYtd2l0aC1pbXBvcnRcbmRvdGVudi5jb25maWcoKVxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSxyZXMpIHtcblxuY29uc3QgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSA9IHJlcXVpcmUoXCJvcGVuYWlcIik7XG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuY29uc3QgY29tcGxldGlvbiA9ICBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIixcbiAgcHJvbXB0OiByZXEuYm9keS5wbGF5bGlzdCArIFwiLiBzZXBhcmF0ZSB0aGUgc29uZyB0aXRsZSBmcm9tIHRoZSBhcnRpc3QgbmFtZSB1c2luZyBhIGNvbW1hXCIsXG4gIG1heF90b2tlbnM6IDUwMFxufSk7XG4vLyBjb25zb2xlLmxvZyhjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS50ZXh0KTtcbmNvbnN0IHRyaW1taW5ncyA9IGNvbXBsZXRpb24uZGF0YS5jaG9pY2VzWzBdLnRleHQudHJpbSgvXltkLl0rXFwuLykuc3BsaXQoL1tcXG4sXSsvKTtcbi8vdHJpbW1pbmdzID0gY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dC50cmltKC9eW2QuXStcXC4vKTtcbi8vdHJpbW1pbmdzID0gdHJpbW1pbmdzLnJlcGxhY2UoJ1wiJywnJyk7XG5yZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3VsdDogdHJpbW1pbmdzIH0pO1xuXG59Il0sIm5hbWVzIjpbImRvdGVudiIsImNvbmZpZyIsInJlcSIsInJlcyIsIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJyZXF1aXJlIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsImNvbXBsZXRpb24iLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJwcm9tcHQiLCJib2R5IiwicGxheWxpc3QiLCJtYXhfdG9rZW5zIiwidHJpbW1pbmdzIiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0IiwidHJpbSIsInNwbGl0Iiwic3RhdHVzIiwianNvbiIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();