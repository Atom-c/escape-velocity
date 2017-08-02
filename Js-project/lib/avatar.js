function () {
  var requestAnimationFrame = window.requestAnimationFrame
}();

window.onload = function init() {
  var canvas = documentgetElementById("canvas");
  var c = canvas.getContext("2d");
  caveLoop();
}

window.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
})

window.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
})

class Avatar {
  constructor() {
    this.x = 350 //Board.width / 2 later
    this.y = 450
    this.dx = 0
    keys = []
  }


}

var avatar = Avatar.new();

function caveLoop() {
  whatKey();
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;
}

function whatKey() {
  if (keys[37]) { //  left
    avatar.x -= 18
  } else if (keys[39]) {
    avatar.x += 18
  }
}
