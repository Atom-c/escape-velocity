function () {
  var requestAnimationFrame = window.requestAnimationFrame
}();

window.onload = function init() {
  var canvas = documentgetElementById("canvas");
  var c = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;
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
    this.radius = 20;
    keys = []
  }


}

var avatar = Avatar.new();

draw () {
  c.clearRect(0, 0, canvas.width, canvas.height)
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
  c.fillStyle = 'blue'
  c.fill();
  c.closePath();
}

function caveLoop() {
  whatKey();
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;

  draw();
  requestAnimationFrame(caveLoop);
}

function whatKey() {
  if (keys[37]) { //  left
    avatar.x -= 18
  } else if (keys[39]) {
    avatar.x += 18
  }
}
