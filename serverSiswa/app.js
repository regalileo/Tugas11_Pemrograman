const userRouter = require('./routes/user-routes')
require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const userLogger = require('./middleware/logger')

app.use(bodyParser.json())
app.use(userLogger)
app.use('/api/student',userRouter)

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server run at http://localhost:${port}/api/student`);
})
