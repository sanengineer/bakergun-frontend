function startGame(e) {
  let getBotSelect = ["Rock", "Paper", "Scissors"];
  let manSelect = e.currentTarget.getAttribute("value");
  let botRandomSelect = Math.floor(Math.random() * getBotSelect.length);
  let result = this.whoIsWin(manSelect, getBotSelect[botRandomSelect]);

  if (result === "You") {
    this.humanScoreResult++;
    result += " Win";
  }

  if (result === "Bot") {
    this.botScoreResult++;
    result += " Win";
  }

  if (result === "Draw") {
    result = "Draw";
  }

  console.log("You choose: " + manSelect);
  console.log("Bot choose: " + botRandomSelect);
  console.log("Man Score: " + this.humanScoreResult);
  console.log("Bot Score: " + this.botScoreResult);
  console.log(`Result: ${result}`);
}

function whoIsWin(human, bot) {
  if (human === bot) {
    return "Draw";
  }

  if (human === "Rock") {
    if (bot === "Scissors") {
      return "You";
    } else {
      return "Bot";
    }
  }

  if (human === "Paper") {
    if (bot === "Rock") {
      return "You";
    } else {
      return "Bot";
    }
  }

  if (human === "Scissors") {
    if (bot === "Paper") {
      return "You";
    } else {
      return "Bot";
    }
  }
}

// module.exports = {
//   startGame,
//   whoIsWin,
//   getNewRound,
// };

export { whoIsWin, startGame };
