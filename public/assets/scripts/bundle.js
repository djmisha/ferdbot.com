/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/getImagesGoogleDrive.js":
/*!*********************************************!*\
  !*** ./src/scripts/getImagesGoogleDrive.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Pipedream Google Drive\r\n */\nconst getImagesGoogleDrive = () => {\n  const headers = new Headers();\n  headers.append('Content-Type', 'application/json');\n  const options = {\n    method: 'GET',\n    headers,\n    mode: 'cors'\n  };\n\n  const getData = async () => {\n    const url = 'https://eofjgtq820qs9wf.m.pipedream.net';\n    const request = await fetch(url, options);\n    const data = await request.json();\n    return data.$return_value;\n  };\n\n  getData().then(data => createGallery(data));\n};\n\nconst createGallery = data => {\n  const button = document.querySelector('.gallery-button');\n  let counter = 12; // increment counter on button click\n\n  button.addEventListener('click', () => {\n    let newCounter = data.length; // if counter is larger then data, hide button\n\n    if (newCounter === data.length) {\n      button.style.display = 'none';\n    } // once counter is incremembed, render more images to the page\n\n\n    renderImages(data, counter, newCounter);\n  });\n  renderImages(data, 0, counter);\n};\n\nconst renderImages = (data, startingCount, endingCount) => {\n  const gallery = document.querySelector('.gallery');\n\n  for (let i = startingCount; i < endingCount; i++) {\n    const {\n      id\n    } = data[i];\n    buildImageMarkup(gallery, id);\n  }\n};\n\nconst buildImageMarkup = (gallery, id) => {\n  // Create HTML Markup for Thumbnails\n  const element = document.createElement('figure');\n  const image = document.createElement('img');\n  const link = document.createElement('a');\n  const fullSizeSrc = `https://drive.google.com/uc?export=view&id=${id}`;\n  const thumbnailSrc = `https://drive.google.com/thumbnail?sz=w200&id=${id}`;\n  link.setAttribute('href', fullSizeSrc);\n  link.setAttribute('data-fancybox', 'gallery');\n  image.setAttribute('src', thumbnailSrc); // Attach Thumbnails to Page\n\n  link.appendChild(image);\n  element.appendChild(link);\n  gallery.appendChild(element);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getImagesGoogleDrive);\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/getImagesGoogleDrive.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _removeIG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIG */ \"./src/scripts/removeIG.js\");\n/* harmony import */ var _getImagesGoogleDrive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getImagesGoogleDrive */ \"./src/scripts/getImagesGoogleDrive.js\");\n\n\nsetTimeout(_removeIG__WEBPACK_IMPORTED_MODULE_0__[\"default\"], 3000);\n(0,_getImagesGoogleDrive__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/removeIG.js":
/*!*********************************!*\
  !*** ./src/scripts/removeIG.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Remove IG Plugin Singnature button\r\n */\nconst removeIG = () => {\n  const button = document.querySelector('a.eapps-link');\n  button.remove();\n  removeIfOverQuota();\n};\n\nconst removeIfOverQuota = () => {\n  const feed = document.querySelector('.insta-feed');\n  const errors = document.querySelectorAll('.insta-feed a');\n  const disabled = 'Widget is deactivated';\n\n  if (errors) {\n    for (let i = 0; i < errors.length; i++) {\n      const element = errors[i];\n\n      if (element.innerHTML.includes(disabled)) {\n        feed.remove();\n      }\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeIG);\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/removeIG.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/styles/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/scripts/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/main.scss");
/******/ 	
/******/ })()
;