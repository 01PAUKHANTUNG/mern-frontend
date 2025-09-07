import React from 'react'
import facebook from '../assets/social media logo/facebook2.png'
import email from '../assets/social media logo/email.png'
import { motion } from 'framer-motion'


const Contact = () => {
  return (
    <div className='w-full'>
       <div className='flex flex-col w-[80%] mx-auto py-6 '>

         <div 
          
         className='flex flex-col gap-2 mx-auto'>
            <motion.div 
             initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}  
            className='flex flex-col  mx-auto'>
              <p className='flex text-2xl sm:text-3xl font-bold mx-auto'>CONTACT US </p>
              <hr className='w-[100%] h-[5px] border-none bg-black'/>
            </motion.div>
           <motion.p 
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}  
           className='flex mx-auto'>Any question or remarks? Just Write a message</motion.p>
         </div>

         <div >
           <form 
           action="https://formspree.io/f/xgvlwdjn"
           method='POST'
           className='flex flex-col sm:flex-row py-8 '>
             <motion.div
               initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}  
              className='bg-black w-[100%] sm:w-[50%] h-auto '>
                  
                  <div className='flex justify-center sm:justify-end py-4 '>
                    <p className='text-white px-4 text-2xl sm:text-3xl  font-bold'> Contact</p>
                  </div>
                 <p className='text-white px-6 text-1xl sm:text-2xl font-semibold py-4'>Ki zopna ding</p>
                
                <div  className='flex gap-4 px-6  items-center py-4'>
                  <a href='contact@zomifederalunion.org' ><img src={email} className='border-2 border-white' alt=' ' /></a>  
                  <a href='contact@zomifederalunion.org' className='flex text-white px-6 text-[13px] md:text-base hover:text-red-500'>contact@zomifederalunion.org</a>
                </div> 
                <div className='flex gap-4 px-6  items-center'>
                  <a href='https://www.facebook.com/search/top/?q=zomi%20federal%20union' ><img  src={facebook} alt=' ' /></a>   
                  <a href='https://www.facebook.com/search/top/?q=zomi%20federal%20union'className='text-white text-[13px] md:text-base px-6 hover:text-red-500'>Zomi Federal Union Page</a>
                </div> 

                 <p className='text-white text-1xl sm:text-2xl font-semibold px-6 py-6'>Huhna Piakna ding</p>                 
                 <p className='text-white px-6'>USA (Zelle)- 682 420 50 69, aidzoland@gmail.com</p>
                 <p className='text-white px-6'>Singapore – 915 912 55 (PayNow)</p>
                 <p className='text-white px-6'>Australia - 043 377 4764 (Mobile Pay)</p>
                 <p className='text-white px-6'>Denmark - +45 228 277 66 (Mobile Pay)</p>
                 <p className='text-white px-6'>Norway - 917 192 86 (Vipps)</p>
                 <p className='text-white px-6'>Sweden - 072 202 2692 (Swish)</p>
                 <p className='text-white px-6'>Thailand - 030 8 23403 8 (Bangkok Bank)</p>
                 <p className='text-white px-6'>Japan - ゴ ムアン ムン(048) 10470-34633001Ph.070-3839-1991 Yucho (JP Bank)</p>
                 <p className='text-white px-6'>Malaysia-7628945711. CIMB</p>
                 <p className='text-white px-6'>Man Ngaih Cing</p>
                 <p className='text-white px-6'>0163563697 Merchantrade</p>
                 <p className='text-white px-6'>Zam Sian Lian</p>
                 <p className='text-white px-6'>UK</p>
                 <p className='text-white px-6'>Mr. Suan BawmkhaiNatWest Bank 60-13-10 49549731</p>
                 <p className='text-white px-6'>S. Korea:Hana Bank 39891030195507 Htann Za Khant</p>
                 <p className='text-white px-6 mb-6'>PayPal/Debit/Credit Card - aidzoland@gmail.com (Global)</p>
              </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 1 }}  
              className='bg-gray-200 w-[100%] sm:w-[50%] h-auto py-4  '>
                  <div>
                      <div className='flex justify-center sm:justify-start py-0'>
                        <p className='text-black px-2 text-2xl sm:text-3xl font-bold'> Infomation</p>
                  </div>
                  <div className='flex flex-col gap-4 w-[80%] mx-auto mt-1 sm:mt-12'>
                      <label htmlFor='name' className='flex flex-col' >
                         Name
                         <input type='text' id='name' name='name' alt='' className='py-3 px-2' required/>
                      </label>
                      <label htmlFor='email' className='flex flex-col' >
                         Email
                         <input type='email' id='email' name='email' alt='' className='py-3 px-2' required/>
                      </label>
                      <label htmlFor='subject' className='flex flex-col' >
                         Subject
                         <input type='text' id='subject' name='subject' alt='' className='py-3 px-2' required/>
                      </label>
                      <label htmlFor='message' className='flex flex-col' >
                         Message
                         <textarea id='message' name='message' className='px-2 py-3'required/>
                      </label>
                      <button type='submit' className='bg-slate-700 py-3 px-3 text-white rounded-md font-bold hover:text-yellow-100 hover:bg-slate-900'> KHAK </button>
                  </div>
                  </div> {/* Optional redirect after submit */}
      <input type="hidden" name="_next" value="https://your-site.com/thanks" />
              </motion.div>
           </form>
         </div>

       </div>
    </div>
  )
}

export default Contact
