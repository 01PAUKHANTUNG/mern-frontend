import React, { useContext } from 'react'
import Title from '../components/Title.jsx'
import { ZfuContext } from '../context/ZfuContext.jsx'
import {motion} from 'framer-motion'

const Press = () => {

   const {press} = useContext(ZfuContext);
   const latest = press.slice(0,3)

   const statement = press.filter(item=> item.statement)
   

  return (
    <div className='flex flex-col w-[80%] mx-auto gap-12'>
      <div>
         <motion.div
          initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}  
         className='flex justify-start mt-8'>
            <Title title='Latest Upadtes' />
         </motion.div>
         <div className='grid  sm:grid-cols-[1fr_1fr_1fr] gap-2 mt-8'>
            {
               latest.map((item, index)=>(
                  <motion.div
                   initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2 }}  
                  key={index} >
                      <img src={item.image} />
                  </motion.div>
               ))
            }
         </div>
      </div>
      <div>
         <motion.div 
          initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 3 }} 
         className='flex justify-start'>
            <Title title='Statements' />
         </motion.div>
         <div className='grid sm:grid-cols-[1fr_1fr_1fr] gap-2 py-8'>
            {
               statement.map((item, index)=>(
                  <motion.div 
                   initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 4 }} 
                  key={index} >
                      <img src={item.image} />
                  </motion.div>
               ))
            }
         </div>
      </div>
    </div>
  )
}

export default Press
