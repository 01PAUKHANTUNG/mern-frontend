import React from 'react'
import Image from '../assets/Department/OrganizationChart.png'
import { Link } from 'react-router-dom'

const Department = () => {
  return (
    <div className='flex w-[100%] py-4 px-4 '>
       <div className='flex w-[50%]'>
          <div className='w-[70%] mx-auto bg-slate-300 py-5 px-5'>
            <p className='font-bold text-2xl'> ZFU DEPARTMENT</p>
             <ul className='flex flex-col gap-2 py-10'>
                <Link to='/finance' className='py-2 text-xl hover:text-red-600'><a href=''>Finance </a></Link>
                <Link to='/relations' className='py-2 text-xl hover:text-red-600'><a href=''>Public Relations</a></Link>
                <Link to='/logistics' className='py-2 text-xl hover:text-red-600'><a href=''>Logistics </a></Link>
                <Link to='/defence' className='py-2 text-xl hover:text-red-600'><a href=''>Defence (PDF Zoland) </a></Link>
                <Link to='/cdm' className='py-2 text-xl hover:text-red-600'><a href=''>CMD Support </a></Link>
                <Link to='/strike' className='py-2 text-xl hover:text-red-600'><a href=''>Strike </a></Link>
                <Link to='/humanitarian' className='py-2 text-xl hover:text-red-600'><a href=''>Humanitarian </a></Link>
                <Link to='/health' className='py-2 text-xl hover:text-red-600'><a href=''>Health </a></Link>
                <Link to='/education' className='py-2 text-xl hover:text-red-600'><a href=''>Education</a></Link>
                <Link to='/polic' className='py-2 text-xl hover:text-red-600'><a href=''>People Police Force </a></Link>
                <Link to='/administration' className='py-2 text-xl hover:text-red-600'><a href=''>Public Administration </a></Link>
                <Link to='/policy&research' className='py-2 text-xl hover:text-red-600'><a href=''>Policy & Research </a></Link>
                
             </ul>
          </div>
       </div>

       <div >
         <img src={Image}/>
       </div>
    </div>
  )
}

export default Department
