import React, { useContext, useEffect } from 'react'
import { ZfuContext } from '../context/ZfuContext'
import Title from './Title';

const Galhangte = () => {
 
    const {galhangte} = useContext(ZfuContext);
    
    useEffect(()=>{
      console.log(galhangte)
    },[galhangte])


  
  return (
    <div className='w-[80%] mx-auto py-6'>
      <div className='py-10'>
         <Title title="GALHANGTE" />
      </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6'>
      {
        galhangte.sort((a,b)=>new Date(b.date)-new Date(a.date)).map((item, index)=>(
            <div key={index} className='flex flex-col gap-2'>
                <img src={item.image} className='w-[400px] h-[350px]' alt=''/>    
                <div className='flex justify-center'>
                    <p className='text-xl font-semibold'>{item.name}</p> 
                </div>
                
            </div>
        ))
      }
    </div>
    </div>
  )
}

export default Galhangte
