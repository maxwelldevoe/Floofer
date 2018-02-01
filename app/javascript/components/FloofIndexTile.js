import React from 'react'
import { Link } from 'react-router'

const FloofIndexTile = (props) => {
  return(
    <Link to={`/floofs/${props.id}`}>
      <span className='floof_tile'>
        <img src={ props.picture } alt='Floof Photo' />
        <p>{ props.name }</p>
        <p>{ props.job }</p>
      </span>
    </Link>
  )
}

export default FloofIndexTile
