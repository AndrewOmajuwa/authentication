const jwt = require('jsonwebtoken')

const secretKey = 'hbajhbilbjhsajdnfllknlncxla;forrnlclms;'

 toJWT = data => {
    return jwt.sign(data, secretKey, {expires: '2h'})
}

toData = token => {
    return jwt.verify(token, secretKey)
}

module.exports = { toData, toJWT }