const game = {
    // canvas y contexto
    canvas: undefined,
    ctx: undefined,

    //frames por segundo
    fpsCounter: 60,
    framesCounter : 0,

    // dimensiones del juego
    width: undefined,
    height: undefined,

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



        }, 1000 / this.fpsCounter)
    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height)
        this.nave = new Nave(this.ctx, this.width, this.height, this.keys);
    },


    drawAll() {
        this.background.draw();
        this.nave.draw();
    },

    moveAll() {
        this.background.move();
        //this.nave.move();

    },
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
      }
}