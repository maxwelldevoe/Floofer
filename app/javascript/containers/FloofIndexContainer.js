import React, { Component } from 'react'
import FloofCategoryTile from '../components/FloofCategoryTile'

class FloofIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      floofs: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/floofs.json')
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
        this.setState({ floofs: body })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let floofData = this.state.floofs
    let floofCategoryTileComponents;

    if (floofData !== []) {
      floofCategoryTileComponents = floofData.map((floofs) => {
        return(
          <FloofCategoryTile
            floofData={floofs}
          />
        )
      })
    }

    return(
      <div>
        {floofCategoryTileComponents}
      </div>
    )
  }
}

export default FloofIndexContainer;
