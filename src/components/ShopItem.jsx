import React, { useContext } from 'react'
import { ZfuContext } from '../context/ZfuContext'
import { Link } from 'react-router';

const ShopItem = (props) => {

    const {currency, token} = useContext(ZfuContext);

  return (
    <div>
        <form className='flex flex-col sm:flex-row sm:w-[95%] h-[400px] sm:h-[230px] gap-4 px-2 border-2 border-gray-500 rounded-md mx-auto'>
               <div className='w-[100%] h-[50%] sm:h-[100%] sm:w-[50%]'><img src={props.image} className='w-[100%] h-[100%]' alt='' /></div>
               <div className='flex flex-col w-[100%] sm:w-[50%] sm:h-[100%] gap-1 sm:gap-3'>
                 <p className='text-1xl font-semibold'>{props.category}</p>
                 <p>{currency}{props.price}.00</p>
                 <p>{props.description}</p>
                 
                 <Link to={`${token === '' ? '/login' :`/order-place/${props.id}`}`}  className='w-[50%] md:w-[100%]  text-center py-2 px-2 bg-slate-200 hover:bg-slate-400 active:text-white rounded-full'> Order Now </Link>
               </div>
        </form>      
    </div>
  )
}

export default ShopItem
