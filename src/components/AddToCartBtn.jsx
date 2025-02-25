import React, { useContext, useEffect, useState } from 'react'
import styles from "./AddToCartBtn.module.css"
import { CartContext } from '../App'

const AddToCartBtn = (props) => {
  
  const[pieceNum, setPieceNum] = useState(0)
  const{cart, setCart} = useContext(CartContext)

  useEffect(()=>{
    const dessert = {
      name: props.name,
      category: props.category,
      price: props.price,
      amount: pieceNum
    }

    const updatedCart = cart.filter(c => c.name !== props.name) // kiszedi, ha benne van
    if (pieceNum > 0) {
      updatedCart.push(dessert)// visszarakja, ha több mint 0 a pieceNum
    }
    setCart(updatedCart)

  },[pieceNum])

  const increase = () => {
    setPieceNum(pieceNum + 1)
  }

  const decrease = () => {
    setPieceNum(pieceNum - 1)
  }

  return (
    <>
    {
    pieceNum == 0 ?
        <div className={styles.addBtn} onClick={increase}>
            <i className="fa-solid fa-cart-plus"></i>
            Add to Cart
        </div>
    : 
        <div className={styles.addBtn + " " + styles.selected}>
            <button onClick={decrease}><i className="fa-solid fa-minus"></i></button>
            {pieceNum}
            <button onClick={increase}><i className="fa-solid fa-plus"></i></button>
        </div>
    }
    </>
  )
}

export default AddToCartBtn