/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 231:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjA3OTU0ODMwMDE4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExNDciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTY0Mi4xNzQgNTA0LjU5NGM3Ljk5IDcuMjQxIDcuODk3IDE3LjU4LTAuMzM0IDI0Ljc4MkwzMzIuNjIgNzk5Ljk0NWMtOC44NjcgNy43NTktOS43NjYgMjEuMjM2LTIuMDA3IDMwLjEwMyA3Ljc1OCA4Ljg2NyAyMS4yMzYgOS43NjYgMzAuMTAzIDIuMDA3bDMwOS4yMjEtMjcwLjU2OWMyNy40MjktMjQgMjcuNzkyLTY0LjEyNyAwLjg5LTg4LjUwN0wzNjAuOTkyIDE5Mi4xOTJjLTguNzMtNy45MTItMjIuMjIxLTcuMjQ4LTMwLjEzMyAxLjQ4Mi03LjkxMiA4LjczLTcuMjQ4IDIyLjIyMiAxLjQ4MiAzMC4xMzRsMzA5LjgzMyAyODAuNzg2eiIgcC1pZD0iMTE0OCIgZmlsbD0iI0ZGNjUxMyI+PC9wYXRoPjwvc3ZnPg==";

/***/ }),

/***/ 253:
/***/ ((module) => {

module.exports = "hello webpack";

/***/ }),

/***/ 544:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/44c02cb195c369bd6c03.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/hello-world.js
function helloWorld () {
  console.log('hello world!!')
}
/* harmony default export */ const hello_world = (helloWorld);

// EXTERNAL MODULE: ./src/assets/image.png
var assets_image = __webpack_require__(544);
// EXTERNAL MODULE: ./src/assets/icon.svg
var icon = __webpack_require__(231);
// EXTERNAL MODULE: ./src/assets/demo.txt
var demo = __webpack_require__(253);
;// CONCATENATED MODULE: ./src/index.js






const img = document.createElement('img');
img.src = assets_image;
document.body.appendChild(img);

const img2 = document.createElement('img');
img2.src = icon;
document.body.appendChild(img2);

const txt = document.createElement('div');
txt.innerHTML = demo;
document.body.appendChild(txt);

hello_world();

})();

/******/ })()
;
//# sourceMappingURL=bound.js.map