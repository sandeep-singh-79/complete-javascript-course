/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var arr_scores, round_score, current_player, is_game_active, previous_die_roll;

init_game();

function init_game() {
  arr_scores = [0, 0];
  round_score = 0;
  current_player = 0;
  is_game_active = true;
  previous_die_roll = 0;

  // concatinating the current player to ease access to the score panels
  // and reduce code redundancy
  //document.querySelector("#current-" + current_player).textContent = dice;
  // document.querySelector("#current-" + current_player).innerHTML = `<em>${dice}</em>`;

  document.querySelector(".dice").style.display = "none";

  for (let i = 0; i <= 1; ++i) {
    document.getElementById(`score-${i}`).textContent = 0;
    document.getElementById(`current-${i}`).textContent = 0;
    document.getElementById(`name-${i}`).textContent = `Player ${i + 1}`;
    document.querySelector(`.player-${i}-panel`).classList.remove("winner");
    document.querySelector(`.player-${i}-panel`).classList.remove("active");
  }
  document.querySelector(`.player-0-panel`).classList.add("active");
}

// a callback function is a function that is not called by us explicitly
// It will be called by the JS runtime on event action.
// These are meant to be passed to the calling function - eg, addEventListener
// function doSmthngOnBtnClick() {}
// document.querySelector(".btn-roll").addEventListener('click', doSmthngOnBtnClick);
// alternately, we can use an anonymous function as below:
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (is_game_active) {
    // Step 1. Generate random number
    var dice = Math.floor(Math.random() * 6 + 1);
    // Step 2. display result
    var diceDOM = document.querySelector(".dice");
    /* var dice_src_path = diceDOM.src.toString();
    previous_die_roll = parseInt(
      dice_src_path.substr(dice_src_path.length - 5, 1)
    ); */
    diceDOM.style.display = "block";
    diceDOM.src = `dice-${dice}.png`;
    // Step 3. update the round score only if the die roll !== 1
    if (dice === 6 && previous_die_roll === 6) {
      arr_scores[current_player] = 0;
      //round_score = 0;
      document.getElementById(`score-${current_player}`).textContent =
        arr_scores[current_player];
      //document.getElementById(`current-${current_player}`).textContent = 0;
      switch_player();
    }
    if (dice !== 1) {
      document.querySelector(".dice").style.display = "block";
      round_score += dice;
      document.querySelector(
        `#current-${current_player}`
      ).textContent = round_score;
    } else {
      switch_player();
    }

    previous_die_roll = dice;
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (is_game_active) {
    // step 1. add current score to global score
    arr_scores[current_player] += round_score;
    // update the UI
    document.querySelector(`#score-${current_player}`).textContent =
      arr_scores[current_player];
    // check if player won the game
    if (arr_scores[current_player] >= 100) {
      document.querySelector(
        `#name-${current_player}`
      ).textContent = `Winner!!!`;
      document.querySelector(`.dice`).style.display = "none";
      document
        .querySelector(`.player-${current_player}-panel`)
        .classList.add("winner");
      document
        .querySelector(`.player-${current_player}-panel`)
        .classList.remove("active");
      is_game_active = false;
    } else {
      // switch player
      switch_player();
    }
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
