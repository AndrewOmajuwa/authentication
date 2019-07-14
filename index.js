const express = require('express')
const app = express()
const db = require('./db') 

const port = process.env.PORT || 4000

app.get('/test', (req, res) => {
    res.send({
        message: 'welcome to the app'
    })
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})