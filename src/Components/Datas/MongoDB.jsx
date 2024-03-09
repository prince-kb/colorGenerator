const express = require('express')
const app = express();

app.get('/editor',(req,res)=>{
    res.send("Hello")
})
app.listen(5173,()=>{
    console.log("Hello")
})
module.exports = app;