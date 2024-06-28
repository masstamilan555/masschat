import express from "express"
import dotenv from "dotenv"
import bodyparser from "body-parser"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.route.js"
import connectToMongoDB from "./db/connectToMongoDB.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"



dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(bodyparser.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)

app.get('/',(req,res)=>{
    res.json("helllloooo")
})

app.listen(PORT,()=>{
    connectToMongoDB()
    console.log("app running in port 8000");
})