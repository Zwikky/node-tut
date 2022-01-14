const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   const text = fs.readFileSync("./content/big.txt", "utf8");
  //   res.end(text);
  const fileStream = fs.createReadStream("./content/big.txt", "utf8");
  fileStream.on("data", () => {
    fileStream.pipe(res);
  });
  fileStream.on("error", (err) => {
    res.end(err);
  });
  //   res.end(text);
});

server.listen(5050, () => {
  console.log("Server running on port: 5050...");
});
