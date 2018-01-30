import React, { Component } from 'react'
import FloofCategoryTile from '../components/FloofCategoryTile'

class FloofIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortedFloofs: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/categories.json')
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
        this.setState({ sortedFloofs: body.categories })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let floofData = this.state.sortedFloofs
    let floofCategoryTileComponents;

    if (floofData !== []) {
      floofCategoryTileComponents = floofData.map((category) => {
        if (category.floofs.length !== 0) {
          return(
            <FloofCategoryTile
              key={ category.id }
              category={ category.name }
              floofData={ category.floofs }
            />
          )
        }
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
