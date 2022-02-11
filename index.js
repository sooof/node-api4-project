require('dotenv').config()
const server = require('./api/server')

port = process.env.PORT || 8000


server.listen(port, ()=>{
    console.log(`\n*** Server Running on http://localhost:${port} ***\n!`)
})