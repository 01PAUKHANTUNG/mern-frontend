import React from 'react'

const DepartmentTitle = (props) => {
  return (
    <div className='w-full bg-blue-900 py-6 '>
      <div className='w-[80%] mx-auto'>
           <p  className='text-2xl sm:text-4xl font-semibold text-white '> {props.title}</p>
     </div>   
    </div>
  )
}

export default DepartmentTitle
