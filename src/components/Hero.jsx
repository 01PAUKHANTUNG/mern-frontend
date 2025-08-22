import React from 'react'
import flag from '../assets/flag.jpg'
import videoFlag from '../assets/Sequence 07.mp4'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='flex flex-col w-[85%] justify-between mx-auto py-6' >
       <motion.div
         initial = {{opacity : 0, y: 100}}
         animate={{opacity: 100, y: 0}}
         transition={{duration: 1}}
         className='mt-4'
       > 
       
          <p className='text-2xl sm:text-3xl md:text-3xl font-bold '> Zomi Federal Union</p>
       </motion.div>
       <div className=' flex gap-6 my-8'>
          <div  className='flex flex-col gap-4 w-[100%] text-[18px] '>
            <motion.div 
             initial = {{opacity : 0, y: 100}}
             animate={{opacity: 100, y: 0}}
             transition={{duration: 1}}         
             className='w-[100%] md:hidden'>
                <video  src={videoFlag} className='border-b-2   border-red-700'  autoPlay loop muted />
            </motion.div>

            <motion.div
            initial = {{opacity : 0, y: 100}}
             animate={{opacity: 100, y: 0}}
             transition={{duration: 1}}  
             className='mt-6'        
             >
             <p className='text-[16px] sm:text-[20px]'>Zomi Federal Union (ZFU) in Myanmar gam suahtak nading leh Federal Democracy gam thak kilam nading Zomite mapankhopna khat ahi hi. February 1, 2021 ni ukna buluhna hong pian ciangin mun tuamtuam pan ukna buluh a langpang Zomite kigawmkhawmin ZFU hong piangkhia ahi hi. ZFU in Zomite suahtakna, phattuamna leh khantoh nading mainawtin nasem den hi.</p>
             <p className='text-[16px] sm:text-[20px]'> A beisate sang' a hoihzaw i lamkik zawh nading i vekin mapangkhawmin mainawt ni!</p>
             <p className='text-[16px] sm:text-[20px]'> A suakta Zosuante, a hangsan Vaphualte' lenna, Zogam aw...Pasian in thupha hong pia tahen!</p>           
            <p className='text-[16px] sm:text-[20px]'> Ukna buluhte' khutsungpan suahtakna hong pia tahen!</p>
            </motion.div>
          </div>
          <motion.div
             initial = {{opacity : 0, y: 100}}
             animate={{opacity: 100, y: 0}}
             transition={{duration: 1}}
             className='hidden md:flex md:w-[40%] md:h-[50%] '>
            
            <video   autoPlay loop muted src={videoFlag} />
          </motion.div>
          
       </div>
      
      
    </div>
  )
}

export default Hero
