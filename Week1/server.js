const http = require('http'); //this line is injecting a dependency library (http library required)

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    //return text to client 
    res.end('Hello World! This is my first Node.js App! \n');

});
//create server is from the http library

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});

