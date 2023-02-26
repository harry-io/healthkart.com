
import React, { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { store } from '../../Redux/store';
import styles from './SinglePage.module.css';

import axios from 'axios';
import { FaSadCry } from 'react-icons/fa';

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { store } from "../../Redux/store";
import styles from "./SinglePage.module.css";

import axios from "axios";
import { FaSadCry } from "react-icons/fa";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar/Navbar";


export const SinglePage = () => {
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  console.log(location);
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);

    const [weight,setWeight] = useState(true)
    const [dis,setDis] = useState(false)
 
    const [change,setChange] = useState("");
    const navigate = useNavigate();
    const prod = useSelector((store) => store);
 
    var carts = JSON.parse(localStorage.getItem('cart')) || [];
//   const [weight, setWeight] = useState(true);
//   const [dis, setDis] = useState(false);

//   const [change, setChange] = useState("");
//   const navigate = useNavigate();
 
//   const prod = useSelector((store) => store);

  // var carts = JSON.parse(localStorage.getItem("cart")) || [];

    //  },[])


// useEffect(()=>{
//     axios.get(`https://cute-gold-agouti-coat.cyclic.app/proteins/${id}`).then((res)=>{
//         setData(res.data)
//         // console.log(res.data)
//         setChange(res.data.image[0])
//     })
// },[])


  useEffect(() => {
    axios.get(`https://cute-gold-agouti-coat.cyclic.app/proteins/${id}`)
      .then((res) => {
        setData(res.data);
        // console.log(res.data)
        setChange(res.data.image[0]);
      });
  }, []);



  const handleCart = () => {
    carts.push(data);
    localStorage.setItem("cart", JSON.stringify(carts));
    // console.log(carts)
    toast("Item added to cart !");
    setDis(true);
  }
  var main = data.image
// console.log(main);

  var main = data.image;
  // console.log(main);


  return (
      <div>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.images}>

            <div className={styles.sideImage} >

                {
                    main?.map((el) => {
                        return  <img key={Date.now()+Math.random()} src={el} alt="" onClick={() => setChange(el)} />
                    })
                }
               
            </div>
            <div className={styles.mainImage}>
                <img src={change} alt="" />
            </div>
          

        </div>
        <div className={styles.details}>
        <h2>{data.Title}</h2>
        <h2>Rich Milk Chocolate</h2>
        <p>BY {data.brand}</p>
        <h3>₹ {data.price} <span className={styles.mrp}>{data.mrp}</span></h3>
        <p>Get it by 1 march</p>
       
        <button className={styles.premium}>₹ {(data.price/100)*10} for Premium Member</button>
        <p>3 interest free payments of ₹1633 with</p>
        <div className={styles.freebie}>

          <div className={styles.sideImage}>
            {main?.map((el) => {
              return (
                <img
                  key={Date.now() + Math.random()}
                  src={el}
                  alt=""
                  onClick={() => setChange(el)}
                />
              );
            })}
          </div>
          <div className={styles.mainImage}>
            <img src={change} alt="" />
          </div>
        </div>
        <div className={styles.details}>
          <h2>{data.Title}</h2>
          <h2>Rich Milk Chocolate</h2>
          <p>BY {data.brand}</p>
          <h3>₹ {data.price}</h3>
          <p>Get it by 1 march</p>

          <button className={styles.premium}>₹ 35455 for Premium Member</button>
          <p>3 interest free payments of ₹1633 with</p>
          <div className={styles.freebie}>

            <div className={styles.freeImg}>
              <img
                src="https://img9.hkrtcdn.com/21471/prd_2147078_c_t.jpg"
                alt=""
              />
            </div>
            <div>
              <p>MuscleBlaze Limited Edition</p>
              <p>Vidyut Shaker</p>
              <h4>FREE</h4>
            </div>
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.minus}
              onClick={() => setCount(count - 1)}  >
              -
            </button>
            <button className={styles.count}>{count}</button>

            <button className={styles.plus} onClick={() => setCount(count+1)}>+</button>
            <button className={styles.addToCart} onClick={handleCart} disabled={dis == true} >Add to Cart</button>
            <Link to={`/payments/${id}`} >
            <button className={styles.quick} >Quick Buy</button>
            </Link>

            <button className={styles.plus} onClick={() => setCount(count + 1)}>
              +
            </button>
            <button
              className={styles.addToCart}
              onClick={handleCart}
              disabled={dis == true} >
              Add to Cart
            </button>
            <Link to={`/payments/${id}`}>
              <button className={styles.quick}>Quick Buy</button>
            </Link>
          </div>

        </div>
        <div className={styles.benifits}></div>
      </div>
      <div className={styles.weights}>
        <div className={styles.prodBene}>
          <div className={styles.helps}>
            <h4>Product Benefits</h4>
            <p>
              <img
                src="https://static1.hkrtcdn.com/hknext/static/media/pdp/Vector.svg"
                alt=""
              />
              Helps in Muscle Building
            </p>
          </div>
          <div className={styles.nutrients}>
            <div>
              <p>Protein</p>
              <h3>25 g</h3>
            </div>

            <div className={styles.kilo}>
                <div className={styles.convert}>
                    <div className={styles.convertTop}>
                        <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/weight.svg" alt="" />
                        <h3>Weight</h3>
                        <button className={styles.kg} onClick={()=> setWeight(true)} >KG</button>
                        <button className={styles.lb} onClick={() => setWeight(false)}>LB</button>
                    </div>
                    <div className={styles.convertBottom}>
                    <div>
                          {
                            weight == true ? "5Kg" : "11LB"
                          }
                          <br />
                           <p>₹{data.price}</p> 
                        </div>
                        <div>
                          {
                            weight == true ? "1Kg" : "2.2LB"
                          }
                          <br />
                           <p>₹999</p> 
                        </div>
                        <div>
                          {
                            weight == true ?  "2Kg" : "4.4LB"
                          }
                          <br />
                           <p>₹2099</p> 
                        </div>
                    </div>
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
              <img
                src="https://static1.hkrtcdn.com/hknext/static/media/pdp/weight.svg"
                alt=""
              />
              <h3>Weight</h3>
              <button className={styles.kg} onClick={() => setWeight(true)}>
                KG
              </button>
              <button className={styles.lb} onClick={() => setWeight(false)}>
                LB
              </button>
            </div>
            <div className={styles.convertBottom}>
              <div>
                {weight == true ? "5Kg" : "11LB"}
                <br />
                <p>₹{data.price}</p>
              </div>
              <div>
                {weight == true ? "1Kg" : "2.2LB"}
                <br />
                <p>₹999</p>
              </div>
              <div>
                {weight == true ? "2Kg" : "4.4LB"}
                <br />
                <p>₹2099</p>
              </div>
            </div>
          </div>
        </div>
      </div>
       </div>                   
    </div>
    </div>
  )
}
