const express = require('express')
const path = require('path')


const app = express();

// setup static and middleware
app.use(express.static('./methods-public'));

app.get('/', (req, res) => {
    res.status(201).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
})

app.all('*', (req,res) => {
    res.status(404).send('page not found')
})

app.listen(5000, () => console.log('server 5000'))