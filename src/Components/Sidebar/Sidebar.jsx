import React, { useEffect, useState } from 'react'
import { useSearchParams,useNavigate } from 'react-router-dom';
import styles from './SidebarCSS.module.css'
import { Button, ButtonGroup } from '@chakra-ui/react'


export const Sidebar = () => {

    const [searchParams,setSearhParams] = useSearchParams();
    const initialState = searchParams.getAll("brand")
    const initialOrder = searchParams.get("order");
    const [order, setOrder] = useState(initialOrder || "");
    const [drop,setDrop] = useState(false);
    const [brand,setBrand] = useState(initialState || []);
    const navigate = useNavigate();

    const handleFilter = (e) => {
        let newCat  = [...brand];

        if(newCat.includes(e.target.value)){
            newCat.splice(newCat.indexOf(e.target.value),1)
        }else{
            newCat.push(e.target.value)
        }
        setBrand(newCat)
    }
    const handleSort = (e) => {
        setOrder(e.target.value);
      };
    const handleDrop = () => {
        setDrop((prev) =>  !prev)
       
    }

    function handleReset()
    {
      navigate("/product_list")
     
      
    }

    useEffect(() => {
        const params = {
            brand
        }
        order && (params.order = order)
        setSearhParams(params)
    },[brand,order])


  return (
    <div className={styles.container} >
        <h1  > <button className={styles.butt} onClick={handleDrop}>{drop === false ? '+': 'X'}</button>Filters</h1>
        <div className={ drop === false ? styles.list: styles.list.show } >
           
        <div>  
            <h1>Brands</h1>
        <input type="checkbox" value="MuscleBlaze" onChange={handleFilter} checked={brand.includes("MuscleBlaze")} />
        <label>MuscleBlaze</label>
        </div>
        <div>  
        <input type="checkbox" value="ON" onChange={handleFilter} checked={brand.includes("ON")} />
        <label>ON</label>
        </div>
        <div>  
        <input type="checkbox" value="GNC" onChange={handleFilter} checked={brand.includes("GNC")} />
        <label>GNC</label>
        </div>
        <div onChange={handleSort}>
        
          <h1>Sort by price</h1>
          <input
            type="radio"
            name="order"
            value={"asc"}
            defaultChecked={order === "asc"}
          />
          <label>Low - High</label>
          <br />
          <input
            type="radio"
            name="order"
            value={"desc"}
            defaultChecked={order === "desc"}
          />
          <label>High - Low</label>
      </div> 
      <div className='resetbtn'>
        <Button colorScheme='red' size={["50px","50px","50px"]} onClick={handleReset}>Reset</Button>
      </div>
        </div>
    </div>
  )
}
