import React from 'react'
import {motion} from 'framer-motion'

const AboutMission = () => {
  return (
   <div className='bg-gradient-to-t to-white from-gray-300'>
        <motion.div
        initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}  
         className='flex flex-col gap-4 w-[80%] mx-auto py-10 '>
             <p className='text-3xl font-semibold'> MISSION</p>
             <p>ZFU in ngimna tupnate pan lampial lo-in kiciantakin kimakaih theih nadingin thukhunpi ki neikhin hi.</p>
           </motion.div>
    </div>
  )
}

export default AboutMission
