const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/api/hello'){
        res.writeHead(200, {'Content-type' : 'application/json'});
        return res.end(JSON.stringify({
            message:'Hello from Node.js API'
        }));
    }

    if(req.method === 'POST' && req.url === '/api/echo'){
        let body = '';
        req.on('end', ()=>{
            try{
                const data = JSON.parse(body);
                res.writeHead(200, {'Content-type' : 'application/json'});
                return res.end(JSON.stringify({
                    recieved:data
                }));
            }
            catch(error){
                res.writeHead(400, {'Content-type' : 'application/json'});
                return res.end(JSON.stringify({
                    error: 'Invalid JSON format'
                }));
            }
        });
    }

    return;
});

const PORT = 3000;

server.listen(PORT, ()=> {
    console.log(`Server is running at: http://localhost:${PORT}`);
})