import express from "express"
import Queue from "./queue.mongo"

const queueRouter = express.Router();

queueRouter.post('/read' , async (req , res) => {
    const { hospital , city } = req.body;

    const whichHospital = await Queue.findOne({
        hospital , city
    })

    return res.send(whichHospital.queue)
})

queueRouter.post('/newBed' , async (req , res) => {
    const { hospital , city , date , bedNumber , bedType , occupied , leaveDate } = req.body;

    const whichHospital = await Queue.findOne({
        hospital , city
    })

    whichHospital.queue.push({
        date,
        bedNumber,
        bedType,
        occupied,
        leaveDate
    })
    whichHospital.save();
    return res.sendStatus(200)

})

queueRouter.post('/register-hospital' , async (req , res) => {
    const {id , hospital , city } = req.body;

    const newHospital = new Queue({
        id,
        hospital,
        city , 
        queue: []
    })

    newHospital.save()

    return res.sendStatus(200)
})

queueRouter.post('/update' , async (req , res) => {
    const { hospital , city , date , bedNumber , bedType , occupied , leaveDate } = req.body;

    const whichHospital = await Queue.findOne({
        hospital , city
    })

    const findBed = whichHospital.queue.find({
        bedNumber
    })
    findBed.date = date;
    findBed.bedType = bedType;
    findBed.occupied = occupied;
    findBed.leaveDate = leaveDate;

    whichHospital.save()
    return res.sendStatus(200)

})

export default queueRouter