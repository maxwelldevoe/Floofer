import React from 'react'
import FloofTile from '../components/FloofTile'

const FloofCategoryTile = (props) => {

  let floofTileComponents = props.floofData.map((floof) => {
    return(
      <FloofTile
        key={floof.id}
        id={floof.id}
        name={floof.name}
        job={floof.job_title}
        picture={floof.picture}
      />
    )
  })

  return(
    <div className='floof_cat_tile'>
      <header>{ props.floofData[0].category }</header>
      {floofTileComponents}
    </div>
  )
}

export default FloofCategoryTile
