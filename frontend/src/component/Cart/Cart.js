import React, { Fragment } from 'react'
import './Cart.css'
import CartItemCard from './CartItemCard'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../actions/cartAction'

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
  
  const dispatch = useDispatch();
  const {cartItems}= useSelector(state=>state.cart)
  const decreaseQuantity=(id,quantity)=>{
    // console.log(quantity)
    const newQty=quantity-1;
    dispatch(addToCart(id,newQty))
    
  }
  const increaseQuantity=(id,quantity,stock)=>{
    const newQty=quantity+1
    dispatch(addToCart(id,newQty))
  }
  const location = useLocation();
  const redirect = location.search ? location.search.split('=')[1]:''
  const navigate=useNavigate()
  const checkoutHandler=()=>{
    // navigate('/shipping')
    navigate(`/login?redirect=shipping`)
    // navigate(`/login?${redirect=shipping}`)
    // navigate(`/shipping${redirect ? `?redirect=${redirect}` : ''}`);
  }
  console.log(cartItems)
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
                     <button onClick={()=>decreaseQuantity(
                      item.product,
                      item.quantity
                     )}>-</button>
                     <input type='text' value={item.quantity} 
                     readOnly />
                     <button onClick={()=>increaseQuantity(
                      item.product,
                      item.quantity,
                      item.stock
                     )}>+</button>
                  </div>
                  <div className='cartItemPrice'>
                       {item.price*item.quantity}
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
                    {
                      cartItems&&cartItems.reduce((acc,item)=>
                      acc+item.quantity*item.price,
                      0
                      )
                    }
                </p>
                <div className='checkoutButton'>
                 <Link to='/shipping'>
                <button onClick={checkoutHandler} >Check out</button>
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