import React from 'react'

const ReviewShowTile = (props) => {

  let deleteButton

  if (props.createdByUser === true) {
    deleteButton = <button id="delete" data-id={ props.id } onClick={ props.handleDelete }>Delete</button>
  }

  return(
    <div className="reviews">
      <p id="rating">{ props.rating } stars</p>
      <p>{ props.description }</p>
      <p>user { props.user }</p>
      <div className="buttons">
        { deleteButton }
      </div>
    </div>
  )
}

export default ReviewShowTile;
