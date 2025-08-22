import { motion } from 'framer-motion'
import React from 'react'


const AboutVideo = () => {
  return (
    <div>
        <motion.div 
        initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}  
            className='flex py-8 justify-center w-full h-full'>
            
          <iframe className='w-[75%] h-[200px] sm:h-[600px]' src="https://www.youtube.com/embed/RomdrQ8IPdw?list=TLGGjkuf6cg0awUyMTA2MjAyNQ" title="ZFU #Update (1-11 Sep 2021) #ZomiFederalUnion" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       </motion.div>
    </div>
  )
}

export default AboutVideo
