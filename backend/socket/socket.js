import { Server } from "socket.io";
import http from "http"
import express from "express"




const app = express()

const server = http.createServer(app)

const io = new Server(server,{
    cors: {
        origin: ["http://localhost:4000"],
        methods: ["GET", "POST"]
        }
})

export const getRecieverSocketId = (receiverId)=>{
    return userSocketMap[receiverId]
} 


const userSocketMap ={}

io.on('connection',(socket)=>{
    console.log("user conneted",socket.id);
    const userId = socket.handshake.query.userId
    if(userId != "undefined") userSocketMap[userId] =socket.id
    io.emit("getOnlineUsers",Object.keys(userSocketMap)) //to send events to all=> clients




    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id);
        delete userSocketMap[userId]
        io.emit("getOnlineUsers",Object.keys(userSocketMap)) //to send events to all clients

    })
})
 




export {app,io,server}