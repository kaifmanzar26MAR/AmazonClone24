import React from 'react'
import Cara from '../Components/Cara'
import './Home.css'
import Slider from '../Components/Slider'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate();
  return (
   
    <div id="maindiv">
      <div className="cara_con_main">
        <Cara/>
        <div className="offer_cont_box">
          <div className="offer_box">
            <h4>4+ star deals for you</h4>
              
              <div className="offer_item_cont">
                
                <div className="offer_items" onClick={()=>navigate('/productview')} style={{cursor:"pointer"}}>
                  <img src="/image/off_1.jpg" alt="" />
                  <div className="offer_det">
                    <span className='off'>40% off</span>&nbsp;
                    <span>Dell</span>
                  </div>
                </div>

                
                <div className="offer_items" onClick={()=>navigate('/productview')} style={{cursor:"pointer"}}>
                  <img src="/image/off_2.jpg" alt="" />
                  <div className="offer_det">
                    <span className='off'>40% off</span>&nbsp;
                    <span>Dell </span>
                  </div>
                </div>

                
                <div className="offer_items" onClick={()=>navigate('/productview')} style={{cursor:"pointer"}}>
                  <img src="/image/off_3.jpg" alt="" />
                  <div className="offer_det">
                    <span className='off'>40% off</span> &nbsp;
                    <span>Dell</span>
                  </div>
                </div>

                
                <div className="offer_items" onClick={()=>navigate('/productview')} style={{cursor:"pointer"}}>
                  <img src="/image/off_4.jpg" alt="" />
                  <div className="offer_det">
                    <span className='off'>40% off</span> &nbsp;
                    <span>Dell</span>
                  </div>
                </div>

                
              </div>

              <a href="/viewall">view all</a>
              
          </div>



          <div className="offer_box">
            <h4>Deals for you in Computers</h4>
              
              <div className="offer_item_cont">
                
                <div className="offer_items" onClick={()=>navigate('/productview')} style={{cursor:"pointer"}}>
                  <img src="/image/off2_1.jpg" alt="" />
                  <div className="offer_det">
                    <span className='off'>40% off</span>&nbsp;
                    <span>Dell</span>
                  </div>
                </div>

                
                <div className="offer_items" onClick={()=>navigate('/productview')} style={{cursor:"pointer"}}>
                  <img src="/image/off2_2.jpg" alt="" />
                  <div className="offer_det">
                    <span className='off'>40% off</span>&nbsp;
                    <span>Dell </span>
                  </div>
                </div>

                
                <div className="offer_items" onClick={()=>navigate('/productview')} style={{cursor:"pointer"}}>
                  <img src="/image/off2_3.jpg" alt="" />
                  <div className="offer_det">
                    <span className='off'>40% off</span> &nbsp;
                    <span>Dell</span>
                  </div>
                </div>

                
                <div className="offer_items" onClick={()=>navigate('/productview')} style={{cursor:"pointer"}}>
                  <img src="/image/off2_4.jpg" alt="" />
                  <div className="offer_det">
                    <span className='off'>40% off</span> &nbsp;
                    <span>Dell</span>
                  </div>
                </div>

                
              </div>
              <a href="/viewall">view all</a>
          </div>




          <div className="offer_box">
            <h4>Up to 60% off | styles for men</h4>
              
              <div className="offer_item_cont">
                
                <div className="offer_items" onClick={()=>navigate('/productview')} style={{cursor:"pointer"}}>
                  <img src="/image/off3_1.jpg" alt="" />
                  <div className="offer_det">
                    <span className='off'>40% off</span>&nbsp;
                    <span>Dell</span>
                  </div>
                </div>

                
                <div className="offer_items" onClick={()=>navigate('/productview')} style={{cursor:"pointer"}}>
                  <img src="/image/off3_2.jpg" alt="" />
                  <div className="offer_det">
                    <span className='off'>40% off</span>&nbsp;
                    <span>Dell </span>
                  </div>
                </div>

                
                <div className="offer_items" onClick={()=>navigate('/productview')} style={{cursor:"pointer"}}>
                  <img src="/image/off3_3.jpg" alt="" />
                  <div className="offer_det">
                    <span className='off'>40% off</span> &nbsp;
                    <span>Dell</span>
                  </div>
                </div>

                
                <div className="offer_items" onClick={()=>navigate('/productview')} style={{cursor:"pointer"}}>
                  <img src="/image/off3_4.jpg" alt="" />
                  <div className="offer_det">
                    <span className='off'>40% off</span> &nbsp;
                    <span>Dell</span>
                  </div>
                </div>

                
              </div>
              <a href="/viewall">view all</a>
          </div>




          <div className="offer_box" style={{backgroundColor:"transparent"}}>
            <div className="sign_call">
              <h4>Sign in for your best experience</h4>
              <button onClick={()=>navigate('/login')}>Singn in securely</button>
            </div>
            <div className="rand_pro">
              <img src="/image/cube.jpg" alt="random" />
              <div className="rp_dis">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, hic earum? Mollitia voluptates necessitatibus architecto iure nostrum tenetur, ipsa pariatur.</p>
                <p>⭐⭐⭐⭐</p>
                <h3>$199.<sup>00</sup></h3>
              </div>
            </div>
              
              
          </div>

        </div>
      </div>
      <Slider title="Todays's Deals" unique_id='000'/>
      <Slider title="ON Demand" unique_id='001'/>
    </div>
  )
}

export default Home
