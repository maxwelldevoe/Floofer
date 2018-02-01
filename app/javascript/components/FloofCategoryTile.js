import React from 'react'
import FloofIndexTile from '../components/FloofIndexTile'

const FloofCategoryTile = (props) => {

  let floofTileComponents = props.floofData.map((floof) => {
    debugger
    return(
      <FloofIndexTile
        key={floof.id}
        id={floof.id}
        name={floof.name}
        job={floof.job_title}
        photo={floof.photo}
      />
    )
  })

  return(
    <div className='floof_cat_tile'>
      <header id="category">{ props.category }</header>
      {floofTileComponents}
    </div>
  )
}

export default FloofCategoryTile
