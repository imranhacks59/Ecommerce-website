import React, { Fragment, useEffect, useState } from 'react'
// import productImage from "../../images/headphones.webp"
import './ProductDetails.css'
import Carousel from 'react-material-ui-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, newProductReview } from '../../actions/productAction'
import { useParams } from 'react-router-dom'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Rating } from '@mui/material'
import Loader from '../Layout/Loader/Loader'
import ReviewsCard from './ReviewsCard'
import { addToCart } from '../../actions/cartAction'
import { useAlert } from 'react-alert'

const ProductDetails = () => {
  
  const {loading,product} = useSelector((state)=>state.productDetails);
  const [quantity,setQuantity]=useState(1);
  console.log(product)
  const {id} =useParams();
  const dispatch=useDispatch();
  const options={
    defaultValue:product.ratings,
                    precision:0.5,
                    readOnly:true
  }
  useEffect(()=>{
    
    dispatch(getProductDetails(id));
  },[dispatch])

  const [open,setOpen] = useState(false)

  const {success} = useSelector((state)=>state.newReview)

  const submitReviewToggle = ()=>{
    open ? setOpen(false) : setOpen(true)
  }

  // new review function
  const [rating,setRating] = useState(0);
  const [comment, setComment ]=useState('');

  const reviewSubmitHandler =()=>{
       const myForm = new FormData();

       myForm.set("rating",rating);
       myForm.set('comment',comment);
       myForm.set('productId',id);

       dispatch(newProductReview(myForm));

       setOpen(false);
  }
  const alert =useAlert();
  const addToCartHandler=()=>{
    dispatch(addToCart(id,quantity))
    alert.success('Item Added to cart')
  }
  const decreaseQuantity=()=>{
    const qty=quantity-1
    setQuantity(qty)
  }
  const increaseQuantity=()=>{
    const qty=quantity+1;
    setQuantity(qty)
  }

  return (
    <Fragment>
      {loading ? (<Loader />):(
          <Fragment>
          <div className='productDetailsContainer'>
            
              <div className='productdetails-1'>
               <div className='productDetailsImages'>
                  <Carousel
                  pagination={true}
                  >
                  {product.images &&
                        product.images.map((item, i) => (
                          <img
                           style={{width:200}}
                            className="CarouselImage"
                            key={i}
                            src={item.url}
                            alt={`${i} Slide`}
                          />
                        ))}
                  </Carousel>
               </div>
               </div> 
           
               <div  className='productdetails-2'>
                <div className='details-name'>
                    <h2>{product.name}</h2>
                   
                </div>
                 <div className='details-star'>
                     <Rating 
                          {...options}
                     />
                 </div>
                 <div className='details-price'>
                     <p>₹ {product.price}</p>
                 </div>
                 <div className='details-addCart'>
                     <div className='details-addCart-block1'>
                       <button onClick={decreaseQuantity}>-</button>
                       <input
                         type='number'
                         readOnly
                         value={quantity}
                       />
                       <button onClick={increaseQuantity}>+</button>   
                       
                     </div>
                     <button 
                     onClick={addToCartHandler}
                     >Add to cart</button>
                        
                 </div>
                 <div className='details-stock'>
                    Status:<span>in stock</span>
                 </div>
                 <div className='details-description'>
                    <p>lorem impsi djfjsd cjkdsbfjds bjsdfjsd bjsd</p>
                 </div>
                 <div className='details-submitReview'>
                 <button onClick={submitReviewToggle} className="submitReview">
                    Submit Review
                </button>
                 </div>
               </div>
          </div>

                    <Dialog
                     aria-labelledby="simple-dialog-title"
                     open={open}
                     onClose={submitReviewToggle}
                     >
                       <DialogTitle>
                           Submit Review
                       </DialogTitle>
                       <DialogContent>
                         <Rating
                           value={rating}
                           onChange={(e)=>setRating(e.target.value)}
                           
                         />
                         <textarea
                           cols={30}
                           rows={5}
                           value={comment}
                           onChange={(e)=>setComment(e.target.value)}
                         />
                       </DialogContent>
                       <DialogActions>
                       <Button onClick={submitReviewToggle} color="secondary">
                              Cancel
                      </Button>
                       <Button onClick={reviewSubmitHandler} color="primary">
                        Submit
                      </Button>
                      </DialogActions>
                    </Dialog>

                    <h3 className='reviewsHeading'>REVIEWS</h3>

                    {
                      product.reviews && product.reviews[0] ?
                      (
                       <div className='productReviews'>
                        { product.reviews &&
                        product.reviews.map((review)=>(
                          <ReviewsCard key={review._id} review={review} />
                        ))
                      }
                       </div>
                      ):(
                        <div>No reviews yet</div>
                      )}
          </Fragment>
      )}
    </Fragment>
  )
}

export default ProductDetails
