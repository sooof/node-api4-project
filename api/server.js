
const express = require('express')


const server = express()
server.use(express.json())

server.get('/hello', (req, res)=>{
    res.status(200).json({message: "hello !!!"})
})

// [GET] /api/users
server.use('/api/users', (req, res)=>{
    // http get :9000/api/users -v
    res.send("TEST: Returns an array users.")


})
// [POST] /api/register
server.use('/api/register', (req, res)=>{
    // http post :9000/api/register  username=ff password=hhhhh  -v
    res.json("TEST: Creates a user from { username, password } in the request body, responds with newly created user.")

})
// [POST] /api/login
server.use('/api/login', (req, res)=>{
    // http post :9000/api/login  username=ff password=hhhhh  -v
    res.json("TEST: Checks { username, password } in the request body, responds with a welcome message.")

})

server.get('/', (req, res) => {
  res.send(`
    <h2>Test API</h>
    <p>Welcome to the TEST API</p>
  `);
});

module.exports = server;
