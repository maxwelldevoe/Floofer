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


        <div className="intro">

          <p>
            Hello,<br /><br />

            Floofer is here to help you find the best pets for your company's needs. In order to view a candidate and his or her skills, please click on a Floof's picture for more information. On that page, you may also see each current or prior employer's reviews on the respective Floof.
            <br /><br />
            If you are a Floof looking for a new job, please skip to the 'Add Floof' page in the navigation.
            <br /><br />
            Regards,<br />
            The Floofer Team
          </p>

        </div>





        {floofCategoryTileComponents}
      </div>
    )
  }
}

export default FloofIndexContainer;
