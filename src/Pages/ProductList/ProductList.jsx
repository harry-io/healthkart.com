import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import { getProduct } from '../../Redux/Products/action';
import { ProductCard } from '../Components/ProductCard';
// import { getProduct } from '../Redux/action';


export const ProductList = () => {


    const dispatch = useDispatch();
    const product = useSelector((store) => store.product);
    // const location = useLocation();
    // const [searchParams] = useSearchParams();


    

    useEffect(() => {
        dispatch(getProduct)
    },[])


  return (
    <>
    <Sidebar />
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'20px',width:'40%',margin:'auto'}}>
          {
       product?.map((el) => {
          return <ProductCard key={el.id} {...el} />
        })
      }
    </div>
    </>
  )
}
