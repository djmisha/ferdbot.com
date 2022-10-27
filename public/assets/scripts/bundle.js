/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (() => {

eval("/**\r\n * Remove IG Plugin Singnature button\r\n */\nconst removeIG = () => {\n  const button = document.querySelector('a.eapps-link');\n  button.remove();\n};\n\nsetTimeout(removeIG, 3000);\n/**\r\n * Pipedream Google Drive\r\n */\n\nconst getImagesGoogleDrive = () => {\n  const headers = new Headers();\n  headers.append('Content-Type', 'application/json');\n  const options = {\n    method: 'GET',\n    headers,\n    mode: 'cors'\n  };\n\n  const getData = async () => {\n    const url = 'https://eofjgtq820qs9wf.m.pipedream.net';\n    const request = await fetch(url, options);\n    const data = await request.json();\n    return data.$return_value;\n  };\n\n  getData().then(data => createGallery(data));\n};\n\nsetTimeout(getImagesGoogleDrive, 1000);\n\nconst createGallery = data => {\n  // create a counter for how many images we want to show to start\n  let counter = 12;\n  const button = document.querySelector('.gallery-button'); // increment counter on button click\n\n  button.addEventListener('click', () => {\n    counter = counter + 12;\n    let oldCounter = counter;\n    let newCounter = counter + 12; // if counter is larger then data, hide button and set counter to max length\n\n    if (newCounter > data.length) {\n      newCounter = data.length;\n      button.style.display = 'none';\n    } // once counter is incremembed, render more images to the page\n\n\n    renderImages(data, oldCounter, newCounter);\n  });\n  renderImages(data, 0, counter);\n};\n\nconst renderImages = (data, startingCount, endingCount) => {\n  const gallery = document.querySelector('.gallery');\n\n  for (let i = startingCount; i < endingCount; i++) {\n    const {\n      id\n    } = data[i];\n    buildImageMarkup(gallery, id);\n  }\n};\n\nconst buildImageMarkup = (gallery, id) => {\n  // Create HTML Markup for Thumbnails\n  const element = document.createElement('figure');\n  const image = document.createElement('img');\n  const link = document.createElement('a');\n  const fullSizeSrc = `https://drive.google.com/uc?export=view&id=${id}`;\n  const thumbnailSrc = `https://drive.google.com/thumbnail?sz=w200&id=${id}`;\n  link.setAttribute('href', fullSizeSrc);\n  link.setAttribute('data-fancybox', 'gallery');\n  image.setAttribute('src', thumbnailSrc); // Attach Thumbnails to Page\n\n  link.appendChild(image);\n  element.appendChild(link);\n  gallery.appendChild(element);\n};\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/styles/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./src/scripts/main.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/styles/main.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;