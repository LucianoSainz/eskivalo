// creo el juegado con su acho y alto
class Nave {
  constructor(ctx, gameW, gameH, keys) {
    this.ctx = ctx;

    this.image = new Image();
    this.image.src = "./images/nave2.png";

    this.posX = 30;
    this.posY = gameH / 2;

    this.width = 130;
    this.height = 30;

    this.keys = keys;

    this.velY = 1;

    this.gameW = gameW;
    this.gameH = gameH;

    this.bullets = [];

    this.musicFour =  new Sound('./music/472095__claymorexx__08-disparo2.wav')

    this.setListeners();
  }

  //pinta la imagen de la nave
  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.bullets.forEach(bullet => bullet.draw());
  }
  
  //control de movimientos de la nave y limites de pantalla para que la nave no sobresalga de ella
  setListeners() {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.UP:
          if (this.posY + this.gameH > this.gameH) {
            this.posY -= 40;
            this.velY -= 8;
            break;
          }
      case this.keys.DOWN:
      if(this.posY + this.height <= this.gameH - this.height){
        this.posY += 40;
        this.velY += 8;
        break;
      }
      case this.keys.RIGHT:
      if(this.posX + this.width < this.gameW){
        this.posX += 40;
        this.velX += 8;
        break;
      }
      case this.keys.LEFT:
      if(this.posX > 0){
        this.posX -= 40;
        this.velX -= 8;
        break;
      }
      case this.keys.SPACE:
        console.log("DISPARANDO");
        this.shoot();
        break;
      }
    }
    );
  }

  shoot() {
    this.bullets.push(new Bullets(this.ctx, this.posX, this.posY, this.width, this.height));
    this.musicFour.play();
  }

  moveBullet() {
    this.bullets.forEach(bullet => bullet.move())
  }
}
