const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const port = 5000
const mongoURL = "mongodb://localhost:27017/randColData"
const app = express();

const auth = require('./routes/auth');

//MIDDLEWARES
app.use(cors())
app.use(express.json())

//ROUTES
app.use('/auth',auth);

//MONGODB Connection
mongoose
    .connect(mongoURL)
    .then(()=>{console.log("Mongoose connected")})
    .catch((err)=>{console.log("Cannot connect to mongoose",err)})

//GLOBAL ERROR HANDLER
/* app.use((err,res,req,next)=>{
    err.stat=err.stat || 500;
    err.status= err.status || 'error';

    res.status(err.stat).json({
        message : err.message,
        status : err.status
    })
}) */

app.listen(port,()=>{
    console.log("App running on port : ",port)
})