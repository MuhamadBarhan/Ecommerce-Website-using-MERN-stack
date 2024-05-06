import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductList from './Components/productlist'
import { useParams } from 'react-router-dom';
import { products } from '../data/Products';

const BuyNow = () => {
    const params = useParams();
  const list = useSelector((state) => state.cart.list);

  const [state, setState] = useState(
    params.id
      ? [{
          ...products.find(
            (element) => element.id === parseInt(params.id)
          ),
          count: 1,
        }]
      :list
  );
  
  const incrementItem = (item) => {
    const index = state.findIndex(
      (product) => product.id === item.id
  );
    setState((state)=>[
      ...state.slice(0,index),
      { ...item,count: item.count+1},
      ...state.slice(index+1),
    ])
  };
  const decrementItem = (item) => {
    if (item.count === 1) {
      removeItemFromCart(item);
    } else {
      const index = state.findIndex((product) => product.id === item.id);
      setState((state) => [
        ...state.slice(0, index),
        { ...item, count: item.count - 1 },
        ...state.slice(index + 1),
      ]);
    }
  };
  
  const removeItemFromCart = (item) => {
    const index = state.findIndex(
      (product) => product.id === item.id
  );
    setState((state)=>[
      ...state.slice(0,index),
     
      ...state.slice(index+1),
    ])  };

    return (
        <>
            {state.length > 0 ? (
                <>
                    {state.map((item) => (
                        <ProductList {...item} key={item.id} incrementItem={() => incrementItem(item)} decrementItem={() => decrementItem(item)} removeItem={() => removeItemFromCart(item)} />
                    ))}
                </>
            ) : (<h3>No Items</h3>)}
        </>
    )
}

export default BuyNow