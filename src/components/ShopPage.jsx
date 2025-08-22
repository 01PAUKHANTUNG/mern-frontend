import React, { useContext, useEffect, useState } from 'react'
import { ZfuContext } from '../context/ZfuContext'
import ShopItem from './ShopItem';
import { motion} from 'framer-motion';
import Searchbar from './Searchbar';
import axios from 'axios';


const ShopPage = () => {
    const {products, search, setSearch} = useContext(ZfuContext);

    const [shopdata, setShopData] = useState([]);

   

    const filterData = ()=>{
      let productCopy = products.slice();
      productCopy = products.filter((item)=> item.category.toLowerCase().includes(search.toLowerCase()) )

      setShopData(productCopy);
    }

    useEffect(()=>{
      filterData();
    },[search, products])

  return (
    <div className='w-full py-6'>
      
       <div className='w-[80%] justify-center mx-auto'>
           <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }} 
           className='grid grid-cols-1 md:grid-cols-2 gap-y-4'>
              {
                shopdata.map((item, index)=>(
                    <div key={index}>
                      <ShopItem id={item._id} category={item.category} price={item.price} sizes={item.sizes} image={item.image} description={item.description} />
                    </div>
                ))
              }
           </motion.div>
       </div>
    </div>
  )
}

export default ShopPage
