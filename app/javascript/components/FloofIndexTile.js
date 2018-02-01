import React from 'react'
import { Link } from 'react-router'

const FloofIndexTile = (props) => {
  return(
    <Link to={`/floofs/${props.id}`}>
      <span className='floof_tile'>
        <img src={ props.picture } alt='Floof Photo' />
        <p>{ props.name }</p>
        { props.job }
      </span>
    </Link>
  )
}

export default FloofIndexTile
