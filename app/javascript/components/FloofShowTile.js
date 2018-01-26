import React from 'react'

const FloofShowTile = (props) => {
  return(
    <div>
      <h2>{props.floofData.name}</h2>
      <img src={ props.floofData.picture } alt="Floof Photo" />
      <p>Job: { props.floofData.job_title }</p>
      <p>Current Employer: { props.floofData.current_employer }</p>
      <p>Species: { props.floofData.species }</p>
    </div>
  )
}

export default FloofShowTile
