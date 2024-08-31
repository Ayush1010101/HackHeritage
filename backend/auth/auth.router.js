import express from "express"
import Patient from "./user.mongo";
import { createToken } from "../utils/token";

const authRouter = express.Router();
const maxageinsec = 60*60*24

authRouter.get('/login' , () => {
    
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
        return res.status(200).json({ patient: patient_id })
    }
    catch(err) {
        console.log(err)
    }
})

export default authRouter