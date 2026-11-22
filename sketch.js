const r = require("raylib");

const running = function () {
  return !r.WindowShouldClose();
};

const setup = function () {
  const screen = {
    width: 800,
    height: 800,
    title: "",
    fps: 50,
  };

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return { screen };
};

const update = function () {
  // change the state
};

const draw = function () {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawRectangle(0, 0, 100, 100, r.RED);

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
