
console.log("hey there");

var canvas = document.getElementById('canvas');

console.log(canvas);
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = `#000`;
    c.stroke();
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

    this.draw();
  }
}

var circle = new Circle(200, 200, 3, 3, 30);

function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0,0,innerWidth,innerHeight);

  circle.update();

}

animate();
// }




// c.beginPath();
// c.arc(x, y, 30, 0, Math.PI * 2, false);
// c.strokeStyle = `#000`;
// c.stroke();

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
//
// ctx.fillStyle = 'lightblue';
// ctx.fillRect(10, 10, 100, 100);
