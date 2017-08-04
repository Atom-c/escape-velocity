import Obstacle from './lib/obstacles';
import Avatar from './lib/avatar';
import {background} from './lib/background'

(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();


window.onload = function init() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var avObj = new Avatar(450, 350, 20, 0, ctx)
  background();
  gameLoop(avObj);
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

    avatarWidth = 25,
    avatarHeight = 25,

    keys = [],
    arr = [],
    counter = 0;


function gameLoop(avObj) {

  counter++;;

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;


  avatarY += velY;


  // DEATH IMPLENTATION
  if (avatarY > canvas.height) {
    ctx.font = "60px courier";
    ctx.shadowBlur = 20;
    ctx.shadowColor = "red";
    ctx.strokeStyle= "green"
    ctx.fillStyle= "red";
    ctx.fillText(`The black hole got you!`, 0, 335);
  }

  // if (ohNo) {
  //   alert("OH NO!");
  //   ohNo = false;
  // }
  //___________________


  whatKey(avObj);

  ctx.shadowBlur = 15;
  ctx.shadowColor = "white";
  var avatar = ctx.fillRect(avatarX, avatarY, avatarWidth, avatarHeight);




  ctx.fillStyle = "black"


  var bX = Math.floor(Math.random(10) * 100) * (counter % 50) % 800

  if (counter % 30 === 0) {
    arr.push(new Obstacle(bX, 0, 280, 3, (6), ctx))
    arr.push(new Obstacle(bX * (counter % 33), 0, 330, 3, (6), ctx))
    arr.push(new Obstacle(bX * (counter % 14), 0, 180, 3, (6), ctx))

  }


  arr.forEach((obstacle) => {

    obstacle.blockY = obstacle.blockY + obstacle.blockVel

    obstacle.draw();

    if (avatarY < 0)
      { avatarY = 0
      velY = 0 }

    else if (
      (obstacle.blockY - avatarY < 10 && obstacle.blockY - avatarY > -10)
      && (
      (avatarX + avatarWidth - 3 > obstacle.blockX && avatarX + 3 < obstacle.blockX + obstacle.blockWidth)
      )
    )
      { avatarY = obstacle.blockHeight + obstacle.blockY; }



    if (arr.length % 27 === 0) {
      arr.shift();
      arr.shift();
      arr.shift();
    }

  })

//Le Score
  ctx.font = "30px courier";
  ctx.strokeStyle= "green"
  ctx.fillStyle= "cyan";
  ctx.strokeText(`staying power: ${Math.floor(counter * 1.5)}`, 10, 35);

  ctx.fillText(`height: ${(575 - avatarY + avatarHeight)}`, 500, 35);

//________

  requestAnimationFrame(gameLoop);
}

function whatKey(avObj) {
  if (keys[37]) {
    if (avatarX - 12 > 0)
    {avatarX -= 12;}

  }
  if (keys[39]) {
    if (avatarX + avatarWidth + 12 < 800)
    {avatarX += 12;}

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









// most recently trimmed


// console.log(avObj);
// whatKey();
// avatarX += velX;
// secondBlockY += 1
// if (avatarY > 0)
// { velY -= 0.05; }


// ctx.fillStyle = "red"

// avObj.draw();
// ctx.fillStyle = "white"
// var secondBlock = ctx.fillRect(secondBlockLeft, secondBlockY, secondBlockWidth, secondBlockHeight);
// arr.push(new Obstacle(100 + counter, 0, 80, 20, (1), ctx))
// console.log(obstacle.blockX, obstacle.blockWidth);
// else if (avatarY > obstacle.blockHeight
  //   || avatarX + avatarWidth < obstacle.blockX
  //   || avatarX > obstacle.blockX + obstacle.blockWidth)
  //     { velY -= 0.025; }

  // else if (
  //   (avatarX > obstacle.blockX + obstacle.blockWidth
  //   || avatarX < obstacle.blockX)
  //     && avatarY > obstacle.blockY + obstacle.blockHeight + 10)
  //     { avatarY += 3; }
// console.log(arr);
// avObj.avatarX -= 6;
  // console.log(avObj)
  // console.log(avObj.avatarX);
  // avObj.draw();
// avObj.avatarX += 6;
  // avObj.draw();
