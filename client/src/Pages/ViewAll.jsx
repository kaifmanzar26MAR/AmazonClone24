import React from 'react'
import './viewall.css'
import { useNavigate } from 'react-router-dom'
const ViewAll = () => {
    const navigate=useNavigate();
    const data=[1,3,4,5,6,2,3,45,]
  return (
    <div style={{paddingTop:"70px"}}>
      <div className="allpro_container">
        
{
    data.map((e)=>{
        return(
           <div className="one_pro">
              <img src="/image/cube.jpg" alt="random" />
              <div className="op_dis">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, hic earum? Mollitia voluptates necessitatibus architecto iure nostrum tenetur, ipsa pariatur.</p>
                <p>⭐⭐⭐⭐</p>
                <h3>$199.<sup>00</sup></h3>
              </div>
              <span onClick={()=>{navigate('/productview')}} style={{color:"green",cursor:"pointer"}}>View Product</span>
            </div>
        
        )
    })
        
}
    </div> 
    </div>
  )
}

export default ViewAll
