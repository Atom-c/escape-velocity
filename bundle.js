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

var _background = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

window.onload = function () {
  init();
};

function init() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  (0, _background.background)();
}

window.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});

window.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});

window.addEventListener("keypress", function (e) {
  if (e.keyCode == 13) {
    gameLoop();
    document.getElementById("instructions").setAttribute('style', 'display: none;');
    document.getElementById("a-key").setAttribute('style', 'margin-left: -75px;');
    document.getElementById("d-key").setAttribute('style', 'margin-left: 25px;');
  }
});

var avatarX = 400,
    avatarY = 300,
    velX = 0,
    velY = 0,
    avatarWidth = 25,
    avatarHeight = 25,
    keys = [],
    arr = [],
    lost = false,
    counter = 0;

function gameLoop() {

  if (lost === false) counter++;

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;
  avatarY += velY;

  if (avatarY > canvas.height) {
    ctx.font = "25px courier";
    ctx.shadowBlur = 15;
    ctx.shadowColor = 'rgba(255, 108, 204, 1)';
    ctx.fillStyle = "rgba(255, 108, 204, 1)";
    ctx.fillText('You made it ' + Math.floor(counter * 1.5) + ' spectral units!', 160, 500);

    document.getElementById("instructions").setAttribute('style', 'display: block;');

    avatarX = 400;
    avatarY = 300;
    velX = 0;
    velY = 0;

    avatarWidth = 25;
    avatarHeight = 25;

    keys = [];
    arr = [];
    lost = false;
    counter = 0;

    return;
  }

  whatKey();

  ctx.shadowBlur = 15;
  ctx.shadowColor = "cyan";
  ctx.fillStyle = 'rgba(23, 255, 211, 1.0)';
  var avatar = ctx.fillRect(avatarX, avatarY, avatarWidth, avatarHeight);

  ctx.fillStyle = "black";

  var bX = Math.floor(Math.random(10) * 100) * (counter % 50) % 800;

  spawn(counter, ctx, bX);

  arr.forEach(function (obstacle) {

    obstacle.blockY = obstacle.blockY + obstacle.blockVel;

    obstacle.draw();

    if (avatarY < 0) {
      avatarY = 0;
      velY = 0;
    } else if (obstacle.blockY - avatarY < 10 && obstacle.blockY - avatarY > -10 && avatarX + avatarWidth - 3 > obstacle.blockX && avatarX + 3 < obstacle.blockX + obstacle.blockWidth) {
      if (lost === false) {
        avatarY = obstacle.blockHeight + obstacle.blockY;
      }
    }

    if (obstacle.blockY > canvas.height + 20) {
      var indexy = arr.indexOf(obstacle);
      arr.splice(indexy, 1);
    }
  });

  // Abstract this score element
  ctx.font = "30px courier";
  ctx.strokeStyle = 'rgba(23, 255, 211, 1.0)';
  ctx.fillStyle = "cyan";
  ctx.strokeText('spectral units: ' + Math.floor(counter * 1.5), 10, 35);

  ctx.fillText('height: ' + (578 - avatarY + avatarHeight), 500, 35);

  requestAnimationFrame(gameLoop);
}

function whatKey() {
  if (keys[37]) {
    if (avatarX - 12 > 0) {
      avatarX -= 12;
    }
  }
  if (keys[39]) {
    if (avatarX + avatarWidth + 12 < 800) {
      avatarX += 12;
    }
  }
  if (keys[65]) {
    if (avatarX - 6 > 0) {
      avatarX -= 3;
    }
  }
  if (keys[68]) {
    if (avatarX + avatarWidth + 6 < 800) {
      avatarX += 3;
    }
  }
}

function spawn(counter, ctx, bX) {
  if (counter % 40 === 0) {

    var randomColor = '#' + '0123456789abcdef'.split('').map(function (v, i, a) {
      return i > 5 ? null : a[Math.floor(Math.random() * 16)];
    }).join('');

    if (bX === 0) {
      bX = 120;
    }
    if (bX >= 550) {
      bX = 60;
    }

    if (counter * 1.5 < 1000) {
      arr.push(new _obstacles2.default((bX + 100) * 1.1, 0, 180, 2, 4, ctx, '#FF007D'));
      arr.push(new _obstacles2.default(bX * (counter % 33), 0, 280, 4, 4.5, ctx, '#FF0043'));
      arr.push(new _obstacles2.default(bX * (counter % 14), -100, 180, 6, 5, ctx, '#FF0023'));
    } else if (counter * 1.5 < 2000) {
      arr.push(new _obstacles2.default(bX, 0, 190, 4, 5, ctx, '#FF0800'));
      arr.push(new _obstacles2.default(bX * (counter % 33), 0, 300, 6, 5.5, ctx, '#FF4900'));
      arr.push(new _obstacles2.default(bX * (counter % 14), -100, 240, 8, 6, ctx, '#FF8F00'));
    } else if (counter * 1.5 < 3000) {
      arr.push(new _obstacles2.default(bX, 0, 190, 4, 5, ctx, '#FFCD00'));
      arr.push(new _obstacles2.default(bX * (counter % 33), 0, 300, 6, 6, ctx, '#FFE400'));
      arr.push(new _obstacles2.default(bX * (counter % 14), -100, 240, 8, 6.5, ctx, '#FFFF00'));
    } else if (counter * 1.5 < 4000) {
      arr.push(new _obstacles2.default(bX, 0, 190, 4, 5, ctx, '#F3FF00'));
      arr.push(new _obstacles2.default(bX * (counter % 12 + 2), 0, 140, 7, 5.5, ctx, '#D4FF00'));
      arr.push(new _obstacles2.default(bX * (counter % 33), 0, 300, 6, 6, ctx, '#C1FF00'));
      arr.push(new _obstacles2.default(bX * (counter % 14), -100, 240, 8, 6.5, ctx, '#87FF00'));
    } else if (counter * 1.5 < 5000) {
      arr.push(new _obstacles2.default(bX, 0, 200, 5, 6, ctx, '#62FF00'));
      arr.push(new _obstacles2.default(bX * (counter % 12 + 2), 0, 140, 7, 7, ctx, '#00FF5D'));
      arr.push(new _obstacles2.default(bX * (counter % 33), -100, 240, 9, 8, ctx, '#00FF74'));
      arr.push(new _obstacles2.default(bX * (counter % 14), 0, 180, 11, 8.5, ctx, '#00FFF0'));
    } else if (counter * 1.5 < 6000) {
      arr.push(new _obstacles2.default(bX, 0, 140, 6, 6, ctx, '#FF00AE'));
      arr.push(new _obstacles2.default(bX * (counter % 12 + 2), 0, 200, 8, 7, ctx, '#C24DFD'));
      arr.push(new _obstacles2.default(bX * (counter % 33), 0, 330, 12, 8.5, ctx, '#FD53C7'));
      arr.push(new _obstacles2.default(bX * Math.floor(counter % 14), -100, 180, 14, 9, ctx, '#0C00FF'));
    } else if (counter * 1.5 < 10000) {
      arr.push(new _obstacles2.default(bX, 0, 140, 4, 8, ctx, "cyan"));
      arr.push(new _obstacles2.default(bX * (counter % 12 + 2), 0, 280, 5, 9, ctx, "blue"));
      arr.push(new _obstacles2.default(bX * Math.floor(counter % 63 / 7), 0, 280, 9, 9.5, ctx, "lime"));
      arr.push(new _obstacles2.default(bX * (counter % 33), 0, 330, 11, 10, ctx, randomColor));
      arr.push(new _obstacles2.default(bX * Math.floor(counter % 89 / 10), -100, 180, 11, 10.5, ctx, randomColor));
    } else if (counter * 1.5 < 13000) {
      arr.push(new _obstacles2.default(bX, 0, 140, 4, 8.5, ctx, "cyan"));
      arr.push(new _obstacles2.default(bX * (counter % 12 + 2), 0, 280, 6, 9.5, ctx, "blue"));
      arr.push(new _obstacles2.default(bX * Math.floor(counter % 14), 0, 280, 10, 10, ctx, "lime"));
      arr.push(new _obstacles2.default(bX * (counter % 33), 0, 330, 12, 10, ctx, randomColor));
      arr.push(new _obstacles2.default(bX * Math.floor(counter % 89 / 10), -100, 180, 14, 11, ctx, randomColor));
    } else if (counter * 1.5 > 13000) {
      arr.push(new _obstacles2.default(bX, 0, 140, 4, 8, ctx, "aquamarine"));
      arr.push(new _obstacles2.default(bX * (counter % 5), 0, 280, 10, 10, ctx, "cyan"));
      arr.push(new _obstacles2.default(bX * (counter % 63), 0, 280, 15, 12, ctx, "lime"));
      arr.push(new _obstacles2.default(bX * (counter % 33), 0, 330, 16, 13, ctx, randomColor));
      arr.push(new _obstacles2.default(bX * Math.floor(counter % 89 / 10), 0, 180, 17, 14, ctx, randomColor));
      arr.push(new _obstacles2.default(bX * Math.floor(counter % 164 / 25), -100, 180, 20, 20, ctx, randomColor));
    }
  }
}

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
  function Obstacle(blockX, blockY, blockWidth, blockHeight, blockVel, context, obstacleColor) {
    _classCallCheck(this, Obstacle);

    this.blockX = blockX;
    this.blockWidth = blockWidth;
    this.blockY = blockY;
    this.blockHeight = blockHeight;
    this.blockVel = blockVel;
    this.context = context;
    this.obstacleColor = obstacleColor;

    this.blockY += blockVel;
  }

  _createClass(Obstacle, [{
    key: "draw",
    value: function draw() {
      this.context.fillStyle = this.obstacleColor;
      this.context.shadowBlur = 15;
      this.context.shadowColor = "white";
      this.context.strokeStyle = "white";
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
var background = exports.background = function background() {

  var backCanvas = document.getElementById("backCanvas");
  var backContext = backCanvas.getContext("2d");
  backCanvas.width = window.innerWidth;
  backCanvas.height = window.innerHeight;

  var mouse = {
    x: undefined,
    y: undefined
  };

  var swatch = false;

  var minRadius = 3;
  var maxRadius = 10;

  var colorArray = ["rgba(39, 146, 204, 0.3)", "rgba(75, 126, 153, 0.5)", "rgba(23, 255, 211, 0.7)", "rgba(255, 108, 204, 0.3)", "rgba(255, 108, 87, 0.5)"];

  window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  window.addEventListener('resize', function () {
    backCanvas.width = window.innerWidth;
    backCanvas.height = window.innerHeight;
    initialize();
  });

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

      if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        if (this.radius < this.maxRadius) {
          this.radius += 1;
        }
      } else if (this.radius > this.minRadius) {
        this.radius -= 1;
      }

      this.draw();
    };
  }

  var circleArray = [];

  function initialize() {

    circleArray = [];

    for (var i = 0; i < 606; i++) {
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