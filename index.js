require('dotenv').config()
const express = require('express')

port = process.env.PORT || 8000

const server = express()
server.get('/hello', (req, res)=>{
    res.status(200).json({message: "hello !!!"})
})
server.listen(port, ()=>{
    console.log(`Listen on port ${port}!`)
})