import { motion } from 'framer-motion'
import React from 'react'


const AboutVision = () => {
  return (
    <div className='bg-gradient-to-t to-white from-gray-300'>
        <motion.div
         initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}   
        className='flex flex-col gap-4 w-[80%] mx-auto py-10 '>
           <p className='text-3xl font-semibold'> VISION</p>
           <p> Van le lei a bawl Tung Pasian in mihing khempeuh tungah akibangin hong piaksa nuntakna, suahtakna thuphate tual-gal khual-gal (tualsung tualpua, gamsung gampua) gal tuamtuamte pan dalin hu ding. (Self-determination, equality, Life, Liberty & pursuit of happiness)</p>
           </motion.div>
    </div>
  )
}

export default AboutVision
