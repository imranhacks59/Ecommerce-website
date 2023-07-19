import React from 'react';
import './CartItemCard.css';

const CartItemCard = ({item}) => {
    
  return (
    <div className='cartItemCard'>
      <img src={item.image} alt={item.name} />
      <div className='cartItemcardDetail'>
        <p>{item.price}</p>
        <p>150000</p>
      </div>
    </div>
  )
}

export default CartItemCard