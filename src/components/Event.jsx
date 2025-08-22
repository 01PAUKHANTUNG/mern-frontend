import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import { ZfuContext } from '../context/ZfuContext';

const Event = () => {
const {upComingEvent} = useContext(ZfuContext);
const [latest1, setLatest1] = useState([])
const [latest2, setLatest2] = useState([])

 useEffect(()=>{
    setLatest1(upComingEvent.slice(0,1))
    setLatest2(upComingEvent.slice(1,2))
    
   },[upComingEvent])

  return (
    <div className='sm:w-full bg-black py-10'>
      <motion.div
      initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}  
       className='flex flex-col gap-5 sm:gap-10'>
        <motion.div
         initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}  
         className='flex justify-center'>
          <p className='text-white text-3xl sm:text-5xl font-bold'>Up-coming Events</p>
        </motion.div>
        <div className='flex flex-col sm:flex-row mx-auto py-2 sm:py-4 gap-5'>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}      
            className='overflow-hidden w-[290px] h-[150px] md:w-[600px] md:h-[337px] bg-white'
          >
           
             
            {
              latest1.map((item, index)=>(
               <div key={index}>
                   <img src={item.image} />
                </div>
              ))
            }

 
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            
            className='overflow-hidden w-[290px] h-[150px] md:w-[600px] md:h-[337px] bg-cyan-800'
          >
            {
           latest2.map((item, index)=>(
                <div key={index}>
                  <img src={item.image} />
                </div>
              ))
            }

            

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Event;
