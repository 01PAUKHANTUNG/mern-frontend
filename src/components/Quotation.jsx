import React from 'react'
import zfubrand from '../assets/zfubrand.png'
import { motion } from 'framer-motion'



const Quotation = () => {
  return (
    <div className='flex bg-slate-100 py-5 sm:py-10'>
        <div className='flex flex-col w-full  sm:flex-row gap-1 justify-center'>
            <motion.div 
              initial = {{opacity : 0, y: 100}}
              whileInView={{opacity: 100, y: 0}}
              transition={{duration: 1}}
              viewport={{once: true}}
            className='flex flex-col  sm:w-[80%] md:w-[60%] sm:h-[450px]  bg-blue-950'>
                <img className='w-[33px] sm:w-[55px] mx-auto mt-8' src={zfubrand} alt='' />
                <div className='flex flex-col w-[75%] mx-auto mt-5 sm:mt-10 justify-center'>
                     <p className='text-white text-1xl sm:text-2xl'>I buaina (problem) te lungluthuai sak zo in, ih sepkhiatna te in zong ki lamthakna hong piang sak ciang ki khang to ding hi.
                       </p>
                       <div className='flex justify-end py-6'> <p className='text-white text-1xl sm:text-2xl'> PDF Zoland </p></div>
                    
                </div>
            </motion.div>
            <motion.div 
             initial = {{opacity : 0, y: 100}}
             whileInView={{opacity: 100, y: 0}}
             transition={{duration: 1.3}}
             viewport={{once: true}}
            className='flex w-[100%] md:w-[25%] h-auto md:h-[450px] bg-white'>
                <div className='flex flex-col w-[80%]  sm:w-[90%] mx-auto md:gap-4 mt-9 md:mt-28'>
                <p> Suhtakna i cih pen mihing ten suahtakna alunggulhna leh a hangsan zahzah a kingah khuak ciimna a nei te bek ii ngah theih ahi hi.</p>
                <div className='flex justify-end'><p className=' italic font-semibold text-2xl py-2  '> Emma Goldman</p></div>
                
                <p> "A phul ngam, a suplawh ngam om masiah khang ki khel Ngei ngei lo."</p>
                <div className='flex justify-end'>
                   <p className='italic font-semibold text-2xl py-2 '> Uh Mi</p>
                </div>
                
               </div>
             </motion.div>
        </div>
    </div>
  )
}

export default Quotation
