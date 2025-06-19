import React, { useContext, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Appcontext';
export default function Signin() {
  const {setusername,setpassword,setname,username}=useContext(AppContext)
  const [eye, seteye] = useState(true)
  const navigate = useNavigate();
  function handlelogin(event) {
    event.preventDefault();
    setname(username);
    toast.success('Login Successful!');
    navigate('/')
  }
  return (
    <div className='flex h-screen items-center justify-center' >

      <div className='border  flex flex-col backdrop-blur-lg items-center bg-transparent duration-[0.5s] transition-all shadow-2xl gap-5 py-[4.2rem] px-[3rem] rounded-lg'>
        <h2 className='text-xl font-bold'>LOGIN</h2>
        <form onSubmit={handlelogin} className=' flex flex-col items-center gap-5 rounded-lg'>

          <div className='border   flex items-center w-fit px-2 py-1 rounded-2xl '>
            <input type='text' required onChange={(event) => setusername(event.target.value)} placeholder='Username' maxLength={15} className='  bg-transparent outline-none w-[14rem]' />
            <FaUserAlt />
          </div>
          <div className=' border flex items-center w-fit  px-2 py-1 rounded-2xl'>
            <input type={`${eye ? 'password' : 'text'}`} required onChange={(event) => setpassword(event.target.value)} placeholder='password' className='  bg-transparent outline-none w-[14rem]' />
            <div onClick={() => seteye(!eye)} className=' cursor-pointer'>
              {
                eye ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
              }
            </div>
          </div>
          <div className='text-xs justify-between w-full flex'>
            <div className=''><label className='flex gap-1 appearance-none'><input type='checkbox' className='' />Remember me</label></div>
            <div className='cursor-pointer text-blue-900'>Forgot Password?</div>

          </div>
            <button className=' w-[16rem] border bg-blue-500 text-white hover:bg-blue-600 font-semibold transition-all duration-[0.4] rounded-2xl borde px-2 py-1'>
              LogIn
            </button>
        </form>
        <div className='text-sm'>
          Don't have an account? <span className='font-bold cursor-pointer'>Register</span>
        </div>

      </div>
    </div>
  )
}
