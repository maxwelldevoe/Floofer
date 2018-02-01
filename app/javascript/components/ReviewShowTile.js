import React from 'react'

const ReviewShowTile = (props) => {

  let deleteButton, editButton

  if (props.createdByUser === true) {
    deleteButton = <button id="delete" data-id={ props.id } onClick={ props.handleDelete }>Delete</button>
    editButton = <button id="edit" onClick={ props.handleEdit }>Edit</button>
  }

  return(
    <div>
      <p>{ props.description }</p>
      <p>{ props.rating }</p>
      <p>{ props.user }</p>
      <div className="buttons">
        { deleteButton }
        { editButton }
      </div>
    </div>
  )
}

export default ReviewShowTile;
