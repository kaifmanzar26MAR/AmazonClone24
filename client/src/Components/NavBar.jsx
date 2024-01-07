import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { FaCartPlus, FaMapMarkerAlt, FaSearch, FaUser, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate =useNavigate();
  const [user,setUser]=useState(null);
  useEffect(()=>{
    const getuser=async()=>{
      console.log("navbar fun called");
      try {
        const res= await fetch('http://localhost:4000/getuser',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({})
        });
        const userdata=await res.json();
        setUser(userdata[0]);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
    getuser();
    console.log(user);
  },[])
  
  if(!user){
    return <h3>Loding...</h3>
  }
  const {address,username,email, cart}=user;
  return (
    <>
      <div className="navbar">
        <div className="nav_logo navcomp" onClick={()=>navigate('/')}></div>
        <div className="delivery_add navcomp">
          <FaMapMarkerAlt/>
          <div className="add_in">
            <p>{address ? address : "Deliverign to Mumbai 400001"}</p>
            <h3> Your Location</h3>
          </div>
        </div>
        <form className="search_bar">
            <select>
                <option value="All">All</option>
                <option value="All">not</option>
                <option value="All">All</option>
                <option value="All">All</option>
            </select>
            <input id='bar' type="text" placeholder="Search Amazon.in" />
            <input id='search' type="submit" placeholder={"00"} value={'00'}/>
        </form>
        <div className="language navcomp">
            <select>
                <option value="en"><h3>00 En</h3></option>
                <option value="en"><h3>00 En</h3></option>
                <option value="en"><h3>00 En</h3></option>
                <option value="en"><h3>00 En</h3></option>
            </select>
        </div>
        <div className="sigin_and_name navcomp" onClick={()=>navigate('/login')}>
            <p>Hello, {username ? username : "sign in"}</p>
            <h3>Accont & List .</h3>
        </div>
        <div className="return_and_orders navcomp" onClick={()=>navigate('/myorders')}>
          <p>Return</p>
          <h3>& Orders</h3>
        </div>
        <div className="cart_section navcomp" onClick={()=>navigate('/cart')}>
          <FaCartPlus size={35}/>
          <h3>Cart</h3>
          <span>{cart.lenght ? cart.lenght : "0"}</span>
        </div>
        <div className="user">
          <FaUserCircle size={30}/>
        </div>
      </div>
    </>
  )
}

export default NavBar
