import React, { Component } from 'react'
import FloofCategoryTile from '../components/FloofCategoryTile'

class FloofIndexContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      floofs: [{
        id: 1,
        name: 'Spot',
        job_title: 'Senior Web Developer',
        picture: 'http://mymagicdog.com/wp-content/uploads/2016/06/dog-typing-2.jpg'
      }]
    }
  }

  render() {
    return(
      <div>
        <FloofCategoryTile
          floofData={this.state.floofs}
        />
      </div>
    )
  }
}

export default FloofIndexContainer;
