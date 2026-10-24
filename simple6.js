const http = require("http");
const os = require("os");
const path = require("path");
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("visit", () => console.log("User visited"));

http.createServer((req, res) => {
  event.emit("visit");
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Welcome\n" +
    "OS: " + os.platform() + "\n" +
    "File: " + path.basename(__filename));
}).listen(3000);

console.log("Server running at http://localhost:3000");