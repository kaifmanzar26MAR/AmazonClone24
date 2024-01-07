import React, { useState } from 'react'
import './sign.css'
const SignIn = () => {
    const [data,setData]=useState({username:"",phone:"",email:"",address:"",password:""});
    const [cpass,setCpass]=useState("");

    const handleform=async (e)=>{
      e.preventDefault();
      console.log(data);
      console.log(cpass);
      if(data.password!= cpass){
        alert("paswword dosent match");
        return;
      }
      try {
        const res=await fetch("http://localhost:4000/register",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(data)
        });
        const ret=await res.json();
        if(ret.status===201){
          alert("user registered");
        }
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div style={{paddingTop:"70px", width:"100%",height:"calc(100vh - 70px)",display:"flex",alignItems:'center',justifyContent:"center"}}>
        <div style={{backgroundColor:"white", width:"350px",padding:"20px" }}>
            <h1>SignUp</h1>
            <hr style={{marginTop:"5px",marginBottom:"5px"}} />
            <form onSubmit={handleform} method='post'>
                <input onChange={(e)=>{setData({...data,username:e.target.value})}} value={data.username} className='form_input' type="text" placeholder='Your Full Name'/>
                <input onChange={(e)=>{setData({...data,phone:e.target.value})}} value={data.phone} className='form_input' type="text" placeholder='Phone' />
                <input onChange={(e)=>{setData({...data,email:e.target.value})}} value={data.email} className='form_input' type="email" placeholder='Email' />
                <input onChange={(e)=>{setData({...data,address:e.target.value})}} value={data.address} className='form_input' type="text" placeholder='Address'/>
                <input onChange={(e)=>{setData({...data,password:e.target.value})}} value={data.password} className='form_input' type="password" placeholder='Password'/>
                <input onChange={(e)=>{setCpass(e.target.value)}} value={cpass} className='form_input' type="password" placeholder='Confirm Password'/>
                <input className='form_btn' type="submit" value="Create Account" />
            </form>
            <h4 style={{width:"93%", textAlign:"center"}}>OR</h4>
            <p style={{margin:"10px"}}>Already have an Account? <a href="/login" style={{textDecoration:"none"}}>Login</a></p>
        </div>
    </div>
  )
}

export default SignIn
