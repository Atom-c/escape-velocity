class Avatar {
  constructor(avatarX, avatarY, avatarRadius, avatarVel, context) {
    this.avatarX = 400; //Board.width / 2 later
    this.avatarY = 300;
    this.avatarRadius = 20;
    this.avatarVel = 0;
    this.context = context;
    this.draw = this.draw;
    // this.draw = this.draw;
  }

  draw() {
    console.log("draw");
    this.context.clearRect(0, 0, canvas.width, canvas.height)
    this.context.beginPath();
    this.context.arc(this.avatarX, this.avatarY, this.avatarRadius, 0, Math.PI * 2, false)
    this.context.fillStyle = 'red'
    this.context.fill();
    this.context.closePath();
  }
}


export default Avatar;
