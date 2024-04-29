gameBoard = (function ()    {
    let gameState = new Array(3).fill().map(()=>new Array(3).fill(null));

    function action(i, j, token)   {
        gameState[i][j] = token;
    }

    function getGameState() {
      return gameState;
    }
    return {
        action,
        getGameState
    };
})();

const playerModule = (function () {
    let player1;
    let player2;
  
    function assignPlayer(name) {
      if (!player1) {
        player1 = name;
      } else if (!player2) {
        player2 = name;
      } else {
        alert("Players full");
      }
    }
  
    function getPlayers() {
      return { player1, player2 };
    }
  
    return { assignPlayer, getPlayers };
  })();


  // test 
playerModule.assignPlayer('tony');
playerModule.assignPlayer('test');


gameBoard.action(0, 2, "x");

console.log(gameBoard.getGameState());
const players = playerModule.getPlayers();
const player1Name = players.player1;
console.log(players.player2);

