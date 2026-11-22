const areEqual = function (a, b, c) {
  if (!a || !b || !c) {
    return false;
  }

  return a === b && b === c && a === c;
};

const isGameOver = function (board) {
  rowMatches(board);
  colMatches(board);
  diagonalMatches(board);
  isBoardFilled(board);
};

const rowMatches = function (board) {
  if (areEqual(board[0][0], board[0][1], board[0][2])) {
    console.log("Game Over");
  }

  if (areEqual(board[1][0], board[1][1], board[1][2])) {
    console.log("Game Over");
  }

  if (areEqual(board[2][0], board[2][1], board[2][2])) {
    console.log("Game Over");
  }
};

const colMatches = function (board) {
  if (areEqual(board[0][0], board[1][0], board[2][0])) {
    console.log("Game Over");
  }

  if (areEqual(board[0][1], board[1][1], board[2][1])) {
    console.log("Game Over");
  }

  if (areEqual(board[0][2], board[1][2], board[2][2])) {
    console.log("Game Over");
  }
};

const diagonalMatches = function (board) {
  if (areEqual(board[0][0], board[1][1], board[2][2])) {
    console.log("Game Over");
  }
  if (areEqual(board[2][0], board[1][1], board[0][2])) {
    console.log("Game Over");
  }
};

const isBoardFilled = function (board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (!board[row][col]) {
        return false;
      }
    }
  }
  console.log("Game Over");

  return true;
};

module.exports = { isGameOver };
