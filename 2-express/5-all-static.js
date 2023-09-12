const express = require('express')
const path = require('path')

const app = express();

// add middleware and static file
app.use(express.static('./methods-public'))

// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//      adding to static assets
//      SSR
// })


app.all('*', (req,res) => { 
    res.status(404).send('page not')
})


app.listen(5000, () => console.log('server 5000'))