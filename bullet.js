class Bullets {
    constructor(ctx, playerX, playerY, naveWidth, naveHeight) {
        this.ctx = ctx;
        this.posX = playerX;
        this.posY = playerY;
        this.width = naveWidth;
        this.height = naveHeight / 2;
        this.vel = 10;
        this.radius = 3;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "whitesmoke";
        this.ctx.arc(this.posX + this.width, this.posY + this.height, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        this.posX += this.vel;
    }
}