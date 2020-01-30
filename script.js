window.onload = function () {
    document.getElementById("start-button").onclick = function () {
    document.querySelector(".eskivalo").style.display="none";
      game.init();
  
    };
    //game.init('myGame');
    document.getElementById("try").onclick = function () {
      document.querySelector("#myGame").style.display = "flex";
      document.querySelector(".gameO").style.display = "none";
      game.init()
  
  };
}
