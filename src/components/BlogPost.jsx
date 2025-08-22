import React, { useContext, useEffect } from 'react'
import Title from './Title'
import BlogItem from './BlogItem'
import { ZfuContext } from '../context/ZfuContext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'


const BlogPost = () => {
    const {blogs, token} = useContext(ZfuContext);

    const latest = blogs.slice(0, 8);

   return (
    <div className='flex flex-col w-[80%] mx-auto mb-6' >
      
         <motion.div
          initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2 }} 
         >
            <Title title="Latest Post" />
         </motion.div>
         <div className='items-center grid-cols-1 sm:grid-cols-1 grid md:grid-cols-3 justify-items-center gap-x-3 gap-y-3 mt-4 '>
           {
            latest.map((item, index)=>(
                <div key={index} className='cursor-pointer' >
                   <Link to={`${token === '' ?   '/login' : `/blog/${item._id}` }`} >
                    <BlogItem image={item.image} title={item.title} category={item.category} text={item.text.slice(0,40)+'...'} writer={item.writer} date={item.date}/></Link>
               </div>
            ))
           }       
       </div>
    </div>
  )
}


export default BlogPost
