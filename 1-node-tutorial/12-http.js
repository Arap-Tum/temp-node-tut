const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page');

      }else if (req.url === '/about') {
            res.end('Here is our short History');
        }else {  

    res.end(`<h1>Oops!</h1>  <p>Page Not Found</p> <a href="/"> Home page</a>`)
    }
});

server.listen(5000);