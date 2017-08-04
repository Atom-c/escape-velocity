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


var _obstacles = __webpack_require__(1);

var _obstacles2 = _interopRequireDefault(_obstacles);

var _avatar = __webpack_require__(2);

var _avatar2 = _interopRequireDefault(_avatar);

var _background = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

window.onload = function init() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var avObj = new _avatar2.default(450, 350, 20, 0, ctx);
  (0, _background.background)();
  gameLoop(avObj);
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
    avatarWidth = 25,
    avatarHeight = 25,
    arr = [],
    counter = 0;

function gameLoop(avObj) {
  // console.log(avObj);
  counter++;;
  // whatKey();
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;

  // avatarX += velX;
  avatarY += velY;
  // secondBlockY += 1

  // DEATH IMPLENTATION
  // if (avatarY > canvas.height) {
  //   var ohNo = true
  // }

  // if (ohNo) {
  //   alert("OH NO!");
  //   ohNo = false;
  // }
  //___________________

  // if (avatarY > 0)
  // { velY -= 0.05; }


  // ctx.fillStyle = "red"

  // avObj.draw();
  whatKey(avObj);
  // ctx.fillStyle = "white"
  ctx.shadowBlur = 15;
  ctx.shadowColor = "white";
  var avatar = ctx.fillRect(avatarX, avatarY, avatarWidth, avatarHeight);

  ctx.fillStyle = "black";

  // var secondBlock = ctx.fillRect(secondBlockLeft, secondBlockY, secondBlockWidth, secondBlockHeight);
  var bX = Math.floor(Math.random(10) * 100) * (counter % 50) % 800;

  if (counter % 30 === 0) {
    arr.push(new _obstacles2.default(bX, 0, 280, 20, 3, ctx));
    arr.push(new _obstacles2.default(bX * (counter % 33), 0, 330, 20, 3, ctx));
    arr.push(new _obstacles2.default(bX * (counter % 14), 0, 180, 20, 3, ctx));
    // arr.push(new Obstacle(100 + counter, 0, 80, 20, (1), ctx))
  }

  arr.forEach(function (obstacle) {

    obstacle.blockY = obstacle.blockY + obstacle.blockVel;
    // console.log(obstacle.blockX, obstacle.blockWidth);
    obstacle.draw();

    if (avatarY < 0) {
      avatarY = 0;
      velY = 0;
    } else if (obstacle.blockY - avatarY < 10 && obstacle.blockY - avatarY > -10 && avatarX > obstacle.blockX && avatarX + avatarWidth < obstacle.blockX + obstacle.blockWidth) {
      avatarY = obstacle.blockHeight + obstacle.blockY;
    }

    // else if (avatarY > obstacle.blockHeight
    //   || avatarX + avatarWidth < obstacle.blockX
    //   || avatarX > obstacle.blockX + obstacle.blockWidth)
    //     { velY -= 0.025; }

    // else if (
    //   (avatarX > obstacle.blockX + obstacle.blockWidth
    //   || avatarX < obstacle.blockX)
    //     && avatarY > obstacle.blockY + obstacle.blockHeight + 10)
    //     { avatarY += 3; }

    if (arr.length % 27 === 0) {
      arr.shift();
      arr.shift();
      arr.shift();
    }
    // console.log(arr);
  });

  //Le Score
  ctx.font = "30px courier";
  ctx.strokeStyle = "green";
  ctx.strokeText('climb score: ' + Math.floor(counter * 1.5), 10, canvas.height - 5);
  //________


  requestAnimationFrame(gameLoop);
}

function whatKey(avObj) {
  if (keys[37]) {
    avatarX -= 6;
    // avObj.avatarX -= 6;
    // console.log(avObj)
    // console.log(avObj.avatarX);
    // avObj.draw();
  }
  if (keys[39]) {
    avatarX += 6;
    // avObj.avatarX += 6;
    // avObj.draw();
  }
}

// firstBlockLeft = 0,
// firstBlockWidth = 100,
// secondBlockLeft = 300,
// secondBlockWidth = 200,
// firstBlockBottom = 0,
// secondBlockY = 0,
// firstBlockHeight = 20,
// secondBlockHeight = 20,
// secondBlockVel = 0.25,


// let gap;
// for (var i = 0; i < 2; i++) {
//   gap = 10// Math.floor(Math.random(10) * 100 / 10) * 2
//   new Obstacle((100 * i + i * gap), 0, 80, 20, (1 + counter), ctx)
//   // console.log(new Obstacle((100 * i + i * gap), 0, 80, 20, (1 + counter), ctx))
// }

// Math.random x 600
// need 2 to 5 bars across the screen
// 40 760
// 140 260 80 120 200
//
// or
//
// standardize gaps sizing of 40px
//
// lines take up 20h full width, spaced out at 60px y height to start
// so would generate a gap full width by 60px height to start
// then generate a line, on top of the line would generate 2-4 gaps of 40w by 20h
// if avatar is within a gaps starting width coordinate + its width (40), it can keep its velY -= 0.25
// otherwise it matches the downward y velocity += 0.25 of a line.


// THINGS NEEDED TO KNOW


// } else if (
//     (secondBlockY - avatarY < 10 && secondBlockY - avatarY > -10)
//   && (
//     (avatarX > secondBlockLeft && avatarX + avatarWidth < secondBlockLeft + secondBlockWidth)
//   )
// ) {
//   avatarY = secondBlockHeight+ secondBlockY;
//
// } else if (avatarY > secondBlockHeight
//   || avatarX + avatarWidth < secondBlockLeft
//   || avatarX > secondBlockLeft + secondBlockWidth) {
//     velY -= 0.25;
//
// } else if (
//   (avatarX > secondBlockLeft + secondBlockWidth
//   || avatarX < secondBlockLeft)
//     && avatarY < secondBlockHeight) {
//     // velY += 1;
// }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Obstacle = function () {
  function Obstacle(blockX, blockY, blockWidth, blockHeight, blockVel, context) {
    _classCallCheck(this, Obstacle);

    this.blockX = blockX;
    this.blockWidth = blockWidth;
    this.blockY = blockY;
    this.blockHeight = blockHeight;
    this.blockVel = blockVel;
    this.context = context;

    this.blockY += blockVel;
  }

  _createClass(Obstacle, [{
    key: "draw",
    value: function draw() {
      this.context.shadowBlur = 20;
      this.context.shadowColor = "cyan";
      this.context.fillRect(this.blockX, this.blockY, this.blockWidth, this.blockHeight);
    }
  }]);

  return Obstacle;
}();

exports.default = Obstacle;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Avatar = function () {
  function Avatar(avatarX, avatarY, avatarRadius, avatarVel, context) {
    _classCallCheck(this, Avatar);

    this.avatarX = 400; //Board.width / 2 later
    this.avatarY = 300;
    this.avatarRadius = 20;
    this.avatarVel = 0;
    this.context = context;
    this.draw = this.draw;
    // this.draw = this.draw;
  }

  _createClass(Avatar, [{
    key: "draw",
    value: function draw() {
      console.log("draw");
      this.context.clearRect(0, 0, canvas.width, canvas.height);
      this.context.beginPath();
      this.context.arc(this.avatarX, this.avatarY, this.avatarRadius, 0, Math.PI * 2, false);
      this.context.fillStyle = 'red';
      this.context.fill();
      this.context.closePath();
    }
  }]);

  return Avatar;
}();

exports.default = Avatar;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var background = exports.background = function background() {

  var backCanvas = document.getElementById("backCanvas");
  var backContext = backCanvas.getContext("2d");
  backCanvas.width = window.innerWidth;
  backCanvas.height = window.innerHeight;

  // var mouse = {
  //   x: undefined,
  //   y: undefined,
  // }

  var minRadius = 10;
  var maxRadius = 40;

  var colorArray = ["rgba(39, 146, 204, 0.3)", "rgba(75, 126, 153, 0.5)", "rgba(23, 255, 211, 0.7)", "rgba(255, 108, 204, 0.3)", "rgba(255, 108, 87, 0.5)"];

  // backCanvas.addEventListener('mousemove',
  //   function (event) {
  //     mouse.x = event.x;
  //     mouse.y = event.y;
  // })
  //
  // backCanvas.addEventListener('resize', function () {
  //   backCanvas.width = window.innerWidth;
  //   backCanvas.height = window.innerHeight;
  //
  //   initialize();
  // })

  function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = minRadius;
    this.maxRadius = maxRadius;
    this.piTime = Math.random() * 2;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
      backContext.beginPath();
      backContext.arc(this.x, this.y, this.radius, 0, Math.PI * this.piTime, false);
      backContext.strokeStyle = this.color;
      backContext.stroke();
      backContext.fillStyle = this.color;
      backContext.fill();
    };

    this.update = function () {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > innerWidth || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

      // if (mouse.x - this.x < 50 && mouse.x - this.x > -50
      // && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      //   if (this.radius < this.maxRadius) {
      //     this.radius += 1;
      //
      //   }
      // } else if (this.radius > this.minRadius){
      //   this.radius -= 1;
      // }

      this.draw();
    };
  }

  var circleArray = [];

  function initialize() {

    circleArray = [];

    for (var i = 0; i < 2000; i++) {
      var radius = Math.random() * 3 + 1;
      var x = Math.random() * (innerWidth - radius * 2) + radius;
      var y = Math.random() * (innerHeight - radius * 2) + radius;
      var dx = Math.random() - 0.5;
      var dy = Math.random() - 0.5;
      circleArray.push(new Circle(x, y, dx, dy, radius));
    }
  }

  var circle = new Circle(200, 200, 3, 3, 30);

  function animate() {
    requestAnimationFrame(animate);

    backContext.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
  }

  initialize();
  animate();
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map