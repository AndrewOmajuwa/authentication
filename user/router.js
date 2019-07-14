const {Router} = require('express')
const bcrypt = require('bcrypt')
const User = require('./model')

const router = Router()


//define endpoint to create a user

router.post('/users', (req, res, next) => {
    const {email, password} = req.body
    if(!email || !password){
        res.status(400).send({
            message: 'Please type in a username and password'
        })
    }
    const user = {
        email: email,
        password: bcrypt.hashSync(password, 10)
    }
    User.create(user)
    .then(user => {
        res.status(201).send({
            message: 'A new user has been created',
            "user": user
        })
    })
    .catch(err => next(err))
})

module.exports = router