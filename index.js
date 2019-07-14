const express = require('express')
const app = express()
const port = 4000

app.get('/test', (req, res) => {
    res.send({
        message: 'welcome to the app'
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})