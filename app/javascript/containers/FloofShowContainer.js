import React, { Component } from 'react'
import FloofShowTile from '../components/FloofShowTile'
import ReviewsContainer from '../containers/ReviewsContainer'

class FloofShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      floof: {},
      user: {}
    }
  }

  componentDidMount() {
    let id = this.props.params.id;
    fetch(`/api/v1/floofs/${id}.json`)
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
        this.setState({ floof: body.floof })
      })

      fetch(`/api/v1/users.json`, { credentials: 'same-origin' })
      .then(response => {
        return response.json()
      })
      .then(body => {
        this.setState({ user: body.current_user })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>
        <div>
          <FloofShowTile
            floofData={ this.state.floof }
          />
        </div>
        <div>
          <ReviewsContainer
            floofId={ this.props.params.id }
            currentUser={ this.state.user }
          />
        </div>
      </div>
    )
  }
}

export default FloofShowContainer;
