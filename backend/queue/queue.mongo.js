import mongoose from "mongoose"

const queue = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    bedNumber: {
        type: String,
        required: true,
    },
    bedType: {
        type: String,
        required: true,
    },
    occupied: {
        type: Boolean,
        required: true,
    },
    leaveDate: {
        type: Date,
    }
})

const queueSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    hospital: {
        type: String,
        required: true,
        unique: true,
    },
    city: {
        type: String,
        required: true
    },
    queue: {
        type: [queue],
        required: true
    }
})

const Queue = mongoose.model('Queue' , queueSchema)

export default Queue