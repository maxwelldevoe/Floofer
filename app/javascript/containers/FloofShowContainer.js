import React, { Component } from 'react'
import FloofShowTile from '../components/FloofShowTile'
import ReviewShowTile from '../components/ReviewShowTile'
import ReviewFormTile from '../components/ReviewFormTile'

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

    fetch( `/api/v1/users`, { credentials: 'same-origin' })
    .then(response => response.json())
    .then(body => {
      this.setState({ user: body.current_user})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));

  }



  render() {

    // console.log(this.state)

    let currentUser = this.state.user;


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
          <ReviewShowTile
          id={ this.props.params.id }
          currentUser={ currentUser }

          />
        </div>

        <div>
          <ReviewFormTile
            id={ this.props.params.id }
            currentUser={ currentUser }
          />
        </div>

      </div>
    )
  }
}

export default FloofShowContainer;
