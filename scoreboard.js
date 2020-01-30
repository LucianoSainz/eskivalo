// const scoreBoard = {
//     ctx = undefined,
//     score = undefined,
  
    
  
//     init: function(ctx, score) {
//       this.ctx = ctx;
//       this.score = score;
//     },
  
//     draw: function (score, gameWidth) {
//       this.ctx.fillStyle = "white";
//       this.ctx.font = "20px sans-serif"
//       this.ctx.fillText(Math.floor(score), gameWidth - 10, 10);
//     }

//   }
  
  const scoreBoard = {
    ctx: undefined,
  
    init(ctx) {
      this.ctx = ctx;
      this.ctx.font = "30px sans-serif";
    },
  
    update(score) {
      this.ctx.fillStyle = "white";
      this.ctx.fillText(Math.floor(score),1100, 30);
    }
  };