const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const text = fs.readFileSync("./content/big.txt", "utf8");
  res.end();
});

server.listen(5050, () => {
  console.log("Server running on port: 5050...");
});
