import React from 'react'
import sectionImage from '../assets/flag.jpg'
import {motion} from 'framer-motion'

const BlogSection = () => {
  return (
    <div className='flex flex-col w-[80%]  justify-center py-4 mx-auto'>
        <div className='flex flex-col group '>
             <motion.img
             initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }} 
              className='w-full h-[70%]' src={sectionImage} alt='' />

              <motion.div
              initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2 }} 


               className='flex  w-[100%] sm:w-[30%] flex-col gap-2 py-6 px-10 bg-white relative bottom-0bg-white sm:bottom-20 sm:left-20 rounded-md'>
                 <p className='w-[90px] text-center py-1 px-1 rounded-sm bg-blue-600 text-white'>awareness</p>
                 <p className='text-2xl font-semibold'> THE COLH PI </p>
                 <div className='flex gap-6'>
                    <p>Vaphual</p>
                    <p> 3/ Jan / 2025</p>
                 </div>
              </motion.div>
        </div>  
    </div>
  )
}

export default BlogSection
