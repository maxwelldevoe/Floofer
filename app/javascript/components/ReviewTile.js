import React from 'react'

const ReviewTile = (props) => {

  return(
    <div>
      <p>{props.description}</p>
      <p>{props.rating}</p>
      <p>{props.user}</p>
    </div>
  )
}

export default ReviewTile;
