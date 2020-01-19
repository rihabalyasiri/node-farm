const http = require("http");
const url =require('url')

const server = http.createServer((req, res) => {
  const pathName = req.url;
  console.log(pathName);
  console.log(url.parse())
  switch (pathName) {
    case "/":
      res.end("Overview");
      break;
    case "/overview":
      res.end("Overview");
      break;
    case "/api":
      res.end("Api");
      break;
    case "/products":
      res.end("Products");
      break;
    default:
      res.writeHead(404, {
        "Content-type": "text/html"
      });
      res.end("<h1>Page not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening...");
});
