import React from 'react'
import { useSelector } from 'react-redux'
import ProductListItem from './Components/productlistitem'

const Wishlist = () => {
    const list=useSelector((state)=>state.wish.list)
  return (
    <>
    {list.map((item)=>(
      <ProductListItem {...item} key={item.id}/>
    ))}
    </>
  )
}

export default Wishlist