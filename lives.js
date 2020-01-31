class Lives {
  constructor(ctx, posX) {
    this.ctx = ctx;
    this.width = 65;
    this.height = 15;
    this.image = new Image();
    this.image.src = './images/nave_azul.png';

    this.posX = posX;
    this.posY = 10;

  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }
}