module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst config = {\n  PORT: process.env.PORT || 9001,\n  PYTHON_BACKEND: process.env.PYTHON_BACKEND,\n  BASE_PATH: process.env.BASE_PATH,\n  CAMERA_INDEX: parseInt(process.env.CAMERA_INDEX, 10),\n  EXPOSURE: parseInt(process.env.EXPOSURE, 10)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./src/config/constants.js?");

/***/ }),

/***/ "./src/config/middleware.js":
/*!**********************************!*\
  !*** ./src/config/middleware.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app => {\n  app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\n  app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\n});\n\n//# sourceURL=webpack:///./src/config/middleware.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/middleware */ \"./src/config/middleware.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nconst httpServer = Object(http__WEBPACK_IMPORTED_MODULE_2__[\"createServer\"])(app);\nObject(_config_middleware__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(app);\napp.get('/image', /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (req, res) {\n    try {\n      // execute query on camera_backend\n      Object(child_process__WEBPACK_IMPORTED_MODULE_3__[\"execSync\"])(`v4l2-ctl -d /dev/video${_config_constants__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CAMERA_INDEX} -c exposure_absolute=${_config_constants__WEBPACK_IMPORTED_MODULE_6__[\"default\"].EXPOSURE}`);\n      Object(child_process__WEBPACK_IMPORTED_MODULE_3__[\"execSync\"])(`ffmpeg -y -f video4linux2 -video_size 2592x1944 -loglevel error -i /dev/video${_config_constants__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CAMERA_INDEX} -filter:v \"scale=2592:-1:flags=lanczos,unsharp=5:5:1.0:5:5:0.0\" -q:v 2 -vframes 1 -update 1 ${_config_constants__WEBPACK_IMPORTED_MODULE_6__[\"default\"].BASE_PATH}/images/upload.bmp`);\n      const filepath = `${_config_constants__WEBPACK_IMPORTED_MODULE_6__[\"default\"].BASE_PATH}/images/upload.bmp`;\n      const image = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(filepath, 'base64');\n      const base64Data = image.replace(/^data:image\\/png;base64,/, ''); // upload the image to python backend\n\n      const uploadRes = yield axios__WEBPACK_IMPORTED_MODULE_4___default()({\n        method: 'post',\n        url: `${_config_constants__WEBPACK_IMPORTED_MODULE_6__[\"default\"].PYTHON_BACKEND}/image`,\n        data: {\n          image: base64Data\n        },\n        maxContentLength: Infinity,\n        maxBodyLength: Infinity\n      });\n\n      if (uploadRes.data.success) {\n        res.status(200).json({\n          success: true,\n          status: 'Uploaded',\n          data: {\n            name: 'upload.bmp'\n          }\n        });\n      } else {\n        res.status(400).json({\n          success: false,\n          status: 'File upload unsuccessful'\n        });\n      }\n    } catch (err) {\n      console.log('image --- get --- error', err.message);\n      res.status(400).json({\n        success: false,\n        status: 'File upload error please retry'\n      });\n    }\n  });\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.get('/images', (req, res) => {\n  try {\n    const filepath = `${_config_constants__WEBPACK_IMPORTED_MODULE_6__[\"default\"].BASE_PATH}/images/${req.query.params}`;\n    return res.sendFile(filepath);\n  } catch (err) {\n    console.log('images --- get --- error', err);\n    return res.send('Error occured');\n  }\n});\n\nif (!module.parent) {\n  httpServer.listen(_config_constants__WEBPACK_IMPORTED_MODULE_6__[\"default\"].PORT, err => {\n    if (err) {\n      console.log('Cannot run!');\n    } else {\n      console.log(`API server listening on port: ${_config_constants__WEBPACK_IMPORTED_MODULE_6__[\"default\"].PORT}`);\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"child_process\");\n\n//# sourceURL=webpack:///external_%22child_process%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ })

/******/ });