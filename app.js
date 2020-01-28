const game = {
    // canvas y contexto
    canvas: undefined,
    ctx: undefined,

    //frames por segundo
    fpsCounter: 60,
    framesCounter : 0,

    //obstaculos
    obstacles: undefined,
    obstaclesTwo: undefined,
    // dimensiones del juego
    width: undefined,
    height: undefined,

    //teclas de movimiento
    keys: {
        UP: 38,
        DOWN:40,
        RIGHT:39,
        LEFT:37
    },

    init() {
        this.canvas = document.getElementById("myGame")
        this.ctx = this.canvas.getContext('2d')
        this.setDimensions();
        this.startGame()

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
            this.generateObstacles();
            this.clearObstacles();
            if(this.isCollision()){
                this.gameOver();
            }


        }, 1000 / this.fpsCounter)
    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height)
        this.nave = new Nave(this.ctx, this.width, this.height, this.keys);
        this.obstacles = [];
        this.obstaclesTwo = [];
    },


    drawAll() {
        this.background.draw();
        this.nave.draw();
        this.obstacles.forEach(obs => obs.draw());
        this.obstaclesTwo.forEach(obs => obs.draw());
    },

    moveAll() {
        this.background.move();
        this.obstacles.forEach(obs => obs.move());
        this.obstaclesTwo.forEach(obs => obs.move())
        //this.nave.move();

    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
      },

      
      generateObstacles() {
        if (this.framesCounter % 90 == 0) {
          this.obstacles.push(new Obstacle(this.ctx, this.width, this.height));
        }
        if(this.framesCounter % 50 === 0) {
            this.obstaclesTwo.push(new ObtaclesTwo(this.ctx, this.width, this.height));          
        }
      },

      clearObstacles() {
        this.obstacles = this.obstacles.filter(obs => obs.posX >= 0);
      },

      isCollision() {
        return this.obstacles.some(obs => {
          return (
            this.nave.posX + this.nave.width >= obs.posX &&
            this.nave.posY + this.nave.height >= obs.posY &&
            this.nave.posX <= obs.posX + obs.width
          );
        });
      },

      gameOver() {
        clearInterval(this.interval);
      },
}