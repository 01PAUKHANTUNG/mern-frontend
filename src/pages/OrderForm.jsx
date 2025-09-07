import React, { useContext, useState } from 'react'
import { ZfuContext } from '../context/ZfuContext'
import { motion } from 'framer-motion';
import backImage from '../assets/arrow-left.ico'
import cart from '../assets/cart.png'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Login from './Login';
import Payment from './Payment.jsx';

const OrderForm = () => {

   const {currency,TotalAmount, getCartCount, token} = useContext(ZfuContext);
   const [visible, setVisible] = useState('kpay');
   const navigate = useNavigate();
   const [showPayment, setPayment] = useState(false);

   const[name, setName] = useState()
   const[email, setEmail] = useState()
   const[zipcode, setZipcode] = useState()
   const[address, setAddress] = useState()
   const[phone, setPhone] = useState()
   const[country, setCountry] = useState()
   

   const back = ()=>{
      navigate(-1)
   }

   const submithandle = (e)=>{
      e.preventDefault();
      
      if(getCartCount() === 0){
         toast.error("cart is empty")
         return  null;     
      }  else{ 
        
        setPayment(true)
      }
   }

   if(!token){
      return <Login />
   }

  return (
    <div>
        <div className='sticky  top-40 sm:top-44 bg-slate-200 shadow-lg'>
              <div className=' w-[90%] justify-between mx-auto py-4' >
                 <motion.div 
                     className='flex justify-end'>
                   <div className='flex'>
                       <img  src={cart} className='w-[40px] cursor-pointer ' alt=''/>
                           <p className='relative bg-red-600 w-6 h-6 rounded-full top-6 text-center text-white right-4'>{getCartCount()}</p>
                        </div> 
                   
                 </motion.div>
              </div>
            </div>
            <div>
               <img onClick={back} className='w-[30px] cursor-pointer py-4 ml-4' src={backImage} alt='' />
            </div>
       {showPayment === false ?  <form onSubmit={submithandle}>
        <div className=' py-4 w-[80%] mx-auto mb-6'>
          <div className='flex flex-col md:flex-row'>
             <div className='w-[100%]  md:w-[60%]'>

              <div className='flex flex-col sm:flex-row gap-3'>
                 <label htmlFor='name' className='w-[100%] flex flex-col gap-1'>
                    Name
                    <input onChange={(e)=>setName(e.target.value)} className=' py-2 px-2 outline-none border-2 border-gray-600' type='text' id='name' placeholder='Name' required />
                 </label>
                 <label htmlFor='email' className='w-[100%] flex flex-col gap-1'>
                    Email
                    <input onChange={(e)=>setEmail(e.target.value)} className=' py-2 px-2 outline-none border-2 border-gray-600' type='email' id='email' placeholder='Email' required />
                 </label>
              </div>
               <div className='flex flex-col sm:flex-row gap-3'>
                 <label htmlFor='text' className='w-[100%] flex flex-col gap-1'>
                    Address
                    <input onChange={(e)=>setAddress(e.target.value)} className=' py-2 px-2 outline-none border-2 border-gray-600' type='text' id='address' placeholder='Address' required />
                 </label>
                 <label htmlFor='phone' className='w-[100%] flex flex-col gap-1'>
                    Phone 
                    <input onChange={(e)=>setPhone(e.target.value)} className=' py-2 px-2 outline-none border-2 border-gray-600' type='number' id='phone' placeholder='Phone'  required />
                 </label>
              </div>
                  <div className='flex flex-col sm:flex-row gap-3'>
                 <label htmlFor='code' className='w-[100%] flex flex-col gap-1'>
                    Zip Code
                    <input onChange={(e)=>setZipcode(e.target.value)} className=' py-2 px-2 outline-none border-2 border-gray-600' type='number' id='code' placeholder='Code' required />
                 </label>
                 <label htmlFor='country' className='w-[100%] flex flex-col gap-1'>
                    Country
                    <input onChange={(e)=>setCountry(e.target.value)} className=' py-2 px-2 outline-none border-2 border-gray-600' type='text' id='country' placeholder='Country' required />
                 </label>
              </div>

             </div>
           
             <div className=' w-[100%] md:w-[40%] mt-8 '>
               <div className='flex justify-center sm:justify-end'>
                  <div className='w-[100%] sm:w-[70%] flex flex-col gap-3'>
                  <hr className='border border-gray-600 '/>
                   <div className='flex justify-between'>
                      <p className='text-xl font-mono'> Total Amount</p>
                      <p>{currency}{TotalAmount()}.00</p>
                   </div>
                   <hr className='border border-gray-600 '/>
               </div>
               </div>
                        
               <div className='flex  gap-2 justify-center sm:justify-end mt-4'>
                    <div onClick={()=>setVisible('kpay')} className='flex hover:bg-gray-200 py-2 px-6 border border-gray-600 rounded-sm gap-4 cursor-pointer items-center'>
                       <p className={`${visible === 'kpay' ? 'bg-green-800': 'bg-white'}  w-[10px] h-[10px] rounded-full`}></p>
                       <p className=' text-black '>Kpay</p>
                  </div>
                    <div onClick={()=>setVisible('visa')} className='flex hover:bg-gray-200 py-2 px-6 border border-gray-600 rounded-sm gap-4 cursor-pointer items-center'>
                       <p className={`${visible === 'visa' ? 'bg-green-800': 'bg-white'}  w-[10px] h-[10px] rounded-full`}></p>
                       <p className=' text-black '>VISA</p>
                  </div>
                  <div onClick={()=>setVisible('stripe')} className='flex hover:bg-gray-200 py-2 px-6 border border-gray-600 rounded-sm gap-4 cursor-pointer items-center'>
                       <p className={`${visible === 'stripe' ? 'bg-green-800': 'bg-white'}  w-[10px] h-[10px] rounded-full`}></p>
                       <p className=' text-black '>Stripe</p>
                  </div>
                 
                 
               </div>  
              
               <div className='flex justify-center sm:justify-end'>
                   <button type='submit' className='px-10 py-2 w-full sm:w-auto bg-green-700 font-serif hover:bg-green-800 active:bg-green-900 text-white rounded-sm mt-4'> Order </button>
               </div>
             </div>
           </div>
          </div>
        </form>
        : <Payment name={name} email={email} address={address} zipcode={zipcode} country={country} phone={phone}/>
        }
    </div>
  )
}

export default OrderForm
