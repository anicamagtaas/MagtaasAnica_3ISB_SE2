const http = require('http');

const server = http
.createServer((req, res) => {
  if(req.url === "/first"){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<html><body><h1>GlobalCovidDb</h1></body></html>");
    res.write("<a href='/second'>go to Second Page</a>");
    res.end();
  }else if(req.url === "/second"){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<html><body><h1>stat</h1></body></html>");
    res.write("<a href='/status'>Click Here for Status</a>");
    res.end();
  }else (req.url === "/status") {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write console.log(covid.worldwide);
    res.write("<a href='/'>go back to first page</a>");
    res.end();
  }
})
.listen(3000);


console.log("listening to port 3000");