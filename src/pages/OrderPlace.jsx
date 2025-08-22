import React, { useContext, useEffect,  useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router'
import { ZfuContext } from '../context/ZfuContext';
import cart from '../assets/cart.png'
import { motion } from 'framer-motion';
import backImage from '../assets/arrow-left.ico'
import Login from './Login';


const OrderPlace = () => {
    const {orderId} = useParams();
    const {products, currency, addToCart, getCartCount, token} = useContext(ZfuContext);
    const [orderProduct, setOrderProduct] = useState([]);
    const [size, setSize] = useState([]);
     
    const sizeSelect = (item)=>{
       if(size.includes(item)){
         setSize(prev=> prev.filter(data => data !== item))
       }else{
        setSize(prev=>[...prev, item])
       }
    }
    
       const filter = ()=>{
       setOrderProduct(products.filter(item=> item._id === orderId))
    }

    

  const navigate = useNavigate();
  

  const back = ()=>{
    navigate(-1)
  }


    useEffect(()=>{
        filter()       
    },[products, orderId])

    if(!token){
      return <Login />
    }
  return (
    <div>      
         <div className='sticky top-40 sm:top-44 bg-slate-200 shadow-lg'>
            <div className=' w-[90%] justify-between mx-auto py-4' >
          <motion.div 
           initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }} 
              className='flex justify-end'>
             
            <Link to='/cart' ><div className='flex'>
                  <img  src={cart} className='w-[40px] cursor-pointer ' alt=''/>
                     <p className='relative bg-red-600 w-6 h-6 rounded-full top-6 text-center text-white right-4'>{getCartCount()} </p>
                  </div> 
             </Link> 
          </motion.div>
           
          <div>
             
          </div>
       </div>
    </div>
  <div>
      <img onClick={back} className='w-[30px] cursor-pointer py-4 ml-4' src={backImage} alt='' />
   </div>

       {
          orderProduct.map((item, index)=>(
            <div key={index} className='flex w-[80%]  mx-auto py-2'>
                <div className='flex gap-10 justify-center mx-auto'>
                     <img src={item.image}  className='w-[40%] h-[400px] border-2 border-gray-600' alt='' />
                      
                    <div className='flex flex-col gap-4'>
                        <p className='text-2xl font-semibold mx-auto'>{item.category}</p>
                        <p className='leading-relaxed text-gray-800 mx-auto'>{item.description}</p>
                        <div className='flex gap-2 mx-auto'>
                        {
                            item.sizes.map((item, index)=>(
                                <button onClick={()=>sizeSelect(item)
                                } className={`border-2 ${size.includes(item) ? 'bg-red-700 text-white': 'bg-slate-400'} py-2 px-2 } `} key={index} > {item} </button>
                            ))             
                        }
                        </div>
                        <p className='mx-auto font-semibold'>{currency}{item.price}.00</p>
                        <button onClick={()=>addToCart(item._id, size)} className='bg-green-400 active:bg-green-500 text-white mx-auto text-center w-[200px]  py-2 px-4   rounded-lg'> Add To Cart </button>
                    </div> 
                    
                </div>

            </div>
          ))
       }
    </div>
  )
}

export default OrderPlace
