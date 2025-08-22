import React from 'react'
import {motion} from 'framer-motion'

const Aboutsection = () => {
  return (
    <div className='w-full bg-gradient-to-t to-white from-gray-300'>
      <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0 }}  
       className='flex flex-col w-[80%] mx-auto gap-4 py-10'>
         <p>February 1, 2021 (Monday) in Myanmar gamah ukna buluhna hong pian ciangin gamsungah bitna le daihna om nawn lo hi. Mipite in galkap ukna deih lo in septheih bangbang tawh kilangpan hi. Beelsatna, lamdungah lungphona, CDM – Civil Disobedience Movement laakna le a tuamtuam tawh ukna buluh galkapte kilangdo hi. Gamsung buaina hong suuk semsemin lungmuanna hong omloh teh Zomite khutkhattawi khekhatkhai bangin mapankhop ding hong kisam hi. Mapan theihna tekpan a semte kigawmin a omsa kipawlna tuamtuam tawh a kul bangin kizop theih nading kipawlna min khat kisam a “ZFU – Zomi Federal Union” ci-in 30th March 2021 in kivawh hi.</p>
         <p> ZFU pen nasep kawmkawmin hong piangkhia ahi hi. ZFU in a nei tuam om lo a, galkapte zawhthawhthu deihlohna tungtawn pan mipite in sep theih bangbang sep kawmkawmna tawh a kul bangin hong piangkhia ahi hi. Gamsung gampua kithuza in kikupna, sepkhopna tuamtuam a om khit zawh 31 March 2021 (Wednesday) in ZFU min ki tangko khia hi.</p>
      </motion.div>
      <div className='flex flex-col gap-4 w-[80%] mx-auto py-10'>
         <motion.p 
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}  
         className='text-3xl font-semibold '>ZFU PIANKHIATNA</motion.p>
         <motion.p 
          initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}  
         >Zomite in ei le ei ki uktawm theihna (self-determination) nei in, mipi thuneihna (civilian supremacy) leh liangko kikimna (equality) te tawh nopsakna kicing nuntakna ngah theih nading</motion.p>
      </div>
    </div>
  )
}

export default Aboutsection
