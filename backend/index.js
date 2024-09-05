import express from "express"
import mongoose from "mongoose"
import chalk from "chalk"
import authRouter from "./auth/auth.router.js";
import { checkAuth } from "./utils/token.js";
import cookieParser from "cookie-parser";
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the filename and directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express();

const PORT = 3000

mongoose.connection.once('open' , () => {
    console.log(chalk.blue(`Mongo db connected successfully !!`))
})

app.use(express.json())
app.use(cookieParser())
//app.use('/auth' , authRouter)

app.get('/' , checkAuth , (req , res) => {
    res.send('Hello world')
})

// polluting start
app.use(express.static(path.join(__dirname , '..')))
app.get('/meds' , (req , res) => {
    res.sendFile(path.join(__dirname , '..' , '/meds.html'))
})
app.get('/about' , (req , res) => {
    res.sendFile(path.join(__dirname , '..' , '/about.html'))
})
app.get('/bb' , (req , res) => {
    res.sendFile(path.join(__dirname , '..' , '/bb.html'))
})
app.get('/login' , (req , res) => {
    res.sendFile(path.join(__dirname , '..' , '/login.html'))
})
app.get('/personal' , (req , res) => {
    res.sendFile(path.join(__dirname , '..' , '/personal_details.html'))
})
app.get('/recommendation' , (req , res) => {
    res.sendFile(path.join(__dirname , '..' , '/recommendation.html'))
})
app.get('/signup' , (req , res) => {
    res.sendFile(path.join(__dirname , '..' , '/signup.html'))
})

const startServer = async () => {
    //await mongoose.connect('mongodb://localhost:27017/hackheritage')
    app.listen(PORT , () => {
        console.log(chalk.blue(`Listening on url http://localhost:${PORT}/`))
    })
}

startServer()
