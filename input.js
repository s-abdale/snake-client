let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {

  if (key === '\u0003') {
    // \u0003 = ctrl+c
    console.log(`GOODBYE`)
    // if ctrl+c, exit the game
    process.exit();
  } else if (key === "w") {
    connection.write(`Move: up`);
    console.log(`Moved up`);
  } else if (key === "a") {
    connection.write(`Move: left`);
    console.log(`Moved left`);
  } else if (key === "s") {
    connection.write(`Move: down`);
    console.log(`Moved down`);
  } else if (key === "d") {
    connection.write(`Move: right`);
    console.log(`Moved right`);
  } else if (key === "1") {
    // chat key - greeting
    connection.write(`Say: Hello!`);
    console.log(`Sent: hello!`);
  } else if (key === "2") {
    // chat key - comment
    connection.write(`Say: Nice move!`);
    console.log(`Sent: nice move!`);
  } else if (key === "0") {
    // chat key - sign off
    connection.write(`Say: C U L8R`);
    console.log(`Sent: c u l8r`);
  } else {
    console.log(`ERROR: incorrect input, try again!`)
  };
};

module.exports = setupInput;