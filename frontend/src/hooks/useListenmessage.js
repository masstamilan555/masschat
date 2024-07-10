import useConversation from "../zustand/useConversation"
import { useSocketContext } from "../context/SocketContext"
import { useEffect } from "react"
import notification from "../assets/sounds/notification1.mp3"
const useListenmessage = () => {
 
    const {socket} = useSocketContext()
    const {messages , setMessages} = useConversation()
    
    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            newMessage.shouldShake =true
            const sound = new Audio(notification)
            sound.play()
            setMessages([...messages,newMessage])

        })
        return ()=> socket?.off("newMessage")
    },[socket,setMessages,messages])
}

export default useListenmessage