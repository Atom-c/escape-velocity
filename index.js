import Obstacle from './lib/obstacles';
import { background } from './lib/background'

(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();


window.onload = function init() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  background();
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

    avatarWidth = 25,
    avatarHeight = 25,

    keys = [],
    arr = [],
    lost = false,
    counter = 0;


function gameLoop() {

  if (lost === false) {
    counter++;
  }

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;


  avatarY += velY;


  // DEATH IMPLENTATION
  if (avatarY > canvas.height) {
    ctx.font = "55px courier";
    ctx.shadowBlur = 20;
    ctx.shadowColor = "red";
    ctx.fillStyle= `rgba(255, 108, 87, 1.0)`;
    ctx.fillText(`The black hole got you!`, 28, 335);
    lost = true;

    ctx.font = "25px courier";
    ctx.shadowBlur = 15;
    ctx.shadowColor = `rgba(255, 108, 204, 1)`;
    ctx.fillStyle= "rgba(255, 108, 204, 1)";
    ctx.fillText(`You lasted ${Math.floor(counter * 1.5)} stasis units!`, 210, 500);

    return;

  }
  //___________________


  whatKey();

  ctx.shadowBlur = 15;
  ctx.shadowColor = "white";
  var avatar = ctx.fillRect(avatarX, avatarY, avatarWidth, avatarHeight);




  ctx.fillStyle = "black"


  var bX = Math.floor(Math.random(10) * 100) * (counter % 50) % 800

  // spawn(counter);

  if (counter % 30 === 0) {
    if (counter * 1.5 < 2000) {
      arr.push(new Obstacle(bX, 0, 280, 3, (6), ctx))
      arr.push(new Obstacle(bX * (counter % 33), 0, 330, 3, (8), ctx))
      arr.push(new Obstacle(bX * (counter % 14), 0, 180, 3, (8), ctx))

    } else if (counter * 1.5 < 3500) {
      arr.push(new Obstacle(bX, 0, 280, 3, (8), ctx))
      arr.push(new Obstacle(bX * (counter % 33), 0, 330, 3, (10), ctx))
      arr.push(new Obstacle(bX * (counter % 14), 0, 180, 3, (10), ctx))

    } else if (counter * 1.5 < 5000) {
      arr.push(new Obstacle(bX, 0, 280, 3, (10), ctx))
      arr.push(new Obstacle(bX * (counter % 33), 0, 330, 3, (12), ctx))
      arr.push(new Obstacle(bX * (counter % 14), 0, 180, 3, (12), ctx))

    } else if (counter * 1.5 < 7500) {
      arr.push(new Obstacle(bX, 0, 280, 3, (10), ctx))
      arr.push(new Obstacle(bX * (counter % 33), 0, 330, 3, (14), ctx))
      arr.push(new Obstacle(bX * (counter % 14), 0, 180, 3, (14), ctx))

    } else if (counter * 1.5 < 10000) {
      arr.push(new Obstacle(bX, 0, 280, 3, (10), ctx))
      arr.push(new Obstacle(bX * (counter % 33), 0, 330, 3, (16), ctx))
      arr.push(new Obstacle(bX * (counter % 14), 0, 180, 3, (16), ctx))

    } else if (counter * 1.5 > 13000) {
      arr.push(new Obstacle(bX, 0, 280, 3, (10), ctx))
      arr.push(new Obstacle(bX * (counter % 33), 0, 330, 3, (20), ctx))
      arr.push(new Obstacle(bX * (counter % 14), 0, 180, 3, (20), ctx))
    }
  }

  // spawn(counter);



  console.log(arr.length);

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
      { if (lost === false)
        {avatarY = obstacle.blockHeight + obstacle.blockY;} }



    // if (arr.length >= 38) {
    //   arr.shift();
    //   arr.shift();
    //   arr.shift();
    // }

    if (obstacle.blockY > canvas.height + 20){
      let indexy = arr.indexOf(obstacle)
      arr.splice(indexy, 1);
    }
  })

//Le Score
  ctx.font = "30px courier";
  ctx.strokeStyle= `rgba(23, 255, 211, 1.0)`
  ctx.fillStyle= "cyan";
  ctx.strokeText(`staying power: ${Math.floor(counter * 1.5)}`, 10, 35);

  ctx.fillText(`height: ${(578 - avatarY + avatarHeight)}`, 500, 35);

//________

  requestAnimationFrame(gameLoop);
}

if (lost) {

}

function whatKey() {
  if (keys[37]) {
    if (avatarX - 12 > 0)
    {avatarX -= 12;}

  }
  if (keys[39]) {
    if (avatarX + avatarWidth + 12 < 800)
    {avatarX += 12;}

  }
  if (keys[65]) {
    if (avatarX - 6 > 0)
    {avatarX -= 3;}

  }
  if (keys[68]) {
    if (avatarX + avatarWidth + 6 < 800)
    {avatarX += 3;}

  }
}

var spawn = (counter) => {
  if (counter % 30 === 0) {
    if (counter * 1.5 < 2500) {
      arr.push(new Obstacle(bX, 0, 280, 3, (6), ctx))
      arr.push(new Obstacle(bX * (counter % 33), 0, 330, 3, (8), ctx))
      arr.push(new Obstacle(bX * (counter % 14), 0, 180, 3, (6), ctx))
      arr.push(new Obstacle(bX * (counter % 11), 0, 180, 3, (8), ctx))
      // arr.push(new Obstacle(bX * (counter % 5), 0, 180, 3, (4), ctx))

    } else if (counter * 1.5 < 3500) {
      arr.push(new Obstacle(bX, 0, 280, 3, (8), ctx))
      arr.push(new Obstacle(bX * (counter % 33), 0, 330, 3, (10), ctx))
      // arr.push(new Obstacle(bX * (counter % 14), 0, 180, 3, (6), ctx))
      arr.push(new Obstacle(bX * (counter % 11), 0, 180, 3, (8), ctx))
      arr.push(new Obstacle(bX * (counter % 5), 0, 180, 3, (10), ctx))

    } else if (counter * 1.5 < 5000) {
      arr.push(new Obstacle(bX, 0, 280, 3, (10), ctx))
      arr.push(new Obstacle(bX * (counter % 33), 0, 330, 3, (12), ctx))
      arr.push(new Obstacle(bX * (counter % 14), 0, 180, 3, (12), ctx))
      // arr.push(new Obstacle(bX * (counter % 11), 0, 180, 3, (8), ctx))
      arr.push(new Obstacle(bX * (counter % 5), 0, 180, 3, (10), ctx))

    } else if (counter * 1.5 < 7500) {
      arr.push(new Obstacle(bX, 0, 280, 3, (10), ctx))
      arr.push(new Obstacle(bX * (counter % 33), 0, 330, 3, (14), ctx))
      // arr.push(new Obstacle(bX * (counter % 14), 0, 180, 3, (14), ctx))
      arr.push(new Obstacle(bX * (counter % 11), 0, 180, 3, (12), ctx))
      arr.push(new Obstacle(bX * (counter % 5), 0, 180, 3, (14), ctx))
      // arr.push(new Obstacle(bX * (counter % 59), 0, 180, 3, (10), ctx))

    } else if (counter * 1.5 < 10000) {
      arr.push(new Obstacle(bX, 0, 280, 3, (10), ctx))
      arr.push(new Obstacle(bX * (counter % 33), 0, 330, 3, (16), ctx))
      arr.push(new Obstacle(bX * (counter % 14), 0, 180, 3, (16), ctx))
      arr.push(new Obstacle(bX * (counter % 5), 0, 180, 3, (16), ctx))

    } else if (counter * 1.5 > 13000) {
      arr.push(new Obstacle(bX, 0, 280, 3, (10), ctx))
      arr.push(new Obstacle(bX * (counter % 33), 0, 330, 3, (18), ctx))
      arr.push(new Obstacle(bX * (counter % 14), 0, 180, 3, (22), ctx))
      arr.push(new Obstacle(bX * (counter % 5), 0, 180, 3, (20), ctx))
      arr.push(new Obstacle(bX * (counter % 458), 0, 180, 3, (18), ctx))
    }
  }
}
