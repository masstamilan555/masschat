import { Link } from 'react-router-dom'
import GenderCheckBox from './GenderCheckBox'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'

const Signup = () => {
    const [inputs,setInputs] = useState({
        fullname:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
    })
    const handleSubmit = async (e)=>{
        e.preventDefault()
        // console.log(inputs);
        await signup(inputs)
    }
    const {loading , signup} =useSignup()

    const handleCheckboxChange = (gender)=>{
        setInputs({...inputs,gender})
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 '>Signup <span className='text-blue-400'>MassChat</span></h1>
        <form onSubmit={handleSubmit} >
            <div>
                <label className='label p-2 mt-7'><span className='text-base label-text'>Full name</span></label>
                <input type="text " value={inputs.fullname} onChange={(e)=> setInputs({...inputs,fullname:e.target.value})} placeholder='Name' className='text-[14px] placeholder:italic w-full input input-bordered' />

            </div>
          
            <div>
                <label className='label p-2 mt-1'><span className='text-base label-text'>Username</span></label>
                <input type="text " value={inputs.username} onChange={(e)=> setInputs({...inputs,username:e.target.value})} placeholder='Nickname' className='text-[14px] placeholder:italic w-full input input-bordered' />

            </div>
          
            <div>
                <label className='label p-2 mt-1'><span className='text-base label-text'>Password</span></label>
                <input type="text " value={inputs.password} onChange={(e)=> setInputs({...inputs,password:e.target.value})} placeholder='Password' className='text-[14px] placeholder:italic w-full input input-bordered' />

            </div>
            <div>
                <label className='label p-2 mt-1'><span className='text-base label-text'>Confirm Password</span></label>
                <input type="text "value={inputs.confirmPassword} onChange={(e)=> setInputs({...inputs,confirmPassword:e.target.value})} placeholder='Confirm Password' className=' text-[14px] placeholder:italic w-full input input-bordered' />

            </div>
            {/* gender checkbox */}
            <GenderCheckBox onCheckboxChange ={handleCheckboxChange} selectedGender = {inputs.gender}/>
            <div className='mt-4'>

            <Link to="/login" href="#" className='text-sm hover:underline hover:text-blue-600 '>Already have an account ? Signin</Link>
            </div>
            <div>
                <button  className='btn  tracking-widest  block btn-sm mt-2 w-full text-lg bg-white text-blue-600' disabled={loading}>
                    {loading ? <span className='loading loading-spinner'>Signing Up...</span>:"Sign Up"}
                    </button>
            </div>
          
        </form>
        </div>
    </div>
  )
}

export default Signup