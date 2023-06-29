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
exports.id = "pages/api/berita/[id]";
exports.ids = ["pages/api/berita/[id]"];
exports.modules = {

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "(api)/./pages/api/berita/[id].js":
/*!**********************************!*\
  !*** ./pages/api/berita/[id].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { id  } = req.query;\n    try {\n        if (req.method === \"PUT\") {\n            //req body yang ada datanya\n            await _utils_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].collection(\"entries\").doc(id).update({\n                ...req.body,\n                update: new Date().toISOString()\n            });\n        } else if (req.method === \"GET\") {\n            const doc = await _utils_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].collection(\"entries\").doc(id).get();\n            if (!doc.exists) {\n                res.status(404).end();\n            } else {\n                res.status(200).json(doc.data());\n            }\n        } else if (req.method === \"DELETE\") {\n            await _utils_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].collection(\"entries\").doc(id).delete();\n        }\n        res.status(200).end();\n    } catch (e) {\n        res.status(400).end();\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmVyaXRhL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUM7QUFDbkMsaUVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUNqQyxNQUFNLEVBQUVDLEdBQUUsRUFBRSxHQUFHRixJQUFJRyxLQUFLO0lBQ3hCLElBQUk7UUFDRixJQUFJSCxJQUFJSSxNQUFNLEtBQUssT0FBTztZQUN4QiwyQkFBMkI7WUFDM0IsTUFBTUwsNERBQ08sQ0FBQyxXQUNYTyxHQUFHLENBQUNKLElBQ0pLLE1BQU0sQ0FBQztnQkFDTixHQUFHUCxJQUFJUSxJQUFJO2dCQUNYRCxRQUFRLElBQUlFLE9BQU9DLFdBQVc7WUFDaEM7UUFDSixPQUFPLElBQUlWLElBQUlJLE1BQU0sS0FBSyxPQUFPO1lBQy9CLE1BQU1FLE1BQU0sTUFBTVAsNERBQWEsQ0FBQyxXQUFXTyxHQUFHLENBQUNKLElBQUlTLEdBQUc7WUFDdEQsSUFBSSxDQUFDTCxJQUFJTSxNQUFNLEVBQUU7Z0JBQ2ZYLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO1lBQ3JCLE9BQU87Z0JBQ0xiLElBQUlZLE1BQU0sQ0FBQyxLQUFLRSxJQUFJLENBQUNULElBQUlVLElBQUk7WUFDL0IsQ0FBQztRQUNILE9BQU8sSUFBSWhCLElBQUlJLE1BQU0sS0FBSyxVQUFVO1lBQ2xDLE1BQU1MLDREQUFhLENBQUMsV0FBV08sR0FBRyxDQUFDSixJQUFJZSxNQUFNO1FBQy9DLENBQUM7UUFDRGhCLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQ3JCLEVBQUUsT0FBT0ksR0FBRztRQUNWakIsSUFBSVksTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDckI7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2Jlcml0YS9baWRdLmpzP2UzMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gXCIuLi8uLi8uLi91dGlscy9kYlwiO1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XHJcbiAgdHJ5IHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBVVFwiKSB7XHJcbiAgICAgIC8vcmVxIGJvZHkgeWFuZyBhZGEgZGF0YW55YVxyXG4gICAgICBhd2FpdCBkYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiZW50cmllc1wiKVxyXG4gICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAuLi5yZXEuYm9keSxcclxuICAgICAgICAgIHVwZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICAgIGNvbnN0IGRvYyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJlbnRyaWVzXCIpLmRvYyhpZCkuZ2V0KCk7XHJcbiAgICAgIGlmICghZG9jLmV4aXN0cykge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5lbmQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkb2MuZGF0YSgpKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJlbnRyaWVzXCIpLmRvYyhpZCkuZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuZW5kKCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmVzLnN0YXR1cyg0MDApLmVuZCgpO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImRiIiwicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsIm1ldGhvZCIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1cGRhdGUiLCJib2R5IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiZ2V0IiwiZXhpc3RzIiwic3RhdHVzIiwiZW5kIiwianNvbiIsImRhdGEiLCJkZWxldGUiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/berita/[id].js\n");

/***/ }),

/***/ "(api)/./utils/db/index.js":
/*!***************************!*\
  !*** ./utils/db/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _serviceAccountKey_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serviceAccountKey.json */ \"(api)/./utils/db/serviceAccountKey.json\");\n\n\nif (!(firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n    try {\n        firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().initializeApp({\n            credential: firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().credential.cert(_serviceAccountKey_json__WEBPACK_IMPORTED_MODULE_1__)\n        });\n    } catch (error) {\n        console.Log(\"firebase-admin initialization error\", error.stack);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().firestore());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1DO0FBQ21CO0FBRXRELElBQUksQ0FBQ0EsbUVBQWlCLEVBQUU7SUFDdEIsSUFBSTtRQUNGQSxtRUFBbUIsQ0FBQztZQUNsQkssWUFBWUwscUVBQXFCLENBQUNDLG9EQUFjQTtRQUNsRDtJQUNGLEVBQUUsT0FBT00sT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUMsdUNBQXVDRixNQUFNRyxLQUFLO0lBQ2hFO0FBQ0YsQ0FBQztBQUNELGlFQUFlViwrREFBZSxFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYi9pbmRleC5qcz9kZjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZG1pbiBmcm9tIFwiZmlyZWJhc2UtYWRtaW5cIjtcclxuaW1wb3J0IFNlcnZpY2VBY2NvdW50IGZyb20gXCIuL3NlcnZpY2VBY2NvdW50S2V5Lmpzb25cIjtcclxuXHJcbmlmICghYWRtaW4uYXBwcy5sZW5ndGgpIHtcclxuICB0cnkge1xyXG4gICAgYWRtaW4uaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydChTZXJ2aWNlQWNjb3VudCksXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5Mb2coXCJmaXJlYmFzZS1hZG1pbiBpbml0aWFsaXphdGlvbiBlcnJvclwiLCBlcnJvci5zdGFjayk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGFkbWluLmZpcmVzdG9yZSgpO1xyXG4iXSwibmFtZXMiOlsiYWRtaW4iLCJTZXJ2aWNlQWNjb3VudCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiY3JlZGVudGlhbCIsImNlcnQiLCJlcnJvciIsImNvbnNvbGUiLCJMb2ciLCJzdGFjayIsImZpcmVzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/db/index.js\n");

/***/ }),

/***/ "(api)/./utils/db/serviceAccountKey.json":
/*!*****************************************!*\
  !*** ./utils/db/serviceAccountKey.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"kelas3e-b55c1","private_key_id":"7cdc3ad1680a9a8df0aeceeba3a01bae39c224f2","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCo8rL+UOZYqVxs\\nu73Q/+ml8sSfa4Fq2hST15PpJIrKh152jhNMYzDJP7jfLEF/1aOUS5BKFhz0ZPiZ\\nyPJs6xamteBBgDNpPzTOFzU5r6oRA5LbWIIOTXni/nnFSEDCpazGcGsVKfzjt1yB\\npxIcseS+Ci19mXuJe9db660fbpwglbHx7qosQHNhodJXpss5YaQbjJrct2QCzk13\\nUVjSoan4Gg/VFbNqP6BW+rcAPNNn9G7SPSWJqnroAgY6FnZ0fr6GpYCXczOZZILs\\n92IRiqyEFt7rmtnwztpkkyvdS7SG2CZD17DKQf437fYFwBKj9thAiR5abjddGs5j\\ncK65+hp/AgMBAAECggEAAVXZwFTXXUAJcPqS54H+UMd4cmIhJb0PiJOdoaweRLeJ\\nMZqx4FqwWgbc6TaqVd5UaqmmPE+sbuoVZPHHqMC67xpk6V+gCGbtfeuFCi2vRG8o\\ny/8JGB/YpMiqIbsOd/tjQDZHQmWQkCQ04Pl3FS76xd3CuklqRo3qB9n3BlaTeVZy\\nRfqNNyEcLToJsr8tnpeOW2y069VYH00MStzu4atBrVuwCZQSzs+UVPWqOJ7BSlk2\\ndfd+COxrDbMNFoIQwsKnGzo65gkqkZVguCqN7xw7e1oxnmZGLwvorINGFC55llrO\\n68scqnLm7QNYeOg/BdEFfeyhp3AkyKSjIzc0gUGm0QKBgQDRNnuxUS9ULARvoT25\\n7DZw3uZDGH2htGmXolcicJI7z494QYaxZbO0RutQqchAZxYPt8dbWtiLsKYdSFYs\\nVOftNG2CcZVeBFlMvsLrAVTpvUDkMttF1ssTtgOrrMbra+xq76hiJ+r/OAXF8bSo\\nNxMaaPewnKrVhJ2QenFkAR+5rQKBgQDOuwqZIw988U7X8kVNtVwm5Cenj7VVQvFE\\nNTyQCAvMvhszHt7g9oRwPoRwFLzF2w9kc3DYzbs2Uvuk9h+J9l2OKwKOU006B7oD\\nAhXGTWjdq1IKPjzRuB2c9cChE5S251PfmliX/nnmVMbWAeXj+DwNb7kseKyJ+161\\nlM/8aLbCWwKBgEQuS1VYLeJyjeeLVsB2uK9EFSqcmqTOVPMz1s3EfgO7+ven8ytx\\nB4Wi7yFUk4xZjBkHPZMKIjQ0F47Hej3sVcE6Ks4uEg2XwTp/mKpZvsCGCtXTtR4n\\nh/segEe8gP9MJroa7HdApxcRvN/ri4KeoD0lJEOMayg2ldr17Go464vpAoGBAISM\\nYIs3c6LEhazn5Y+hjOhSuSoydi2oslDtYVtoDUjFS2NHk9fht6DQNNI4OaESh5f8\\nfIpFvpdiNX7bX/VxRSL2aLkgqA9hDN8I4zU2RNp8EioHJa/BwRr2Zv/gMiXjxF9F\\n8y/hNf98s9Bbfy7f5oEm9S+SX+5Igb0jIQfRi/ypAoGBAJRM0Izr3VAtjNZwqx/4\\ndptb0hXQYwJiiNHp45kySD5BnsePlPupaiiAVCtaOeQwBiFpSFBZ6mbOeIm4TIsC\\n4Hr2NaT1+ou/W/Yvs8HAlxZ2fYjEaQEU1RMFd3D/KfX4fH/333z+cKk27By4UJDk\\nfCXsJh9/uJbSJ77WhSLCJDIf\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-owom9@kelas3e-b55c1.iam.gserviceaccount.com","client_id":"110950161013472032951","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-owom9%40kelas3e-b55c1.iam.gserviceaccount.com"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/berita/[id].js"));
module.exports = __webpack_exports__;

})();