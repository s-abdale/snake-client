const connect = require("./client");

console.log("Connecting ...");
connect();


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // method 1 - external function - ✅ WORKS!
  stdin.on("data", handleUserInput);


  /*// method 2 - internal function ✅ WORKS! comment out const handleUserInput if using this
  
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
  */

  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    // \u0003 = ctrl+c. if user inputs ctrl+c, exit the game
    process.exit();
  }
};

setupInput();