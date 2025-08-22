import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../assets/logo/ZFUPNG.png'
import menuImage from '../assets/menu.png'
import dropdown from '../assets/dropdown.png'
import { ZfuContext } from '../context/ZfuContext'
import { secondsToMilliseconds } from 'framer-motion'


const Navbar = () => {
    const [visible, setVisible] = useState();
    const [menu, setMenu] = useState(false)
    const [department, setDepartment] = useState(false)
    const {token, setToken} = useContext(ZfuContext);

    const [currentState, setCurrentState] = useState('');

    const k = async()=>{
      if(token){
        setCurrentState('Log out')
      }else{
        setCurrentState('Create Account')
      }
    }

    const l = async()=>{
        if(currentState === 'Log out'){
          setToken('')
        }
    }

    useEffect(()=>{
       k();
       console.log(token)
    },[token])

    
  return (
    <div className="w-full py-10 sticky top-0 shadow-lg bg-white border-b-4 border-red-600 z-10">
        <div className='flex w-[80%] justify-between mx-auto items-center'>
            <Link to='/' > <img src={logo} className=' w-[150px] sm:w-[150px] md:w-[200px]' alt='' /></Link>
            <div className='flex flex-col gap-4 justify-end '>

                <div onClick={()=>l()} className='flex gap-3 justify-end'>
                   <Link to={`${token === '' ? '/login' : '/'}`}  ><p className='bg-blue-900 outline-none active:bg-blue-700 text-white py-1 px-2 sm:py-2 sm:px-4 rounded-lg '>{currentState}</p></Link>
                   
                </div>
                
                
                <ul className=' gap-8 hidden md:flex sm:gap-6'>
                    <NavLink className='flex flex-col hover:text-red-600 text-[18px]  items-center' to="/">Home                   <hr className='hidden border-none w-[90%] h-[3px] bg-red-600'/></NavLink>
                    <NavLink className='flex flex-col hover:text-red-600 text-[18px] items-center' to="/about-us">About Us       <hr className='hidden border-none w-[90%] h-[3px] bg-red-600'/></NavLink>       
                    <div onMouseEnter={()=>setDepartment(true)} onMouseLeave={()=>setDepartment(false)}  className='relative group'>
                      <NavLink  className={`flex hover:text-red-600 text-[18px] items-center gap-2`} to="/departments">
                          <div className='flex flex-col items-center'>
                            <p> Departments  </p> 
                            <hr className='hidden border-none w-[90%] h-[3px] bg-red-600'/>
                            </div>
                          <img src={dropdown} className={`w-[15px] h-[15px] transition-transform duration-300 ${department === true ? 'rotate-180' :''}`} alt=''/>
                
                      </NavLink>
                      <div onMouseEnter={()=>setDepartment(true)} onMouseLeave={()=>setDepartment(false)} className={` ${department === true ? 'flex' : 'hidden'} w-[300px] flex-col gap-3 absolute top-[30px]  bg-white py-4 px-6 shadow-md rounded-md`}>
                         <Link onClick={()=>setDepartment(false)} className='hover:text-red-600' to='/strike' > Strike  </Link>
                         <Link onClick={()=>setDepartment(false)} className='hover:text-red-600' to='/cdm' > CDM </Link>
                         <Link onClick={()=>setDepartment(false)} className='hover:text-red-600' to='/defence' > Defence </Link>
                         <Link onClick={()=>setDepartment(false)} className='hover:text-red-600' to='/education' > Education </Link>
                         <Link onClick={()=>setDepartment(false)} className='hover:text-red-600' to='/finance' > Finance </Link>
                         <Link onClick={()=>setDepartment(false)} className='hover:text-red-600' to='/health' > Health </Link>
                         <Link onClick={()=>setDepartment(false)} className='hover:text-red-600' to='/humanitarian' > Humanitarian </Link>
                         <Link onClick={()=>setDepartment(false)} className='hover:text-red-600' to='/logistics' > Logistics </Link>
                         <Link onClick={()=>setDepartment(false)} className='hover:text-red-600' to='/polic' > People's Polic Force </Link>
                         <Link onClick={()=>setDepartment(false)} className='hover:text-red-600' to='/policy&research' > Policy & Research </Link>
                         <Link onClick={()=>setDepartment(false)} className='hover:text-red-600' to='/administration' > Public Administration </Link>
                         <Link onClick={()=>setDepartment(false)} className='hover:text-red-600' to='/relations' > Public Relations </Link>
                      </div>
                     </div>
                    <NavLink className='flex flex-col hover:text-red-600 text-[18px] items-center' to="/press">Press             <hr className='hidden border-none w-[90%] h-[3px] bg-red-600'/></NavLink>
                    <NavLink className='flex flex-col hover:text-red-600 text-[18px] items-center' to="/blog">Blog         <hr className='hidden border-none w-[90%] h-[3px] bg-red-600'/></NavLink>
                    <NavLink className='flex flex-col hover:text-red-600 text-[18px] items-center' to="/shop">Shop               <hr className='hidden border-none w-[90%] h-[3px] bg-red-600'/></NavLink>
                    <NavLink className='flex flex-col hover:text-red-600 text-[18px] items-center' to="/contact-us">Contact Us   <hr className='hidden border-none w-[90%] h-[3px] bg-red-600'/></NavLink>
                    <NavLink className='flex flex-col hover:text-red-600 text-[18px] items-center' to="/faqs">FAQs               <hr className='hidden border-none w-[90%] h-[3px] bg-red-600'/></NavLink>
                </ul>
              <div className='group relative md:hidden '>                   
                 <div className='flex justify-end'>
                    <img onClick={()=>setMenu(!menu)} className={` ${menu === true ? 'hidden' : ''} w-[40px] cursor-pointer text-2xl ' src='' alt='' `} src={menuImage} alt='' />
                  </div>
                        
                  <div className={` ${menu === true ? 'flex  py-4 px-6 flex-col gap-4 absolute top-2 right-0 bg-white' : 'hidden'} `}> 
                    <div className='flex justify-end'> 
                        <p onClick={()=>setMenu(!menu)} className='cursor-pointer text-2xl '> X </p>
                    </div>
                             
                    <div className='flex w-[170px] flex-col gap-4'>                
                              <NavLink onClick={()=>setMenu(false)} className='hover:text-red-800 ' to='/'> Home </NavLink>
                              <NavLink onClick={()=>setMenu(false)} className='hover:text-red-800 ' to='/about-us'> About Us </NavLink>
                              <NavLink onClick={()=>setDepartment(!department)}  className='flex gap-2 hover:text-red-800   items-center relative group' to='/departments'> 
                                  Departments 
                                <img src={dropdown} className={`w-[15px] h-[15px] transition-transform duration-300 ${department === true ? 'rotate-180' : ''}`} alt=''/>
                              </NavLink>
                              <div onClick={()=>setDepartment(!department)} className={` ${department === true ? 'flex' : 'hidden'} flex-col gap-2 relative top-[1px]   `}>
                                          <Link onClick={()=>setMenu(false)} to='/strike' > Strike  </Link>
                                          <Link onClick={()=>setMenu(false)} className='hover:text-red-600' to='/cdm' > CDM </Link>
                                          <Link onClick={()=>setMenu(false)} className='hover:text-red-600' to='/defence' > Defence </Link>
                                          <Link onClick={()=>setMenu(false)} className='hover:text-red-600' to='/education' > Education </Link>
                                          <Link onClick={()=>setMenu(false)} className='hover:text-red-600' to='/finance' > Finance </Link>
                                          <Link onClick={()=>setMenu(false)} className='hover:text-red-600' to='/health' > Health </Link>
                                          <Link onClick={()=>setMenu(false)} className='hover:text-red-600' to='/humanitarian' > Humanitarian </Link>
                                          <Link onClick={()=>setMenu(false)} className='hover:text-red-600' to='/logistics' > Logistics </Link>
                                          <Link onClick={()=>setMenu(false)} className='hover:text-red-600' to='/polic' > People's Polic Force </Link>
                                          <Link onClick={()=>setMenu(false)} className='hover:text-red-600' to='/policy&resarch' > Policy & Research </Link>
                                          <Link onClick={()=>setMenu(false)} className='hover:text-red-600' to='/administration' > Public Administration </Link>
                                          <Link onClick={()=>setMenu(false)} className='hover:text-red-600' to='/relations' > Public Relations </Link>
                              </div>
                             
                              <NavLink onClick={()=>setMenu(false)} className='hover:text-red-800 ' to='/press'> Press </NavLink>
                              <NavLink onClick={()=>setMenu(false)} className='hover:text-red-800 ' to='/blog'> Blog  </NavLink>
                              <NavLink onClick={()=>setMenu(false)} className='hover:text-red-800 ' to='/shop'> Shop </NavLink> 
                              <NavLink onClick={()=>setMenu(false)} className='hover:text-red-800 ' to='/contact-us'> Contact Us </NavLink>
                              <NavLink onClick={()=>setMenu(false)} className='hover:text-red-800 ' to='/faqs'> FAQs </NavLink>                               
                    </div>                         
                 </div>
                                           
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
