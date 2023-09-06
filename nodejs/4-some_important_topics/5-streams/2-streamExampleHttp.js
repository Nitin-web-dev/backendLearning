  const http = require("http")
  const fs = require('fs')

  const server = http.createServer((req,res) => {
    const fileStream = fs.createReadStream('../../content/bigText.txt', {encoding: 'utf-8'})
    fileStream.on('open',() => {
        fileStream.pipe(res);
    })
    fileStream.on('error', (err) => res.end(err))
  })

  server.listen(5000,() => console.log('server is 5000'))