const express = require('express')
const mongoose = require('mongoose')
const routes=require('./routes/user')
const cors = require('cors')
const cookieParser = require('cookie-parser')


app=express()
app.use(express.json())
app.use( '/api' ,routes)


app.use(cors({
credentials: true,
origin:['http://localhost:4200']
})),

app.use(cookieParser());



mongoose.connect('mongodb://localhost:27017/auth',{

}).then(()=>{
console.log("database connection is ready ...");
}).catch( (err)=> {
    console.log(err); 
}),






app.listen(8000,()=>{

    console.log('server is runnig http://localhosat:8000')
})