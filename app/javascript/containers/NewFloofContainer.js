import React, { Component } from 'react'
import { Redirect } from 'react-router'
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
        category: '',
        species: ''
      },
      message: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleJobChange = this.handleJobChange.bind(this)
    this.handleEmployerChange = this.handleEmployerChange.bind(this)
    this.handleSpeciesChange = this.handleSpeciesChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
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
    this.setFormDetail('category', event.target.value )
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayLoad = {
      floof: {
        name: this.state.floof.name,
        job_title: this.state.floof.job_title,
        current_employer: this.state.floof.current_employer,
        category: this.state.floof.category,
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
        this.setState({ message: 'Floof added successfully' })
        // this.props.history.push('/')
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleClear(event) {
    this.setState({
      floof: {
        name: '',
        job_title: '',
        current_employer: '',
        category: '',
        species: ''
      }
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
    // console.log(this.state.floof)
    return(
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
          value={ this.state.floof.category }
          handleChange={ this.handleCategoryChange }
        />
        <input
          type='submit'
        />
      </form>
    )
  }
}
export default NewFloofContainer
