import React, { Component } from 'react'
import RatingField from '../components/RatingField'
import TextField from '../components/TextField'

class EditReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewId: '',
      description: '',
      rating: '',
      ratings: [1, 2, 3, 4, 5],
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.validateField = this.validateField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  componentDidMount() {
    let id = this.props.reviewId
    fetch(`/api/v1/reviews/${id}.json`)
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
        this.setState({
          reviewId: body.review.id,
          description: body.review.description,
          rating: body.review.rating
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleChange(event) {
    let fieldName = event.target.name
    let input = event.target.value
    this.setState({ [fieldName]: input })
  }

  validateField(fieldName, input) {
    if (input === '' || input === ' ') {
      let newError = { [fieldName]: `You must provide a valid ${fieldName}` }
      this.setState({ errors: Object.assign(this.state.errors, newError)})
    }
    else {
      let errorState = this.state.errors
      delete errorState[fieldName]
      this.setState({ errors: errorState })
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    this.validateField('description', this.state.description)
    this.validateField('rating', this.state.rating)

    let errors = this.state.errors

    if (Object.keys(errors).length === 0) {
      let formData = {
        reviewId: this.state.reviewId,
        description: this.state.description,
        rating: this.state.rating
      }
      this.props.editReview(formData)
      this.props.closeForm(event)
    }
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({
      description: '',
      rating: '',
      errors: {}
    })
  }

  render() {
    let errorListItems;
    let errorDiv;

    if(Object.keys(this.state.errors).length > 0) {
      errorListItems = Object.values(this.state.errors).map((error) => {
        return <li key={error}>{error}</li>
      })
      errorDiv = <div className="errors">{ errorListItems }</div>
    }

    return(
      <div id="review-form">
        <h2>Edit This Review</h2>
        { errorDiv }
        <form>
          <TextField
            label="Description"
            value={ this.state.description }
            name="description"
            handleChange={ this.handleChange }
          />
          <RatingField
            label="Rating"
            value={ this.state.rating }
            name="rating"
            handleChange={ this.handleChange }
            ratings={ this.state.ratings }
          />
          <button className='button' id='submit' onClick={ this.handleSubmit }>Submit</button>
          <button className='button' id='clear' onClick={ this.handleClearForm }>Clear</button>
        </form>
      </div>
    )
  }
}

export default EditReviewForm
