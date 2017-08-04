class Obstacle {
  constructor(blockX, blockY, blockWidth, blockHeight, blockVel, context) {
    this.blockX = blockX;
    this.blockWidth = blockWidth;
    this.blockY = blockY;
    this.blockHeight = blockHeight;
    this.blockVel = blockVel;
    this.context = context;

    this.blockY += blockVel;

  }

  draw() {
    this.context.shadowBlur = 20;
    this.context.shadowColor = "cyan";
    this.context.fillRect(this.blockX, this.blockY, this.blockWidth, this.blockHeight);
  }

}

export default Obstacle;
