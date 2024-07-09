import { useEffect, useRef } from "react"
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeletons/messageSkeleton"
import Message from "./Message"
import useListenmessage from "../../hooks/useListenmessage"

const Messages = () => {
  const { messages, loading } = useGetMessages()
  useListenmessage()
  const lastMessageRef = useRef()
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behaviour:"smooth"})
    },100)
  },[messages])

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length > 0 && messages.map((msg, index) => {
        const messageContent = typeof msg === 'string' ? { _id: index, message: msg } : msg;
        return <div key={messageContent._id || index} ref={lastMessageRef}> <Message  message={messageContent} /></div>
      })}
      {loading && [...Array(5)].map((_, idx) => (
        <MessageSkeleton key={idx} />
      ))}
      {!loading && messages.length === 0 && (<p>Send a message✉️ to Start the Conversation...</p>)}
    </div>
  )
}

export default Messages
