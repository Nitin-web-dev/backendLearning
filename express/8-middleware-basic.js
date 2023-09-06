const express = require('express')
const app = express();


// req => middleare => res

const Logger = (req,res,next) => {
    const method = req.method
    const url  = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
    next();
}


app.get('/', Logger, (req, res) => {
    res.send('home')
    res.end();
})

app.get('/about', Logger, (req,res) => {
    res.send('about')
    res.end();
})

app.listen(5000, () => console.log('server is 5000'))