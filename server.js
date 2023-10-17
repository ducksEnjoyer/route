const express = require("express")
const app = express() 
const mainRouter = require(__dirname + "/routes/main.js") //
const secondRouter = require(__dirname + "/routes/second.js")

app.use("/",mainRouter)
app.use("/",secondRouter)
app.use(express.static('static'));
app.listen(8000,console.log("working"))