import GenderCheckBox from './GenderCheckBox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 '>Signup <span className='text-blue-400'>MassChat</span></h1>
        <form >
            <div>
                <label className='label p-2 mt-7'><span className='text-base label-text'>Full name</span></label>
                <input type="text " placeholder='Name' className='text-[14px] placeholder:italic w-full input input-bordered' />

            </div>
          
            <div>
                <label className='label p-2 mt-1'><span className='text-base label-text'>Username</span></label>
                <input type="text " placeholder='Nickname' className='text-[14px] placeholder:italic w-full input input-bordered' />

            </div>
          
            <div>
                <label className='label p-2 mt-1'><span className='text-base label-text'>Password</span></label>
                <input type="text " placeholder='Password' className='text-[14px] placeholder:italic w-full input input-bordered' />

            </div>
            <div>
                <label className='label p-2 mt-1'><span className='text-base label-text'>Confirm Password</span></label>
                <input type="text " placeholder='Confirm Password' className=' text-[14px] placeholder:italic w-full input input-bordered' />

            </div>
            {/* gender checkbox */}
            <GenderCheckBox/>
            <div className='mt-4'>

            <a href="#" className='text-sm hover:underline hover:text-blue-600 '>Already have an account ? Signin</a>
            </div>
            <div>
                <button className='btn  tracking-widest  block btn-sm mt-2 w-full text-lg bg-white text-blue-600'>SignUp</button>
            </div>
          
        </form>
        </div>
    </div>
  )
}

export default Signup