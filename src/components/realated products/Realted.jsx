import React from 'react'
import './realted.css'
import data_products from "../assets/data";
import Item from "../items/Item"
const Realted = () => {
  return (
    <div className='relatedproducts'>
<h1>Reated products</h1>
<hr />
<div className="relatedproductsitem">
{data_products.map((item,i) =>{
    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

})}
</div>
    </div>
  )
}

export default Realted