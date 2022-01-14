const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./html/index.html");
const browserApp = readFileSync("./html/browser-app.js");
const logo = readFileSync("./html/logo.svg");
const styleSheet = readFileSync("./html/styles.css");

http
  .createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(homePage);
      res.end();
    } else if (url === "/about") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1><u>About us page</u></h1>");
      res.end();
    } else if (url === "/logo.svg") {
      res.writeHead(200, { "content-type": "image/svg+xml" });
      res.write(logo);
      res.end();
    } else if (url === "/styles.css") {
      res.writeHead(200, { "content-type": "text/css" });
      res.write(styleSheet);
      res.end();
    } else if (url === "/browser-app.js") {
      res.writeHead(200, { "content-type": "text/javascript" });
      res.write(browserApp);
      res.end();
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write(
        "<h1><u>Page Not Found.....<a href='/'>Return Home</a></u></h1>"
      );
      res.end();
    }

    console.log("User hit the server");
  })
  .listen(5050);
