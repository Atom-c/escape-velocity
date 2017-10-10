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
    this.context.strokeStyle = this.obstacleColor;
    this.context.lineWidth = 5;
    this.context.shadowColor = this.obstacleColor !== '#000000' ? this.obstacleColor : '#FFFFFF';
    this.context.shadowBlur = 25;
    this.context.lineCap = 'square';
    this.context.fillRect(this.blockX, this.blockY, this.blockWidth, this.blockHeight);
  }

}

export default Obstacle;
