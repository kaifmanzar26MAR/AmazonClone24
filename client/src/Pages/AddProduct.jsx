import React, { useState } from 'react'

const AddProduct = () => {
    const [product,setProduct]=useState({product_id:"",product_name:"",rating:"",deal:"",discount:"",price:"",brand:"",material:"",product_care:"",weight:""});
    const formhandle=async(e)=>{
        e.preventDefault();
        console.log(product);
        try {
            const res=await fetch("http://localhost:4000/addproduct",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(product),
            })
            const data=await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div style={{paddingTop:"70px", width:"100%", height:"calc(100vh - 70px)", display:"flex", alignItems:"center",justifyContent:"center"}}>
      <form method='post' onSubmit={formhandle}  style={{ width:"300px", display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
        <input style={{padding:"10px",width:"100%",margin:"10px"}} onChange={(e)=>{setProduct({...product,product_id:e.target.value})}} value={product.product_id} type="text" placeholder='prodcut id' name='product_id' />
        <input style={{padding:"10px",width:"100%",margin:"10px"}} onChange={(e)=>{setProduct({...product,product_name:e.target.value})}} value={product.product_name} type="text" placeholder='product name' name='product_name' />
        <input style={{padding:"10px",width:"100%",margin:"10px"}} onChange={(e)=>{setProduct({...product,rating:e.target.value})}} value={product.rating} type="number" placeholder='prodcut rating' name='product_rating' />
        <input style={{padding:"10px",width:"100%",margin:"10px"}} onChange={(e)=>{setProduct({...product,deal:e.target.value})}} value={product.deal} type="text" placeholder='prodcut deal' name='product_deal' />
        <input style={{padding:"10px",width:"100%",margin:"10px"}} onChange={(e)=>{setProduct({...product,discount:e.target.value})}} value={product.discount} type="number" placeholder='prodcut discount' name='product_discount' />
        <input style={{padding:"10px",width:"100%",margin:"10px"}} onChange={(e)=>{setProduct({...product,price:e.target.value})}} value={product.price} type="number" placeholder='prodcut price' name='product_price' />
        <input style={{padding:"10px",width:"100%",margin:"10px"}} onChange={(e)=>{setProduct({...product,brand:e.target.value})}} value={product.brand} type="text" placeholder='prodcut brand' name='brand' />
        <input style={{padding:"10px",width:"100%",margin:"10px"}} onChange={(e)=>{setProduct({...product,material:e.target.value})}} value={product.material} type="text" placeholder='prodcut material' name='product_material' />
        <input style={{padding:"10px",width:"100%",margin:"10px"}} onChange={(e)=>{setProduct({...product,product_care:e.target.value})}} value={product.product_care} type="text" placeholder='prodcut care' name='product_care' />
        <input style={{padding:"10px",width:"100%",margin:"10px"}} onChange={(e)=>{setProduct({...product,weight:e.target.value})}} value={product.weight} type="text" placeholder='prodcut weight' name='product_weight' />
        <input style={{padding:"10px",width:"100%",margin:"10px"}} type="submit" value="Add product" />
      </form>
    </div>
  )
}

export default AddProduct
