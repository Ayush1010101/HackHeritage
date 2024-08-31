import express from "express"
import mongoose from "mongoose"
import chalk from "chalk"
import authRouter from "./auth/auth.router.js";
import { checkAuth } from "./utils/token.js";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 3000

mongoose.connection.once('open' , () => {
    console.log(chalk.blue(`Mongo db connected successfully !!`))
})

app.use(express.json())
app.use(cookieParser())
app.use('/auth' , authRouter)

app.get('/' , checkAuth , (req , res) => {
    res.send('Hello world')
})

const startServer = async () => {
    await mongoose.connect('mongodb://localhost:27017/hackheritage')
    app.listen(PORT , () => {
        console.log(chalk.blue(`Listening on url http://localhost:${PORT}/`))
    })
}

startServer()
