import React, { Component } from 'react'
import ReviewShowTile from '../components/ReviewShowTile'
import AddReviewForm from '../containers/AddReviewForm'

class ReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }

    this.addReview = this.addReview.bind(this)
    this.deleteReview = this.deleteReview.bind(this)
  }

  componentDidMount() {
    let id = this.props.floofId
    fetch(`/api/v1/floofs/${id}/reviews.json`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
        return response.json()
      })
      .then(body => {
        this.setState({ reviews: body })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addReview(formData) {
    let formPayload = {
      review: {
        description: formData.description,
        rating: formData.rating,
        user_id: this.props.currentUser.id,
        floof_id: this.props.floofId
      }
    }
    fetch(`/api/v1/reviews`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
        return response.json()
      })
      .then(body => {
        this.setState({ reviews: [...this.state.reviews, body] })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  deleteReview(event) {
    let id = event.currentTarget.attributes["data-id"].value
    fetch(`/api/v1/reviews/${id}`, {
      method: 'DELETE',
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      let newReviews = this.state.reviews.filter(review => {
        return review.id !== body.id
      })
      this.setState({ reviews: newReviews })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let reviews = this.state.reviews;
    let reviewArray;

    let currentUser = this.props.currentUser;
    let createdByUser;

    if (reviews.length > 0) {
      reviewArray = reviews.map((review) => {

        if (review.user_id === currentUser.id) {
          createdByUser = true
        } else {
          createdByUser = false
        }

        return(
          <ReviewShowTile
            description={review.description}
            key={review.id}
            id={review.id}
            rating={review.rating}
            user={review.user_id}
            createdByUser={createdByUser}
            handleDelete={this.deleteReview}
          />
        )
      })
    }

    return(
      <div>
        <h2>Reviews:</h2>
        {reviewArray}
        <AddReviewForm
          addNewReview={this.addReview}
        />
      </div>
    )
  }
}

export default ReviewsContainer
