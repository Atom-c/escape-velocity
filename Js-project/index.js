(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();


window.onload = function init() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  gameLoop();
}

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
  secondBlockVel = -0.25


function gameLoop() {
  whatKey();
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;

  // avatarX += velX;
  avatarY += velY;
  // secondBlockBottom += secondBlockVel

  if (avatarY < 0) {
    avatarY = 0
    velY = 0
  } else if (avatarY < 0) {
    avatarY = 0
    velY = 0
  } else if (avatarX + avatarXleft < secondBlockLeft || avatarX + avatarXright > secondBlockLeft + secondBlockWidth) {
      velY -= 0.25;
  } else if ((avatarX + avatarXleft > secondBlockLeft || avatarX + avatarXright < secondBlockLeft + secondBlockWidth) && avatarY < secondBlockHeight) {
      velY = 0;
      avatarY = secondBlockHeight
  }

  var avatar = ctx.fillRect(avatarX, avatarY, avatarXleft, avatarXright);
  var firstBlock =   ctx.fillRect(firstBlockLeft, firstBlockBottom, firstBlockWidth, firstBlockHeight);
  var secondBlock = ctx.fillRect(secondBlockLeft, secondBlockBottom, secondBlockWidth, secondBlockHeight);
  requestAnimationFrame(gameLoop);
}

function whatKey() {
  if (keys[37]) {
    avatarX -= 12;
  }
  if (keys[39]) {
    avatarX += 12;
  }
}
