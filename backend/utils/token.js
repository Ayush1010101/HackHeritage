import jwt from 'jsonwebtoken'
import patientForAuth from '../auth/user.mongo.js'

const JWT_SECRET = "sdklfjasdklfjsldkfjlsdjfsdjfklk"
const maxAgeInSeconds = 60*60*24

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

async function checkAuth (req , res , next){
    if(req.user) {
        return next()
    }
    const token = req.cookies.jwt
    if(token == null) return res.sendStatus(401)
    
    try{
        const id = await verifyToken(token)
        const Patient = await patientForAuth.findOne({ _id: id }).select('-_id -__v').exec();
        if(!Patient) return res.sendStatus(401)

        req.user = Patient
        next()
    }
    catch(err) {
        console.log(err)
    }
}


export {
    createToken,
    verifyToken,
    checkAuth
}