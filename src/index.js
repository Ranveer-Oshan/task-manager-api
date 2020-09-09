const express = require('express')
require('./db/mongoose')
const taskRouter = require('./routers/tasks')
const userRouter = require('./routers/users')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
