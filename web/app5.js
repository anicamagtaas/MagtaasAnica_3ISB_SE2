const http = require('http');

const server = http
.createServer((req, res) => {
  if(req.url === "/pageOne"){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<html><body><h1>Page One</h1></body></html>");
    res.write("<a href='/pageTwo'>go to Page Two</a>");
    res.end();
  }else if(req.url === "/pageTwo"){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<html><body><h1>Page Two</h1></body></html>");
    res.write("<a href='/pageOne'>go back to Page One</a>");
    res.end();
  }else {
    res.writeHead(404, {"Content-Type":"text/html"});
    res.write("<html><body><h1>404: Page Not Found</h1></body></html>");
    res.write("<a href='/'>go to Page One</a>");
    res.end();
  }
})
.listen(3000);


console.log("listening to port 3000");