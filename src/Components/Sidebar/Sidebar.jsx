import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from './SidebarCSS.module.css'

export const Sidebar = () => {

    const [searchParams,setSearhParams] = useSearchParams();
    const initialState = searchParams.getAll("brand")
    const initialOrder = searchParams.get("order");
    const [order, setOrder] = useState(initialOrder || "");
    const [drop,setDrop] = useState(false);
    const [brand,setBrand] = useState(initialState || []);

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

    useEffect(() => {
        const params = {
            brand
        }
        order && (params.order = order)
        setSearhParams(params)
    },[brand,order])


  return (
    <div className={styles.container} >
        <h1  > <button  onClick={handleDrop}>{drop === false ? '+': '-'}</button>Brands</h1>
        <div className={ drop === false ? styles.list : styles.list.show } >
           
        <div>  
        <input type="checkbox" value="MuscleBlaze" onChange={handleFilter} checked={brand.includes("MuscleBlaze")} />
        <label>MB</label>
        </div>
        <div>  
        <input type="checkbox" value="ON" onChange={handleFilter} checked={brand.includes("ON")} />
        <label>OB</label>
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
        <label>Ascending</label>
        <input
          type="radio"
          name="order"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>Descending</label>
      </div> 
        </div>
    </div>
  )
}
