import React from 'react'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import {Route,Routes} from 'react-router-dom'
import Productview from './Pages/Productview'
import Cart from './Pages/Cart'
import Orders from './Pages/Orders'
import SignIn from './Pages/SignIn'
import Login from './Pages/Login'
import ViewAll from './Pages/ViewAll'
import AddProduct from './Pages/AddProduct'
import About from './Pages/About'

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productview' element={<Productview/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/myorders' element={<Orders/>}/>
        <Route path='/signup' element={<SignIn/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>
        <Route path='/admin/addproduct' element={<AddProduct/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
