import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateProduct from './CreateProduct'
import DetailProduct from './DetailProduct'
import Favourite from './Favourite'
import Navbar from './Navbar'
import Products from './Products'

const MainRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
<Route path="/" element={<Products/>}/>
<Route path="/:_id" element={<DetailProduct/>}/>
<Route path="/favourite" element={<Favourite/>}/>
<Route path="/create" element={<CreateProduct/>} />
    </Routes>
    
    
    </>
  )
}

export default MainRoutes