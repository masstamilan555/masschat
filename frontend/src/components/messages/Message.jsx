import { useAuthContext } from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime"
import useConversation from "../../zustand/useConversation"

const Message = ({ message }) => {
  const { authUser } = useAuthContext()
  const { selectedConversations } = useConversation()

  const fromMe = message.senderId === authUser._id
  const chatClassname = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe ? authUser.profilePic : selectedConversations?.profilePic
  const bubbleBgcolour = fromMe ? 'bg-blue-400' : ''
  const formattedTime = extractTime(message.createdAt)
  const shakeClass = message.shouldShake ? "shake" : ""

  return (
    <div className={`chat ${chatClassname}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgcolour} ${shakeClass}`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          {formattedTime}
      </div>
    </div>
  )
}

export default Message
