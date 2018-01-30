import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import FormField from '../components/FormField'
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
      errors: []
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleJobChange = this.handleJobChange.bind(this)
    this.handleEmployerChange = this.handleEmployerChange.bind(this)
    this.handleSpeciesChange = this.handleSpeciesChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.validateName = this.validateName.bind(this)
    this.validateJobTitle = this.validateJobTitle.bind(this)
    this.validateSpecies = this.validateSpecies.bind(this)
    this.clearErrors = this.clearErrors.bind(this)
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

  handleNameChange(event) {
    this.setFormDetail('name', event.target.value )
  }
  handleJobChange(event) {
    this.setFormDetail('job_title', event.target.value )
  }
  handleEmployerChange(event) {
    this.setFormDetail('current_employer', event.target.value )
  }
  handleSpeciesChange(event) {
    this.setFormDetail('species', event.target.value )
  }
  handleCategoryChange(event) {
    this.setFormDetail('category_id', event.target.value )
  }

  clearErrors() {
    this.setState({
      errors: []
    })
  }

  validateName(){
    if(this.state.floof.name === '') {
      return ["Name can't be blank"]
    }
    else {
      return []
    }
  }

  validateJobTitle(){
    if(this.state.floof.job_title === '') {
      return ["Job Title can't be blank"]
    }
    else {
      return []
    }
  }

  validateSpecies(){
    if(this.state.floof.species === '') {
      return ["Species can't be blank"]
    }
    else {
      return []
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.clearErrors()

    let errors = this.validateName()
    errors = errors.concat(this.validateSpecies())
    errors = errors.concat(this.validateJobTitle())

    if(errors.length === 0) {
      this.handleFormPayload()
    }
    else {
      this.setState({
        errors: errors
      })
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
      errors: []
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
    let errorList
    if(this.state.errors.length > 0) {
      let errorListItems = this.state.errors.map((error) => {
        return <li>{error}</li>
      })
      errorList = (
        <ul className="errors">
          { errorListItems }
        </ul>
      )
    }

    return(
      <div>
        { errorList }
        <form onSubmit={ this.handleSubmit }>
          <p>{ this.state.message }</p>
          <FormField
            label="Name"
            value={ this.state.floof.name }
            handleChange={ this.handleNameChange }
          />
          <FormField
            label="Job Title"
            value={ this.state.floof.job_title }
            handleChange={ this.handleJobChange }
          />
          <FormField
            label="Current Employer"
            value={ this.state.floof.current_employer }
            handleChange={ this.handleEmployerChange }
          />
          <FormField
            label="Species"
            value={ this.state.floof.species }
            handleChange={ this.handleSpeciesChange }
          />
          <CategoryField
            label="Category"
            value={ this.state.floof.category_id }
            handleChange={ this.handleCategoryChange }
            categories={ this.state.categories }
          />
          <button className='button' onClick={ this.handleSubmit }>Submit</button>
        </form>
        <button className='button' onClick={ this.handleClear }>Clear Form</button>
      </div>
    )
  }
}
export default NewFloofContainer
