import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"


const useGetMessages = () => {
    const [loading,setloading] = useState(false)
    const {messages , setMessages ,selectedConversations} =useConversation()
    useEffect(()=>{
        const getMessages = async ()=>{
            setloading(true)
            try {
                const res = await fetch(`/api/messages/${selectedConversations._id}`)
                const data = await res.json()
                // console.log("usegetmsg",data);
                if(data.error){
                    throw new Error(data.error)
                }
                setMessages(data)
            } catch (error) {
                toast.error(error.message)
            }finally{
                setloading(false)
            }
        }
        if(selectedConversations?._id)  getMessages()
    },[selectedConversations?._id,setMessages])
return {messages , loading}

}

export default useGetMessages