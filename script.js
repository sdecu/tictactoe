gameBoard = (function ()    {
    let gameState = new Array(3).fill().map(()=>new Array(3).fill(undefined));

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
  assignPlayer();
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
      playerScore.run();
      a.textContent = players.player1.token;
      a.style.color = 'black';
    } else  { 
      gameBoard.action(x, y, players.player2.token);
      round++;
      playerScore.run();
      a.textContent = players.player2.token;
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
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        gameBoard.action(i, j, undefined);
      }
    }

    for (const i of gameController.cells) {
      i.textContent = "Q";
      i.style.color = "rgb(68, 66, 66)";
      
    }
    round = 2;
  }

  resetbtn.addEventListener("click", (event) =>  reset());
  return  {reset}
})();

changePlayerName  = (function ()  {
  p1Name = document.querySelector("#p1_name");
  p2Name = document.querySelector("#p2_name");
  p1NameBtn = document.querySelector("#p1_name_btn");
  p2NameBtn = document.querySelector("#p2_name_btn");
  nameBtns = [p1NameBtn, p2NameBtn];
  
function  changeName(x)  {
  let name = prompt("What's your name?");
  x.textContent = `${name}`;
}

p1NameBtn.addEventListener('click', (event) =>  changeName(p1Name));
p2NameBtn.addEventListener('click', (event) =>  changeName(p2Name));
})();

playerScore = (function() {
 const p1ScoreSelector = document.querySelector("#p1_score");
 const p2ScoreSelector = document.querySelector("#p2_score");
let p1Score = 0;
let p2Score = 0 

  function run()  {
    if ( 
  // Check rows
  gameBoard.getGameState().at(0).at(0) == "X" &&
  gameBoard.getGameState().at(0).at(1) == "X" &&
  gameBoard.getGameState().at(0).at(2) == "X" ||
  gameBoard.getGameState().at(1).at(0) == "X" &&
  gameBoard.getGameState().at(1).at(1) == "X" &&
  gameBoard.getGameState().at(1).at(2) == "X" ||
  gameBoard.getGameState().at(2).at(0) == "X" &&
  gameBoard.getGameState().at(2).at(1) == "X" &&
  gameBoard.getGameState().at(2).at(2) == "X" ||

  // Check columns
  gameBoard.getGameState().at(0).at(0) == "X" &&
  gameBoard.getGameState().at(1).at(0) == "X" &&
  gameBoard.getGameState().at(2).at(0) == "X" ||
  gameBoard.getGameState().at(0).at(1) == "X" &&
  gameBoard.getGameState().at(1).at(1) == "X" &&
  gameBoard.getGameState().at(2).at(1) == "X" ||
  gameBoard.getGameState().at(0).at(2) == "X" &&
  gameBoard.getGameState().at(1).at(2) == "X" &&
  gameBoard.getGameState().at(2).at(2) == "X" ||

  // Check diagonals
  gameBoard.getGameState().at(0).at(0) == "X" &&
  gameBoard.getGameState().at(1).at(1) == "X" &&
  gameBoard.getGameState().at(2).at(2) == "X" ||
  gameBoard.getGameState().at(0).at(2) == "X" &&
  gameBoard.getGameState().at(1).at(1) == "X" &&
  gameBoard.getGameState().at(2).at(0) == "X") {
  p1Score++;
  p1ScoreSelector.textContent = `${p1Score}`;
 } else if (
  // Check rows
  gameBoard.getGameState().at(0).at(0) == "O" &&
  gameBoard.getGameState().at(0).at(1) == "O" &&
  gameBoard.getGameState().at(0).at(2) == "O" ||
  gameBoard.getGameState().at(1).at(0) == "O" &&
  gameBoard.getGameState().at(1).at(1) == "O" &&
  gameBoard.getGameState().at(1).at(2) == "O" ||
  gameBoard.getGameState().at(2).at(0) == "O" &&
  gameBoard.getGameState().at(2).at(1) == "O" &&
  gameBoard.getGameState().at(2).at(2) == "O" ||

  // Check columns
  gameBoard.getGameState().at(0).at(0) == "O" &&
  gameBoard.getGameState().at(1).at(0) == "O" &&
  gameBoard.getGameState().at(2).at(0) == "O" ||
  gameBoard.getGameState().at(0).at(1) == "O" &&
  gameBoard.getGameState().at(1).at(1) == "O" &&
  gameBoard.getGameState().at(2).at(1) == "O" ||
  gameBoard.getGameState().at(0).at(2) == "O" &&
  gameBoard.getGameState().at(1).at(2) == "O" &&
  gameBoard.getGameState().at(2).at(2) == "O" ||

  // Check diagonals
  gameBoard.getGameState().at(0).at(0) == "O" &&
  gameBoard.getGameState().at(1).at(1) == "O" &&
  gameBoard.getGameState().at(2).at(2) == "O" ||
  gameBoard.getGameState().at(0).at(2) == "O" &&
  gameBoard.getGameState().at(1).at(1) == "O" &&
  gameBoard.getGameState().at(2).at(0) == "O"
)
  {
  p2Score++;
  p2ScoreSelector.textContent = `${p2Score}`;
 }
}
return{run}
})();