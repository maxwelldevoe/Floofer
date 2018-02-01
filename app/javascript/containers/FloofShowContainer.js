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


        <div className="intro">
          <p>
            If you would like to review this Floof, please scroll down to the bottom of the page and enter your information in the 'Add Review' form.
          </p>

        </div>



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
