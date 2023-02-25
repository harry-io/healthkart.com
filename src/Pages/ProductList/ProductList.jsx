import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { getProduct } from '../../Redux/Products/action';


import styles from './ProductList.module.css';


import{ ProductCard} from "../../Components/ProductCard"





export const ProductList = () => {


    const dispatch = useDispatch();

    const product = useSelector((store) => store.ProductReducer.product);
    const location = useLocation();
    const [searchParams] = useSearchParams();

    let paramObj = {
      params: {
          color: searchParams.getAll('cate'),
          _sort: searchParams.get('order') && 'price',
          _order: searchParams.get('order')
      }
  }
   

    useEffect(() => {
        dispatch(getProduct(paramObj))
    },[location.search])


  return (
    <>

    <Sidebar />
    <div className={styles.container}>
          {
       product?.map((el) => {
          return <ProductCard key={el.id} {...el} />
        })
      }
    </div>
    </>
  )
}
