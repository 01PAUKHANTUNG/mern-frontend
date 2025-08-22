import React, { useContext, useState } from 'react'
import flag from '../assets/flag.jpg'
import cart from '../assets/cart.png'
import { motion } from 'framer-motion'


const ShopHero = () => {
   
  return (
    <div>
   
       <div className='flex flex-col sm:flex-row gap-6 w-[80%] justify-center mx-auto py-6'>
        
         <motion.div 
          initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }} 
             className='flex flex-col gap-y-5 w-[60%]'>
            
            <p className='w-[100%] sm:w-[80%] text-3xl sm:text-6xl font-bold'> Zoland Cloths Product Collection</p>
            <p className='text-gray-400'>Shop the best cloth</p>
            <button className='bg-purple-400 w-[140px] text-black font-semibold py-2 px-2 rounded-full'> SHOP NOW</button>
           
         </motion.div>
         <motion.div 
          initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }} 
         className='flex w-[100%] sm:w-[40%] bg-slate-500'>
            <img src={flag} alt='' />
            
         </motion.div>
       </div>

    </div>
  )
}

export default ShopHero
