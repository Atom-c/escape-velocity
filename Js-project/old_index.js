//OLD AVATAR.JS


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



// ABOVE LINE OLD AVATAR.JS


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
  maxSpeed = 10;

function gameLoop() {
  whatKey();
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;

  avatarX += velX;
  avatarY += velY;

  ctx.fillRect(avatarX, avatarY, 50, 50);
  requestAnimationFrame(gameLoop);
}

function whatKey() {
  if (keys[37]) {
    avatarX -= 18;
  }
  if (keys[39]) {
    avatarX += 18;
  }
}

(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

window.onload = function init() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  // var avatar = new Avatar;
  caveLoop();
}


window.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});

window.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});

// class Avatar {
//   constructor() {
//     this.x = 400 //Board.width / 2 later
//     this.y = 300
//     this.dx = 0
//     this.radius = 20;
//   }
// }

var keys = [];

function caveLoop() {
  whatKey();
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;

  avatar.x += avatar.dx

  ctx.fillRect(400, 300, 50, 50);
  requestAnimationFrame(gameLoop);
}

function whatKey() {
  if (keys[37]) { //  left
    avatar.dx = 18
  } else if (keys[39]) {
    avatar.dx = 18
  }
}

init()
















import avatar from './lib/avatar'


var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
function init () {
  setInterval(Riser.draw, Math.ceil(1000/60));
  canvas.width = 700;
  canvas.height = 500;
  riser = new Riser(canvas.width / 2, canvas.height / 2, 1, 1, 10);
  riser.update();
}

//riser
class Riser {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  update () {
    if (this.y + this.radius / 1000 < 0) {
      this.y = 0
      this.dy = 0
    } else {
      this.dy += 0.25;
    }
    this.y -= this.dy
    this.draw();
  }

  slide (dir) {
    if (this.x + this.radius / 1000 < 0) {
      this.x = 0;
      this.dx = 1;
    } else if (this.x + this.radius / 1000 > canvas.width) {
      this.x = canvas.width
      this.dx = 1;
    } else {
      if (dir === 'LEFT') {
        this.dx += 1.25;
        this.x -= this.dx
        this.draw();
      } else {
        this.dx -= 1.25;
        this.x -= this.dx
        this.draw();
      }
    }
  }

  draw () {
    c.clearRect(0, 0, canvas.width, canvas.height)
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = 'red'
    c.fill();
    c.closePath();
  }

  onKeyDown(event) {

    switch (event.keyCode) {
      case 37:  // left
      console.log("YEAH PRESSED LEFT!");
        console.log(riser);
        // riser.update();
        riser.x -= Math.floor(canvas.width * 0.055);

      break;
      case 65:  // A (left)
      console.log("YEAH PRESSED THE A KEY!");
      if (riser.x - riser.dx > 0){
        riser.x -= riser.dx * 25;
        riser.draw();
      }
      break;
      case 39:  // right
      console.log("YEAH PRESSED RIGHT!");
      console.log(riser);
      if (riser.x + riser.dx < canvas.width){
        riser.x += Math.floor(canvas.width * 0.08);
        // riser.slide("RIGHT");
      }
      break;
      case 68:  // D (right)
      console.log("YEAH PRESSED THE D KEY!");
      if (riser.x + riser.dx < canvas.width){
        riser.x += riser.dx * 25;
        riser.draw();
      }
      break;
    }
  }

}
//riser

// instantiate riser and init everything
var riser;
// function init() {

  // riser.update()

// }


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height)
  riser.update();
}

init();
window.addEventListener('keydown', riser.onKeyDown)
animate();



/////////////Uncomment above line



//
//
// function pageRender () {
//   slideAvatar();
//   riseAvatar();
// }
//
//
// function drawStuff() {
//   ref_int setTimeout(pageRender, Math.ceil(1000/60))
// }
//
// function reset() {
//   clearTimeout(ref_int);
//   //reset the stuff to old spot
// }
//ref_int = requestAnimationFrame(pageRender)
//
//cancelAnimationFrame(ref_int)
//



//Cool background for game later

// canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

// var mouse = {
//   x: undefined,
//   y: undefined,
// }
//
// var minRadius = 10;
// var maxRadius = 40;
//
// var colorArray = [
//   `rgba(39, 146, 204, 0.3)`,
//   `rgba(75, 126, 153, 0.5)`,
//   `rgba(23, 255, 211, 0.7)`,
//   `rgba(255, 108, 204, 0.3)`,
//   `rgba(255, 108, 87, 0.5)`,
// ];
//
// canvas.addEventListener('mousemove',
//   function (event) {
//     // console.log(event);
//     mouse.x = event.x;
//     mouse.y = event.y;
// })
//
// canvas.addEventListener('resize', function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//
//   init();
// })
//
// canvas.addEventListener('keypress', function (event) {
//   var keyCode = event.keyCode;
//   if (keyCode == 37) {
//     // new Circle(1, 1, 1, 1, 60));
//     c.draw
//   }
// })
//
//
//
// function Circle(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;
//   this.minRadius = minRadius;
//   this.maxRadius = maxRadius;
//   this.piTime = (Math.random() * 2)
//   this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
//
//   this.draw = function() {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * this.piTime, false);
//     c.strokeStyle = this.color;
//     c.stroke();
//     c.fillStyle = this.color;
//     c.fill();
//   }
//
//   this.update = function () {
//     if (this.x + this.radius > innerWidth
//     || this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }
//
//     if (this.y + this.radius > innerWidth
//     || this.y - this.radius < 0) {
//       this.dy = -this.dy;
//     }
//
//     this.x += this.dx;
//     this.y += this.dy;
//
//     if (mouse.x - this.x < 50 && mouse.x - this.x > -50
//     && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
//       if (this.radius < this.maxRadius) {
//         this.radius += 1;
//
//       }
//     } else if (this.radius > this.minRadius){
//       this.radius -= 1;
//     }
//
//     this.draw();
//   }
// }
//
//
// var circleArray = [];
//
// function init() {
//
//   circleArray = [];
//
//   for (var i = 0; i < 2000; i++) {
//     var radius = Math.random() * 3 + 1;
//     var x = Math.random() * (innerWidth - radius * 2) + radius;
//     var y = Math.random() * (innerHeight - radius * 2) + radius;
//     var dx = (Math.random() - 0.5);
//     var dy = (Math.random() - 0.5);
//     circleArray.push(new Circle(x, y, dx, dy, radius));
//   }
// }
//
// var circle = new Circle(200, 200, 3, 3, 30);
//
// function animate() {
//   requestAnimationFrame(animate);
//
//   c.clearRect(0,0,innerWidth,innerHeight);
//
//   for (var i = 0; i < circleArray.length; i++) {
//     circleArray[i].update();
//   }
//
// }
//
// init();
// animate();









// c.beginPath();
// c.arc(x, y, 30, 0, Math.PI * 2, false);
// c.strokeStyle = `#000`;
// c.stroke();

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
//
// ctx.fillStyle = 'lightblue';
// ctx.fillRect(10, 10, 100, 100);



// c.fillStyle = 'rgba(0, 0, 255, 0.5)'
// c.fillRect(0, 0, 100, 100);
//
//
// c.beginPath();
// c.moveTo(150, 150);
// c.lineTo(175, 165);
// c.lineTo(100, 185);
// c.strokeStyle = "#fa34a3";
// c.stroke();




// for (let i = 0; i < 35; i++) {
//   c.beginPath();
//   c.arc(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = `#${Math.floor(Math.random()*16777215).toString(16)}`;
//   c.fillStyle = 'rgba(0, 0, 255, 0.5)'
//   c.stroke();
// }



// for (let i = 0; i < 35; i++) {
// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// var dx = (Math.random() - 0.5) * 10;
// var dy = (Math.random() - 0.5) * 10;
// var radius = 30;

// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// var dx = (Math.random() - 0.5) * 10;
// var dy = (Math.random() - 0.5) * 10;
// var radius = 30;
