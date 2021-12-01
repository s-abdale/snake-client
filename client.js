const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  // data event:
  conn.on('data',function(message){
    console.log(message);
  });

  // connect event object:
  conn.on('connect',function(){
    console.log("Successfully connected to game server");

    // push name to server:
    conn.write(`Name: SAA`);

    /*
    // using setInterval - moves snake up indefinitely
    setInterval(() => {
      conn.write(`Move: up`)
    }, 50);
    
    // using setTimeout - moves snake up incrementally
    // move snake up:
    setTimeout(() => {
      conn.write(`Move: up`)
    }, 250);

    // move snake left:
    setTimeout(() => {
      conn.write(`Move: left`)
    }, 300);

    // move snake up again:
    setTimeout(() => {
      conn.write(`Move: up`)
    }, 350);

    // move snake left again:
    setTimeout(() => {
      conn.write(`Move: left`)
    }, 400);
    
    // move snake up again:
    setTimeout(() => {
      conn.write(`Move: up`)
    }, 450);
    */



  });

  return conn;
};

module.exports = connect;


// Note on game commands:
/*
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/