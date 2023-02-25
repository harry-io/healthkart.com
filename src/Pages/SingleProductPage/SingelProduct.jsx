import React, { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { store } from '../../Redux/store';
import styles from './SinglePage.module.css';

import axios from 'axios';

export const SinglePage = () => {
    const {id}=useParams()
    console.log(id)
    const location=useLocation()
    console.log(location)
    const [count,setCount] = useState(1);
    const [data,setData] = useState([]);


 
    const prod = useSelector((store) => store);
    console.log(store)
    console.log(prod)
    var carts = JSON.parse(localStorage.getItem('cart')) || [];


    // useEffect(() => {
    //     const prodData = prod.find((el) => el.id === +id)
    //     console.log(prodData)
    //     prodData && setData(prodData)

    // },[])
useEffect(()=>{
    axios.get(`https://cute-gold-agouti-coat.cyclic.app/proteins/${id}`).then((res)=>{
        setData(res.data)
        console.log(res.data)
    })
},[])
    const handleCart = () => {
        carts.push(data);
        localStorage.setItem('cart',JSON.stringify(carts))
        console.log(carts)
    }



  return (
    <>
    <div className={styles.main} >
        
        <div className={styles.images}>
            <div className={styles.sideImage} >
                <img src="https://img4.hkrtcdn.com/14680/prd_1467923-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg" alt="" />
                <img src="https://img4.hkrtcdn.com/14680/prd_1467923-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg" alt="" />
                <img src="https://img4.hkrtcdn.com/14680/prd_1467923-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg" alt="" />
                <img src="https://img4.hkrtcdn.com/14680/prd_1467923-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg" alt="" />
                <img src="https://img4.hkrtcdn.com/14680/prd_1467923-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg" alt="" />
            </div>
            <div className={styles.mainImage}>
                <img src={data.image[0]} alt="" />
            </div>
          

        </div>
        <div className={styles.details}>
        <h2>{data.Title}</h2>
        <h2>Rich Milk Chocolate</h2>
        <h3>₹ {data.price}</h3>
        <p>Get it by 1 march</p>
       
        <button className={styles.premium}>₹ 35455 for Premium Member</button>
        <p>3 interest free payments of ₹1633 with</p>
        <div className={styles.freebie}>
            <div className={styles.freeImg}>
               <img src="https://img9.hkrtcdn.com/21471/prd_2147078_c_t.jpg" alt="" />
            </div>
            <div>
                <p>MuscleBlaze Limited Edition</p>
                <p>Vidyut Shaker</p>
                <h4>FREE</h4>
            </div>

        </div>
        <div className={styles.buttons}>
            <button className={styles.minus} onClick={() => setCount(count-1)}>-</button>
            <button className={styles.count}>{count}</button>
            <button className={styles.plus} onClick={() => setCount(count+1)}>+</button>
            <button className={styles.addToCart} onClick={handleCart} >Add to Cart</button>
            <button className={styles.quick}>Quick Buy</button>
        </div>
       
        </div>
        <div className={styles.benifits}>
            
        </div>

        


    </div>
    <div className={styles.weights}>
            <div className={styles.prodBene}>
                <div className={styles.helps}>
                    <h4>Product Benefits</h4>
                    <p>
                        <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/Vector.svg" alt="" />  
                        Helps in Muscle Building
                    </p>
                </div>
                <div className={styles.nutrients}>
                    <div>
                        <p>Protein</p>
                        <h3>25 g</h3>
                    </div>
                    <div>
                        <p>Protein</p>
                        <h3>25 g</h3>
                    </div>
                    <div>
                        <p>Protein</p>
                        <h3>25 g</h3>
                    </div>
                    <div>
                        <p>Protein</p>
                        <h3>25 g</h3>
                    </div>
                    <div>
                        <p>Protein</p>
                        <h3>25 g</h3>
                    </div>
                    <div>
                        <p>Protein</p>
                        <h3>25 g</h3>
                    </div>
                </div>
            </div>
            <div className={styles.kilo}>
                <div className={styles.convert}>
                    <div className={styles.convertTop}>
                        <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/weight.svg" alt="" />
                        <h3>Weight</h3>
                        <button className={styles.kg}>KG</button>
                        <button className={styles.lb}>LB</button>
                    </div>
                    <div className={styles.convertBottom}>
                        <div>
                         
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
  )
}
