import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import TextField from '../components/TextField'
import CategoryField from '../components/CategoryField'

class NewFloofContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      floof: {
        name: '',
        job_title: '',
        current_employer: '',
        category_id: '',
        species: ''
      },
      message: '',
      categories: [],
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.validateField = this.validateField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFormPayload = this.handleFormPayload.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.setFormDetail = this.setFormDetail.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/categories.json')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ categories: body.categories })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleChange(event) {
    let fieldName = event.target.name
    let input = event.target.value
    this.setFormDetail(fieldName, input)
  }

  validateField(fieldName, input) {
    let formattedInput = fieldName.replace(/_/, " ")
    if (input === '' || input === ' ') {
      let newError = { [fieldName]: `You must provide a valid ${formattedInput}` }
      this.setState({ errors: Object.assign(this.state.errors, newError)})
    }
    else {
      let errorState = this.state.errors
      delete errorState[fieldName]
      this.setState({ errors: errorState })
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    this.validateField("name", this.state.floof.name)
    this.validateField("job_title", this.state.floof.job_title)
    this.validateField("species", this.state.floof.species)
    if(Object.keys(this.state.errors).length === 0) {
      this.handleFormPayload()
    }
  }

  handleFormPayload() {
    let formPayLoad = {
      floof: {
        name: this.state.floof.name,
        job_title: this.state.floof.job_title,
        current_employer: this.state.floof.current_employer,
        category_id: this.state.floof.category_id,
        species: this.state.floof.species
      }
    }
    fetch('/api/v1/floofs', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayLoad),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      browserHistory.push(`/floofs/${body.floof.id}`)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleClear(event) {
    this.setState({
      floof: {
        name: '',
        job_title: '',
        current_employer: '',
        category_id: '',
        species: ''
      },
      message: '',
      errors: {}
    })
  }

  setFormDetail(key, value) {
    let oldState = this.state.floof
    let newState = Object.assign({}, oldState)
    newState[key] = value
    this.setState({
      floof: newState
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
      <div>

        <div className="intro">
          <p>
            Please specify your job title, whether you are currently employed, and what type of work you are looking for.

            <br /> If selected, a Hiring Partner will be in touch with you to discuss next steps.

            <br /><br />
            If you have any questions, please reach out to customersupport@floofer.org
          </p>

        </div>

        { errorDiv }
        <form onSubmit={ this.handleSubmit } className="form-data">
          <p>{ this.state.message }</p>
          <h1>Add a Floof</h1>
          <TextField
            label="Name"
            value={ this.state.floof.name }
            name="name"
            handleChange={ this.handleChange }
          />
          <TextField
            label="Job Title"
            value={ this.state.floof.job_title }
            name="job_title"
            handleChange={ this.handleChange }
          />
          <TextField
            label="Current Employer"
            value={ this.state.floof.current_employer }
            name="current_employer"
            handleChange={ this.handleChange }
          />
          <TextField
            label="Species"
            value={ this.state.floof.species }
            name="species"
            handleChange={ this.handleChange }
          />
          <CategoryField
            label="Category"
            value={ this.state.floof.category_id }
            name="category_id"
            handleChange={ this.handleChange }
            categories={ this.state.categories }
          />
          <button className='button' onClick={ this.handleSubmit }>Submit</button>
          <button className='button' id="clear" onClick={ this.handleClear }>Clear Form</button>
        </form>
      </div>
    )
  }
}
export default NewFloofContainer
