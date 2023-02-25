import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

export const ProductCard = ({id,Title,image,price,stars,reviews}) => {

  
  return (
    <div className={styles.main}>
        <div>
          <Link to={`/single/${id}` }  >  
        <img src={image[0]} alt="" />
        </Link>
        </div>
        <div className={styles.details}>
            <p id={styles.reviews}><button className={styles.rating}>{stars} </button> {reviews} review</p>
           
            <p >{Title}</p>
           
            <h3>₹{price}</h3>
            
            <button className={styles.premium}>₹{price} for Premium Member</button>
            <button className={styles.add}> Add to Cart</button>
        </div>
    </div>
  )
}
