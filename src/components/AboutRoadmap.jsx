import React from 'react'
import roadmap from '../assets/ZFU Roadmap.png'
import {motion} from 'framer-motion'

const AboutRoadmap = () => {
  return (
    <div className='w-[80%] justify-center mx-auto py-6'>
    <motion.div 
      initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}  
            >
       <img  src={roadmap} />
    </motion.div>
    </div>
  )
}

export default AboutRoadmap
