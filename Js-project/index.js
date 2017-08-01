
console.log("hey there");

var canvas = document.getElementById('canvas');

console.log(canvas);
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillStyle = 'rgba(0, 0, 255, 0.5)'
c.fillRect(0, 0, 100, 100);


c.beginPath();
c.moveTo(150, 150);
c.lineTo(175, 165);
c.lineTo(100, 185);
c.strokeStyle = "#fa34a3";
c.stroke();




for (let i = 0; i < 5; i++) {
  c.beginPath();
  c.arc(300 + i*3, 300 - i*3, 30, 0, Math.PI * 2, false);
  c.strokeStyle = "#0034a3";
  c.stroke();
}




// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
//
// ctx.fillStyle = 'lightblue';
// ctx.fillRect(10, 10, 100, 100);
