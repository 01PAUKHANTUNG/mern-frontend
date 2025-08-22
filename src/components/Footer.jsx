import React from 'react'
import facebook from '../assets/social media logo/facebook.png'
import telegram from '../assets/social media logo/telegram.png'
import spotify from '../assets/social media logo/spotify.png'
import youtube from '../assets/social media logo/youtube.png'

const Footer = () => {
  return (
    <div className=' w-full flex flex-col gap-6 bg-gray-500 py-8 '>
      <div className='w-full flex flex-col sm:flex-row items-center mx-auto justify-center'>
         <p className='w-[90%] h-[8px] sm:w-[500px] sm:h-[13px] bg-white'> </p>
         <div className='flex gap-3 py-4 mx-3'>
            <a className='cursor-pointer' href='https://www.facebook.com/ZomiFederalUnion?mibextid=ZbWKwL'><img src={facebook}  alt='' /></a>
            <a className='cursor-pointer' href='https://t.me/zfutelegramchannel' ><img className='w-[50px]' src={telegram} alt='' /></a>
            <a className='cursor-pointer' href='https://open.spotify.com/show/5HBEsRTasHHwiXXqWMOMz1?si=8db257b5e2de4973&nd=1&dlsi=6ba8b253687e4611' ><img src={spotify} alt='' /></a>
            <a className='cursor-pointer' href='https://www.youtube.com/@zomifederalunion' ><img src={youtube} alt='' /></a>
            
          </div>
        <p className='w-[90%] h-[8px] sm:w-[500px] sm:h-[13px] bg-white'> </p>
      </div>
      <div className=' flex justify-center'>
         <p className='text-2xl sm:text-4xl text-white ' id='jockey'> Zomi Federal Union</p>
      </div>
      <div className=' flex justify-center'>
        <p className=' text-white text-1xl sm:text-1xl'>Copyright @ 2024 zomifederalunion.org</p>
      </div>
    </div>
  )
}

export default Footer
