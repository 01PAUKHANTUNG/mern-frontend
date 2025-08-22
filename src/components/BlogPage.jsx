import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ZfuContext } from '../context/ZfuContext';
import arrowLeft from '../assets/arrow-left.ico'

const BlogPage = () => {

   const {blogId} = useParams();
   const [blogData, setBlogData] = useState([]);
   const {blogs} = useContext(ZfuContext)
   const navigate = useNavigate();

   const data = ()=>{  
     return setBlogData(blogs.filter(item=> item._id === blogId))
   }

   useEffect(()=>{  
      data()          
   },[blogId, blogs])

   const back = ()=>{
       navigate(-1)
   }

 return(
    <div>
      <div>
         <img  onClick={back} src={arrowLeft} className='w-[40px] ml-10 py-6 cursor-pointer' alt='' />
      </div>
        <div className='w-[80%] justify-center mx-auto' >
           {
            blogData.map((item, index)=>(
               <div key={index}>
                  <img src={item.image} />
                  <div className='flex flex-col gap-4 py-6'>
                     <div className='flex justify-center'>
                        <p className='text-3xl font-semibold'>{item.title}</p>
                     </div>
                     <div className='flex justify-between'>
                        <p className=' italic'>Writer : <strong>{item.writer}</strong> </p>
                        <p className=' italic'>Date : <strong>{item.date}</strong></p>
                     </div>
                     
                     <p className='text-[18px] text-gray-800 leading-relaxed'>{item.text}</p>
                  </div>
               </div>
            ))
           }
        </div>
    </div>
 )
}

export default BlogPage
