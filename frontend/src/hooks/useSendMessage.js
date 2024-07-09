import { useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useSendMessage = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversations } = useConversation()
    const { authUser } = useAuthContext()

    const sendMessage = async (messageContent) => {
        setLoading(true)
        try {
            const res = await fetch(`/api/messages/send/${selectedConversations._id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: messageContent, ...messages })
            })
            const data = await res.json()
            // console.log("usesend data",data);
            if (data.error) {
                throw new Error(data.error)
            }
            setMessages([...messages, { ...data.message, senderId: authUser._id, message: messageContent , createdAt: new Date().toISOString()  }])
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return { sendMessage, loading }
}

export default useSendMessage
