const express = require("express")
const app = express() 
const mainRouter = require(__dirname + "/routes/main.js") //
const secondRouter = require(__dirname + "/routes/second.js")
const PORT = process.env.PORT || 8000;
app.use("/",mainRouter)
app.use("/",secondRouter)
app.use(express.static('static'));
app.listen(PORT,console.log("working"))