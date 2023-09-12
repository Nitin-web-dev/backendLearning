const http = require('http')

const server = http.createServer((req,res) => {
    switch(req.url){
        case '/': 
                res.writeHead(200, {'content-type':'text/html'})
                res.write('<h1>home</h1>')
                res.end();
                break;
        case '/about': 
                res.writeHead(200, {'content-type':'text/html'})
                res.write('<h1>about</h1>')
                res.end();
                break;
        default: 
                res.writeHead(200, {'content-type':'text/html'})
                res.write('<h1>page not found</h1>')
                res.end();
                break;
        
    }
})
server.listen(5000)