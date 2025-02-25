import React from 'react'
import styles from './DessertCard.module.css'
import AddToCartBtn from './AddToCartBtn'

const DessertCard = (props) => {
  return (
    <div className={styles.dessertCard}>
        <img src={props.image.desktop} alt={props.name} />
        <AddToCartBtn {...props} />
        <h3>{props.category}</h3>
        <h2>{props.name}</h2>
        <h4>${props.price}</h4>
    </div>
  )
}

export default DessertCard