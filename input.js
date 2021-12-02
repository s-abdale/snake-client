// const connect = require("./client");

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
  // let delay = 0;

  if (key === '\u0003') {
    // \u0003 = ctrl+c. if user inputs ctrl+c, exit the game
    console.log(`GOODBYE`)
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
    connection.write(`Say: Hello!`);
    console.log(`Sent: hello!`);
  } else if (key === "2") {
    connection.write(`Say: Nice move!`);
    console.log(`Sent: nice move!`);
  } else if (key === "0") {
    connection.write(`Say: C U L8R`);
  } else {
    console.log(`Sent: c u l8r`);
    console.log(`ERROR: incorrect input, try again!`)
  };
};

module.exports = setupInput;