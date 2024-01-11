import React, { useEffect, useState } from 'react'
import './cart.css'
const Cart = () => {
  const [cartdata,setCartdata]=useState([{product_id:"",product_name:"",price:"",quantity:""}]);
  useEffect(()=>{
    const getcard=async()=>{
      try {
        const res=await fetch('http://localhost:4000/getcartitem',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({userId:"2341234"})
        });
        const data=await res.json();
        console.log(data);
        setCartdata(data);
        

      } catch (error) {
        console.log(error);
      }
    }
    getcard();
    console.log(cartdata);
  },[])
  if(!cartdata) return "not login"
  return (
    <>
      <div className="cart_container">
        <div className="pro_list">
            <h1>Shopping Cart</h1>
            <hr />

            { cartdata.length==0? "No data to show " :
              cartdata.map((e)=>{
                const {product_id,product_name,price,quantity}=e;
                return(<div className="product" key={product_id}>
                  <div className="carimage">
                      <img src="/image/off3_3.jpg" alt="" />
                  </div>
                  <div className="cardetail">
                      <div className="head"><h3>{product_name} </h3><h2> {price}.00</h2></div>
                      <p style={{color:"green", marginBottom:"5px"}}>In Stock</p>
                      <p style={{fontSize:"12px"}}>Eligdible for FREE Shipping</p>
                      <img src="/image/cartfulfil.png" alt="" />
                      <br />
                      <div className="cart_menu">
                          <select name="qan" id="qan">
                              <option value="1">Quantity: {quantity}</option>
                          </select>
                          <p style={{color:"rgb(13, 128, 174)"}}>| Delete | </p>
                      </div>
                  </div>
                  
              </div>
              )})

            }
        </div>
        <div className="pay">
            <h2>Grand Total</h2>
            <button>Proceed to Buy</button>
        </div>
      </div>
    </>
  )
}

export default Cart
