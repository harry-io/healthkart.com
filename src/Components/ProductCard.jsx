
import React, { useEffect, useState } from 'react';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const ProductCard = ({id,Title,image,price,stars,reviews}) => {
  const [data,setData] = useState([]);
  var carts = JSON.parse(localStorage.getItem('cart')) || [];

  const handleCart = () => {
    carts.push(data);
  
    localStorage.setItem('cart',JSON.stringify(carts))
    console.log(carts)
}
useEffect(()=>{
  axios.get(`https://cute-gold-agouti-coat.cyclic.app/proteins/${id}`).then((res)=>{
      setData(res.data)
      console.log(res.data)
  })
},[])
  return (
    <div className={styles.main}>
        <div>
          <Link to={`/product_list/single/${id}` }  >  
        <img src={image[0]} alt="" />
        </Link>
        </div>
        <div className={styles.details}>
            <p id={styles.reviews}><button className={styles.rating}>{stars} </button> {reviews} review</p>
           
            <p >{Title}</p>
           
            <h3>₹{price}</h3>
            
            <button className={styles.premium}>₹{price} for Premium Member</button>
            <button className={styles.add} onClick={handleCart}> Add to Cart</button>
        </div>
    </div>
  )
}
