import React from 'react'

const RatingField = (props) => {
  let optionElements = props.ratings.map((rating) => {
    return(
      <option key={ rating } value={ rating }>{ rating }</option>
    )
  })

  return(
    <div>
      <label>{ props.label }</label>
      <select name={ props.name } value={ props.value } onChange={ props.handleChange }>
        <option value=''></option>
        { optionElements }
      </select>
    </div>
  )
}

export default RatingField
