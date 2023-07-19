import React, { Fragment } from 'react'
import './Cart.css'
import CartItemCard from './CartItemCard'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// const cartItems=[
//   {
//    "id":'1',
//    "product": "iPhone 12",
//    "price": 999,
//    "name": "John Doe",
//    "quantity":1,
//    "rating": 4.5,
//    "image": "https://res.cloudinary.com/djxhf8jwg/image/upload/v1685008867/p-1_cdpeox.jpg"
//  },
 
// ]

const Cart = () => {

  const {cartItems}= useSelector(state=>state.cart)
  return (
    <Fragment>
     <div className='cartContainer'>
          <div className='cartHeading'>
            <p>product</p>
            <p>price</p>
            <p>sub price</p>
          </div>

          {
            cartItems&&(
              cartItems.map((item)=>(
                <div className='cartItems'>
                   <CartItemCard item={item} key={item} />
                   <div className='cartQuantity'>
                     <button>-</button>
                     <input type='text' value={item.quantity} 
                     readOnly />
                     <button>+</button>
                  </div>
                  <div className='cartItemPrice'>
                       150000
                  </div>
                </div>
              
              ))
            )
          }
      <div className='cartTotalPrice'>
            <div></div>
            <div className='cartTotalPriceBox'>
                <p>Total Price</p>
                <p>
                    ₹150000
                </p>
                <div className='checkoutButton'>
                 <Link to='/shipping'>
                <button >Check out</button>
                </Link>
               </div>
            </div>
            <div></div>
            {/* <div className='checkoutButton'>
                <button>Check out</button>
            </div> */}
        </div>

      </div>

    </Fragment>
  )
}

export default Cart