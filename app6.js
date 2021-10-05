const http = require('http');

const server = http
.createServer((req, res) => {
  if(req.url === "/Juan"){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<html><body><h1>Hello Juan</h1></body></html>");
    res.write("<a href='/Pedro'>go to other page</a>");
    res.end();
  }else if(req.url === "/Pedro"){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<html><body><h1>Hello Pedro</h1></body></html>");
    res.write("<a href='/pageOne'>go back to first page</a>");
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