import React from 'react'
import gamkuanna from '../assets/gamkuanna.jpg'
import { motion } from 'framer-motion'

const KagamKalei = () => {
  return (
    <div className=' bg-gradient-to-t to-red-800 from-blue-900'>
        <div className='flex w-[80%] justify-between mx-auto py-10 '>
            <div className='flex flex-col md:flex-row  mx-auto  '>
                 <motion.div
                  initial = {{opacity : 0, y: 100}}
                  whileInView={{opacity: 100, y: 0}}
                  transition={{duration: 1}}
                  viewport={{once: true}}
                   className='flex w-[100%]  bg-black'> 
                    <img src={gamkuanna} className='w-full h-full ' alt='' />
                 </motion.div>
                 <motion.div 
                  initial = {{opacity : 0, y: 100}}
                  whileInView={{opacity: 100, y: 0}}
                  transition={{duration: 1}}
                  viewport={{once: true}}
                 className='flex py-4 gap-6 md:gap-14 w-[100%] bg-white items-center justify-center '> 
                    <p className='bg-blue-950 w-2 h-[80%]'> </p>
                    <div className='flex flex-col gap-2 md:gap-8'>
                        <p className='text-3xl py-2 md:text-4xl text-blue-950 font-bold'> KA GAM</p>
                        <p className='text-3xl py-2 md:text-4xl text-blue-950 font-bold'> KA LEI</p>
                        <p className='text-3xl py-2 md:text-4xl text-blue-950 font-bold'> KA MINAM</p>
                    </div>
                 </motion.div>
            </div>       
        </div>
     
    </div>
  )
}

export default KagamKalei
