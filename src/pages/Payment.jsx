import React, { useContext, useEffect, useState } from 'react'
import kpayImage from '../assets/kpay.jpg'
import { ZfuContext } from '../context/ZfuContext.jsx'


const Payment = ({name, email, address, zipcode, country, phone}) => {
    const{TotalAmount, cartData} = useContext(ZfuContext)
    const [image, setImage] = useState();
  


    const onSubmitHandle = async(e)=>{
         e.preventDefault();

        
        
    }

  return (
    <div className='w-full flex py-6'>
       
       <form onSubmit={onSubmitHandle} className='flex mx-auto'>
         <div className='flex flex-col gap-4 justify-center mx-auto'>
             
             <img className='w-[350px]' src={kpayImage} alt=''  />
              <p className='text-center '> OR </p>
             <p className='text-center'>09456726976</p>
            
             <label htmlFor='image'>
                <input  onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' />
                
            </label>

             <button className='py-2 px-6 bg-green-500 text-white' type='submit'> Submit </button>
         </div>  
       </form>
    </div>
  )
}

export default Payment
