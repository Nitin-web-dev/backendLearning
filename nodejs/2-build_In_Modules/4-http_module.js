const http = require('http')


const server = http.createServer((req, res) => {
    // req.url // check the url at localhost:5000/
    if(req.url === '/'){
        
        res.end('this is home page');
    }
    else if (req.url === '/about'){
        res.end('this is about page');
    } else
    {
    
    res.end(`
    <h1>page not found 404</h1>
    <a href='/'>back </a>
    `);
}
})

server.listen(5000, () => console.log('server is on 5000'))