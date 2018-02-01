import React, { Component } from 'react'
import ReviewTile from '../components/ReviewTile'
import AddReviewForm from '../containers/AddReviewForm'

class ReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }

    this.addReview = this.addReview.bind(this)
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

  render() {
    let reviews = this.state.reviews;
    let reviewArray;

    if (reviews.length > 0) {
      reviewArray = reviews.map((review) => {
        return(
          <ReviewTile
            description={review.description}
            key={review.id}
            id={review.id}
            rating={review.rating}
            user={review.user_id}
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
