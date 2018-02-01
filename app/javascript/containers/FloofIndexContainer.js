import React, { Component } from 'react'
import SearchInput, {createFilter} from 'react-search-input'

import FloofCategoryTile from '../components/FloofCategoryTile'

class FloofIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortedFloofs: [],
      searchTerm: ''
    }
    this.searchHandler = this.searchHandler.bind(this)
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
      .then(body =>
        this.setState({ sortedFloofs: body.categories }),
      )
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  searchHandler(event) {
    let searchWord = event
    this.setState({searchTerm: searchWord});
  }

  render() {
    let floofData = this.state.sortedFloofs
    let floofCategoryTileComponents;

    if (floofData !== []) {
      floofData = this.state.sortedFloofs.filter((floof) => {
        return floof.name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) != -1;
      })

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
        <SearchInput className="search-input" value={this.state.searchTerm} onChange={this.searchHandler} />
        {floofCategoryTileComponents}
      </div>
    )
  }
}

export default FloofIndexContainer;
