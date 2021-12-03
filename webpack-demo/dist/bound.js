/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 204:
/***/ ((module) => {

module.exports = [["to","from","heading","body",""],["MM","JJ","Reminder","Call me on Tuseday",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]]

/***/ }),

/***/ 898:
/***/ ((module) => {

module.exports = {"note":{"to":["MM"],"from":["JJ"],"heading":["Reminder"],"body":["Call me on Tuseday"]}}

/***/ }),

/***/ 231:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjA3OTU0ODMwMDE4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExNDciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTY0Mi4xNzQgNTA0LjU5NGM3Ljk5IDcuMjQxIDcuODk3IDE3LjU4LTAuMzM0IDI0Ljc4MkwzMzIuNjIgNzk5Ljk0NWMtOC44NjcgNy43NTktOS43NjYgMjEuMjM2LTIuMDA3IDMwLjEwMyA3Ljc1OCA4Ljg2NyAyMS4yMzYgOS43NjYgMzAuMTAzIDIuMDA3bDMwOS4yMjEtMjcwLjU2OWMyNy40MjktMjQgMjcuNzkyLTY0LjEyNyAwLjg5LTg4LjUwN0wzNjAuOTkyIDE5Mi4xOTJjLTguNzMtNy45MTItMjIuMjIxLTcuMjQ4LTMwLjEzMyAxLjQ4Mi03LjkxMiA4LjczLTcuMjQ4IDIyLjIyMiAxLjQ4MiAzMC4xMzRsMzA5LjgzMyAyODAuNzg2eiIgcC1pZD0iMTE0OCIgZmlsbD0iI0ZGNjUxMyI+PC9wYXRoPjwvc3ZnPg==";

/***/ }),

/***/ 253:
/***/ ((module) => {

"use strict";
module.exports = "hello webpack";

/***/ }),

/***/ 544:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/hello-world.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getString() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('hello world!!');
    }, 1000);
  });
}

function helloWorld() {
  return _helloWorld.apply(this, arguments);
}

function _helloWorld() {
  _helloWorld = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var str;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getString();

          case 2:
            str = _context.sent;
            console.log(str);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _helloWorld.apply(this, arguments);
}

/* harmony default export */ const hello_world = (helloWorld);
// EXTERNAL MODULE: ./src/assets/image.png
var assets_image = __webpack_require__(544);
// EXTERNAL MODULE: ./src/assets/icon.svg
var icon = __webpack_require__(231);
// EXTERNAL MODULE: ./src/assets/demo.txt
var demo = __webpack_require__(253);
// EXTERNAL MODULE: ./src/assets/data.csv
var data = __webpack_require__(204);
var data_default = /*#__PURE__*/__webpack_require__.n(data);
// EXTERNAL MODULE: ./src/assets/data.xml
var assets_data = __webpack_require__(898);
var assets_data_default = /*#__PURE__*/__webpack_require__.n(assets_data);
;// CONCATENATED MODULE: ./src/index.js







hello_world();
var img = document.createElement('img');
img.src = assets_image;
document.body.appendChild(img);
var img2 = document.createElement('img');
img2.src = icon;
document.body.appendChild(img2);
var txt = document.createElement('div');
txt.classList.add('block-bg');
txt.innerHTML = demo;
document.body.appendChild(txt);
var src_icon = document.createElement('span');
src_icon.innerText = 'TencentSans-W7';
src_icon.classList.add('icon');
document.body.appendChild(src_icon);
console.log((data_default()));
console.log((assets_data_default()));
})();

/******/ })()
;
//# sourceMappingURL=bound.js.map