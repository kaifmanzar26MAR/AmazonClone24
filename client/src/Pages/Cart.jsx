import React from 'react'
import './cart.css'
const Cart = () => {
  return (
    <>
      <div className="cart_container">
        <div className="pro_list">
            <h1>Shopping Cart</h1>
            <hr />

            <div className="product">
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
                        <select name="qan" id="qan">
                            <option value="1">Quantity: 1</option>
                        </select>
                        <p style={{color:"rgb(13, 128, 174)"}}>| Delete | </p>
                    </div>
                </div>
            </div>
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
