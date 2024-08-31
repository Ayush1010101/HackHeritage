import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }
})

const Patient = mongoose.model('Patient' , patientSchema)

export default Patient