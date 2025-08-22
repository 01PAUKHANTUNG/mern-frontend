import React from 'react'
import {motion} from 'framer-motion'

const AboutDinmun = () => {
  return (
    <div className='bg-gradient-to-t to-white from-gray-300'>
        <motion.div 
        initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}  
        className='flex flex-col gap-4 w-[80%] mx-auto py-10 '>
             <p className='text-3xl font-semibold'> ZFU DINMUN</p>
              <div className='flex flex-col gap-4'>
                 <p>​1. ZFU in zum le hiam thatang suang ukna buluh galkapte khut sung pan Mipite i suahtak kik nading septheih khempeuh tawh sem ding. (Reject, Resist, Liberate)</p>
                 <p>2. ZFU in mipi’ telcing makaite ukna le thupiakna nuai ah uniform silh mipi’ nasemte ahih nading mapang ding. (Security Sector Reformation)</p>
                 <p>3. Democracy, Human Rights le Federal thuciinte bulphuh in, Zomite' vai Zomite' thuneihna tawh vaihawmna (Self-Determination & Autonomy)</p>
                 <p>4. Zomi min nuai a om tualsung kipawlnate tawh sikhat-sakhat in, khat le khat kizahtakna, kithusimna (mutual-respect) tawh kipumkhat in na semkhawm ding.</p>
                 <p>5. ZFU in ngimna, ngaihsutzia kibanglo thute ultungsak lo in, ngimna ngaihsutzia kibang thute ah cihtakna tawh kintakin semkhawm ding.</p>
                 <p>6. ZFU in kitangsapna (out of necessity) hangin a kiding hi a, ut-man (out of choice) in a kiding hi lo hi.</p>
                 <p>7. ZFU in tangpi phattuam nading thute ah kiimlepam tawh na ki semkhawm ding hi. Na sepkhopna khat le khat kithusimna, liangko kikimna tawh ki kalsuan ding hi.</p>
              </div>
           </motion.div>
    </div>
  )
}

export default AboutDinmun
