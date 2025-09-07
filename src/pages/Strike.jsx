import React from 'react'
import DepartmentTitle from '../components/DepartmentTitle'
import image1 from '../assets/strike/1.png'
import image2 from '../assets/strike/2.png'
import image3 from '../assets/strike/3.png'
import image4 from '../assets/strike/4.png'

const Strike = () => {
  return (
    <div>
       <div>      
          <DepartmentTitle title='DEPARTMENT OF STRIKE' /> 
       </div>

       <div className='w-[80%] mx-auto py-4'>
          <div className='flex justify-between py-4 '>
             <div className='w-[50%]'>
              <p>March 28, 2023 ni PDF Zoland gate ah khualzin mipite tungah
                 revolution tawh kisai thugenna le mipi tungah lungdamkohna ki nei hi.</p>
             </div>
             <div className='flex justify-end'>
               <img src={image1} className='w-[300px]'/>
             </div>
          </div>

           <div className='flex justify-between py-4'>
             <div className='w-[50%]'>
              <p></p>
             </div>
             <div className='flex justify-end'>
               <img src={image2} className='w-[300px]'/>
             </div>
          </div>

           <div className='flex justify-between py-4'>
             <div className='w-[50%]'>
              <p>Tedim gamhuam sungah Public Administratioin Board te tawh mapangkhawm in revolution tawh kisai thugenna Public Conference ki nei thei hi. Hih pawi ah PPF pan le Education lampan makai ten tanu hong sepsak uh hi.</p>
             </div>
             <div className='flex justify-end'>
               <img src={image3} className='w-[300px]'/>
             </div>
          </div>

           <div className='flex justify-between py-4'>
             <div className='w-[50%]'>
              <p>Ukna buluh a beisiang dong ma pangkhawm ni cih thulu tawh a (2) vei na Public Conference ki nei thei hi.</p>
             </div>
             <div className='flex justify-end'>
               <img src={image4} className='w-[300px]'/>
             </div>
          </div>

       </div>

    </div>
  )
}

export default Strike
