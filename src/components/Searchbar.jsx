import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ZfuContext } from '../context/ZfuContext'
import cart from '../assets/cart.png'


const Searchbar = () => {

    const {setSearch, getCartCount} = useContext(ZfuContext);

  return (
    <div className='sticky top-40 sm:top-44 bg-slate-200 shadow-lg'>
       <div className=' w-[90%] justify-between mx-auto py-4' >
          <div 
              className='flex justify-between'>
             <input onChange={(e)=>setSearch(e.target.value)} className='py-2 px-4 w-[57%] sm:w-[30%] border-2 border-black rounded-full outline-none' placeholder="search by product name " type='text' />
             <Link to='/cart'><div className='flex'><img src={cart} className='w-[40px] cursor-pointer ' alt=''/><p className='relative bg-red-600 w-6 h-6 rounded-full top-6 text-center text-white right-4'>{getCartCount()}</p></div></Link>   
          </div>
          <div>

          </div>
       </div>
    </div>
  )
}

export default Searchbar
