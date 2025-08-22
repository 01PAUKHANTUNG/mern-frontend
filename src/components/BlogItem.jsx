import { motion } from 'framer-motion'
import React from 'react'


const BlogItem = (props) => {
  return (
    <div className=''>
      {
         <motion.div
          initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2 }} 
          className=' flex w-[360px] h-[450px] flex-col py-2 px-2 border-2 border-gray-500 gap-y-2 rounded-lg'>
            <img src={props.image} />
            <p className='text-2xl '> {props.title} </p>
            <p className="full break-words max-w-[400px] ">{props.text}</p>
            <div className='flex  w-full gap-4 justify-between  '>
                <p >{props.writer}</p>
                <p className=''>{props.date}</p>
            </div>
        </motion.div>
      }
    </div>
  )
}

export default BlogItem
