import React, { Component } from 'react'
import FloofCategoryTile from '../components/FloofCategoryTile'

class FloofIndexContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      floofs: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/floofs')
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
    let floofCatTileComponents;

    if (floofData !== []) {
      //create a list of categories
      let categories = floofData.map((floof) => {
        return floof.category
      })
      categories = categories.filter((category, index, categories) => categories.indexOf(category) === index);
      categories = categories.sort()
      
      //map through our list of categories
      let sortedFloofs = categories.map((category) => {
        return floofData.filter(floof => floof.category === category)
      })

      floofCatTileComponents = sortedFloofs.map((floofs) => {
        return(
          <FloofCategoryTile
            floofData={floofs}
          />
        )
      })
    }

    return(
      <div>
        {floofCatTileComponents}
      </div>
    )
  }
}

export default FloofIndexContainer;
