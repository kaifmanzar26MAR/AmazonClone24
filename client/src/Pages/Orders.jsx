import React from 'react'
import './cart.css'
const Orders = () => {
    <style>

    </style>
  return (
    <>
      <div className="cart_container">
        <div className="pro_list order_list" >
            <h1>Your Orders</h1>
            <hr />

            <div className="product order_pro" >
                <div className="carimage">
                    <img src="/image/off3_3.jpg" alt="" />
                </div>
                <div className="cardetail">
                    <div className="head"><h3>Premier Stainless Steel Kettle </h3><h2> 1,243.00</h2></div>
                    <p style={{color:"green", marginBottom:"5px"}}>In Stock</p>
                    <p style={{fontSize:"12px"}}>Eligdible for FREE Shipping</p>
                    <img src="/image/cartfulfil.png" alt="" />
                    <br />
                    <div className="cart_menu">
                        <span className="order_quantity" style={{border:"1px solid gray", padding:"4px", color:"gray", borderRadius:"10px"}}>Quantity: 1</span>
                        <p>Order Date: 2-01-2024</p>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Orders
