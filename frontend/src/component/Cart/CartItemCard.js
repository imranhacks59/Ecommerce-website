import React from 'react';
import './CartItemCard.css';

const CartItemCard = ({item}) => {
    
  return (
    <div className='cartItemCard'>
      <img src={item.image} alt={item.name} />
      <div className='cartItemcardDetail'>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    </div>
  )
}

export default CartItemCard