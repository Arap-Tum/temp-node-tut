const http = require('http');

// Callbsck
const server = http.createServer((req, res) => {
        console.log('request event')
        res.end('Hello World');
})

server.listen(5000, () => {
    console.log('Sever listen on port: 5000.....')
})