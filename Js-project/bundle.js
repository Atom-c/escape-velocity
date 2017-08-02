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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

window.onload = function init() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  gameLoop();
};

window.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});
window.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});

var avatarX = 400,
    avatarY = 300,
    velX = 0,
    velY = 0,
    keys = [],
    maxSpeed = 10,
    firstBlockLeft = 0,
    firstBlockWidth = 100,
    secondBlockLeft = 300,
    secondBlockWidth = 200,
    avatarXleft = 25,
    avatarXright = 25,
    firstBlockBottom = 0,
    secondBlockBottom = 0,
    firstBlockHeight = 20,
    secondBlockHeight = 20;

function gameLoop() {
  whatKey();
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;

  avatarX += velX;
  avatarY += velY;

  if (avatarY < 0) {
    avatarY = 0;
    velY = 0;
  } else if (avatarY < 0) {
    avatarY = 0;
    velY = 0;
  } else if (avatarX + avatarXleft < secondBlockLeft && avatarY > secondBlockHeight) {
    velY -= 0.25;
  }

  var avatar = ctx.fillRect(avatarX, avatarY, avatarXleft, avatarXright);
  var firstBlock = ctx.fillRect(firstBlockLeft, firstBlockBottom, firstBlockWidth, firstBlockHeight);
  var secondBlock = ctx.fillRect(secondBlockLeft, secondBlockBottom, secondBlockWidth, secondBlockHeight);
  requestAnimationFrame(gameLoop);
}

function whatKey() {
  if (keys[37]) {
    avatarX -= 20;
  }
  if (keys[39]) {
    avatarX += 20;
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map