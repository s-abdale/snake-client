const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  // data event:
  conn.on('data',function(message){
    console.log(message);

  });

  // connect event:
  conn.on('connect',function(){
    console.log("Successfully connected to game server");
    // push name to server:
    conn.write(`Name: SAA`);
  });

  return conn;
};

module.exports = connect;