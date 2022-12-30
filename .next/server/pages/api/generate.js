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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst axios = __webpack_require__(/*! axios */ \"axios\");\nconst qs = __webpack_require__(/*! qs */ \"qs\");\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nconst getAuth = async ()=>{\n    try {\n        const client_id = process.env.SPOTIFY_API_ID; // Your client id\n        const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret\n        const auth_token = Buffer.from(`${client_id}:${client_secret}`, \"utf-8\").toString(\"base64\");\n        //make post request to SPOTIFY API for access token, sending relavent info\n        const token_url = \"https://accounts.spotify.com/api/token\";\n        const data = qs.stringify({\n            \"grant_type\": \"client_credentials\"\n        });\n        const response = await axios.post(token_url, data, {\n            headers: {\n                \"Authorization\": `Basic ${auth_token}`,\n                \"Content-Type\": \"application/x-www-form-urlencoded\"\n            }\n        });\n        console.log(\"spotify success\", response.data.access_token);\n        //return access token\n        return response.data.access_token;\n    //console.log(response.data.access_token);   \n    } catch (error) {\n        //on fail, log the error in console\n        console.log(error);\n    }\n};\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const completion = await openai.createCompletion({\n        model: \"text-davinci-002\",\n        max_tokens: 200,\n        prompt: req.body.playlist,\n        temperature: 0.6\n    });\n    console.log(completion);\n    getAuth();\n    res.status(200).json({\n        result: completion.data.choices.map((choice)=>choice.text)\n    });\n}\nfunction generatePrompt(animal) {\n    const capitalizedAnimal = animal[0].toUpperCase() + animal.slice(1).toLowerCase();\n    return `Suggest three names for an animal that is a superhero.\n\nAnimal: Cat\nNames: Captain Sharpclaw, Agent Fluffball, The Incredible Feline\nAnimal: Dog\nNames: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot\nAnimal: ${capitalizedAnimal}\nNames:`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO0FBQ1IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanM/NjI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5jb25zdCBxcyA9IHJlcXVpcmUoJ3FzJyk7XG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuY29uc3QgZ2V0QXV0aCA9IGFzeW5jICgpID0+IHtcbiAgdHJ5e1xuICAgIGNvbnN0IGNsaWVudF9pZCA9IHByb2Nlc3MuZW52LlNQT1RJRllfQVBJX0lEOyAvLyBZb3VyIGNsaWVudCBpZFxuICAgIGNvbnN0IGNsaWVudF9zZWNyZXQgPSBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9TRUNSRVQ7IC8vIFlvdXIgc2VjcmV0XG4gICAgY29uc3QgYXV0aF90b2tlbiA9IEJ1ZmZlci5mcm9tKGAke2NsaWVudF9pZH06JHtjbGllbnRfc2VjcmV0fWAsICd1dGYtOCcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAvL21ha2UgcG9zdCByZXF1ZXN0IHRvIFNQT1RJRlkgQVBJIGZvciBhY2Nlc3MgdG9rZW4sIHNlbmRpbmcgcmVsYXZlbnQgaW5mb1xuICAgIGNvbnN0IHRva2VuX3VybCA9ICdodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2FwaS90b2tlbic7XG4gICAgY29uc3QgZGF0YSA9IHFzLnN0cmluZ2lmeSh7J2dyYW50X3R5cGUnOidjbGllbnRfY3JlZGVudGlhbHMnfSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodG9rZW5fdXJsLCBkYXRhLCB7XG4gICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCYXNpYyAke2F1dGhfdG9rZW59YCxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIFxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coJ3Nwb3RpZnkgc3VjY2VzcycsIHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuKVxuICAgIC8vcmV0dXJuIGFjY2VzcyB0b2tlblxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbjtcbiAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuKTsgICBcbiAgfWNhdGNoKGVycm9yKXtcbiAgICAvL29uIGZhaWwsIGxvZyB0aGUgZXJyb3IgaW4gY29uc29sZVxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gICAgbW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwMlwiLFxuICAgIG1heF90b2tlbnM6IDIwMCxcbiAgICBwcm9tcHQ6IHJlcS5ib2R5LnBsYXlsaXN0LFxuICAgIHRlbXBlcmF0dXJlOiAwLjYsXG4gIH0pO1xuICBjb25zb2xlLmxvZyhjb21wbGV0aW9uKVxuICBnZXRBdXRoKClcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IGNvbXBsZXRpb24uZGF0YS5jaG9pY2VzLm1hcChjaG9pY2UgPT4gY2hvaWNlLnRleHQpIH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb21wdChhbmltYWwpIHtcbiAgY29uc3QgY2FwaXRhbGl6ZWRBbmltYWwgPVxuICAgIGFuaW1hbFswXS50b1VwcGVyQ2FzZSgpICsgYW5pbWFsLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBgU3VnZ2VzdCB0aHJlZSBuYW1lcyBmb3IgYW4gYW5pbWFsIHRoYXQgaXMgYSBzdXBlcmhlcm8uXG5cbkFuaW1hbDogQ2F0XG5OYW1lczogQ2FwdGFpbiBTaGFycGNsYXcsIEFnZW50IEZsdWZmYmFsbCwgVGhlIEluY3JlZGlibGUgRmVsaW5lXG5BbmltYWw6IERvZ1xuTmFtZXM6IFJ1ZmYgdGhlIFByb3RlY3RvciwgV29uZGVyIENhbmluZSwgU2lyIEJhcmtzLWEtTG90XG5BbmltYWw6ICR7Y2FwaXRhbGl6ZWRBbmltYWx9XG5OYW1lczpgO1xufVxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJheGlvcyIsInJlcXVpcmUiLCJxcyIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJnZXRBdXRoIiwiY2xpZW50X2lkIiwiU1BPVElGWV9BUElfSUQiLCJjbGllbnRfc2VjcmV0IiwiU1BPVElGWV9DTElFTlRfU0VDUkVUIiwiYXV0aF90b2tlbiIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsInRva2VuX3VybCIsImRhdGEiLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsImFjY2Vzc190b2tlbiIsImVycm9yIiwicmVxIiwicmVzIiwiY29tcGxldGlvbiIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsIm1heF90b2tlbnMiLCJwcm9tcHQiLCJib2R5IiwicGxheWxpc3QiLCJ0ZW1wZXJhdHVyZSIsInN0YXR1cyIsImpzb24iLCJyZXN1bHQiLCJjaG9pY2VzIiwibWFwIiwiY2hvaWNlIiwidGV4dCIsImdlbmVyYXRlUHJvbXB0IiwiYW5pbWFsIiwiY2FwaXRhbGl6ZWRBbmltYWwiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidG9Mb3dlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

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