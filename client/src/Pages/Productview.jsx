import React from 'react'
import './Pview.css'
const Productview = () => {
  return (
    <>
      <div className="pview_container">
        <div className="pcon">
            <div className="pimage">
                <img src="/image/off_1.jpg" alt="" />
            </div>
            <div className="ptexcon">
                <h2>The Indus Valley Super Smooth Cast Iron Tawa for Dosa/Chapathi | 27.6cm/10.8 inch, 2.4kg | Induction Friendly | Naturally Nonstick, Pre-Seasoned Tawa, 100% Pure & Toxin-Free, No Chemical Coating</h2>
                <p className='rating'>3.5⭐⭐⭐⭐</p>
                <hr />
                <p className="cat">Deal of the Day</p>
                <p className="discount"><span style={{color:"rgb(181, 5, 40)"}}>-56%</span> 1,099</p>
                <p className='actual_mrp' style={{color:"gray"}}>M.R.P.: <span className='cross_mrp' >2,400</span></p>
                <br />
                <p>Inclusive of all takes</p>
                <p><span className='emi' style={{fontWeight:"bold"}}>EMI</span> starts at Rs. 100 per month. <span className='emi_option' style={{color:"rgb(13, 128, 174)"}}>EMI option</span></p>

                <hr />

                <div className='services'>
                    <div className="sub_serv">
                        <img src="/image/return.png" alt="" />
                        Cash on Delivery
                    </div>
                    <div className="sub_serv">
                        <img src="/image/return.png" alt="" />
                        10 days returnable
                    </div>
                    <div className="sub_serv">
                        <img src="/image/return.png" alt="" />
                        Amazon Delivered
                    </div>
                    <div className="sub_serv">
                        <img src="/image/return.png" alt="" />
                        Free delivery
                    </div>
                </div>

                <hr />
                <div className="pro_details">
                    <p><span style={{fontWeight:"bold"}}>Brand</span><span style={{width:"150px"}}>The Indus Valley</span></p>
                    <p><span style={{fontWeight:"bold"}}>Material</span><span style={{width:"150px"}}>Cast Iron</span></p>
                    <p><span style={{fontWeight:"bold"}}>Colour</span><span style={{width:"150px"}}>Black</span></p>
                    <p><span style={{fontWeight:"bold"}}>Product care</span><span style={{width:"150px"}}>Hand wash only</span></p>
                    <p><span style={{fontWeight:"bold"}}>weight</span><span style={{width:"150px"}}>2500gm</span></p>
                </div>
            </div>
            <div className="p_pay">
                <h3 style={{fontSize:"30px", marginBottom:"10px"}}>1,099<sup style={{fontSize:"15px",fontWeight:"200"}}>00</sup></h3>
                <p style={{marginBottom:"10px"}}><span style={{color:"rgb(13, 128, 174)"}}>FREE delivery</span><span style={{fontWeight:"bold"}}> Wednesday, 10 January.</span> Order within <span style={{color:"green"}}>3 hrs 35 min</span></p>
                <p style={{color:"rgb(13, 128, 174)", marginBottom:"10px"}}>Delivering to Patna 8000001</p>
                <p style={{color:"green"}}>In Stock</p>
                <div className="stock">
                    <p><span>Ships from</span><span style={{color:"black"}}> Amazon</span></p>
                    <p><span>Sold by</span><span style={{color:"rgb(13, 128, 174)"}}> The Indus Valley</span></p>
                    <p><span>Packagin by</span><span style={{color:"rgb(13, 128, 174)"}}> Show what inside</span></p>
                    <select name="qantity" id="qauan">
                        <option value="1">Quantity: 1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div className="buttons">
                        <button style={{backgroundColor:""}}>Add to Cart</button>
                        <button style={{backgroundColor:"orange"}}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Productview
