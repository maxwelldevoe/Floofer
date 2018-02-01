import React, { Component } from 'react'

class ReviewFormTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      review: {
        description: "",
        rating: "",
        floof_id: this.props.id
      }
    }
    this.handleDescription = this.handleDescription.bind(this)
    this.handleRating = this.handleRating.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleDescription(event) {
    this.setFormDetail('description', event.target.value)
  }

  handleRating(event) {
    this.setFormDetail('rating', event.target.value)
  }



  handleSubmit(event) {
    event.preventDefault()
    let formPayLoad = {
      review: {
        description: this.state.review.description,
        rating: this.state.review.rating,
        user_id: this.props.currentUser.id,
        floof_id: this.props.id
      }
    }
    fetch(`/api/v1/reviews`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayLoad),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        window.location.reload(true)
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ review: body })
    })
    .catch(error => console.error(`Error in Fetch: ${error.message}`))

  }



  setFormDetail(key, value) {
    let oldState = this.state.review
    let newState = Object.assign({}, oldState)
    newState[key] = value
    this.setState({
      review: newState
    })
  }




  render() {
    console.log(this.state.review)
    console.log(this.props.currentUser.id)

    return(
      <div id="review-form">

        <h2>Add a Review</h2>
        <form onSubmit={this.handleSubmit}>

            <label>Rating</label>

          <select name="rating" onChange={this.handleRating} value={this.state.review.rating}>
            <option></option>
            <option value="1">☆</option>
            <option value="2">☆☆</option>
            <option value="3">☆☆☆</option>
            <option value="4">☆☆☆☆</option>
            <option value="5">☆☆☆☆☆</option>
          </select>


          <label>Description</label>

          <input
            onChange={this.handleDescription}
            value={this.state.review.description}
            type='text'
            name='description'
          />

          <input type="submit" value="Submit"/>

        </form>
      </div>
    )
  }
}

export default ReviewFormTile;
