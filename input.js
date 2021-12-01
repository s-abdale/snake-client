const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    // \u0003 = ctrl+c. if user inputs ctrl+c, exit the game
    process.exit();
  }
};


module.exports = setupInput;