const http = require("http")

// normal server 
// const server = http.createServer((req, res) => {
//     res.end("wlcm");
// })


// Using Event Emitter API
const server = http.createServer();
// emits request event
// subscribe to it / listen to it/ respond to it

server.on('request', (req, res)=> {
    res.end('welcome')
})

server.listen(5000 )