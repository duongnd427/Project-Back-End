const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session1 = require("express-session");

const apiRouter = require('./routers/apiRouter')



let app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session1({
    secret:"bimat",
    resave: false,
    saveUninitialized: false,
    cookie:{secure: false, maxAge: 7*24*60*60*1000}
}))


mongoose.connect("mongodb://localhost/QLNH",(err)=>{
    if (err) console.error(err)
    else console.log("DB connect success!")
})

app.use('/api', apiRouter)


const port = 5050
app.listen(port, (err) => {
    if (err) console.log(err)
    else console.log(`Sever running at ${port}`)
})