import React, { useState } from 'react'
import styles from "./AddToCartBtn.module.css"

const AddToCartBtn = () => {
  
  const[pieceNum, setPieceNum] = useState(0)
  
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