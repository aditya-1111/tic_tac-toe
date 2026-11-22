const r = require("raylib");
const { isEqual } = require("./geometry.js");

const drawBoard = function (board, position, screen, palette) {
  const width = screen.width / board[0].length;
  const height = screen.height / board.length;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const x = width * j;
      const y = height * i;

      const boxColor = isEqual(position, { row: i, col: j })
        ? palette.currentBox
        : palette.box;

      r.DrawRectangle(x, y, width, height, boxColor);
      r.DrawRectangleLinesEx({ x, y, width, height }, 1, r.BLACK);
      r.DrawText(board[i][j], x + width / 2.3, y + height / 2.5, 40, r.BLACK);
    }
  }
};

const updateBoard = function (player, { row, col }, board, signs) {
  if (!board[row][col]) {
    board[row][col] = player.current;
    player.current = player.current === signs[0] ? signs[1] : signs[0];
  }
};

const updatePosition = function (position) {
  if (r.IsKeyPressed(r.KEY_UP) && position.row > 0) {
    position.row -= 1;
  }
  if (r.IsKeyPressed(r.KEY_DOWN) && position.row < 2) {
    position.row += 1;
  }
  if (r.IsKeyPressed(r.KEY_LEFT) && position.col > 0) {
    position.col -= 1;
  }
  if (r.IsKeyPressed(r.KEY_RIGHT) && position.col < 2) {
    position.col += 1;
  }
};

module.exports = {
  drawBoard,
  updateBoard,
  updatePosition,
};
