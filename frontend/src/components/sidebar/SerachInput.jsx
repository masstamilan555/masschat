import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation"
import useGetCoversations from "../../hooks/useGetConversation"
import toast from "react-hot-toast";
const SerachInput = () => {
  const [search ,setsearch] = useState("")
  const {setSelectedConversation} =useConversation()
  const {conversations} = useGetCoversations()
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!search) return
    if(search.length <1){
      return toast.error('Requires atleast a letter')
    }
    const conversation = conversations.find((c)=>c.fullname.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setsearch("")

    }else{
      toast.error('Conversation not found')
    }

  }
  return (
    <form className='flex items-center gap-2'  onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." className='input input-bordered rounded-full '
        value={search} 
        onChange={(e)=>setsearch(e.target.value)} />
        
        <button type='submit' className='btn btn-circle bg-blue-500 text-white'><IoSearchSharp className=' w-6 h-6 outline-none'/></button>
    </form>
  )
}

export default SerachInput