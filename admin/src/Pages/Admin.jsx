import React from 'react'
import './Styles/Admin.css'
import Sidebar from './Components/Sidebar'
import { Routes , Route } from 'react-router-dom'
import AddProduct from '../Pages/Components/AddProduct'
import ListProduct from '../Pages/Components/ListProduct'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
      </Routes>
    </div>
  )
}

export default Admin