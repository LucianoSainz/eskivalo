class Obstacle {
    constructor(ctx, gameWidth, gameHeight) {
      this.ctx = ctx;
      this.width = 30;
      this.height = 30;
      this.image = new Image();
      this.image.src = './images/fuego2.png';
      this.gameHeight = gameHeight;
      this.gameWidth = gameWidth;

     this.randomNummer = Math.floor(Math.random() * this.gameWidth) + 1;
      this.posX = this.randomNummer;
      this.posY = 0;
      //this.posX = gameWidth;
      //this.posY = navePosY + naveHeight - this.height;
  
      this.velX = 2;
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
  
    move() {
      this.posY += this.velX;
    }
}

 class ObtaclesTwo extends Obstacle {
   constructor(ctx, gameWidth, gameHeight){
    super(ctx, gameWidth, gameHeight)
    this.image = new Image();
    this.image.src = './images/satelite2.png';
    this.width = 50;
    this.height = 50;
    this.randomNummer = Math.floor(Math.random() * this.gameHeight) + 1;
    this.posX = this.gameWidth;
    this.posY = this.randomNummer;
   }
  

   draw(){
    this.ctx.drawImage(
        this.image,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
    }

    move(){
      this.posX -= this.velX;
    }
  }
