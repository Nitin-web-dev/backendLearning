const express = require('express')
const app = express();

app.get('/', (req,res) => {
    console.log('user hit the resource')
    res.status(200).send('home page')
})

app.get('/about', (req, res) => {
    res.status(200).send('about page')
})

app.all('*',(req,res) => {
    res.status(404).send('page not found')
})

app.listen(5000, () => console.log('server is 5000'))


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen