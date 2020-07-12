/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let arr_scores, round_score, current_player;

init_game();

function init_game() {
  arr_scores = [0, 0];
  round_score = 0;
  current_player = 0;

  // concatinating the current player to ease access to the score panels
  // and reduce code redundancy
  //document.querySelector("#current-" + current_player).textContent = dice;
  // document.querySelector("#current-" + current_player).innerHTML = `<em>${dice}</em>`;

  document.querySelector(".dice").style.display = "none";

  for (let i = 0; i <= 1; ++i) {
    document.getElementById(`score-${i}`).textContent = 0;
    document.getElementById(`current-${i}`).textContent = 0;
    document.getElementById(`name-${i}`).textContent = `Player ${i + 1}`;
  }
}

// a callback function is a function that is not called by us explicitly
// It will be called by the JS runtime on event action.
// These are meant to be passed to the calling function - eg, addEventListener
// function doSmthngOnBtnClick() {}
// document.querySelector(".btn-roll").addEventListener('click', doSmthngOnBtnClick);
// alternately, we can use an anonymous function as below:
document.querySelector(".btn-roll").addEventListener("click", function () {
  // Step 1. Generate random number
  var dice = Math.floor(Math.random() * 6 + 1);
  // Step 2. display result
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = `dice-${dice}.png`;
  // Step 3. update the round score only if the die roll !== 1
  if (dice !== 1) {
    document.querySelector(".dice").style.display = "block";
    round_score += dice;
    document.querySelector(
      `#current-${current_player}`
    ).textContent = round_score;
  } else {
    switch_player();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  // step 1. add current score to global score
  arr_scores[current_player] += round_score;
  // update the UI
  document.querySelector(`#score-${current_player}`).textContent =
    arr_scores[current_player];
  // check if player won the game
  if (arr_scores[current_player] >= 100) {
    document.querySelector(`#name-${current_player}`).textContent = `Winner!!!`;
    document.querySelector(`.dice`).style.display = "none";
    document
      .querySelector(`.player-${current_player}-panel`)
      .classList.add("winner");
    document
      .querySelector(`.player-${current_player}-panel`)
      .classList.remove("active");
  } else {
    // switch player
    switch_player();
  }
});

function switch_player() {
  round_score = 0;
  current_player === 0 ? (current_player = 1) : (current_player = 0);
  for (let i = 0; i <= 1; ++i) {
    document.getElementById(`current-${i}`).textContent = 0;
  }

  document.querySelector(`.player-0-panel`).classList.toggle("active");
  document.querySelector(`.player-1-panel`).classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}

//document.querySelector(".btn-new").addEventListener("click", function () { init_game() });
document.querySelector(".btn-new").addEventListener("click", init_game);
