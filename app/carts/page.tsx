import React from 'react'
import CartItem from '../components/Cart/CartItem'
import HeroArea from '../components/HeroArea'
const carts = () => {
  return (
    <>
    <HeroArea
        title="Cart"
        description="Get all your items here"
      />
    <div>
      <CartItem/>
    </div>
    </>
    
  )
}

export default carts
