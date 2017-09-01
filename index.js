import Obstacle from './lib/obstacles';
import { background } from './lib/background'

(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

window.onload = function() {
  init();
}

function init() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  background();
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
    document.getElementById("instructions").setAttribute('style', 'display: none;')
    document.getElementById("a-key").setAttribute('style', 'margin-left: -75px;')
    document.getElementById("d-key").setAttribute('style', 'margin-left: 25px;')
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
    // ctx.font = "55px courier";
    // ctx.shadowBlur = 20;
    // ctx.shadowColor = "red";
    // ctx.fillStyle= `rgba(255, 108, 87, 1.0)`;
    // ctx.fillText(`The black hole got you!`, 28, 335);
    // lost = true;

    ctx.font = "25px courier";
    ctx.shadowBlur = 15;
    ctx.shadowColor = `rgba(255, 108, 204, 1)`;
    ctx.fillStyle = "rgba(255, 108, 204, 1)";
    ctx.fillText(`You lasted ${Math.floor(counter * 1.5)} stasis units!`, 210, 500);

    document.getElementById("instructions").setAttribute('style', 'display: block;')

    // highScore = Math.floor(counter * 1.5)
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
  //___________________


  whatKey();

  ctx.shadowBlur = 15;
  ctx.shadowColor = "cyan";
  ctx.fillStyle = `rgba(23, 255, 211, 1.0)`;
  var avatar = ctx.fillRect(avatarX, avatarY, avatarWidth, avatarHeight);




  ctx.fillStyle = "black"

  var bX = Math.floor(Math.random(10) * 100) * (counter % 50) % 800

  spawn(counter, ctx, bX);

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
  ctx.strokeText(`stasis units: ${Math.floor(counter * 1.5)}`, 10, 35);

  ctx.fillText(`height: ${(578 - avatarY + avatarHeight)}`, 500, 35);

//________

  requestAnimationFrame(gameLoop);
}

if (lost) {

}

function whatKey() {
  if (keys[37]) {
    if (avatarX - 12 > 0)
    { avatarX -= 12; }
  }
  if (keys[39]) {
    if (avatarX + avatarWidth + 12 < 800)
    { avatarX += 12; }
  }
  if (keys[65]) {
    if (avatarX - 6 > 0)
    { avatarX -= 3; }
  }
  if (keys[68]) {
    if (avatarX + avatarWidth + 6 < 800)
    { avatarX += 3; }
  }
}

function spawn(counter, ctx, bX) {
  if (counter % 30 === 0) {

    var randomColor = '#' + '0123456789abcdef'.split('').map(function(v,i,a) { return i > 5 ? null : a[Math.floor(Math.random() * 16)] }).join('')

    if (bX === 0) { bX = 120 }
    if (bX >= 550) { bX = 60 }

    // console.log(bX, "POJO bx");
    // console.log(bX * (counter % 5), "MOD 5");
    // console.log(bX * (counter % 12 + 1), "MOD 12");
    // console.log(bX * (counter % 14), "MOD 14");
    // console.log(bX * (counter % 33), "MOD 33");
    // console.log(bX * (counter % 89 / 10), "MOD 89");
    // console.log(bX * (counter % 63 / 7), "MOD 63");
    // console.log(bX * (counter % 164 / 25), "MOD 164");

    if (counter * 1.5 < 1000) {
      arr.push(new Obstacle(bX + 100, 0, 180, 2, (3), ctx, `red`))
      arr.push(new Obstacle(bX * (counter % 33), 0, 280, 4, (4), ctx, randomColor))
      arr.push(new Obstacle(bX * (counter % 14), -100, 180, 6, (5), ctx, randomColor))

    } else if (counter * 1.5 < 2000) {
      arr.push(new Obstacle(bX, 0, 190, 4, (5), ctx, "#ff5783"))
      arr.push(new Obstacle(bX * (counter % 33), 0, 300, 6, (5.5), ctx, randomColor))
      arr.push(new Obstacle(bX * (counter % 14), -100, 240, 8, (6), ctx, randomColor))

    } else if (counter * 1.5 < 3500) {
      arr.push(new Obstacle(bX, 0, 190, 4, (5), ctx, "orange"))
      arr.push(new Obstacle(bX * (counter % 33), 0, 300, 6, (6), ctx, randomColor))
      arr.push(new Obstacle(bX * (counter % 14), -100, 240, 8, (6.5), ctx, randomColor))

    } else if (counter * 1.5 < 5000) {
      arr.push(new Obstacle(bX, 0, 200, 5, (6), ctx, "yellow"))
      arr.push(new Obstacle(bX * (counter % 12 + 2), 0, 140, 7, (7), ctx, "#ff5783"))
      arr.push(new Obstacle(bX * (counter % 33), -100, 240, 9, (8), ctx, randomColor))
      arr.push(new Obstacle(bX * (counter % 14), 0, 180, 11, (8.5), ctx, randomColor))

    } else if (counter * 1.5 < 7500) {
      arr.push(new Obstacle(bX, 0, 140, 6, (6), ctx, "lime"))
      arr.push(new Obstacle(bX * (counter % 5), 0, 200, 8, (7), ctx, "yellow"))
      // arr.push(new Obstacle(bX * (counter % 12 + 2), 0, 280, 10, (8), ctx, "#ff5783"))
      arr.push(new Obstacle(bX * (counter % 33), 0, 330, 12, (8.5), ctx, randomColor))
      arr.push(new Obstacle(bX * Math.floor(counter % 89 / 8), -100, 180, 14, (9), ctx, randomColor))

    } else if (counter * 1.5 < 10000) {
      arr.push(new Obstacle(bX, 0, 140, 4, (8), ctx, "cyan"))
      arr.push(new Obstacle(bX * (counter % 5), 0, 280, 5, (9), ctx, "blue"))
      // arr.push(new Obstacle(bX * (counter % 12 + 2), 0, 230, 7, (12), ctx, "chartreuse"))
      arr.push(new Obstacle(bX * Math.floor(counter % 63 / 7), 0, 280, 9, (9.5), ctx, "lime"))
      arr.push(new Obstacle(bX * (counter % 33), 0, 330, 11, (10), ctx, randomColor))
      arr.push(new Obstacle(bX * Math.floor(counter % 89 / 10), -100, 180, 11, (10.5), ctx, randomColor))

    } else if (counter * 1.5 > 13000) {
      arr.push(new Obstacle(bX, 0, 140, 4, (8), ctx, "aquamarine"))
      arr.push(new Obstacle(bX * (counter % 5), 0, 280, 5, (10), ctx, "cyan"))
      // arr.push(new Obstacle(bX * (counter % 12 + 2), 0, 230, 7, (12), ctx, "chartreuse"))
      arr.push(new Obstacle(bX * (counter % 63), 0, 280, 9, (14), ctx, "lime"))
      arr.push(new Obstacle(bX * (counter % 33), 0, 330, 11, (20), ctx, randomColor))
      arr.push(new Obstacle(bX * Math.floor(counter % 89 / 10), 0, 180, 11, (20), ctx, randomColor))
      arr.push(new Obstacle(bX * Math.floor(counter % 164 / 25), -100, 180, 11, (20), ctx, randomColor))
    }
  }
}
