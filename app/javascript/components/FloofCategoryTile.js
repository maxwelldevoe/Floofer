import React from 'react'
import FloofIndexTile from '../components/FloofIndexTile'

const FloofCategoryTile = (props) => {

  let floofTileComponents = props.floofData.map((floof) => {
    return(
      <FloofIndexTile
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
      <header>{ props.category }</header>
      {floofTileComponents}
    </div>
  )
}
export default FloofCategoryTile;
