class Obstacle {
  constructor(blockX, blockY, blockWidth, blockHeight, blockVel, context, obstacleColor) {
    this.blockX = blockX;
    this.blockWidth = blockWidth;
    this.blockY = blockY;
    this.blockHeight = blockHeight;
    this.blockVel = blockVel;
    this.context = context;
    this.obstacleColor = obstacleColor

    this.blockY += blockVel;

  }

  draw() {
    this.context.fillStyle = this.obstacleColor;
    this.context.shadowBlur = 15;
    this.context.shadowColor = "white";
    this.context.strokeStyle = "white";
    this.context.fillRect(this.blockX, this.blockY, this.blockWidth, this.blockHeight);
  }

}

export default Obstacle;
