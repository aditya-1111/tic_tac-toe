const areAllEqual = function (a, b, c) {
  if (!a || !b || !c) {
    return false;
  }

  return a === b && b === c;
};

const isGameOver = function (board) {
  if (
    checkRowMatches(board) ||
    checkColMatches(board) ||
    checkDiagonalMatches(board)
  ) {
    console.log("Game Over with a winner");

    return true;
  }

  if (isBoardFilled(board)) {
    console.log("Draw");
    return true;
  }

  return false;
};

const checkRowMatches = function (board) {
  for (let row = 0; row < board.length; row++) {
    if (areAllEqual(board[row][0], board[row][1], board[row][2])) {
      return true;
    }
  }

  return false;
};

const checkColMatches = function (board) {
  for (let col = 0; col < board.length; col++) {
    if (areAllEqual(board[0][col], board[1][col], board[2][col])) {
      return true;
    }
  }

  return false;
};

const checkDiagonalMatches = function (board) {
  if (areAllEqual(board[0][0], board[1][1], board[2][2])) {
    return true;
  }
  if (areAllEqual(board[2][0], board[1][1], board[0][2])) {
    return true;
  }

  return false;
};

const isBoardFilled = function (board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (!board[row][col]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = { isGameOver };
