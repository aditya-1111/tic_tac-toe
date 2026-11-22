const sketch = require("./sketch");

const loop = function (w) {
  while (sketch.running()) {
    sketch.update(w);
    sketch.draw(w);
  }
};

const main = function () {
  const w = sketch.setup();
  loop(w);
  sketch.teardown();
};

main();
