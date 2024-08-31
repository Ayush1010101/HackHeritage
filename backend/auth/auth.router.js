import express from "express"
import Patient from "./user.mongo.js";
import { createToken } from "../utils/token.js";

const authRouter = express.Router();
const maxageinsec = 60*60*24

authRouter.post('/login' , async (req , res) => {
    const { email , password } = req.body

    try {
        const patient = await Patient.findOne({ email })
        if(patient) {
            if(password === patient.password) {
                const token = createToken(patient._id)
                res.cookie('jwt' , token , { maxAge: maxageinsec * 1000 })
                res.status(200).json({ patient: patient._id })
                return;
            }
            else {
                throw Error('Incorrect password')
            }
        }
        else {
            throw Error('Incorrect email')
        }

    }
    catch(err) {
        console.log(err)
    }
})

authRouter.post('/signup' , async (req , res) => {
    const { email , password , dob } = req.body

    try {
        const patient = await Patient.create({
            email,
            password,
            dob
        })

        const token = createToken(patient._id)
        res.cookie('jwt' , token , { maxAge: maxageinsec * 1000 })
        return res.status(200).json({ patient: patient._id })
    }
    catch(err) {
        console.log(err)
    }
})

export default authRouter