import { createContext, useEffect, useState } from "react";
import {press} from '../assets/Press/Press'
import { toast } from "react-toastify";
import axios from "axios";



export const ZfuContext = createContext();

const ZfuProvider = (props)=>{
 const currency = "$"
 const [search, setSearch] = useState('');
 const [cartItem, setCartItem] = useState({});
 const [cartData, setCartData] = useState([]);
 const [blogs, setBlogs] = useState([]);
 const [upComingEvent, setUpComingEvent] = useState([]);
 const [galhangte, setGalhangte] = useState([]);
 
 const backendUrl = import.meta.env.VITE_BACKEND_URL
 const [products, setProducts] = useState([]);
 const [token, setToken] = useState('');

  const getProductData = async()=>{
        const response =await axios.get(backendUrl + '/api/products/listProduct')
      try {
        if(response.data.success){
        
          setProducts(response.data.products)

        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      } 
        
  }

   const getBlog = async()=>{
        const response =await axios.get(backendUrl + '/api/blogs/listBlog')
      try {
        if(response.data.success){
        
          setBlogs(response.data.blogs)

        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }        
  }

   const getEvent = async()=>{
        const response =await axios.get(backendUrl + '/api/events/listEvent')
      try {
        if(response.data.success){
          
          setUpComingEvent(response.data.events)
        }
        
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }        
  }

    const getGalhangte = async()=>{
        const response =await axios.get(backendUrl + '/api/galhangte/listGalhangte')
      try {
        if(response.data.success){
          
          setGalhangte(response.data.galhangtes)
        }
        
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }        
  }

  useEffect(()=>{
   getProductData()
   getBlog()
   getEvent()
   getGalhangte()
  },[])

 const addToCart = async (id, sizes) => {
  let cart = structuredClone(cartItem);

  if (!sizes || sizes.length === 0) {
    toast.error("Select Product Sizes");
    return;
  }

  try {
    if (!cart[id]) {
      cart[id] = {};
    }

    sizes.forEach(size => {
      if (cart[id][size]) {
        cart[id][size] += 1;
      } else {
        cart[id][size] = 1;
      }
    });

    setCartItem(cart)

  } catch (error) {
    toast.error(error.message || error);
  }
   if(token){
      try {
        await axios.post(backendUrl + '/api/cart/add', {id, sizes}, {headers:{token}})

      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
};

const getCartCount = ()=>{
  let total = 0;
  for(const items in cartItem){
    for(const item in cartItem[items]){
      if(cartItem[items][item]> 0){
          total += cartItem[items][item]
      }
      
    }
  }
  return total;
}
 
const updateQuantity= (id, sizes, quantity)=>{
 const cartData = structuredClone(cartItem)
 cartData[id][sizes] = quantity
 setCartItem(cartData)
}


const removeCart = (id, sizes)=>{
   const cartData = structuredClone(cartItem)
   cartData[id][sizes] = ''
   setCartItem(cartData)
}

const TotalAmount = ()=>{
  let total = 0;
  for(const items in cartItem){
    console.log(cartItem)
    let info = products.find(product=> product._id === items)

    for(const item in cartItem[items]){
      if(cartItem[items][item]>0){
        total += info.price * cartItem[items][item]
      }
    }
  }
  return total;
}


 
    const value = {press, blogs, products, upComingEvent, currency, search, setSearch,
                   addToCart, cartItem, cartData, setCartData, galhangte, getCartCount,
                  updateQuantity, removeCart, TotalAmount, backendUrl, token, setToken}

    return (
        <ZfuContext.Provider value={value}>
           {props.children}
         </ZfuContext.Provider>
    )

}


export default ZfuProvider
