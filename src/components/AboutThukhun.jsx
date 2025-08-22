import React from 'react'
import {motion} from 'framer-motion'

const AboutThukhun = () => {
  return (
     <div className='bg-gradient-to-t to-white from-gray-300'>
        <div className='flex flex-col gap-4 w-[80%] mx-auto py-10 '>
             <motion.p 
              initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}  
             className='text-3xl font-semibold'> ZFU THUKHUN</motion.p>
             <motion.p 
                initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}  
             >ZFU in ngimna tupnate pan lampial lo-in kiciantakin kimakaih theih nadingin thukhunpi ki neikhin hi.</motion.p>
           </div>
    </div>
  )
}

export default AboutThukhun
