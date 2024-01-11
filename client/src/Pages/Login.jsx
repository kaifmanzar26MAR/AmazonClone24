import React, { useState } from 'react'
import './sign.css'
import { useGlobalContext } from '../Context/GlobalComponent';
const Login = () => {
    const [data,setData]=useState({email:"",password:""});
    const {login_user,updateLoginUser} = useGlobalContext();
    
    const handleform=async (e)=>{
      e.preventDefault();
      console.log(data);
      try {
        const res=await fetch("http://localhost:4000/login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(data)
        });
        const ret=await res.json();
        if(ret){
          console.log(ret);
          console.log(login_user);
          updateLoginUser(ret.user);
          console.log(login_user.email);
          alert("user logedin");
        }
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div style={{paddingTop:"70px", width:"100%",height:"calc(100vh - 70px)",display:"flex",alignItems:'center',justifyContent:"center"}}>
        <div style={{backgroundColor:"white", width:"350px",padding:"20px" }}>
            <h1>Login</h1>
            <hr style={{marginTop:"5px",marginBottom:"5px"}} />
            <form method='post' onSubmit={handleform}>
                <input onChange={(e)=>{setData({...data,email:e.target.value})}} value={data.email} className='form_input' type="email" placeholder='Email' />
                <input onChange={(e)=>{setData({...data,password:e.target.value})}} value={data.password} className='form_input' type="password" placeholder='Password'/>
                <input className='form_btn' type="submit" value="Login Account" />
            </form>
            <h4 style={{width:"93%", textAlign:"center"}}>OR</h4>
            <p style={{margin:"10px"}}>Don't have an Account? <a href="/signup" style={{textDecoration:"none"}}>SignUp</a></p>
        </div>
    </div>
  )
}

export default Login
