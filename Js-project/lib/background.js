export const background = () => {

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

var colorArray = [
  `rgba(39, 146, 204, 0.3)`,
  `rgba(75, 126, 153, 0.5)`,
  `rgba(23, 255, 211, 0.7)`,
  `rgba(255, 108, 204, 0.3)`,
  `rgba(255, 108, 87, 0.5)`,
];

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
  this.piTime = (Math.random() * 2)
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

  this.draw = function() {
    backContext.beginPath();
    backContext.arc(this.x, this.y, this.radius, 0, Math.PI * this.piTime, false);
    backContext.strokeStyle = this.color;
    backContext.stroke();
    backContext.fillStyle = this.color;
    backContext.fill();
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth
    || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerWidth
    || this.y - this.radius < 0) {
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
  }
}


var circleArray = [];

function initialize() {

  circleArray = [];

  for (var i = 0; i < 2000; i++) {
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

var circle = new Circle(200, 200, 3, 3, 30);

function animate() {
  requestAnimationFrame(animate);

  backContext.clearRect(0,0,innerWidth,innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}

  initialize();
  animate();


}
