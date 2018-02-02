import React, { Component } from 'react'
import EditReviewForm from '../containers/EditReviewForm'

class ReviewShowTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showEditForm: false
    }

    this.toggleEditForm = this.toggleEditForm.bind(this)
  }

  toggleEditForm(event) {
    event.preventDefault()
    let showForm = this.state.showEditForm

    if (showForm === true) {
      this.setState({ showEditForm: false })
    }
    else {
      this.setState({ showEditForm: true })
    }
  }

  render() {
    let deleteButton, editButton
    if (this.props.createdByUser === true) {
      deleteButton = <button id="delete" data-id={ this.props.id } onClick={ this.props.handleDelete }>Delete</button>
      editButton = <button id="edit" onClick={ this.toggleEditForm }>Edit</button>
    }

    let editFormVar
    if (this.state.showEditForm === true) {
      editFormVar =
        <EditReviewForm
          editReview={this.props.handleEdit}
          reviewId={this.props.id}
          closeForm={this.toggleEditForm}
        />
    }
    else {
      editFormVar = ""
    }

    return(
      <div className="reviews">
        <p id="rating">{ this.props.rating } stars</p>
        <p>{ this.props.description }</p>
        <p>{ this.props.author }</p>
        <div className="buttons">
          { deleteButton }
          { editButton }
        </div>
        <div className="editForm">
          { editFormVar }
        </div>
      </div>
    )
  }
}

export default ReviewShowTile;
