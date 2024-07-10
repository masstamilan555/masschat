import { createContext, useEffect, useState ,useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client"


 const SocketContext = createContext()
export const useSocketContext = ()=>{
    return useContext(SocketContext)
}



export const SocketContextProvider =({children})=>{
    const [socket ,  setsocket] = useState(null)
    const [onlineUsers,setonlineUsers] = useState([])
    const {authUser} = useAuthContext()


    useEffect(()=>{
        if(authUser){
            const socket = io("https://masschat.onrender.com",{
                query:{userId:authUser._id}
            })
            setsocket(socket)
            socket.on("getOnlineUsers",(users)=>{
                setonlineUsers(users)
            })
            return ()=>socket.close()
        }else{
            if(socket){
                socket.close()
                setsocket(null)
            }
        }
    },[authUser])
    return (
        <SocketContext.Provider value={{socket , onlineUsers}}>{children}</SocketContext.Provider>
    )
}