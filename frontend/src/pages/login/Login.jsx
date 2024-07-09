import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin"

const Login = () => {
    const [username ,setusername] =useState("")
    const [password ,setpassword] =useState("")

    const { loading , login} = useLogin()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await login(username ,password) 
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

        <h1 className='text-3xl font-semibold text-center text-gray-300 '>Login <span className='text-blue-400'>MassChat</span></h1>
       
        <form onSubmit={handleSubmit} >
            <div>
                <label className='label p-2'><span className='text-base label-text'>Username</span></label>
                <input type="text" placeholder='Enter Username'
                 className='w-full input input-bordered h-10'
                 onChange={(e)=>setusername(e.target.value)}
                 value={username}
                 
                 />
            </div>
            <div>
                <label className='label p-2'><span className='text-base label-text'>Password</span></label>
                <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
                    onChange={(e)=>setpassword(e.target.value)}
                    value={password}
                />
            </div>
            <div className='mt-4'>

            <Link to="/signup" href="#" className='text-sm hover:underline hover:text-blue-600 '>{"Don't"} have an account ?</Link>
            </div>
            <div>
                <button className='btn tracking-widest  block btn-sm mt-2 w-full text-lg bg-white text-blue-600'
                 disabled={loading}>
                    {loading ? <span className="loading loading-spinner"></span> : "Login"}
                 </button>
            </div>
        </form>

        </div>
    </div>
  )
}

export default Login