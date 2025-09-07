import React, { useContext, useEffect, useState } from 'react'
import cart from '../assets/cart.png'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router'
import backImage from '../assets/arrow-left.ico'
import { ZfuContext } from '../context/ZfuContext'
import Login from './Login'



const Cart = () => {

  const {getCartCount, cartItem, cartData, setCartData, 
     currency, updateQuantity, removeCart, TotalAmount, products, token} = useContext(ZfuContext);
  
  const navigate = useNavigate();
  const back = ()=>{
    navigate(-1)
  }

useEffect(()=>{

  let tempData = [];
  for(const items in cartItem){
    for(const item in cartItem[items]){
      if(cartItem[items][item]> 0){
        tempData.push({
          id : items,
          sizes : item,
          quantity : cartItem[items][item]
        })
      }
    }
    
    setCartData(tempData) 
     }
 
},[cartItem])


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
              <div className='w-[80%] mx-auto'> 
                 <div className='hidden sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] items-center text-center '>
                   <p className='text-xl font-semibold'>Product</p>
                   <p className='text-xl font-semibold'>Product Name</p>
                   <p className='text-xl font-semibold'>Size</p>
                   <p className='text-xl font-semibold'>Price</p>
                   <p className='text-xl font-semibold'>Quantity</p>
                   <p className='text-xl font-semibold'>Remove</p>
                 </div>
                 <hr className='hidden sm:flex mt-4 border border-green-900'/>
                 <div className='flex flex-col gap-4 py-6'>
                   {
                    cartData.map((item, index)=>{
                      const productData = products.find(product=> product._id === item.id)
                      return (
                        <div key={index} className='border-2 border-gray-300 py-2 flex flex-col gap-2 sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] items-center text-center'>
                             <img src={productData.image} className='w-[200px] h-[200px] mx-auto' alt='' />
                             <p className='text-xl font-semibold'>{productData.category}</p>
                             <p className=''>{item.sizes}</p>
                             <p>{currency}{productData.price}.00</p>
                             <input onChange={(e)=>e.target.value === ' ' || e.target.value === '0' ? null : updateQuantity(item.id, item.sizes, Number(e.target.value))} className='w-[100px] text-center border-2 border-gray-600 cursor-pointer mx-auto' type='number' min={1} defaultValue={item.quantity} />
                           
                             <p onClick={()=>removeCart(item.id, item.sizes)} className='text-3xl cursor-pointer hover:text-red-500'> x </p>
                            
                        </div>
                        
                      )
                      
                    })
                   }
                 </div>


                 <div className='flex justify-center sm:justify-end'>
                  <div className='w-[100%] sm:w-[30%]'>
                   <hr className='border border-gray-700'/>
                   <div className='flex justify-between'>
                     <p className='text-2xl font-semibold'> Total Amount</p>
                     <p>{currency}{TotalAmount()}.00</p>
                    </div>
                    <hr className='border border-gray-700'/>
                     
                 </div>
                 </div>
                 <div className='flex justify-center sm:justify-end'>
                     <Link to='/order-form'><p className='w-[300px] bg-green-600 py-2 px-4 rounded-md text-white text-center mb-6 mt-6 cursor-pointer hover:bg-green-700 active:bg-green-800'> Order Place </p></Link>
                 </div>
                 </div>
            
        </div>
              
  )
}

export default Cart
