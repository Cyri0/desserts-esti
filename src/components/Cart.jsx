import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../App'

const Cart = () => {

    const {cart} = useContext(CartContext)
    const [dessertsNum, setDessertsNum] = useState(0)
    const [priceSum, setPriceSum] = useState(0)

    useEffect(()=>{
        let dessertCount = 0
        let priceCount = 0
        cart.forEach(cart_item => {
            dessertCount += cart_item.amount
            priceCount += cart_item.amount * cart_item.price
        })
        setDessertsNum(dessertCount)
        setPriceSum(priceCount)
    },[cart])

  return (
    <div>
        <h2>Your Cart ({dessertsNum})</h2>
        {
            cart.map(cart_item => <div>{cart_item.name} - {cart_item.amount}db ${cart_item.price}</div>)
        }
        <h3>SUM: ${priceSum}</h3>
    </div>
  )
}

export default Cart