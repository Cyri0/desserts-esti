import React, { createContext, useEffect, useState } from 'react'
import DessertCard from './components/DessertCard'
import Cart from './components/Cart'

export const CartContext = createContext()

const App = () => {

  const [desserts, setDesserts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(data => setDesserts(data)
    )
  }, [])
  
  return (
    <div>
      <CartContext.Provider value={{cart: cart, setCart: setCart}}>
      <Cart />
      {
        desserts.map(dessert => <DessertCard {...dessert}/>)
      }
      </CartContext.Provider>
    </div>
  )
}

export default App