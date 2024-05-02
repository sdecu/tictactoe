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
    let player1 = {};
    let player2 = {};
  
    function assignPlayer() {
        player1.name = "Player One";
        player1.token = "X";
        player2.name = "Player Two";
        player2.token = "O";
      } 
  
    function getPlayers() {
      return { player1, player2 };
    }
  
    return { assignPlayer, getPlayers };
  })();

//connect each cell to its corresponding position in the 2d array 
let round = 2;
gameController = (function()  {
  const players = playerModule.getPlayers();
  cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];
  cell1 = document.querySelector("#cell1");
  cell2 = document.querySelector("#cell2");
  cell3 = document.querySelector("#cell3");
  cell4 = document.querySelector("#cell4");
  cell5 = document.querySelector("#cell5");
  cell6 = document.querySelector("#cell6");
  cell7 = document.querySelector("#cell7");
  cell8 = document.querySelector("#cell8");
  cell9 = document.querySelector("#cell9");
  cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];
  
  function playerTurn (x, y, a) {
    if  (a.textContent =="X" || a.textContent == "O") {
      alert("spot already taken")
    } else if (round%2 === 0)  {
      gameBoard.action(x, y, players.player1.token);
      round++;
      a.textContent = "X";
      a.style.color = 'black';
    } else  { 
      gameBoard.action(x, y, players.player2.token);
      round++;
      a.textContent = "O";
      a.style.color = 'black';
    }
    
  }
    cell1.addEventListener('click', (event) => playerTurn (0, 0, cell1));
    cell2.addEventListener('click', (event) => playerTurn (0, 1, cell2));
    cell3.addEventListener('click', (event) => playerTurn (0, 2, cell3));
    cell4.addEventListener('click', (event) => playerTurn (1, 0, cell4));
    cell5.addEventListener('click', (event) => playerTurn (1, 1, cell5));
    cell6.addEventListener('click', (event) => playerTurn (1, 2, cell6));
    cell7.addEventListener('click', (event) => playerTurn (2, 0, cell7));
    cell8.addEventListener('click', (event) => playerTurn (2, 1, cell8));
    cell9.addEventListener('click', (event) => playerTurn (2, 2, cell9));

    return{cells}
})();

newGame = (function ()  {
  resetbtn = document.querySelector("#reset");

  function  reset ()  {
    for (const i of gameController.cells) {
      i.textContent = "Q";
      i.style.color = "rgb(68, 66, 66)";
    }
  }
  resetbtn.addEventListener("click", (event) =>  reset())
})();