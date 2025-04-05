import React, { createContext, useState, useEffect } from "react";
import all_product from "../components/assets/all_product"
// import item from "../components/items/Item";
export const Shopcontext=createContext(null);

const getdefaultcart = ()=>{
    let cart ={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
        
    }
    return cart;
}

const Shopcontextprovider=(props) =>{
    const [cartitem,setcartitem]=useState(getdefaultcart());
    // console.log(cartitem);
    const addtocart=(itemId)=>{
        setcartitem((prev) =>({...prev,[itemId]:(prev[itemId])+1}))
        // console.log(cartitem);
        
    }
    const removefromcart=(itemId)=>{
        setcartitem((prev) =>({...prev,[itemId]:(prev[itemId])-1}))
    }

    // useEffect(() => {
    //     console.log("Updated cart: ", cartitem); // Log the updated cart state
    // }, [cartitem]); // Runs when cartitem changes
    const totalcartamout= () => {
        let totalamount=0;
        for(const item in cartitem){
            if(cartitem[item]>0){
                let iteminfo=all_product.find((product)=> product.id===Number(item))
                totalamount += iteminfo.new_price * cartitem[item];
            }
        }
        return totalamount;
    }

    const gettotalitems=()=>{
            let toatitem=0;
            for(const item in cartitem){
            if(cartitem[item]>0){
                toatitem +=cartitem[item];
                }
            }
                return toatitem;
    }
    const contextvalue ={gettotalitems,totalcartamout, all_product,cartitem,addtocart,removefromcart};

    return (
        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>
    )
} 

export default Shopcontextprovider;