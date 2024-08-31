function createToken (id) {
    return jwt.sign({ id } , JWT_SECRET , { expiresIn: maxAgeInSeconds })
}

function verifyToken(token){
    return new Promise((resolve , reject) => {

        jwt.verify(token , JWT_SECRET  , (err , decoded) => {
            if(err || !decoded || typeof decoded === 'string'){
                resolve(null)
            }
            else {
                resolve(decoded.id)
            }
        })

    })
}

export {
    createToken,
    verifyToken
}