import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './ProductCard.module.css';

export const ProductCard = ({title,image,flvour,price,rating,reviews}) => {
  return (
    <div className={styles.main}>
        <div>
        <img src={image} alt="" />
        </div>
        <div className={styles.details}>
            <p id={styles.reviews}><button className={styles.rating}>{rating} </button> {reviews} review</p>
            <p>{title}</p>
            <p>{flvour}</p>
            <h3>₹{price}</h3>
            <button className={styles.premium}>₹{price} for Premium Member</button>
            <button className={styles.add}>  Add to Cart</button>
        </div>
    </div>
  )
}
