import React, { Component } from 'react'
import FloofShowTile from '../components/FloofShowTile'
import ReviewShowTile from '../components/ReviewShowTile'

class FloofShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      floof: {}
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
          <ReviewShowTile
          id={this.props.params.id}
          />
        </div>
      </div>
    )
  }
}

export default FloofShowContainer;
