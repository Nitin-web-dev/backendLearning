const express = require('express')
const app= express()
const {products} =  require('./data.js')

app.get('/', (req, res) => {
    res.status(200).json(products)
})

app.listen(5000,() => console.log('server is 5000'))