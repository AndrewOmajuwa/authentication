const express = require('express')
const app = express()
const db = require('./db') 
const bodyParser = require('body-parser')
const userRouter = require('./user/router')
const jsonParser = bodyParser.json()

const port = process.env.PORT || 4000

app.get('/test', (req, res) => {
    res.send({
        message: 'welcome to the app'
    })
})

app.use(jsonParser)
app.use(userRouter)


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})