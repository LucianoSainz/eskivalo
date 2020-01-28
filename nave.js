// creo el juegado con su acho y alto
class Nave {
  constructor(ctx, gameW, gameH, keys) {
    this.ctx = ctx;

    this.image = new Image();
    this.image.src = "./images/nave.png";

    this.posX = 0;
    this.posY = 0;

    this.keys = keys;

    this.velY = 1;

    this.setListeners();
  }

  //pinta la imagen de la nave
  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      200,
      200
    );
  }
  
  //control de movimientos de la nave
  setListeners() {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.UP:
          if (this.posY >= this.posY) {
            this.posY -= 40;
            this.velY -= 8;
            break;
          }
      case this.keys.DOWN:
      if(this.posY <= this.posY){
        this.posY += 40;
        this.velY += 8;
        break;
      }
      case this.keys.RIGHT:
      if(this.posX <= this.posX){
        this.posX += 40;
        this.velX += 8;
        break;
      }
      case this.keys.LEFT:
      if(this.posX <= this.posX){
        this.posX -= 40;
        this.velX -= 8;
        break;
      }
    }
    });
  }
}
