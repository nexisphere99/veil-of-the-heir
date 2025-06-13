setup.shuffle = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

setup.newGame = function () {
  const { gridSize, imgTypes } = State.variables;
  const totalCards = gridSize * gridSize;
  let images = [];

  for (let i = 0; i < totalCards / 2; i++) {
    images.push(i % imgTypes);
    images.push(i % imgTypes);
  }

  setup.shuffle(images);
  State.variables.images = images;

  State.variables.board = images.map((id) => ({
    id,
    matched: false,
    revealed: false,
  }));

  State.variables.firstClick = null;
  State.variables.secondClick = null;
  State.variables.matchedPairs = 0;
  State.variables.timer = State.variables.timeLimit;
  State.variables.gameActive = true;
};

setup.cardClick = function (index) {
  if (!State.variables.gameActive) return;

  let board = State.variables.board;
  let card = board[index];

  if (card.revealed || card.matched) return;

  if (State.variables.firstClick === null) {
    card.revealed = true;
    State.variables.firstClick = index;
  } else if (
    State.variables.secondClick === null &&
    index !== State.variables.firstClick
  ) {
    card.revealed = true;
    State.variables.secondClick = index;

    // Delay before checking match
    setTimeout(() => {
      const firstCard = board[State.variables.firstClick];
      const secondCard = board[State.variables.secondClick];

      if (firstCard.id === secondCard.id) {
        firstCard.matched = true;
        secondCard.matched = true;
        State.variables.matchedPairs += 1;
        if (
          State.variables.matchedPairs ===
          (State.variables.gridSize * State.variables.gridSize) / 2
        ) {
          State.variables.gameActive = false;
          Alert("🎉 You win!");
        }
      } else {
        firstCard.revealed = false;
        secondCard.revealed = false;
      }

      State.variables.firstClick = null;
      State.variables.secondClick = null;
      Engine.show();
    }, 600);
  }

  Engine.show();
};

setup.flipOpenAll = function () {
  State.variables.board.forEach((c) => {
    c.matched = true;
    c.revealed = true;
  });
  State.variables.matchedPairs = State.variables.board.length / 2;
  State.variables.gameActive = false;
};
