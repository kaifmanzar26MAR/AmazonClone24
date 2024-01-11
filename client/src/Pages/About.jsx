import React from 'react'
import { useGlobalContext } from '../Context/GlobalComponent'
import { useNavigate } from 'react-router-dom';
const About = () => {
    
    const {login_user,updateLoginUser}=useGlobalContext();
    const navigate=useNavigate();
  return (
    <div style={{paddingTop:"60px"}}>
        <h2>{login_user.username}</h2>
        <h2>{login_user.email}</h2>
        <h3 onClick={()=>navigate('/myorders')} >Orders..  click to see oreders</h3>
        <h3 onClick={()=>navigate('/cart')} >Cart..  click to see Cart items</h3>
        <h3 onClick={()=>{updateLoginUser('abc'); navigate('/login')}} >LogOut</h3>
    </div>
  )
}

export default About
