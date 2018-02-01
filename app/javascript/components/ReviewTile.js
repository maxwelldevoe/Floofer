import React from 'react'

const ReviewTile = (props) => {

  return(
    <div className="reviews">
          <p id="rating">{props.rating} stars</p>
            <p>{props.description}</p>
      <p> user # {props.user} </p>
    </div>
  )
}

export default ReviewTile;
