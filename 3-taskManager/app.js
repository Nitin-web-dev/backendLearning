const express = require('express');
require('dotenv').config();
const connectDB = require('./db/connect');
const tasks = require("./routes/tasksRoutes")
const port = process.env.PORT || 5000
const app = express();
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware  = require('./middleware/error-handler')


// middleware
app.use(express.static('./public'))
app.use(express.json());


// routes
app.use('/api/v1/tasks', tasks)
// if no page found this middleware will autometic hit
app.use(notFound);
// if some error accur
app.use(errorHandlerMiddleware)



//db connect
// listen 

const start = async ()  => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`server is running on ${port}`))
    }catch(err){
        console.log(err)
    }
}


start();
