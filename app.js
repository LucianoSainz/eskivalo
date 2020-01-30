const game = {
  // canvas y contexto
  canvas: undefined,
  ctx: undefined,

  //puntuacion
  score: 0,

  //frames por segundo
  fpsCounter: 60,
  framesCounter: 0,

  //obstaculos
  obstacles: undefined,
  obstaclesTwo: undefined,
  // dimensiones del juego
  width: undefined,
  height: undefined,

  //teclas de movimiento
  keys: {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
  },

  lives: [],

  init() {
    document.querySelector(".gameO").style.display = "none";
    this.canvas = document.getElementById("myGame")
    this.ctx = this.canvas.getContext('2d')
    this.setDimensions();
    this.startGame();
  },

  // dimensiones de ancho y  alto de la pantalla
  setDimensions() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  },


  startGame() {
    this.reset()

    this.interval = setInterval(() => {
      if (this.framesCounter > 5000) {
        this.framesCounter = 0;
      }
      this.framesCounter++;
      this.clear();
      this.drawAll();
      this.moveAll();
  
    this.generateObstacles()
    this.clearObstacles();
    if (this.isCollision()) {
      console.log(this.lives)
      this.lives.pop();
    }
    if (this.isCollisionTwo()) {
      console.log(this.lives)
      this.lives.pop();

    }
    if (this.lives.length === 0) {
      this.gameOverF();
    }
    this.score += 0.01;
  }, 1000 / this.fpsCounter);
},

  reset() {
    this.background = new Background(this.ctx, this.width, this.height)
    this.nave = new Nave(this.ctx, this.width, this.height, this.keys);
    this.obstacles = [];
    this.obstaclesTwo = [];
    scoreBoard.init(this.ctx);
    this.lives = [new Lives(this.ctx, 10), new Lives(this.ctx, 80), new Lives(this.ctx, 150)]
    //this.gameOver = new GameOver(this.ctx, 400, 400);
    this.score = 0;
  },


    drawAll() {
  this.background.draw();
  this.nave.draw();
  this.lives.forEach(live => live.draw());
  this.obstacles.forEach(obs => obs.draw());
  this.obstaclesTwo.forEach(obs => obs.draw());
  scoreBoard.update(this.score);



},

moveAll() {
  this.background.move();
  this.obstacles.forEach(obs => obs.move());
  this.obstaclesTwo.forEach(obs => obs.move())


},

clear() {
  this.ctx.clearRect(0, 0, this.width, this.height);
},


generateObstacles() {
  // genera el obstaculo del meteorito
  if (this.framesCounter % 90 == 0) {
    this.obstacles.push(new Obstacle(this.ctx, this.width, this.height));
  }
  // genera el obstaculo del satelite
  if (this.framesCounter % 50 === 0) {
    this.obstaclesTwo.push(new ObtaclesTwo(this.ctx, this.width, this.height));
  }


},

//esta funcion va limpiando los obstaculos cuando salen de la pantalla
clearObstacles() {
  this.obstacles = this.obstacles.filter(obs => obs.posY <= this.height);
  this.obstaclesTwo = this.obstaclesTwo.filter(obs => obs.posX >= 0);

},

//colisiones meteoritos
isCollision() {
  return this.obstacles.some((obs, idx) => {
    if (
      this.nave.posX + this.nave.width > obs.posX &&
      this.nave.posY < obs.posY + obs.height &&
      this.nave.posX < obs.posX + obs.width &&
      this.nave.posY + this.nave.height > obs.posY
    ) {
      this.obstacles.splice(idx, 1);
      return true;
    }
  })

},
//colisiones satelites
isCollisionTwo() {
  return this.obstaclesTwo.some((obs, idx) => {
    if (
      this.nave.posX + this.nave.width > obs.posX &&
      this.nave.posY < obs.posY + obs.height &&
      this.nave.posX < obs.posX + obs.width &&
      this.nave.posY + this.nave.height > obs.posY
    ) {
      this.obstaclesTwo.splice(idx, 1)
      return true;
    }
  })

},

// gameOverF() {
// this.gameOver.draw();
// clearInterval(this.interval);
//this.gameOver.draw();
//},

gameOverF(){

  document.querySelector(".gameO").style.display = "flex";
  document.querySelector("#myGame").style.display = "none";
  clearInterval(this.interval)

}

};