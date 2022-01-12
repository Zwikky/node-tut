const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("Welcome Home");
  } else if (req.url === "/adverts") {
    res.end("Adverts Section");
  } else {
    res.end(`
      <h1>Oopsie!!!</h1>
      <p>We can't seem to find the page you are looking for.</p>
      <a href='/'>Go Home</a>
    `);
  }
  // res.writeHead();
});

server.listen(5050);
