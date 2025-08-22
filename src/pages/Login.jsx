import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { ZfuContext } from '../context/ZfuContext';



const Login = () => {

    const [currentState, setCurrentState] = useState('Create Account');
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {backendUrl, token, setToken} = useContext(ZfuContext)

  

    const back = ()=>{
        navigate(-1)
    }

    

   const submitHandle = async (event)=>{
    event.preventDefault();
    try {

      if(currentState === 'Create Account'){   
           
        const response = await axios.post(backendUrl + '/api/user/register', {name, email, password})     
        if(response.data.success){      
        setToken(response.data.token)
        localStorage.setItem("token",response.data.token)
        navigate('/')   
           } else{          
             toast.error(response.data.message)
          }
        } 

         if(currentState === 'Log in'){
            
          const response = await axios.post(backendUrl + '/api/user/login', {email, password})
           console.log(response.data)
          if(response.data.success){
            
             setToken(response.data.token)
             localStorage.setItem('token', response.data.token)
             navigate('/')
          }else{
             toast.error(response.data.message)
          }
         }   
         
         if(token){
         
         }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


 

  return (
    <div className=''>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}   
       className='w-[80%] sm:w-[40%] mt-9 mb-9 py-4 px-4 bg-slate-300 shadow-lg justify-center mx-auto rounded-3xl'>
           <div className='flex justify-end'>
                <p onClick={back} className='font-semibold cursor-pointer active:text-red-600'> X </p>
             </div>
          <form onSubmit={submitHandle} className='flex w-[80%] flex-col gap-4 mx-auto justify-center'>
            
             <div className='flex justify-center'>
                <p className='text-2xl font-bold text-blue-800'>{currentState}</p>
             </div>


             <div className='flex flex-col gap-3 '>
                <label className={`flex flex-col gap-2 ${currentState === 'Log in' ? 'hidden' : ''} `} htmlFor='name'> Name
                    <input onChange={(e=>setName(e.target.value))} className='py-2 px-2 rounded-full outline-none border-2 border-blue-800 bg-transparent ' type='text' id='name' placeholder='Name' />
                </label>
                <label className='flex flex-col gap-2' htmlFor='email'> Email
                    <input onChange={(e)=>setEmail(e.target.value)} className='py-2 px-2 rounded-full outline-none border-2 border-blue-800 bg-transparent' type='email' id='email' placeholder='email' required/>
                </label>
                <label className='flex flex-col gap-2' htmlFor='password'> Password
                    <input onChange={(e)=>setPassword(e.target.value)} className='py-2 px-2 rounded-full outline-none border-2 border-blue-800 bg-transparent' type='password' id='password' placeholder='Password' required /> 
                </label>
            </div>
             <button type='submit' className='bg-blue-600 py-2 px-4 hover:bg-blue-800 text-white rounded-full'> {currentState} </button>
             <div className={`flex justify-end ${currentState === 'Log in' ? '' : 'hidden' }`}>
                 <p onClick={()=>setCurrentState("Create Account")} className='italic cursor-pointer hover:text-red-600'>create account</p>
             </div>
             <div className={`flex justify-end ${currentState === 'Log in' ? 'hidden' : '' }`}>
                 <p onClick={()=>setCurrentState('Log in')} className='italic cursor-pointer hover:text-red-600'>Log in</p>
             </div>
          </form>
      </motion.div>
    </div>
  )
}

export default Login
