import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Department from './pages/Department'
import Press from './pages/Press'
import Contact from './pages/Contact'
import FQA from './pages/FQA'
import Shop from './pages/Shop.jsx'
import Blog from './pages/Blog.jsx'
import BlogPage from './components/BlogPage.jsx'
import Login from './pages/Login.jsx'
import OrderPlace from './pages/OrderPlace.jsx'
import Cart from './pages/Cart.jsx'
import { ToastContainer } from 'react-toastify'
import Strike from './pages/Strike.jsx'
import CDM from './pages/CDM.jsx'
import Defence from './pages/Defence.jsx'
import Education from './pages/Education.jsx'
import Health from './pages/Health.jsx'
import Humanitarian from './pages/Humanitarian.jsx'
import Police from './pages/Police.jsx'
import Administration from './pages/Administration.jsx'
import Relations from './pages/Relations.jsx'
import Policy from './pages/Policy.jsx'
import OrderForm from './pages/OrderForm.jsx'
import Finance from './pages/Finance.jsx'
import Logistics from './pages/Logistics.jsx'



const App = () => {
  return (
    <div >
      <ToastContainer />
        <Navbar />
          <Routes>        
             <Route path='/' element={<Home />} />
             <Route path='/about-us' element={<AboutUs />} />
             <Route path='/departments' element={<Department />} />
             <Route path='/press' element={<Press />} />
             <Route path='/shop' element={<Shop />} />
             <Route path='/blog' element={<Blog />} />
             <Route path='/contact-us' element={<Contact />} />
             <Route path='/faqs' element={<FQA />} />
             <Route path='/blog/:blogId' element={<BlogPage />} />
             <Route path='/login' element={<Login />} />
             <Route path='/order-place/:orderId' element={<OrderPlace />} />
             <Route path='/cart' element={<Cart />} />

             <Route path='/strike' element={<Strike />} />
             <Route path='/cdm' element={<CDM />} />   
             <Route path='/defence' element={<Defence />} /> 
             <Route path='/finance' element={<Finance />} />  
             <Route path='/education' element={<Education />} />   
             <Route path='/health' element={<Health />} />   
             <Route path='/humanitarian' element={<Humanitarian />} /> 
             <Route path='/logistics' element={<Logistics />} />  
             <Route path='/polic' element={<Police />} />   
             <Route path='/administration' element={<Administration />} />   
             <Route path='/policy&research' element={<Policy/>} />   
             <Route path='/relations' element={<Relations />} />  
             <Route path='/order-form' element={<OrderForm />} />           
             
          </Routes>
        <Footer />
    </div>
  )
}

export default App
