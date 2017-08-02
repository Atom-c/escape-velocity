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
    
  }
}
