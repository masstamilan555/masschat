import React, { useState } from 'react'
import {useAuthContext} from "../context/AuthContext"
import toast from 'react-hot-toast'

const useLogin = () => {
 const [loading , setloading] = useState()
 const {setAuthUser} = useAuthContext()

    const login = async (username , password)=>{
        const success = handleInputErrors(username,password)
        if(!success) return
        setloading(true)
        try{
            const res = await fetch('api/auth/login' , {
                method : 'POST' ,
                headers : {
                    'Content-Type' : 'application/json'
                    } , 
                    body : JSON.stringify({username , password})})
                    const data = await res.json()
                    if(data.error){
                        throw new Error(data.error)
                    }
                    setAuthUser(data)
                    localStorage.setItem('chat-user',JSON.stringify(data))
        }catch(err){
           toast.error(err.message)
        }finally{
            setloading(false)
            
        }
    }
    return {login , loading}

}

export default useLogin

function handleInputErrors(username , password){
    if(!username || !password){
        toast.error("Please fill all the details")
        return false
    }
    return true
}