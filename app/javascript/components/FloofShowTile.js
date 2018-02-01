import React from 'react'
import dog from '../../assets/images/doge.jpg';

const FloofShowTile = (props) => {
  return(
<div id="show">


    <div className="floof-details">
      {/* <img src={ props.floofData.picture } alt="Floof Photo" /> */}
          <img src={dog} />
        <h2>{props.floofData.name}</h2>
      <p>Job: { props.floofData.job_title }</p>
      <p>Current Employer: { props.floofData.current_employer }</p>
      <p>Species: { props.floofData.species }</p>
    </div>


  </div>
  )
}

export default FloofShowTile
