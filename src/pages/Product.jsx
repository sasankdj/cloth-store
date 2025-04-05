import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom';
import Breakrums from '../components/breakkrums/Breakrums';
import Productdispaly from '../components/productdispaly/Productdispaly';
import Descriptionbox from '../components/description box/Descriptionbox';
import Realted from '../components/realated products/Realted';

const Product = () => {
  const {all_product}=useContext(Shopcontext);
  const {productId}=useParams();
  const product=all_product.find((e) => e.id===Number(productId))
  return (
    <div>
      
      <Breakrums product={product}/>
    <Productdispaly product={product}/>
    <Descriptionbox />
    <Realted />
    </div>
  )
}
  
export default Product