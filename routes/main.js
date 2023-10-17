const express = require("express")
const path = require("path")
const router = express.Router()
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../view/main.html")) 
}) 

module.exports = router 

















/*
const express = require('express');
const router = express.Router();
router.get('/', mainView);
module.exports = router; so do that
nah nah this is one router of many routes
u re right u re right
so what do we do here ? 

























*/