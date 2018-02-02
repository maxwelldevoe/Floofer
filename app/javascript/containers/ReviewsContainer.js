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
    this.editReview = this.editReview.bind(this)
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
        this.setState({ reviews: body.reviews })
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
        this.setState({ reviews: [...this.state.reviews, body.review] })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  editReview(formData) {
    let id = formData.reviewId
    let formPayload = {
      review: {
        description: formData.description,
        rating: formData.rating
      }
    }
    fetch(`/api/v1/reviews/${id}.json`, {
      method: 'PATCH',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formPayload)
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      let updatedReviews = this.state.reviews.filter(review => {
        return review.id !== body.review.id
      })
      updatedReviews = updatedReviews.concat(body.review)

      this.setState({ reviews: updatedReviews })
    })
    .catch(error => console.error(`Error in fetch patch: ${error.message}`))
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
        return review.id !== body.review.id
      })
      this.setState({ reviews: newReviews })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    console.log(this.state)
    let reviews = this.state.reviews;
    let reviewArray;

    let currentUser = this.props.currentUser;
    let createdByUser;

    if (reviews.length > 0) {
      reviewArray = reviews.map((review) => {

        if (currentUser) {
          if (review.user.id === currentUser.id) {
            createdByUser = true
          }
          else {
            createdByUser = false
          }
        }
        else {
          createdByUser = false
        }

        return(
          <ReviewShowTile
            description={review.description}
            key={review.id}
            id={review.id}
            rating={review.rating}
            author={review.user.user_name}
            createdByUser={createdByUser}
            handleDelete={this.deleteReview}
            handleEdit={this.editReview}
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
