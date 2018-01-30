import React, { Component } from 'react'
import ReviewTile from '../components/ReviewTile'

class ReviewShowTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    let id = this.props.id
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


  render() {
    let reviews = this.state.reviews;
    let reviewArray;

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

    return(
      <div>
      <h2>Reviews:</h2>
      {reviewArray}
      </div>
    )
  }
}

export default ReviewShowTile;
