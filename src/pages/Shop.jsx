import React from 'react'
import ShopHero from '../components/ShopHero'
import ShopPage from '../components/ShopPage'
import Searchbar from '../components/Searchbar'

const Shop = () => {
  return (
    <div>
       <Searchbar />
      <ShopHero />
      <ShopPage />
    </div>
  )
}

export default Shop
