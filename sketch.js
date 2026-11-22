const r = require("raylib");
const { drawBoard, updateBoard, updatePosition } = require("./board.js");
const { isGameOver } = require("./gameLogic.js");

const running = function () {
  return !r.WindowShouldClose();
};

const setup = function () {
  const screen = {
    width: 900,
    height: 900,
    title: "Tic Tac Toe",
    fps: 50,
  };

  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const signs = ["O", "X"];

  const player = {
    current: "O",
  };

  const palette = {
    box: r.WHITE,
    currentBox: r.GREEN,
  };

  const position = {
    row: 0,
    col: 0,
  };

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return { screen, board, signs, player, palette, position };
};

const update = function ({ signs, player, position, board }) {
  if (r.IsKeyPressed(r.KEY_ENTER)) {
    updateBoard(player, position, board, signs);
    isGameOver(board);
  }

  updatePosition(position);
};

const draw = function ({ screen, position, board, palette }) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  drawBoard(board, position, screen, palette);

  r.EndDrawing();
};

const teardown = function () {
  r.CloseWindow();
};

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};
