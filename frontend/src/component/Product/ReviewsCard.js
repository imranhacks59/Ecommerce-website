import React, { Fragment } from 'react'

const ReviewsCard = ({review}) => {
  return (
    <Fragment>
      <div className='reviewCard'>
         <p>{review.name}</p>
         <p>{review.comment}</p>
      </div>
    </Fragment>
  )
}

export default ReviewsCard
